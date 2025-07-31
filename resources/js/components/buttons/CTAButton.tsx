import React from "react";
import { IconType } from "react-icons";
import { Link } from "@inertiajs/react";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  icon?: IconType; // Optional icon
  className?: string;
};

const CTAButton = ({
  href,
  children,
  icon: Icon,
  className = "",
}: CTAButtonProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`hover:scale-105 active:scale-95 transition duration-300 select-none cursor-pointer inline-flex items-center bg-blue-500 rounded-full px-4 py-2.5 gap-2 font-medium text-base md:text-xl z-50 whitespace-nowrap ${className}`}
    >
      {Icon && <Icon size={20} />}
      {children}
    </Link>
  );
};

export default CTAButton;