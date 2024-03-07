/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'
    readonly PUBLIC_URL: string
  }
}

declare module '*.avif' {
  const src: string
  export default src
}

declare module '*.bmp' {
  const src: string
  export default src
}

declare module '*.gif' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}

declare module '*.svg' {
  import type { FunctionComponent, SVGProps } from 'react'

  const ReactComponent: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string }
  >

  export default ReactComponent
}

declare module '*.module.css' {
  const classes: Readonly<Record<string, string>>
  export default classes
}

declare module '*.module.scss' {
  const classes: Readonly<Record<string, string>>
  export default classes
}

declare module '*.module.sass' {
  const classes: Readonly<Record<string, string>>
  export default classes
}
