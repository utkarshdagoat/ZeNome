import { create } from "zustand";

type SwapStoreState = {
  fromChain: string;
  toChain: string;
  fromToken: string;
  toToken: string;
  fromAmount: number;
  toAmount: number;
  fromAmountUSD: number;
  toAmountUSD: number;
  swapEnabled: boolean;
  walletConnected: boolean;
  activeAddress: string;

  setFromChain: (fromChain: string) => void;
  setToChain: (toChain: string) => void;
  setFromToken: (fromToken: string) => void;
  setToToken: (toToken: string) => void;
  setFromAmount: (fromAmount: number) => void;
  setToAmount: (toAmount: number) => void;
  setFromAmountUSD: (fromAmountUSD: number) => void;
  setToAmountUSD: (toAmountUSD: number) => void;
  setSwapEnabled: (swapEnabled: boolean) => void;
  setWalletConnected: (walletConnected: boolean) => void;
  setActiveAddress: (activeAddress: string) => void;
};

export const useSwapStore = create<SwapStoreState>((set) => ({
  fromChain: "",
  toChain: "",
  fromToken: "",
  toToken: "",
  fromAmount: 0,
  toAmount: 0,
  fromAmountUSD: 0,
  toAmountUSD: 0,
  swapEnabled: false,
  walletConnected: false,
  activeAddress: "",

  setFromChain: (fromChain: string) => set({ fromChain }),
  setToChain: (toChain: string) => set({ toChain }),
  setFromToken: (fromToken: string) => set({ fromToken }),
  setToToken: (toToken: string) => set({ toToken }),
  setFromAmount: (fromAmount: number) => set({ fromAmount }),
  setToAmount: (toAmount: number) => set({ toAmount }),
  setFromAmountUSD: (fromAmountUSD: number) => set({ fromAmountUSD }),
  setToAmountUSD: (toAmountUSD: number) => set({ toAmountUSD }),
  setSwapEnabled: (swapEnabled: boolean) => set({ swapEnabled }),
  setWalletConnected: (walletConnected: boolean) => set({ walletConnected }),
  setActiveAddress: (activeAddress: string) => set({ activeAddress }),
}));
