import Nav from './Nav';

import s from './Layout.module.scss'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children } : LayoutProps) => {
  return (
    <main className={s.inner}>
      <section className={s.content}>
        <Nav />
        {children}
      </section>
    </main>
  )
}

export default Layout;