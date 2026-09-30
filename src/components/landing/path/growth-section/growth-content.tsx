import { GrowthStats } from "./growth-stats";
import { SectionHeading } from "../section-heading";

export function GrowthContent() {
  return (
    <div>
      <SectionHeading title="Your Path to Professional Growth Starts Here!" titleClassName="max-w-xl">
        Explore our curated selection of courses tailored to enhance your capabilities and
        accelerate your career journey. Whether you are looking to sharpen specific skills, gain
        industry expertise, or embark on a new career path entirely, we have the resources you need.
      </SectionHeading>
      <GrowthStats />
    </div>
  );
}