"use client";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

export default function Compare() {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src="/images/upcoming-projects.png" alt="before" />}
      itemTwo={<ReactCompareSliderImage src="/images/upcoming-projects.avif" alt="after" />}
    />
  );
}
