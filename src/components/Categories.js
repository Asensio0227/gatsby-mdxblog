import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

const query = graphql`
  query {
    allMdx {
      distinct(field: { frontmatter: { category: SELECT } })
    }
  }
`

const Categories = () => {
  const {
    allMdx: { distinct },
  } = useStaticQuery(query)

  return (
    <ul className="categories">
      {distinct.map((category, index) => {
        return (
          <li key={index}>
            <Link to={`/${category}`} className="category">
              {category}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Categories
