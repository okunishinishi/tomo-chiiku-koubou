import { Link } from '../components/Router'
import React from 'react'

export function List ({ posts }) {
  return (
    <div className="list">
      {
        posts.map((post) => {
          return (
            <div className="list-item">
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
