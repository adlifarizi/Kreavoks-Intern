import { useState, useEffect } from "react";

export default function PromoCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-08-17T00:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center lg:justify-start items-center lg:gap-8 text-center flex-nowrap bg-white rounded-2xl px-0 md:px-6 py-2 md:py-3 shadow-md shadow-blue-200 hover:scale-105 transition-transform duration-300">
      {countdownItems.map((item, idx) => (
        <div key={idx} className="md:py-2 min-w-[80px]">
          <p className="text-lg md:text-xl lg:text-4xl font-semibold">{item.value}</p>
          <p className="text-xs md:text-sm font-medium">{item.label}</p>
        </div>
      ))}
    </div>
  );
}