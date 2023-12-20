import React from 'react'
import { useEffect, useRef } from 'react'

export function ScrollToTopButton () {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const btnRef = useRef(null)
  useEffect(() => {
    const onScroll = () => {
      const button = btnRef.current
      const threshold = 20
      const shouldShow = document.body.scrollTop > threshold || document.documentElement.scrollTop > threshold
      if (shouldShow) {
        button.classList.remove('scroll-to-top-btn-hidden')

        const contentWidth = 1024
        if (window.innerWidth > contentWidth) {
          button.style.right = `${(window.innerWidth - contentWidth) / 2 + 20}px`
        }
      } else {
        button.classList.add('scroll-to-top-btn-hidden')
        button.style.right = 'auto'
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <a className="scroll-to-top-btn scroll-to-top-btn-hidden"
       onClick={scrollToTop}
       ref={btnRef}
    >⬆︎</a>
  )
}
