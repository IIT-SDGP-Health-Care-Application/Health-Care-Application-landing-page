import {Facebook, Github, Linkedin} from "lucide-react";

interface TeamMemberCardProps {
    name: string;
    role: string;
    description: string;
    imageUrl: string;
    accentColor: "blue" | "purple" | "pink";
    socialLinks?: {
        facebook?: string;
        github?: string;
        linkedin?: string;
    };
}

const TeamMemberCard = ({
                            name,
                            role,
                            description,
                            imageUrl,
                            accentColor,
                            socialLinks,
                        }: TeamMemberCardProps) => {
    const accentColorClass = {
        blue: "bg-team-card-blue border-blue-400",
        purple: "bg-team-card-purple border-primary",
        pink: "bg-team-card-pink border-pink-400",
    };

    return (
        <div className="group relative overflow-hidden rounded-3xl transition-all duration-300 
        ">
            <div className="aspect-[3/4] overflow-hidden">
                <img
                    src={imageUrl}
                    alt={`${name} - ${role}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500
                 group-hover:scale-110 group-hover:-translate-y-5"
                />
            </div>

            {/* Glass info box */}
            <div
                className="absolute left-0 right-0 bottom-0 m-4 rounded-3xl
               bg-white/30 group-hover:bg-white/80
               backdrop-blur-md border border-white/40
               p-6 duration-300"
            >
                <h3 className="text-xl font-bold text-foreground">{name}</h3>
                <p className="mb-3 text-sm font-medium text-primary">{role}</p>
                <div className="flex gap-3">
                    
                    {socialLinks?.github && (
                        <a
                            href={socialLinks.github}
                            className="text-muted-foreground transition-colors hover:text-primary"
                            aria-label="GitHub"
                        >
                            <Github className="h-5 w-5"/>
                        </a>
                    )}
                    {socialLinks?.linkedin && (
                        <a
                            href={socialLinks.linkedin}
                            className="text-muted-foreground transition-colors hover:text-primary"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-5 w-5"/>
                        </a>
                    )}
                </div>
            </div>
        </div>

    );
};

export default TeamMemberCard;
