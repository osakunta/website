/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { NextButton, PrevButton, usePrevNextButtons } from "./CarouselArrows";

type PropType = {
  slides: number[];
  options: EmblaOptionsType;
};

const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

const lerp = (a: number, b: number, t: number) => a + t * (b - a);

// measure distance with wrapping in mind, so the distance between 0.1 and 0.9 is not 0.8, but 0.2
const wrappedDistance = (a: number, b: number) => {
  const bigger = Math.max(a, b);
  const smaller = Math.min(a, b);
  return Math.min(bigger - smaller, 1 + smaller - bigger);
};

const opacity = (slidePosition: number, targetPosition: number) =>
  clamp(1 - wrappedDistance(slidePosition, targetPosition) * 8.4);

const setOpacity = (emblaApi: EmblaCarouselType) => {
  const slideNodes = emblaApi.slideNodes();
  const slidesInView = emblaApi.slidesInView();

  const startPosition =
    emblaApi.scrollSnapList()[emblaApi.previousScrollSnap()];
  const currentPosition = emblaApi.scrollProgress();
  const targetPosition =
    emblaApi.scrollSnapList()[emblaApi.selectedScrollSnap()];

  const animationProgress =
    wrappedDistance(currentPosition, startPosition) /
    wrappedDistance(startPosition, targetPosition);

  slidesInView.forEach((slideIndex) => {
    const slidePosition = emblaApi.scrollSnapList()[slideIndex];
    // the opacity of this slide when the animation started
    const startOpacity = opacity(slidePosition, startPosition);
    // the opacity of this slide when the animation ends
    const targetOpacity = opacity(slidePosition, targetPosition);
    slideNodes[slideIndex].style.opacity = lerp(
      startOpacity,
      targetOpacity,
      animationProgress,
    ).toString();
  });
};

const Carousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (!emblaApi) return;

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
          { /* eslint-disable-next-line jsx-a11y/anchor-is-valid -- Placeholder href */ }
          <Link href="" className="embla__link">
            Katso Lisää
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
