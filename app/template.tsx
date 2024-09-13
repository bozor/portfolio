'use client'

import { ReactLenis } from "lenis/react"

type TemplateProps = {
  children: React.ReactNode
}

export default function Template({ children }: TemplateProps) {
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  )
}