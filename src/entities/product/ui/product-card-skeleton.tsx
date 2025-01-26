import { Card, CardContent, CardFooter } from "@/shared/ui/card";
import { Skeleton } from "@/shared/ui/skeleton";

export const ProductCardSkeleton = () => {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="aspect-square w-full" />
      <CardContent className="p-4">
        <Skeleton className="h-4 w-2/3 mb-2" />
        <Skeleton className="h-3 w-full mb-2" />
        <Skeleton className="h-3 w-full mb-2" />
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-4 mr-1" />
          ))}
          <Skeleton className="h-3 w-8 ml-2" />
        </div>
        <Skeleton className="h-5 w-1/3" />
      </CardContent>
      <CardFooter className="p-4">
        <Skeleton className="h-10 w-full" />
      </CardFooter>
    </Card>
  );
};
