import Nav from './Nav'

type LayoutProps = {
  className: string
  children: React.ReactNode
}

const Layout = ({ className, children } : LayoutProps) => {
  return (
    <main className={className}>
      <Nav />
      {children}
    </main>
  )
}

export default Layout;