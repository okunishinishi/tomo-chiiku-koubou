import React from 'react'
import { useRouteData } from 'react-static'
//

export default function Post () {
  const { post } = useRouteData()
  return (
    <div className="post">
        {
          post.html && (
            <div className="post-content"
                 dangerouslySetInnerHTML={{ __html: post.html }}/>
          )
        }
    </div>
  )
}
