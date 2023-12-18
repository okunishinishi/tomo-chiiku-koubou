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
                <div className="list-item-col list-item-thumbnail-container">
                  <img alt="thumbnail"
                       className="list-item-thumbnail"
                       src={post.thumbnail}
                  />
                </div>
                <div className="list-item-col list-item-col-text-container">
                  <h3 className="list-item-title">{post.title}</h3>
                  <p className="list-item-desc">{post.description}</p>
                </div>
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}
