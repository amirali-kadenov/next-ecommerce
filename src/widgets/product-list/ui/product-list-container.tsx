import { cn } from "@/shared/lib/utils";
import { ReactNode } from "react";

type Props = {
  testId?: string;
  children: ReactNode;
  className?: string;
};

export const ProductListContainer = ({ testId, children, className }: Props) => {
  return (
    <div
      data-testid={testId}
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
        className
      )}
    >
      {children}
    </div>
  );
};
