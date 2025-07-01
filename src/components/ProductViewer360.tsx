import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ProductViewer360Props {
  className?: string;
}

const ProductViewer360: React.FC<ProductViewer360Props> = ({ className }) => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [lastX, setLastX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate 36 product images (10-degree increments)
  const imageCount = 36;
  const images = Array.from(
    { length: imageCount },
    (_, i) =>
      `https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop&auto=format&q=80&angle=${i * 10}`,
  );

  const getCurrentImageIndex = () => {
    return Math.floor((rotation % 360) / 10);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastX;
    const rotationDelta = deltaX * 0.5;
    setRotation((prev) => (prev + rotationDelta) % 360);
    setLastX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setLastX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const deltaX = e.touches[0].clientX - lastX;
    const rotationDelta = deltaX * 0.5;
    setRotation((prev) => (prev + rotationDelta) % 360);
    setLastX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - lastX;
      const rotationDelta = deltaX * 0.5;
      setRotation((prev) => (prev + rotationDelta) % 360);
      setLastX(e.clientX);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging, lastX]);

  return (
    <div className={cn("relative", className)}>
      <div
        ref={containerRef}
        className="relative w-full aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[getCurrentImageIndex()]}
          alt="Product 360° view"
          className="w-full h-full object-cover transition-opacity duration-100"
          draggable={false}
        />

        {/* 360° indicator */}
        <div className="absolute top-4 left-4 bg-black/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
          360°
        </div>

        {/* Rotation indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
          {Math.round(rotation)}°
        </div>

        {/* Drag hint */}
        {!isDragging && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-black/40 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium animate-pulse">
              Drag to rotate
            </div>
          </div>
        )}
      </div>

      {/* Thumbnail indicators */}
      <div className="flex justify-center mt-4 gap-1 overflow-x-auto">
        {Array.from({ length: 8 }, (_, i) => (
          <button
            key={i}
            onClick={() => setRotation(i * 45)}
            className={cn(
              "w-12 h-12 rounded-lg border-2 transition-all duration-200 flex-shrink-0",
              Math.abs(getCurrentImageIndex() - i * 4) < 2
                ? "border-primary shadow-lg scale-110"
                : "border-gray-200 hover:border-gray-300",
            )}
          >
            <img
              src={images[i * 4]}
              alt={`View ${i + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductViewer360;
