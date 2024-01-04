import React from 'react'
import { useSiteData, Head } from 'react-static'

export function Meta ({
  subTitle = ''
}) {
  const {
    appTitle,
    appDescription,
    siteRoot,
  } = useSiteData()
  const title = [appTitle, subTitle].filter(Boolean).join(' - ')
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title}/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content={siteRoot + '/images/og.jpeg'}/>
      <meta property="og:description" content={appDescription.replaceAll(`'`, '')}/>
      <meta property="og:site_name" content={appTitle}/>

      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:description" content={appDescription.replaceAll(`'`, '')}/>
      <meta name="twitter:title" content={appTitle}/>
      <meta property="twitter:image" content={siteRoot + '/images/og.jpeg'}/>
    </Head>
  )
}
