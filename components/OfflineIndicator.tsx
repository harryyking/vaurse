'use client';

import { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';

export default function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true);


  const offlineToastId = useRef<string | number | null>(null);

  useEffect(() => {
    // This effect runs only on the client-side, so window is safe to access
    if (typeof window === 'undefined') {
      return; // Exit if not in browser environment
    }

    // Initialize online status
    setIsOnline(window.navigator.onLine);

    const handleOnline = () => {
      setIsOnline(true);
  
      if (offlineToastId.current) {
        toast.success(
          "You're back online!",
          {
          id: offlineToastId.current, // Use the ID to update/dismiss
          description: "Data will now be fetched live.",
          duration: 3000,
        });
        offlineToastId.current = null; // Clear the ref
      }
    };

    const handleOffline = () => {
      setIsOnline(false);
      if (!offlineToastId.current) {
        offlineToastId.current = toast.error(
           "You are offline.",
          {
          description: "Displayed data is from cache. Some features may not work.",

          duration: Infinity, 
        }); 
      }
    };

 
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup function
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      // Ensure the toast is dismissed when the component unmounts
      if (offlineToastId.current) {
        toast('',{ id: offlineToastId.current, dismissible: true });
      }
    };
  }, [toast]); // Add 'toast' to dependency array

  return null;
}