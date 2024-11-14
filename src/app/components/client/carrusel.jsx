import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

const Carrusel = ({ interval = 5000 }) => {
  return (
    <TECarousel ride="carousel" interval={interval}>
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <TECarouselItem
          itemID={1}
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        >
          <img
            src="/img/gal1.svg"
            className="block w-full"
            alt="..."
          />
        </TECarouselItem>
        <TECarouselItem
          itemID={2}
          className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        >
          <img
            src="/img/gal2.svg"
            className="block w-full"
            alt="..."
          />
        </TECarouselItem>
        <TECarouselItem
          itemID={3}
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        >
          <img
            src="/img/gal3.svg"
            className="block w-full"
            alt="..."
          />
        </TECarouselItem>
        <TECarouselItem
          itemID={4}
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[6000ms] ease-in-out motion-reduce:transition-none"
        >
          <img
            src="/img/gal4.svg"
            className="block w-full"
            alt="..."
          />
        </TECarouselItem>
        <TECarouselItem
          itemID={5}
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        >
          <img
            src="/img/gal5.svg"
            className="block w-full"
            alt="..."
          />
        </TECarouselItem>
        <TECarouselItem
          itemID={6}
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        >
          <img
            src="/img/gal6.svg"
            className="block w-full"
            alt="..."
          />
        </TECarouselItem>
      </div>
    </TECarousel>
  );
}

export default Carrusel;