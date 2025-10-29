"use client";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";

interface ResponsiveVideoPosterProps {
  videoSrc: string;
  desktopPoster: string;
  mobilePoster: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function ResponsiveVideoPoster({
  videoSrc,
  desktopPoster,
  mobilePoster,
  className = "",
  style = {},
}: ResponsiveVideoPosterProps) {
  // Detect screen size using react-responsive
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [posterLoaded, setPosterLoaded] = useState(false);

  return (
    <video
      className={`w-100 h-100 object-fit-cover ${className}`}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={isMobile ? mobilePoster : desktopPoster}
      style={{
        objectFit: "cover",
        height: "100%",
        width: "100%",
        opacity: posterLoaded ? 1 : 0,
        transition: "opacity 0.5s ease",
        ...style,
      }}
      onLoadedData={() => setPosterLoaded(true)}
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
