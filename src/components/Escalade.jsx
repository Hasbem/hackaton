import "../style/Escalade.css";
import activities from "../activities";

function Escalade() {
  const data = activities;

  return (
    <>
      <div className="activities_container">
        <div className="image_container">
          <div className="escalade_image">
            <img src="https://images.unsplash.com/photo-1658678921671-d61aa08b4442?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
          </div>
        </div>
        <div className="content">
          <div className="activity_title">
            <h1>Escalade</h1>
          </div>
          <div className="description">
            <h4>Description</h4>
            <p>{data[5].description}</p>
          </div>
          <div className="conseils">
            <ul>
              {data[5].tips.map((tip) => (
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
            <ul>
              {data[5].recommendations.map((recommendation) => (
                <li key={recommendation.id}>
                  <h5>{recommendation.title}</h5>
                  <ul>
                    {recommendation.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Escalade;
