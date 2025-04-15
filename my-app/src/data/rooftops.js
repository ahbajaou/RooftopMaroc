import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import { MapPin, Star } from "lucide-react";
import React from "react";


export const rooftops = [
  {
    id: 1,
    name: "La Terrasse des Épices",
    location: "Medina",
    rating: 4.8,
    image: img1,
    description: "A peaceful haven above the bustling souks",
    vibes: ["chill", "food", "view"],
    price: "$$$"
  },
  {
    name: "Sky Lounge",
    location: "Gueliz",
    rating: 4.8,
    image: img2,
    description: "Stunning sunset views with cozy vibes.",
    price: "$$",
    type: "Restaurant",
    mood: ["Romantic", "Sunset"],
    area: "Gueliz"
  },
  {
    name: "Nomad Marrakech",
    location: "Medina",
    rating: 4.7,
    image: img3,
    description: "Modern Moroccan cuisine with a rooftop view.",
    price: "$$$",
    type: "Restaurant",
    mood: ["Chill", "Dining"],
    area: "Medina"
  },
  {
    name: "Kabana",
    location: "Hivernage",
    rating: 4.6,
    image: img4,
    description: "Trendy rooftop bar with music and cocktails.",
    price: "$$$",
    type: "Bar",
    mood: ["Party", "Nightlife"],
    area: "Hivernage"
  }
];