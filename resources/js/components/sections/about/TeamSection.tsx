import { forwardRef } from "react";

// type member = {
//     id: string;
//     name: string;
//     position: string;
//     image: string;
//     social: {
//         linkedin: string;
//         twitter: string;
//         instagram: string;
//     };
// };

const teamMembers = [
    {
        id: 1,
        name: "Setiady Ibrahim Anwar",
        position: "CEO & Founder",
        image: "/images/team/setiady.webp",
        social: {
            linkedin: "#",
            twitter: "#",
            instagram: "#",
        },
    },
    {
        id: 2,
        name: "Adli Farizi",
        position: "Chief Technology Officer",
        image: "/images/team/adli.webp",
        social: {
            linkedin: "#",
            twitter: "#",
            instagram: "#",
        },
    },
    {
        id: 3,
        name: "Muhammad Farhan Fahrezy",
        position: "Chief Marketing Officer",
        image: "/images/team/farhan.webp",
        social: {
            linkedin: "#",
            twitter: "#",
            instagram: "#",
        },
    },
    {
        id: 4,
        name: "Alya Putri Salsabila",
        position: "Chief Operating Officer",
        image: "/images/team/alya.webp",
        social: {
            linkedin: "#",
            twitter: "#",
            instagram: "#",
        },
    },
    {
        id: 5,
        name: "Muthia Nurul S",
        position: "Chief Financial Officer",
        image: "/images/team/muthia.webp",
        social: {
            linkedin: "#",
            twitter: "#",
            instagram: "#",
        },
    },
];

const TeamSection = forwardRef<HTMLDivElement>((_, ref) => (
    <section ref={ref} className="py-16 opacity-0">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-4">
                    Tim Kami
                </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                {teamMembers.map((member) => (
                    <div
                        key={member.id}
                        className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] group"
                    >
                        <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
                            <img
                                src={member.image || "/placeholder.svg"}
                                alt={member.name}
                                className="w-full h-full object-top object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-700 via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <div className="p-4 w-full flex flex-col text-center text-white">
                                    <h3 className="text-lg font-semibold">
                                        {member.name}
                                    </h3>
                                    <p>{member.position}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
));

export default TeamSection;