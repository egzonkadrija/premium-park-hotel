import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function RouteScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }

    const frameId = window.requestAnimationFrame(() => {
      const targetId = decodeURIComponent(hash.slice(1))
      const target = document.getElementById(targetId)

      if (!target) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        return
      }

      const topbar = document.querySelector('.topbar')
      const topbarHeight = topbar instanceof HTMLElement ? topbar.offsetHeight : 0
      const targetTop = target.getBoundingClientRect().top + window.scrollY - topbarHeight - 16

      window.scrollTo({
        top: Math.max(0, targetTop),
        left: 0,
        behavior: 'auto',
      })
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [pathname, hash])

  return null
}
