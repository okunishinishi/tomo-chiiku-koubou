import React from 'react'
import { useRouteData, useSiteData, Head } from 'react-static'
import { List } from '../components/List'
import { Breadcrumb } from '../components/Breadcrumb'

export default function Blog () {
  const { appTitle } = useSiteData()
  const { posts } = useRouteData()
  return (
    <>
      <Head>
        <title>全ての記事 - {appTitle}</title>
      </Head>
      <Breadcrumb links={[
        { to: '/blog', label: '全ての記事' },
      ]}/>
      <div>
        <List posts={posts}/>
      </div>
    </>
  )
}
