import { useLayoutEffect } from 'react'
import { useLocation } from './Router'

export function Scroller () {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
