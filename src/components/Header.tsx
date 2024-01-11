import s from './Header.module.scss';

type HeaderProps = {
  text: string
  subtitle?: string
}

const Header = ({text, subtitle} : HeaderProps) => {
  return (
    <header className={s.wrap}>
      <h1>{text}</h1>
      {subtitle && <h3>{subtitle}</h3>}
    </header>
  )
}

export default Header;