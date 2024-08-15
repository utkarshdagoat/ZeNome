import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const CopyAddress = ({ address }: { address: string }) => {
  const truncatedAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;
  const { toast } = useToast();

  return (
    <p className="text-lg text-accent-foreground inline-flex items-center gap-2">
      {truncatedAddress}{" "}
      <span
        className="transition-all duration-300 hover:cursor-pointer hover:text-foreground"
        onClick={() => {
          navigator.clipboard.writeText(address);
          toast({
            description: "Address copied to clipboard",
          });
        }}
      >
        <Copy className="w-4 h-4" />
      </span>
    </p>
  );
};

export default CopyAddress;
