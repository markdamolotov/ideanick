import type { ReactNode } from 'react'

import css from '@/shared/ui/segment/index.module.scss'

export const Segment = ({
  children,
  description,
  title
}: {
  children?: ReactNode
  description?: string
  title: string
}) => {
  return (
    <section className={css.container}>
      <header className={css.header}>
        {<h2 className={css.title}>{title}</h2>}
        {description && <p>{description}</p>}
      </header>
      {children && <div className={css.content}>{children}</div>}
    </section>
  )
}
