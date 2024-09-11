'use client'

import { useScramble } from 'use-scramble';

import s from './Header.module.scss';

type HeaderProps = {
  text: string
  subtitle?: string
}

const Header = ({text, subtitle} : HeaderProps) => {
  const { ref } = useScramble({
    text: text,
    speed: 0.8,
    overflow: true,
    overdrive: false
  });

  return (
    <header className={s.wrap}>
      <h1 ref={ref} />
      {subtitle && <h3>{subtitle}</h3>}
    </header>
  )
}

export default Header;