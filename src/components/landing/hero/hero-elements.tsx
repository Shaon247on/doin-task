import { FloatingElement } from "./floating-element";


const ELEMENTS = [
  {
    src: "/elements/hero/spring-green.png",
    className: "-left-[4%] top-[42%] w-[24%] sm:-left-[1%] sm:top-[43%] md:top-[34%] lg:top-[27%] sm:w-[16%] lg:w-[13.5%]",
    sizes: "(min-width:1024px) 14vw, 24vw",
    duration: 7,
    distance: 14,
    rotate: 3,
  },
  {
    src: "/elements/hero/spring-white-hero.png",
    className: "hidden lg:block left-[25%] xl:left-[22%] top-[49%] sm:w-[9%] lg:w-[8%]",
    sizes: "9vw",
    duration: 5.5,
    delay: 0.6,
    distance: 10,
    rotate: -4,
  },
  {
    src: "/elements/hero/ring-white.png",
    className: "left-[8%] top-[55%] w-[32%] sm:left-[13%] sm:top-[52%] md:top-[56%] lg:top-[70%] lg:left-[4%] sm:w-[17%] lg:w-[16.5%] xl:left-[11%]",
    sizes: "(min-width:1024px) 17vw, 32vw",
    duration: 8,
    delay: 0.3,
    distance: 12,
    rotate: 5,
  },
  {
    src: "/elements/hero/cone-white.png",
    className: "hidden lg:block left-[78.5%] top-[47%] sm:w-[9.5%] lg:w-[8.8%]",
    sizes: "10vw",
    duration: 6.5,
    delay: 1,
    distance: 12,
    rotate: -6,
  },
  {
    src: "/elements/hero/square-geen.png",
    className: "-right-[2%] top-[48%] w-[26%] sm:-right-[1%] sm:top-[43%] md:top-[34%] lg:top-[25%] sm:w-[14%] lg:w-[13%]",
    sizes: "(min-width:1024px) 13vw, 26vw",
    duration: 7.5,
    delay: 0.9,
    distance: 12,
    rotate: 4,
  },
  {
    src: "/elements/hero/spring-white-hero.png",
    className: "right-[25%] top-[50%] w-[22%] sm:right-[18%] lg:right-[6%] sm:top-[53%] md:top-[55%] lg:top-[80%] xl:right-[15%] sm:w-[13.5%]",
    sizes: "(min-width:640px) 14vw, 22vw",
    duration: 6,
    delay: 0.2,
    distance: 14,
    rotate: -3,
  },
];

export function HeroElements() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-40">
      {ELEMENTS.map((el, i) => (
        <FloatingElement key={i} {...el} />
      ))}
    </div>
  );
}