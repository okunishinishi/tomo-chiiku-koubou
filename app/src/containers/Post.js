import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from 'components/Router'

export default function Post () {
  const { post } = useRouteData()
  return (
    <div>
      <Link to="/">{'<'} Back</Link>
      {
        post.html && (
          <div dangerouslySetInnerHTML={{ __html: post.html }}/>
        )
      }
    </div>
  )
}
