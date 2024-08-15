import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="h-screen w-full grid place-items-center">
      <Link to="/portfolio">
        <Button>go to profile</Button>
      </Link>
    </div>
  );
};

export default HomePage;
