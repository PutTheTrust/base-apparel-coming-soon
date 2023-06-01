import Image from "next/image";
import React from "react";

const HeroImage = () => {
  return (
    <div>
      <Image
        src="/images/hero-mobile.jpg"
        className="md:hidden w-full"
        alt="hero image"
        width={375}
        height={250}
      />
      <Image
        src="/images/hero-desktop.jpg"
        className="hidden md:block"
        alt="hero image"
        width={610}
        height={800}
      />
    </div>
  );
};

export default HeroImage;
