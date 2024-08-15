import { create } from "zustand";
import { type UserAsset, UserTransaction } from "@/lib/types";

type PortfolioStoreState = {
  assets: UserAsset[];
  transactions: UserTransaction[];
  isLoading: boolean;

  setAssets: (assets: UserAsset[]) => void;
  setTranasactions: (transactions: UserTransaction[]) => void;
  setIsLoading: (isLoading: boolean) => void;
};

export const usePortfolioStore = create<PortfolioStoreState>((set) => ({
  // Populating with sample data for now
  assets: [
    {
      token: "ETH",
      chain: "Ethereum",
      balance: 2.5,
      balanceUSD: 4625.0,
    },
    {
      token: "USDC",
      chain: "Polygon",
      balance: 1500,
      balanceUSD: 1500.0,
    },
    {
      token: "BTC",
      chain: "Bitcoin",
      balance: 0.1,
      balanceUSD: 2900.0,
    },
    {
      token: "BNB",
      chain: "Binance Smart Chain",
      balance: 10,
      balanceUSD: 2300.0,
    },
    {
      token: "SOL",
      chain: "Solana",
      balance: 20,
      balanceUSD: 500.0,
    },
    {
      token: "AVAX",
      chain: "Avalanche",
      balance: 30,
      balanceUSD: 450.0,
    },
  ],
  isLoading: false,
  transactions: [],

  setAssets: (assets) => set({ assets }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setTranasactions: (transactions) => set({ transactions })
}));
