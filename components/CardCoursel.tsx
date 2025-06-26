'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useEffect } from 'react';

const images = [
  "/wallperson.png",
  "/Wallpanels/Bedroom/room1.jpg",
  "/Wallpanels/Bedroom/room2.jpg",
  "/Wallpanels/Bedroom/room3.jpg",
  "/Wallpanels/Livingroom/living1.jpg",
  "/Wallpanels/Livingroom/living2.jpg",
  "/Wallpanels/Livingroom/living3.jpg",
];

export default function CardCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged: () => {},
    created: () => {},
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 2000); // every 2 seconds
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="max-w-xl mx-auto rounded-xl shadow-lg overflow-hidden bg-white">
      <div ref={sliderRef} className="keen-slider">
        {images.map((src, i) => (
          <div key={i} className="keen-slider__slide">
            <img
              src={src}
              alt={`Slide ${i}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
