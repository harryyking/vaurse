'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils'; // Assuming you have this utility for Tailwind class merging

// Array of Rick and Morty banner images
const bannerImages = [
  '/images/banner1.jfif', // Assuming you have these images in your /public/images/banner folder
  '/images/banner2.jfif',
 '/images/banner3.jfif',
  '/images/banner4.jfif',
  '/images/banner5.jfif',
  '/images/banner6.jfif',
];

export default function Header() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Auto-advance slideshow every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % bannerImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
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