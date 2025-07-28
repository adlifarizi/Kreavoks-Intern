import { forwardRef } from "react";
import EventCard from "@/components/cards/EventCard";
import Slider from "@/components/Slider";
import type { Event } from "@/types";

interface RekomendasiSectionProps {
  events: Event[];
}

const RekomendasiSection = forwardRef<HTMLDivElement, RekomendasiSectionProps>(
  ({ events }, ref) => {
    return (
      <section
        ref={ref}
        className="container mx-auto px-6 md:px-12 lg:px-16 py-10 w-full flex flex-col gap-6 z-10 opacity-0"
      >
        <div className="flex flex-col items-start gap-2 mb-4 md:mb-6">
          <h2 className="text-3xl md:text-4xl bg-gradient-to-b from-blue-500 to-blue-300/70 bg-clip-text text-transparent font-semibold leading-tight transition-transform duration-500 hover:translate-x-2">
            Rekomendasi Buat Kamu
          </h2>
          <p className="text-gray-600 text-xl max-w-xl">
            Gausah bingung, nih rekomendasi buat kamu
          </p>
        </div>

        <Slider
          items={events}
          renderItem={(item, index) => <EventCard event={item} />}
        />
      </section>
    );
  }
);

export default RekomendasiSection;
