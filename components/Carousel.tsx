/* eslint-disable react-hooks/exhaustive-deps */
import useTranslate from "@/hooks/useTranslate";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { NextButton, PrevButton, usePrevNextButtons } from "./CarouselArrows";

type PropType = {
  slides: number[];
  options: EmblaOptionsType;
};

const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

// measure distance with wrapping in mind, so the distance between 0.1 and 0.9 is not 0.8, but 0.2
const wrappedDistance = (a: number, b: number) => {
  const bigger = Math.max(a, b);
  const smaller = Math.min(a, b);
  return Math.min(bigger - smaller, 1 + smaller - bigger);
};

let lastSetOpacity = 0;

const setOpacity = (emblaApi: EmblaCarouselType) => {
  const now = Date.now();
  if (now - lastSetOpacity < 16) return;
  lastSetOpacity = now;
  const slideNodes = emblaApi.slideNodes();

  const currentPosition = emblaApi.scrollProgress();

  slideNodes.forEach((_, slideIndex) => {
    const slidePosition = emblaApi.scrollSnapList()[slideIndex];
    const opacity = clamp(
      1 - wrappedDistance(slidePosition, currentPosition) * 8.4,
    ).toFixed(2);
    slideNodes[slideIndex].style.opacity = opacity.toString();
  });
};

const Carousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const t = useTranslate();

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (!emblaApi) return;

    setOpacity(emblaApi);
    emblaApi.on("reInit", setOpacity).on("scroll", setOpacity);
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <Image
                className="embla__slide__img"
                src={`https://picsum.photos/600/350?v=${index}`}
                alt="Your alt text"
                width={250}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className="embla__buttons">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid -- Placeholder href */}
          <Link href="" className="embla__link">
            {t("general:seeMore")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
