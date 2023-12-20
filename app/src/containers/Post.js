import React from 'react'
import { useRouteData, useSiteData, Head } from 'react-static'
import { Breadcrumb } from '../components/Breadcrumb'

export default function Post () {
  const { appTitle } = useSiteData()
  const { post } = useRouteData()
  return (
    <>
      <Head>
        <title>{post.title} - {appTitle}</title>
      </Head>
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
