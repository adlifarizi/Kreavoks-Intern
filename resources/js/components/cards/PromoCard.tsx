import EventCard from "./EventCard";

interface PromoCardProps {
  mainEvent: any;
  stackEvent?: any;
}

export default function PromoCard({ mainEvent, stackEvent }: PromoCardProps) {
  return (
    <div className="relative w-full flex justify-center md:justify-start px-4 sm:px-6 md:px-0 max-w-[480px] mx-auto md:mx-0">
      <div className="relative w-full rounded-[40px] overflow-hidden bg-gradient-to-br from-blue-500 via-blue-400/80 to-white hover:scale-105 transition-transform duration-500 shadow-lg">
        <div className="relative flex flex-col items-center justify-center px-4 py-6">
          {/* Text Background */}
          <div className="absolute bottom-0 md:-bottom-5 w-full flex justify-center pointer-events-none z-0">
            <span className="text-[80px] md:text-[130px] font-extrabold text-black/10 tracking-tight select-none leading-none">
              PROMO
            </span>
          </div>

          {/* Cards Stack */}
          <div className="relative w-full max-w-[320px] sm:max-w-[340px] h-[460px] sm:h-[500px] md:h-[520px] flex flex-col items-center justify-center z-10">
            {stackEvent && (
              <div className="absolute w-full -rotate-6 opacity-60 scale-95 shadow-xl pointer-events-none">
                <EventCard event={stackEvent} />
              </div>
            )}
            <div className="relative w-full z-20">
              <EventCard event={mainEvent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}