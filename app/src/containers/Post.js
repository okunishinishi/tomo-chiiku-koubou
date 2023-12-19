import React from 'react'
import { useRouteData, useSiteData, Head } from 'react-static'

export default function Post () {
  const { appTitle } = useSiteData()
  const { post } = useRouteData()
  return (
    <>
      <Head>
        <title>{post.title} - {appTitle}</title>
      </Head>
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
