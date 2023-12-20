import React from 'react'
import { useRouteData, useSiteData, Head } from 'react-static'
import { Breadcrumb } from '../components/Breadcrumb'
import { Meta } from '../components/Meta'

export default function Post () {
  const { post } = useRouteData()
  return (
    <>
      <Meta subTitle={post.title}/>
      <Breadcrumb links={[
        { to: '/blog/post/' + post.id, label: post.title },
      ]}/>
      <div className="post">
        {
          post.html && (
            <div className="post-content"
                 dangerouslySetInnerHTML={{ __html: post.html }}/>
          )
        }
      </div>
    </>
  )
}
