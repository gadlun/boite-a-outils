const questions = [
    // question n°1 :
    { 
        question: "Quelle est la définition classique de la science ?", 
        answers: ["Un ensemble de croyances", "L'étude systématique de la nature", "Un moyen de contrôler la société"], 
        correct: 1, 
        explanation: "La science est définie comme l'étude systématique des phénomènes naturels basée sur l'observation et l'expérimentation."
    },
    
    // question n°2 :
    { 
        question: "Qui est considéré comme le père de la méthode scientifique moderne ?", 
        answers: ["Aristote", "Galilée", "Newton"], 
        correct: 1, 
        explanation: "Galilée est souvent reconnu comme le père de la méthode scientifique moderne grâce à ses travaux sur l'observation et l'expérimentation."
    },
    
    // question n°3 :
    { 
        question: "Comment Kant définit-il la raison pratique ?", 
        answers: ["Une méthode de logique", "Le fondement de la moralité", "Un principe d'action arbitraire"], 
        correct: 1, 
        explanation: "Kant définit la raison pratique comme étant le fondement de la moralité, permettant de déterminer la loi morale."
    },
    
    // question n°4 :
    { 
        question: "Quel est le lien entre raison et émotion selon certains philosophes ?", 
        answers: ["Ils sont contraires", "Ils sont complémentaires", "Ils ne doivent pas coexister"], 
        correct: 1, 
        explanation: "De nombreux philosophes affirment que la raison et les émotions interagissent et sont nécessaires l'une à l'autre dans la prise de décision."
    },
    
    // question n°5 :
    { 
        question: "Qui a développé la perspective de la 'raison instrumentale' ?", 
        answers: ["Hegel", "Marx", "Habermas"], 
        correct: 0, 
        explanation: "Hegel a discuté de la raison instrumentale en la reliant à la logique et à l'efficacité dans la pensée."
    },

    // question n°6 :
    { 
        question: "Quelle est la principale caractéristique de la méthode scientifique ?", 
        answers: ["Subjectivité", "Observation et expérimentation", "Irrationalité"], 
        correct: 1, 
        explanation: "La méthode scientifique repose sur une approche systématique d'observation et d'expérimentation pour formuler des théories et des lois."
    },
    
    // question n°7 :
    { 
        question: "Quel concept de science a été introduit par Karl Popper ?", 
        answers: ["Falsifiabilité", "Vérifiabilité", "Substantiation"], 
        correct: 0, 
        explanation: "Karl Popper a introduit le concept de falsifiabilité comme critère pour évaluer la scientificité d'une théorie."
    },
    
    // question n°8 :
    { 
        question: "Qui a développé une approche empiriste du savoir ?", 
        answers: ["Descartes", "Hume", "Kant"], 
        correct: 1, 
        explanation: "David Hume a développé une approche empiriste, affirmant que nos connaissances proviennent de l'expérience sensorielle."
    },
    
    // question n°9 :
    { 
        question: "Quel lien établit-on entre science et éthique dans la recherche contemporaine ?", 
        answers: ["Ils sont indépendants", "La science ne doit pas tenir compte de l'éthique", "L'éthique est cruciale dans la recherche scientifique"], 
        correct: 2, 
        explanation: "Dans la recherche scientifique contemporaine, l'éthique est essentielle pour garantir des pratiques responsables et respectueuses."
    },

    // question n°10 :
    { 
        question: "Quel est le rôle de la théorie dans le processus scientifique ?", 
        answers: ["Aucun rôle", "Elle guide l'expérimentation", "Elle doit être ignorée"], 
        correct: 1, 
        explanation: "La théorie joue un rôle clé dans la science, en orientant les recherches et les expérimentations vers des hypothèses précises."
    },
    
    // question n°11 :
    { 
        question: "Qui a écrit 'La structure des révolutions scientifiques' ?", 
        answers: ["Popper", "Kuhn", "Lakatos"], 
        correct: 1, 
        explanation: "Thomas Kuhn a écrit 'La structure des révolutions scientifiques', proposant des concepts fondamentaux sur le changement de paradigmes en science."
    },
    
    // question n°12 :
    { 
        question: "Quel est le lien entre science et société selon les sociologues ?", 
        answers: ["Ils sont indépendants", "La science est influencée par la société", "La société n'influence pas la science"], 
        correct: 1, 
        explanation: "Les sociologues soutiennent que la science est influencée par des facteurs sociaux, culturels, et politiques."
    },
    
    // question n°13 :
    { 
        question: "Quel est le concept de 'scientificité' selon Popper ?", 
        answers: ["La capacité d'être soutenue par des preuves", "La capacité de résister à l'examen", "La capacité d'être acceptée par les pairs"], 
        correct: 1, 
        explanation: "Le principe de scientificité repose sur la falsifiabilité d'une théorie, c'est-à-dire sa capacité à être testée et potentiellement réfutée."
    },
    
    // question n°14 :
    { 
        question: "Quel est le rôle de la méthode scientifique dans l'établissement de théories ?", 
        answers: ["Pas essentiel", "Essentiel", "Facultatif"], 
        correct: 1, 
        explanation: "La méthode scientifique est essentielle pour établir des théories à partir d'observations et de données probantes."
    },
    
    // question n°15 :
    { 
        question: "Qui a proposé la distinction entre sciences formelles et sciences empiriques ?", 
        answers: ["Kant", "Hume", "Leibniz"], 
        correct: 2, 
        explanation: "Gottfried Wilhelm Leibniz a souvent discuté des différences entre les sciences formelles, basées sur des logiques, et les sciences empiriques, basées sur l'observation."
    },
    
    // question n°16 :
    { 
        question: "Quel est le lien entre science et progrès social ?", 
        answers: ["Pas de lien", "La science favorise le progrès social", "Le progrès social ignore la science"], 
        correct: 1, 
        explanation: "La science est souvent perçue comme un moteur du progrès social, apportant des solutions aux défis sociétaux."
    },

    // question n°17 :
    { 
        question: "Quel est le rôle des preuves empiriques dans la théorie scientifique ?", 
        answers: ["Elles sont superflues", "Elles permettent de confirmer des hypothèses", "Elles sont accessoires"], 
        correct: 1, 
        explanation: "Les preuves empiriques sont essentielles pour valider des hypothèses et tirer des conclusions dans la science."
    },

    // question n°18 :
    { 
        question: "Quel concept définit une connaissance acquise par l'expérience dans le domaine scientifique ?", 
        answers: ["Connaissance théorique", "Connaissance empirique", "Connaissance préétablie"], 
        correct: 1, 
        explanation: "La connaissance empirique est une connaissance qui découle de l'expérience directe et de l'observation."
    },

    // question n°19 :
    { 
        question: "Quel est le rôle des hypothèses dans la recherche scientifique ?", 
        answers: ["Pas de rôle", "Elles guident l'expérimentation", "Elles sont inutiles"], 
        correct: 1, 
        explanation: "Les hypothèses guident les expérimentations et les recherches, fournissant un cadre pour l'étude scientifique."
    },

    // question n°20 :
    { 
        question: "Qui a écrit 'La responsabilité sociale de la recherche' ?", 
        answers: ["Kant", "Popper", "Dewey"], 
        correct: 2, 
        explanation: "John Dewey a plaidé pour la responsabilité sociale, soulevant la nécessité d’honorer l'impact des recherches sur la société."
    },

    // question n°21 :
    { 
        question: "Quel est le lien entre science et dualisme spirituel ?", 
        answers: ["Ils sont selon la même philosophie", "Ils sont opposés", "Les deux se complètent"], 
        correct: 1, 
        explanation: "Le dualisme spirituel souvent s'oppose à la science, prétendant à l'existence de réalités non scientifiques."
    },

    // question n°22 :
    { 
        question: "Quel est le défi majeur du développement durable dans le contexte scientifique ?", 
        answers: ["Il n'y a aucun défi", "Équilibre entre ressources et croissance", "Absence de régulation"], 
        correct: 1, 
        explanation: "Le développement durable pose un défi en cherchant à équilibrer l'utilisation des ressources et la croissance économique."
    },

    // question n°23 :
    { 
        question: "Quel concept désigne l'importance de la recherche scientifique dans l'amélioration de la vie humaine ?", 
        answers: ["Avancées scientifiques", "Pauvreté scientifique", "Science-application"], 
        correct: 0, 
        explanation: "Les avancées scientifiques sont cruciales pour améliorer la qualité de vie et aborder des enjeux sociaux complexes."
    },

    // question n°24 :
    { 
        question: "Quelle est la relation entre logique et méthode scientifique ?", 
        answers: ["Pas de lien", "La logique est essentielle à la méthode scientifique", "La méthode scientifique ignore la logique"], 
        correct: 1, 
        explanation: "La logique est essentielle à la méthode scientifique, car elle structure le raisonnement et les déductions."
    },

    // question n°25 :
    { 
        question: "Quel impact la technologie a-t-elle sur la recherche scientifique ?", 
        answers: ["Elle n'a pas d'impact", "Elle améliore l'efficacité de la recherche", "Elle la complique"], 
        correct: 1, 
        explanation: "La technologie améliore l'efficacité de la recherche, facilitant des méthodes d'analyse avancées."
    },

    // question n°26 :
    { 
        question: "Quel est le lien entre science et scepticisme ?", 
        answers: ["Aucun lien", "Le scepticisme est un outil de la science", "Le scepticisme freine la science"], 
        correct: 1, 
        explanation: "Le scepticisme scientifique est considéré comme un outil qui pousse à questionner et vérifier les principes établis."
    },

    // question n°27 :
    { 
        question: "Qui a formulé l'idée que le progrès scientifique ne doit pas se faire au détriment de l'éthique ?", 
        answers: ["Derrida", "Foucault", "Kant"], 
        correct: 2, 
        explanation: "Kant a insisté sur l'importance de l'éthique dans la science, pour guider les chercheurs dans leurs démarches."
    },

    // question n°28 :
    { 
        question: "Quel est le concept de 'biais de confirmation' dans la recherche scientifique ?", 
        answers: ["Les biais n'existent pas", "La tendance à privilégier les idées confirmant les croyances existantes", "C'est un phénomène bénéfique"], 
        correct: 1, 
        explanation: "Le biais de confirmation désigne la tendance à chercher et à interpréter les informations de manière à confirmer ses croyances."
    },

    // question n°29 :
    { 
        question: "Quel philosophe a analysé le savoir selon la perspective des institutions ?", 
        answers: ["Habermas", "Marx", "Platon"], 
        correct: 0, 
        explanation: "Jürgen Habermas a analysé le savoir en relation avec les institutions, soulignant leur influence sur le discours public."
    },

    // question n°30 :
    { 
        question: "Quel est le rôle de l'expérimentation dans la méthode scientifique ?", 
        answers: ["Pas important", "Essentiel à la validation des hypothèses", "Facultatif"], 
        correct: 1, 
        explanation: "L'expérimentation est essentielle à la méthode scientifique pour vérifier et valider des hypothèses."
    },
    
    // question n°31 :
    { 
        question: "Quel lien existe entre science et philosophie dans le cadre de la raison ?", 
        answers: ["Ils sont sans rapport", "La philosophie nourrit la réflexion scientifique", "La philosophie n'est pas nécessaire"], 
        correct: 1, 
        explanation: "La philosophie nourrit la réflexion scientifique en fournissant des cadres conceptuels et des questions critiques."
    },

    // question n°32 :
    { 
        question: "Quel est le rôle de la comparaison dans l'établissement de résultats scientifiques ?", 
        answers: ["Pas important", "Essentiel pour la validation des faits", "Inutile"], 
        correct: 1, 
        explanation: "La comparaison est essentielle dans l'établissement de résultats scientifiques pour valider des observations."
    },

    // question n°33 :
    { 
        question: "Quel est le lien entre science et éthique environnementale ?", 
        answers: ["Pas de lien", "L'éthique environnementale doit guider la science", "La science ignore l'éthique"], 
        correct: 1, 
        explanation: "L'éthique environnementale est cruciale pour orienter la science vers des pratiques durables et respectueuses de l'écosystème."
    },

    // question n°34 :
    { 
        question: "Quel est le lien entre science et changement climatique ?", 
        answers: ["Pas de lien", "La science éclaire sur les causes et effets du changement", "La science ne sert à rien"], 
        correct: 1, 
        explanation: "La science fournit des données cruciales sur les causes et les conséquences du changement climatique, informant les décisions politiques."
    },

    // question n°35 :
    { 
        question: "Quel rôle joue le consensus scientifique dans l'acceptation des théories ?", 
        answers: ["Pas de rôle", "Il est fondamental", "Il évite la réflexion critique"], 
        correct: 1, 
        explanation: "Le consensus scientifique est fondamental pour l'acceptation des théories dans la communauté scientifique."
    },

    // question n°36 :
    { 
        question: "Qui a écrit 'La critique de la raison pure' ?", 
        answers: ["Locke", "Hume", "Kant"], 
        correct: 2, 
        explanation: "'La critique de la raison pure' de Kant a été une réflexion sur les limites de la connaissance humaine et la raison."
    },

    // question n°37 :
    { 
        question: "Quel est le rôle de la comptabilité dans la recherche scientifique ?", 
        answers: ["Elle est redondante", "Elle n'existe pas", "Elle joue un rôle dans le suivi des résultats"], 
        correct: 2, 
        explanation: "La comptabilité dans la recherche scientifique permet de suivre les résultats et de s'assurer de la rigueur de la méthode."
    },

    // question n°38 :
    { 
        question: "Quel impact le relativisme a-t-il sur la perception de la science ?", 
        answers: ["Aucun impact", "Il crée des doutes sur l'objectivité", "Il renforce l'objectivité"], 
        correct: 1, 
        explanation: "Le relativisme remet souvent en question l'objectivité de la science, en soulignant l'influence des contextes culturels."
    },

    // question n°39 :
    { 
        question: "Qui a formulé le concept de 'rationalité limitée' ?", 
        answers: ["Kahneman", "Popper", "Luhmann"], 
        correct: 0, 
        explanation: "Daniel Kahneman et Amos Tversky ont introduit le concept de 'rationalité limitée', montrant que les individus prennent souvent des décisions basées sur des heuristiques."
    },

    // question n°40 :
    { 
        question: "Quel rôle la science joue-t-elle dans l'identification des biais cognitifs ?", 
        answers: ["Elle ne reconnaît pas les biais", "Elle aide à les identifier", "Elle aggrave les biais"], 
        correct: 1, 
        explanation: "La science aide dans l'identification des biais cognitifs, améliorant ainsi notre compréhension du comportement humain."
    },

    // question n°41 :
    { 
        question: "Quel est le lien entre science et innovation ?", 
        answers: ["Pas de lien", "La science est le moteur de l'innovation", "L'innovation est une menace pour la science"], 
        correct: 1, 
        explanation: "La science est un moteur essentiel de l'innovation, permettant des avancées technologiques et de nouvelles découvertes."
    },

    // question n°42 :
    { 
        question: "Quel est le rôle de la recherche collaborative dans le développement scientifique ?", 
        answers: ["Pas de rôle", "Elle favorise les résultats plus diversifiés", "Elle complique le processus"], 
        correct: 1, 
        explanation: "La recherche collaborative permet d'obtenir des résultats plus diversifiés grâce à des contributions pluridisciplinaires."
    },

    // question n°43 :
    { 
        question: "Quel impact l'open source a-t-il sur la science ?", 
        answers: ["Il est négligeable", "Il facilite la collaboration", "Il augmente les inégalités"], 
        correct: 1, 
        explanation: "L'open source facilite la collaboration et le partage des ressources, ouvrant la porte à plus d'innovations."
    },

    // question n°44 :
    { 
        question: "Quel est le rôle de l'observation dans la méthode scientifique ?", 
        answers: ["Aucun", "Elle est fondamentale", "Elle est superflue"], 
        correct: 1, 
        explanation: "L'observation est un élément fondamental qui permet de recueillir des données et de formuler des hypothèses."
    },

    // question n°45 :
    { 
        question: "Quel est le lien entre la science et la philosophie dans la quête de vérité ?", 
        answers: ["Ils sont opposés", "Ils se complètent", "Ils ne se croisent jamais"], 
        correct: 1, 
        explanation: "La science et la philosophie se complètent dans leur quête de vérité, chacune offrant des perspectives précieuses."
    },

    // question n°46 :
    { 
        question: "Quelle est la critique communauté des théories scientifiques fondées uniquement sur les résultats ?", 
        answers: ["Elles sont insensées", "Elles négligent le processus", "Elles sont justifiées"], 
        correct: 1, 
        explanation: "Les critiques mettent en avant que les théories axées sur les résultats peuvent négliger l'importance du processus et des méthodes."
    },


    // question n°47 :
    { 
        question: "Quel est le lien entre science et biais culturels ?", 
        answers: ["Pas de lien", "Les biais culturels influencent la recherche", "Les biais n'affectent pas les chercheurs"], 
        correct: 1, 
        explanation: "Les biais culturels peuvent influencer la recherche scientifique, en affectant les perspectives et les interprétations des résultats."
    },

    // question n°48 :
    { 
        question: "Qui a introduit le concept de 'recherche-action' dans le domaine scientifique ?", 
        answers: ["Fayol", "Dewey", "Deming"], 
        correct: 1, 
        explanation: "John Dewey a introduit le concept de recherche-action pour intégrer la pratique réflexive dans l'investigation scientifique."
    },

    // question n°49 :
    { 
        question: "Quel est le lien entre science et médecine dans le développement des traitements ?", 
        answers: ["Pas de lien", "La science informe les pratiques médicales", "La médecine ignore la science"], 
        correct: 1, 
        explanation: "La science joue un rôle essentiel dans le développement des traitements médicaux, informant les pratiques et les innovations."
    },

    // question n°50 :
    { 
        question: "Quelle est la position des sciences sociales face au déterminisme ?", 
        answers: ["Elles le rejettent totalement", "Elles le questionnent", "Elles se basent sur le déterminisme"], 
        correct: 1, 
        explanation: "Les sciences sociales questionnent souvent le déterminisme, examinant le rôle des interactions sociales et culturelles."
    },

    // question n°51 :
    { 
        question: "Quel est le rôle de la bioéthique dans la recherche scientifique ?", 
        answers: ["Aucun rôle", "Elle guide les pratiques dans le respect de l'éthique", "Elle est trop rigide"], 
        correct: 1, 
        explanation: "La bioéthique guide les pratiques de recherche scientifique, assurant que les droits et la dignité des participants sont respectés."
    },

     // question n°52 :
    { 
        question: "Quel impact les biais cognitifs ont-ils sur les résultats scientifiques ?", 
        answers: ["Aucun impact", "Ils altèrent les résultats", "Ils favorisent la réussite"], 
        correct: 1, 
        explanation: "Les biais cognitifs peuvent altérer les résultats scientifiques en influençant la perception et l'interprétation des données."
    },

    // question n°53 :
    { 
        question: "Qui a formulé le principe de la 'mesure empirique' ?", 
        answers: ["Foucault", "Popper", "Kuhn"], 
        correct: 1, 
        explanation: "Karl Popper a formulé le principe selon lequel toute théorie scientifique doit être vérifiable via des mesures empiriques."
    },

    // question n°54 :
    { 
        question: "Quel est le rôle de la logique dans le raisonnement scientifique ?", 
        answers: ["Aucun rôle", "Elle est essentielle pour des conclusions valables", "Elle complicité la recherche"], 
        correct: 1, 
        explanation: "La logique est essentielle pour structurer le raisonnement scientifique et assurer des conclusions valables."
    },

    // question n°55 :
    { 
        question: "Quel est le lien entre tests et validation dans la méthode scientifique ?", 
        answers: ["Aucun lien", "Les tests visent à valider des hypothèses", "Les tests ne sont pas nécessaires"], 
        correct: 1, 
        explanation: "Les tests sont nécessaires pour valider des hypothèses et garantir l'exactitude des conclusions."
    },

    // question n°56 :
    { 
        question: "Quel est le rapport entre recherche fondamentale et recherche appliquée ?", 
        answers: ["Elles sont identiques", "Elles se complètent", "Elles sont opposées"], 
        correct: 1, 
        explanation: "La recherche fondamentale et la recherche appliquée se complètent, la première posant les bases théoriques de la seconde."
    },

    // question n°57 :
    { 
        question: "Quel est le rôle de la science dans la résolution des problèmes sociaux ?", 
        answers: ["Aucun rôle", "Elle propose des solutions basées sur des données", "Elle ignore les problèmes sociaux"], 
        correct: 1, 
        explanation: "La science joue un rôle clé en proposant des solutions éclairées fondées sur des données probantes pour résoudre des problèmes sociaux."
    },

    // question n°58 :
    { 
        question: "Quel lien entre science et rationalité existe ?", 
        answers: ["Ils sont opposés", "La science démontre la rationalité", "La rationalité ignore la science"], 
        correct: 1, 
        explanation: "La science est souvent perçue comme un moyen de démontrer et d'illustrer l'application de la rationalité."
    },

    // question n°59 :
    { 
        question: "Quel est l'impact de l'éthique sur les pratiques scientifiques ?", 
        answers: ["Elle est dépassée", "Elle garantit la rigueur scientifique", "Elle complique les recherches"], 
        correct: 1, 
        explanation: "L'éthique assure que les pratiques scientifiques respectent les droits des individus et les normes de rigueur."
    },

    // question n°60 :
    { 
        question: "Quel est le rôle de la collaboration internationale en science ?", 
        answers: ["Aucun rôle", "Elle favorise l'avancement des connaissances", "Elle crée des conflits"], 
        correct: 1, 
        explanation: "La collaboration internationale favorise l'avancement des connaissances en enrichissant les perspectives et ressources."
    },

    // question n°61 :
    { 
        question: "Quel est le lien entre science et culture ?", 
        answers: ["Aucun lien", "La science informe la culture", "La culture ignore la science"], 
        correct: 1, 
        explanation: "La science informe la culture en influençant les perspectives et comportements au sein de la société."
    },

    // question n°62 :
    { 
        question: "Quel est le lien entre innovation et recherche scientifique ?", 
        answers: ["Ils sont opposés", "La recherche scientifique est un moteur d'innovation", "La recherche ne favorise pas l'innovation"], 
        correct: 1, 
        explanation: "La recherche scientifique est un moteur d'innovation, générant de nouvelles technologies et connaissances."
    },

    // question n°63 :
    { 
        question: "Qui a suggéré que les biais influencent notre perception des résultats scientifiques ?", 
        answers: ["Popper", "Kahneman", "Hume"], 
        correct: 1, 
        explanation: "Daniel Kahneman a souligné l'impact des biais sur notre perception et notre évaluation des résultats scientifiques."
    },

    // question n°64 :
    { 
        question: "Quel est le rôle de l'expérimentation dans la validité des théories scientifiques ?", 
        answers: ["Aucun rôle", "Elle est essentielle pour tester les théories", "Elle n'est pas nécessaire"], 
        correct: 1, 
        explanation: "L'expérimentation est essentielle pour tester et valider les théories scientifiques."
    },

    // question n°65 :
    { 
        question: "Quel est le lien entre rationalisme et empirisme ?", 
        answers: ["Aucun lien", "Ils sont opposés", "Ils se complètent dans la recherche"], 
        correct: 2, 
        explanation: "Le rationalisme et l'empirisme se complètent souvent dans la recherche, combinant la théorie et l'observation."
    },

    // question n°66 :
    { 
        question: "Quel est le rôle de la logique dans la formulation de thèses scientifiques ?", 
        answers: ["Pas d'importance", "Elle est essentielle", "Elle est superflue"], 
        correct: 1, 
        explanation: "La logique est essentielle pour formuler des thèses scientifiques, en garantissant une structure cohérente et valide."
    },

    // question n°67 :
    { 
        question: "Comment la science voit-elle la créativité dans le développement de nouvelles idées ?", 
        answers: ["Inutile", "Favorisée", "Écartée"], 
        correct: 1, 
        explanation: "La science valorise la créativité comme un élément clé pour le développement de nouvelles idées et innovations."
    },

    // question n°68 :
    { 
        question: "Quel lien existe entre science et chaos ?", 
        answers: ["Chaos limite la science", "La science tente de comprendre le chaos", "Aucun lien"], 
        correct: 1, 
        explanation: "La science tente de comprendre et de modéliser le chaos, cherchant à établir des lois parmi la complexité."
    },

    // question n°69 :
    { 
        question: "Qui a introduit le concept de 'théorie des systèmes complexes' en science ?", 
        answers: ["Bourdieu", "Morin", "Kuhn"], 
        correct: 1, 
        explanation: "Edgar Morin a introduit le concept de théorie des systèmes complexes, soulignant la nécessité de comprendre les relations entres différents niveaux."
    },

    // question n°70 :
    { 
        question: "Quel est le lien entre inégalités et accès à la science ?", 
        answers: ["Pas de lien", "Moins d'inégalités favorisent l’accès", "Elles facilitent l'accès"], 
        correct: 1, 
        explanation: "Moins d'inégalités sociales permettent un meilleur accès à l'éducation scientifique et aux opportunités de recherche."
    },

    // question n°71 :
    { 
        question: "Quel est le rôle de la logique déductive dans les sciences ?", 
        answers: ["Aucun rôle", "Elle permet de tirer des conclusions à partir de prémisses", "Elle est rarement utilisée"], 
        correct: 1, 
        explanation: "La logique déductive est cruciale dans les sciences pour tirer des conclusions basées sur des prémisses établies."
    },

    // question n°72 :
    { 
        question: "Quel est le lien entre observation et science ?", 
        answers: ["Pas de lien", "Les deux sont cruciaux", "L'observation est sans importance"], 
        correct: 1, 
        explanation: "L'observation est fondamentale pour le développement scientifique car elle permet de recueillir des données sur le terrain."
    },

    // question n°73 :
    { 
        question: "Qu'est-ce que le dogmatisme dans le contexte scientifique ?", 
        answers: ["Engagement envers les preuves", "Refus d'accepter des doutes", "Flexible dans l'approche"], 
        correct: 1, 
        explanation: "Le dogmatisme en science désigne le refus d'accepter des doutes ou des critiques envers les théories établies."
    },

    // question n°74 :
    { 
        question: "Quel philosophe a proposé une réflexion critique sur la science moderne ?", 
        answers: ["Dewey", "Popper", "Bourdieu"], 
        correct: 0, 
        explanation: "John Dewey a proposé une réflexion critique qui intègre les sciences et les préoccupations sociales dans le développement scientifique."
    },

    // question n°75 :
    { 
        question: "Quel est le concept de 'méthode hypothético-déductive' ?", 
        answers: ["Établir des idées sans tests", "Basée sur le développement d'hypothèses à tester", "Un simple raisonnement"], 
        correct: 1, 
        explanation: "La méthode hypothético-déductive consiste à établir des hypothèses qui peuvent être testées par l'expérimentation."
    },

    // question n°76 :
    { 
        question: "Quel est le regard de l'art sur la science ?", 
        answers: ["Pas de lien", "L'art critique la science", "Art et science se complètent"], 
        correct: 2, 
        explanation: "L'art et la science se complètent, l'un inspirant l'autre et fournissant différentes perspectives sur la compréhension humaine."
    },

    // question n°77 :
    { 
        question: "Quel rôle la réflexion critique joue-t-elle dans le processus scientifique ?", 
        answers: ["Aucun", "Elle est essentielle pour l'objectivité", "Elle ralentit le processus"], 
        correct: 1, 
        explanation: "La réflexion critique est essentielle pour garantir l'objectivité et l'intégrité des recherches scientifiques."
    },

    // question n°78 :
    { 
        question: "Quel est le lien entre science et phénomènes empiriques ?", 
        answers: ["Pas de lien", "La science repose sur l'observation des phénomènes empiriques", "La science écarte l'expérience"], 
        correct: 1, 
        explanation: "La science est fondée sur l'observation et l'expérience des phénomènes empiriques pour développer des théories."
    },

    // question n°79 :
    { 
        question: "Quel impact le financement peut-il avoir sur la recherche scientifique ?", 
        answers: ["Pas d'impact", "Il favorise les biais", "Il soutient la diversité des études"], 
        correct: 1, 
        explanation: "Le financement peut influencer la recherche scientifique en favorisant certaines études et en biaisant les résultats."
    },

    // question n°80 :
    { 
        question: "Quel est le lien entre l'éthique et la recherche scientifique ?", 
        answers: ["Pas de lien", "L'éthique doit guider la recherche", "L'éthique est superflue"], 
        correct: 1, 
        explanation: "L'éthique doit guider la recherche scientifique pour assurer la responsabilité et le respect des droits de tous."
    },

    // question n°81 :
    { 
        question: "Quel impact le changement climatique a-t-il sur les priorités de recherche scientifique ?", 
        answers: ["Aucun impact", "Il redéfinit les priorités de recherche", "Il freine la recherche"], 
        correct: 1, 
        explanation: "Le changement climatique redéfinit les priorités de recherche scientifique, en mettant l'accent sur la durabilité et l'environnement."
    },

    // question n°82 :
    { 
        question: "Quel est le rôle de l'innovation dans le progrès scientifique ?", 
        answers: ["Aucun rôle", "Elle est essentielle pour l'évolution", "Elle ralentit le progrès"], 
        correct: 1, 
        explanation: "L'innovation est essentielle pour le progrès scientifique, permettant de faire avancer le savoir et les technologies."
    },

    // question n°83 :
    { 
        question: "Comment la science aborde-t-elle le sujet de la pauvreté ?", 
        answers: ["Elle l'ignore", "Elle analyse ses causes et effets", "Elle trivialise le sujet"], 
        correct: 1, 
        explanation: "La science analyse les causes et effets de la pauvreté pour en comprendre les dynamiques et proposer des solutions."
    },

    // question n°84 :
    { 
        question: "Qui a développé le concept de la 'méthode inductive' ?", 
        answers: ["Kant", "Bacon", "Locke"], 
        correct: 1, 
        explanation: "Francis Bacon a développé la méthode inductive, qui repose sur l'observation systématique pour établir des généralisations."
    },

    // question n°85 :
    { 
        question: "Est-ce que la science et la religion peuvent coexister ?", 
        answers: ["Non", "Oui", "Elles doivent toujours être opposées"], 
        correct: 1, 
        explanation: "Il existe des perspectives selon lesquelles la science et la religion peuvent coexister, chacun abordant des questions différentes."
    },

    // question n°86 :
    { 
        question: "Quel est le concept de 'données probantes' ?", 
        answers: ["Des faits sans valeur", "Informaion utile pour la décision", "Données imprécises"], 
        correct: 1, 
        explanation: "Les données probantes désignent les informations pertinentes utilisées pour éclairer et guider les décisions scientifiques."
    },

    // question n°87 :
    { 
        question: "Quel est le rôle de l'interdisciplinarité dans le domaine scientifique ?", 
        answers: ["Aucun", "Elle favorise l'innovation", "Elle complique les recherches"], 
        correct: 1, 
        explanation: "L'interdisciplinarité favorise l'innovation en permettant aux idées de se croisent entre différentes disciplines."
    },

    // question n°88 :
    { 
        question: "Qui est le père de la sociologie contemporaine ?", 
        answers: ["Kant", "Durkheim", "Marx"], 
        correct: 1, 
        explanation: "Émile Durkheim est souvent considéré comme le père de la sociologie contemporaine, mettant en avant la méthode scientifique dans l'étude des sociétés."
    },

    // question n°89 :
    { 
        question: "Quel est le lien entre science et innovation technologique ?", 
        answers: ["Pas de lien", "La science stimule l'innovation", "L'innovation est une menace"], 
        correct: 1, 
        explanation: "La science stimule l'innovation technologique, entraînant des avancées dans divers domaines."
    },

    // question n°90 :
    { 
        question: "Quel est le rôle de la recherche action dans la science sociale ?", 
        answers: ["Aucun", "Elle implique les participants dans le processus", "Elle est uniquement théorique"], 
        correct: 1, 
        explanation: "La recherche action implique les participants dans le processus, cherchant à améliorer les pratiques et les situations."
    },

    // question n°91 :
    { 
        question: "Quel impact les nouvelles technologies ont-elles sur l'approche scientifique ?", 
        answers: ["Elles n'ont pas d'impact", "Elles facilitent les découvertes", "Elles sont nuisibles"], 
        correct: 1, 
        explanation: "Les nouvelles technologies facilitent les découvertes scientifiques en améliorant les méthodes d'analyse et d'expérimentation."
    },

    // question n°92 :
    { 
        question: "Quel est le lien entre culture et science dans la dynamique de recherche ?", 
        answers: ["Ils sont opposés", "La science est influencée par la culture", "La culture n'affecte pas la science"], 
        correct: 1, 
        explanation: "La science est souvent influencée par le contexte culturel, qui détermine les priorités de recherche et d'expérimentation."
    },

    // question n°93 :
    { 
        question: "Quel est le principal défi de l'enseignement de la science ?", 
        answers: ["Aucun", "Motiver les étudiants", "Limiter les ressources"], 
        correct: 1, 
        explanation: "Un des principaux défis de l'enseignement de la science est de motiver les étudiants à s'engager dans les matières scientifiques."
    },

    // question n°94 :
    { 
        question: "Quel est le rôle des observations spontanées dans la méthode scientifique ?", 
        answers: ["Aucun rôle", "Elles sont essentielles pour le développement des théories", "Elles sont superficielles"], 
        correct: 1, 
        explanation: "Les observations spontanées peuvent conduire à des développements théoriques importants et à de nouvelles découvertes."
    },

    // question n°95 :
    { 
        question: "Quel lien existe-t-il entre science et comportement humain selon les psychologues ?", 
        answers: ["Pas de lien", "Ils se complètent", "La science ignore les comportements"], 
        correct: 1, 
        explanation: "La science et les études psychologiques s'influencent mutuellement pour mieux comprendre et analyser le comportement humain."
    },

    // question n°96 :
    { 
        question: "Qui a soutenu la nécessité d'un équilibre entre science et humanité ?", 
        answers: ["Kant", "Huxley", "Leopold"], 
        correct: 2, 
        explanation: "Aldo Leopold a plaidé pour un équilibre entre les découvertes scientifiques et la préservation de la nature."
    },

    // question n°97 :
    { 
        question: "Qui a introduit la perspective historique dans les théories scientifiques ?", 
        answers: ["Kuhn", "Popper", "Mayr"], 
        correct: 0, 
        explanation: "Thomas Kuhn a introduit la perspective historique sur le changement et l'évolution des paradigmes scientifiques."
    },

    // question n°98 :
    { 
        question: "Quel est le rôle des institutions dans la recherche scientifique ?", 
        answers: ["Elles sont inutiles", "Elles soutiennent la recherche", "Elles compliquent l'efficacité"], 
        correct: 1, 
        explanation: "Les institutions soutiennent la recherche scientifique en fournissant des ressources, des infrastructures et une reconnaissance."
    },

    // question n°99 :
    { 
        question: "Quel est l'impact du consensus scientifique sur l'approbation des théories ?", 
        answers: ["Il n'a pas d'impact", "Il favorise l'acceptation des théories valides", "Il crée des tensions"], 
        correct: 1, 
        explanation: "Le consensus scientifique favorise l'acceptation des théories au sein de la communauté scientifique, renforçant la confiance dans les découvertes."
    },

    // question n°100 :
    { 
        question: "Quel est le lien entre science et liberté d'expression dans la société contemporaine ?", 
        answers: ["Aucun lien", "La liberté d'expression doit être remise en question", "La liberté d'expression favorise le progrès scientifique"], 
        correct: 2, 
        explanation: "La liberté d'expression est essentielle pour le progrès scientifique, car elle permet le partage et le débat d'idées."
    }
];