import React, { useState } from "react";
import { Star, ThumbsUp, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  helpfulCount: number;
  verified: boolean;
  images?: string[];
}

interface CustomerReviewsProps {
  className?: string;
}

const CustomerReviews: React.FC<CustomerReviewsProps> = ({ className }) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<"newest" | "helpful" | "rating">(
    "newest",
  );

  const reviews: Review[] = [
    {
      id: "1",
      author: "Sarah Chen",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612d7c0?w=40&h=40&fit=crop&auto=format",
      rating: 5,
      date: "2024-01-15",
      title: "Outstanding sound quality and comfort",
      content:
        "These headphones exceeded my expectations. The noise cancellation is incredible, and I can wear them for hours without any discomfort. Perfect for both work and music.",
      helpfulCount: 24,
      verified: true,
      images: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&h=100&fit=crop&auto=format",
      ],
    },
    {
      id: "2",
      author: "Mike Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&auto=format",
      rating: 5,
      date: "2024-01-12",
      title: "Best purchase this year",
      content:
        "Amazing build quality and the battery life is fantastic. I use them daily for work calls and music. Highly recommend!",
      helpfulCount: 18,
      verified: true,
    },
    {
      id: "3",
      author: "Emma Thompson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&auto=format",
      rating: 4,
      date: "2024-01-10",
      title: "Great headphones with minor issues",
      content:
        "Love the sound quality and design. The only issue is that they can get a bit warm during extended use, but overall very satisfied.",
      helpfulCount: 12,
      verified: true,
    },
    {
      id: "4",
      author: "David Kim",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&auto=format",
      rating: 5,
      date: "2024-01-08",
      title: "Perfect for travel",
      content:
        "Used these on a 12-hour flight and they were perfect. Noise cancellation worked great and the battery lasted the entire trip.",
      helpfulCount: 15,
      verified: true,
    },
  ];

  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingCounts = [5, 4, 3, 2, 1].map(
    (rating) => reviews.filter((review) => review.rating === rating).length,
  );

  const StarRating = ({
    rating,
    size = "sm",
  }: {
    rating: number;
    size?: "sm" | "lg";
  }) => (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            size === "sm" ? "w-4 h-4" : "w-5 h-5",
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300",
          )}
        />
      ))}
    </div>
  );

  const filteredReviews = selectedRating
    ? reviews.filter((review) => review.rating === selectedRating)
    : reviews;

  return (
    <div className={cn("space-y-8", className)}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <div className="flex items-center gap-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="newest">Most Recent</option>
            <option value="helpful">Most Helpful</option>
            <option value="rating">Highest Rating</option>
          </select>
        </div>
      </div>

      {/* Rating Summary */}
      <div className="bg-gray-50 rounded-2xl p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">
              {averageRating.toFixed(1)}
            </div>
            <StarRating rating={Math.round(averageRating)} size="lg" />
            <div className="text-gray-600 mt-2">{reviews.length} reviews</div>
          </div>

          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating, index) => (
              <button
                key={rating}
                onClick={() =>
                  setSelectedRating(selectedRating === rating ? null : rating)
                }
                className={cn(
                  "flex items-center gap-3 w-full text-left p-2 rounded-lg transition-colors",
                  selectedRating === rating
                    ? "bg-primary/10"
                    : "hover:bg-gray-100",
                )}
              >
                <span className="text-sm font-medium w-6">{rating}</span>
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${(ratingCounts[index] / reviews.length) * 100}%`,
                    }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-8">
                  {ratingCounts[index]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {filteredReviews.map((review) => (
          <div
            key={review.id}
            className="border border-gray-200 rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src={review.avatar} alt={review.author} />
                <AvatarFallback>
                  {review.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{review.author}</span>
                      {review.verified && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <StarRating rating={review.rating} />
                      <span className="text-gray-500 text-sm">
                        {review.date}
                      </span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">{review.title}</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {review.content}
                  </p>
                </div>

                {review.images && (
                  <div className="flex gap-2">
                    {review.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Review image ${index + 1}`}
                        className="w-16 h-16 object-cover rounded-lg border"
                      />
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4 pt-3 border-t">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-primary"
                  >
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    Helpful ({review.helpfulCount})
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-primary"
                  >
                    Reply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Reviews
        </Button>
      </div>
    </div>
  );
};

export default CustomerReviews;
