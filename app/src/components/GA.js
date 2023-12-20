import React from 'react'

export const GA = () => {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-MZC81C79Z9"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'G-MZC81C79Z9');
        `
      }}></script>
    </>
  )
}
