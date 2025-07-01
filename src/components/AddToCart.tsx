import React, { useState } from "react";
import { Plus, Minus, ShoppingCart, Heart, Share2, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AddToCartProps {
  className?: string;
}

const AddToCart: React.FC<AddToCartProps> = ({ className }) => {
  const [quantity, setQuantity] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const basePrice = 299;
  const discountPrice = 224.25; // 25% off
  const savings = basePrice - discountPrice;

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, Math.min(10, quantity + change)));
  };

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  const handleWishlist = () => {
    setIsInWishlist(!isInWishlist);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "SoundMax Pro Wireless Headphones",
        text: "Check out these amazing headphones!",
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const totalPrice = discountPrice * quantity;
  const totalSavings = savings * quantity;

  return (
    <div className={cn("space-y-6", className)}>
      {/* Stock Status */}
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-green-600 font-semibold">
          In Stock - Ready to Ship
        </span>
      </div>

      {/* Price Summary */}
      <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Unit Price:</span>
          <div className="text-right">
            <div className="text-xl font-bold text-primary">
              ${discountPrice}
            </div>
            <div className="text-sm text-gray-500 line-through">
              ${basePrice}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center py-2 border-t border-gray-200">
          <span className="font-semibold">
            Total ({quantity} item{quantity > 1 ? "s" : ""}):
          </span>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">
              ${totalPrice.toFixed(2)}
            </div>
            <div className="text-sm text-green-600">
              Save ${totalSavings.toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="space-y-3">
        <label className="text-sm font-semibold text-gray-700">Quantity</label>
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
              className="h-10 w-10 p-0"
            >
              <Minus className="w-4 h-4" />
            </Button>
            <div className="w-16 h-10 flex items-center justify-center font-semibold">
              {quantity}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleQuantityChange(1)}
              disabled={quantity >= 10}
              className="h-10 w-10 p-0"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <span className="text-sm text-gray-600">Max: 10 per order</span>
        </div>
      </div>

      {/* Purchase Options */}
      <div className="space-y-3">
        <Button
          onClick={handleAddToCart}
          className="w-full h-12 text-lg font-semibold"
          disabled={isAddedToCart}
        >
          {isAddedToCart ? (
            <>
              <ShoppingCart className="w-5 h-5 mr-2" />
              Added to Cart!
            </>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </>
          )}
        </Button>

        <Button
          variant="outline"
          className="w-full h-12 text-lg font-semibold border-2 border-accent text-accent hover:bg-accent hover:text-white"
        >
          <Zap className="w-5 h-5 mr-2" />
          Buy Now - Fast Checkout
        </Button>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button
          variant="outline"
          onClick={handleWishlist}
          className={cn(
            "flex-1 h-12",
            isInWishlist ? "bg-red-50 border-red-200 text-red-600" : "",
          )}
        >
          <Heart
            className={cn("w-5 h-5 mr-2", isInWishlist ? "fill-current" : "")}
          />
          {isInWishlist ? "In Wishlist" : "Add to Wishlist"}
        </Button>

        <Button variant="outline" onClick={handleShare} className="h-12 px-4">
          <Share2 className="w-5 h-5" />
        </Button>
      </div>

      {/* Delivery Information */}
      <div className="space-y-4 p-4 bg-blue-50 rounded-2xl">
        <h4 className="font-semibold text-blue-900">Delivery Options</h4>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-blue-700">Standard Delivery</span>
            <span className="font-semibold text-blue-900">Free (3-5 days)</span>
          </div>

          <div className="flex justify-between">
            <span className="text-blue-700">Express Delivery</span>
            <span className="font-semibold text-blue-900">
              $9.99 (1-2 days)
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-blue-700">Next Day Delivery</span>
            <span className="font-semibold text-blue-900">
              $19.99 (by 6 PM)
            </span>
          </div>
        </div>

        <div className="text-xs text-blue-600 border-t border-blue-200 pt-3">
          Order within 4 hours 23 minutes for next day delivery
        </div>
      </div>

      {/* Trust Signals */}
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="p-3 bg-green-50 rounded-lg">
          <div className="text-lg font-bold text-green-600">4.8★</div>
          <div className="text-xs text-green-700">Customer Rating</div>
        </div>

        <div className="p-3 bg-blue-50 rounded-lg">
          <div className="text-lg font-bold text-blue-600">2.8k+</div>
          <div className="text-xs text-blue-700">Reviews</div>
        </div>
      </div>

      {/* Limited Time Offer */}
      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded-2xl text-center">
        <Badge variant="secondary" className="mb-2 bg-white text-red-600">
          Limited Time Offer
        </Badge>
        <div className="font-semibold">25% OFF ends in:</div>
        <div className="text-2xl font-bold mt-1">23:59:42</div>
      </div>
    </div>
  );
};

export default AddToCart;
