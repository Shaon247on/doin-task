import { FloatingElement } from "@/components/shared/floating-element";

const ELEMENTS = [
  {
    src: "/elements/creator/top-left-spring.png",
    className:
      "-left-[1%] top-[0%] w-[26%] sm:-left-[2%] sm:w-[18%] md:w-[14%] lg:left-0 lg:top-0 lg:w-[11.5%]",
    sizes: "(min-width:1024px) 12vw, 26vw",
    duration: 7,
    distance: 12,
    rotate: 3,
  },
  {
    src: "/elements/creator/top-left-spring-white.png",
    className: "hidden lg:block lg:left-[14.7%] lg:top-[7%] lg:w-[7.8%]",
    sizes: "8vw",
    duration: 5.5,
    delay: 0.5,
    distance: 10,
    rotate: -4,
  },
  {
    src: "/elements/creator/left-middle-cone.png",
    className: "hidden lg:block lg:left-0 lg:top-[49.5%] lg:w-[8%]",
    sizes: "8vw",
    duration: 6.5,
    delay: 1,
    distance: 10,
    rotate: 4,
  },
  {
    src: "/elements/creator/bottom-left-ring.png",
    className:
      "-bottom-[4%] -left-[8%] w-[32%] sm:left-[2%] sm:w-[22%] md:w-[18%] lg:bottom-auto lg:left-[4.9%] top-[88%] xl:top-[75%] lg:w-[16.5%]",
    sizes: "(min-width:1024px) 17vw, 32vw",
    duration: 8,
    delay: 0.3,
    distance: 12,
    rotate: 5,
  },
  {
    src: "/elements/creator/top-right-cone.png",
    className:
      "-right-[2%] top-[1%] w-[22%] sm:right-[3%] sm:w-[14%] md:w-[11%] lg:left-[76.7%] lg:right-auto lg:top-[4.5%] lg:w-[8.7%]",
    sizes: "(min-width:1024px) 9vw, 22vw",
    duration: 6,
    delay: 0.8,
    distance: 12,
    rotate: -5,
  },
  {
    // (file name is spelled "squre" on disk)
    src: "/elements/creator/right-squre.png",
    className: "hidden lg:block lg:-right-1 lg:top-[8%] lg:w-[11.8%]",
    sizes: "12vw",
    duration: 8,
    delay: 0.2,
    distance: 14,
    rotate: 3,
  },
  {
    src: "/elements/creator/bottom-right-spring.png",
    className:
      "-bottom-[5%] -right-[6%] w-[26%] sm:-right-[2%] sm:w-[18%] md:w-[14%] lg:bottom-auto lg:left-[82%] lg:right-auto lg:top-[86%] xl:top-[77%] lg:w-[13.2%]",
    sizes: "(min-width:1024px) 14vw, 26vw",
    duration: 7.5,
    delay: 0.6,
    distance: 12,
    rotate: -3,
  },
];

export function CreatorElements() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
      {ELEMENTS.map((el) => (
        <FloatingElement key={el.src} {...el} />
      ))}
    </div>
  );
}