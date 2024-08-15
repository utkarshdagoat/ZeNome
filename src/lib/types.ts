export type UserAsset = {
  token: string;
  chain: string;
  balance: number;
  balanceUSD: number;
};

// Change this to the correct type
export type UserTransaction = {
  token: string;
  chain: string;
  amount: number;
  amountUSD: number;
};
