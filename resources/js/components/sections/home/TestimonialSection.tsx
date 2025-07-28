import { forwardRef } from "react";
import TestimonialSlider from "@/components/TestimonialSlider";
import type { Testimonial } from "@/types";

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

const TestimonialSection = forwardRef<HTMLDivElement, TestimonialSectionProps>(
  ({ testimonials }, ref) => {
    return (
      <section
        ref={ref}
        className="container mx-auto px-6 md:px-12 lg:px-16 py-12 w-full flex flex-col gap-6 z-10 opacity-0"
      >
        <div className="flex flex-col items-center gap-2 mb-4 md:mb-6">
          <h2 className="text-3xl md:text-4xl bg-gradient-to-b from-blue-500 to-blue-300/70 bg-clip-text text-transparent font-semibold leading-tight">
            Mereka Sudah Buktikan
          </h2>
          <p className="text-gray-600 text-xl max-w-xl text-center">
            Kini saatnya kamu untuk buktikan
          </p>
        </div>

        <TestimonialSlider testimonials={testimonials} />
      </section>
    );
  }
);

export default TestimonialSection;
