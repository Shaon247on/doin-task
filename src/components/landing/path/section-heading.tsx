import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: ReactNode;
  children: ReactNode;
  titleClassName?: string;
};

export function SectionHeading({ title, children, titleClassName = "max-w-xl" }: SectionHeadingProps) {
  return (
    <>
      <h2
        className={`font-poppins text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl xl:text-[44px] ${titleClassName}`}
      >
        {title}
      </h2>
      <p className="mt-6 max-w-xl text-base leading-7 text-foreground/70 lg:mt-8 lg:text-lg lg:leading-8">
        {children}
      </p>
    </>
  );
}