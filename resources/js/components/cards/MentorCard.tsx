"use client";

import type { Mentor } from "@/types";
import { useRef, useEffect, useState } from "react";

interface Props {
    mentor: Mentor;
}

export default function MentorCard({ mentor }: Props) {
    const nameRef = useRef<HTMLDivElement>(null);
    const jobRef = useRef<HTMLDivElement>(null);
    const [nameOverflow, setNameOverflow] = useState(false);
    const [jobOverflow, setJobOverflow] = useState(false);

    useEffect(() => {
        if (nameRef.current) {
            setNameOverflow(
                nameRef.current.scrollWidth > nameRef.current.clientWidth
            );
        }
        if (jobRef.current) {
            setJobOverflow(
                jobRef.current.scrollWidth > jobRef.current.clientWidth
            );
        }
    }, [mentor.name, mentor.job]);

    return (
        <div className="w-[240px] md:w-[260px] bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 overflow-hidden">
            <img
                src={mentor.image || `/images/placeholders/mentor-card.png`}
                alt={mentor.name}
                className="w-full h-64 object-top object-cover"
            />
            <div className="p-4 text-left flex flex-col h-full">
                {/* Name with marquee if overflow */}
                <div
                    ref={nameRef}
                    className={`font-semibold text-lg whitespace-nowrap overflow-hidden relative ${
                        nameOverflow ? "pr-2" : ""
                    }`}
                    style={{ maxWidth: "100%" }}
                >
                    {nameOverflow ? (
                        <span className="animate-marquee inline-block">
                            {mentor.name}&nbsp;&nbsp;&nbsp;
                        </span>
                    ) : (
                        mentor.name
                    )}
                </div>

                {/* Job with marquee if overflow */}
                {mentor.job && (
                    <div
                        ref={jobRef}
                        className={`text-sm text-gray-500 whitespace-nowrap overflow-hidden relative ${
                            jobOverflow ? "pr-2" : ""
                        }`}
                        style={{ maxWidth: "100%" }}
                    >
                        {jobOverflow ? (
                            <span className="animate-marquee inline-block">
                                {mentor.job}&nbsp;&nbsp;&nbsp;
                            </span>
                        ) : (
                            mentor.job
                        )}
                    </div>
                )}

                {mentor.role && (
                    <span className="mt-1 inline-block text-xs font-medium text-blue-500 bg-blue-50 px-2 py-1 rounded-full w-max">
                        {mentor.role}
                    </span>
                )}
            </div>
            {/* Marquee animation style */}
            <style jsx>{`
                .animate-marquee {
                    display: inline-block;
                    animation: marquee 7s linear infinite;
                }
                @keyframes marquee {
                    0% {
                        transform: translateX(0%);
                    }
                    20% {
                        transform: translateX(
                            0%
                        );
                    }
                    100% {
                        transform: translateX(-70%);
                    }
                }
            `}</style>
        </div>
    );
}
