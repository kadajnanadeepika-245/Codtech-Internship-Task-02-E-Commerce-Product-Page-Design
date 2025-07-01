import React, { useState } from "react";
import {
  ShoppingCart,
  Heart,
  Share2,
  Star,
  Filter,
  Grid3X3,
  List,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const products = [
    {
      id: 1,
      name: "SoundMax Pro Wireless",
      category: "wireless",
      price: 299,
      originalPrice: 399,
      discount: 25,
      rating: 4.8,
      reviews: 2847,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&auto=format",
      features: ["360° Sound", "30hr Battery", "ANC"],
      isNew: false,
      isBestSeller: true,
      colors: ["#000000", "#C0C0C0", "#1E40AF", "#DC2626"],
      description:
        "Premium wireless headphones with industry-leading noise cancellation and 30-hour battery life.",
    },
    {
      id: 2,
      name: "SoundMax Studio Pro",
      category: "studio",
      price: 499,
      originalPrice: 599,
      discount: 17,
      rating: 4.9,
      reviews: 1542,
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&auto=format",
      features: ["Hi-Res Audio", "Flat Response", "Detachable Cable"],
      isNew: true,
      isBestSeller: false,
      colors: ["#000000", "#8B4513"],
      description:
        "Professional studio headphones with flat frequency response for critical listening.",
    },
    {
      id: 3,
      name: "SoundMax Gaming Elite",
      category: "gaming",
      price: 199,
      originalPrice: 249,
      discount: 20,
      rating: 4.7,
      reviews: 3241,
      image:
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop&auto=format",
      features: ["7.1 Surround", "RGB Lighting", "Noise-Cancel Mic"],
      isNew: false,
      isBestSeller: true,
      colors: ["#000000", "#FF0000", "#00FF00"],
      description:
        "Ultimate gaming headset with 7.1 surround sound and customizable RGB lighting.",
    },
    {
      id: 4,
      name: "SoundMax Sport",
      category: "wireless",
      price: 149,
      originalPrice: 179,
      discount: 17,
      rating: 4.6,
      reviews: 1876,
      image:
        "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=400&h=400&fit=crop&auto=format",
      features: ["Sweatproof", "Secure Fit", "Quick Charge"],
      isNew: false,
      isBestSeller: false,
      colors: ["#000000", "#FF4500", "#32CD32"],
      description:
        "Sports headphones designed for active lifestyles with sweatproof technology.",
    },
    {
      id: 5,
      name: "SoundMax Ultra Wireless",
      category: "wireless",
      price: 399,
      originalPrice: 499,
      discount: 20,
      rating: 4.8,
      reviews: 923,
      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop&auto=format",
      features: ["Spatial Audio", "40hr Battery", "Premium Materials"],
      isNew: true,
      isBestSeller: false,
      colors: ["#FFD700", "#C0C0C0", "#000000"],
      description:
        "Ultra-premium wireless headphones with spatial audio and luxury materials.",
    },
    {
      id: 6,
      name: "SoundMax Lite",
      category: "wireless",
      price: 99,
      originalPrice: 129,
      discount: 23,
      rating: 4.4,
      reviews: 2156,
      image:
        "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=400&h=400&fit=crop&auto=format",
      features: ["Lightweight", "20hr Battery", "Foldable"],
      isNew: false,
      isBestSeller: false,
      colors: ["#000000", "#FFFFFF", "#1E40AF"],
      description:
        "Affordable wireless headphones with essential features and great value.",
    },
    {
      id: 7,
      name: "SoundMax Kids Safe",
      category: "kids",
      price: 79,
      originalPrice: 99,
      discount: 20,
      rating: 4.5,
      reviews: 1342,
      image:
        "https://images.unsplash.com/photo-1608156639585-b3a8d2be96a1?w=400&h=400&fit=crop&auto=format",
      features: ["Volume Limit", "Durable", "Fun Colors"],
      isNew: false,
      isBestSeller: false,
      colors: ["#FF69B4", "#00CED1", "#FFD700"],
      description:
        "Safe headphones for kids with volume limiting and durable construction.",
    },
    {
      id: 8,
      name: "SoundMax Travel",
      category: "wireless",
      price: 179,
      originalPrice: 219,
      discount: 18,
      rating: 4.6,
      reviews: 876,
      image:
        "https://images.unsplash.com/photo-1590658165737-15a047b04bd2?w=400&h=400&fit=crop&auto=format",
      features: ["Compact", "Travel Case", "Quick Fold"],
      isNew: false,
      isBestSeller: false,
      colors: ["#000000", "#696969"],
      description:
        "Compact travel headphones with premium carrying case and quick-fold design.",
    },
    {
      id: 9,
      name: "SoundMax DJ Master",
      category: "studio",
      price: 349,
      originalPrice: 429,
      discount: 19,
      rating: 4.7,
      reviews: 654,
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&auto=format",
      features: ["Swivel Cups", "Coiled Cable", "Heavy Duty"],
      isNew: true,
      isBestSeller: false,
      colors: ["#000000", "#FF0000"],
      description:
        "Professional DJ headphones with swivel ear cups and coiled cable.",
    },
    {
      id: 10,
      name: "SoundMax Office Pro",
      category: "wireless",
      price: 159,
      originalPrice: 199,
      discount: 20,
      rating: 4.5,
      reviews: 1234,
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop&auto=format",
      features: ["Clear Calls", "All-Day Comfort", "Mute Button"],
      isNew: false,
      isBestSeller: false,
      colors: ["#000000", "#2F4F4F"],
      description:
        "Professional headphones optimized for video calls and office work.",
    },
    {
      id: 11,
      name: "SoundMax Bass Beast",
      category: "wireless",
      price: 229,
      originalPrice: 279,
      discount: 18,
      rating: 4.6,
      reviews: 987,
      image:
        "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=400&fit=crop&auto=format",
      features: ["Extra Bass", "Boom Sound", "Party Mode"],
      isNew: false,
      isBestSeller: false,
      colors: ["#000000", "#8B0000", "#FFD700"],
      description:
        "Bass-enhanced headphones for music lovers who want deep, powerful sound.",
    },
    {
      id: 12,
      name: "SoundMax Zen",
      category: "wireless",
      price: 189,
      originalPrice: 229,
      discount: 17,
      rating: 4.7,
      reviews: 567,
      image:
        "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?w=400&h=400&fit=crop&auto=format",
      features: ["Calm Sounds", "Nature Audio", "Meditation App"],
      isNew: true,
      isBestSeller: false,
      colors: ["#F5F5DC", "#E6E6FA", "#F0F8FF"],
      description:
        "Wellness headphones with built-in meditation sounds and calming audio.",
    },
    {
      id: 13,
      name: "SoundMax Vintage Classic",
      category: "studio",
      price: 379,
      originalPrice: 449,
      discount: 16,
      rating: 4.6,
      reviews: 743,
      image:
        "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?w=400&h=400&fit=crop&auto=format",
      features: ["Retro Design", "Tube Amp", "Leather Finish"],
      isNew: false,
      isBestSeller: false,
      colors: ["#8B4513", "#D2691E", "#000000"],
      description:
        "Vintage-inspired headphones with tube amplification and premium leather finish.",
    },
    {
      id: 14,
      name: "SoundMax Gaming Pro X",
      category: "gaming",
      price: 279,
      originalPrice: 329,
      discount: 15,
      rating: 4.8,
      reviews: 2156,
      image:
        "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=400&fit=crop&auto=format",
      features: ["THX Spatial", "Tournament Mode", "Wireless"],
      isNew: true,
      isBestSeller: true,
      colors: ["#000000", "#FF6600", "#0080FF"],
      description:
        "Professional esports headset with THX Spatial Audio and tournament-grade features.",
    },
    {
      id: 15,
      name: "SoundMax Audiophile Reference",
      category: "studio",
      price: 799,
      originalPrice: 999,
      discount: 20,
      rating: 4.9,
      reviews: 412,
      image:
        "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=400&h=400&fit=crop&auto=format",
      features: ["Planar Magnetic", "Open Back", "Hand Assembled"],
      isNew: true,
      isBestSeller: false,
      colors: ["#2F4F4F", "#708090"],
      description:
        "Reference-grade planar magnetic headphones for the most discerning audiophiles.",
    },
    {
      id: 16,
      name: "SoundMax Workout Warrior",
      category: "wireless",
      price: 129,
      originalPrice: 159,
      discount: 19,
      rating: 4.4,
      reviews: 1876,
      image:
        "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=400&h=400&fit=crop&auto=format",
      features: ["IP67 Waterproof", "Heart Rate Monitor", "12hr Battery"],
      isNew: false,
      isBestSeller: false,
      colors: ["#FF4500", "#32CD32", "#000000"],
      description:
        "Ultra-durable workout headphones with heart rate monitoring and waterproof design.",
    },
    {
      id: 17,
      name: "SoundMax Luxury Edition",
      category: "wireless",
      price: 699,
      originalPrice: 899,
      discount: 22,
      rating: 4.8,
      reviews: 234,
      image:
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop&auto=format",
      features: ["24K Gold Plated", "Italian Leather", "Crystal Clear"],
      isNew: true,
      isBestSeller: false,
      colors: ["#FFD700", "#8B4513", "#FFFFFF"],
      description:
        "Luxury headphones with 24K gold plating and hand-stitched Italian leather.",
    },
    {
      id: 18,
      name: "SoundMax Teen Vibe",
      category: "kids",
      price: 89,
      originalPrice: 109,
      discount: 18,
      rating: 4.3,
      reviews: 1567,
      image:
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop&auto=format",
      features: ["Safe Volume", "Trendy Design", "Built-in Mic"],
      isNew: false,
      isBestSeller: false,
      colors: ["#FF1493", "#00CED1", "#9370DB", "#32CD32"],
      description:
        "Stylish headphones designed for teens with safe listening levels and trendy colors.",
    },
    {
      id: 19,
      name: "SoundMax Commuter",
      category: "wireless",
      price: 139,
      originalPrice: 169,
      discount: 18,
      rating: 4.5,
      reviews: 2341,
      image:
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop&auto=format",
      features: ["Quick Charge", "Voice Assistant", "Foldable"],
      isNew: false,
      isBestSeller: true,
      colors: ["#000000", "#708090", "#2F4F4F"],
      description:
        "Perfect commuter headphones with quick charge and voice assistant integration.",
    },
    {
      id: 20,
      name: "SoundMax Podcast Pro",
      category: "wireless",
      price: 169,
      originalPrice: 199,
      discount: 15,
      rating: 4.6,
      reviews: 876,
      image:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop&auto=format",
      features: ["Voice Clarity", "Podcast Mode", "Long Battery"],
      isNew: false,
      isBestSeller: false,
      colors: ["#000000", "#4169E1"],
      description:
        "Optimized for podcast listening with enhanced voice clarity and long battery life.",
    },
    {
      id: 21,
      name: "SoundMax Retro Gaming",
      category: "gaming",
      price: 159,
      originalPrice: 189,
      discount: 16,
      rating: 4.4,
      reviews: 1234,
      image:
        "https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=400&h=400&fit=crop&auto=format",
      features: ["Retro Style", "Multi-Platform", "Detachable Mic"],
      isNew: false,
      isBestSeller: false,
      colors: ["#8B4513", "#DAA520", "#000000"],
      description:
        "Retro-styled gaming headset compatible with all gaming platforms.",
    },
    {
      id: 22,
      name: "SoundMax Studio Monitor",
      category: "studio",
      price: 429,
      originalPrice: 519,
      discount: 17,
      rating: 4.8,
      reviews: 567,
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&auto=format",
      features: ["Monitor Grade", "Balanced Sound", "Professional"],
      isNew: false,
      isBestSeller: false,
      colors: ["#000000", "#36454F"],
      description:
        "Professional studio monitor headphones for accurate sound reproduction.",
    },
    {
      id: 23,
      name: "SoundMax Party Beast",
      category: "wireless",
      price: 199,
      originalPrice: 249,
      discount: 20,
      rating: 4.5,
      reviews: 1432,
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop&auto=format",
      features: ["LED Lights", "Bass Boost", "Party Mode"],
      isNew: false,
      isBestSeller: false,
      colors: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"],
      description:
        "Party headphones with LED lights and powerful bass for the ultimate experience.",
    },
    {
      id: 24,
      name: "SoundMax Eco Green",
      category: "wireless",
      price: 119,
      originalPrice: 149,
      discount: 20,
      rating: 4.3,
      reviews: 867,
      image:
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop&auto=format",
      features: ["Recycled Materials", "Solar Charging", "Eco-Friendly"],
      isNew: true,
      isBestSeller: false,
      colors: ["#228B22", "#32CD32", "#8FBC8F"],
      description:
        "Eco-friendly headphones made from recycled materials with solar charging capability.",
    },
    {
      id: 25,
      name: "SoundMax Sleep Sound",
      category: "wireless",
      price: 99,
      originalPrice: 129,
      discount: 23,
      rating: 4.4,
      reviews: 1123,
      image:
        "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?w=400&h=400&fit=crop&auto=format",
      features: ["Sleep Tracking", "White Noise", "Comfortable"],
      isNew: false,
      isBestSeller: false,
      colors: ["#E6E6FA", "#F0F8FF", "#F5F5DC"],
      description:
        "Specialized headphones for sleep with white noise generation and sleep tracking.",
    },
    {
      id: 26,
      name: "SoundMax Racing Edition",
      category: "gaming",
      price: 249,
      originalPrice: 299,
      discount: 17,
      rating: 4.7,
      reviews: 934,
      image:
        "https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=400&h=400&fit=crop&auto=format",
      features: ["Racing Simulator", "Motion Sync", "Racing Stripes"],
      isNew: true,
      isBestSeller: false,
      colors: ["#FF0000", "#000000", "#FFFFFF"],
      description:
        "Racing-themed gaming headset with motion synchronization for racing simulators.",
    },
    {
      id: 27,
      name: "SoundMax Creator Pro",
      category: "studio",
      price: 359,
      originalPrice: 429,
      discount: 16,
      rating: 4.8,
      reviews: 678,
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&auto=format",
      features: ["Content Creation", "Stream Ready", "Broadcast Quality"],
      isNew: false,
      isBestSeller: true,
      colors: ["#000000", "#800080", "#4169E1"],
      description:
        "Professional headphones designed for content creators and streamers.",
    },
    {
      id: 28,
      name: "SoundMax Mini Kids",
      category: "kids",
      price: 59,
      originalPrice: 79,
      discount: 25,
      rating: 4.2,
      reviews: 1876,
      image:
        "https://images.unsplash.com/photo-1608156639585-b3a8d2be96a1?w=400&h=400&fit=crop&auto=format",
      features: ["Extra Small", "Animal Designs", "Soft Padding"],
      isNew: false,
      isBestSeller: false,
      colors: ["#FFB6C1", "#98FB98", "#87CEEB", "#DDA0DD"],
      description:
        "Ultra-comfortable mini headphones designed specifically for young children.",
    },
    {
      id: 29,
      name: "SoundMax Wireless Max",
      category: "wireless",
      price: 449,
      originalPrice: 549,
      discount: 18,
      rating: 4.9,
      reviews: 432,
      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop&auto=format",
      features: ["50hr Battery", "Ultra Range", "Premium Drivers"],
      isNew: true,
      isBestSeller: false,
      colors: ["#000000", "#C0C0C0", "#4169E1"],
      description:
        "Maximum performance wireless headphones with exceptional battery life and range.",
    },
    {
      id: 30,
      name: "SoundMax Titanium Pro",
      category: "studio",
      price: 899,
      originalPrice: 1199,
      discount: 25,
      rating: 4.9,
      reviews: 178,
      image:
        "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=400&h=400&fit=crop&auto=format",
      features: ["Titanium Frame", "Diamond Drivers", "Handcrafted"],
      isNew: true,
      isBestSeller: false,
      colors: ["#708090", "#2F4F4F"],
      description:
        "Ultimate professional headphones with titanium construction and diamond drivers.",
    },
    {
      id: 31,
      name: "SoundMax Gamer Girl",
      category: "gaming",
      price: 179,
      originalPrice: 219,
      discount: 18,
      rating: 4.6,
      reviews: 1567,
      image:
        "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=400&fit=crop&auto=format",
      features: ["Pink LED", "Kawaii Design", "Cat Ear Style"],
      isNew: false,
      isBestSeller: true,
      colors: ["#FF69B4", "#FFB6C1", "#DDA0DD"],
      description:
        "Adorable gaming headset with cat ear design and customizable pink LED lighting.",
    },
    {
      id: 32,
      name: "SoundMax Business Class",
      category: "wireless",
      price: 269,
      originalPrice: 329,
      discount: 18,
      rating: 4.7,
      reviews: 743,
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop&auto=format",
      features: ["Executive Design", "Premium Leather", "Conference Mode"],
      isNew: false,
      isBestSeller: false,
      colors: ["#000000", "#2F4F4F", "#8B4513"],
      description:
        "Executive-grade headphones designed for business professionals and conference calls.",
    },
  ];

  const categories = [
    { id: "all", name: "All Products", count: products.length },
    {
      id: "wireless",
      name: "Wireless",
      count: products.filter((p) => p.category === "wireless").length,
    },
    {
      id: "gaming",
      name: "Gaming",
      count: products.filter((p) => p.category === "gaming").length,
    },
    {
      id: "studio",
      name: "Studio",
      count: products.filter((p) => p.category === "studio").length,
    },
    {
      id: "kids",
      name: "Kids",
      count: products.filter((p) => p.category === "kids").length,
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.isNew ? 1 : -1;
      default:
        return b.isBestSeller ? 1 : -1;
    }
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl text-indigo-600">SoundMax</div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center max-w-md mx-4 flex-1">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search headphones..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Products
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Support
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                About
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Premium Audio Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our complete range of professional-grade headphones,
            designed for audiophiles and creators who demand excellence.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              Shop Now
            </Button>
            <Button variant="outline" size="lg">
              View Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter/Sort Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  selectedCategory === category.id
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600 hover:bg-gray-100",
                )}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* View Mode Toggle */}
            <div className="flex border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-2 rounded-l-lg transition-colors",
                  viewMode === "grid"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600 hover:bg-gray-100",
                )}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "p-2 rounded-r-lg transition-colors",
                  viewMode === "list"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600 hover:bg-gray-100",
                )}
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="featured">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        {/* Products Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {sortedProducts.length} of {products.length} products
          </p>
        </div>

        {/* Product Grid */}
        <div
          className={cn(
            "grid gap-8",
            viewMode === "grid"
              ? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1",
          )}
        >
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className={cn(
                "group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300",
                viewMode === "list" ? "flex gap-6" : "",
              )}
            >
              {/* Product Image */}
              <div
                className={cn(
                  "relative bg-gray-50",
                  viewMode === "list"
                    ? "w-64 h-64 flex-shrink-0"
                    : "aspect-square",
                )}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-green-500 text-white">NEW</Badge>
                  )}
                  {product.isBestSeller && (
                    <Badge className="bg-indigo-600 text-white">
                      BEST SELLER
                    </Badge>
                  )}
                  {product.discount > 0 && (
                    <Badge variant="destructive">{product.discount}% OFF</Badge>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 p-0 bg-white/90 hover:bg-white"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 p-0 bg-white/90 hover:bg-white"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary">Quick View</Button>
                </div>
              </div>

              {/* Product Info */}
              <div
                className={cn(
                  "p-6 space-y-4",
                  viewMode === "list" ? "flex-1" : "",
                )}
              >
                <div>
                  <p className="text-sm text-gray-500 font-medium capitalize">
                    {product.category}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {product.name}
                  </h3>
                  {viewMode === "list" && (
                    <p className="text-gray-600 mt-2">{product.description}</p>
                  )}
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1">
                  {product.features.map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Colors */}
                <div className="flex gap-2">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={cn(
                          "w-4 h-4",
                          star <= Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300",
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews.toLocaleString()})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-indigo-600">
                      ${product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart */}
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Products
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">SoundMax</h3>
              <p className="text-gray-400">
                Premium audio experiences for everyone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Headphones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Earbuds
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Speakers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Warranty
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SoundMax. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
