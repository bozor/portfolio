import s from './Role.module.scss';

type RoleProps = {
  title: string
  location: string
  dates: string
  description?: string[] | null
}

const Role = ({title, location, dates, description} : RoleProps) => {
  return (
    <section className={s.wrap}>
      <h3>
        <strong>{title}</strong>
        <span>({location})</span>
      </h3>
      <span className="date">{dates}</span>
      {
        description?.map((item, index) => <p key={index}>{item}</p>)
      }
    </section>
  )
}

export default Role;