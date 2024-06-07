import { useNavigate } from "react-router-dom"
import activities from "../hakkton.json"
import "../style/ActivityCard.css"

export default function ActivityCard() {
  const navigate = useNavigate()

  return (
    <>
      <div className="activities">
        <h1 id="activity" className="titleHead">
          Activités :
        </h1>
        <h2 className="paraph">
          Nous vous présentons nos activités disponibles :
        </h2>
        <div className="card_container">
          {activities.map((element) => (
            <div
              key={element.id}
              className="picture"
              onClick={() => navigate(`/activities/${element.id}`)}
              style={{ background: `url(${element.img}) center/cover` }}
              role="presentation"
            >
              <h3 className="descriptionAct">{element.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
