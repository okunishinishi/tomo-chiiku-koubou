import React from 'react'
import { useRouteData, useSiteData, Head } from 'react-static'

export default () => {
  const { appTitle } = useSiteData()
  const { content } = useRouteData()
  return (
    <>
      <Head>
        <title>規約 - {appTitle}</title>
      </Head>
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
