import {AssetAmount, Explorer, RustModule} from "@ergolabs/ergo-sdk";
import {OutputBuilder, TransactionBuilder} from "@fleet-sdk/core";
import {height} from "@mui/system";
import {API, getUTXOS, ROSEN_ID, txFee} from "@/utils/utils";



export async function send_tx(to: string, erg_amount: bigint, rosen_amount: bigint, return_to: string) {
    await RustModule.load(false)
    const api = new Explorer(API)
    const networkContext = await api.getNetworkContext()
    let utxos = await getUTXOS()
    const unsignedTransaction = new TransactionBuilder(networkContext.height)
        .from(utxos)
        .to(rosen_amount ? new OutputBuilder(String(erg_amount), to).addTokens({
            tokenId: ROSEN_ID,
            amount: rosen_amount
        }) : new OutputBuilder(String(erg_amount), to))
        .sendChangeTo(return_to)
        .payFee(String(txFee))
        .build("EIP-12")
    console.log(JSON.stringify(unsignedTransaction.toEIP12Object()))
    await ergo.sign_tx(unsignedTransaction.toEIP12Object())
}