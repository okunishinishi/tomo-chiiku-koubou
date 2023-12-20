import React from 'react'
import { List } from '../components/List'
import { useRouteData, useSiteData, Head } from 'react-static'
import { Meta } from '../components/Meta'

export default () => {
  const { posts } = useRouteData()
  return (
    <>
      <Meta/>
      <div style={{ textAlign: 'center' }}>
        <List posts={posts}/>
      </div>
    </>
  )

}
