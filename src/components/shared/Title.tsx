interface TitleProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function Title({
  title,
  subtitle,
  className = "",
}: TitleProps) {
  return (
    <div className={`mx-auto max-w-225 text-center ${className}`}>
      <h2 className="font-poppins text-3xl md:text-[44px] max-w-150 mx-auto font-semibold leading-[1.2] text-[#040819]">
        {title}
      </h2>

      <p className="mt-4 text-sm md:text-base font-normal md:leading-7 text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
}