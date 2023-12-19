import React from 'react'
import { useRouteData, useSiteData, Head } from 'react-static'
import { List } from '../components/List'

export default function Blog () {
  const { appTitle } = useSiteData()
  const { posts } = useRouteData()
  return (
    <>
      <Head>
        <title>記事 - {appTitle}</title>
      </Head>
      <div>
        全ての記事
        <List posts={posts}/>
      </div>
    </>
  )
}
