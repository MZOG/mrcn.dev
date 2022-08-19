import React from "react"
import { Link } from "gatsby"

const BlogItem = ({ item }) => {
  const { title, description, href, image } = item

  return (
    <Link to={href}>
      <article className="group">
        <img src={image} alt={title} className="rounded-xl" />
        <p className="text-xs mt-2">
          <span className="font-semibold">Sierpień</span> / kategoria
        </p>
        <h2 className="mt-2 leading-tight font-medium text-lg group-hover:underline">
          {title}
        </h2>
        <p className="text-gray-500 text-sm mt-2">{description}</p>
      </article>
    </Link>
  )
}

export default BlogItem
