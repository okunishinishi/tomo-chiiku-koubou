import React from 'react'
import { useRouteData, useSiteData, Head } from 'react-static'
import { Breadcrumb } from '../components/Breadcrumb'
import { Meta } from '../components/Meta'

export default () => {
  const { content } = useRouteData()
  return (
    <>
      <Meta subTitle="規約"/>
      <Breadcrumb links={[
        { to: '/term', label: '規約' },
      ]}/>
      <div className="term"
      >
        <div className="term-content"
             dangerouslySetInnerHTML={{ __html: content }}
        >

        </div>
      </div>
    </>
  )

}
