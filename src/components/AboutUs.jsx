import React from "react";

function AboutUs() {
  const myBack = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1610098136540-64369f9fe186?q=80&w=2744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={myBack}>
      <h1>Qui Sommes nous ?</h1>
      <p>
        Notre entreprise propose des activités uniques en plein air, permettant
        à chacun de se reconnecter avec la nature, de trouver la paix intérieure
        et de vivre des moments de joie authentique.
      </p>
    </div>
  );
}

export default AboutUs;
