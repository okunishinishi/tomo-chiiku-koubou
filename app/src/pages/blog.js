import React from 'react'
import { useRouteData } from 'react-static'
import { List } from '../components/List'

export default function Blog () {
  const { posts } = useRouteData()
  return (
    <div>
      全ての記事
      <List posts={posts}/>
    </div>
  )
}
