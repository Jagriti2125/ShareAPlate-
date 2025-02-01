import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Checkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Confirmed",
      description: "Your order has been placed successfully!",
    });
    navigate(`/receipt/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        <form onSubmit={handleCheckout} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <Input required placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input type="email" required placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <Input type="tel" required placeholder="(555) 555-5555" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Pickup Time</label>
              <Input type="datetime-local" required />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Confirm Order
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Checkout;