const questions = [
    // question n°1 : 
    { 
        question: "Qu'est-ce que la vérité selon Aristote?",
        answers: ["La vérité est l'adéquation de l'esprit à la réalité", "La vérité est subjective", "La vérité est une convention sociale"], 
        correct: 0, 
        explanation: "Aristote définit la vérité comme l'accord entre la pensée et la réalité." 
    },
    // question n°2 : 
    { 
        question: "Qui a dit 'La vérité est ailleurs'?",
        answers: ["Descartes", "Socrate", "X-Files"], 
        correct: 2, 
        explanation: "'La vérité est ailleurs' est une phrase emblématique de la série X-Files." 
    },
    // question n°3 : 
    { 
        question: "Laquelle de ces philosophies aborde la vérité comme une construction sociale?",
        answers: ["Le réalisme", "Le constructivisme", "Le positivisme"], 
        correct: 1, 
        explanation: "Le constructivisme soutient que la vérité est en partie construite par les interactions sociales." 
    },
    // question n°4 : 
    { 
        question: "Quel philosophe a lié la vérité au pouvoir?",
        answers: ["Nietzsche", "Kant", "Hegel"], 
        correct: 0, 
        explanation: "Nietzsche a affirmé que la notion de vérité est liée à des enjeux de pouvoir." 
    },
    // question n°5 : 
    { 
        question: "Selon Kant, la vérité est:",
        answers: ["Une vérité absolue", "Une construction humaine limitée", "Universelle et objective"], 
        correct: 1, 
        explanation: "Kant soutenait que notre accès à la vérité est limité par notre expérience humaine." 
    },
    // question n°6 : 
    { 
        question: "Quel terme désigne une approche pragmatique de la vérité?",
        answers: ["L'essentialisme", "Le pragmatisme", "L'épicurisme"], 
        correct: 1, 
        explanation: "Le pragmatisme considère que la vérité est ce qui fonctionne dans la pratique." 
    },
    // question n°7 : 
    { 
        question: "Quelle doctrine soutient que la vérité est relative aux cultures?",
        answers: ["L'universalisme", "Le relativisme", "Le dogmatisme"], 
        correct: 1, 
        explanation: "Le relativisme affirme que chaque culture a ses propres vérités." 
    },
    // question n°8 : 
    { 
        question: "La 'théorie de la correspondance de la vérité' affirme que:",
        answers: ["La vérité est une illusion", "Les déclarations sont vraies si elles correspondent à des faits", "Chaque vérité est personnelle"], 
        correct: 1, 
        explanation: "Cette théorie stipule qu'une proposition est vraie si elle correspond à l'état des choses dans le monde." 
    },
    // question n°9 : 
    { 
        question: "Pourquoi la définition de la vérité selon Hegel est-elle dialectique?",
        answers: ["Parce qu'elle évolue avec le temps", "Parce qu'elle combine opposés et contradictions", "Parce qu'elle reste statique"], 
        correct: 1, 
        explanation: "Hegel soutient que la vérité émerge de la synthèse entre deux oppositions." 
    },
    // question n°10 : 
    { 
        question: "Quel concept oppose la vérité scientifique à la vérité religieuse?",
        answers: ["La vérification", "La révélation", "Le cynisme"], 
        correct: 0, 
        explanation: "La vérification est au cœur de l'approche scientifique." 
    },
    // question n°11 : 
    { 
        question: "Quelle est la principale objection au relativisme?",
        answers: ["Il ne tient pas compte des faits", "Il est trop dogmatique", "Il mène à l'anarchie"], 
        correct: 0,
        explanation: "L'objection est que si toutes les vérités sont relatives, alors même l'affirmation que le relativisme est vrai devient problématique." 
    },
    // question n°12 : 
    { 
        question: "Dans quel contexte Platon parle-t-il de la vérité?",
        answers: ["Dans le 'Phédon'", "Dans l'allégorie de la caverne", "Dans la 'République'"], 
        correct: 1, 
        explanation: "L'allégorie de la caverne illustre la différence entre l'illusion et la vérité." 
    },
    // question n°13 : 
    { 
        question: "Quels sont les 'trois critères de la vérité' selon l'épistémologie moderne?",
        answers: ["Connaissance, croyance, justification", "Fait, fiction, interprétation", "Vérité, mensonge, acceptation"], 
        correct: 0, 
        explanation: "Ces critères permettent de valider une affirmation comme une vérité." 
    },
    // question n°14 : 
    { 
        question: "Quel philosophe affirme que la vérité est ce qui est utile?",
        answers: ["James", "Peirce", "Dewey"], 
        correct: 0, 
        explanation: "William James est l'un des principaux défenseurs du pragmatisme." 
    },
    // question n°15 : 
    { 
        question: "Quelle est la 'théorie de la cohérence de la vérité'?",
        answers: ["Les vérités sont des déclarations en accord entre elles", "La vérité est une question de consensus", "Les vérités évoluent au fil du temps"], 
        correct: 0, 
        explanation: "Cette théorie soutient que la vérité est un ensemble cohérent d'affirmations." 
    },
    // question n°16 : 
    { 
        question: "Laquelle des personnalités suivantes était sceptique quant à la possibilité de connaître la vérité?",
        answers: ["Socrate", "Pyrrhon", "Platon"], 
        correct: 1, 
        explanation: "Pyrrhon est connu pour son scepticisme radical." 
    },
    // question n°17 : 
    { 
        question: "La vérité objective est souvent opposée à:",
        answers: ["La vérité subjective", "La vérité abstraite", "La vérité technique"], 
        correct: 0, 
        explanation: "La vérité objective est conçue comme universelle, tandis que la vérité subjective dépend de l'individu." 
    },
    // question n°18 : 
    { 
        question: "Quel type de vérité est souvent associé à la foi?",
        answers: ["La vérité empirique", "La vérité révélée", "La vérité scientifique"], 
        correct: 1, 
        explanation: "La vérité révélée est celle qui est acceptée sur la base de la foi plutôt que d'un raisonnement empirique." 
    },
    // question n°19 : 
    { 
        question: "Le terme 'vérité programmée' évoque:",
        answers: ["Une vérité universelle", "Des vérités construites par les algorithmes", "Une vérité politique"], 
        correct: 1, 
        explanation: "Cela fait référence à l'idée que les algorithmes peuvent déterminer ce qui est considéré comme vrai." 
    },
    // question n°20 : 
    { 
        question: "Dans le contexte philosophique, le cynisme remet souvent en question:",
        answers: ["Les vérités établies", "L'optimisme", "Le réalisme"], 
        correct: 0, 
        explanation: "Le cynisme critique souvent les idées communément acceptées comme vérités." 
    },
    // question n°21 : 
    { 
        question: "Pourquoi la définition de la vérité est-elle importante en éthique?",
        answers: ["Elle ne l'est pas", "Elle aide à établir des lois", "Elle guide les actions morales"], 
        correct: 2, 
        explanation: "La vérité est essentielle pour fonder des normes éthiques." 
    },
    // question n°22 : 
    { 
        question: "Quel philosophe a déclaré que le doute est le premier pas vers la vérité?",
        answers: ["Hume", "Descartes", "Socrate"], 
        correct: 1, 
        explanation: "Descartes a utilisé le doute méthodique pour atteindre des vérités indubitables." 
    },
    // question n°23 : 
    { 
        question: "Laquelle des affirmations suivantes correspond à la notion de vérité pragmatique?",
        answers: ["La vérité est un consensus", "La vérité est ce qui fonctionne dans la pratique", "La vérité est absolue"], 
        correct: 1, 
        explanation: "La vérité pragmatique est définie par sa utilité." 
    },
    // question n°24 : 
    { 
        question: "Le relativisme peut être associé à quel type de discours?",
        answers: ["Discours objectif", "Discours absolu", "Discours culturel"], 
        correct: 2, 
        explanation: "Le relativisme insiste sur les différences culturelles dans la compréhension de la vérité." 
    },
    // question n°25 : 
    { 
        question: "La vérité peut-elle être influencée par des émotions humaines?",
        answers: ["Oui", "Non", "Cela dépend"], 
        correct: 0, 
        explanation: "Les émotions peuvent fausser notre perception de la vérité." 
    },
    // question n°26 : 
    { 
        question: "Les vérités scientifiques sont basées sur:",
        answers: ["L'expérience et l'observation", "La tradition", "Les croyances personnelles"], 
        correct: 0, 
        explanation: "La science repose sur l'expérimentation et l'observation." 
    },
    // question n°27 : 
    { 
        question: "La vérité de l'existence d'un monde extérieur est souvent considérée comme:",
        answers: ["Metaphysique", "Empirique", "Philosophique"], 
        correct: 1, 
        explanation: "Un point de vue empirique postule que la vérité existe à travers l'expérience sensorielle." 
    },
    // question n°28 : 
    { 
        question: "Quel mouvement philosophique rejette la notion de vérité universelle?",
        answers: ["Le matérialisme", "Le nihilisme", "Le positivisme"], 
        correct: 1, 
        explanation: "Le nihilisme nie l'existence de vérités objectives ou universelles." 
    },
    // question n°29 : 
    { 
        question: "Quel est l'impact des médias sur la notion de vérité aujourd'hui?",
        answers: ["Ils renforcent les vérités établies", "Ils créent des vérités alternatives", "Ils n'ont pas d'impact"], 
        correct: 1, 
        explanation: "Les fake news et la désinformation remettent en question les notions traditionnelles de vérité." 
    },
    // question n°30 : 
    { 
        question: "Laquelle des théories suivantes soutient que toutes les croyances sont vraies?",
        answers: ["Le relativisme", "L'instrumentalisme", "Le réalisme"], 
        correct: 0, 
        explanation: "Le relativisme soutient que ce qui est vrai dépend du contexte culturel et individuel." 
    },
    // question n°31 : 
    { 
        question: "La notion de 'vérité cachée' est souvent associée à:",
        answers: ["Le non-dit", "La manipulation", "La perception personnelle"], 
        correct: 1, 
        explanation: "Elle désigne une vérité qui existe mais qui est dissimulée intentionnellement." 
    },
    // question n°32 : 
    { 
        question: "Qui a énoncé le célèbre dicton 'La vérité se trouve souvent au-delà des apparences'?",
        answers: ["Socrate", "Nietzsche", "Platon"], 
        correct: 2, 
        explanation: "Platon souligne l'importance d'aller au-delà des illusions dans ses dialogues." 
    },
    // question n°33 : 
    { 
        question: "La vérité peut-elle être affaiblie par le langage?",
        answers: ["Oui", "Non", "Cela dépend"], 
        correct: 0, 
        explanation: "Le langage peut altérer notre compréhension et notre perception de la vérité." 
    },
    // question n°34 : 
    { 
        question: "Quel est l'objectif principal de la recherche de la vérité en philosophie?",
        answers: ["Comprendre la réalité", "Développer des opinions personnelles", "Faire des expériences scientifiques"], 
        correct: 0, 
        explanation: "La philosophie s'efforce de comprendre et d'expliquer la nature de la réalité." 
    },
    // question n°35 : 
    { 
        question: "La vérité et la justice sont souvent vues comme:",
        answers: ["Indépendantes", "Interconnectées", "Rivalisées"], 
        correct: 1, 
        explanation: "La vérité est souvent nécessaire pour établir la justice." 
    },
    // question n°36 : 
    { 
        question: "Le 'savoir' est souvent considéré comme interchangeable avec:",
        answers: ["La croyance", "La vérité", "L'illusion"], 
        correct: 1, 
        explanation: "Le savoir en philosophie inclut des notions de vérité." 
    },
    // question n°37 : 
    { 
        question: "Qui a dit: 'La vérité est la première victime de la guerre'?",
        answers: ["Hemingway", "Platon", "Gustave Le Bon"], 
        correct: 0, 
        explanation: "Cette citation illustre comment les conflits peuvent altérer la perception de la vérité." 
    },
    // question n°38 : 
    { 
        question: "Qu'est-ce que l'assertion 'toute vérité est subjective' implique?",
        answers: ["Il n'y a pas de vérités universelles", "La vérité dépend de l'individu", "Aucune des réponses précédentes"], 
        correct: 1, 
        explanation: "Cette affirmation suppose que la vérité varie d'une personne à l'autre." 
    },
    // question n°39 : 
    { 
        question: "Comment les faux récits influencent-ils notre perception de la vérité?",
        answers: ["Ils la renforcent", "Ils la déforment", "Ils ne l'affectent pas"], 
        correct: 1, 
        explanation: "Les récits trompeurs peuvent influencer de manière significative notre compréhension de la vérité." 
    },
    // question n°40 : 
    { 
        question: "Qui a écrit 'La vérité sort de la bouche des fous'?",
        answers: ["Rabelais", "Voltaire", "Sartre"], 
        correct: 0, 
        explanation: "Cette citation met en évidence que parfois, la vérité émerge des sources inattendues." 
    },
    // question n°41 : 
    { 
        question: "Quel concept philosophique s'oppose à l’idée que la vérité est une question de croyance personnelle?",
        answers: ["L'objectivisme", "Le subjectivisme", "Le relativisme"], 
        correct: 0, 
        explanation: "L'objectivisme soutient que la vérité est indépendante des croyances individuelles." 
    },
    // question n°42 : 
    { 
        question: "Laquelle de ces affirmations est emblématique du positivisme?",
        answers: ["La vérité peut être connue par la raison", "La vérité est une illusion", "La vérité est une question de perception"], 
        correct: 0, 
        explanation: "Le positivisme soutient que la vérité peut être comprise par des méthodes scientifiques." 
    },
    // question n°43 : 
    { 
        question: "Quel est l'effet de la désinformation sur la perception de la vérité?",
        answers: ["Elle clarifie", "Elle complique", "Elle n'a pas d'effet"], 
        correct: 1, 
        explanation: "La désinformation crée de la confusion autour de ce qui est vrai." 
    },
    // question n°44 : 
    { 
        question: "Laquelle de ces théories ne considère pas la vérité comme objective?",
        answers: ["L'objectivisme", "Le constructivisme", "Le réalisme"], 
        correct: 1, 
        explanation: "Le constructivisme soutient que la vérité est construite socialement, et non objective." 
    },
    // question n°45 : 
    { 
        question: "En éthique, à quoi se réfère la 'vérité des intentions'?",
        answers: ["À l'honnêteté", "À l'intégrité", "À l'authenticité"], 
        correct: 0, 
        explanation: "La vérité des intentions implique d'être sincère dans ses croyances et ses actions." 
    },
    // question n°46 : 
    { 
        question: "Quel est l'objectif principal de la science par rapport à la vérité?",
        answers: ["Révéler des vérités absolues", "Découvrir des vérités empiriques", "Établir des croyances populaires"], 
        correct: 1, 
        explanation: "La science cherche à découvrir des vérités basées sur des observations vérifiables." 
    },
    // question n°47 : 
    { 
        question: "Quel est le but de la philosophie selon Socrate?",
        answers: ["Acquérir des connaissances", "Atteindre la vérité", "Développer des techniques"], 
        correct: 1, 
        explanation: "Socrate a consacré sa vie à rechercher la vérité par le dialogue et la dialectique." 
    },
    // question n°48 : 
    { 
        question: "Laquelle des affirmations évoque le mieux le scepticisme?",
        answers: ["Tout doit être remis en question", "Il existe des vérités absolues", "La foi est la clé de la vérité"], 
        correct: 0, 
        explanation: "Le scepticisme encourage un examen minutieux des croyances et des vérités assumées." 
    },
    // question n°49 : 
    { 
        question: "Quel philosophe a déclaré que la vérité est une 'révélation du divin'?",
        answers: ["Socrate", "Augustin", "Kant"], 
        correct: 1, 
        explanation: "Saint Augustin a souvent discuté de la vérité en lien avec la foi et la révélation divine." 
    },
    // question n°50 : 
    { 
        question: "Une 'vérité auto-évidente' est considérée comme:",
        answers: ["Une vérité qui nécessite une preuve", "Une vérité acceptée sans besoin de démonstration", "Une vérité facilement discutable"], 
        correct: 1, 
        explanation: "Une vérité auto-évidente est celle qui est acceptée intuitivement." 
    },
    // question n°51 : 
    { 
        question: "Quel effet peut avoir la recherche de la vérité sur les relations humaines?",
        answers: ["Elle les renforce", "Elle les complique", "Elle les fragilise"], 
        correct: 1, 
        explanation: "La recherche de la vérité peut parfois créer des conflits et des tensions." 
    },
    // question n°52 : 
    { 
        question: "La notion de 'vérité historique' se base sur:",
        answers: ["Les récits littéraires", "Les preuves archéologiques", "Les témoignages subjectifs"], 
        correct: 1, 
        explanation: "La vérité historique repose sur des données et preuves tangibles." 
    },
    // question n°53 : 
    { 
        question: "La déclaration 'la vérité est relative' implique que:",
        answers: ["Il n'y a pas de vérités universelles", "Les vérités sont toutes égales", "Les vérités changent selon le contexte"], 
        correct: 2, 
        explanation: "Cela signifie que la vérité peut varier en fonction des circonstances." 
    },
    // question n°54 : 
    { 
        question: "Le défi de la 'fausse vérité' dans nos sociétés modernes provient principalement de:",
        answers: ["La technologie", "L'éducation", "La culture"], 
        correct: 0, 
        explanation: "Les médias numériques et les réseaux sociaux permettent la diffusion rapide de fausses informations." 
    },
    // question n°55 : 
    { 
        question: "Selon certains philosophes, la quête de vérité est:",
        answers: ["Une futilité", "L'essence de l'humanité", "Un désir authentique mais dangereux"], 
        correct: 1, 
        explanation: "Cela est souvent considéré comme une caractéristique fondamentale de la condition humaine." 
    },
    // question n°56 : 
    { 
        question: "Les vérités scientifiques peuvent être remises en question par:",
        answers: ["De nouvelles découvertes", "Le consensus populaire", "Les croyances personnelles"], 
        correct: 0, 
        explanation: "La science évolue en fonction de nouvelles découvertes et d'évidences." 
    },
    // question n°57 : 
    { 
        question: "Quel est le rôle de la 'scientificité' dans la recherche de la vérité?",
        answers: ["Conférer une valeur objective", "Participer à la subjectivité", "Rester indifférent à la vérité"], 
        correct: 0, 
        explanation: "La scientificité apporte rigueur et objectivité à la recherche de la vérité." 
    },
    // question n°58 : 
    { 
        question: "Quel concept s'oppose à la vérité scientifique en matière de croyance?",
        answers: ["L'irrationnel", "Le mysticisme", "Le réalisme"], 
        correct: 1, 
        explanation: "Le mysticisme repose sur des vérités spirituelles dépassant la raison." 
    },
    // question n°59 : 
    { 
        question: "Le cadre 'démocratique' est associé à:",
        answers: ["L'égalité des idées", "La vérité absolue", "L'autoritarisme"], 
        correct: 0, 
        explanation: "Dans une démocratie, la vérité est enrichie par la diversité d'opinions." 
    },
    // question n°60 : 
    { 
        question: "Quelle est la principale critique du rationalisme?",
        answers: ["Il rejette l'émotion", "Il est trop subjectif", "Il n'apporte pas assez de certitude"], 
        correct: 0, 
        explanation: "Les critiques soutiennent que le rationalisme néglige l'impact des émotions sur la vérité." 
    },
    // question n°61 : 
    { 
        question: "Laquelle des affirmations suivantes constitue une vérité sociale?",
        answers: ["La terre tourne autour du soleil", "Les coutumes d'une culture", "Les valeurs morales universelles"], 
        correct: 1, 
        explanation: "Les vérités sociales varient d'une culture à l'autre." 
    },
    // question n°62 : 
    { 
        question: "Le concept de vérité peut également être vu comme:",
        answers: ["Un processus", "Un produit final", "Une illusion"], 
        correct: 0, 
        explanation: "La vérité peut être perçue comme un processus évolutif plutôt qu'un état statique." 
    },
    // question n°63 : 
    { 
        question: "Comment le langage influe-t-il sur la vérité?",
        answers: ["Il la fausse", "Il la clarifie", "Il n'a aucun impact"], 
        correct: 0, 
        explanation: "Le langage peut renforcer ou alter une perception de la vérité." 
    },
    // question n°64 : 
    { 
        question: "Quel philosophe a fortement influencé le sujet de la vérité à travers ses dialogues?",
        answers: ["Platon", "Descartes", "Hume"], 
        correct: 0, 
        explanation: "Platon a beaucoup écrit sur la vérité à travers ses dialogues, notamment dans 'La République'." 
    },
    // question n°65 : 
    { 
        question: "Le 'non-dit' est souvent vu comme:",
        answers: ["Une vérité cachée", "Une vérité absolue", "Une opinion"], 
        correct: 0, 
        explanation: "Le non-dit peut souvent renfermer des vérités importantes qui ne sont pas exprimées." 
    },
    // question n°66 : 
    { 
        question: "Quel mouvement favorise l'idée que la vérité se construit par consensus?", 
        answers: ["Le rationalisme", "Le constructivisme", "Le réalisme"], 
        correct: 1, 
        explanation: "Le constructivisme souligne que la vérité émerge des interactions sociales." 
    },
    // question n°67 : 
    { 
        question: "La conception de la vérité comme 'utilité' est principalement associée à quel philosophe?",
        answers: ["Kant", "Peirce", "Mill"], 
        correct: 2, 
        explanation: "John Stuart Mill a lié utilité et vérité dans le cadre du pragmatisme." 
    },
    // question n°68 : 
    { 
        question: "Comment les dogmes religieux peuvent-ils affecter la perception de la vérité?",
        answers: ["En l'élargissant", "En la restreignant", "En l'ignorant"], 
        correct: 1, 
        explanation: "Les dogmes peuvent restreindre l'acceptation de nouvelles voix de vérité." 
    },
    // question n°69 : 
    { 
        question: "Qu'est-ce que le 'paradoxe de la vérité'?",
        answers: ["Un manque de consensus", "La vérité peut être multiple", "Une question de perspective"], 
        correct: 0, 
        explanation: "Le paradoxe de la vérité évoque les contradictions qui peuvent surgir autour de son acceptation." 
    },
    // question n°70 : 
    { 
        question: "Dans le cadre de Nietzsche, la vérité est souvent considérée comme:",
        answers: ["Une construction humaine", "Un observateur fidèle de la réalité", "Une illusion illusoire"], 
        correct: 0, 
        explanation: "Nietzsche a mis en avant que la vérité est façonnée par l'expérience humaine." 
    },
    // question n°71 : 
    { 
        question: "Ce qui est souvent sous-estimé dans les discussions sur la vérité est:",
        answers: ["Les émotions", "La logique", "La tradition"], 
        correct: 0, 
        explanation: "Les émotions jouent un rôle fondamental dans notre compréhension de la vérité." 
    },
    // question n°72 : 
    { 
        question: "Qu'est-ce que la 'fausse conscience'?",
        answers: ["Une illusion de vérité", "Un énoncé factuel", "Une acceptation des règles sociales"], 
        correct: 0, 
        explanation: "La fausse conscience désigne une perception déformée de la réalité." 
    },
    // question n°73 : 
    { 
        question: "Quelle idée sociologique est liée à la notion de vérité?",
        answers: ["La désillusion", "Le réalisme", "Le constructivisme social"], 
        correct: 2, 
        explanation: "Le constructivisme social souligne à quel point notre compréhension de la vérité est modelée par nos interactions sociales." 
    },
    // question n°74 : 
    { 
        question: "Le libre arbitre est souvent discuté en lien avec:",
        answers: ["L'illusion", "La vérité", "Le contrôle"], 
        correct: 1, 
        explanation: "La notion de libre arbitre pose des questions sur la vérité de nos choix." 
    },
    // question n°75 : 
    { 
        question: "Quel auteur a déclaré: 'Rien n'est vrai, tout est permis'?",
        answers: ["Kant", "Khayyam", "Nitzsche"], 
        correct: 2, 
        explanation: "Cette phrase évoque le cynisme envers la vérité absolue." 
    },
    // question n°76 : 
    { 
        question: "La 'véracité' est souvent associée à:",
        answers: ["La vérité objective", "La réalité émotionnelle", "Le mensonge"], 
        correct: 1, 
        explanation: "La véracité engage l'intégrité des émotions ressenties et exprimées." 
    },
    // question n°77 : 
    { 
        question: "La vérité peut-elle exister sans témoins?",
        answers: ["Non, c'est impossible", "Oui, si elle est objectif", "Oui, c'est une question de perception"], 
        correct: 2, 
        explanation: "La vérité peut exister indépendamment de nos perceptions individuelles." 
    },
    // question n°78 : 
    { 
        question: "Le 'théoricisme' se réfère à:",
        answers: ["Un systématisme de la vérité", "Une dépendance au sujet", "Une notion d'harmonie"], 
        correct: 0, 
        explanation: "Le théoricisme met l'accent sur une compréhension systématique de la vérité." 
    },
    // question n°79 : 
    { 
        question: "Quel problème discute l'idée selon laquelle 'la vérité dépend de ceux qui la disent'?",
        answers: ["La relativité", "Le dogme", "Le cynisme"], 
        correct: 0, 
        explanation: "Cette perspective suggère que la vérité varie en fonction du statut de l'émetteur." 
    },
    // question n°80 : 
    { 
        question: "Quel concept hérité de Descartes est lié à la recherche de la vérité?",
        answers: ["Cogito, ergo sum", "L'engagement", "Le relativisme"], 
        correct: 0, 
        explanation: "'Cogito, ergo sum' implique que penser est la preuve de l'existence et de la vraie réalité." 
    },
    // question n°81 : 
    { 
        question: "L'acceptation de différentes vérités culturelles peut promouvoir:",
        answers: ["Le choc des cultures", "Le regard critique", "La tolérance et le dialogue"], 
        correct: 2, 
        explanation: "Reconnaître différentes vérités peut mener à un respect mutuel et à un échange enrichissant." 
    },
    // question n°82 : 
    { 
        question: "En sociologie, la 'construction de la réalité' se réfère à:",
        answers: ["La matérialité de la vérité", "L'interaction humaine", "La manipulation des vérités"], 
        correct: 1, 
        explanation: "Cette notion évoque comment les vérités émergent des interactions sociales." 
    },
    // question n°83 : 
    { 
        question: "Les vérités peuvent-elles être absolues selon les courants existentialistes?",
        answers: ["Oui", "Non", "Cela dépend du contexte"], 
        correct: 1, 
        explanation: "L'existentialisme souligne que les vérités sont subjectives et varient avec l'individu." 
    },
    // question n°84 : 
    { 
        question: "Quel est l'impact des croyances sur la perception de la vérité?",
        answers: ["Elles n'ont aucun impact", "Elles peuvent la déformer", "Elles la renforcent toujours"], 
        correct: 1, 
        explanation: "Les croyances personnelles peuvent influencer notre interprétation et notre acceptation de la vérité." 
    },
    // question n°85 : 
    { 
        question: "Pourquoi la transparence est-elle essentielle dans les discussions sur la vérité?",
        answers: ["Elle est inutile", "Elle évite les malentendus", "Elle empêche les divergences"], 
        correct: 1, 
        explanation: "La transparence favorise des discussions honnêtes et constructives sur des vérités." 
    },
    // question n°86 : 
    { 
        question: "La 'véracité' est souvent attachée à:",
        answers: ["La fidélité", "Le mensonge", "L'illusion"], 
        correct: 0, 
        explanation: "La véracité inclut la qualité de ce qui est dit ou fait d'une manière fidèle à la réalité." 
    },
    // question n°87 : 
    { 
        question: "Comment les valeurs influencent-elles la perception de la vérité?",
        answers: ["Elles ne l'influencent pas", "Elles la façonnent", "Elles la déforment systématiquement"], 
        correct: 1, 
        explanation: "Les valeurs fondamentales d'un individu jouent un rôle dans leur interprétation de ce qui est vrai." 
    },
    // question n°88 : 
    { 
        question: "La 'mutation' de la vérité dans un monde moderne est liée à:",
        answers: ["Les changements technologiques", "Les changements culturels", "Les croyances personnelles"], 
        correct: 0, 
        explanation: "Les nouvelles technologies remodelent notre accès et notre interaction avec la vérité." 
    },
    // question n°89 : 
    { 
        question: "Quel concept est étroitement lié aux évidences scientifiques?",
        answers: ["La subjectivité", "La relativité", "L'objectivité"], 
        correct: 2, 
        explanation: "L'objectivité est fondamentale pour établir des vérités scientifiques." 
    },
    // question n°90 : 
    { 
        question: "Quels sont les 'mythes de la vérité' dans la philosophie?",
        answers: ["Ce sont des vérités universelles", "Ce sont des croyances erronées", "Ce sont des idées acceptées sans critique"], 
        correct: 2, 
        explanation: "Ils sont souvent acceptés sans remise en question, bien qu'ils ne reflètent pas nécessairement la réalité." 
    },
    // question n°91 : 
    { 
        question: "La 'vérité professionnelle' dans un contexte d'affaires évoque:",
        answers: ["La vérité absolue", "L'honnêteté dans les transactions", "L'éthique des affaires"], 
        correct: 1, 
        explanation: "Cela implique d'être honnête dans les pratiques professionnelles." 
    },
    // question n°92 : 
    { 
        question: "Quel philosophe a soutenu que la vérité est un processus dialectique?",
        answers: ["Hegel", "Heidegger", "Rorty"], 
        correct: 0, 
        explanation: "Hegel a mis l'accent sur la dialectique dans la compréhension de la vérité." 
    },
    // question n°93 : 
    { 
        question: "La vérité peut-elle être considérée comme une valeur?",
        answers: ["Oui", "Non", "Cela dépend du contexte"], 
        correct: 0, 
        explanation: "Dans de nombreuses philosophies, la vérité est considérée comme une valeur fondamentale." 
    },
    // question n°94 : 
    { 
        question: "Le terme 'manipulation de la vérité' se réfère à:",
        answers: ["La dissimulation d'information", "L'exposition de faits", "Le dialogue honnête"], 
        correct: 0, 
        explanation: "C'est une stratégie pour influencer la perception de la vérité par des méthodes trompeuses." 
    },
    // question n°95 : 
    { 
        question: "Quel effet la recherche de la vérité a-t-elle sur la société?",
        answers: ["Elle provoque des conflits", "Elle crée des vérités universelles", "Elle encourage le dialogue"], 
        correct: 2, 
        explanation: "La recherche de la vérité favorise le dialogue constructif au sein des sociétés." 
    },
    // question n°96 : 
    { 
        question: "Quel est le défi du 'pluriel des vérités' dans les sociétés modernes?",
        answers: ["La prise de décisions", "La formation d'opinions", "Le dialogue interculturel"], 
        correct: 0, 
        explanation: "Le pluralisme des vérités complique souvent les processus de décision." 
    },
    // question n°97 : 
    { 
        question: "La vérité en tant que concept philosophique est souvent remise en question par:",
        answers: ["Le pragmatisme", "Le réalisme", "Le dogmatisme"], 
        correct: 0, 
        explanation: "Le pragmatisme remet en question les conceptions traditionnelles de la vérité." 
    },
    // question n°98 : 
    { 
        question: "La vérité peut-elle être universelle?",
        answers: ["Oui, elle est universelle", "Non, elle est subjective", "Parfois, selon le contexte"], 
        correct: 2, 
        explanation: "Cela dépend du cadre d'interprétation et du contexte culturel." 
    },
    // question n°99 : 
    { 
        question: "Quel est le risque principal de la 'vérité alternative' dans le discours moderne?",
        answers: ["Elle enrichit le débat", "Elle déforme la réalité", "Elle crée du désaccord"], 
        correct: 1, 
        explanation: "La vérité alternative peut mener à une déformation de la réalité aux dépens de la clarté." 
    },
    // question n°100 : 
    { 
        question: "La vérité est souvent considérée comme:",
        answers: ["Absolue", "Modifiable", "Discernable par l'homme"], 
        correct: 2, 
        explanation: "Elle est perçue comme une qualité atteinte par l'efficacité de la raison humaine." 
    }
];