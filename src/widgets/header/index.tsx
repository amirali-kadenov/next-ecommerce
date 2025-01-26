import { CartButton } from "@/entities/cart/ui/cart-button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link className="flex items-center space-x-2" href="/">
          <span className="font-bold">Mango Store</span>
        </Link>

        <CartButton />
      </div>
    </header>
  );
}
