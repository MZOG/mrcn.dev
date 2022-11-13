import React from "react"
import { Link } from "gatsby"

const BlogItem = ({ item }) => {
  const { title, description, href } = item

  return (
    <Link to={href}>
      <article className="p-5 hover:bg-gray-100 rounded-xl mb-5">
        <h2 className="mt-2 leading-tight font-medium text-2xl">{title}</h2>
        <p className="text-xs mt-2 text-gray-500">
          <span className="font-semibold">Sierpień</span> / kategoria
        </p>
        <p className="text-sm mt-2 ">{description}</p>
      </article>
    </Link>
  )
}

export default BlogItem
