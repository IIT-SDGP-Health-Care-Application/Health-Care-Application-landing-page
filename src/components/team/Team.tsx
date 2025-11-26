import { Users } from "lucide-react";
import TeamMemberCard from "./TeamMemberCard";

const teamMembers = [


    {
        name: "Kaludewa Premawardana",
        role: "",
        description:
            "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
        imageUrl: "/images/team-member-1.jpeg",
        accentColor: "blue" as const,
        socialLinks: {
            facebook: "#",
            github: "https://github.com/yenulimehansa24",
            linkedin: "https://www.linkedin.com/in/yenuli?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        },
    },
    {
        name: "Musharah Altaf",
        role: "",
        description: "Pop music lover, seeks joy and exciting pop concerts",
        imageUrl: "/images/team-member-2.png",
        accentColor: "blue" as const,
        socialLinks: {
            facebook: "#",
            github: "https://github.com/Mush-A",
            linkedin: "https://www.linkedin.com/in/mushraf-altaf/",
        },
    },
    {
        name: "Sandaru Senevirathne",
        role: "",
        description: "Bookworm, creative software developer with precision",
        imageUrl: "/images/team-member-3.jpeg",
        accentColor: "blue" as const,
        socialLinks: {
            facebook: "#",
            github: "https://github.com/Githmaz",
            linkedin: "https://www.linkedin.com/in/sandaru-senevirathne/",
        },
    },
    {
        name: "Ushalka Kapugamage ",
        role: "",
        description: "Bookworm, creative software developer with precision",
        imageUrl: "/images/team-member-4.png",
        accentColor: "blue" as const,
        socialLinks: {
            facebook: "#",
            github: "https://github.com/ushalkakapugamage",
            linkedin: "https://www.linkedin.com/in/ushalka-kapugamage/",
        },
    },
    {
        name: "Methasa Wickramasinghe",
        role: "",
        description: "Bookworm, creative software developer with precision",
        imageUrl: "/images/team-member-5.jpeg",
        accentColor: "blue" as const,
        socialLinks: {
            facebook: "#",
            github: "https://github.com/Methasa",
            linkedin: "https://www.linkedin.com/in/methasa-wickramasinghe-36865a243/",
        },
    },
    {
        name: "Sadun Sudara ",
        role: "",
        description: "Bookworm, creative software developer with precision",
        imageUrl: "/images/team-member-6.png",
        accentColor: "blue" as const,
        socialLinks: {
            facebook: "#",
            github: "https://github.com/sandunsudara",
            linkedin: "https://www.linkedin.com/in/sandunsudara/",
        },
    },
];

const Team = () => {
    return (
        <section className="min-h-screen bg-background py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
                        <Users className="h-5 w-5" />
                        <span className="text-sm font-medium">Our team</span>
                    </div>
                    <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                        Meet our team members
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
                        We Focus on the details of everything we do. All to help businesses
                        around the world Focus on what's most important to them.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Team;