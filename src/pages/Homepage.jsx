import "../style/Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <div className="background-filter"></div>
      <div className="background"></div>
      <div className="title_container">
        <h1>
          OFFREZ-VOUS UNE PAUSE
          <br /> NUMÉRIQUE : AVENTURES ET SERENITES VOUS ATTENDENT !
        </h1>
        <h3>
          Que vous recherchiez l’adrénaline d’une aventure en plein air ou la
          tranquillité d’une retraite naturelle, nos activités
          <br /> sont conçues pour revitaliser votre esprit et votre corps.
          Laissez les paysages naturels vous apaiser et redécouvrez le <br />
          plaisir simple de vivre l’instant présent.
        </h3>
        <button className="more">Voir plus</button>
      </div>
    </div>
  );
}

export default Homepage;
