const questions = [
    // question n°1 : 
    { 
        question: "Qui a dit : 'Le bonheur est le sens et le but de la vie' ?",
        answers: ["Aristote", "Kant", "Epicure"], 
        correct: 0,
        explanation: "Aristote voit le bonheur comme l'objectif ultime pour l'homme, faisant partie de sa vertu."
    },
    
    // question n°2 : 
    { 
        question: "Quel terme désigne la recherche du bonheur individuel selon la théorie utilitariste ?",
        answers: ["Hédonisme", "Eudémonisme", "Altruisme"], 
        correct: 0,
        explanation: "L'hédonisme met l'accent sur la recherche du plaisir et l'évitement de la souffrance."
    },

    // question n°3 : 
    { 
        question: "Qui a introduit l'idée que le bonheur est une expérience vécue d'équilibre ?",
        answers: ["Aristote", "Epicure", "Kant"], 
        correct: 1,
        explanation: "Epicure souligne que le bonheur provient d'un équilibre entre les plaisirs intellectuels et physiques."
    },

    // question n°4 : 
    { 
        question: "Pour qui le bonheur vient de la vertu et de l'éducation ?",
        answers: ["Socrate", "Aristote", "Hegel"], 
        correct: 1,
        explanation: "Aristote soutient que la vertu est essentielle pour atteindre le bonheur."
    },

    // question n°5 : 
    { 
        question: "Quel philosophe s'est concentré sur le bonheur comme état d'absence de douleur ?",
        answers: ["Epicure", "Sartre", "Nietzsche"], 
        correct: 0,
        explanation: "Epicure prône une vie sans douleurs pour parvenir à une satisfaction durable."
    },

    // question n°6 : 
    { 
        question: "Qui a déclaré que 'le bonheur est un état d'esprit' ?",
        answers: ["Dawkins", "Happiness Index", "Carnegie"], 
        correct: 2,
        explanation: "Carnegie évoque que le bonheur provient de notre attitude et perception face à la vie."
    },

    // question n°7 : 
    { 
        question: "Quel est l'un des principes de la 'psychologie positive' concernant le bonheur ?",
        answers: ["Il doit être mesuré", "Il peut être cultivé", "Il est uniquement inné"], 
        correct: 1,
        explanation: "La psychologie positive propose que le bonheur peut être cultivé par des pratiques et attitudes."
    },

    // question n°8 : 
    { 
        question: "Qui affirme que 'le bonheur est un côté de l'éthique' ?",
        answers: ["Kant", "Hegel", "Sartre"], 
        correct: 0,
        explanation: "Kant établit que la moralité est intrinsèquement liée à la quête du bonheur."
    },

    // question n°9 : 
    { 
        question: "Qui a conçu l'idée de 'l'utopie du bonheur' dans les sociétés ?",
        answers: ["Thomas More", "Platon", "Rousseau"], 
        correct: 1,
        explanation: "Platon évoque la construction de la société idéale où le bonheur est central pour tous."
    },

    // question n°10 : 
    { 
        question: "Qui a discuté du rapport entre la richesse et le bonheur ?",
        answers: ["Diderot", "Sénèque", "Smith"], 
        correct: 1,
        explanation: "Sénèque affirme que la richesse ne conduit pas nécessairement au bonheur."
    },

    // question n°11 : 
    { 
        question: "Quel est le rôle du 'bonheur éthique' dans la philosophie d'Aristote ?",
        answers: ["Dérive des plaisirs", "Achèvement de l'épanouissement", "Vivre sans douleur"], 
        correct: 1,
        explanation: "Pour Aristote, le bonheur éthique est lié à la réalisation de soi et du potentiel humain."
    },

    // question n°12 : 
    { 
        question: "Qui parle du 'bonheur comme conséquence de l'altruisme' ?",
        answers: ["Kant", "Hume", "Sartre"], 
        correct: 1,
        explanation: "David Hume soutient que le bonheur peut être trouvé dans l'altruisme et la compassion pour autrui."
    },

    // question n°13 : 
    { 
        question: "Qui a formulé que 'le bonheur est une quête d'authenticité' ?",
        answers: ["Heidegger", "Sartre", "Nietzsche"], 
        correct: 1,
        explanation: "Sartre discute du bonheur en lien avec l'authenticité et la liberté de choix."
    },

    // question n°14 : 
    { 
        question: "Qui relie le bonheur au 'bien-être psychologique' ?",
        answers: ["Aristote", "Maslow", "Freud"], 
        correct: 1,
        explanation: "Abraham Maslow développe l'idée que le bonheur est lié à la satisfaction des besoins psychologiques."
    },

    // question n°15 : 
    { 
        question: "Qui décrit le bonheur comme 'l'épanouissement personnel et la satisfaction des besoins émotionnels' ?",
        answers: ["Rogers", "Kant", "Socrate"], 
        correct: 0,
        explanation: "Carl Rogers met l'accent sur l'épanouissement personnel et émotionnel dans son approche du bonheur."
    },

    // question n°16 : 
    { 
        question: "Quel philosophe a introduit le concept de 'bonheur hédoniste' ?",
        answers: ["Epicure", "Platon", "Aristote"], 
        correct: 0,
        explanation: "Epicure défend le bonheur hédoniste, selon lequel le plaisir est au centre de l'épanouissement."
    },

    // question n°17 : 
    { 
        question: "Qui a analysé 'la psychologie du bonheur' dans le contexte moderne ?",
        answers: ["Myers", "Freud", "Kant"], 
        correct: 0,
        explanation: "David Myers explore les dynamiques psychologiques du bonheur dans la société contemporaine."
    },

    // question n°18 : 
    { 
        question: "Qui a abordé le 'bonheur altruiste' ?",
        answers: ["Aristote", "Buddha", "Nietzsche"], 
        correct: 1,
        explanation: "Buddha enseigne que le bonheur peut provenir de la compassion et de l'altruisme envers les autres."
    },

    // question n°19 : 
    { 
        question: "Qui soutient que le 'bonheur est l'absence de maladies' ?",
        answers: ["Aristote", "Epicure", "Mill"], 
        correct: 0,
        explanation: "Aristote voit le bonheur comme une condition de l'état de santé physique et mentale."
    },

    // question n°20 : 
    { 
        question: "Qui a décrit le bonheur comme 'un état d'âme'? ",
        answers: ["Kant", "Hegel", "Burke"], 
        correct: 2,
        explanation: "Edmund Burke évoque le bonheur en tant qu'état qui doit être cultivé par l'esprit."
    },

    // question n°21 : 
    { 
        question: "Quel auteur a défini le bonheur à travers la satisfaction des désirs ?",
        answers: ["Freud", "Epicure", "Mill"], 
        correct: 1,
        explanation: "Epicure considère le bonheur comme la satisfaction des désirs mais d'une manière équilibrée."
    },

    // question n°22 : 
    { 
        question: "Qui a discuté du rapport entre bonheur et amour dans la perspective existentielle ?",
        answers: ["Sartre", "Kierkegaard", "Nietzsche"], 
        correct: 0,
        explanation: "Jean-Paul Sartre explore l'idée que le bonheur est façonné par les relations interpersonnelles."
    },

    // question n°23 : 
    { 
        question: "Qui a écrit 'La simple joie' en commentant le bonheur ?",
        answers: ["Dewey", "Huxley", "Spinoza"], 
        correct: 2,
        explanation: "Spinoza aborde le bonheur en lien avec la joie, la raison et l'intellect."
    },

    // question n°24 : 
    { 
        question: "Qui affirme que le bonheur est atteint via la Délégation de soi ?",
        answers: ["Kant", "Sartre", "Nussbaum"], 
        correct: 2,
        explanation: "Martha Nussbaum discute de l'importance de la dignité humaine en lien avec le bonheur."
    },

    // question n°25 : 
    { 
        question: "Quel philosophe associe la spiritualité et le bonheur à travers une quête intérieure ?",
        answers: ["Thich Nhat Hanh", "Hume", "Adorno"], 
        correct: 0,
        explanation: "Thich Nhat Hanh enseigne que la méditation et la pleine conscience favorisent le bonheur intérieur."
    },

    // question n°26 : 
    { 
        question: "Qui a suggéré que le bonheur doit être mesuré par la 'satisfaction de vie' ?",
        answers: ["Kahneman", "Durkheim", "Adorno"], 
        correct: 0,
        explanation: "Daniel Kahneman propose que la satisfaction de vie est une mesure clé du bonheur."
    },

    // question n°27 : 
    { 
        question: "Qui parle de 'la conception du bonheur comme autonomie' ?",
        answers: ["Kant", "Rousseau", "Sartre"], 
        correct: 0,
        explanation: "Kant relie le bonheur à l'autonomie du choix moral et personnel de l'individu."
    },

    // question n°28 : 
    { 
        question: "Qui a introduit la notion de 'bonheur durable' ?",
        answers: ["Epicure", "Dewey", "Rachels"], 
        correct: 2,
        explanation: "James Rachels parle de la stabilité nécessaire du bonheur en tant qu'idéal durable."
    },

    // question n°29 : 
    { 
        question: "Quel concept relie bonheur et vertu dans le stoïcisme ?",
        answers: ["Eudémonisme", "Hédonisme", "Déterminisme"], 
        correct: 0,
        explanation: "L'eudémonisme lie le bonheur à la vertu comme la clé du bonheur durable."
    },

    // question n°30 : 
    { 
        question: "Quel philosophe souligne que l'éducation est un chemin vers le bonheur ?",
        answers: ["Platon", "Russell", "Aristote"], 
        correct: 1,
        explanation: "Bertrand Russell argumente que l'éducation est un essentiel pour la réalisation personnelle et le bonheur."
    },

    // question n°31 : 
    { 
        question: "Qui a dit : 'Le bonheur est dans le cœur et dans l'âme' ?",
        answers: ["Beauvoir", "Camus", "Hegel"], 
        correct: 1,
        explanation: "Albert Camus évoque la nécessité d'une introspection pour trouver le bonheur."
    },

    // question n°32 : 
    { 
        question: "Pour quel penseur le bonheur émerge de l'idée que 'l'angoisse sublime' est essentielle ?",
        answers: ["Sartre", "Kierkegaard", "Nietzsche"], 
        correct: 2,
        explanation: "Nietzsche soutient que le bonheur est renforcé par l'angoisse et le questionnement existential."
    },

    // question n°33 : 
    { 
        question: "Qui a étudié la relation entre bien-être et bonheur dans une perspective sociologique ?",
        answers: ["Veblen", "Bourdieu", "Ehrenberg"], 
        correct: 1,
        explanation: "Pierre Bourdieu examine comment le bonheur et la satisfaction évaluent la structure sociale."
    },

    // question n°34 : 
    { 
        question: "Qui soutient que le bonheur réside dans le 'vivre en harmonie' ?",
        answers: ["Confucius", "Aristote", "Epicure"], 
        correct: 0,
        explanation: "Confucius enseigne que vivre en harmonie avec les autres contribue au bonheur."
    },

    // question n°35 : 
    { 
        question: "Qui aborde le bonheur par l'art de la méditation ?",
        answers: ["Buddha", "Socrate", "Epicure"], 
        correct: 0,
        explanation: "Buddha enseigne que le bonheur et la paix intérieure se trouvent par la pratique de la méditation."
    },

    // question n°36 : 
    { 
        question: "Qui a introduit le concept de 'bonheur culturel' ?",
        answers: ["Kant", "Russell", "Weber"], 
        correct: 2,
        explanation: "Max Weber discute de l'impact de la culture sur notre compréhension du bonheur."
    },

    // question n°37 : 
    { 
        question: "Quel auteur relie l'hédonisme à la gestion des émotions ?",
        answers: ["Dewey", "Hume", "Frankl"], 
        correct: 2,
        explanation: "Viktor Frankl met en avant que la gestion des émotions joue un rôle essentiel dans la quête du bonheur."
    },

    // question n°38 : 
    { 
        question: "Qui soutient que 'le bonheur est une capacité enviable' ?",
        answers: ["Aristote", "Platon", "Adorno"], 
        correct: 0,
        explanation: "Aristote considère le bonheur comme une capacité qui nécessite sagesse et vertu."
    },

    // question n°39 : 
    { 
        question: "Qui explore le bonheur à travers le cadre de l'appréciation quotidienne ?",
        answers: ["Dewey", "Sartre", "Kant"], 
        correct: 0,
        explanation: "John Dewey argue que le bonheur émerge de l'appréciation des expériences quotidiennes."
    },

    // question n°40 : 
    { 
        question: "Qui a dit que le bonheur est une mesure de l'éthique éthique ?",
        answers: ["Kant", "Mill", "Aristote"], 
        correct: 1,
        explanation: "John Stuart Mill associe le bonheur à une évaluation morale de nos actions."
    },

    // question n°41 : 
    { 
        question: "Qui soutient que le bonheur dépend de l'imagination ?",
        answers: ["Nussbaum", "Nietzsche", "Dewey"], 
        correct: 0,
        explanation: "Martha Nussbaum dit que l'imagination joue un rôle capital dans la compréhension de notre bonheur."
    },

    // question n°42 : 
    { 
        question: "Quel mouvement philosophique considère le bonheur comme une auto-réalisation ?",
        answers: ["Existentialisme", "Rationalisme", "Hédonisme"], 
        correct: 0,
        explanation: "L'existentialisme place l'accent sur l'auto-réalisation comme clé du bonheur."
    },

    // question n°43 : 
    { 
        question: "Qui a écrit 'La Ferme des animaux' en discutant du bonheur et du pouvoir ?",
        answers: ["Huxley", "Orwell", "Camus"], 
        correct: 1,
        explanation: "George Orwell utilise 'La Ferme des animaux' pour évoquer les relations entre pouvoir et bonheur."
    },

    // question n°44 : 
    { 
        question: "Qui a exposé la nécessité de la 'communauté' pour atteindre le bonheur ?",
        answers: ["Bourdieu", "Tocqueville", "Aristote"], 
        correct: 2,
        explanation: "Aristote défend l'idée que le bonheur est également un produit de la vie communautaire."
    },

    // question n°45 : 
    { 
        question: "Qui aborde la relation entre bonheur et la quête de sens ?",
        answers: ["Adler", "Maslow", "Frankl"], 
        correct: 2,
        explanation: "Victor Frankl discute le bonheur comme résultant de la quête de meaning dans la vie."
    },

    // question n°46 : 
    { 
        question: "Qui soutient que le bonheur est un 'droit de l'homme' ?",
        answers: ["Rousseau", "Locke", "Benjamin"], 
        correct: 0,
        explanation: "Rousseau promet que le bonheur est une aspiration humaine légitime dans sa philosophie politique."
    },

    // question n°47 : 
    { 
        question: "Qui cite que le bonheur nécessite une autodiscipline ?",
        answers: ["Kierkegaard", "Kant", "Nietzsche"], 
        correct: 0,
        explanation: "Kierkegaard estime que le bonheur découle de l'autodiscipline et de l'engagement."
    },

    // question n°48 : 
    { 
        question: "Qui est célèbre pour sa maxime 'La joie est la plupart du temps un révélateur de l'amour'?",
        answers: ["Sartre", "Heidegger", "Hume"], 
        correct: 1,
        explanation: "Heidegger relie la joie à des expériences humaines enrichissantes centrées sur l'amour."
    },

    // question n°49 : 
    { 
        question: "Quel auteur aborde la notion de 'bonheur partagé' ?",
        answers: ["Dewey", "Pascal", "Ricoeur"], 
        correct: 0,
        explanation: "John Dewey met en avant l'importance des relations interpersonnelles dans le bonheur partagé."
    },

    // question n°50 : 
    { 
        question: "Quel concept explique le bonheur à travers la perception cognitive ?",
        answers: ["Psychologie positive", "Philosophie analytique", "Anthropologie"], 
        correct: 0,
        explanation: "La psychologie positive étudie le bonheur à travers des perspectives cognitives et émotionnelles."
    },

    // question n°51 : 
    { 
        question: "Qui a défini le bonheur en termes d'épanouissement personnel ?",
        answers: ["Dewey", "Sartre", "Aristote"], 
        correct: 0,
        explanation: "Dewey insiste sur l'épanouissement personnel comme fondement essentiel du bonheur émotionnel."
    },

    // question n°52 : 
    { 
        question: "Qui relie la nature à la notion de bonheur ?",
        answers: ["Wittgenstein", "Nietzsche", "John Muir"], 
        correct: 2,
        explanation: "John Muir plaide pour la connexion à la nature comme essentielle pour trouver le bonheur."
    },

    // question n°53 : 
    { 
        question: "Qui parle de 'bonheur égoïste' dans sa critique de l'Homo economicus ?",
        answers: ["Kant", "Foucault", "Marx"], 
        correct: 2,
        explanation: "Marx critique la vision économique de l'homme cherchant son bonheur égoïste par le capital."
    },

    // question n°54 : 
    { 
        question: "Qui évoque le 'bonheur collectif' en lien avec l'injustice sociale ?",
        answers: ["Aristote", "Foucault", "Benjamin"], 
        correct: 1,
        explanation: "Foucault examine comment les injustices sociales impactent le bonheur collectif d'une communauté."
    },

    // question n°55 : 
    { 
        question: "Quel parcours vers le bien-être résulte de la pleine conscience ?",
        answers: ["Stress", "Accroissement de bonheur", "Aliénation"], 
        correct: 1,
        explanation: "La pleine conscience est souvent une voie vers un bonheur durable et un bien-être accru."
    },

    // question n°56 : 
    { 
        question: "Qui a écrit : 'La recherche du bonheur est le meilleur projet de vie' ?",
        answers: ["Sartre", "Pascal", "Holbach"], 
        correct: 2,
        explanation: "Paul-Henri Holbach voit la recherche du bonheur comme un projet fondamental de la vie."
    },

    // question n°57 : 
    { 
        question: "Quel philosophe donne un traitement scientifique au bonheur ?",
        answers: ["Foucault", "Haidt", "Bourdieu"], 
        correct: 1,
        explanation: "Jonathan Haidt explore la psychologie et le bonheur à travers une analyse scientifique."
    },

    // question n°58 : 
    { 
        question: "Qui a défini le bonheur 'comme une fin en soi' ?",
        answers: ["Aristote", "Epicure", "Mill"], 
        correct: 0,
        explanation: "Aristote voit le bonheur comme le but ultime de l'existence humaine."
    },

    // question n°59 : 
    { 
        question: "Quel est le lien entre bonheur et nature humaine selon Rousseau ?",
        answers: ["L'homme est naturellement bon", "L'homme est naturellement mauvais", "L'homme a besoin d'éducation"], 
        correct: 0,
        explanation: "Rousseau soutient que l'homme est naturellement bon et que la société influence son bonheur."
    },

    // question n°60 : 
    { 
        question: "Qui a dit que 'la connaissance de soi est la clé du bonheur' ?",
        answers: ["Socrate", "Nietzsche", "Thoreau"], 
        correct: 0,
        explanation: "Socrate prône que la quête de soi-même est essentielle pour atteindre le bonheur."
    },

    // question n°61 : 
    { 
        question: "Qui associe la quête du bonheur à des choix éthiques ?",
        answers: ["Hegel", "Kant", "Sartre"], 
        correct: 1,
        explanation: "Kant établit que nos choix éthiques sont primordiaux pour le bonheur."
    },

    // question n°62 : 
    { 
        question: "Qui s'intéresse à la 'joie simple' comme une voie vers le bonheur ?",
        answers: ["Hume", "Baruch", "Thoreau"], 
        correct: 2,
        explanation: "Henry David Thoreau plaide pour voir la beauté dans les petites joies quotidiennnes."
    },

    // question n°63 : 
    { 
        question: "Quel lien explore le bonheur avec l'altruisme ?",
        answers: ["Hédonisme", "Égoïsme", "Altruisme"], 
        correct: 2,
        explanation: "L'altruisme est souvent lié à une voie vers un bonheur éprouvé par les individus."
    },

    // question n°64 : 
    { 
        question: "Qui associe le bonheur à la liberté de penser ?",
        answers: ["Kant", "Hegel", "Sartre"], 
        correct: 0,
        explanation: "Kant soutient que la liberté de penser est essentielle pour atteindre le bonheur."
    },

    // question n°65 : 
    { 
        question: "Qui a exploré l'importance des relations dans la quête du bonheur ?",
        answers: ["Bourdieu", "Sartre", "Schopenhauer"], 
        correct: 0,
        explanation: "Pierre Bourdieu étudie comment les relations sociales influencent notre bonheur."
    },

    // question n°66 : 
    { 
        question: "Qui a établi que 'la beauté est essentielle au bonheur' ?",
        answers: ["Platon", "Kant", "Rousseau"], 
        correct: 0,
        explanation: "Platon préconise que la beauté est nécessaire pour atteindre un état de bonheur."
    },

    // question n°67 : 
    { 
        question: "Qui relie le bonheur à la connaissance ?",
        answers: ["Socrate", "Nietzsche", "Kant"], 
        correct: 0,
        explanation: "Socrate soutient que seules la connaissance et la sagesse peuvent conduire à un bonheur significatif."
    },

    // question n°68 : 
    { 
        question: "Quel mouvement artistique souligne que le bonheur peut être trouvé dans la passion ?",
        answers: ["Romantisme", "Impressionnisme", "Surréalisme"], 
        correct: 0,
        explanation: "Le Romantisme célèbre la passion et les émotions comme terreau du bonheur."
    },

    // question n°69 : 
    { 
        question: "Qui suggère que la nature mentale joue un rôle dans le bonheur global ?",
        answers: ["James", "Hume", "Durkheim"], 
        correct: 0,
        explanation: "William James s'intéresse au rôle de la nature mentale sur le bonheur."
    },

    // question n°70 : 
    { 
        question: "Quel concept représente le bonheur durable dans le bouddhisme ?",
        answers: ["Nirvana", "Moksha", "Eudaimonia"], 
        correct: 0,
        explanation: "Le nirvana dans le bouddhisme représente l'état de bonheur ultime sans souffrances."
    },

    // question n°71 : 
    { 
        question: "Qui soutient que la compassion est essentielle pour le bonheur ?",
        answers: ["Buddha", "Karl Marx", "Nietzsche"], 
        correct: 0,
        explanation: "Buddha enseigne que la compassion envers les autres est essentielle pour notre propre bonheur."
    },

    // question n°72 : 
    { 
        question: "Qui a enseigné que le bonheur réside dans s'élever vers la sagesse ?",
        answers: ["Kant", "Aristote", "Socrate"], 
        correct: 1,
        explanation: "Aristote enseigne que le bonheur est lié à la sagesse et la vertu."
    },

    // question n°73 : 
    { 
        question: "Quel philosophe lie bonheur et liberté par le spectre du courage ?",
        answers: ["Camus", "Tocqueville", "Sartre"], 
        correct: 0,
        explanation: "Albert Camus associe le bonheur à la liberté de choisir et à la résistance face à l'absurde."
    },

    // question n°74 : 
    { 
        question: "Qui a dit que la 'paix intérieure' est essentielle pour le bonheur ?",
        answers: ["Socrate", "Heidegger", "Epictète"], 
        correct: 2,
        explanation: "Epictète dit que la paix intérieure est primordiale pour atteindre le bonheur."
    },

    // question n°75 : 
    { 
        question: "Quel concept relie le bonheur à l'accueil des émotions ?",
        answers: ["Altruisme", "Authenticité", "Égoïsme"], 
        correct: 1,
        explanation: "L'authenticité en lien avec le bonheur exige d'accueillir et d'accepter ses émotions."
    },

    // question n°76 : 
    { 
        question: "Qui explore la 'doctrine de l'équilibre' dans le bonheur ?",
        answers: ["Aristote", "Epicure", "Kant"], 
        correct: 0,
        explanation: "Aristote développe l'idée que l'équilibre entre le plaisir et la vertu mène au bonheur."
    },
    
    // question n°77 : 
    { 
        question: "Qui a dit que 'le chemin vers le bonheur se trouve dans l'amitié' ?",
        answers: ["Cicéron", "Aristote", "Epicure"], 
        correct: 1,
        explanation: "Aristote considère l'amitié comme l'une des fondations du bonheur humain."
    },

    // question n°78 : 
    { 
        question: "Que dit Hegel concernant le bonheur et l'esprit ?",
        answers: ["L'esprit est vain", "Le bonheur réside dans l'esprit libre", "L'esprit est un obstacle"], 
        correct: 1,
        explanation: "Hegel défend l'idée que seul un esprit libre peut atteindre le bonheur authentique."
    },

    // question n°79 : 
    { 
        question: "Qui a fait valoir que 'les petites choses de la vie peuvent conduire au bonheur' ?",
        answers: ["Dewey", "Hume", "Frankl"], 
        correct: 0,
        explanation: "John Dewey souligne l'importance des simples plaisirs quotidiens pour une vie heureuse."
    },

    // question n°80 : 
    { 
        question: "Quel auteur aborde la 'relation entre bonheur et liberté' ?",
        answers: ["Kant", "Harrison", "Beauvoir"], 
        correct: 0,
        explanation: "Kant développe le lien entre la liberté de choix moral et l'atteinte du bonheur."
    },

    // question n°81 : 
    { 
        question: "Pour qui le bonheur est un choix ?",
        answers: ["Sartre", "Tolstoï", "Marx"], 
        correct: 0,
        explanation: "Jean-Paul Sartre affirme que le bonheur est une responsabilité et un choix conscient."
    },

    // question n°82 : 
    { 
        question: "Qui a discuté du 'bonheur partagé' en lien avec la communauté ?",
        answers: ["Aristote", "Sartre", "Diderot"], 
        correct: 0,
        explanation: "Aristote plaide pour le bonheur collectif comme essentiel pour la société."
    },

    // question n°83 : 
    { 
        question: "Quant à Spinoza, quel est le lien entre bonheur et compréhension ?",
        answers: ["Le bonheur est la compréhension", "La compréhension mène au bonheur", "Le bonheur déforme la réalité"], 
        correct: 1,
        explanation: "Spinoza établit que la connaissance et la compréhension mènent à un vrai bonheur."
    },

    // question n°84 : 
    { 
        question: "Qui a dit que 'le bonheur est lié à la compassion' ?",
        answers: ["Hume", "Buddha", "Epicure"], 
        correct: 1,
        explanation: "Buddha enseigne que la compassion vers les autres peut enrichir notre propre bonheur."
    },
    
    // question n°85 : 
    { 
        question: "Quel est le lien entre bonheur et créativité selon certains artistes ?",
        answers: ["Le bonheur inspire la créativité", "La créativité épuise le bonheur", "Il n'y a pas de lien"], 
        correct: 0,
        explanation: "Pour certains artistes, le bonheur stimule la créativité et la joie de créer."
    },
    
    // question n°86 : 
    { 
        question: "Quel est le principal thème du 'bonheur interpersonnel' ?",
        answers: ["Amis", "Communauté", "Voyage"], 
        correct: 1,
        explanation: "Le bonheur interpersonnel met l'accent sur la communauté et l'interaction avec les autres."
    },

    // question n°87 : 
    { 
        question: "Qui énonce que le 'bonheur est une intention' ?",
        answers: ["Beauvoir", "Sartre", "Kant"], 
        correct: 1,
        explanation: "Sartre souligne que le bonheur découle de l'intention et du choix authentique."
    },

    // question n°88 : 
    { 
        question: "Qui a défini la 'foi au bonheur' comme condition de bien-être ?",
        answers: ["Nietzsche", "Platon", "Cicéron"], 
        correct: 2,
        explanation: "Cicéron parle de la foi au bonheur comme d'une nécessité pour une vie réalisée."
    },

    // question n°89 : 
    { 
        question: "Quel est le lieu d'exploration entre bonheur et sagesse selon Epicure ?",
        answers: ["Domaine de la connaissance", "Domaine de la douceur", "Domaine de l'économie"], 
        correct: 1,
        explanation: "Epicure insiste sur la sagesse comme une voie vers un bonheur durable par le retrait des désirs."
    },

    // question n°90 : 
    { 
        question: "Qui a suggéré que 'le bonheur peut être atteint par l'éducation' ?",
        answers: ["Locke", "Kant", "Rousseau"], 
        correct: 2,
        explanation: "Rousseau soutient que l'éducation est une clé essentielle pour mener à une vie heureuse."
    },

    // question n°91 : 
    { 
        question: "Qui a proposé que la 'nature humaine' est inherently good pour le bonheur ?",
        answers: ["Augustine", "Rousseau", "Kant"], 
        correct: 1,
        explanation: "Rousseau croyait que l'homme est naturellement bon, même si influencé par la société."
    },

    // question n°92 : 
    { 
        question: "Quel auteur est célèbre pour sa réflexion sur le 'bonheur d'être' ?",
        answers: ["Sartre", "Heidegger", "Cicéron"], 
        correct: 1,
        explanation: "Heidegger se concentre sur l'existence et le bonheur en tant qu'état d'être."
    },

    // question n°93 : 
    { 
        question: "Qui a écrit que 'le bonheur est inéluctablement lié à l'amour' ?",
        answers: ["Sophocle", "Sartre", "Kierkegaard"], 
        correct: 2,
        explanation: "Kierkegaard insiste sur la relation entre l'amour, l'engagement et le bonheur."
    },

    // question n°94 : 
    { 
        question: "Qui a examiné les liens entre économie et bonheur dans la société moderne ?",
        answers: ["Bourdieu", "Marx", "Dewey"], 
        correct: 0,
        explanation: "Pierre Bourdieu analyse comment les rapports de pouvoir influencent le bonheur en lien à l'économie." 
    },

    // question n°95 : 
    { 
        question: "Selon Platon, où se trouve le vrai bonheur ?",
        answers: ["La connaissance", "Le paysage", "La richesse"], 
        correct: 0,
        explanation: "Platon argue que le bonheur survient par la quête de la connaissance et de la vérité."
    },

    // question n°96 : 
    { 
        question: "Quelle valeur encouragée par le bonheur est au cœur de l'Éthique Aristotélicienne ?",
        answers: ["La vie contemplative", "La richesse", "L'influence"], 
        correct: 0,
        explanation: "La philosophie d'Aristote souligne l'importance de la vie contemplative pour atteindre le bonheur."
    },
    
    // question n°97 : 
    { 
        question: "Qui parle du bonheur en tant que 'sérénité intérieure' ?",
        answers: ["Thoreau", "Socrate", "Epicure"], 
        correct: 1,
        explanation: "Socrate évoque la sérénité intérieure comme état essentiel pour trouver le bonheur."
    },

    // question n°98 : 
    { 
        question: "Qui a écrit sur la 'moralité' comme voie vers le bonheur ?",
        answers: ["Kant", "Durkheim", "Foucault"], 
        correct: 0,
        explanation: "Kant à cette notion du lien entre moralité, action et bonheur personnel."
    },

    // question n°99 : 
    { 
        question: "Quel concept relie l'optimisme et le bonheur ?",
        answers: ["Bien-être", "Altruisme", "Hédonisme"], 
        correct: 0,
        explanation: "L'optimisme est souvent corrélé positivement avec la perception du bonheur."
    },

    // question n°100 : 
    { 
        question: "Qui a dit que 'le bonheur est une responsabilité personnelle' ?",
        answers: ["Sartre", "Kant", "Arendt"], 
        correct: 0,
        explanation: "Sartre insiste sur l'idée que chaque individu détient une responsabilité pour son propre bonheur."
    },
];