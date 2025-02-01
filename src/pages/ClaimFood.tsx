import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const ClaimFood = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleClaim = () => {
    toast({
      title: "Food Claimed Successfully",
      description: "Proceeding to checkout...",
    });
    navigate(`/checkout/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Claim Food Item</h1>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">Item:</span>
            <span>Fresh Bread and Pastries</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Location:</span>
            <span>Downtown Bakery</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Expires In:</span>
            <span>24 hours</span>
          </div>
          <Button onClick={handleClaim} className="w-full mt-6">
            Confirm Claim
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ClaimFood;