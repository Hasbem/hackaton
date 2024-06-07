const activities = [
  {
    id: 1,
    img: "/src/assets/images/RANDONNEE.jpg",
    title: "RANDONNÉE",
    description:
      "Découvrez notre site dédié aux randonnées, une véritable invitation à l’évasion et à la déconnexion. Plongez au cœur de la nature, loin du bruit et des distractions du quotidien, et explorez des sentiers pittoresques qui vous mèneront à travers des paysages époustouflants. Que vous soyez un randonneur aguerri ou un amateur de balades tranquilles, nos itinéraires variés s’adaptent à tous les niveaux et à toutes les envies. Profitez de la tranquillité des forêts, des panoramas majestueux des montagnes, et des bords de rivière sereins. Reconnectez-vous à l’essentiel et laissez-vous guider par l’appel de l’aventure et la beauté sauvage de la nature.",
    tips: [
      {
        id: 1,
        title: "Planification",
        details: [
          "Choisissez un itinéraire adapté à votre niveau de forme physique et à votre expérience.",
          "Consultez les prévisions météorologiques et préparez-vous en conséquence.",
          "Informez quelqu'un de votre itinéraire et de votre heure estimée de retour.",
        ],
      },
      {
        id: 2,
        title: "Équipement",
        details: [
          "Portez des chaussures de randonnée confortables et appropriées.",
          "Habillez-vous en couches pour vous adapter aux changements de température.",
          "Emportez une carte, une boussole ou un GPS.",
          "Prévoyez une trousse de premiers secours, une lampe frontale, et un sifflet.",
        ],
      },
      {
        id: 3,
        title: "Hydratation et nutrition",
        details: [
          "Emportez suffisamment d'eau pour toute la durée de la randonnée.",
          "Apportez des encas énergétiques comme des fruits secs, des barres céréalières, et des noix.",
        ],
      },
      {
        id: 4,
        title: "Sécurité",
        details: [
          "Restez sur les sentiers balisés pour éviter de vous perdre.",
          "Soyez conscient de votre environnement et respectez la faune et la flore.",
          "En cas d’urgence, restez calme, trouvez un abri, et utilisez votre équipement de sécurité.",
        ],
      },
    ],
    recommendations: [
      {
        id: 1,
        title: "Le Tour du Mont Blanc",
        details:
          "Ce célèbre sentier de randonnée traverse la France, l'Italie, et la Suisse, offrant des vues spectaculaires sur les Alpes. C'est une aventure pour les randonneurs expérimentés, avec des étapes variées et des refuges accueillants tout au long du parcours.",
      },
      {
        id: 2,
        title: "Le Sentier des Douaniers (GR34)",
        details:
          "Ce sentier côtier longe les magnifiques paysages de la Bretagne sur plus de 1 800 kilomètres. Il est accessible à tous les niveaux et offre des panoramas époustouflants sur l'océan Atlantique.",
      },
      {
        id: 3,
        title: "Les Calanques de Marseille",
        details:
          "Situées entre Marseille et Cassis, ces formations rocheuses calcaires offrent des sentiers de randonnée spectaculaires avec des vues imprenables sur la Méditerranée. Les randonneurs peuvent explorer des criques cachées et des plages isolées.",
      },
      {
        id: 4,
        title: "Le Parc National des Cévennes",
        details:
          "Ce parc offre une variété de sentiers pour tous les niveaux, à travers des paysages sauvages et préservés. C'est une destination idéale pour les amateurs de nature et de tranquillité.",
      },
    ],
  },
  {
    id: 2,
    img: "/src/assets/images/SURF.jpg",
    title: "SURF",
    description:
      "Sentez l'adrénaline monter alors que vous domptez les vagues et laissez-vous emporter par la magie du surf. Imaginez-vous glisser sur l'eau, défiant l'océan, avec le soleil réchauffant votre peau et le vent salé caressant votre visage. Que vous soyez débutant ou surfeur expérimenté, chaque vague est une nouvelle aventure, une chance de vous dépasser et de vous connecter profondément à l'élément marin.",
    tips: [
      {
        id: 1,
        title: "Choix de la planche",
        details: [
          "Pour les débutants, optez pour une planche plus grande et plus stable.",
          "Les surfeurs plus avancés peuvent choisir des planches plus petites et plus agiles en fonction des conditions.",
        ],
      },
      {
        id: 2,
        title: "Sécurité",
        details: [
          "Ne surfez jamais seul, surtout si vous êtes débutant.",
          "Portez un leash pour ne pas perdre votre planche en cas de chute.",
          "Soyez conscient des conditions de marée, des courants et des prévisions météorologiques.",
        ],
      },
      {
        id: 3,
        title: "Technique de base",
        details: [
          "Pratiquez le 'pop-up' sur le sable pour maîtriser le mouvement de se lever sur la planche.",
          "Apprenez à lire les vagues et à choisir les bonnes pour surfer.",
          "Maintenez une posture équilibrée et détendue pour un meilleur contrôle.",
        ],
      },
      {
        id: 4,
        title: "Respect de l'environnement et des autres",
        details: [
          "Respectez les règles de priorité sur les vagues pour éviter les collisions.",
          "Ramassez vos déchets et évitez de polluer l’océan.",
          "Soyez respectueux des autres surfeurs et de la faune marine.",
        ],
      },
    ],
    recommendations: [
      {
        id: 1,
        title: "Biarritz",
        details:
          "Lieu emblématique du surf en France, Biarritz offre des spots adaptés à tous les niveaux. La plage de la Côte des Basques est idéale pour les débutants, tandis que la Grande Plage est parfaite pour les surfeurs plus expérimentés.",
      },
      {
        id: 2,
        title: "Hossegor",
        details:
          "Connue pour ses vagues puissantes et ses compétitions internationales, Hossegor est un paradis pour les surfeurs confirmés. Les plages de La Gravière et des Estagnots sont particulièrement populaires.",
      },
      {
        id: 3,
        title: "Lacanau",
        details:
          "À quelques kilomètres de Bordeaux, Lacanau offre des conditions de surf idéales pour tous les niveaux. La plage centrale est un excellent spot pour apprendre et progresser.",
      },
      {
        id: 4,
        title: "La Torche",
        details:
          "Située en Bretagne, La Torche est un spot de surf renommé pour ses vagues constantes et ses paysages magnifiques. C’est un lieu parfait pour les surfeurs de tous niveaux, avec une ambiance conviviale.",
      },
    ],
  },
  {
    id: 3,
    img: "/src/assets/images/PARACHUTE.jpg",
    title: "PARACHUTE",
    description:
      "Plongez dans l'adrénaline pure avec une expérience de parachutisme qui vous laissera sans voix. Imaginez-vous sauter d'un avion à des milliers de mètres d'altitude, sentir l'air s'engouffrer et le sol se rapprocher à une vitesse vertigineuse. Pendant ces quelques minutes de chute libre, le temps semble s'arrêter et une sensation de liberté absolue vous envahit. Puis, en ouvrant votre parachute, vous glissez doucement vers la terre, admirant des panoramas à couper le souffle et ressentant une paix intérieure indescriptible.",
    tips: [
      {
        id: 1,
        title: "Choisissez une école certifiée",
        details: [
          "Assurez-vous de choisir un centre de parachutisme certifié avec des instructeurs qualifiés et une bonne réputation.",
        ],
      },
      {
        id: 2,
        title: "Préparez-vous mentalement",
        details: [
          "Renseignez-vous sur le déroulement du saut et ce à quoi vous attendre pour réduire le stress et l'anxiété.",
        ],
      },
      {
        id: 3,
        title: "Habillez-vous confortablement",
        details: [
          "Portez des vêtements adaptés aux conditions météorologiques et des chaussures de sport confortables.",
        ],
      },
      {
        id: 4,
        title: "Écoutez les instructions",
        details: [
          "Suivez attentivement les instructions de votre moniteur pendant la formation au sol et le briefing avant le saut.",
        ],
      },
      {
        id: 5,
        title: "Restez détendu",
        details: [
          "Une fois en l'air, essayez de rester détendu et de profiter de chaque instant de cette expérience unique.",
        ],
      },
    ],
    recommendations: [
      {
        id: 1,
        title: "Gap-Tallard (Hautes-Alpes)",
        details:
          "Réputé pour ses conditions météorologiques idéales et ses paysages spectaculaires, Gap-Tallard est l'un des meilleurs endroits pour le parachutisme en Europe.",
      },
      {
        id: 2,
        title: "La Rochelle (Charente-Maritime)",
        details:
          "Sautez au-dessus de l'océan Atlantique et profitez de vues incroyables sur les îles de Ré et d'Oléron. Une expérience de saut unique avec un panorama maritime exceptionnel.",
      },
      {
        id: 3,
        title: "Le Mont-Saint-Michel (Normandie)",
        details:
          "Offrez-vous un saut au-dessus de l'une des merveilles du monde. La vue sur le Mont-Saint-Michel et sa baie est à couper le souffle et rendra votre expérience inoubliable.",
      },
      {
        id: 4,
        title: "Propriano (Corse)",
        details:
          "Découvrez la beauté de la Corse vue du ciel. Sautez au-dessus de la mer Méditerranée et profitez des paysages paradisiaques de l'île de beauté.",
      },
      {
        id: 5,
        title: "Aix-les-Bains (Savoie)",
        details:
          "Survolez le lac du Bourget et les Alpes pour une expérience de parachutisme au cœur de la nature savoyarde. Les vues sur les montagnes et les lacs alpins sont spectaculaires.",
      },
    ],
  },
  {
    id: 4,
    img: "/src/assets/images/VELO.jpg",
    title: "VÉLO",
    description:
      "Échappez au quotidien en enfourchant votre vélo et découvrez la liberté sur deux roues. Imaginez pédaler à travers des paysages magnifiques, ressentir la brise fraîche sur votre visage et l'adrénaline de l'aventure. Que ce soit pour une promenade tranquille à la campagne, une escapade sportive en montagne ou une exploration urbaine, le vélo offre une sensation de liberté et de connexion avec la nature sans égale.",
    tips: [
      {
        id: 1,
        title: "Choix du vélo",
        details: [
          "Pour les débutants, optez pour un vélo de route confortable ou un VTT adapté à votre terrain de prédilection.",
          "Assurez-vous que le vélo est bien ajusté à votre taille et à votre morphologie pour éviter les blessures.",
        ],
      },
      {
        id: 2,
        title: "Équipement de sécurité",
        details: [
          "Portez toujours un casque bien ajusté pour protéger votre tête.",
          "Utilisez des lumières et des réflecteurs si vous roulez tôt le matin, en soirée ou par faible visibilité.",
          "Portez des gants, des lunettes de protection et des vêtements adaptés aux conditions météorologiques.",
        ],
      },
      {
        id: 3,
        title: "Entretien et préparation",
        details: [
          "Vérifiez régulièrement les freins, les pneus et la chaîne de votre vélo pour assurer son bon fonctionnement.",
          "Emportez une trousse de réparation avec des outils de base, une chambre à air de rechange et une pompe.",
        ],
      },
      {
        id: 4,
        title: "Sécurité routière",
        details: [
          "Respectez le code de la route et soyez attentif aux autres usagers.",
          "Signalez vos intentions avec des gestes clairs et prévisibles.",
          "Soyez particulièrement vigilant aux intersections et aux ronds-points.",
        ],
      },
    ],
    recommendations: [
      {
        id: 1,
        title: "La Loire à Vélo",
        details:
          "Un itinéraire emblématique qui s’étend sur 800 kilomètres le long de la Loire, offrant des paysages variés et des sites historiques à découvrir. Parfait pour les cyclistes de tous niveaux.",
      },
      {
        id: 2,
        title: "Le Canal du Midi",
        details:
          "Pédalez le long de ce site classé au patrimoine mondial de l'UNESCO, entre Toulouse et la Méditerranée. Un parcours plat et agréable, idéal pour les familles et les débutants.",
      },
      {
        id: 3,
        title: "Le Tour du Mont-Blanc à Vélo",
        details:
          "Pour les cyclistes expérimentés à la recherche d'un défi, ce parcours alpin traverse trois pays et offre des paysages de montagne époustouflants.",
      },
      {
        id: 4,
        title: "La Vélodyssée",
        details:
          "Cet itinéraire côtier de plus de 1 200 kilomètres suit l'Atlantique de la Bretagne au Pays Basque. Parfait pour ceux qui veulent combiner vélo et plages magnifiques.",
      },
      {
        id: 5,
        title: "La Route des Vins d'Alsace",
        details:
          "Une promenade à travers les vignobles pittoresques d'Alsace, idéale pour les amateurs de vin et de beaux paysages. Les villages charmants et les caves accueillantes vous attendent.",
      },
    ],
  },
  {
    id: 5,
    img: "/src/assets/images/YOGA.jpg",
    title: "YOGA",
    description:
      "Laissez-vous emporter par la sérénité du yoga, une pratique millénaire qui unit le corps, l'esprit et l'âme. Imaginez-vous respirer profondément, vous étirer avec grâce et ressentir une profonde détente intérieure. Que ce soit pour soulager le stress quotidien, renforcer votre corps ou simplement vous connecter avec votre moi intérieur, le yoga offre une oasis de calme au milieu du tumulte de la vie moderne.",
    tips: [
      {
        id: 1,
        title: "Choisissez le bon style de yoga",
        details: [
          "Explorez différents styles de yoga comme le Hatha, le Vinyasa, le Yin ou le Kundalini pour trouver celui qui vous convient le mieux.",
        ],
      },
      {
        id: 2,
        title: "Trouvez un espace calme",
        details: [
          "Créez un environnement propice à la pratique avec peu de distractions et une ambiance apaisante.",
        ],
      },
      {
        id: 3,
        title: "Utilisez du matériel adapté",
        details: [
          "Utilisez un tapis de yoga confortable et des accessoires comme des blocs, des sangles et des coussins pour soutenir votre pratique.",
        ],
      },
      {
        id: 4,
        title: "Respectez votre corps",
        details: [
          "Écoutez votre corps et respectez vos limites. Ne forcez pas les postures et modifiez-les selon vos besoins.",
        ],
      },
      {
        id: 5,
        title: "Pratiquez régulièrement",
        details: [
          "Établissez une routine de yoga régulière pour en récolter les bénéfices physiques, mentaux et émotionnels.",
        ],
      },
    ],
    recommendations: [
      {
        id: 1,
        title: "Rishikesh Yoga Peeth (Paris)",
        details:
          "Un centre renommé offrant une gamme de cours de yoga pour tous les niveaux, dans une atmosphère paisible au cœur de Paris.",
      },
      {
        id: 2,
        title: "Yoga Village (Nice)",
        details:
          "Situé dans le sud de la France, ce centre propose des cours de yoga avec vue sur la mer Méditerranée, idéal pour se détendre et se ressourcer.",
      },
      {
        id: 3,
        title: "Yoga Bikram (Bordeaux)",
        details:
          "Spécialisé dans le yoga Bikram, ce studio offre des cours dans une salle chauffée pour améliorer la flexibilité et la detoxification du corps.",
      },
      {
        id: 4,
        title: "Centre de Yoga Iyengar (Lyon)",
        details:
          "Pour les amateurs de yoga Iyengar, ce centre propose des cours axés sur l'alignement et la précision des postures.",
      },
      {
        id: 5,
        title: "Yoga & Méditation (Aix-en-Provence)",
        details:
          "Offrez-vous une retraite de yoga et de méditation dans la belle région de Provence, pour une expérience de relaxation profonde.",
      },
    ],
  },
  {
    id: 6,
    img: "/src/assets/images/ESCALADE.jpg",
    title: "ESCALADE",
    description:
      "Découvrez l'escalade, une activité qui défie la gravité et vous emmène vers de nouveaux sommets. Imaginez-vous grimper avec agilité, défiant la roche et savourant chaque prise avec intensité. Que ce soit en intérieur sur des murs spécialement conçus ou en extérieur sur des parois naturelles, l'escalade offre une expérience physique et mentale unique.",
    tips: [
      {
        id: 1,
        title: "Formation et sécurité",
        details: [
          "Prenez des cours avec des instructeurs certifiés pour apprendre les techniques de base et les bonnes pratiques de sécurité.",
          "Apprenez à utiliser l'équipement correctement, y compris le harnais, les cordes et les mousquetons.",
        ],
      },
      {
        id: 2,
        title: "Condition physique",
        details: [
          "Renforcez votre corps avec des exercices spécifiques pour l'escalade, notamment pour les bras, les jambes, et le tronc.",
          "Travaillez sur votre souplesse pour améliorer votre agilité et votre capacité à atteindre les prises.",
        ],
      },
      {
        id: 3,
        title: "Planification de l'escalade",
        details: [
          "Choisissez des voies adaptées à votre niveau et à vos compétences.",
          "Informez quelqu'un de votre itinéraire et de votre heure de retour prévue lorsque vous escaladez en extérieur.",
        ],
      },
      {
        id: 4,
        title: "Respect de l'environnement",
        details: [
          "Respectez les réglementations locales et minimisez votre impact sur la nature.",
          "Nettoyez après votre passage et laissez les sites d'escalade propres pour les autres grimpeurs.",
        ],
      },
      {
        id: 5,
        title: "Mentalité et concentration",
        details: [
          "Restez concentré et calme pendant vos ascensions.",
          "Acceptez les défis avec une attitude positive et apprenez de chaque expérience.",
        ],
      },
    ],
    recommendations: [
      {
        id: 1,
        title: "Fontainebleau (Île-de-France)",
        details:
          "Réputé pour son grès et ses blocs, Fontainebleau est idéal pour l'escalade de bloc en plein air avec des milliers de voies à explorer.",
      },
      {
        id: 2,
        title: "Calanques de Marseille (Provence-Alpes-Côte d'Azur)",
        details:
          "Escaladez des falaises calcaires au-dessus de la mer Méditerranée dans un cadre à couper le souffle.",
      },
      {
        id: 3,
        title: "Verdon (Provence-Alpes-Côte d'Azur)",
        details:
          "Profitez de voies d'escalade exceptionnelles sur des falaises spectaculaires, parmi les plus belles d'Europe.",
      },
      {
        id: 4,
        title: "Chamonix (Auvergne-Rhône-Alpes)",
        details:
          "Découvrez l'escalade alpine avec des vues majestueuses sur le mont Blanc et les Alpes environnantes.",
      },
      {
        id: 5,
        title: "Les Gorges du Tarn (Occitanie)",
        details:
          "Grimpez sur des parois calcaires au-dessus des eaux turquoise du Tarn, offrant une escalade variée pour tous les niveaux.",
      },
    ],
  },
]
export default activities
