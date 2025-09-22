import Nav from './Nav';

import s from './Main.module.scss';

type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <main className={s.container}>
      <section className={s.content}>
        <Nav />
        {children}
      </section>
    </main>
  );
};

export default Main;
