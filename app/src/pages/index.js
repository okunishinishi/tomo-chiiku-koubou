import React from 'react'
import { List } from '../components/List'
import { useRouteData } from 'react-static'

export default () => {
  const { posts } = useRouteData()
  return (
    <div style={{ textAlign: 'center' }}>
      <List posts={posts}/>
    </div>
  )

}
