import {
    Address,
    AssetAmount,
    BoxSelection,
    DefaultBoxSelector,
    ErgoBox,
    InsufficientInputs,
    MinBoxValue, TransactionContext
} from "@ergolabs/ergo-sdk";
import {AmmPool, minValueForOrder, minValueForSetup} from "@ergolabs/ergo-dex-sdk";
import {makeTarget} from "@ergolabs/ergo-dex-sdk/build/main/utils/makeTarget";
import {NetworkContext} from "@ergolabs/ergo-sdk/build/main/entities/networkContext";
import {
    all,
    ConfigOptions,
    create,
    FormatOptions,
    MathJsStatic,
} from 'mathjs';

export const EXPLORER = "https://explorer.ergoplatform.com"
export const API = 'https://api.ergoplatform.com'
export const defaultSlippage = 3;
export const DEFAULT_MINER_FEE = BigInt(2_000_000);
export const DEFAULT_OUR_FEE = BigInt(1_000_000);

export const POOL_ID = "1b694b15467c62f0cd4525e368dbdea2329c713aa200b73df4a622e950551b40";
export const ERGO_ID =
    '0000000000000000000000000000000000000000000000000000000000000000';
export const ROSEN_ID = '8b08cdd5449a9592a9e79711d7d79249d7a03c535d17efaee83e216e80a44c4b'
export const MIN_NITRO = 1.2;
export const NEW_MIN_BOX_VALUE = 400000n;

export type BaseInputParameters = {
    baseInput: AssetAmount;
    baseInputAmount: bigint;
    minOutput: AssetAmount;
};
export const getBaseInputParameters = (
    pool: AmmPool,
    {inputAmount, slippage}: { inputAmount: any; slippage: number },
): BaseInputParameters => {
    const baseInputAmount =
        inputAmount.asset.id === pool.x.asset.id
            ? pool.x.withAmount(inputAmount.amount)
            : pool.y.withAmount(inputAmount.amount);
    const minOutput = pool.outputAmount(baseInputAmount as any, slippage);

    return {
        baseInput: baseInputAmount as any,
        baseInputAmount: inputAmount.amount,
        minOutput: minOutput as any,
    };
};

export const getInputs = (
    utxos: ErgoBox[],
    assets: AssetAmount[],
    fees: { minerFee: bigint; uiFee: bigint; exFee: bigint },
    ignoreMinBoxValue?: boolean,
    setup?: boolean,
): BoxSelection => {
    let minFeeForOrder = minValueForOrder(fees.minerFee, fees.uiFee, fees.exFee);
    if (setup) {
        minFeeForOrder = minValueForSetup(fees.minerFee, fees.uiFee);
    }
    if (ignoreMinBoxValue) {
        minFeeForOrder -= MinBoxValue;
    }

    const target = makeTarget(assets, minFeeForOrder);

    const inputs = DefaultBoxSelector.select(utxos, target, NEW_MIN_BOX_VALUE);

    if (inputs instanceof InsufficientInputs) {
        throw new Error(
            `Error in getInputs function: InsufficientInputs -> ${inputs}`,
        );
    }

    return inputs;
};
export const getTxContext = (
    inputs: BoxSelection,
    network: NetworkContext,
    address: Address,
    minerFee: bigint,
): TransactionContext => ({
    inputs,
    selfAddress: address,
    changeAddress: address,
    feeNErgs: minerFee,
    network,
});

export const getUTXOS = async () => {
    const utxos = await ergo.get_utxos()
    return utxos.map((f) => {
        const temp = Object(f)
        temp.value = BigInt(temp.value)
        temp.assets = temp.assets.map((ff) => {
            const temp2 = Object(ff)
            temp2.amount = BigInt(ff.amount)
            return temp2
        })
        return temp
    })
}
const formatOptions: FormatOptions = {
    notation: 'fixed',
    lowerExp: 1e-100,
    upperExp: 1e100,
};
export function renderFractions(
    fractions: bigint | number | string,
    numDecimals?: number,
): string {
    return math.format!(
        math.evaluate!(`${fractions} / 10^${numDecimals || 0}`),
        formatOptions,
    );
}
const mathConf: ConfigOptions = {
    epsilon: 1e-24,
    matrix: 'Matrix',
    number: 'BigNumber',
    precision: 64,
};
export const math = create(all, mathConf) as Partial<MathJsStatic>;
const calculatePureOutputAmount = (
    input: any,
    ammPool: AmmPool,
): string => {
    if (input.asset.id === ammPool.x.asset.id) {
        return math.evaluate!(
            `(${renderFractions(ammPool.y.amount.valueOf(), ammPool.y.asset.decimals)} * ${renderFractions(input.amount, input.asset.decimals)}) / (${renderFractions(ammPool.x.amount.valueOf(), ammPool.x.asset.decimals)} + ${renderFractions(input.amount, input.asset.decimals)})`,
        ).toString();
    } else {
        return math.evaluate!(
            `(${renderFractions(ammPool.x.amount.valueOf(), ammPool.x.asset.decimals)} * ${renderFractions(input.amount, input.asset.decimals)}) / (${renderFractions(ammPool.y.amount.valueOf(), ammPool.y.asset.decimals)} + ${renderFractions(input.amount, input.asset.decimals)})`,
        ).toString();
    }
};

export class Pool extends AmmPool{
    constructor(public pool: AmmPool) {
        super(pool.id,pool.lp, pool.x, pool.y, pool.poolFeeNum);
    }


    calculatePriceImpact(input: any): number {
        const ratio =
            input.asset.id === this.x.asset.id
                ? math.evaluate!(
                    `${renderFractions(this.y.amount.valueOf(), this.y.asset.decimals)} / ${renderFractions(this.x.amount.valueOf(), this.x.asset.decimals)}`,
                ).toString()
                : math.evaluate!(
                    `${renderFractions(this.x.amount.valueOf(), this.x.asset.decimals)} / ${renderFractions(this.y.amount.valueOf(), this.y.asset.decimals)}`,
                ).toString();
        const outputAmount = calculatePureOutputAmount(input, this);
        const outputRatio = math.evaluate!(
            `${outputAmount} / ${renderFractions(input.amount, input.asset.decimals)}`,
        ).toString();

        return Math.abs(
            math.evaluate!(`(${outputRatio} * 100 / ${ratio}) - 100`).toFixed(2),
        );
    }
}