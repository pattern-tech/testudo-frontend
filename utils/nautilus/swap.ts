import {
    makeWrappedNativePoolActionsSelector,
    SwapExtremums,
    SwapParams,
    swapVars,
    makeNativePools
} from '@ergolabs/ergo-dex-sdk';
import {
    ErgoTx,
    Input as TxInput,
    Prover,
    UnsignedErgoTx,
    unsignedErgoTxToProxy,
    publicKeyFromAddress,
    AssetAmount,
    Explorer,
    DefaultTxAssembler,
    RustModule, TransactionContext
} from '@ergolabs/ergo-sdk';
import {NativeExFeeType} from "@ergolabs/ergo-dex-sdk/build/main/types";
import {NetworkContext} from "@ergolabs/ergo-sdk/build/main/entities/networkContext";
import {
    API,
    DEFAULT_MINER_FEE, DEFAULT_OUR_FEE,
    defaultSlippage,
    ERGO_ID, EXPLORER,
    getBaseInputParameters,
    getInputs, getTxContext,
    getUTXOS,
    MIN_NITRO, Pool,
    ROSEN_ID, POOL_ID
} from "@/utils/swap";
class myprover implements Prover {
    /** Sign the given transaction.
     */
    async sign(tx: UnsignedErgoTx): Promise<ErgoTx> {
        const proxy = unsignedErgoTxToProxy(tx);
        try {
            return await ergo.sign_tx(proxy);
        } catch {
            return await ergoConnector.nautilus
                .getContext()
                .then((context) => context.sign_tx(proxy));
        }
    }

    async submit(tx: ErgoTx): Promise<ErgoTx> {
        return await ergo.submit_tx(tx);
    }

    /** Sign particular input of the given transaction.
     */
    signInput(tx: UnsignedErgoTx, input: number): Promise<TxInput> {
        const proxy = unsignedErgoTxToProxy(tx);

        try {
            return ergo.sign_tx_input(proxy, input);
        } catch {
            return ergoConnector.nautilus
                .getContext()
                .then((context) => context.sign_tx_input(proxy, input));
        }
    }
}




export const swap = async (rosen_amount: number, output_address: string, return_address: string): Promise<ErgoTx> => {
    await RustModule.load(false)
    const api = new Explorer(API)
    const networkContext = await api.getNetworkContext()
    const pool = new Pool(await makeNativePools(api).get(POOL_ID))
    const prover = new myprover()
    const mainnetTxAssembler = new DefaultTxAssembler(true);
    const poolActions = makeWrappedNativePoolActionsSelector(output_address, prover, mainnetTxAssembler)
    let utxos = await getUTXOS()
    const to = {
        asset:{
            id: ROSEN_ID
        },
        amount: BigInt(rosen_amount)
    }
    const max_to = {
        asset:{
            id: ROSEN_ID
        },
        amount: BigInt(rosen_amount) + BigInt(rosen_amount/10n)
    }
    const from = {
        asset:{
            id: ERGO_ID,
            decimals: 9
        },
        amount: pool.outputAmount(max_to as any, defaultSlippage).amount
    }
    const { baseInput, baseInputAmount, minOutput } = getBaseInputParameters(
        pool,
        {
            inputAmount: from,
            slippage: defaultSlippage,
        },
    );
    const swapVariables: [number, SwapExtremums] | undefined = swapVars(
        DEFAULT_MINER_FEE * 3n,
        MIN_NITRO,
        minOutput,
    );
    const [exFeePerToken, extremum] = swapVariables;
    const inputs = getInputs(
        utxos,
        [new AssetAmount(from.asset, baseInputAmount)],
        {
            minerFee: DEFAULT_MINER_FEE,
            uiFee: DEFAULT_OUR_FEE,
            exFee: extremum.maxExFee,
        },
    );
    const swapParams: SwapParams<NativeExFeeType> = {
        poolId: pool.id,
        pk: publicKeyFromAddress(output_address),
        baseInput,
        minQuoteOutput: extremum.minOutput.amount,
        exFeePerToken,
        uiFee: DEFAULT_OUR_FEE,
        quoteAsset: to.asset.id,
        poolFeeNum: pool.poolFeeNum,
        maxExFee: extremum.maxExFee,
    };
    const txContext: TransactionContext = getTxContext(
        inputs,
        networkContext as NetworkContext,
        return_address,
        DEFAULT_MINER_FEE,
    );

    const actions = poolActions(pool);
    return prover.submit(await actions
        .swap(swapParams, txContext))
};