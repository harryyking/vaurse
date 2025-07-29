'use client';

import { useState, useEffect } from 'react';

export default function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Check initial status
    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
        setIsOnline(window.navigator.onLine);
    }
    
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) {
    return null;
  }

  return (
    <div className="bg-red-500 text-white text-center p-2 fixed top-0 w-full z-50">
      You are currently offline. Displayed data is from cache.
    </div>
  );
}