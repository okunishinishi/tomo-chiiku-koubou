import React from 'react'
import { useRouteData } from 'react-static'

export default () => {
  const d = useRouteData()
  console.log({ d })
  return (
    <div className="term"
    >
      <div className="term-content"
           dangerouslySetInnerHTML={{ __html: d.content }}
      >

      </div>
    </div>
  )

}
