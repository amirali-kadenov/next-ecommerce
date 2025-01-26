import Link from "next/link";
import { PackageX } from "lucide-react";
import { Button } from "@/shared/ui/button";

export default function ProductNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <PackageX className="w-24 h-24 text-muted-foreground mb-8" />
      <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8">
        We could not find the product you are looking for.
      </p>
      <Button asChild>
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  );
}
