import "../style/Activity.css";
import activities from "../activities";
import { useParams } from "react-router-dom";

const Activity = () => {
  const { id } = useParams();
  const activity = activities.find((activity) => activity.id === parseInt(id));

  if (!activity) {
    return <h1>Activity not found</h1>;
  }

  return (
    <div className="activities_container">
      <div className="image_container">
        <div className="escalade_image">
          <img src={activity.img} alt={activity.title} />
        </div>
      </div>
      <div className="content">
        <div className="activity_title">
          <h1>{activity.title}</h1>
        </div>
        <div className="description">
          <h4>Description</h4>
          <p>{activity.description}</p>
        </div>
        <div className="conseils">
          <h4>Conseils</h4>
          <ul>
            {activity.tips.map((tip) => (
              <li key={tip.id}>
                <h5>{tip.title}</h5>
                <ul>
                  {tip.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="recommendations">
          <h4>Recommandations</h4>
          <ul>
            {activity.recommendations.map((recommendation) => (
              <li key={recommendation.id}>
                <h5>{recommendation.title}</h5>
                <p>{recommendation.details}</p> {/* Correction ici */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity;
