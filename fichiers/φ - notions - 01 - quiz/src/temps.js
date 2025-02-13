const questions = [
    // question n°1 :
    { 
        question: "Quelle est la définition classique du temps en philosophie ?", 
        answers: ["Une notion fixe", "Un concept qui mesure le changement", "Une illusion"], 
        correct: 1, 
        explanation: "Le temps est souvent défini en philosophie comme un concept qui mesure le changement et les événements au cours de l'existence."
    },

    // question n°2 :
    { 
        question: "Qui a introduit la distinction entre le temps objectif et le temps subjectif ?", 
        answers: ["Kant", "Bergson", "Aristote"], 
        correct: 1, 
        explanation: "Henri Bergson a introduit cette distinction en soulignant que le temps vécu diffère du temps mesuré objectivement par des horloges."
    },
    
    // question n°3 :
    { 
        question: "Quel est le lien entre le temps et l'espace selon la relativité d'Einstein ?", 
        answers: ["Ils sont distincts", "Ils forment un continuum", "Ils n'ont pas d'impact l'un sur l'autre"], 
        correct: 1, 
        explanation: "La relativité d'Einstein propose que le temps et l'espace forment un continuum appelé espace-temps."
    },
    
    // question n°4 :
    { 
        question: "Quelle œuvre célèbre explore la nature du temps chez Augustin ?", 
        answers: ["Les Confessions", "La Cité de Dieu", "De Trinitate"], 
        correct: 0, 
        explanation: "Dans 'Les Confessions', Augustin réfléchit sur la nature du temps, en affirmant que seul le présent existe réellement."
    },
    
    // question n°5 :
    { 
        question: "Quel est le concept de 'temps cyclique' dans certaines philosophies ?", 
        answers: ["Le temps est linéaire", "Le temps se répète en cycles", "Le temps n'a pas de sens"], 
        correct: 1, 
        explanation: "Le temps cyclique est une conception selon laquelle le temps se répète en cycles, comme évoqué dans certaines traditions orientales."
    },
    
    // question n°6 :
    { 
        question: "Qui a étudié la notion de 'durée' par opposition au temps mesuré ?", 
        answers: ["Kant", "Bergson", "Heidegger"], 
        correct: 1, 
        explanation: "Henri Bergson a étudié la notion de 'durée', soulignant l'importance de l'expérience subjective du temps."
    },
    
    // question n°7 :
    { 
        question: "Quel est le lien entre temps et existence selon Heidegger ?", 
        answers: ["Pas de lien", "Le temps structure l'existence humaine", "Le temps est illusoire"], 
        correct: 1, 
        explanation: "Heidegger soutient que la temporalité est essentielle pour comprendre l'existence humaine."
    },
    
    // question n°8 :
    { 
        question: "Quelle affirmation décrit la vision matérialiste du temps ?", 
        answers: ["Le temps n'existe que dans l'esprit", "Le temps est une dimension physique", "Le temps est un cercle infini"], 
        correct: 1, 
        explanation: "La vision matérialiste du temps le décrit comme une dimension physique que l'on peut mesurer et observer."
    },
    
    // question n°9 :
    { 
        question: "Quel concept peut introduire une perception déformée du temps ?", 
        answers: ["L'illusion", "L'expérience", "La mémoire"], 
        correct: 2, 
        explanation: "La mémoire peut déformer notre perception du temps, influençant comment nous le ressentons et le comprenons."
    },
    
    // question n°10 :
    { 
        question: "Quel est le rôle du temps dans l'éthique selon Kant ?", 
        answers: ["Il n'a aucun rôle", "Il structure les choix moraux", "Il est une contrainte"], 
        correct: 1, 
        explanation: "Kant soutient que le temps structure les choix moraux, car nos actions ont des conséquences dans le temps."
    },

    // question n°11 :
    { 
        question: "Quel mouvement artistique a exploré la relation entre le temps et la perception ?", 
        answers: ["Surréalisme", "Cubisme", "Futurisme"], 
        correct: 2, 
        explanation: "Le futurisme a exploré la relation entre le temps et la perception, cherchant à capturer la vitesse et le mouvement."
    },

    // question n°12 :
    { 
        question: "Qui a proposé l'idée que le passé, le présent et le futur existent simultanément ?", 
        answers: ["Aristote", "Bergson", "Einstein"], 
        correct: 2, 
        explanation: "La relativité d'Einstein soutient que le passé, le présent et le futur existent simultanément dans le continuum de l'espace-temps."
    },
    
    // question n°13 :
    { 
        question: "Quel est le lien entre conscience du temps et psychologie ?", 
        answers: ["Pas de lien", "La psychologie explore comment le temps est perçu", "La psychologie ignore le temps"], 
        correct: 1, 
        explanation: "La psychologie étudie comment les individus perçoivent le temps et comment cela influence leur comportement et leurs émotions."
    },
    
    // question n°14 :
    { 
        question: "Quel est le concept d' 'heure planétaire' ?", 
        answers: ["Une notion spirituelle", "Un terme cosmique et temporel", "Un décalage horaire"], 
        correct: 1, 
        explanation: "L' 'heure planétaire' fait référence à une image du temps qui tient compte des différentes perceptions du temps à l'échelle mondiale."
    },
    
    // question n°15 :
    { 
        question: "Quelle affirmation résume l'idée que le temps est relatif ?", 
        answers: ["Le temps est fixe", "Le temps est une illusion", "Le temps varie en fonction de la vitesse de l'observateur"], 
        correct: 2, 
        explanation: "La relativité restreinte d'Einstein affirme que le temps varie en fonction de la vitesse à laquelle on se déplace."
    },

    // question n°16 :
    { 
        question: "Quel est le lien entre temps et liberté dans la philosophie contemporaine ?", 
        answers: ["Pas de lien", "La liberté se réalise en présence du temps", "Le temps limite la liberté"], 
        correct: 1, 
        explanation: "De nombreux philosophes contemporains soutiennent que la liberté se réalise pleinement dans la prise de conscience de notre temporalité."
    },

    // question n°17 :
    { 
        question: "Qui a écrit sur le thème du temps dans 'Le temps et le récit' ?", 
        answers: ["Kant", "Ricoeur", "M. Eliade"], 
        correct: 1, 
        explanation: "Paul Ricoeur a exploré la notion de temps à travers le récit et son influence sur la compréhension de l'expérience humaine."
    },

    // question n°18 :
    { 
        question: "Quel concept soutient que le temps devrait être considéré comme une dimension humaine ?", 
        answers: ["Temporalité humaine", "Indifférence temporelle", "Utilitarisme"], 
        correct: 0, 
        explanation: "Le concept de temporalité humaine souligne que le temps est lié à l'expérience subjective et au vécu du temps."
    },

    // question n°19 :
    { 
        question: "Quel lien existe-t-il entre le temps et l'espace dans la philosophie contemporaine ?", 
        answers: ["Ils sont opposés", "Ils sont interconnectés", "Ils ne se rencontrent jamais"], 
        correct: 1, 
        explanation: "La philosophie contemporaine souligne que le temps et l'espace sont étroitement interconnectés dans la compréhension du monde."
    },

    // question n°20 :
    { 
        question: "Quel est le lien entre nature du temps et expérience humaine ?", 
        answers: ["Pas de lien", "Le temps façonne l'expérience humaine", "L'expérience ignore le temps"], 
        correct: 1, 
        explanation: "La nature du temps influence profondément nos expériences, perceptions et modes de vie."
    },

    // question n°21 :
    { 
        question: "Qui a souligné que le temps peut être ressenti différemment selon les expériences personnelles ?", 
        answers: ["Bergson", "Kant", "Hegel"], 
        correct: 0, 
        explanation: "Henri Bergson a souligné l'importance de la durée subjective, affirmant que le temps est ressenti différemment selon nos expériences."
    },

    // question n°22 :
    { 
        question: "Quel est le rôle de l'horloge dans la mesure du temps ?", 
        answers: ["Elle n'a pas de rôle", "Elle standardise la perception du temps", "Elle complique la réalité"], 
        correct: 1, 
        explanation: "L'horloge standardise la manière dont le temps est perçu et mesuré, créant une référence commune."
    },

    // question n°23 :
    { 
        question: "Quel est le rapport entre l'expérience du temps et le vieillissement ?", 
        answers: ["Aucun rapport", "La perception du temps change avec l'âge", "Le vieillissement n'affecte pas le temps"], 
        correct: 1, 
        explanation: "La perception du temps peut changer avec l'âge ; les personnes âgées peuvent avoir l'impression que le temps passe plus vite."
    },

    // question n°24 :
    { 
        question: "Quel impact a l'éducation sur la compréhension du temps ?", 
        answers: ["Aucun impact", "Elle favorise une meilleure perception du temps", "Elle complique la notion de temps"], 
        correct: 1, 
        explanation: "L'éducation favorise une meilleure compréhension et une perception plus réfléchie du temps historique et philosophique."
    },

    // question n°25 :
    { 
        question: "Quel est le rôle des traditions culturelles dans la perception du temps ?", 
        answers: ["Elles n'ont aucun rôle", "Elles façonnent la manière dont le temps est perçu", "Elles sont négligeables"], 
        correct: 1, 
        explanation: "Les traditions culturelles façonnent souvent la manière dont les sociétés perçoivent et organisent le temps."
    },
    
    // question n°26 :
    { 
        question: "Quel est le lien entre temps et mémoire selon Bergson ?", 
        answers: ["Pas de lien", "Le temps est enregistré par mémoire", "La mémoire déforme la perception du temps"], 
        correct: 2, 
        explanation: "Bergson a souligné que la mémoire influence notre perception du temps, déformant parfois le passage de celui-ci."
    },

    // question n°27 :
    { 
        question: "Quel lien entre temps et existence selon Heidegger ?", 
        answers: ["Ils ne sont pas liés", "Le temps structure notre existence", "L'existence est en dehors du temps"], 
        correct: 1, 
        explanation: "Heidegger soutient que le temps est essentiel pour comprendre notre existence, car notre être est intrinsèquement lié à notre temporalité."
    },

    // question n°28 :
    { 
        question: "Quel est le concept de 'temps historique' ?", 
        answers: ["Un temps linéaire", "La durée humaine", "Une perception du temps liée à l'humanité"], 
        correct: 2, 
        explanation: "Le temps historique est perçu comme étant lié à l'humanité et à ses actions, évoluant avec les événements."
    },
    
    // question n°29 :
    { 
        question: "Quel est le lien entre temps et rythme dans la poésie ?", 
        answers: ["Pas de lien", "Le temps crée le rythme", "Le rythme ignore le temps"], 
        correct: 1, 
        explanation: "Le temps joue un rôle fondamental dans le rythme de la poésie, influençant comment les vers sont structurés."
    },

    // question n°30 :
    { 
        question: "Quel est le lien entre le temps et la technologie dans l'histoire moderne ?", 
        answers: ["Pas de lien", "La technologie influence notre perception du temps", "Le temps ignore la technologie"], 
        correct: 1, 
        explanation: "La technologie influence profondément notre perception du temps, en créant des attentes d'immédiateté."
    },

    // question n°31 :
    { 
        question: "Quel philosophe a écrit sur la 'nature du temps' dans 'La phénoménologie de l'esprit' ?", 
        answers: ["Kant", "Hegel", "Heidegger"], 
        correct: 1, 
        explanation: "Hegel a examiné la nature du temps dans 'La phénoménologie de l'esprit', mettant en relation temporalité et expérience."
    },

    // question n°32 :
    { 
        question: "Quel impact la mémoire a-t-elle sur l'expérience du temps ?", 
        answers: ["Aucun impact", "Elle altère notre perception", "Elle structure notre mémoire"], 
        correct: 1, 
        explanation: "La mémoire influence considérablement notre perception du temps, en déformant l'expérience objective des événements."
    },

    // question n°33 :
    { 
        question: "Quel est le lien entre expérience subjective du temps et culture ?", 
        answers: ["Pas de lien", "La culture influence la perception du temps", "La culture ignore le temps"], 
        correct: 1, 
        explanation: "La culture influence la manière dont nous percevons et structurons le temps dans notre vie quotidienne."
    },

    // question n°34 :
    { 
        question: "Quel est le rôle du temps dans la physiologie et le biorythme ?", 
        answers: ["Pas de rôle", "Le temps conditionne les rythmes biologiques", "Le physiologique ignore le temps"], 
        correct: 1, 
        explanation: "Le temps conditionne les rythmes biologiques et les cycles de sommeil, influençant notre état de santé."
    },
    
    // question n°35 :
    { 
        question: "Quel est le rapport entre le temps et le changement selon les philosophes ?", 
        answers: ["Pas de lien", "Le changement est au cœur de la notion de temps", "Le temps ne change pas"], 
        correct: 1, 
        explanation: "Les philosophes affirment souvent que le changement est une caractéristique essentielle du temps."
    },

    // question n°36 :
    { 
        question: "Quel est le lien entre temps et progrès social ?", 
        answers: ["Pas de lien", "Le progrès nécessite une prise en compte du temps", "Le progrès fait reculer le temps"], 
        correct: 1, 
        explanation: "Le progrès social nécessite une prise en compte du temps et des expériences humaines au fil des générations."
    },

    // question n°37 :
    { 
        question: "Quel est le concept d' 'instantanéité' dans le temps ?", 
        answers: ["L'absence totale de temps", "C'est un moment figé", "Un concept subjectif"], 
        correct: 1, 
        explanation: "'Instantanéité' désigne un moment figé dans le temps, capturant une expérience ou un point précis."
    },

    // question n°38 :
    { 
        question: "Qui a exploré le lien entre temps, espace et réalité ?", 
        answers: ["Einstein", "Hegel", "Poincaré"], 
        correct: 0, 
        explanation: "Albert Einstein a exploré le lien entre temps, espace et réalité dans ses théories de la relativité."
    },

    // question n°39 :
    { 
        question: "Quel rôle la perception du temps joue-t-elle dans la vie quotidienne ?", 
        answers: ["Aucun rôle", "Elle structure nos activités", "Elle complique la vie"], 
        correct: 1, 
        explanation: "La perception du temps structure nos activités quotidiennes, influençant notre emploi et nos priorités."
    },

    // question n°40 :
    { 
        question: "Quel est le rôle de la mémoire collective dans l'expérience du temps ?", 
        answers: ["Absente", "Influence notre perception historique", "Inutile"], 
        correct: 1, 
        explanation: "La mémoire collective façonne notre perception historique et notre compréhension du passé en reliant des événements au fil du temps."
    },

    // question n°41 :
    { 
        question: "Quel est le lien entre le temps et la mortalité selon les philosophes ?", 
        answers: ["Aucun lien", "La conscience du temps affecte notre rapport à la vie", "La mortalité ne doit pas être discutée"], 
        correct: 1, 
        explanation: "La conscience du temps influence notre rapport à la vie et à la mortalité, façonnant nos expériences et nos choix."
    },

    // question n°42 :
    { 
        question: "Quel est le lien entre le passé et le présent dans la philosophie du temps ?", 
        answers: ["Ils sont disjoints", "Le passé influence le présent", "Le présent est indépendant du passé"], 
        correct: 1, 
        explanation: "Dans la philosophie du temps, le passé influence inévitablement notre présente et nos choix."
    },

    // question n°43 :
    { 
        question: "Qui a abordé la question du temps dans le contexte de la phénoménologie ?", 
        answers: ["Husserl", "Heidegger", "Merleau-Ponty"], 
        correct: 1, 
        explanation: "Martin Heidegger a exploré le concept de temps dans un contexte phénoménologique, mettant l'accent sur l'être et l'existence."
    },

    // question n°44 :
    { 
        question: "Quel impact les technologies modernes ont-elles sur la perception du temps ?", 
        answers: ["Elles le ralentissent", "Elles l'accélèrent", "Pas d'impact"], 
        correct: 1, 
        explanation: "Les technologies modernes, comme les smartphones, accélèrent la perception du temps, créant une culture de l'immédiateté."
    },

    // question n°45 :
    { 
        question: "Quel est le lien entre temps et fatalisme ?", 
        answers: ["Ils sont opposés", "Le fatalisme ignore le temps", "Le fatalisme est déterminé par le temps"], 
        correct: 2, 
        explanation: "Le fatalisme est souvent déterminé par le temps, suggérant que les événements sont préordonnés et inévitables."
    },

    // question n°46 :
    { 
        question: "Quel lien entre temp et émotions existe selon les psychologues ?", 
        answers: ["Pas de lien", "Le temps influence les émotions", "Les émotions ignorent le temps"], 
        correct: 1, 
        explanation: "Le temps influence la manière dont les émotions sont perçues et vécues, affectant notre ressenti."
    },

    // question n°47 :
    { 
        question: "Quel concept désigne le fait que notre perception du temps peut varier selon les contextes ?", 
        answers: ["Rigidité temporelle", "Temps subjectif", "Temporalité normée"], 
        correct: 1, 
        explanation: "La temporalité subjective désigne la manière dont nos perceptions et nos expériences influencent notre évaluation du temps."
    },

    // question n°48 :
    { 
        question: "Quel est le rôle des traditions dans la construction de la perception du temps ?", 
        answers: ["Elles sont sans impact", "Elles influencent la façon dont le temps est vécu", "Elles ignorent la temporalité"], 
        correct: 1, 
        explanation: "Les traditions culturelles influencent comment le temps est vécu et structuré dans les différentes sociétés."
    },

    // question n°49 :
    { 
        question: "Quel impact peut avoir le souvenir sur notre perception du temps ?", 
        answers: ["Aucun impact", "Il peut modifier notre expérience du temps", "Il est irrationnel"], 
        correct: 1, 
        explanation: "Le souvenir peut influencer notre perception du temps, modifiant comment nous ressentons la durée des événements."
    },

    // question n°50 :
    { 
        question: "Quelle est l'importance du temps dans la philosophie existentialiste ?", 
        answers: ["Il est risible", "Il est central dans la définition de l'existence", "Il est un simple cadre"], 
        correct: 1, 
        explanation: "Le temps est central dans la philosophie existentialiste, affectant la manière dont les individus vivent leur existence."
    },

    // question n°51 :
    { 
        question: "Quel est le lien entre temps et changement dans la philosophie moderne ?", 
        answers: ["Pas de lien", "Le changement est une manifestation du temps", "Le temps s'arrête durant le changement"], 
        correct: 1, 
        explanation: "Le changement est souvent considéré comme une manifestation et une caractéristique essentielle du temps."
    },

    // question n°52 :
    { 
        question: "Quel est le rôle des horloges dans la structuration de la société moderne ?", 
        answers: ["Elles sont inutiles", "Elles régulent les comportements", "Elles compliquent les choses"], 
        correct: 1, 
        explanation: "Les horloges et les systèmes de mesure du temps régulent les comportements et créent des structurations sociales."
    },

    // question n°53 :
    { 
        question: "Qu'est-ce que la 'temporalité sociale' ?", 
        answers: ["Concept individuel du temps", "Récits temporels", "Perception du temps par une société donnée"], 
        correct: 2, 
        explanation: "La temporalité sociale se réfère à la manière dont une société donnée perçoit et organise le temps."
    },

    // question n°54 :
    { 
        question: "Quel est l'impact des saisons sur notre perception du temps ?", 
        answers: ["Aucun impact", "Elles influencent notre expérience du temps", "Elles déforment la réalité"], 
        correct: 1, 
        explanation: "Les saisons influencent notre perception du temps, affectant nos activités et nos comportements."
    },

    // question n°55 :
    { 
        question: "Quel est le lien entre temps et société ?", 
        answers: ["Ils sont opposés", "Le temps structure les relations sociales", "Le temps n'a pas d'impact"], 
        correct: 1, 
        explanation: "Le temps structure les relations sociales et influence la manière dont les sociétés interagissent."
    },

    // question n°56 :
    { 
        question: "Qui a abordé les implications de la perception subjective du temps ?", 
        answers: ["Kant", "Bergson", "Hegel"], 
        correct: 1, 
        explanation: "Henri Bergson a examiné les implications de la perception subjective du temps dans ses réflexions sur la durée."
    },
    
    // question n°57 :
    { 
        question: "Quel est le lien entre temps et actualité ?", 
        answers: ["Pas de lien", "Le temps influence l'actualité", "L'actualité complique le temps"], 
        correct: 1, 
        explanation: "Le temps influence l'actualité dans la mesure où les événements sont pris en compte et structurés dans des reportages."
    },

    // question n°58 :
    { 
        question: "Quel est le message clé du concept de 'non-linéarité' ?", 
        answers: ["Le temps est fixé", "Le temps est imprévisible et changeant", "Le temps est uni"], 
        correct: 1, 
        explanation: "Le concept de non-linéarité suggère que le temps n'est pas seulement linéaire, mais peut être perçu comme changeant et complexe."
    },

    // question n°59 :
    { 
        question: "Quel est le rapport entre l'espace et le temps dans la relativité ?", 
        answers: ["Ils sont séparés", "Ils s'interconnectent", "Ils ne se croisent jamais"], 
        correct: 1, 
        explanation: "Dans la relativité, l'espace et le temps sont interconnectés, formant un continuum connu sous le nom d'espace-temps."
    },
    
    // question n°60 :
    { 
        question: "Quel est le lien entre le temps et l'art ?", 
        answers: ["Pas de lien", "L'art exprime souvent des concepts temporels", "L'art doit éviter le temps"], 
        correct: 1, 
        explanation: "L'art peut exprimer des concepts temporels, représentant des expériences, des souvenirs et des émotions liés au temps."
    },

    // question n°61 :
    { 
        question: "Quel est le rôle des échéances dans l'organisation du temps ?", 
        answers: ["Aucun rôle", "Elles imposent un rythme", "Elles ne sont pas nécessaires"], 
        correct: 1, 
        explanation: "Les échéances imposent un rythme qui aide à structurer les activités et les priorités dans la gestion du temps."
    },

    // question n°62 :
    { 
        question: "Quelle est la vision cyclique du temps dans certaines cultures ?", 
        answers: ["Le temps est linéaire", "Le temps se répète en cycles", "Le temps n'existe pas"], 
        correct: 1, 
        explanation: "Dans certaines cultures, le temps est perçu comme cyclique, où les événements reviennent régulièrement."
    },

    // question n°63 :
    { 
        question: "Quel est le rôle de l'histoire dans la compréhension du temps ?", 
        answers: ["Inutile", "Elle donne du sens au temps", "Elle complique la perception"], 
        correct: 1, 
        explanation: "L'histoire donne du sens à la manière dont le temps est perçu et vécu dans diverses cultures et sociétés."
    },

    // question n°64 :
    { 
        question: "Quel est le lien entre les rythmes biologiques et la perception du temps ?", 
        answers: ["Pas de lien", "Les rythmes influencent la perception", "Les rythmes sont figés"], 
        correct: 1, 
        explanation: "Les rythmes biologiques influencent notre perception du temps, dictant des cycles de sommeil et d'activité."
    },

    // question n°65 :
    { 
        question: "Quel rôle les saisons jouent-elles dans la culture ?", 
        answers: ["Aucun rôle", "Elles influencent les activités humaines", "Elles sont négligées"], 
        correct: 1, 
        explanation: "Les saisons influencent les activités humaines, célébrations culturelles et rythmes de vie au sein des sociétés."
    },

    // question n°66 :
    { 
        question: "Quel est le concept de 'temps psychologique' ?", 
        answers: ["Syndrome du temps", "Perception subjective du temps", "Temps universel"], 
        correct: 1, 
        explanation: "'Temps psychologique' désigne la perception subjective du temps, qui peut varier selon les émotions et les expériences."
    },

    // question n°67 :
    { 
        question: "Quel lien établit-on entre temps et identité personnelle ?", 
        answers: ["Aucun lien", "Le temps façonne l'identité", "Le temps déforme l'identité"], 
        correct: 1, 
        explanation: "Le temps joue un rôle dans la construction de l'identité personnelle, à travers les expériences et le vécu."
    },

    // question n°68 :
    { 
        question: "Quel est le lien entre histoire et mémoire ?", 
        answers: ["Elles sont indépendantes", "La mémoire structure notre compréhension historique", "L'histoire n'influence pas la mémoire"], 
        correct: 1, 
        explanation: "La mémoire façonne notre compréhension de l'histoire, influençant comment nous nous remémorons le passé."
    },

    // question n°69 :
    { 
        question: "Qui a proposé que l'infini peut être compris à travers le temps ?", 
        answers: ["Kant", "Heidegger", "Bergson"], 
        correct: 0, 
        explanation: "Kant a soutenu que l'infini peut être abordé à travers notre compréhension du temps en tant que dimension de l'expérience."
    },

    // question n°70 :
    { 
        question: "Quel est le concept de 'temps cosmique' ?", 
        answers: ["Temps mesuré par des horloges", "La durée des événements dans un cadre universel", "Temps infini"], 
        correct: 1, 
        explanation: "'Temps cosmique' désigne la durée des événements mesurés dans un cadre universel, dépassant les expériences humaines."
    },

    // question n°71 :
    { 
        question: "Quel est le lien entre le présent et le passé dans la philosophie du temps ?", 
        answers: ["Ils ne se rencontrent jamais", "Le présent dépend du passé", "Le passé est inimportant"], 
        correct: 1, 
        explanation: "La philosophie du temps met en avant que le présent est influencé et façonné par le passé."
    },

    // question n°72 :
    { 
        question: "Quel est le lien entre l'espace et le temps dans la conception relativiste ?", 
        answers: ["Pas de lien", "Ils interagissent", "L'un élimine l'autre"], 
        correct: 1, 
        explanation: "La relativité d'Einstein montre que l'espace et le temps interagissent, formant ensemble un continuum."
    },

    // question n°73 :
    { 
        question: "Quel est le rôle de la mémoire collective dans l'expérience du temps ?", 
        answers: ["Aucun impact", "Elle structure notre compréhension historique", "Elle déforme la réalité"], 
        correct: 1, 
        explanation: "La mémoire collective façonne notre compréhension de l'histoire et de la manière dont on perçoit le temps."
    },

    // question n°74 :
    { 
        question: "Quel effet le rythme de la vie moderne a-t-il sur notre perception du temps ?", 
        answers: ["Accélère la perception du temps", "Le ralentit", "Pas d'effet"], 
        correct: 0, 
        explanation: "La rapidité de la vie moderne a tendance à accélérer notre perception du temps."
    },

    // question n°75 :
    { 
        question: "Quel est le rôle de la science dans l'étude du temps ?", 
        answers: ["Aucun rôle", "Elle cherche à comprendre ses lois", "Elle complique la compréhension"], 
        correct: 1, 
        explanation: "La science joue un rôle essentiel dans l'étude des lois du temps et de son comportement dans l'univers."
    },

    // question n°76 :
    { 
        question: "Quel lien existe-t-il entre l'art et la perception du temps ?", 
        answers: ["Pas de lien", "Les œuvres d'art peuvent exprimer des expériences temporelles", "L'art néglige le temps"], 
        correct: 1, 
        explanation: "Les œuvres d'art peuvent exprimer des expériences temporelles et influencer la perception du temps chez le spectateur."
    },

    // question n°77 :
    { 
        question: "Quel concept s'intéresse à l'efficacité des techniques pour manipuler le temps ?", 
        answers: ["Social", "Technique", "Chronomètre"], 
        correct: 1, 
        explanation: "Le concept de technique s'intéresse à l'efficacité des méthodes utilisées pour manipuler le temps à des fins humaines."
    },

    // question n°78 :
    { 
        question: "Quel est le lien entre temporalité et vécu individuel ?", 
        answers: ["Pas de lien", "La temporalité façonne le vécu", "Le vécu est indifférent au temps"], 
        correct: 1, 
        explanation: "La temporalité influence notre vécu individuel par la façon dont nous ressentons et expérimentons le passage du temps."
    },

    // question n°79 :
    { 
        question: "Qui a exploré l'idée que le temps est une dimension de l'expérience humaine ?", 
        answers: ["Kant", "Bergson", "Locke"], 
        correct: 1, 
        explanation: "Henri Bergson a exploré la notion de temps comme dimension clé de l'expérience humaine, soulignant son caractère subjectif."
    },

    // question n°80 :
    { 
        question: "Quel est le rôle de la perception du temps dans l'expérience culturelle ?", 
        answers: ["Aucun rôle", "Elle façonne les traditions", "Elle n'est pas prise en compte"], 
        correct: 1, 
        explanation: "La perception du temps façonne les traditions et les rituels d'une culture, influençant les façons de vivre."
    },

    // question n°81 :
    { 
        question: "Quel est le rapport entre science et temps dans le domaine de la physique quantique ?", 
        answers: ["Pas de rapport", "La physique quantique remet en question le temps absolu", "Le temps est fixe"], 
        correct: 1, 
        explanation: "La physique quantique remet en question l'idée d'un temps absolu, nécessitant une compréhension plus complexe du temps."
    },

    // question n°82 :
    { 
        question: "Qui a introduit le concept de 'temps historique' ?", 
        answers: ["Hegel", "Marx", "Kant"], 
        correct: 0, 
        explanation: "Hegel a développé le concept de temps historique dans le cadre de son analyse du développement des idées et des institutions."
    },

    // question n°83 :
    { 
        question: "Quel est l'impact de l'angoisse du temps sur l'individu dans la société moderne ?", 
        answers: ["Pas d'impact", "Elle favorise la productivité", "Elle crée du stress et de l'anxiété"], 
        correct: 2, 
        explanation: "L'angoisse du temps peut entraîner du stress et de l'anxiété, influençant négativement le bien-être personnel."
    },

    // question n°84 :
    { 
        question: "Quel lien établit-on entre évolution et perception du temps ?", 
        answers: ["Pas de lien", "L'évolution amplifie cette perception", "Cette perception ne change jamais"], 
        correct: 1, 
        explanation: "L'évolution des sociétés peut amplifier la perception du temps, rendant le vécu plus intensif face aux changements culturels."
    },

    // question n°85 :
    { 
        question: "Quel est l'impact de la technologie sur notre rapport au temps ?", 
        answers: ["Aucun impact", "Un impact limité", "Une accélération de la perception du temps"], 
        correct: 2, 
        explanation: "La technologie modernise souvent la perception du temps, l'accélérant au sein de nos modes de vie numériques."
    },

    // question n°86 :
    { 
        question: "Quel est le lien entre la mémoire individuelle et le temps ?", 
        answers: ["Ils sont indépendants", "La mémoire structure notre perception du temps", "La mémoire n'influence pas le temps"], 
        correct: 1, 
        explanation: "La mémoire individuelle structure notre perception du temps, influençant les souvenirs et la manière de vivre le passé."
    },

    // question n°87 :
    { 
        question: "Qui a exploré le concept de 'temps comme constructivisme' ?", 
        answers: ["Kant", "Foucault", "Bergson"], 
        correct: 1, 
        explanation: "Michel Foucault a examiné comment la notion de temps est construite socialement et historiquement."
    },

    // question n°88 :
    { 
        question: "Quel est le lien entre temps et rythme dans la poésie ?", 
        answers: ["Pas de lien", "Le rythme du langage reflète le temps", "La poésie ignore le temps"], 
        correct: 1, 
        explanation: "Le rythme dans la poésie est un reflet du temps, et il structure la manière dont le poème est perçu."
    },

    // question n°89 :
    { 
        question: "Quel impact la culture a-t-elle sur le vécu du temps ?", 
        answers: ["Aucun impact", "Elle façonne les expériences temporelles", "Elle est sans pertinence"], 
        correct: 1, 
        explanation: "La culture façonne la manière dont les individus perçoivent et vivent le temps, influençant les rituels et les pratiques quotidiennes."
    },

    // question n°90 :
    { 
        question: "Quel est le lien entre le temps et l'éthique dans les discussions contemporaines ?", 
        answers: ["Pas de lien", "Le temps guide l'éthique", "L'éthique est hors du temps"], 
        correct: 1, 
        explanation: "Le temps est souvent lié à l'éthique, car les choix éthiques doivent prendre en compte leurs implications temporelles."
    },
    
    // question n°91 :
    { 
        question: "Quel concept souligne l'importance de la planification temporelle dans la gestion ?", 
        answers: ["Gestion du stress", "Planification efficace", "Rythme de la vie"], 
        correct: 1, 
        explanation: "La planification temporelle est essentielle pour une gestion efficace des opérations et des ressources."
    },

    // question n°92 :
    { 
        question: "Quel impact la vitesse des événements a-t-elle sur la perception du temps ?", 
        answers: ["Aucun impact", "Elle crée une illusion de passage rapide", "Elle ralentit le temps"], 
        correct: 1, 
        explanation: "La vitesse des événements peut créer une illusion que le temps passe plus vite, affectant notre perception."
    },
    
    // question n°93 :
    { 
        question: "Quel lien établit-on entre science et expérience dans la recherche temporelle ?", 
        answers: ["Ils sont opposés", "Ils sont complémentaires", "Ils ne se croisent jamais"], 
        correct: 1, 
        explanation: "La science et l'expérience se complètent dans la recherche temporelle, chaque domaine enrichissant l'autre."
    },

    // question n°94 :
    { 
        question: "Quel est le concept de 'transcendance du temps' dans la philosophie ?", 
        answers: ["Une relation élémentaire", "Un mouvement vers le futur", "Un état au-delà du temps"], 
        correct: 2, 
        explanation: "La transcendance du temps renvoie à la notion d'un état d'être qui existe au-delà des contraintes du temps."
    },

    // question n°95 :
    { 
        question: "Quel est le lien entre justice et temps ?", 
        answers: ["Ils sont opposés", "Le temps influence la perception de la justice", "La justice n'a pas besoin de temps"], 
        correct: 1, 
        explanation: "Le temps influence la façon dont la justice est perçue et le traitement de ces enjeux dans la société."
    },

    // question n°96 :
    { 
        question: "Quel est le rôle de l'anticipation dans notre perception du temps ?", 
        answers: ["Aucun", "Elle influence la manière dont nous vivons le temps", "Elle ne change rien"], 
        correct: 1, 
        explanation: "L'anticipation peut influencer notre manière de vivre le temps, affectant notre expérience de la durée."
    },

    // question n°97 :
    { 
        question: "Quel est le rôle de la temporalité dans la narration selon les narratologues ?", 
        answers: ["Aucun", "Elle structure les récits", "Elle est un accessoire"], 
        correct: 1, 
        explanation: "La temporalité structure les récits et influence la façon dont une histoire est perçue et comprise par le lecteur."
    },

    // question n°98 :
    { 
        question: "Quel est le lien entre la perception personnelle du temps et la qualité de vie ?", 
        answers: ["Pas de lien", "Elles sont opposées", "Une perception positive du temps contribue à une meilleure qualité de vie"], 
        correct: 2, 
        explanation: "Une perception positive du temps peut contribuer à améliorer la qualité de vie, influençant le bien-être personnel."
    },

    // question n°99 :
    { 
        question: "Quel est le rôle du temps dans la religiosité ?", 
        answers: ["Pas de rôle", "Il structure les pratiques religieuses", "Il ignore les croyances"], 
        correct: 1, 
        explanation: "Le temps joue un rôle structurant dans les pratiques religieuses, déterminant les rituels et les célébrations."
    },

    // question n°100 :
    { 
        question: "Quel est le lien entre l'expérience du temps et l'âge ?", 
        answers: ["Pas de lien", "L'expérience du temps peut changer avec l'âge", "L'âge ne joue aucun rôle"], 
        correct: 1, 
        explanation: "L'expérience du temps peut changer avec l'âge, les personnes âgées ayant souvent l'impression que le temps passe plus vite."
    }
];