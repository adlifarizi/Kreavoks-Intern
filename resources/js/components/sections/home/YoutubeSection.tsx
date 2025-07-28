import { forwardRef } from "react";

interface YouTubeSectionProps {
  videoId: string;
  title?: string;
  className?: string;
}

const YouTubeSection = forwardRef<HTMLElement, YouTubeSectionProps>(
  ({ videoId, title = "Introduction Video", className = "" }, ref) => {
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
      <section
        ref={ref}
        className={`container mx-auto px-6 md:px-12 lg:px-16 py-10 opacity-0 ${className}`}
      >
        <iframe
          className="w-full h-auto md:h-[560px] aspect-video bg-blue-500 border-4 border-blue-200 rounded-2xl md:rounded-3xl shadow-lg transition-transform duration-500 hover:scale-[1.01] hover:shadow-xl"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    );
  }
);

export default YouTubeSection;