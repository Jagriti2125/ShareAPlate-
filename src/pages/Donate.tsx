import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Package, Clock, MapPin, Phone, Camera, AlertCircle } from "lucide-react";

const Donate = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Donation Posted",
      description: "Thank you for your contribution!",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl font-bold text-primary mb-4">Share Your Food</h1>
          <p className="text-lg text-muted-foreground">
            Your excess food can make a difference in someone's life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 space-y-6 animate-fade-up">
            <h2 className="text-2xl font-semibold">Donation Guidelines</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Food must be fresh and within expiration date</span>
              </li>
              <li className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Package food properly to maintain quality</span>
              </li>
              <li className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Include accurate description and quantity</span>
              </li>
              <li className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Provide clear pickup instructions</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 animate-fade-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1 flex items-center space-x-2">
                  <Package className="h-4 w-4" />
                  <span>Food Title</span>
                </label>
                <Input required placeholder="e.g., Fresh Bread and Pastries" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <Textarea required placeholder="Describe the food items you're donating..." />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Expiration Date</span>
                </label>
                <Input type="datetime-local" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Pickup Location</span>
                </label>
                <Input required placeholder="Enter pickup address" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Contact Phone</span>
                </label>
                <Input type="tel" required placeholder="(555) 555-5555" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 flex items-center space-x-2">
                  <Camera className="h-4 w-4" />
                  <span>Food Images</span>
                </label>
                <Input type="file" accept="image/*" multiple className="cursor-pointer" />
              </div>
              
              <Button type="submit" className="w-full">
                Post Donation
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Donate;