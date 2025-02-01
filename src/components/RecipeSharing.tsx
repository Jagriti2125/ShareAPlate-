import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChefHat, Clock, Users, Utensils } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const RecipeSharing = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [servings, setServings] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to a backend
    toast.success("Recipe shared successfully!");
    setTitle("");
    setIngredients("");
    setInstructions("");
    setCookingTime("");
    setServings("");
  };

  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-6">
        <ChefHat className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold">Share Your Recipe</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Recipe Title</label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe name"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              <Clock className="h-4 w-4 inline mr-1" />
              Cooking Time (minutes)
            </label>
            <Input
              type="number"
              value={cookingTime}
              onChange={(e) => setCookingTime(e.target.value)}
              placeholder="e.g., 30"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              <Users className="h-4 w-4 inline mr-1" />
              Servings
            </label>
            <Input
              type="number"
              value={servings}
              onChange={(e) => setServings(e.target.value)}
              placeholder="e.g., 4"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            <Utensils className="h-4 w-4 inline mr-1" />
            Ingredients
          </label>
          <Textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter ingredients (one per line)"
            required
            className="min-h-[100px]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Instructions</label>
          <Textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Enter cooking instructions step by step"
            required
            className="min-h-[150px]"
          />
        </div>

        <Button type="submit" className="w-full">
          Share Recipe
        </Button>
      </form>
    </Card>
  );
};