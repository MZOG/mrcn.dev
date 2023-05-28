import TechItem from "@/components/Tech/TechItem";
import ReactImage from '../../public/tech_react.svg'
import JavascriptImage from '../../public/tech_js.svg'
import GatsbyImage from '../../public/tech_gatsby.svg'
import WordpressImage from '../../public/tech_wp.svg'
import TailwindImage from '../../public/tech_tw.svg'
import VercelImage from '../../public/tech_vercel.svg'

const techItems = [
  {
    id: 1,
    name: "React",
    image: ReactImage
  },
  {
    id: 2,
    name: "JavaScript",
    image: JavascriptImage
  },
  {
    id: 3,
    name: "Gatsby",
    image: GatsbyImage
  },
  {
    id: 4,
    name: "Wordpress",
    image: WordpressImage
  },
  {
    id: 5,
    name: "TailwindCSS",
    image: TailwindImage
  },
  {
    id: 6,
    name: "Vercel",
    image: VercelImage
  },
]

export default function TechContainer() {
  return (
      <section className="bg-gray-50/80 py-10 md:py-20 my-20">
        <h1 className="text-2xl font-bold mb-10 text-center">Tech stack</h1>
        <div className="max-w-7xl mx-auto px-5  grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {techItems.map(item => (
              <TechItem key={item.id} {...item} />
          ))}
        </div>
      </section>
  )
}
