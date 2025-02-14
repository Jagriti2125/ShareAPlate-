import type { FoodItem } from "@/types/food";

export const northIndianDishes: FoodItem[] = [
  {
    id: "n1",
    title: "Butter Chicken",
    description: "Rich and creamy butter chicken with tender pieces of tandoori chicken in a tomato-based gravy",
    location: "Punjab Kitchen",
    expiresIn: "2 hours",
    type: "perishable",
    dietary: "non-vegetarian",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    region: "north",
    state: "punjab",
    spiceLevel: "medium",
    category: "main-course",
    mealType: "dinner",
    portions: 2,
    preparationTime: "medium",
    rating: 4.8,
    reviews: 245,
    servingTemperature: "hot",
    bestTimeToEat: "Evening dinner",
    nutritionalInfo: {
      calories: 450,
      protein: 28,
      carbs: 12,
      fat: 32,
      fiber: 3
    }
  },
  {
    id: "n2",
    title: "Dal Makhani",
    description: "Creamy black lentils cooked overnight with spices and butter",
    location: "Delhi Kitchen",
    expiresIn: "3 hours",
    type: "perishable",
    dietary: "vegetarian",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    region: "north",
    state: "delhi",
    spiceLevel: "medium",
    category: "main-course",
    mealType: "lunch",
    portions: 3,
    preparationTime: "long",
    rating: 4.6,
    reviews: 189,
    servingTemperature: "hot",
    bestTimeToEat: "Lunch or dinner",
    nutritionalInfo: {
      calories: 320,
      protein: 15,
      carbs: 45,
      fat: 12,
      fiber: 8
    }
  },
  {
    id: "n3",
    title: "Chole Bhature",
    description: "Spiced chickpea curry served with deep-fried bread",
    location: "Delhi Street Food",
    expiresIn: "2 hours",
    type: "perishable",
    dietary: "vegetarian",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    region: "north",
    state: "punjab",
    spiceLevel: "high",
    category: "main-course",
    mealType: "lunch",
    portions: 2,
    preparationTime: "medium",
    rating: 4.7,
    reviews: 167,
    servingTemperature: "hot",
    bestTimeToEat: "Brunch",
    nutritionalInfo: {
      calories: 650,
      protein: 18,
      carbs: 89,
      fat: 28,
      fiber: 12
    }
  },
  {
    id: "n4",
    title: "Rajasthani Thali",
    description: "Complete meal with dal baati churma, gatte ki sabzi, and more",
    location: "Rajasthan Kitchen",
    expiresIn: "3 hours",
    type: "perishable",
    dietary: "vegetarian",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    region: "north",
    state: "rajasthan",
    spiceLevel: "high",
    category: "main-course",
    mealType: "lunch",
    portions: 1,
    preparationTime: "long",
    rating: 4.9,
    reviews: 203,
    servingTemperature: "hot",
    bestTimeToEat: "Lunch",
    nutritionalInfo: {
      calories: 850,
      protein: 22,
      carbs: 120,
      fat: 35,
      fiber: 15
    }
  },
  {
    id: "n5",
    title: "Kashmiri Rogan Josh",
    description: "Aromatic lamb curry with Kashmiri spices",
    location: "Kashmir House",
    expiresIn: "4 hours",
    type: "perishable",
    dietary: "non-vegetarian",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    region: "north",
    state: "kashmir",
    spiceLevel: "medium",
    category: "main-course",
    mealType: "dinner",
    portions: 2,
    preparationTime: "long",
    rating: 4.8,
    reviews: 178,
    servingTemperature: "hot",
    bestTimeToEat: "Dinner",
    nutritionalInfo: {
      calories: 520,
      protein: 35,
      carbs: 15,
      fat: 38,
      fiber: 4
    }
  }
];
