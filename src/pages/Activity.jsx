import { useParams } from "react-router-dom"
import activities from "../hakkton.json"

const Activity = () => {
  const { id } = useParams()
  const activity = activities.find((activity) => activity.id === parseInt(id))

  if (!activity) {
    return <h1>Activity not found</h1>
  }

  return (
    <div>
      <h1>{activity.title}</h1>
      <img src={activity.img} alt={activity.title} />
      <h2>{activity.description.heading}</h2>
      <p>{activity.description.text}</p>

      <h2>{activity.advices.heading}</h2>
      {Object.keys(activity.advices).map(
        (key, index) =>
          key !== "heading" && (
            <div key={index}>
              <h3>{activity.advices[key].title}</h3>
              <ul>
                {activity.advices[key].items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )
      )}

      <h2>{activity.recommendations.heading}</h2>
      {activity.recommendations.items.map((recommendation, index) => (
        <div key={index}>
          <h3>{recommendation.title}</h3>
          <p>{recommendation.text}</p>
        </div>
      ))}
    </div>
  )
}

export default Activity
