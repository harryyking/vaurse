import type { Metadata } from "next";
import { Gochi_Hand} from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import OfflineIndicator from "@/components/OfflineIndicator";

const getSchwiftyFont = localFont({
  src: '../public/fonts/GetSchwifty.ttf', // Adjust path if your font file is different
  variable: '--font-get-schwifty', // CSS variable for Get Schwifty
  display: 'swap',
});

const gochiHandFont = Gochi_Hand({
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
    <head> 
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/maskable_icon_x192.png" /> 
        <meta name="theme-color" content="#2D3748" />
      </head>
      <body
         className={cn(
          gochiHandFont.variable,
          getSchwiftyFont.variable, 
          "font-gochi" 
          
        )}
        >
        <QueryProvider>

        {children}
        <OfflineIndicator/>
        <Toaster/>
      </QueryProvider>
      </body>
    </html>
  );
}
