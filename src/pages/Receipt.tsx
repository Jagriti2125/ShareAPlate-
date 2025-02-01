import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";

const Receipt = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Order Confirmation</h1>
          <p className="text-muted-foreground">Order #{id}</p>
        </div>
        
        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="font-medium">Item:</span>
            <span>Fresh Bread and Pastries</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Pickup Location:</span>
            <span>Downtown Bakery</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Pickup Time:</span>
            <span>Today at 3:00 PM</span>
          </div>
        </div>

        <div className="border-t pt-4">
          <p className="text-center text-muted-foreground mb-6">
            Please show this confirmation at pickup
          </p>
          <Link to="/">
            <Button className="w-full">Return Home</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Receipt;