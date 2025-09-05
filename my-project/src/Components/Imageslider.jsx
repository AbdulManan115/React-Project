import React, { useState, useEffect } from "react";

const desktopImages = [
  "metro .2.webp",
  "metro.3.webp",
  "metro.4.webp",
  "metro.5.webp",
  "metro.6.webp",
  "metro.7.webp",
  "metro.8.webp",
  "metro.9.webp",
];

const tabletImages = [
  "tab.1.webp",
  "tab.2.webp",
  "tab.3.webp",
  "tab.4.webp",
  "tab.5.webp",
  "tab.6.webp",
  "tab.7.webp",
  "tab.8.webp",
];

const mobileImages = [
  "resp.1.webp",
  "resp.2.webp",
  "resp.3.webp",
  "resp.4.webp",
  "resp.5.webp",
  "resp.6.webp",
  "resp.7.webp",
  "resp.8.webp",
  "resp.9.webp",
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [device, setDevice] = useState("desktop"); // "mobile", "tablet", "desktop"

  // ✅ Detect screen width and set device
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 768) {
        setDevice("mobile"); // Mobile: <768px
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
        setDevice("tablet"); // Tablet: 768px - 1024px
      } else {
        setDevice("desktop"); // Desktop: >1024px
      }
    };

    checkScreenSize(); // run once on load
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // ✅ Pick correct images
  const images =
    device === "mobile"
      ? mobileImages
      : device === "tablet"
      ? tabletImages
      : desktopImages;

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  // ✅ Next & Prev slide
  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  // ✅ Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative w-full h-full mx-auto">
      {/* Images */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-100 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-3 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
