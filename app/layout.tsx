import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistery from "@/theme/theme"; //theme we have made in client side
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <ThemeRegistery>
    <body className={inter.className}>
     <NextTopLoader />
     {children}
    </body>
   </ThemeRegistery>
  </html>
 );
}
