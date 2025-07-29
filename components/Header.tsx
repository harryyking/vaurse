'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils'; 

// Array of Rick and Morty banner images
const bannerImages = [
  'https://utfs.io/f/f4KBeJpBpPha43rip6tJf7CMH3v5EYbo1zgXI0TpklyxBw2a', 
  'https://utfs.io/f/f4KBeJpBpPha1kqc08QaDF6vL2NeKVYsPHRwgfjciTGSq4u7',
 'https://utfs.io/f/f4KBeJpBpPhalBsMa2JbeY16NfjbZq5w7HB4z0QtDgOWG2aK',
  'https://utfs.io/f/f4KBeJpBpPha82JYKAJMcUv0M9VyRGbnmFAOaw1Ttd47CQWu',
  'https://utfs.io/f/f4KBeJpBpPhamMV40KFnGJSq68XUHhANpk5vjLRFc7I9uQgs',
  'https://utfs.io/f/f4KBeJpBpPhahmB4jf09ExeFWZoTyCNp8XGKVca5SPijb3Dn',
];

export default function Header() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Auto-advance slideshow every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % bannerImages.length
      );
    }, 5000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <header className="w-full bg-card text-card-foreground shadow-md">

      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <Link href="/" passHref>
          <h2 className="font-schwifty text-2xl font-bold text-primary cursor-pointer">
            Rick & Morty Portal
          </h2>
        </Link>

      </nav>

      {/* Horizontal Banner Section (Slideshow) */}
      <div className="relative w-full h-96 overflow-hidden">
        {bannerImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Rick and Morty Banner ${index + 1}`}
            fill
            sizes="100vw" 
            priority={index === 0} 
            className={cn(
              "object-cover transition-opacity duration-1000 ease-in-out", 
              index === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute inset-0' 
            )}
          />
        ))}

        <div className="absolute inset-0 bg-black/40 z-[5]"></div>

        <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
          <h2 className="font-schwifty text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-get-schwifty text-green-400 text-center
                 drop-shadow-green-400
                 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]
                 leading-tight">
            Wubba Lubba Dub Dub!
          </h2>
        </div>
      </div>
    </header>
  );
}