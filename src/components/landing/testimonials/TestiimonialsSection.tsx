import { TestimonialCard, type Testimonial } from "./testimonial-card";

// NOTE: avatar paths are placeholders, put the real photos in public/images/testimonials/
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/testimonials/sarah.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/testimonials/james.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/testimonials/alex.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

/** 3 blurred balls: 2 primary (lime) + 1 hero blue. Positions are % of the section (1440px design). */
const BALLS = [
  // lime, top-center
  "bg-primary/55 left-[25%] top-[-6%] size-[260px] md:left-[34%] md:top-0 md:size-[460px]",
  // lime, right edge
  "bg-primary/50 left-[75%] top-[30%] size-[200px] md:left-[87%] md:top-[23%] md:size-[320px]",
  // blue, bottom-left
  "bg-hero/25 left-[-25%] top-[75%] size-[260px] md:left-[-7.6%] md:top-[57%] md:size-[440px]",
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-background py-16 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {BALLS.map((cls, i) => (
          <span
            key={i}
            className={`absolute rounded-full blur-[80px] md:blur-[120px] ${cls}`}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-x-20">
          <h2 className="max-w-lg font-poppins text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl xl:text-[44px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-xl text-base leading-7 text-foreground/70 lg:text-lg lg:leading-8">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-10  xl:gap-12">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard
              key={t.name}
              testimonial={t}
              // On tablet the 3rd card is centered under the first two
              className={
                i === 2
                  ? "md:col-span-2 md:mx-auto md:max-w-[calc(50%-12px)] lg:col-span-1 lg:max-w-none"
                  : ""
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
