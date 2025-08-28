import { type ReactNode } from 'react'
import clsx from 'clsx'

const Container = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={clsx('max-w-7xl mx-auto px-5', className)}>{children}</div>
}

export default Container
