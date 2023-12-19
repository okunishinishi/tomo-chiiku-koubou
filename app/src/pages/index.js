import React from 'react'
import { List } from '../components/List'
import { useRouteData, useSiteData, Head } from 'react-static'

export default () => {
  const { appTitle } = useSiteData()
  const { posts } = useRouteData()
  return (
    <>
      <Head>
        <title>{appTitle}</title>
      </Head>
      <div style={{ textAlign: 'center' }}>

        <List posts={posts}/>
      </div>
    </>
  )

}
