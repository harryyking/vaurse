import type { Metadata } from "next";
import { Gochi_Hand} from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";
import { cn } from "@/lib/utils";

export const getSchwiftyFont = localFont({
  src: '../public/fonts/GetSchwifty.ttf', // Adjust path if your font file is different
  variable: '--font-get-schwifty', // CSS variable for Get Schwifty
  display: 'swap',
});

export const gochiHandFont = Gochi_Hand({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-gochi-hand', // CSS variable for Gochi Hand
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Rick And Morty Characters",
  description: "List of all Rick and Morty Characters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">

      <body
         className={cn(
          gochiHandFont.variable,
          getSchwiftyFont.variable, 
          "font-gochi" 
          
        )}
        >
        <QueryProvider>

        {children}
      </QueryProvider>
      </body>
    </html>
  );
}
