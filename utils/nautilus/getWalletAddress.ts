export const getWalletAddress = async () => {
  const ergoConnector = window.ergoConnector;

  const walletAddress = await ergoConnector.nautilus
    .getContext()
    .then(async (context) => {
      if ((await context.get_used_addresses().length) > 0) {
        return await context.get_used_addresses();
      }

      return await context.get_unused_addresses();
    })
    .catch((error: Error) => {
      throw error;
    });

  return walletAddress[0];
};
