"use client";
import { useEffect } from "react";

export default function ScrollContainer({ children }) {
  useEffect(() => {
    // Prevent default scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Smooth scroll polyfill for older browsers
    const handleWheel = (e) => {
      const container = document.querySelector('.scroll-container');
      if (!container) return;

      // Check if we're at the boundaries
      const atTop = container.scrollTop === 0;
      const atBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 1;

      if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return <>{children}</>;
}
