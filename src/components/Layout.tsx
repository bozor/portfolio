import Main from './Main';

import s from './Layout.module.scss';

type LayoutProps = {
  fontClassName: string;
  children: React.ReactNode;
};

const Layout = ({ fontClassName, children }: LayoutProps) => {
  return (
    <body className={`${fontClassName} ${s.outer}`}>
      <div className={s.topBlur}></div>
      <Main>{children}</Main>
      <div className={s.bottomBlur}></div>
    </body>
  );
};

export default Layout;
