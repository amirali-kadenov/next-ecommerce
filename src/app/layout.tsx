import "./styles/globals.css";
import { inter } from "./fonts/inter";
import clsx from "clsx";
import { type Metadata } from "next";
import { StoreProvider } from "./store/store-provider";
import Header from "@/widgets/header";

export const metadata: Metadata = {
  title: "Home page",
  description: "Description",
};

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx("antialiased", inter.className)}>
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
