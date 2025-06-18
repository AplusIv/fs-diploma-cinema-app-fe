import { Link } from "react-router-dom"
import { frontendBase } from "../services/api"
import dayjs from "dayjs"

const NotFound = () => {
  return (
    <main className="conf-steps">
      <section className="conf-step" >
        <div className="conf-step__wrapper">
          <h1>Страница не найдена!</h1>
          <p>
            Перейдите в <Link to={frontendBase}>Администраторскую</Link> при наличии соответствующих прав.<br />
            Или продолжите <Link to={frontendBase + "/client/schedule/" + dayjs().format('YYYY-MM-DD')}>выбор билетов</Link>.
          </p>
        </div>
      </section>
    </main>
  )
}

export default NotFound