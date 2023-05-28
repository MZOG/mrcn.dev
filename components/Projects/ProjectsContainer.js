import ProjectItem from "@/components/Projects/ProjectItem";

// import project images
import ImageRaypath from "../../public/project-raypath.jpg"
import ImageWizaa from "../../public/project-wizaa.jpg"

const projects = [
  {
    id: 1,
    title: "Raypath",
    description: "Simple description goes here",
    url: "raypath.expert",
    tags: [
        'Web Development', 'UX/UI Design', 'React.js', 'Next.js', 'TailwindCSS', 'Vercel'
    ],
    image: ImageRaypath
  },
  {
    id: 2,
    title: "Barber WIZAA",
    description: "Simple description goes here",
    url: "barber-wizaa.pl",
    tags: [
      'Web Development', 'UX/UI Design', 'React.js', 'Next.js', 'TailwindCSS', 'Vercel'
    ],
    image: ImageWizaa
  }
]

export default function ProjectsContainer() {
  return (
      <section className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-14">
        {projects.map(project => (<ProjectItem key={project.id} {...project} />))}
        <ProjectItem internal title="Your Project" description="Hello, you ok?" url="contact" image={ImageWizaa} />
      </section>
  )
}
