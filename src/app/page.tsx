import Link from "next/link";
import { Github, Linkedin, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "react devs hub",
    description: "reversed job board for react developers",
    url: "https://reactdevshub.com",
  },
  {
    name: "mediwell",
    description: "medical web development services",
    url: "https://mediwell.pl",
  },
  {
    name: "doradcajezykowy",
    description: "website for language advisor",
    url: "https://doradcajezykowy.com",
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

      <ul className="space-y-4 pt-2">
        {projects.map((project, index) => {
          return (
            <li key={index}>
              <a
                href={project.url}
                className="flex flex-col space-y-1.5 !no-underline group"
                target="_blank"
              >
                <div className="">
                  <div className="flex gap-3 items-center font-medium text-sm underline underline-offset-4">
                    {project.name}
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
