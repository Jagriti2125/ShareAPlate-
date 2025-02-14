import type { FoodItem } from "@/types/food";

export const southIndianDishes: FoodItem[] = [
  {
    id: "s1",
    title: "Masala Dosa",
    description: "Crispy fermented rice crepe filled with spiced potato filling",
    location: "Chennai Express",
    expiresIn: "1 hour",
    type: "perishable",
    dietary: "vegetarian",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?ixlib=rb-1.2.1&auto=format&fit=crop&w=896&q=80",
    region: "south",
    state: "tamil-nadu",
    spiceLevel: "medium",
    category: "breakfast",
    mealType: "breakfast",
    portions: 1,
    preparationTime: "medium",
    rating: 4.7,
    reviews: 312,
    servingTemperature: "hot",
    bestTimeToEat: "Breakfast",
    nutritionalInfo: {
      calories: 280,
      protein: 8,
      carbs: 48,
      fat: 8,
      fiber: 4
    }
  },
  {
    id: "s2",
    title: "Hyderabadi Biryani",
    description: "Fragrant rice dish with tender meat and aromatic spices",
    location: "Hyderabad House",
    expiresIn: "2 hours",
    type: "perishable",
    dietary: "non-vegetarian",
    image: "https://images.unsplash.com/photo-1603052871745-1c1c1c1c1c1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=896&q=80",
    region: "south",
    state: "telangana",
    spiceLevel: "high",
    category: "main-course",
    mealType: "lunch",
    portions: 2,
    preparationTime: "long",
    rating: 4.9,
    reviews: 428,
    isHalal: true,
    servingTemperature: "hot",
    bestTimeToEat: "Lunch",
    nutritionalInfo: {
      calories: 550,
      protein: 32,
      carbs: 65,
      fat: 22,
      fiber: 5
    }
  },
  {
    id: "s3",
    title: "Kerala Fish Curry",
    description: "Spicy fish curry with coconut milk and curry leaves",
    location: "Kerala Kitchen",
    expiresIn: "3 hours",
    type: "perishable",
    dietary: "non-vegetarian",
    image: "https://images.unsplash.com/photo-1603052871745-1c1c1c1c1c1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=896&q=80",
    region: "south",
    state: "kerala",
    spiceLevel: "high",
    category: "main-course",
    mealType: "lunch",
    portions: 2,
    preparationTime: "medium",
    rating: 4.8,
    reviews: 245,
    servingTemperature: "hot",
    bestTimeToEat: "Lunch",
    nutritionalInfo: {
      calories: 380,
      protein: 28,
      carbs: 15,
      fat: 25,
      fiber: 3
    }
  },
  {
    id: "s4",
    title: "Mysore Masala Dosa",
    description: "Spicy version of masala dosa with red chutney",
    location: "Bangalore Tiffins",
    expiresIn: "1 hour",
    type: "perishable",
    dietary: "vegetarian",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?ixlib=rb-1.2.1&auto=format&fit=crop&w=896&q=80",
    region: "south",
    state: "karnataka",
    spiceLevel: "high",
    category: "breakfast",
    mealType: "breakfast",
    portions: 1,
    preparationTime: "medium",
    rating: 4.6,
    reviews: 189,
    isJain: true,
    servingTemperature: "hot",
    bestTimeToEat: "Breakfast",
    nutritionalInfo: {
      calories: 310,
      protein: 9,
      carbs: 52,
      fat: 10,
      fiber: 5
    }
  },
  {
    id: "s5",
    title: "Chettinad Chicken",
    description: "Spicy chicken curry with unique Chettinad spices",
    location: "Chettinad Kitchen",
    expiresIn: "3 hours",
    type: "perishable",
    dietary: "non-vegetarian",
    image: "https://images.unsplash.com/photo-1603052871745-1c1c1c1c1c1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=896&q=80",
    region: "south",
    state: "tamil-nadu",
    spiceLevel: "high",
    category: "main-course",
    mealType: "lunch",
    portions: 2,
    preparationTime: "medium",
    rating: 4.7,
    reviews: 234,
    isHalal: true,
    servingTemperature: "hot",
    bestTimeToEat: "Lunch",
    nutritionalInfo: {
      calories: 420,
      protein: 32,
      carbs: 18,
      fat: 28,
      fiber: 4
    }
  }
];
