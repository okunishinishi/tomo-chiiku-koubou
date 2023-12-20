import React from 'react'
import { useRouteData, useSiteData, Head } from 'react-static'
import { Breadcrumb } from '../components/Breadcrumb'

export default () => {
  const { appTitle } = useSiteData()
  const { content } = useRouteData()
  return (
    <>
      <Head>
        <title>規約 - {appTitle}</title>
      </Head>
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
