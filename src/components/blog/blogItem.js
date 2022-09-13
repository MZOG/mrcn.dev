import React from "react"
import { Link } from "gatsby"

const BlogItem = ({ item }) => {
  const { title, description, href, image } = item

  return (
    <Link to={href}>
      <article className="group p-3 hover:bg-gray-100 rounded-xl">
        <img src={image} alt={title} className="rounded-xl" />
        <p className="text-xs mt-4">
          <span className="font-semibold">Sierpień</span> / kategoria
        </p>
        <h2 className="mt-2 leading-tight font-medium text-2xl group-hover:underline">
          {title}
        </h2>
        <p className="text-gray-500 text-sm mt-2 mb-2">{description}</p>
      </article>
    </Link>
  )
}

export default BlogItem
