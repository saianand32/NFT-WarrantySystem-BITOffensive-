export const walletReducer = (state = null, action) => {
    switch (action.type) {
        case "WALLET_ADDRESS":
          return action.payload;
      default:
        return state;
    }
  };
  