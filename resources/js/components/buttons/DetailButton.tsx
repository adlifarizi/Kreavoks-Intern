import { Link } from "@inertiajs/react";

interface DetailButtonProps {
  href: string;
  label?: string;
  className?: string;
}

export default function DetailButton({
  href,
  label = "Lihat Detail",
  className = "",
}: DetailButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-sm md:text-base text-blue-500 ${className}`}
    >
      {label}
      <i className="fa-solid fa-arrow-right"></i>
    </Link>
  );
}