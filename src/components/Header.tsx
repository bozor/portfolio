type HeaderProps = {
  text: string
}

const Header = ({text} : HeaderProps) => {
  return (
    <header className="page-header">
      <h1>{text}</h1>
    </header>
  )
}

export default Header;