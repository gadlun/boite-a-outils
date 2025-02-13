const reperes = [
  {
    definition: "absolu/relatif",
    parts: [
      {
        name: "absoluttt",
        definition: "Ce qui est indépendant de toute condition ou relationttt.",
        examples: [
          "La vitesse de la lumière dans le vide est constante, indépendamment du référentiel.",
          "Les lois de la physique sont invariantes dans tous les systèmes de référence inertiels.",
          "Les droits humains fondamentaux sont considérés comme inaliénables.",
          "Les constantes mathématiques comme π ou e ont une valeur fixe.",
          "L'entropie de l'univers augmente toujours selon la deuxième loi de la thermodynamique."
        ]
      },
      {
        name: "relatifff",
        definition: "Ce qui dépend de conditions ou de relations.",
        examples: [
          "La perception du temps varie selon la vitesse de déplacement d'un observateur.",
          "La valeur d'une monnaie fluctue en fonction des conditions économiques.",
          "Les normes culturelles diffèrent selon les sociétés et les époques.",
          "Le poids d'un objet change en fonction de la gravité de la planète où il se trouve.",
          "La notion de succès varie selon les critères personnels et sociaux."
        ]
      }
    ]
  },
  {
    definition: "abstrait/concret",
    parts: [
      {
        name: "abstraittt",
        definition: "Ce qui n'a pas de réalité tangible et qui est souvent difficile à saisir.",
        examples: [
          "Les émotions telles que la tristesse ou la joie.",
          "Les concepts mathématiques comme les nombres ou les formes géométriques.",
          "Les idées philosophiques sur la justice ou la liberté.",
          "Les théories scientifiques avant leur application pratique.",
          "Les valeurs morales ou éthiques que l'on défend."
        ]
      },
      {
        name: "concretttt",
        definition: "Ce qui a une existence réelle et tangible.",
        examples: [
          "Un bâtiment que l'on peut toucher et visiter.",
          "Une pomme que l'on peut manger.",
          "Une œuvre d'art que l'on peut admirer.",
          "Un événement marquant comme un mariage.",
          "Une expérience vécue qui a un impact direct sur une personne."
        ]
      }
    ]
  },
  {
    definition: "en acte/en puissance",
    parts: [
      {
        name: "en acteee",
        definition: "Ce qui est réalisé ou mis en œuvre dans la réalité.",
        examples: [
          "Un sportif qui participe à une compétition.",
          "Une entreprise qui lance un nouveau produit sur le marché.",
          "Un étudiant qui passe un examen.",
          "Un écrivain qui publie un livre.",
          "Un artiste qui expose son travail."
        ]
      },
      {
        name: "en puissance",
        definition: "Ce qui a le potentiel d'exister ou de se réaliser.",
        examples: [
          "Un étudiant qui a la capacité de devenir médecin après ses études.",
          "Un arbre qui peut donner des fruits dans quelques années.",
          "Un projet qui pourrait aboutir avec les bonnes ressources.",
          "Une idée qui pourrait changer le monde si elle était mise en œuvre.",
          "Un talent latent qui peut se développer avec la pratique."
        ]
      }
    ]
  },
  {
    definition: "analyse/synthèse",
    parts: [
      {
        name: "analyseeeee",
        definition: "Le processus de décomposition d'un tout en ses éléments constitutifs.",
        examples: [
          "L'examen des composants d'un texte littéraire pour en comprendre le sens.",
          "La séparation des différents éléments d'un problème mathématique.",
          "La décomposition des réactions chimiques dans un laboratoire.",
          "L'étude des tendances des données statistiques.",
          "L'évaluation des éléments d'une stratégie de marketing."
        ]
      },
      {
        name: "synthèse",
        definition: "Le processus de combinaison de divers éléments pour former un tout.",
        examples: [
          "Rédiger un résumé qui combine plusieurs articles sur un même sujet.",
          "Établir une conclusion à partir de plusieurs expériences scientifiques.",
          "Créer une œuvre musicale à partir de différents styles.",
          "Construire un plan d'action basé sur des recherches diverses.",
          "Fournir une réponse intégrée à une question complexe en réunissant différentes perspectives."
        ]
      }
    ]
  },
  {
    definition: "concept/image/métaphore",
    parts: [
      {
        name: "concept",
        definition: "Une idée abstraite qui représente un ensemble de propriétés ou de caractéristiques.",
        examples: [
          "La notion de démocratie comme un système de gouvernement.",
          "L'idée de développement durable pour une croissance respectueuse de l'environnement.",
          "Le modèle économique de l'économie circulaire.",
          "La théorie de l'évolution en biologie.",
          "Le concept de justice sociale."
        ]
      },
      {
        name: "image",
        definition: "Une représentation visuelle d'une idée ou d'un concept.",
        examples: [
          "Une peinture qui évoque la nature.",
          "Une photo d'un moment marquant de l'histoire.",
          "Un graphique illustrant des données économiques.",
          "Une infographie résumant des informations complexes.",
          "Un logo symbolisant une marque."
        ]
      },
      {
        name: "métaphore",
        definition: "Une figure de style qui compare deux choses sans utiliser 'comme'.",
        examples: [
          "Le temps est un voleur qui nous dérobe nos moments.",
          "Une mer de problèmes à surmonter.",
          "Les lumières de la ville scintillaient comme des étoiles.",
          "Un océan de tristesse l'envahit.",
          "La vie est un voyage parsemé d'embûches."
        ]
      }
    ]
  },
  {
    definition: "contingent/nécessaire",
    parts: [
      {
        name: "contingent",
        definition: "Ce qui est soumis à des conditions ou des événements extérieurs.",
        examples: [
          "Les résultats d'un match de sport qui peuvent varier selon les performances.",
          "La météo qui influence les activités de plein air.",
          "Les décisions politiques qui dépendent des élections.",
          "Les trésors cachés qui ne seront découverts que par hasard.",
          "La santé d'une personne qui peut fluctuer en fonction de nombreux facteurs."
        ]
      },
      {
        name: "nécessaire",
        definition: "Ce qui doit se produire ou être fait, indépendamment des circonstances.",
        examples: [
          "La gravité qui fait tomber les objets vers le sol.",
          "Les règles de la logique qui sont inévitables dans le raisonnement.",
          "Les lois de la physique qui régissent le mouvement.",
          "La nécessité de respirer pour survivre.",
          "Les exigences légales qui doivent être respectées."
        ]
      }
    ]
  },
  {
    definition: "croire/savoir",
    parts: [
      {
        name: "croire",
        definition: "Accepter quelque chose comme vrai sans preuve définitive.",
        examples: [
          "Avoir foi en un avenir meilleur sans certitude.",
          "Penser que ses efforts porteront leurs fruits.",
          "Espérer que ses amis resteront fidèles sans garantie.",
          "Assumer que des rumeurs sont fondées sans vérification.",
          "Imaginer que la chance sourira un jour."
        ]
      },
      {
        name: "savoir",
        definition: "Avoir connaissance de quelque chose par l'expérience ou l'éducation.",
        examples: [
          "Connaître les capitales des pays par apprentissage.",
          "Être capable de résoudre des équations mathématiques complexes.",
          "Avoir appris à parler plusieurs langues.",
          "Savoir cuisiner des plats traditionnels grâce à la pratique.",
          "Comprendre les principes scientifiques derrière des phénomènes naturels."
        ]
      }
    ]
  },
  {
    definition: "essentiel/accidentel",
    parts: [
      {
        name: "essentiel",
        definition: "Ce qui est fondamental et indispensable.",
        examples: [
          "L'amour et l'empathie dans les relations humaines.",
          "La sécurité dans un environnement de travail.",
          "La santé physique et mentale pour le bien-être.",
          "L'éducation pour le développement personnel.",
          "L'eau et la nourriture pour survivre."
        ]
      },
      {
        name: "accidentel",
        definition: "Ce qui est secondaire ou non déterminant dans une situation.",
        examples: [
          "Une couleur de voiture choisie par hasard.",
          "Un accessoire de mode qui n'est pas indispensable.",
          "Un événement qui ne modifie pas le cours des choses.",
          "Un détail dans une œuvre d'art sans impact sur le message principal.",
          "Une rencontre fortuite sans conséquence significative."
        ]
      }
    ]
  },
  {
    definition: "exemple/preuve",
    parts: [
      {
        name: "exemple",
        definition: "Un cas spécifique qui illustre un point ou une idée.",
        examples: [
          "Un article de loi utilisé pour illustrer un droit.",
          "Une anecdote racontée pour clarifier un concept.",
          "Une donnée statistique pour appuyer une affirmation.",
          "Une citation célèbre pour renforcer un argument.",
          "Un fait historique pour éclairer une théorie."
        ]
      },
      {
        name: "preuve",
        definition: "Une information ou un fait qui confirme la véracité d'une affirmation.",
        examples: [
          "Un document officiel attestant d'un événement.",
          "Des résultats d'expériences scientifiques validés.",
          "Des témoignages concordants d'observateurs.",
          "Des enregistrements ou des vidéos servant de vérification.",
          "Des données quantitatives soutenant une théorie."
        ]
      }
    ]
  },
  {
    definition: "expliquer/comprendre",
    parts: [
      {
        name: "expliquer",
        definition: "Rendre clair ou intelligible un sujet ou une idée.",
        examples: [
          "Décrire les étapes d'un processus complexe.",
          "Clarifier le sens d'un texte littéraire.",
          "Illustrer un concept scientifique par des exemples.",
          "Démontrer la logique derrière une décision.",
          "Interpréter les résultats d'une recherche."
        ]
      },
      {
        name: "comprendre",
        definition: "Avoir une connaissance ou une perception claire de quelque chose.",
        examples: [
          "Saisir les principes d'une théorie après étude.",
          "Réaliser les implications d'une décision.",
          "Intégrer les informations d'un cours pour les appliquer.",
          "Envisager les conséquences d'un acte.",
          "Percevoir les émotions d'une personne à travers ses expressions."
        ]
      }
    ]
  },
  {
    definition: "en fait/en droit",
    parts: [
      {
        name: "en fait",
        definition: "Ce qui est réellement ou objectivement vrai.",
        examples: [
          "La réalité d'une situation qui peut être différente de la perception.",
          "Les résultats d'une expérience qui ne correspondent pas aux attentes.",
          "Un événement qui s'est réellement produit malgré les rumeurs.",
          "Une observation qui contredit une croyance commune.",
          "Une décision qui s'appuie sur des faits tangibles."
        ]
      },
      {
        name: "en droit",
        definition: "Ce qui est conforme aux lois ou aux règles établies.",
        examples: [
          "Une autorisation légale pour effectuer une action.",
          "Les droits d'un citoyen garantis par la constitution.",
          "Une procédure judiciaire qui respecte les normes.",
          "Une décision d'un tribunal fondée sur la législation.",
          "Une obligation légale découlant d'un contrat."
        ]
      }
    ]
  },
  {
    definition: "formel/matériel",
    parts: [
      {
        name: "formel",
        definition: "Concernant les aspects structurels ou procéduraux.",
        examples: [
          "Une procédure administrative à suivre pour un dossier.",
          "Un document officiel avec tous les tampons nécessaires.",
          "Les règles d'un jeu qui doivent être respectées.",
          "Un contrat écrit qui stipule des obligations.",
          "Une invitation à un événement avec des détails précis."
        ]
      },
      {
        name: "matériel",
        definition: "Relatif aux objets physiques ou à la substance.",
        examples: [
          "Une pièce de rechange pour réparer un appareil.",
          "Les fournitures nécessaires pour un projet artistique.",
          "Les ressources physiques d'une entreprise.",
          "Un produit tangible à vendre sur le marché.",
          "Les outils nécessaires pour effectuer une tâche."
        ]
      }
    ]
  },
  {
    definition: "genre/espèce/individu",
    parts: [
      {
        name: "genre",
        definition: "Une catégorie qui regroupe des éléments ayant des caractéristiques communes.",
        examples: [
          "Les mammifères qui partagent des traits biologiques.",
          "Les genres littéraires comme la poésie ou le roman.",
          "Les catégories de musique telles que le jazz ou le rock.",
          "Les types de films comme la comédie ou l'horreur.",
          "Les espèces de fleurs qui ont des caractéristiques similaires."
        ]
      },
      {
        name: "espèce",
        definition: "Un groupe d'organismes qui peuvent se reproduire entre eux.",
        examples: [
          "Les lions qui partagent des traits génétiques.",
          "Les différentes espèces de roses dans un jardin.",
          "Les variétés de pommes cultivées dans le monde.",
          "Les espèces d'oiseaux qui migrent pendant l'hiver.",
          "Les types de poissons présents dans un océan."
        ]
      },
      {
        name: "individu",
        definition: "Un seul organisme ou entité qui peut être distinct des autres.",
        examples: [
          "Une personne ayant ses propres expériences.",
          "Un animal qui fait partie d'une espèce.",
          "Un arbre unique dans une forêt.",
          "Un étudiant dans une classe.",
          "Une œuvre d'art créée par un artiste."
        ]
      }
    ]
  },
  {
    definition: "hypothèse/conséquence/conclusion",
    parts: [
      {
        name: "hypothèse",
        definition: "Une supposition ou proposition à tester.",
        examples: [
          "Une idée sur l'impact d'un changement climatique sur les écosystèmes.",
          "Une proposition sur les effets d'un nouveau médicament.",
          "Un scénario sur le comportement des consommateurs face à un produit.",
          "Une conjecture sur l'avenir de l'économie mondiale.",
          "Un postulat sur l'évolution d'une espèce."
        ]
      },
      {
        name: "conséquence",
        definition: "Un résultat ou une suite d'un événement.",
        examples: [
          "L'augmentation du niveau de la mer à cause de la fonte des glaces.",
          "Une maladie qui se propage à la suite de l'urbanisation.",
          "Une réaction chimique qui produit de nouveaux éléments.",
          "Les effets d'une décision politique sur la société.",
          "Les ramifications d'une erreur dans un projet."
        ]
      },
      {
        name: "conclusion",
        definition: "La décision ou l'opinion tirée après réflexion.",
        examples: [
          "Une synthèse des résultats d'une étude.",
          "Les implications d'une recherche scientifique.",
          "Une recommandation basée sur des observations.",
          "Un jugement final formé après une enquête.",
          "Une évaluation des conséquences d'une action."
        ]
      }
    ]
  },
  {
    definition: "idéal/réel",
    parts: [
      {
        name: "idéal",
        definition: "Un état de perfection qui peut être souhaité mais rarement atteint.",
        examples: [
          "Une société où règnent l'égalité et la justice.",
          "Un monde sans pollution ni guerre.",
          "Une éducation accessible à tous, sans barrières.",
          "Un équilibre parfait entre travail et vie personnelle.",
          "Un écosystème totalement préservé."
        ]
      },
      {
        name: "réel",
        definition: "Ce qui existe effectivement dans le monde tangible.",
        examples: [
          "Les défis quotidiens auxquels les gens sont confrontés.",
          "Les inégalités persistantes dans la société.",
          "Les ressources naturelles limitées sur Terre.",
          "Les problèmes de santé qui touchent la population.",
          "Les événements historiques qui ont façonné le monde."
        ]
      }
    ]
  },
  {
    definition: "identité/égalité/différence",
    parts: [
      {
        name: "identité",
        definition: "L'ensemble des caractéristiques qui définissent un individu ou un groupe.",
        examples: [
          "Les traits culturels partagés par une communauté.",
          "Les valeurs et croyances qui constituent une personnalité.",
          "L'origine ethnique d'une personne.",
          "Les expériences de vie qui forment le caractère.",
          "Les aspects juridiques liés à un statut social."
        ]
      },
      {
        name: "égalité",
        definition: "L'état de traitement identique entre différents individus ou groupes.",
        examples: [
          "Les droits civiques reconnus à tous les citoyens.",
          "L'accès équitable à l'éducation pour tous.",
          "Les opportunités professionnelles offertes sans discrimination.",
          "La rémunération égale pour un travail égal.",
          "Les lois qui protègent contre la discrimination."
        ]
      },
      {
        name: "différence",
        definition: "Les caractéristiques qui distinguent un individu ou un groupe d'un autre.",
        examples: [
          "Les variations linguistiques entre les dialectes.",
          "Les croyances culturelles qui influencent le comportement.",
          "Les traits physiques qui rendent chacun unique.",
          "Les expériences personnelles qui façonnent les opinions.",
          "Les intérêts ou passions qui varient d'une personne à l'autre."
        ]
      }
    ]
  },
  {
    definition: "impossible/possible",
    parts: [
      {
        name: "impossible",
        definition: "Ce qui ne peut pas se produire ou être réalisé.",
        examples: [
          "Voyager plus vite que la lumière selon la physique actuelle.",
          "Ressusciter un être humain décédé.",
          "Créer un perpétuel mouvement sans énergie.",
          "Réconcilier des opinions radicalement opposées sans compromis.",
          "Prédire l'avenir avec une certitude absolue."
        ]
      },
      {
        name: "possible",
        definition: "Ce qui peut se produire ou être réalisé sous certaines conditions.",
        examples: [
          "L'innovation technologique qui change le monde.",
          "La réalisation d'un rêve avec du travail acharné.",
          "La guérison d'une maladie avec le bon traitement.",
          "Une amélioration des relations interpersonnelles par la communication.",
          "L'atteinte d'objectifs personnels avec de la détermination."
        ]
      }
    ]
  },
  {
    definition: "intuitif/discursif",
    parts: [
      {
        name: "intuitif",
        definition: "Ce qui se comprend ou se ressent sans raisonnement explicite.",
        examples: [
          "Un artiste qui crée sans suivre des règles strictes.",
          "Une personne qui prend des décisions basées sur son instinct.",
          "Une solution trouvée par un flash de compréhension.",
          "Une réaction émotionnelle immédiate à une situation.",
          "Un design qui est agréable et facile à utiliser sans explication."
        ]
      },
      {
        name: "discursif",
        definition: "Ce qui implique un raisonnement ou une argumentation logique.",
        examples: [
          "Une dissertation qui développe un sujet en profondeur.",
          "Un débat structuré sur des questions éthiques.",
          "Une explication détaillée d'un phénomène scientifique.",
          "Une présentation qui suit une logique claire.",
          "Un article analytique qui examine des données et des conclusions."
        ]
      }
    ]
  },
  {
    definition: "légal/légitime",
    parts: [
      {
        name: "légal",
        definition: "Ce qui est conforme aux lois établies.",
        examples: [
          "Un contrat signé entre deux parties.",
          "Une entreprise respectant les normes fiscales.",
          "Un acte notarié reconnu par l'État.",
          "Une décision de justice validée par un tribunal.",
          "Des règles de circulation en vigueur."
        ]
      },
      {
        name: "légitime",
        definition: "Ce qui est justifié ou accepté moralement, même en dehors des lois.",
        examples: [
          "Une protestation pour des droits humains fondamentaux.",
          "Une revendication pour des conditions de travail justes.",
          "Une demande d'égalité de traitement dans une société.",
          "Un acte de désobéissance civile pour dénoncer une injustice.",
          "Une lutte pour la protection de l'environnement."
        ]
      }
    ]
  },
  {
    definition: "médiat/immédiat",
    parts: [
      {
        name: "médiat",
        definition: "Ce qui est intermédiaire ou qui passe par un intermédiaire.",
        examples: [
          "Une relation qui nécessite l'intervention d'un tiers.",
          "Un message transmis par un intermédiaire comme un journaliste.",
          "Un processus de médiation dans un conflit.",
          "Un produit qui passe par plusieurs distributeurs avant d'arriver au consommateur.",
          "Un témoignage relayé par des sources multiples."
        ]
      },
      {
        name: "immédiat",
        definition: "Ce qui se produit directement, sans intermédiaire.",
        examples: [
          "Une réaction physique à un stimulus.",
          "Une réponse verbale à une question posée.",
          "L'accès instantané à des informations en ligne.",
          "Une décision prise sur un coup de tête.",
          "Les émotions qui émergent sans réflexion préalable."
        ]
      }
    ]
  },
  {
    definition: "objectif/subjectif/intersubjectif",
    parts: [
      {
        name: "objectif",
        definition: "Ce qui est basé sur des faits et des observations mesurables.",
        examples: [
          "Des données scientifiques quantifiables.",
          "Un rapport d'analyse basé sur des résultats mesurés.",
          "Une évaluation basée sur des critères précis.",
          "Des statistiques qui reflètent une réalité démographique.",
          "Une expérience répétable qui produit les mêmes résultats."
        ]
      },
      {
        name: "subjectif",
        definition: "Ce qui dépend des perceptions et des opinions personnelles.",
        examples: [
          "Une critique de film influencée par les goûts individuels.",
          "Un avis sur l'art qui varie d'une personne à l'autre.",
          "Une interprétation des événements basée sur des expériences antérieures.",
          "Une analyse littéraire marquée par les émotions de l'auteur.",
          "Une perception de la beauté qui diffère selon les cultures."
        ]
      },
      {
        name: "intersubjectif",
        definition: "Ce qui est partagé entre plusieurs sujets ou individus.",
        examples: [
          "Un accord social sur des normes et des valeurs.",
          "Une compréhension commune d'une situation.",
          "Un dialogue qui implique des perspectives multiples.",
          "Une expérience collective dans un groupe.",
          "Des croyances partagées au sein d'une communauté."
        ]
      }
    ]
  },
  {
    definition: "obligation/contrainte",
    parts: [
      {
        name: "obligation",
        definition: "Une exigence ou un devoir imposé, souvent par des lois ou des normes.",
        examples: [
          "Le paiement des impôts pour financer les services publics.",
          "Le respect des règles de sécurité au travail.",
          "Le suivi des protocoles de santé dans un établissement.",
          "Les responsabilités familiales qui incombent à chacun.",
          "Une promesse faite à un ami."
        ]
      },
      {
        name: "contrainte",
        definition: "Une restriction ou une pression qui limite les choix ou les actions.",
        examples: [
          "Les limitations budgétaires d'un projet.",
          "Les délais imposés pour la réalisation d'une tâche.",
          "Les règles d'une compétition sportive.",
          "Les obligations familiales qui restreignent la liberté personnelle.",
          "Les conditions de marché qui influencent une entreprise."
        ]
      }
    ]
  },
  {
    definition: "origine/fondement",
    parts: [
      {
        name: "origine",
        definition: "Le point de départ ou la source d'où quelque chose provient.",
        examples: [
          "Les racines culturelles d'une communauté.",
          "L'histoire d'une tradition transmise de génération en génération.",
          "Les influences géographiques sur un mode de vie.",
          "Le début d'une langue qui évolue avec le temps.",
          "Les événements historiques qui ont façonné une nation."
        ]
      },
      {
        name: "fondement",
        definition: "La base ou le principe sur lequel quelque chose est construit.",
        examples: [
          "Les valeurs éthiques qui régissent une organisation.",
          "Les principes scientifiques sur lesquels repose une théorie.",
          "Les concepts juridiques qui structurent un système légal.",
          "Les croyances fondamentales d'une philosophie.",
          "Les bases d'une relation solide entre des individus."
        ]
      }
    ]
  },
  {
    definition: "persuader/convaincre",
    parts: [
      {
        name: "persuader",
        definition: "Amener quelqu'un à adopter une opinion ou une action par des arguments.",
        examples: [
          "Un vendeur qui présente les avantages d'un produit.",
          "Un orateur qui mobilise le public autour d'une cause.",
          "Un ami qui encourage à essayer une nouvelle expérience.",
          "Un parent qui tente de changer d'avis sur une décision.",
          "Un avocat qui plaide en faveur de son client."
        ]
      },
      {
        name: "convaincre",
        definition: "Faire en sorte que quelqu'un accepte une idée comme vraie.",
        examples: [
          "Une recherche scientifique publiée qui soutient une théorie.",
          "Un article d'opinion qui défend une position politique.",
          "Un débat où des arguments solides sont présentés.",
          "Une preuve irréfutable qui confirme une affirmation.",
          "Une expérience personnelle partagée qui touche les émotions."
        ]
      }
    ]
  },
  {
    definition: "principe/cause/fin",
    parts: [
      {
        name: "principe",
        definition: "Une règle ou une croyance fondamentale qui guide le comportement.",
        examples: [
          "Le respect des droits humains comme fondement d'une société juste.",
          "L'égalité des chances pour tous les individus.",
          "La confidentialité des données personnelles sur Internet.",
          "L'intégrité dans la recherche scientifique.",
          "La transparence des décisions politiques."
        ]
      },
      {
        name: "cause",
        definition: "Le motif ou le facteur à l'origine d'un événement.",
        examples: [
          "Les changements climatiques résultant d'activités humaines.",
          "Les conflits armés déclenchés par des inégalités économiques.",
          "La maladie provoquée par un agent pathogène.",
          "Les comportements sociaux influencés par la culture.",
          "Les crises économiques dues à des décisions politiques."
        ]
      },
      {
        name: "fin",
        definition: "Le but ou l'objectif vers lequel s'oriente une action.",
        examples: [
          "La recherche d'une solution durable aux problèmes environnementaux.",
          "L'objectif d'un programme éducatif pour former des citoyens responsables.",
          "Le but d'une entreprise de maximiser ses profits.",
          "L'intention d'un projet artistique de provoquer une réflexion.",
          "L'aspiration d'une société à garantir le bien-être de tous ses membres."
        ]
      }
    ]
  },
  {
    definition: "public/privé",
    parts: [
      {
        name: "public",
        definition: "Ce qui est accessible à tous, sans restriction.",
        examples: [
          "Les parcs ouverts où chacun peut se rendre.",
          "Les bibliothèques municipales qui offrent des services gratuits.",
          "Les informations gouvernementales divulguées au citoyen.",
          "Les événements culturels organisés pour la communauté.",
          "Les droits civiques qui garantissent la participation de tous."
        ]
      },
      {
        name: "privé",
        definition: "Ce qui est réservé à un individu ou à un groupe restreint.",
        examples: [
          "Les conversations personnelles entre amis.",
          "Les données sensibles protégées par des lois.",
          "Les espaces de vie d'une personne, comme son domicile.",
          "Les informations confidentielles d'une entreprise.",
          "Les moments d'intimité partagés avec un partenaire."
        ]
      }
    ]
  },
  {
    definition: "ressemblance/analogie",
    parts: [
      {
        name: "ressemblance",
        definition: "Ce qui est similaire ou semblable.",
        examples: [
          "Les jumeaux monozygotes qui partagent des traits physiques identiques.",
          "Certaines espèces d'insectes qui imitent l'apparence de feuilles.",
          "Les structures moléculaires de l'hémoglobine humaine et celle des grands singes qui sont très proches.",
          "Les motifs fractals qui se répètent à différentes échelles dans la nature.",
          "Les langues issues d'une même famille linguistique qui ont des vocabulaires similaires."
        ]
      },
      {
        name: "analogie",
        definition: "Ce qui est comparable ou similaire par certains aspects.",
        examples: [
          "Le fonctionnement d'une cellule qui est comparable à celui d'une usine miniature.",
          "Le système solaire qui peut être vu comme un atome à grande échelle.",
          "Le cerveau humain qui est parfois comparé à un ordinateur complexe.",
          "Le cycle de l'eau sur Terre qui est analogue à la circulation sanguine dans le corps.",
          "La structure d'une entreprise qui est souvent comparée à celle d'un organisme vivant."
        ]
      }
    ]
  },
  {
    definition: "théorie/pratique",
    parts: [
      {
        name: "théorie",
        definition: "Un ensemble d'idées ou de principes qui expliquent un phénomène.",
        examples: [
          "La théorie de l'évolution qui décrit le développement des espèces.",
          "La théorie de l'économie qui analyse les marchés.",
          "Les lois de la thermodynamique qui régissent l'énergie.",
          "La théorie des jeux qui étudie les interactions stratégiques.",
          "La théorie de la relativité qui décrit le comportement des objets en mouvement."
        ]
      },
      {
        name: "pratique",
        definition: "L'application réelle des connaissances ou des théories.",
        examples: [
          "Un stage en entreprise pour acquérir des compétences professionnelles.",
          "L'utilisation de techniques dans un laboratoire scientifique.",
          "Une démonstration culinaire pour apprendre à cuisiner.",
          "Un entraînement sportif pour améliorer les performances.",
          "La mise en œuvre d'une stratégie marketing sur le terrain."
        ]
      }
    ]
  },
  {
    definition: "transcendant/immanent",
    parts: [
      {
        name: "transcendant",
        definition: "Ce qui est au-delà des limites de l'expérience humaine.",
        examples: [
          "La notion d'une divinité qui dépasse notre compréhension.",
          "Les idéaux de perfection que l'on cherche à atteindre.",
          "Les expériences spirituelles qui transcendent la réalité matérielle.",
          "Les concepts philosophiques qui explorent l'infini.",
          "Les émotions élevées ressenties lors d'événements marquants."
        ]
      },
      {
        name: "immanent",
        definition: "Ce qui est inhérent et présent dans le monde matériel.",
        examples: [
          "La beauté de la nature qui se manifeste à chaque pas.",
          "Les émotions humaines qui se manifestent dans les interactions quotidiennes.",
          "Les lois naturelles qui régissent le comportement de la matière.",
          "Les principes éthiques ancrés dans la société.",
          "Les valeurs culturelles qui façonnent l'identité d'un groupe."
        ]
      }
    ]
  },
  {
    definition: "universel/général/particulier/singulier",
    parts: [
      {
        name: "universel",
        definition: "Ce qui est valable pour tous et en tout lieu.",
        examples: [
          "Les droits de l'homme reconnus par tous les pays.",
          "Les principes de la physique qui s'appliquent dans l'ensemble de l'univers.",
          "Les émotions humaines communes à toutes les cultures.",
          "Les mathématiques qui ont une portée mondiale.",
          "Les valeurs fondamentales partagées par l'humanité."
        ]
      },
      {
        name: "général",
        definition: "Ce qui concerne un grand ensemble sans spécificité.",
        examples: [
          "Des lois qui s'appliquent à toute la population.",
          "Des tendances sociales observées dans un pays.",
          "Des règles de conduite acceptées par la majorité.",
          "Des déclarations politiques qui englobent un large éventail de citoyens.",
          "Des normes culturelles qui influencent divers groupes."
        ]
      },
      {
        name: "particulier",
        definition: "Ce qui est spécifique et peut ne pas s'appliquer à d'autres.",
        examples: [
          "Un cas juridique unique qui nécessite une attention spéciale.",
          "Les préférences individuelles qui diffèrent des normes sociales.",
          "Une tradition familiale qui n'est pas partagée par d'autres.",
          "Un produit conçu pour un marché niche.",
          "Une expérience personnelle qui marque un individu."
        ]
      },
      {
        name: "singulier",
        definition: "Ce qui est unique et distinct des autres.",
        examples: [
          "Un chef-d'œuvre artistique qui se démarque.",
          "Une invention originale qui change le monde.",
          "Un parcours de vie exceptionnel.",
          "Une théorie révolutionnaire qui remet en question l'établissement.",
          "Une passion personnelle qui définit une identité."
        ]
      }
    ]
  },
  {
    definition: "vrai/probable/certain",
    parts: [
      {
        name: "vrai",
        definition: "Ce qui est conforme à la réalité et vérifiable.",
        examples: [
          "Une information corroborée par des sources fiables.",
          "Un témoignage direct d'un témoin oculaire.",
          "Un fait scientifique établi par des recherches.",
          "Un événement documenté dans des archives.",
          "Une observation répétée et validée par des pairs."
        ]
      },
      {
        name: "probable",
        definition: "Ce qui a des chances de se réaliser mais n'est pas garanti.",
        examples: [
          "Les prévisions météorologiques qui se basent sur des tendances.",
          "Les résultats d'une étude qui suggèrent une tendance.",
          "Une hypothèse qui semble plausible mais nécessite des tests.",
          "Les opinions partagées par la majorité, sans certitude absolue.",
          "Les tendances de consommation basées sur des enquêtes."
        ]
      },
      {
        name: "certain",
        definition: "Ce qui est établi comme vrai sans aucun doute.",
        examples: [
          "Une loi de la nature qui a été prouvée.",
          "Un fait historique bien documenté.",
          "Une conclusion scientifique basée sur des résultats répétés.",
          "Une règle mathématique acceptée par tous.",
          "Une vérité universelle reconnue à travers les cultures."
        ]
      }
    ]
  }
];