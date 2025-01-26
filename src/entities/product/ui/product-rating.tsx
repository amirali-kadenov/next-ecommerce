import { Star, StarHalf } from "lucide-react";

type Props = {
  rating: number;
};

export const ProductRating = ({ rating }: Props) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) =>
        i < fullStars ? (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ) : i === fullStars && hasHalfStar ? (
          <StarHalf
            key={i}
            className="w-4 h-4 fill-yellow-400 text-yellow-400"
          />
        ) : (
          <Star key={i} className="w-4 h-4 text-muted-foreground" />
        )
      )}

      <span className="ml-2 text-sm text-muted-foreground">
        ({rating.toFixed(1)})
      </span>
    </div>
  );
};
