import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Route } from "@/lib/types";
import { useSwapStore } from "@/stores/swap-store";
import { useState } from "react";
import Settings from "./settings";
import TransactionHistory from "./transaction-history";

const Swap = () => {
  const {
    fromChain,
    fromAmount,
    fromToken,
    toChain,
    toToken,
    activeAddress,
    setActiveAddress,
    setSwapEnabled,
  } = useSwapStore();

  // Route states
  const showRoutes = fromChain && fromToken && toChain && toToken && fromAmount;
  const [openRouteCard, setOpenRouteCard] = useState(false);
  const [selectedRouteIndex, setSelectedRouteIndex] = useState(0);
  const [isRouteLoading, setIsRouteLoading] = useState(false);
  const [selectedRoutes, setSelectedRoutes] = useState<Route | null>(null);

  // Swap progress states
  const [openSwapProgress, setOpenSwapProgress] = useState(false);

  return (
    <div className="*:w-[420px] mx-auto relative overflow-hidden">
      <Card
        className={`min-h-[42rem] max-h-[50rem] z-50 bg transition-all bg-gradient-to-bl from-accent/40 from-[-20%] via-card to-muted/40 duration-500 ${
          openRouteCard || (openSwapProgress && "brightness-50")
        }`}
      >
        <CardHeader className="flex flex-row items-center mb-2 justify-between">
          <CardTitle className="font-bold">Swap</CardTitle>
          <div className="space-x-2">
            <Settings />
            <TransactionHistory />
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Swap;
