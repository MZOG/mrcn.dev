import { Github, Linkedin, ExternalLink } from "lucide-react";
import { cn } from "../../@/lib/utils";

const projects = [
  {
    name: "react devs hub",
    description: "reversed job board for react developers",
    url: "https://reactdevshub.com",
    personal: true,
    year: 2024,
  },
  {
    name: "mediwell",
    description: "medical web development services",
    url: "https://mediwell.pl",
    personal: true,
    year: 2024,
  },
  {
    name: "doradcajezykowy",
    description: "website for language advisor",
    url: "https://doradcajezykowy.com",
    personal: false,
    year: 2023,
  },
  {
    name: "raypath",
    description: "website for raypath advisors",
    url: "https://raypath.expert",
    personal: false,
    year: 2023,
  },
  {
    name: "barber wizaa",
    description: "website for local barber",
    url: "https://barber-wizaa.pl",
    personal: false,
    year: 2023,
  },
];

export default function Home() {
  return (
    <section className="px-5 py-10 md:py-14 max-w-xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-lg">mrcn</h1>
          <p className="text-sm">Front End Developer</p>
        </div>
        <div className="flex gap-4 items-center">
          <Linkedin size={18} />
          <Github size={18} />
        </div>
      </div>

      <h2 className="py-5 font-mono">projects</h2>

      <ul className="space-y-6 pt-3">
        {projects.map((project, index) => {
          return (
            <li key={index}>
              <a
                href={project.url}
                className="flex flex-col space-y-1.5 group"
                target="_blank"
              >
                <div className="">
                  <div className="flex gap-3 items-center font-medium text-sm">
                    <span className="underline underline-offset-4">
                      {project.name}
                    </span>
                    <div
                      className={cn(
                        project.personal ? "bg-blue-600" : "bg-primary",
                        "text-[10px] text-white px-1.5 py-0 rounded-full"
                      )}
                    >
                      {project.personal ? "personal" : "client"}
                    </div>
                    <p className="text-[10px] text-muted-foreground">
                      {project.year}
                    </p>
                    <ExternalLink
                      size={13}
                      className="hidden group-hover:block"
                    />
                  </div>
                </div>
                <span className="text-muted-foreground text-sm">
                  {project.description}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
