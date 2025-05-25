'use client';
import Image from 'next/image'
import heavyImage from "../../../public/fhome/herocity.gif";
import lightImage from "../../../public/fhome/herocity.jpg";
import { useEffect, useState } from 'react';
type HeroProps = {
  onScrollToDigitalCity: () => void;
};
export default function HomeHero({ onScrollToDigitalCity }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const img = new window.Image();
    img.onload = () => {
      setIsLoaded(true);
    };
    img.src = heavyImage.src;
  }, []);
  return (
    <>
      <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
        {/* Ảnh nhẹ hiển thị ban đầu */}
        {!isLoaded && (
          <Image
            src={lightImage.src}
            alt="Placeholder"
            fill
            className={`object-fill transition-opacity duration-300 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'} `}
          />
        )}
      </div>
      <div onClick={onScrollToDigitalCity} className="font-semibold text-[18px] absolute bottom-20 left-1/2 -translate-x-1/2 flex justify-center flex-col items-center text-white uppercase gap-[15px]">
        <Image
          src="/scroll.svg"
          alt="Modern city skyline"
          width={21}
          height={35}
        />
        <span>cuộn xuống</span>
      </div>
    </>
  )
}