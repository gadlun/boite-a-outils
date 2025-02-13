const questions = [
    // question n°1 :
    { 
        question: "Quelle est la définition classique de la technique ?", 
        answers: ["L'application de la science", "Un ensemble de méthodes", "Un processus intuitif"], 
        correct: 1, 
        explanation: "La technique est définie comme un ensemble de méthodes et de savoir-faire utilisés pour réaliser des tâches spécifiques."
    },
    
    // question n°2 :
    { 
        question: "Qui a soutenu que la technique est une prolongation de la nature humaine ?", 
        answers: ["Aristote", "Heidegger", "Kant"], 
        correct: 1, 
        explanation: "Heidegger a abordé la technique comme une prolongation de la nature humaine, examinant son impact sur notre compréhension du monde."
    },
    
    // question n°3 :
    { 
        question: "Quel est le lien entre technique et pouvoir selon Foucault ?", 
        answers: ["Ils sont opposés", "La technique renforce le pouvoir", "La technique limite le pouvoir"], 
        correct: 1, 
        explanation: "Michel Foucault a analysé comment la technique peut renforcer des relations de pouvoir au sein des sociétés."
    },
    
    // question n°4 :
    { 
        question: "Quel est le concept de 'technologie appropriée' ?", 
        answers: ["Technologie de pointe", "Technologie adaptée aux besoins locaux", "Technologie désuète"], 
        correct: 1, 
        explanation: "La technologie appropriée correspond à des solutions technologiques qui sont adaptées au contexte et aux besoins locaux."
    },
    
    // question n°5 :
    { 
        question: "Qui a proposé l'idée que le développement technique peut entraîner une aliénation ?", 
        answers: ["Kant", "Heidegger", "Marx"], 
        correct: 2, 
        explanation: "Karl Marx a soutenu que le développement technique dans le capitalisme peut engendrer une aliénation des travailleurs face aux méthodes de production."
    },
    
    // question n°6 :
    { 
        question: "Quel est le rôle de la technique dans le développement social selon les sociologues ?", 
        answers: ["Elle est insignifiante", "Elle favorise l'interaction sociale", "Elle divise les sociétés"], 
        correct: 1, 
        explanation: "La technique joue un rôle essentiel dans le développement social en favorisant l'interaction et la communication entre les individus."
    },
    
    // question n°7 :
    { 
        question: "Quel impact la technologie a-t-elle sur l'environnement ?", 
        answers: ["Elle ne l'affecte pas", "Elle peut être destructrice", "Elle protège l'environnement"], 
        correct: 1, 
        explanation: "La technologie peut avoir un impact destructeur sur l'environnement lorsqu'elle n'est pas utilisée de manière responsable."
    },
    
    // question n°8 :
    { 
        question: "Quel est le lien entre technique et art ?", 
        answers: ["Ils sont opposés", "Ils se complètent", "L'art ignore la technique"], 
        correct: 1, 
        explanation: "La technique et l'art se complètent, car la technique fournit les moyens nécessaires à l'expression artistique."
    },
    
    // question n°9 :
    { 
        question: "Qui a écrit 'Technique et temps' ?", 
        answers: ["Simondon", "Heidegger", "Virilio"], 
        correct: 0, 
        explanation: "Gilbert Simondon a écrit 'Technique et temps', réfléchissant à la relation entre technique et évolution temporelle."
    },
    
    // question n°10 :
    { 
        question: "Quel est le rôle des inventions techniques dans le progrès humain ?", 
        answers: ["Elles ne sont pas importantes", "Elles sont un moteur du progrès", "Elles compliquent la vie"], 
        correct: 1, 
        explanation: "Les inventions techniques sont souvent considérées comme un moteur essentiel du progrès humain et social."
    },
    
    // question n°11 :
    { 
        question: "Quel est le lien entre technique et rationalité ?", 
        answers: ["Ils sont opposés", "La technique repose sur la rationalité", "Aucun lien"], 
        correct: 1, 
        explanation: "La technique repose sur l'application de la rationalité pour résoudre des problèmes pratiques et atteindre des objectifs."
    },

    // question n°12 :
    { 
        question: "Qui a défini la technique comme 'l'ensemble des moyens utilisés pour réaliser des actes' ?", 
        answers: ["Leroi-Gourhan", "Simondon", "Kant"], 
        correct: 0, 
        explanation: "André Leroi-Gourhan a proposé une définition de la technique axée sur les moyens pratiques utilisés pour agir."
    },
    
    // question n°13 :
    { 
        question: "Quel impact les réseaux sociaux ont-ils sur la communication technique ?", 
        answers: ["Aucun impact", "Ils compliquent la communication", "Ils favorisent la rapidité de l'information"], 
        correct: 2, 
        explanation: "Les réseaux sociaux favorisent la rapidité et l'échange d'informations, transformant la communication technique contemporaine."
    },
    
    // question n°14 :
    { 
        question: "Quel est le concept de 'technophilie' ?", 
        answers: ["L'amour de la technologie", "Le rejet de la technologie", "Une peur de la technologie"], 
        correct: 0, 
        explanation: "La technophilie désigne une fascination et un amour de la technologie et de toutes ses applications."
    },
    
    // question n°15 :
    { 
        question: "Quel a été l'impact de la révolution industrielle sur la technique ?", 
        answers: ["Aucun", "Innovation technique rapide", "Ralentissement des progrès techniques"], 
        correct: 1, 
        explanation: "La révolution industrielle a déclenché une accélération de l'innovation technique, transformant rapidement les sociétés."
    },

    // question n°16 :
    { 
        question: "Quel est le lien entre technique et aliénation humaine selon Marx ?", 
        answers: ["Il n'y a pas de lien", "La technique est un outil d'émancipation", "La technique aliénation les travailleurs"], 
        correct: 2, 
        explanation: "Marx soutient que la technique, dans le cadre du capitalisme, peut aliéner les travailleurs de leur produit et de leur travail."
    },

    // question n°17 :
    { 
        question: "Qui a soutenu que la technique devrait intégrer des valeurs éthiques ?", 
        answers: ["Heidegger", "Ellul", "Kant"], 
        correct: 1, 
        explanation: "Jacques Ellul a plaidé pour que la technique prenne en compte des valeurs éthiques lors de son développement et de son utilisation."
    },

    // question n°18 :
    { 
        question: "Quel est le rôle de la technique dans la transformation des sociétés ?", 
        answers: ["Aucun rôle", "Elle facilite le changement", "Elle freine les sociétés"], 
        correct: 1, 
        explanation: "La technique facilite le changement et l'évolution des sociétés à travers l'innovation et l'efficacité."
    },

    // question n°19 :
    { 
        question: "Quel lien existe entre la science et la technique ?", 
        answers: ["Elles sont opposées", "Elles se complètent", "Elles inhibent un progrès"], 
        correct: 1, 
        explanation: "La science et la technique se complètent, la première fournissant des connaissances et la seconde appliquant ces connaissances dans la pratique."
    },

    // question n°20 :
    { 
        question: "Qui a écrit 'La technique', explorant ses conséquences philosophiques ?", 
        answers: ["Heidegger", "Simondon", "Kuhn"], 
        correct: 0, 
        explanation: "Martin Heidegger a exploré les conséquences philosophiques de la technique dans son essai 'La technique'."
    },

    // question n°21 :
    { 
        question: "Quel est le concept de 'technique de l'imaginaire' ?", 
        answers: ["Une création journalistique", "L'utilisation de la technique pour créer des récits", "Une forme de critique"], 
        correct: 1, 
        explanation: "Le concept de technique de l'imaginaire évoque l'utilisation de la technique pour produire des récits créatifs et imaginatifs."
    },

    // question n°22 :
    { 
        question: "Quel impact l'industrialisation a-t-elle eu sur la technique agricole ?", 
        answers: ["Amélioration des pratiques", "Diminution de la production", "Progrès stagnants"], 
        correct: 0, 
        explanation: "L'industrialisation a souvent conduit à l'amélioration des pratiques agricoles grâce à l'innovation technique."
    },

    // question n°23 :
    { 
        question: "Quel est le lien entre technologie et vie quotidienne ?", 
        answers: ["Pas de lien", "Elle modifie notre façon de vivre", "Elle complique la vie"], 
        correct: 1, 
        explanation: "La technologie modifie notre façon de vivre, influençant les interactions, l'apprentissage et le travail."
    },

    // question n°24 :
    { 
        question: "Quel philosophe a étudié les implications morales de la technique ?", 
        answers: ["Sartre", "Bertalanffy", "Ellul"], 
        correct: 2, 
        explanation: "Jacques Ellul a examiné les implications morales et sociales de la technique dans ses écrits."
    },

    // question n°25 :
    { 
        question: "Quel est le rôle de la technique dans l'innovation médicale ?", 
        answers: ["Pas de rôle", "Elle facilite les avancées", "Elle remplace la science"], 
        correct: 1, 
        explanation: "La technique joue un rôle essentiel dans le développement et l'innovation des traitements médicaux et de la technologie de santé."
    },

    // question n°26 :
    { 
        question: "Quel est le concept de 'l'angoisse technologique' ?", 
        answers: ["La frayeur de la technologie", "Une acceptation ironique", "Le rejet total de la technologie"], 
        correct: 0, 
        explanation: "L'angoisse technologique fait référence à la peur et l'incertitude concernant les impacts de la technologie sur la société."
    },

    // question n°27 :
    { 
        question: "Quel est le lien entre technique et esthétique dans l'art ?", 
        answers: ["Ils sont opposés", "La technique enrichit l'esthétique", "L'esthétique n'importe pas"], 
        correct: 1, 
        explanation: "La technique enrichit l'esthétique dans l'art, fournissant les outils pour une expression créative."
    },

    // question n°28 :
    { 
        question: "Quel auteur soutient que la technique est autant une menace qu'un avantage ?", 
        answers: ["McLuhan", "Ellul", "Heidegger"], 
        correct: 1, 
        explanation: "Jacques Ellul soutient que la technique est à la fois une menace et un avantage pour la société moderne."
    },

    // question n°29 :
    { 
        question: "Quel lien peut-on établir entre technique et environnement ?", 
        answers: ["Pas de lien", "La technique peut contribuer à sa destruction", "La technique aide à sa préservation"], 
        correct: 1, 
        explanation: "La technique peut avoir des conséquences néfastes sur l'environnement, contribuant à la destruction écologique si elle n'est pas régulée."
    },

    // question n°30 :
    { 
        question: "Quel est le rôle des changements technologiques dans le développement social ?", 
        answers: ["Aucun rôle", "Ils accélèrent le changement", "Ils stabilisent la société"], 
        correct: 1, 
        explanation: "Les changements technologiques peuvent accélérer le changement social en influençant les modes de vie et de travail."
    },

     // question n°31 :
    { 
        question: "Quel est le principe de 'lutter contre la logique du risque' ?", 
        answers: ["Prendre des risques", "Accepter les conséquences de l'innovation", "Promouvoir l'innovation sans limite"], 
        correct: 1, 
        explanation: "Lutter contre la logique du risque implique d'accepter les conséquences de l'innovation tout en s'efforçant de minimiser les dangers."
    },

    // question n°32 :
    { 
        question: "Qui a plaidé pour l'importance de l'harmonie entre l'homme et la technique ?", 
        answers: ["Heidegger", "Marx", "Ellul"], 
        correct: 0, 
        explanation: "Martin Heidegger a plaidé pour une harmonie entre l'homme et la technique, mettant en question la domination de la technique."
    },

    // question n°33 :
    { 
        question: "Quel est le lien entre technique et inégalité sociale ?", 
        answers: ["Pas de lien", "La technique exacerbe les inégalités", "Elle les réduit"], 
        correct: 1, 
        explanation: "La technique peut exacerber les inégalités sociales si son accès et son utilisation ne sont pas équitables."
    },

    // question n°34 :
    { 
        question: "Quel impact la technologie a-t-elle eu sur la communication ?", 
        answers: ["Elle complique les communications", "Elle facilite et enrichit les échanges", "Elle n'a pas d'impact"], 
        correct: 1, 
        explanation: "La technologie a considérablement facilité et enrichi les échanges et la communication par des moyens modernes."
    },

    // question n°35 :
    { 
        question: "Quel est le concept central dans l'écologie technique ?", 
        answers: ["Impact néfaste", "Application des technologies dans la nature", "Interconnection nature et technique"], 
        correct: 2, 
        explanation: "L'écologie technique met en avant l'interconnexion entre la technique et la nature, intégrant les deux dans un tout."
    },

    // question n°36 :
    { 
        question: "Qui a écrit 'La peur des machines' pour aborder l'angoisse technologique ?", 
        answers: ["Simondon", "Bataille", "Wittgenstein"], 
        correct: 0, 
        explanation: "Gilbert Simondon a exploré la peur et l’angoisse suscitées par l'omniprésence de la technologie dans la société moderne."
    },

    // question n°37 :
    { 
        question: "Quel est le lien entre science et technique dans le développement des savoirs ?", 
        answers: ["Ils sont opposés", "Ils s'enrichissent mutuellement", "La technique ignore la science"], 
        correct: 1, 
        explanation: "La science et la technique s'enrichissent mutuellement, chacun participant à l'avancement de l'autre."
    },

    // question n°38 :
    { 
        question: "Quel est le lien entre technique et savoir-faire ?", 
        answers: ["Pas de lien", "Le savoir-faire est essentiel pour appliquer la technique", "Le savoir-faire est obsolète"], 
        correct: 1, 
        explanation: "Le savoir-faire est essentiel pour appliquer la technique de manière efficace et adéquate."
    },

    // question n°39 :
    { 
        question: "Quel est le concept du 'cycle technique' ?", 
        answers: ["Durabilité des techniques", "Évolution des techniques et leurs conséquences", "Le déclin des techniques"], 
        correct: 1, 
        explanation: "Le cycle technique se réfère à l'évolution des techniques et à leurs conséquences sur la société et l'environnement."
    },

    // question n°40 :
    { 
        question: "Quel est le rôle de l'éthique dans le développement de nouvelles technologies ?", 
        answers: ["Aucun rôle", "Elle doit guider le développement et l'application", "Elle est secondaire"], 
        correct: 1, 
        explanation: "L'éthique doit guider le développement et l'application de nouvelles technologies pour garantir leur bénéfice social."
    },

    // question n°41 :
    { 
        question: "Quel impact l'éducation technique a-t-elle sur les individus ?", 
        answers: ["Pas d'impact", "Elle prépare à des carrières spécifiques", "Elle diminue les opportunités"], 
        correct: 1, 
        explanation: "L'éducation technique prépare les individus à des carrières spécifiques, offrant des compétences pratiques pour le marché du travail."
    },

    // question n°42 :
    { 
        question: "Quel est le rôle de l'innovation sociale dans la technique ?", 
        answers: ["Pas de rôle", "Elle favorise la justice sociale", "Elle renforce les inégalités"], 
        correct: 1, 
        explanation: "L'innovation sociale contribue à développer des techniques visant à favoriser la justice sociale et l'équité."
    },

    // question n°43 :
    { 
        question: "Quel est le lien entre naturel et technique dans la philosophie contemporaine ?", 
        answers: ["Pas de lien", "La technique doit imiter la nature", "La technique dénature complètement le naturel"], 
        correct: 1, 
        explanation: "La philosophie contemporaine explore comment la technique peut imiter la nature tout en respectant ses principes."
    },

    // question n°44 :
    { 
        question: "Qui a écrit 'Le Technological Society' et critiqué la dépendance à la technique ?", 
        answers: ["Ellul", "Kuhn", "Heidegger"], 
        correct: 0, 
        explanation: "Jacques Ellul a exploré la dépendance de la société moderne à la technique, critiquant ses impacts sur l'humanité."
    },

    // question n°45 :
    { 
        question: "Quel est le rôle des spécialistes dans le débat sur les technologies émergentes ?", 
        answers: ["Aucun rôle", "Ils doivent évaluer les impacts", "Ils simplement approuvent"], 
        correct: 1, 
        explanation: "Les spécialistes jouent un rôle clé dans l'évaluation des impacts des technologies émergentes sur la société et l'écosystème."
    },

    // question n°46 :
    { 
        question: "Quel est le lien entre la technique et l'éducation moderne ?", 
        answers: ["Pas de lien", "La technique transforme les méthodes d'enseignement", "La technique a peu d'effet"], 
        correct: 1, 
        explanation: "La technique a transformé les méthodes d'enseignement moderne, intégrant des outils technologiques dans l'apprentissage."
    },

    // question n°47 :
    { 
        question: "Quel est l'impact de l'automatisation sur le travail humain ?", 
        answers: ["Positive", "Négatif en éliminant des emplois", "Impact négligeable"], 
        correct: 1, 
        explanation: "L'automatisation a un impact négatif en éliminant de nombreux emplois traditionnels."
    },

    // question n°48 :
    { 
        question: "Quel est le lien entre l'art et la technologie ?", 
        answers: ["Pas de lien", "L'art utilise la technologie", "La technologie est hostile à l'art"], 
        correct: 1, 
        explanation: "L'art utilise souvent la technologie pour créer de nouvelles formes d'expression et d'innovation."
    },

    // question n°49 :
    { 
        question: "Qui a soutenu que la technique devrait respecter l'environnement ?", 
        answers: ["Stiegler", "Habermas", "Adorno"], 
        correct: 0, 
        explanation: "Bernard Stiegler a plaidé pour une approche éthique qui respecte et préserve l'environnement à travers la technique."
    },

    // question n°50 :
    { 
        question: "Quel lien entre technique et liberté existe-t-il selon des penseurs contemporains ?", 
        answers: ["Ils sont opposés", "La technique renforce souvent la liberté", "La technique limite la liberté"], 
        correct: 2, 
        explanation: "Des penseurs contemporains soutiennent que la technique peut parfois limiter la liberté en imposant des normes et des structures."
    },

    // question n°51 :
    { 
        question: "Quel est le rôle de l'internet dans l'accès à l'information scientifique ?", 
        answers: ["Pas d'impact", "Il facilite l'accès", "Il complique l'accès"], 
        correct: 1, 
        explanation: "L'internet facilite l'accès à l'information scientifique, permettant aux chercheurs et au grand public d'accéder à des ressources diversifiées."
    },

    // question n°52 :
    { 
        question: "Quel est le principe de la technique appropriée en milieu rural ?", 
        answers: ["Utilisation de la haute technologie", "Équipements adaptés aux besoins locaux", "Exploitation maximum des ressources"], 
        correct: 1, 
        explanation: "La technique appropriée consiste à utiliser des équipements adaptés aux besoins spécifiques des communautés locales."
    },

    // question n°53 :
    { 
        question: "Quel est le rôle des données dans la recherche scientifique moderne ?", 
        answers: ["Aucun rôle", "Elles sont essentielles pour tirer des conclusions", "Elles sont superflues"], 
        correct: 1, 
        explanation: "Les données sont essentielles pour tirer des conclusions précises dans la recherche scientifique moderne."
    },

    // question n°54 :
    { 
        question: "Quel est le défi de la démocratie face à l'usage de la technique ?", 
        answers: ["Pas de défi", "La technique peut nuire aux droits", "Elle renforce les droits"], 
        correct: 1, 
        explanation: "Le défi consiste à veiller à ce que l'usage de la technique ne nuise pas aux droits et libertés des individus."
    },

    // question n°55 :
    { 
        question: "Quel est le lien entre l'art et l'environnement dans les pratiques contemporaines ?", 
        answers: ["Pas de lien", "L'art engagé sensibilise à l'environnement", "L'art nuit à l'environnement"], 
        correct: 1, 
        explanation: "L'art engagé peut sensibiliser les gens aux enjeux environnementaux et promouvoir la protection de la nature."
    },

    // question n°56 :
    { 
        question: "Qui a proposé un cadre éthique pour la science et la technique ?", 
        answers: ["Leopold", "Foucault", "Kant"], 
        correct: 0, 
        explanation: "Aldo Leopold a présenté un cadre éthique dans ses écrits sur la conservation et l'éthique environnementale."
    },
    
    // question n°57 :
    { 
        question: "Quel est l'impact de la demande publique sur les recherches scientifiques ?", 
        answers: ["Aucun impact", "Un impact positif", "Un impact négatif"], 
        correct: 1, 
        explanation: "La demande publique peut influencer positivement les priorités et les ressources allouées à la recherche scientifique."
    },

    // question n°58 :
    { 
        question: "Quel est le principe d' 'innovation responsable' dans la technique ?", 
        answers: ["Innovation sans limites", "Prendre en compte les impacts sociaux et environnementaux", "Ignorer les conséquences"], 
        correct: 1, 
        explanation: "L'innovation responsable prend en compte les impacts sociaux et environnementaux lors du développement de nouvelles technologies."
    },

    // question n°59 :
    { 
        question: "Quel est le lien entre technique et pratiques écologiques ?", 
        answers: ["Incompatibles", "Complémentaires", "Opposées"], 
        correct: 1, 
        explanation: "La technique peut être utilisée pour développer des pratiques écologiques bénéfiques pour l'environnement."
    },

    // question n°60 :
    { 
        question: "Quel est le lien entre technique et authenticité dans les arts ?", 
        answers: ["Aucun lien", "La technique peut compromettre l'authenticité", "La technique renforce l'authenticité"], 
        correct: 1, 
        explanation: "La technique peut parfois compromettre l'authenticité des arts en se concentrant sur l'habileté au détriment de la créativité."
    },

    // question n°61 :
    { 
        question: "Quel est le rôle des tiers dans l'évaluation de la recherche scientifique ?", 
        answers: ["Aucun rôle", "Ils assurent l'objectivité", "Ils nuisent à l'estime"], 
        correct: 1, 
        explanation: "Les tiers jouent un rôle crucial en assurant l'objectivité et la rigueur dans l'évaluation des recherches scientifiques."
    },

    // question n°62 :
    { 
        question: "Quel est le principal défi des recherches en biotechnologie ?", 
        answers: ["Éthiques", "Technique", "Coût"], 
        correct: 0, 
        explanation: "Les recherches en biotechnologie doivent naviguer à travers des défis éthiques complexes en ce qui concerne les manipulations génétiques."
    },

    // question n°63 :
    { 
        question: "Quelle approche scientifique critique les effets de la technique ?", 
        answers: ["Approche utilitariste", "Philosophie critique", "Technocritique"], 
        correct: 2, 
        explanation: "La technocritique interroge les implications et les effets de la technologie sur la société et la nature."
    },

    // question n°64 :
    { 
        question: "Quel est le rôle de l'éthique dans les techniques de recherche ?", 
        answers: ["Inutile", "Établit des normes", "Focalise sur le financement"], 
        correct: 1, 
        explanation: "L'éthique établit des normes pour guider les techniques de recherche afin de protéger les droits des sujets."
    },

    // question n°65 :
    { 
        question: "Quel est le lien entre cultures technologiques et identité socioculturelle ?", 
        answers: ["Pas de lien", "Les combinaisons créent de nouvelles identités", "Elles ne sont jamais liées"], 
        correct: 1, 
        explanation: "Les cultures technologiques peuvent façonner et redéfinir l'identité socioculturelle à travers de nouvelles pratiques et valeurs."
    },

    // question n°66 :
    { 
        question: "Quel est le lien entre technique et responsabilité individuelle ?", 
        answers: ["Aucun lien", "Chaque individu a un rôle", "La technique détermine la responsabilité"], 
        correct: 1, 
        explanation: "Chaque individu a la responsabilité d'utiliser la technique de manière éthique et consciente pour préserver la société."
    },

    // question n°67 :
    { 
        question: "Quel est le rôle de l'apprentissage dans la transmission des savoirs techniques ?", 
        answers: ["Il est insignifiant", "Il est essentiel pour le partage", "Il est facultatif"], 
        correct: 1, 
        explanation: "L'apprentissage est essentiel pour la transmission des savoirs techniques d'une génération à l'autre."
    },

    // question n°68 :
    { 
        question: "Quel lien existe-t-il entre la technique et le progrès humain ?", 
        answers: ["Ils sont opposés", "La technique favorise le progrès", "Le progrès fait reculer la technique"], 
        correct: 1, 
        explanation: "La technique est souvent vue comme un moteur de progrès humain, facilitant les avancées dans divers domaines."
    },

    // question n°69 :
    { 
        question: "Quel est le rôle de la science dans le développement technologique ?", 
        answers: ["Elle est sans importance", "Elle fournir les bases", "Elle freine le développement"], 
        correct: 1, 
        explanation: "La science fournit les bases théoriques qui alimentent le développement technologique."
    },

    // question n°70 :
    { 
        question: "Quel impact les médias ont-ils sur la perception de la technique ?", 
        answers: ["Aucun impact", "Ils influencent la perception", "Ils freinent l'innovation"], 
        correct: 1, 
        explanation: "Les médias aident à influencer comment la technique est perçue, souvent en soulignant ses avantages ou ses dangers."
    },

    // question n°71 :
    { 
        question: "Quel est le rôle de l'esprit critique dans l'évaluation des avancées techniques ?", 
        answers: ["Pas de rôle", "Essentiel pour l'évaluation", "Un moyen d'évaluation sans fins"], 
        correct: 1, 
        explanation: "L'esprit critique est essentiel pour évaluer les avancées techniques et leurs impacts sur la société."
    },

    // question n°72 :
    { 
        question: "Qui a soutenu que la technique doit servir le bien commun ?", 
        answers: ["Ellul", "Habermas", "Foucault"], 
        correct: 1, 
        explanation: "Jürgen Habermas a soutenu que la technique doit être orientée vers le bien commun et le bénéfice de la société."
    },

    // question n°73 :
    { 
        question: "Quel est le lien entre éthique et utilisation de la technologie ?", 
        answers: ["Aucun lien", "L'éthique est secondaire", "L'éthique doit guider les usages de la technologie"], 
        correct: 2, 
        explanation: "L'éthique doit guider les décisions concernant l'utilisation de la technologie pour assurer qu'elles bénéficient à la société."
    },

    // question n°74 :
    { 
        question: "Quel est le concept de 'technologie intermédiaire' ?", 
        answers: ["Technologie avancée", "Un compromis entre tradition et modernité", "Technologie désuète"], 
        correct: 1, 
        explanation: "La technologie intermédiaire renvoie à un compromis qui équilibre l'ancien et le moderne dans les pratiques technologiques."
    },

    // question n°75 :
    { 
        question: "Quel est le lien entre science et technique à travers le prisme de l'éthique ?", 
        answers: ["Aucun lien", "Elles doivent coopérer", "Elles sont souvent en conflit"], 
        correct: 1, 
        explanation: "La science et la technique doivent souvent coopérer, notamment dans l'intégration des considérations éthiques."
    },

    // question n°76 :
    { 
        question: "Quel est le message clé du concept de biopolitique ?", 
        answers: ["Un lien indirect entre biologie et politique", "La vie humaine doit être contrôlée", "Le bien-être humain est renforcé"], 
        correct: 1, 
        explanation: "Le concept de biopolitique évoque la manière dont la vie humaine est gouvernée par des techniques de contrôle et de gestion."
    },

    // question n°77 :
    { 
        question: "Qui a contribué à la réflexion sur le changement de paradigme dans les sciences ?", 
        answers: ["Heisenberg", "Kuhn", "Popper"], 
        correct: 1, 
        explanation: "Thomas Kuhn a développé l'idée de changement de paradigme pour expliquer comment les révolutions scientifiques redéfinissent les connaissances."
    },

    // question n°78 :
    { 
        question: "Quel est le lien entre techniques numériques et éducations ?", 
        answers: ["Elles sont opposées", "Les techniques améliorent l'apprentissage", "Les techniques nuisent à l'éducation"], 
        correct: 1, 
        explanation: "Les techniques numériques améliorent les méthodes d'enseignement et facilitent l'apprentissage interactif."
    },

    // question n°79 :
    { 
        question: "Quel est le lien entre techniques de communication et société ?", 
        answers: ["Aucun lien", "Les techniques façonnent les interactions sociales", "Les techniques sont sans pertinence"], 
        correct: 1, 
        explanation: "Les techniques de communication façonnent les interactions sociales, influençant comment les individus se connectent."
    },

    // question n°80 :
    { 
        question: "Quel est le rôle de l'État dans la régulation des technologies ?", 
        answers: ["Aucun rôle", "Elle s'oppose à l'assainissement", "Elle doit garantir les intérêts publics"], 
        correct: 2, 
        explanation: "L'État doit réguler les technologies pour garantir qu'elles servent l'intérêt public et protègent les droits des citoyens."
    },

    // question n°81 :
    { 
        question: "Quel lien établit-on entre science et mystique ?", 
        answers: ["Ils sont opposés", "Ils se complètent", "Ils sont identiques"], 
        correct: 0, 
        explanation: "La science et la mystique sont souvent considérées comme opposées, l'une reposant sur des preuves empiriques et l'autre sur des croyances spirituelles."
    }, 

    // question n°82 :
    { 
        question: "Quel est le lien entre technique et responsabilité écologique ?", 
        answers: ["Pas de lien", "La technique peut nuire à l'environnement", "La technique est responsable"], 
        correct: 1, 
        explanation: "La technique peut avoir un impact néfaste sur l'environnement, appelant à une responsabilité écologique dans son utilisation."
    },

    // question n°83 :
    { 
        question: "Quel rôle la recherche-action joue-t-elle dans le domaine technique ?", 
        answers: ["Pas de rôle", "Elle favorise le changement positif.", "Elle crée des divisions"], 
        correct: 1, 
        explanation: "La recherche-action favorise le changement positif en impliquant des participants et en s'adaptant à leurs besoins."
    },

    // question n°84 :
    { 
        question: "Quel est le principe de l'innovation responsable dans le contexte technique ?", 
        answers: ["Innovation sans limites", "Prendre en compte les impacts sociaux et environnementaux", "Ignorer les conséquences"], 
        correct: 1, 
        explanation: "L'innovation responsable cherche à équilibrer les avancées techniques avec des considérations éthiques et environnementales."
    },

    // question n°85 :
    { 
        question: "Quel impact la technique a-t-elle sur la créativité ?,", 
        answers: ["Aucun impact", "Elle stimule la créativité", "Elle la bloque"], 
        correct: 1, 
        explanation: "La technique stimule souvent la créativité en permettant aux artistes et aux innovateurs de réaliser leurs idées."
    },

    // question n°86 :
    { 
        question: "Quel est le lien entre techniques de communication et modes d'interaction ?", 
        answers: ["Pas de lien", "Elles influencent les interactions", "Elles compliquent les problèmes"], 
        correct: 1, 
        explanation: "Les techniques de communication influencent les modes d'interaction, façonnant la manière dont les individus se connectent."
    },

    // question n°87 :
    { 
        question: "Quel est l'impact de l'innovation sur le marché du travail ?", 
        answers: ["Il n'y a pas d'impact", "Il crée de nouveaux emplois", "Il dirige vers des pertes d'emplois"], 
        correct: 2, 
        explanation: "L'innovation peut entraîner la création de nouveaux emplois tout en remplaçant certains postes existants."
    },

    // question n°88 :
    { 
        question: "Quel lien entre technologies numériques et enseignement existons-nous aujourd'hui ?", 
        answers: ["Pas de lien", "Les technologies enrichissent l'éducation", "Les technologies compliquent l'apprentissage"], 
        correct: 1, 
        explanation: "Les technologies numériques enrichissent l'éducation en fournissant des outils d'apprentissage supplémentaires et de nouvelles expériences."
    },

    // question n°89 :
    { 
        question: "Quel est le rôle de la planification de l'urbanisme dans l'intégration de la nature ?", 
        answers: ["Aucun rôle", "Elle favorise la durabilité", "Elle crée des tensions"], 
        correct: 1, 
        explanation: "La planification de l'urbanisme favorise la durabilité en intégrant la nature dans les espaces urbains pour améliorer la qualité de vie."
    },

    // question n°90 :
    { 
        question: "Quel est le lien entre technique et auto-dévotion ?", 
        answers: ["Pas de lien", "La technique soutient la dévotion personnelle", "La dévotion est sans implication"], 
        correct: 1, 
        explanation: "La technique peut soutenir la dévotion personnelle en fournissant des outils pour exprimer des croyances ou effectuer des pratiques religieuses."
    },

    // question n°91 :
    { 
        question: "Quel rôle joue la technologie dans les médias contemporains ?", 
        answers: ["Pas d'impact", "Elle facilite l'information", "Elle complique les interactions"], 
        correct: 1, 
        explanation: "La technologie joue un rôle crucial dans les médias contemporains en facilitant la rapidité et l'accessibilité de l'information."
    },

    // question n°92 :
    { 
        question: "Quel est le rapport entre technique et citoyenneté ?", 
        answers: ["Ils sont indépendants", "La technique soutient les droits", "Elle la rend obsolète"], 
        correct: 1, 
        explanation: "La technique peut renforcer la citoyenneté en fournissant des outils et des informations qui favorisent l'engagement civique."
    },

    // question n°93 :
    { 
        question: "Quel est le rôle du progrès technique dans la société moderne ?", 
        answers: ["Aucun rôle", "C'est un moteur de changement", "C'est un frein positif à la société"], 
        correct: 1, 
        explanation: "Le progrès technique est un moteur de changement dans la société moderne, influençant de nombreux aspects du quotidien."
    },

    // question n°94 :
    { 
        question: "Quel est l'impact des normes éthiques sur l'usage de la technologie ?", 
        answers: ["Aucun impact", "Elles guident l'utilisation responsable", "Elles sont superflues"], 
        correct: 1, 
        explanation: "Les normes éthiques guident l'utilisation responsable de la technologie pour assurer le respect des droits individuels."
    },

    // question n°95 :
    { 
        question: "Quel lien entre technocritique et responsabilité sociale ?", 
        answers: ["Aucun lien", "Elles se complètent", "Elles s'opposent"], 
        correct: 1, 
        explanation: "La technocritique et la responsabilité sociale se complètent dans la mesure où elles interrogent les impacts de la technologie sur la société."
    },

    // question n°96 :
    { 
        question: "Qui a écrit 'La société technologique' ?", 
        answers: ["Ellul", "Huxley", "Orwell"], 
        correct: 0, 
        explanation: "Jacques Ellul a écrit et discuté des conséquentes culturelles de l'essor des techniques dans son livre 'La société technologique'."
    },

    // question n°97 :
    { 
        question: "Quel est le rôle de la méthode scientifique dans l'élaboration des connaissances ?", 
        answers: ["Aucun rôle", "Elle favorise la rigueur", "Elle est influencée par l'émotion"], 
        correct: 1, 
        explanation: "La méthode scientifique joue un rôle essentiel en favorisant la rigueur dans l'élaboration des connaissances."
    },

    // question n°98 :
    { 
        question: "Quel lien entre technique et innovation existe ?", 
        answers: ["Une opposée", "Complémentaire", "Aucune relation"], 
        correct: 1, 
        explanation: "La technique et l'innovation sont souvent liées, la première facilitant le processus de l'autre."
    },

    // question n°99 :
    { 
        question: "Qui a introduit le concept de 'responsabilité générationnelle' dans les débats techniques ?", 
        answers: ["Bourdieu", "Handy", "Sandel"], 
        correct: 2, 
        explanation: "Michael Sandel a utilisé le concept de responsabilité générationnelle pour discuter des implications éthiques des technologies."
    },

    // question n°100 :
    { 
        question: "Quel est le rôle des artistes dans le débat sur la technique ?", 
        answers: ["Pas de rôle", "Ils sensibilisent aux enjeux", "Ils compliquent les discussions"], 
        correct: 1, 
        explanation: "Les artistes jouent un rôle clé en sensibilisant aux enjeux de la technique et en ouvrant des réflexions critiques sur ses impacts."
    }
];