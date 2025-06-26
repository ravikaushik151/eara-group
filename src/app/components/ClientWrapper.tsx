// app/components/ClientWrapper.js
'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function ClientWrapper({ children }) {
  useEffect(() => {
    import('lenis').then((mod) => {
      const Lenis = mod.default;

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        //direction: 'vertical',
      //  gestureDirection: 'vertical',
      //  smooth: true,
      //  mouseMultiplier: 1,
      //  smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
        lerp: undefined,
      });

      function setLerp() {
        const path = window.location.pathname;
        lenis.options.lerp = path === '/being-here-at-studio' ? 0.1 : undefined;
        console.log('lerp applied:', lenis.options.lerp);
        console.log('Current Path:', path);
      }

      setTimeout(setLerp, 100);

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    });
  }, []);

  return (
    <>
      {children}

      {/* External Scripts */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/js/main.js"
        strategy="afterInteractive"
        onLoad={() => console.log('Custom interactions loaded')}
        onError={(e) => console.error('Failed to load interactions', e)}
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}
