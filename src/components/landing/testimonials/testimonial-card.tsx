import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

export function TestimonialCard({
  testimonial,
  className = "",
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  const { name, role, quote, avatar } = testimonial;

  return (
    <figure className={`w-full rounded-[28px] bg-white p-6 shadow-sm ${className}`}>
      <Avatar className="size-16 sm:size-20">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback className="text-xl font-semibold">{name.charAt(0)}</AvatarFallback>
      </Avatar>

      <figcaption className="mt-5">
        <p className="font-poppins text-lg font-semibold text-black">{name}</p>
        <p className="mt-0.5 text-base text-hero">{role}</p>
      </figcaption>

      <blockquote className="mt-6 text-base leading-7 text-foreground/70 lg:text-lg xl:text-xl lg:leading-7">
        {`"${quote}"`}
      </blockquote>
    </figure>
  );
}