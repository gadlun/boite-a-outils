const questions = [
    // question n°1 : 
    { 
        question: "Qu'est-ce que la conscience selon René Descartes ?",
        answers: ["Une illusion", "La certitude de soi", "Un construit social"], 
        correct: 1,
        explanation: "Descartes postule que la conscience est la certitude de notre propre existence et pensée."
    },
    
    // question n°2 : 
    { 
        question: "Qui a introduit le terme 'inconscient' dans la psychanalyse ?",
        answers: ["Freud", "Kant", "Jung"], 
        correct: 0,
        explanation: "Sigmund Freud a introduit le concept d'inconscient pour expliquer les motivations inconnues des actions humaines."
    },

    // question n°3 : 
    { 
        question: "Quels sont les trois niveaux de conscience selon Freud ?",
        answers: ["Conscient, préconscient, inconscient", "Rationnel, irrationnel, émotionnel", "Physique, psychique, social"], 
        correct: 0,
        explanation: "Freud définit la conscience en trois niveaux : conscient, préconscient et inconscient."
    },

    // question n°4 : 
    { 
        question: "Qui a proposé l'idée que la conscience est un 'flux de pensée' ?",
        answers: ["Wittgenstein", "James", "Sartre"], 
        correct: 1,
        explanation: "William James décrit la conscience comme un flux dynamique dans son analyse de la psychologie."
    },

    // question n°5 : 
    { 
        question: "Quelle est la position de Kant sur la conscience morale ?",
        answers: ["Elle est innée", "Elle est acquise", "Elle n'existe pas"], 
        correct: 0,
        explanation: "Kant soutient que la conscience morale est une faculté innée qui guide nos actions éthiques."
    },

    // question n°6 : 
    { 
        question: "Selon Merleau-Ponty, la conscience est liée à :",
        answers: ["Le corps", "L'esprit", "La société"], 
        correct: 0,
        explanation: "Merleau-Ponty insiste sur l'importance du corps dans le processus de la conscience perceptive."
    },

    // question n°7 : 
    { 
        question: "Qui a affirmé que 'la conscience est la voix de l'âme' ?",
        answers: ["Platon", "Socrate", "Aristote"], 
        correct: 0,
        explanation: "Platon considère la conscience comme une démonstration de l'âme et de sa quête de vérité."
    },

    // question n°8 : 
    { 
        question: "Quelle est la principale question que pose la philosophie de la conscience ?",
        answers: ["Qu'est-ce que le visible ?", "Qu'est-ce que la subjectivité ?", "Qu'est-ce que l'inconscient ?"], 
        correct: 1,
        explanation: "La philosophie de la conscience s'interroge sur la nature de la subjectivité et de l'expérience individuelle."
    },

    // question n°9 : 
    { 
        question: "Qui a exploré le phénomène de l'introspection ?",
        answers: ["Wundt", "Descartes", "Kant"], 
        correct: 0,
        explanation: "Wilhelm Wundt est souvent considéré comme le père de la psychologie expérimentale et de la méthode d'introspection."
    },

    // question n°10 : 
    { 
        question: "Qu'est-ce que la 'conscience phénoménale' ?",
        answers: ["La conscience réfléchie", "L'expérience vécue", "La conscience morale"], 
        correct: 1,
        explanation: "La conscience phénoménale désigne l'expérience subjective telle que vécue par un individu."
    },

    // question n°11 : 
    { 
        question: "Qui a dit : 'Je pense donc je suis' en relation avec la conscience ?",
        answers: ["Descartes", "Sartre", "Hegel"], 
        correct: 0,
        explanation: "Cette phrase de Descartes souligne le lien entre la conscience de soi et l'existence."
    },

    // question n°12 : 
    { 
        question: "Selon Hegel, la conscience se développe à travers :",
        answers: ["Une lutte", "Une paix", "Une peinture"], 
        correct: 0,
        explanation: "Hegel soutient que la conscience évolue à travers des conflits dialectiques."
    },

    // question n°13 : 
    { 
        question: "Qu'est-ce qui distingue la conscience humaine selon Friedrich Nietzsche ?",
        answers: ["La souffrance", "La création", "Le ressentiment"], 
        correct: 1,
        explanation: "Nietzsche voit la capacité de création et d'interprétation comme essentielle à la conscience humaine."
    },

    // question n°14 : 
    { 
        question: "Qui a lié conscience et expérience sociale ?",
        answers: ["Marx", "Kant", "Sartre"], 
        correct: 0,
        explanation: "Karl Marx analyse comment les expériences sociales influencent la conscience collective."
    },

    // question n°15 : 
    { 
        question: "Selon les existentialistes, la conscience est :",
        answers: ["Une malédiction", "Une responsabilité", "Une illusion"], 
        correct: 1,
        explanation: "Les existentialistes mettent l'accent sur la responsabilité que la conscience impose à l'individu."
    },

    // question n°16 : 
    { 
        question: "Qu'est-ce que le 'fundamentalisme de la conscience' pour Derrida ?",
        answers: ["L'auto-analyse", "La déconstruction", "L'indifférence"], 
        correct: 1,
        explanation: "Derrida remet en question la façon dont la conscience est rigidement définie à travers la déconstruction."
    },

    // question n°17 : 
    { 
        question: "Qui a soutenu que la conscience est une 'illusion d'optique' ?",
        answers: ["Hume", "Dennett", "Kant"], 
        correct: 1,
        explanation: "Daniel Dennett émet l'hypothèse que la conscience est une construction cognitive et non une réalité solide."
    },

    // question n°18 : 
    { 
        question: "Qui a examiné la conscience de manière scientifique dans le contexte de la psychologie ?",
        answers: ["Freud", "Wundt", "Nutty"], 
        correct: 1,
        explanation: "Wilhelm Wundt a fondé un laboratoire de psychologie pour l'étude de la conscience."
    },

    // question n°19 : 
    { 
        question: "Selon Kant, quelle est la fonction de la conscience ?",
        answers: ["Interpréter le monde", "Légaliser la réalité", "Faire appel à l'inaction"], 
        correct: 0,
        explanation: "Pour Kant, la conscience est essentielle pour donner un sens à nos expériences du monde."
    },

    // question n°20 : 
    { 
        question: "Quel est le lien entre conscience et subjectivité, selon Husserl ?",
        answers: ["Elles sont identiques", "La conscience révèle la subjectivité", "La subjectivité n'existe pas"], 
        correct: 1,
        explanation: "Husserl montre que la conscience est toujours dirigée vers des objets, révélant la subjectivité."
    },

    // question n°21 : 
    { 
        question: "Quelle philosophie étudie la nature de l'esprit en rapport avec la conscience ?",
        answers: ["Phénoménologie", "Réductionnisme", "Structuralisme"], 
        correct: 0,
        explanation: "La phénoménologie se concentre sur l'expérience vécue et la conscience de manière approfondie."
    },

    // question n°22 : 
    { 
        question: "Qui a déclaré que la conscience est 'le produit de manière d'aller et venir à travers d'autres' ?",
        answers: ["Deleuze", "Foucault", "Sartre"], 
        correct: 1,
        explanation: "Foucault souligne comment la conscience est façonnée socialement et historiquement."
    },

    // question n°23 : 
    { 
        question: "Qui a analysé la conscience en la liant à des émotions ?",
        answers: ["Freud", "James", "Nietzsche"], 
        correct: 1,
        explanation: "William James soutient que nos émotions influencent notre niveau de conscience."
    },

    // question n°24 : 
    { 
        question: "Selon Descartes, l'auto-réflexion conduit à :",
        answers: ["L'esprit confus", "L'illusion", "La certitude"], 
        correct: 2,
        explanation: "Descartes affirme que par l'auto-réflexion, on parvient à une certitude de son existence."
    },

    // question n°25 : 
    { 
        question: "Dans la philosophie de la conscience, qu'est-ce que la 'conscience morale' ?",
        answers: ["Un instinct", "L'évaluation des comportements", "Une tradition"], 
        correct: 1,
        explanation: "La conscience morale implique le jugement des actions en termes de bien et de mal."
    },

    // question n°26 : 
    { 
        question: "Quia dit que 'l'expérience sensorielle est la source de toute conscience' ?",
        answers: ["Hume", "Kant", "Leibniz"], 
        correct: 0,
        explanation: "David Hume élabore sur l'idée que notre conscience dépend des impressions sensorielles."
    },

    // question n°27 : 
    { 
        question: "Qui a mis en avant l'importance de 'l'analyse réflexive' ?",
        answers: ["Husserl", "Descartes", "Kant"], 
        correct: 0,
        explanation: "Husserl explore comment l'analyse réflexive est nécessaire pour accéder à la conscience pure."
    },

    // question n°28 : 
    { 
        question: "Qui a exploré la conscience chez les animaux dans le cadre de la psychologie comportementale ?",
        answers: ["Watson", "Freud", "Skinner"], 
        correct: 0,
        explanation: "John B. Watson a fondé le comportementalisme en examinant les comportements sans se concentrer sur la conscience."
    },

    // question n°29 : 
    { 
        question: "Laquelle de ces philosophies se concentre sur la 'conscience collective' ?",
        answers: ["Hegel", "Durkheim", "Kant"], 
        correct: 1,
        explanation: "Durkheim explore comment la conscience collective façonne la moralité et les valeurs d'une société."
    },

    // question n°30 : 
    { 
        question: "Qui a dit que 'la conscience est l'instance morale de l'individu' ?",
        answers: ["Freud", "Kant", "Nietzsche"], 
        correct: 1,
        explanation: "Kant postule que la conscience joue un rôle crucial dans la décision morale de l'individu."
    },

    // question n°31 : 
    { 
        question: "Qu'est-ce que la 'conscience réflexive' ?",
        answers: ["Réflexion sur soi", "Réflexion sur les autres", "Absence de conscience"], 
        correct: 0,
        explanation: "La conscience réflexive est la prise de conscience de ses propres pensées et sentiments."
    },

    // question n°32 : 
    { 
        question: "Qui a exploré le lien entre conscience et identité selon l'idée de 'narration' ?",
        answers: ["Sartre", "Kant", "Ricoeur"], 
        correct: 2,
        explanation: "Paul Ricoeur argumente que la conscience de soi est une narration continue de l'identité personnelle."
    },

    // question n°33 : 
    { 
        question: "Qui a soutenu que 'la conscience est la métaphysique du langage' ?",
        answers: ["Derrida", "Wittgenstein", "Husserl"], 
        correct: 1,
        explanation: "Wittgenstein examine comment le langage détermine notre conscience des choses."
    },

    // question n°34 : 
    { 
        question: "Quels aspects sont recherchés dans la 'psychologie de la conscience' ?",
        answers: ["Expériences sensorielles", "Cognition", "Émotions"], 
        correct: 1,
        explanation: "La psychologique de la conscience cherche à comprendre comment nous cognons et vivons les expériences."
    },

    // question n°35 : 
    { 
        question: "Qui a dit que 'l'inconscient est structuré comme un langage' ?",
        answers: ["Lacan", "Freud", "Kant"], 
        correct: 0,
        explanation: "Jacques Lacan met l'accent sur le langage en tant que moyen structurant de l'inconscient."
    },

    // question n°36 : 
    { 
        question: "Selon Sartre, quel est le rapport entre la conscience et le libre arbitre ?",
        answers: ["La conscience est une illusion", "La conscience implique la liberté", "La conscience limite le libre arbitre"], 
        correct: 1,
        explanation: "Sartre est célèbre pour son idée que la conscience est indissociable du libre arbitre."
    },

    // question n°37 : 
    { 
        question: "Quand parle-t-on de 'conscience sociale' ?",
        answers: ["Sur la morale individuelle", "Sur le collectif", "Sur l'introspection"], 
        correct: 1,
        explanation: "La conscience sociale renvoie à la prise de conscience des dynamiques et des injustices au sein de la société."
    },

    // question n°38 : 
    { 
        question: "Quel terme désigne une conscience altérée par des substances ?",
        answers: ["Hypnose", "État modifié de conscience", "Hallucination"], 
        correct: 1,
        explanation: "Un état modifié de conscience fait référence à des expériences altérées de la perception de la réalité, souvent induites par des substances."
    },

    // question n°39 : 
    { 
        question: "Quel est le principal objet du débat sur la 'conscience de masse' ?",
        answers: ["L'individualité", "Le consumérisme", "Les normes sociales"], 
        correct: 2,
        explanation: "Le débat sur la conscience de masse soulève des questions sur la conformité et les idéologies dominantes."
    },

    // question n°40 : 
    { 
        question: "Quel philosophe associe la conscience à une lutte entre l'individu et la société ?",
        answers: ["Hegel", "Marx", "Rousseau"], 
        correct: 2,
        explanation: "Rousseau démontre comment l'individu souffre des contraintes imposées par une société inégale."
    },

    // question n°41 : 
    { 
        question: "Qui a défini la conscience comme 'la capacité de se connaître soi-même ?",
        answers: ["Kant", "Hegel", "Wittgenstein"], 
        correct: 0,
        explanation: "Kant définit la conscience en tant que capacité d'auto-connaissance et d'auto-évaluation."
    },

    // question n°42 : 
    { 
        question: "Qu'est-ce que l'effet 'cocktail party' ?",
        answers: ["Un phénomène de l'inconscient", "Un phénomène de conscience sélective", "Un terme de chimie"], 
        correct: 1,
        explanation: "L'effet cocktail party désigne la capacité de concentrer son attention sur une seule conversation dans un environnement bruyant."
    },

    // question n°43 : 
    { 
        question: "Qui a établi que la conscience évolue avec le langage ?",
        answers: ["Vygotsky", "Piaget", "Husserl"], 
        correct: 0,
        explanation: "Léon Vygotsky insiste sur le rôle du langage dans le développement de la conscience."
    },

    // question n°44 : 
    { 
        question: "Pour qui la conscience est-elle une question de 'développements internes'? ",
        answers: ["Freud", "Jung", "Skinner"], 
        correct: 1,
        explanation: "Carl Jung met l'accent sur le rôle des processus internes et de l'inconscient collectif dans la conscience."
    },

    // question n°45 : 
    { 
        question: "Qui a affirmé que 'la conscience est la condition de toutes les expériences' ?",
        answers: ["William James", "Kant", "Spinoza"], 
        correct: 0,
        explanation: "James a ouvert la voie à une compréhension de la conscience en tant que condition d'expérience."
    },

    // question n°46 : 
    { 
        question: "Quel concept défend Hegel en relation avec la conscience historique ?",
        answers: ["La dialectique", "Le déterminisme", "Le marxisme"], 
        correct: 0,
        explanation: "Hegel développe l'idée que la conscience historique progresse par des confrontations dialectiques."
    },

    // question n°47 : 
    { 
        question: "Dans quelle philosophie la conscience de soi est-elle fondamentale ?",
        answers: ["Existentialisme", "Positivisme", "Matérialisme"], 
        correct: 0,
        explanation: "L'existentialisme place la conscience de soi au cœur de l'expérience humaine."
    },

    // question n°48 : 
    { 
        question: "Qui a utilisé le terme 'conscience historique' ?",
        answers: ["Hegel", "Marx", "Durkheim"], 
        correct: 0,
        explanation: "Hegel explore la conscience historique comme un processus dynamique qui façonne la société."
    },

    // question n°49 : 
    { 
        question: "Qui a déclaré que la conscience est 'un effet retentissant des expériences' ?",
        answers: ["Foucault", "Freud", "Sartre"], 
        correct: 0,
        explanation: "Foucault examine comment les expériences sociales et historiques configureront la conscience."
    },

    // question n°50 : 
    { 
        question: "Qui a exploré la dualité entre corps et esprit en lien avec la conscience ?",
        answers: ["Descartes", "Hobbes", "Spinoza"], 
        correct: 0,
        explanation: "Descartes est connu pour son dualisme, séparant le corps et l'esprit dans la philosophie de la conscience."
    },

    // question n°51 : 
    { 
        question: "Qu'est-ce que la 'metacognition' ?",
        answers: ["Connaissance sur la conscience", "Conscience sur les émotions", "Absence de connaissance"], 
        correct: 0,
        explanation: "La métacognition désigne la conscience et la compréhension de ses propres processus cognitifs."
    },

    // question n°52 : 
    { 
        question: "Qui a décrit le phénomène de la 'conscience de soi' ?",
        answers: ["Kant", "Hegel", "Marx"], 
        correct: 1,
        explanation: "Hegel discute de la conscience de soi comme un processus dialectique du développement personnel."
    },

    // question n°53 : 
    { 
        question: "Qui a introduit la notion de 'nirvana' en lien avec la conscience ?",
        answers: ["Bouddha", "Freud", "Kant"], 
        correct: 0,
        explanation: "Le concept de nirvana dans le bouddhisme renvoie à l'extinction de la souffrance et de l'illusion de la conscience."
    },

    // question n°54 : 
    { 
        question: "Qui a élevé la conscience collective à un niveau systémique ?",
        answers: ["Marx", "Durkheim", "Tocqueville"], 
        correct: 1,
        explanation: "Durkheim a développé le concept de conscience collective, déterminant les valeurs et normes d'une société."
    },

    // question n°55 : 
    { 
        question: "Qui a défini la conscience comme une 'représentation des représentations' ?",
        answers: ["Kant", "Spinoza", "Hall"], 
        correct: 0,
        explanation: "Kant décrit la conscience comme un système où les représentations sont interprétées et évaluées."
    },

    // question n°56 : 
    { 
        question: "Quel terme désigne l'état de conscience qui se concentre sur des sensations spécifiques ?",
        answers: ["Concentration", "Attention", "Détente"], 
        correct: 1,
        explanation: "L'attention est souvent définie comme le mécanisme qui régule la conscience en se concentrant sur des stimuli particuliers."
    },

    // question n°57 : 
    { 
        question: "Qui s'intéresse à la conscience de l'altérité ?",
        answers: ["Levinas", "Kant", "Sartre"], 
        correct: 0,
        explanation: "Emmanuel Levinas examine comment la conscience conçoit l'autre et les responsabilités qui en découlent."
    },

    // question n°58 : 
    { 
        question: "Qui a établi que la conscience s'interroge sur la expérience à travers la 'misère humaine' ?",
        answers: ["Camus", "Hegel", "Nietzsche"], 
        correct: 0,
        explanation: "Albert Camus relie la conscience à l'absurde et à la misère inhérente à la condition humaine."
    },

    // question n°59 : 
    { 
        question: "Quelle figure a posé la question de l'éthique en relation avec la conscience ?",
        answers: ["Kant", "Foucault", "Aristote"], 
        correct: 0,
        explanation: "Kant aborde la conscience éthique en tant que fondement de l'action morale."
    },

    // question n°60 : 
    { 
        question: "Qui a dit que 'l’ego est l’instance d’interprétation de la conscience' ?",
        answers: ["Freud", "Jung", "Kant"], 
        correct: 1,
        explanation: "Carl Jung analyse l'ego comme étant le centre de la conscience et de la perception de soi."
    },

    // question n°61 :
    { 
        question: "Qui a lié conscience et choix éthique ?",
        answers: ["Aristote", "Kant", "Wittgenstein"], 
        correct: 1,
        explanation: "Kant met l’accent sur la conscience éthique comme garantie de choix moraux."
    },

    // question n°62 : 
    { 
        question: "Qui a distingué entre la conscience immédiate et la conscience réfléchie ?",
        answers: ["Descartes", "James", "Sartre"], 
        correct: 1,
        explanation: "William James analyse comment la conscience immédiate est souvent différente de l'analyse réflexive."
    },

    // question n°63 : 
    { 
        question: "Quelle est la relation entre la conscience et le temps, selon Bergson ?",
        answers: ["Le temps est illusoire", "La conscience est une mémoire de l'expérience", "L'absence de temps est la conscience"], 
        correct: 1,
        explanation: "Bergson décrit la conscience en termes de mémoire et de croissance des expériences vécues."
    },

    // question n°64 : 
    { 
        question: "Qu'est-ce que la 'conscience écologique' ?",
        answers: ["Conscience du vivant", "Conscience de la nature", "Conscience de l'environnement"], 
        correct: 2,
        explanation: "La conscience écologique se réfère à la prise de conscience des enjeux environnementaux dans notre société."
    },

    // question n°65 : 
    { 
        question: "Qui affirme que 'la conscience est un espace temporel' ?",
        answers: ["Kant", "Merleau-Ponty", "Bergson"], 
        correct: 2,
        explanation: "Bergson propose que la conscience est liée au temps, tant au présent qu'au passé."
    },

    // question n°66 : 
    { 
        question: "Qui a proposé de voir la conscience comme un déséquilibre ?",
        answers: ["Leibniz", "Platon", "Hegel"], 
        correct: 1,
        explanation: "Platon voit la conscience comme ayant besoin d'équilibre entre santé de l'âme et connaissance."
    },

    // question n°67 : 
    { 
        question: "Selon Marshall McLuhan, quels effets le médium a-t-il sur la conscience ?",
        answers: ["Aucun", "Il la transforme", "Il l'augmente"], 
        correct: 1,
        explanation: "McLuhan soutient que le médium modifie la manière dont la conscience perçoit le monde."
    },

    // question n°68 : 
    { 
        question: "Qui a écrit sur les 'types de conscience' en lien avec les cultures ?",
        answers: ["Bourdieu", "Kant", "Geertz"], 
        correct: 2,
        explanation: "Clifford Geertz explore comment les cultures influencent les types de conscience."
    },

    // question n°69 : 
    { 
        question: "Qui voit la conscience comme un 'processus en devenir' ?",
        answers: ["Marx", "Tocqueville", "Heidegger"], 
        correct: 2,
        explanation: "Heidegger analyse comment la conscience évolue et s'articule dans un processus d'être."
    },

    // question n°70 : 
    { 
        question: "Avec quel concept est souvent lié le terme 'conscience de classe' ?",
        answers: ["Conscience sociale", "Conscience individuelle", "Conscience historique"], 
        correct: 0,
        explanation: "La conscience de classe est un terme marxiste soulignant la prise de conscience des luttes sociales."
    },

    // question n°71 : 
    { 
        question: "Qui a introduit la notion de 'conscience culturelle' ?",
        answers: ["Sartre", "Bourdieu", "Foucault"], 
        correct: 1,
        explanation: "Pierre Bourdieu parle de la conscience culturelle pour expliquer comment les classes sociales agissent."
    },

    // question n°72 : 
    { 
        question: "Quel concept décrit le 'savoir-être' en lien avec la conscience ?",
        answers: ["Intelligence émotionnelle", "Conscience de soi", "Conscience sociale"], 
        correct: 0,
        explanation: "La conscience de soi est rapprochée du savoir-être, permettant un meilleur rapport avec autrui."
    },

    // question n°73 : 
    { 
        question: "Qui a dit que 'la conscience est créatrice' ?",
        answers: ["Leibniz", "Kant", "Sartre"], 
        correct: 1,
        explanation: "Kant insiste sur le rôle créatif de la conscience dans la formation de nos expériences."
    },

    // question n°74 : 
    { 
        question: "Quel philosophe a exploré l'idée d'inconscience collective ?",
        answers: ["Freud", "Jung", "Derrida"], 
        correct: 1,
        explanation: "Carl Jung introduit le concept d'inconscient collectif, un réservoir d’expériences partagées."
    },

    // question n°75 : 
    { 
        question: "Qui a examiné le rapport entre l'art et la conscience ?",
        answers: ["Derrida", "Gadamer", "Sartre"], 
        correct: 1,
        explanation: "Hans-Georg Gadamer explore comment l'art et l'esthétique touchent à la conscience humaine."
    },

    // question n°76 : 
    { 
        question: "Qui a discuté du 'narcissisme' en lien avec la conscience ?",
        answers: ["Freud", "Hegel", "Bourdieu"], 
        correct: 0,
        explanation: "Freud a abordé le narcissisme comme un aspect de la conscience centrée sur soi."
    },

    // question n°77 : 
    { 
        question: "Qui a déclaré : 'la conscience doit être mise en question pour évoluer' ?",
        answers: ["Foucault", "Freud", "Sartre"], 
        correct: 0,
        explanation: "Foucault plaide pour une remise en question constante de la conscience et des normes établies."
    },

    // question n°78 : 
    { 
        question: "Qu'implique l'auto-analyse pour la conscience ?",
        answers: ["Recul", "Vision", "Écoute"], 
        correct: 1,
        explanation: "L'auto-analyse nécessite une vision introspective pour explorer la conscience."
    },

    // question n°79 : 
    { 
        question: "Laquelle de ces approches est centrée sur la conscience du comportement ?", 
        answers: ["Behaviorisme", "Psychanalyse", "Phénoménologie"], 
        correct: 0,
        explanation: "Le behaviorisme se concentre sur le comportement observable et ses liens avec la conscience."
    },

    // question n°80 : 
    { 
        question: "Quel philosophe a questionné la conscience dans le cadre du postmodernisme ?",
        answers: ["Lyotard", "Derrida", "Foucault"], 
        correct: 1,
        explanation: "Jacques Derrida étudie comment la conscience est déconstituée dans le discours postmoderniste."
    },

    // question n°81 : 
    { 
        question: "Qui a dit que 'la conscience n'est qu'un bruit' ?",
        answers: ["Freud", "Sartre", "Nietzsche"], 
        correct: 2,
        explanation: "Nietzsche évoque la conscience en termes d'illusion ou de bruit qui obscurcit l'instinct."
    },

    // question n°82 : 
    { 
        question: "Qui a introduit le concept de 'polyconscience' ?",
        answers: ["Deleuze", "Foucault", "Freud"], 
        correct: 0,
        explanation: "Gilles Deleuze parle de polyconscience pour explorer la coexistence de diverses formes de conscience."
    },

    // question n°83 : 
    { 
        question: "Qui relie la conscience aux phénomènes d'illusion ?",
        answers: ["Freud", "James", "Husserl"], 
        correct: 0,
        explanation: "Freud examine comment la conscience peut créer des illusions en fonction de l'inconscient."
    },

    // question n°84 : 
    { 
        question: "Qui a dit que 'la conscience s'exprime à travers le désir' ?",
        answers: ["Marx", "Freud", "Dagerman"], 
        correct: 1,
        explanation: "Freud établit un lien entre la conscience, les désirs refoulés et les actions humaines."
    },

    // question n°85 : 
    { 
        question: "Qui a dit que 'la conscience est le produit de la culture' ?",
        answers: ["Bourdieu", "Wittgenstein", "Jung"], 
        correct: 0,
        explanation: "Bourdieu discute des manières dont la culture façonne notre compréhension de la conscience."
    },

    // question n°86 : 
    { 
        question: "Quel concept évoque la nécessité de vivre en accord avec sa conscience ?",
        answers: ["L'authenticité", "L'aliénation", "Le conformisme"], 
        correct: 0,
        explanation: "L'authenticité implique d'agir selon sa conscience plutôt que de se conformer aux attentes autrui."
    },

    // question n°87 : 
    { 
        question: "Qui oppose la 'conscience' au 'non-être' ?",
        answers: ["Sartre", "Heidegger", "Kant"], 
        correct: 1,
        explanation: "Heidegger affirme que la conscience est essentielle pour comprendre notre existence et notre être."
    },

    // question n°88 : 
    { 
        question: "Qu'est-ce qui relie la conscience à la responsabilité morale ?",
        answers: ["Le libre arbitre", "Le déterminisme", "La soumission"], 
        correct: 0,
        explanation: "La conscience et le libre arbitre sont souvent liés pour établir la base de la responsabilité morale."
    },

    // question n°89 : 
    { 
        question: "Qui a dit que la 'conscience est une méthode d'auto-évaluation' ?",
        answers: ["Kant", "Jung", "Freud"], 
        correct: 0,
        explanation: "Kant souligne que la conscience joue un rôle clé dans l'évaluation de nos actes et décisions."
    },

    // question n°90 : 
    { 
        question: "Qui a reconnu la conscience comme 'l'ensemble des perceptions' ?",
        answers: ["James", "Kant", "Husserl"], 
        correct: 1,
        explanation: "Kant décrit la conscience comme un réservoir de toutes nos perceptions et expériences."
    },

    // question n°91 : 
    { 
        question: "Qui a discuté du concept de conscience comme 'réflexion intra-psychique' ?",
        answers: ["Freud", "Maslow", "Doisneau"], 
        correct: 0,
        explanation: "Freud commence à examiner la notion de conscience dans le cadre de l'introspection psychanalytique."
    },

    // question n°92 : 
    { 
        question: "Quel est le principe d'une 'conscience critique' ?",
        answers: ["Douter de tout", "Accepter sans question", "Questionner les normes"], 
        correct: 2,
        explanation: "Une conscience critique implique d'analyser les normes et idées établies."
    },

    // question n°93 : 
    { 
        question: "Qui soutient que 'la conscience est polysémique' ?",
        answers: ["Bourdieu", "Foucault", "Deleuze"], 
        correct: 2,
        explanation: "Deleuze explore comment plusieurs significations peuvent coexister dans la notion de conscience."
    },

    // question n°94 : 
    { 
        question: "Qu'est-ce que la 'conscience de soi' ?",
        answers: ["D'être conscient de ses actions", "D'être aliéné", "D'être heureux"], 
        correct: 0,
        explanation: "La conscience de soi implique d'être conscient de ses propres pensées et actions."
    },

    // question n°95 : 
    { 
        question: "Qui a décrit la conscience comme une 'narration interne' ?",
        answers: ["Ricoeur", "Bourdieu", "Marx"], 
        correct: 0,
        explanation: "Paul Ricoeur décrit comment la conscience est en grande partie façonnée par nos récits internes."
    },

    // question n°96 : 
    { 
        question: "Qui défend l'idée que 'la conscience est sociale' ?",
        answers: ["Marx", "Hegel", "Kant"], 
        correct: 0,
        explanation: "Marx soutient que la conscience est socialement déterminée par des rapports de classe et d'économie."
    },

    // question n°97 : 
    { 
        question: "Qui remet en question la rigidité de la conscience dans un monde complexe ?",
        answers: ["Deleuze", "Lacan", "Ricoeur"], 
        correct: 0,
        explanation: "Deleuze souligne que la conscience est fluide et se déploie dans divers contextes complexes."
    },

    // question n°98 : 
    { 
        question: "Qui a analysé la conscience à travers l'art et le rêve ?",
        answers: ["Freud", "Kant", "Sartre"], 
        correct: 0,
        explanation: "Freud explore les connexions entre la conscience, l'art et les rêves en tant que révélateurs de l'inconscient."
    },

    // question n°99 : 
    { 
        question: "Quel auteur distingue entre la conscience et la notion de bonheur ?",
        answers: ["Sartre", "Beauvoir", "Epicure"], 
        correct: 2,
        explanation: "Épicure défend une vision du bonheur qui pourrait ne pas toujours inclure une prise de conscience aigüe."
    },

    // question n°100 : 
    { 
        question: "Qui a associé la conscience à la notion de 'connaissance de soi' ?",
        answers: ["Socrate", "Rousseau", "Platon"], 
        correct: 0,
        explanation: "Socrate définit la connaissance de soi comme essentielle pour atteindre une vie vertueuse."
    },
];