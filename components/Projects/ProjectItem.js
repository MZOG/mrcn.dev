import Image from "next/image";
import Link from "next/link";
export default function ProjectItem({ title, description, url, image, tags, href, internal }) {
  return (
      <article className="leading-none">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <p className="mb-2">{description}</p>
        {internal ? <Link href={`/${url}`} className="mb-6 font-medium inline-block hover:underline">{url}</Link> : <a href={`https://${url}`} className="mb-6 font-medium inline-block hover:underline">{url}</a>}
        {internal ? <Link href={`/${url}`}>
              <Image src={image} alt={title} priority placeholder="blur" />
            </Link> : <a href={`https://${url}`} target="_blank">
          <Image src={image} alt={title} priority placeholder="blur" />
        </a> }
        
        {tags && <ul className="mt-6 flex flex-wrap gap-3">
          {tags?.map(tag => (
              <li key={tag} className="rounded-full border text-sm font-medium px-3 py-1">{tag}</li>
          ))}
        </ul>}
      </article>
  )
}
