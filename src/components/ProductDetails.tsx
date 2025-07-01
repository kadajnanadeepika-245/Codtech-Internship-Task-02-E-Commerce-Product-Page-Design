import React, { useState } from "react";
import {
  Truck,
  Shield,
  RotateCcw,
  Headphones,
  Bluetooth,
  Battery,
  Mic,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductDetailsProps {
  className?: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ className }) => {
  const [selectedColor, setSelectedColor] = useState("midnight");
  const [selectedSize, setSelectedSize] = useState("standard");

  const colors = [
    { id: "midnight", name: "Midnight Black", color: "#000000" },
    { id: "silver", name: "Silver", color: "#C0C0C0" },
    { id: "blue", name: "Ocean Blue", color: "#1E40AF" },
    { id: "red", name: "Product Red", color: "#DC2626" },
  ];

  const sizes = [
    { id: "standard", name: "Standard", description: "Fits most adults" },
    { id: "large", name: "Large", description: "For larger head sizes" },
  ];

  const features = [
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Active Noise Cancellation",
      description: "Block out the world with industry-leading ANC technology",
    },
    {
      icon: <Bluetooth className="w-6 h-6" />,
      title: "Wireless Freedom",
      description: "Bluetooth 5.3 with 30ft range and multipoint connectivity",
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "30-Hour Battery",
      description: "All-day listening with fast charging (5min = 3 hours)",
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Crystal Clear Calls",
      description: "Advanced microphone array for perfect call quality",
    },
  ];

  const specifications = [
    { label: "Driver Size", value: "40mm Dynamic" },
    { label: "Frequency Response", value: "20Hz - 20kHz" },
    { label: "Impedance", value: "32 Ohms" },
    { label: "Sensitivity", value: "103dB SPL" },
    { label: "Weight", value: "250g (8.8 oz)" },
    { label: "Bluetooth Version", value: "5.3" },
    { label: "Codecs Supported", value: "SBC, AAC, LDAC" },
    { label: "Battery Type", value: "Lithium-ion" },
    { label: "Charging Port", value: "USB-C" },
    { label: "Water Resistance", value: "IPX4" },
  ];

  const benefits = [
    {
      icon: <Truck className="w-5 h-5" />,
      title: "Free Shipping",
      description: "Free delivery on orders over $50",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "2-Year Warranty",
      description: "Comprehensive coverage included",
    },
    {
      icon: <RotateCcw className="w-5 h-5" />,
      title: "30-Day Returns",
      description: "Free returns within 30 days",
    },
  ];

  return (
    <div className={cn("space-y-8", className)}>
      {/* Product Title and Price */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="text-primary">
            Best Seller
          </Badge>
          <Badge variant="outline">4.8��� (2,847 reviews)</Badge>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          SoundMax Pro Wireless Headphones
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed">
          Experience premium audio with industry-leading noise cancellation,
          30-hour battery life, and superior comfort for all-day listening.
        </p>

        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-bold text-primary">$299</span>
          <span className="text-lg text-gray-500 line-through">$399</span>
          <Badge variant="destructive">25% OFF</Badge>
        </div>
      </div>

      {/* Color Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Color</h3>
        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedColor(color.id)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 border-2 rounded-lg transition-all",
                selectedColor === color.id
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 hover:border-gray-300",
              )}
            >
              <div
                className="w-6 h-6 rounded-full border-2 border-white shadow-md"
                style={{ backgroundColor: color.color }}
              />
              <span className="font-medium">{color.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Size</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {sizes.map((size) => (
            <button
              key={size.id}
              onClick={() => setSelectedSize(size.id)}
              className={cn(
                "text-left px-4 py-3 border-2 rounded-lg transition-all",
                selectedSize === size.id
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 hover:border-gray-300",
              )}
            >
              <div className="font-medium">{size.name}</div>
              <div className="text-sm text-gray-600">{size.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Key Features</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-semibold mb-1">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Information Tabs */}
      <Tabs defaultValue="specifications" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="compatibility">Compatibility</TabsTrigger>
          <TabsTrigger value="whats-included">What's Included</TabsTrigger>
        </TabsList>

        <TabsContent value="specifications" className="mt-6">
          <div className="grid md:grid-cols-2 gap-4">
            {specifications.map((spec, index) => (
              <div
                key={index}
                className="flex justify-between py-3 border-b border-gray-100"
              >
                <span className="font-medium text-gray-600">{spec.label}</span>
                <span className="font-semibold">{spec.value}</span>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="compatibility" className="mt-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Mobile Devices</h4>
              <p className="text-gray-600">
                Compatible with iOS 12+ and Android 8.0+. Full feature support
                with dedicated app.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Computers</h4>
              <p className="text-gray-600">
                Works with Windows 10+, macOS 10.15+, and most Linux
                distributions via Bluetooth.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Gaming Consoles</h4>
              <p className="text-gray-600">
                PS5, Xbox Series X/S, Nintendo Switch (with Bluetooth adapter
                recommended).
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="whats-included" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">In the Box</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• SoundMax Pro Headphones</li>
                <li>• USB-C Charging Cable</li>
                <li>• 3.5mm Audio Cable</li>
                <li>• Premium Carrying Case</li>
                <li>• Quick Start Guide</li>
                <li>• Warranty Information</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Documentation</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Complete User Manual</li>
                <li>• Safety Guidelines</li>
                <li>• Troubleshooting Guide</li>
                <li>• App Setup Instructions</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Benefits */}
      <div className="grid md:grid-cols-3 gap-6 py-6 border-t border-gray-200">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              {benefit.icon}
            </div>
            <div>
              <h4 className="font-semibold text-sm">{benefit.title}</h4>
              <p className="text-xs text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
