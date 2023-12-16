import { Link } from '../components/Router'
import React from 'react'

export function List ({ posts }) {
  return (
    <div>
      {
        posts.map((post) => {
          return (
            <div>
              <Link to={`/blog/post/${post.id}/`}>
                {post.title}
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}
