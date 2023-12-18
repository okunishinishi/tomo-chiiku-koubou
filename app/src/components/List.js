import { Link } from '../components/Router'
import React from 'react'

export function List ({ posts }) {
  return (
    <ul className="list">
      {
        posts.map((post) => {
          return (
            <li className="list-item">
              <Link className="list-item-inner" to={`/blog/post/${post.id}/`}>
                <div className="list-item-col">
                  <img alt={'thumbnail'}
                       className="list-item-thumbnail"
                       src={post.thumbnail}
                  />
                </div>
                <div className="list-item-col">
                  {post.title}
                </div>
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}
