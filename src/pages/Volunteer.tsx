import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { User, Mail, Phone, Calendar, MessageSquare } from "lucide-react";

const Volunteer = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "Thank you for volunteering! We'll contact you soon.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl font-bold text-primary mb-4">Join Our Mission</h1>
          <p className="text-lg text-muted-foreground">
            Help us make a difference in the community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 animate-fade-up">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Why Volunteer?</h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">1</div>
                  <div>
                    <h3 className="font-medium">Make an Impact</h3>
                    <p className="text-sm text-muted-foreground">Help reduce food waste and feed those in need</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">2</div>
                  <div>
                    <h3 className="font-medium">Build Community</h3>
                    <p className="text-sm text-muted-foreground">Connect with like-minded individuals</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">3</div>
                  <div>
                    <h3 className="font-medium">Gain Experience</h3>
                    <p className="text-sm text-muted-foreground">Learn new skills and grow personally</p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Volunteer Roles</h2>
              <ul className="space-y-4">
                <li className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-medium">Food Pickup & Delivery</h3>
                  <p className="text-sm text-muted-foreground">Transport food from donors to recipients</p>
                </li>
                <li className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-medium">Community Outreach</h3>
                  <p className="text-sm text-muted-foreground">Spread awareness about our mission</p>
                </li>
                <li className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-medium">Event Support</h3>
                  <p className="text-sm text-muted-foreground">Help organize and manage food drives</p>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="p-6 animate-fade-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1 flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Full Name</span>
                </label>
                <Input required placeholder="John Doe" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </label>
                <Input type="email" required placeholder="you@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Phone</span>
                </label>
                <Input type="tel" required placeholder="(555) 555-5555" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Availability</span>
                </label>
                <Textarea required placeholder="Please describe your weekly availability..." />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Why do you want to volunteer?</span>
                </label>
                <Textarea required placeholder="Tell us about your motivation to join..." />
              </div>
              
              <Button type="submit" className="w-full">
                Submit Application
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;