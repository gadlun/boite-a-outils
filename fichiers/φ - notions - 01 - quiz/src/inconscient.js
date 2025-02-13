const questions = [
    // question n°1 : 
    { 
        question: "Qui a introduit le concept d'inconscient dans la psychanalyse ?",
        answers: ["Carl Jung", "Sigmund Freud", "Jacques Lacan"], 
        correct: 1,
        explanation: "Sigmund Freud est le fondateur de la psychanalyse et introduit la notion d'inconscient."
    },

    // question n°2 : 
    { 
        question: "Selon Freud, quel est le rôle principal de l'inconscient ?",
        answers: ["Motiver les actions conscientes", "Contrôler les émotions", "Préserver les souvenirs"], 
        correct: 0,
        explanation: "Freud soutient que l'inconscient motive de nombreuses actions sans que l'individu en soit conscient."
    },

    // question n°3 : 
    { 
        question: "Quel terme désigne les pensées refoulées dans l'inconscient selon Freud ?",
        answers: ["Complexes", "Instincts", "Séductions"], 
        correct: 0,
        explanation: "Le terme 'complexes' fait référence aux pensées et souvenirs refoulés qui influencent le comportement."
    },

    // question n°4 : 
    { 
        question: "Qui a développé le concept d'inconscient collectif ?",
        answers: ["Freud", "Lacan", "Carl Jung"], 
        correct: 2,
        explanation: "Carl Jung a proposé l'idée d'inconscient collectif qui englobe des archétypes partagés par l'humanité."
    },

    // question n°5 : 
    { 
        question: "Quel est le lien entre l'inconscient et les rêves selon Freud ?",
        answers: ["Les rêves sont des reflets de la réalité", "Les rêves révèlent des désirs inconscients", "Les rêves n'ont aucune relation"], 
        correct: 1,
        explanation: "Freud considère les rêves comme des manifestations des désirs refoulés de l'inconscient."
    },

    // question n°6 : 
    { 
        question: "Qui a introduit l'idée de l'inconscient comme 'un lieu de conflits' ?",
        answers: ["Weber", "Freud", "Jung"], 
        correct: 1,
        explanation: "Freud décrit l'inconscient comme un espace de conflits internes entre désirs et normes sociales."
    },

    // question n°7 : 
    { 
        question: "Quel phénomène psychanalytique décrit le transfert des sentiments inconscients sur autrui ?",
        answers: ["Projection", "Transfert", "Régression"], 
        correct: 1,
        explanation: "Le transfert est un mécanisme où le patient projette ses sentiments passés sur le thérapeute."
    },

    // question n°8 : 
    { 
        question: "Quel mécanisme de défense implique un refus de la réalité en faveur de l'inconscient ?",
        answers: ["Déni", "Répression", "Rationalisation"], 
        correct: 0,
        explanation: "Le déni est un mécanisme de défense qui empêche l'individu d'accepter la réalité douloureuse."
    },

    // question n°9 : 
    { 
        question: "Qui a critiqué la vision freudienne de l'inconscient ?",
        answers: ["Lacan", "Adorno", "Fromm"], 
        correct: 2,
        explanation: "Erich Fromm a contesté plusieurs postulats de Freud sur la nature de l'inconscient."
    },

    // question n°10 : 
    { 
        question: "Quel concept jungien relie l'inconscient individuel et collectif ?",
        answers: ["Archétypes", "Complexes", "Fantasmes"], 
        correct: 0,
        explanation: "Les archétypes sont des images et motifs universels présents dans l'inconscient collectif chez Jung."
    },

    // question n°11 : 
    { 
        question: "Quel philosophe a abordé l'inconscient dans le cadre de la phénoménologie ?",
        answers: ["Husserl", "Sartre", "Lacan"], 
        correct: 1,
        explanation: "Jean-Paul Sartre analyse comment l'inconscient influence l'angoisse et l'authenticité."
    },

    // question n°12 : 
    { 
        question: "Qui a introduit l'idée d'un 'inconscient structuré comme un langage' ?",
        answers: ["Freud", "Lacan", "Jung"], 
        correct: 1,
        explanation: "Jacques Lacan soutient que l'inconscient fonctionne avec des structures linguistiques."
    },

    // question n°13 : 
    { 
        question: "Qui a mis l'accent sur l'idée que l'inconscient peut être 'créatif' ?",
        answers: ["Dali", "Freud", "Jung"], 
        correct: 2,
        explanation: "Carl Jung explore le potentiel créatif de l'inconscient dans l'art et les rêves."
    },
    
    // question n°14 : 
    { 
        question: "Quel est le lien entre sexualité et inconscient selon Freud ?",
        answers: ["L'inconscient gère la sexualité", "L'inconscient la réprime", "L'inconscient ne s'en préoccupe pas"], 
        correct: 1,
        explanation: "Freud avance que les désirs sexuels refoulés s'accumulent dans l'inconscient."
    },

    // question n°15 : 
    { 
        question: "Qui a utilisé la technique de l'association libre pour explorer l'inconscient ?",
        answers: ["Freud", "Lacan", "Carl Rogers"], 
        correct: 0,
        explanation: "Sigmund Freud a développé l'association libre comme méthode pour accéder aux contenus de l'inconscient."
    },
    
    // question n°16 : 
    { 
        question: "Quel mouvement artistique a été influencé par la pensée freudienne ?",
        answers: ["Surréalisme", "Impressionnisme", "Cubisme"], 
        correct: 0,
        explanation: "Le Surréalisme est profondément influencé par les notions de l'inconscient et des rêves freudiens."
    },

    // question n°17 : 
    { 
        question: "Qui a introduit la notion de 'l'anxiété' en lien avec l'inconscient ?",
        answers: ["Dewey", "Fromm", "Freud"], 
        correct: 2,
        explanation: "Freud analyse l'anxiété comme un symptôme de conflits de l'inconscient."
    },

    // question n°18 : 
    { 
        question: "Qui voit l'inconscient comme une clé pour comprendre les comportements humains ?",
        answers: ["Kant", "Freud", "Sartre"], 
        correct: 1,
        explanation: "Freud est convaincu que l'inconscient est essentiel pour déchiffrer les comportements humains."
    },

    // question n°19 : 
    { 
        question: "Qui considère l'inconscient comme un leviathan influent ?",
        answers: ["Lacan", "Dewey", "Jung"], 
        correct: 0,
        explanation: "Jacques Lacan pose l'inconscient comme un levier essentiel à la compréhension de soi."
    },

    // question n°20 : 
    { 
        question: "Quel concept freudien décrit les diverses parts du Soi ?",
        answers: ["Surmoi", "Ça", "Moi"], 
        correct: 0,
        explanation: "Le Surmoi représente les normes et valeurs intériorisées qui influence le comportement."
    },

    // question n°21 : 
    { 
        question: "Qui a introduit la notion d'ombre dans l'analyse de l'inconscient ?",
        answers: ["Black", "Jung", "Freud"], 
        correct: 1,
        explanation: "Carl Jung a utilisé le concept d'ombre pour décrire les aspects refoulés de la personnalité."
    },

    // question n°22 : 
    { 
        question: "Quel est le lien entre l'inconscient et l'hystérie selon Freud ?",
        answers: ["Une absence de douleur", "Des conflits intérieurs", "Un mécanisme de défense"], 
        correct: 1,
        explanation: "Freud soutient que l'hystérie est souvent liée à des conflits refoulés dans l'inconscient."
    },

    // question n°23 : 
    { 
        question: "Qui a exploré le concept d'inconscient à travers la mythologie ?",
        answers: ["Jung", "Freud", "Lacan"], 
        correct: 0,
        explanation: "Carl Jung explore comment les mythes et les archétypes émergent de l'inconscient."
    },
    
    // question n°24 : 
    { 
        question: "Qui considère que l'inconscient est un facteur de créativité ?",
        answers: ["Freud", "Jung", "Adorno"], 
        correct: 1,
        explanation: "Carl Jung affirme que l'inconscient est une source puissante pour la créativité et l'art."
    },

    // question n°25 : 
    { 
        question: "Quel concept décrit la façon dont les souvenirs traumatisés peuvent être refoulés dans l'inconscient ?",
        answers: ["Amnésie", "Répression", "Évitement"], 
        correct: 1,
        explanation: "La répression fait référence au processus par lequel les souvenirs douloureux sont éloignés de la conscience."
    },

    // question n°26 : 
    { 
        question: "Qui a suivi la théorie freudienne mais a critiqué sa vision de l'inconscient ?",
        answers: ["Lacan", "Jung", "Fromm"], 
        correct: 2,
        explanation: "Erich Fromm remet en question des aspects de la théorie freudienne concernant l'inconscient."
    },

    // question n°27 : 
    { 
        question: "Quel terme désigne les rêves selon la psychanalyse ?",
        answers: ["Les révélateurs de l'inconscient", "Les prédictions", "Les chimères"], 
        correct: 0,
        explanation: "Les rêves sont considérés comme des manifestations des désirs refoulés dans l'inconscient."
    },

    // question n°28 : 
    { 
        question: "Qui a analysé les chants et les rituels comme expression de l'inconscient ?",
        answers: ["Freud", "Jung", "Lacan"], 
        correct: 1,
        explanation: "Carl Jung examine comment les chants et rituels expriment des archétypes de l'inconscient."
    },

    // question n°29 : 
    { 
        question: "Qui a différencié l'inconscient individuel de l'inconscient collectif ?",
        answers: ["Freud", "Jung", "Adorno"], 
        correct: 1,
        explanation: "Carl Jung propose que l'inconscient collectif contient des expériences partagées par toute l'humanité."
    },

    // question n°30 : 
    { 
        question: "Quel terme décrit une résistance à l'exploration de l'inconscient ?",
        answers: ["Dissonance", "Déni", "Amnésie"], 
        correct: 1,
        explanation: "Le déni peut être un mécanisme de défense pour éviter de faire face à des contenus inconscients."
    },

    // question n°31 : 
    { 
        question: "Qui a mis en avant 'la lutte pour la libre association' dans l'inconscient ?",
        answers: ["Kant", "Freud", "Lacan"], 
        correct: 2,
        explanation: "Jacques Lacan évoque l'importance de la libre association pour accéder à l'inconscient."
    },

    // question n°32 : 
    { 
        question: "Qui considère que l'inconscient est en constant dialogue avec la conscience ?",
        answers: ["Freud", "Fromm", "Lacan"], 
        correct: 2,
        explanation: "Lacan soutient que l'inconscient devient audible et puis visible dans le discours conscient."
    },

    // question n°33 : 
    { 
        question: "Qui a dit que 'l'inconscient est le réservoir de la souffrance humaine' ?",
        answers: ["Freud", "Jung", "Sartre"], 
        correct: 0,
        explanation: "Freud analyse comment l'inconscient contient des désirs et des souvenirs sources de souffrance."
    },

    // question n°34 : 
    { 
        question: "Quel concept lumineux associe l'inconscient à des états de rêve éveillé ?",
        answers: ["Hypnagogique", "Trans", "Surréaliste"], 
        correct: 0,
        explanation: "L'état hypnagogique aborde l'interaction entre l'inconscient et la conscience dans un rêve éveillé."
    },

    // question n°35 : 
    { 
        question: "Quel mouvement artistique promeut l'idée de l'exploration de l'inconscient ?",
        answers: ["Romantisme", "Surréalisme", "Impressionnisme"], 
        correct: 1,
        explanation: "Le surréalisme valorise l'exploration des rêves et de l'inconscient dans l'art."
    },

    // question n°36 : 
    { 
        question: "Qui a formulé l'importance des 'symboles' dans l'interprétation des rêves ?",
        answers: ["Freud", "Jung", "Lacan"], 
        correct: 1,
        explanation: "Carl Jung met l'accent sur l'importance des symboles dans les rêves pour comprendre l'inconscient."
    },

    // question n°37 : 
    { 
        question: "Qui a observé que 'l'inconscient est fondateur de l'identité' ?",
        answers: ["Bourdieu", "Freud", "Kant"], 
        correct: 1,
        explanation: "Freud soutient que l'inconscient joue un rôle clé dans la formation de l'identité personnelle."
    },

    // question n°38 : 
    { 
        question: "Qui a parlé de l'inconscient comme étant 'opaque' ?",
        answers: ["Mill", "Hume", "Freud"], 
        correct: 0,
        explanation: "John Stuart Mill qualifie l'inconscient d'opaque, car il recèle des motivations cachées."
    },

    // question n°39 : 
    { 
        question: "Quel mouvement critique l'idée d'inconscient comme primordiale ?",
        answers: ["Postmodernisme", "Structuralisme", "Dadaïsme"], 
        correct: 0,
        explanation: "Le postmodernisme met en question les fondements de l'inconscient comme idée totale."
    },

    // question n°40 : 
    { 
        question: "Qui a discuté du 'refoulement culturel' ?",
        answers: ["Adorno", "Fromm", "Lacan"], 
        correct: 0,
        explanation: "Theodor Adorno aborde comment la culture peut refouler les vérités inconscientes."
    },

    // question n°41 : 
    { 
        question: "Qui a définit 'le rêve' comme une voie d'accès à l'inconscient ?",
        answers: ["Freud", "Jung", "Sartre"], 
        correct: 0,
        explanation: "Freud considère les rêves comme un accès privilégié aux désirs et conflits de l'inconscient."
    },

    // question n°42 : 
    { 
        question: "Qui voit l'inconscient comme 'une prison de désirs' ?",
        answers: ["Freud", "Nietzsche", "Sartre"], 
        correct: 0,
        explanation: "Freud décrit l'inconscient comme un réservoir de désirs refoulés et non réalisés."
    },

    // question n°43 : 
    { 
        question: "Qui a insisté sur le travail de l'inconscient dans la créativité ?",
        answers: ["Freud", "Jung", "Adorno"], 
        correct: 1,
        explanation: "Carl Jung soutient que l'inconscient est une source de créativité vital."
    },

    // question n°44 : 
    { 
        question: "Qui a dit que l'inconscient est 'un modèle de langage' ?",
        answers: ["Freud", "Lacan", "Jung"], 
        correct: 1,
        explanation: "Lacan exprime que l'inconscient s'organise selon des structures linguistiques."
    },

    // question n°45 : 
    { 
        question: "Quel philosophe considère que l'inconscient est indépendant de la conscience ?",
        answers: ["Sartre", "Freud", "Jung"], 
        correct: 1,
        explanation: "Freud met en avant que l'inconscient opère indépendamment des pensées conscientes."
    },

    // question n°46 : 
    { 
        question: "Quel mécanisme révèle les pulsions cachées selon Freud ?",
        answers: ["Rêve", "Acte manqué", "Neuroses"], 
        correct: 1,
        explanation: "Les actes manqués sont des erreurs qui révèlent les intentions refoulées de l'inconscient."
    },

    // question n°47 : 
    { 
        question: "Quel concept jungien exprime des récits partagés composés de l'inconscient ?",
        answers: ["Symboles", "Mythes", "Archétypes"], 
        correct: 2,
        explanation: "Les archétypes jungien voie d'expression collective contenue dans l'inconscient."
    },

    // question n°48 : 
    { 
        question: "Qui a introduit l'idée que les émotions réprimées génèrent des symptômes ?",
        answers: ["Freud", "Fromm", "Lacan"], 
        correct: 0,
        explanation: "Freud explique comment les émotions réprimées peuvent conduire à des symptômes somatiques."
    },

    // question n°49 : 
    { 
        question: "Qui a abordé le lien entre l'inconscient et l'éthique ?",
        answers: ["Weber", "Freud", "Kant"], 
        correct: 1,
        explanation: "Freud examine comment l'inconscient influence la dimension éthique des actions humaines."
    },

    // question n°50 : 
    { 
        question: "Qui parle de 'narrativité de l'inconscient' ?",
        answers: ["Freud", "Ricoeur", "Lacan"], 
        correct: 1,
        explanation: "Paul Ricoeur explore la narrativité comme moyen de comprendre l'inconscient."
    },

    // question n°51 : 
    { 
        question: "Quel concept illustre le pouvoir de l'inconscient sur le comportement ?",
        answers: ["Erreur systématique", "Influence inconsciente", "Rationalité"], 
        correct: 1,
        explanation: "L'influence inconsciente mensuel comportement humain, principalement révélé par l'analyse."
    },

    // question n°52 : 
    { 
        question: "Qui a déclaré que 'l'inconscient est l'archétype de l'humanité' ?",
        answers: ["Freud", "Jung", "Nietzsche"], 
        correct: 1,
        explanation: "Carl Jung qualifie l'inconscient d'archétype partagé et influent dans l'expérience humaine."
    },

    // question n°53 : 
    { 
        question: "Qui a utilisé le terme 'interprétation des rêves' pour décrire l'accès à l'inconscient ?",
        answers: ["Freud", "Lacan", "Kant"], 
        correct: 0,
        explanation: "Freud a écrit sur l'interprétation des rêves, révélant le contenu de l'inconscient."
    },

    // question n°54 : 
    { 
        question: "Qui a déclaré que 'l'inconscient contient la culture' ?",
        answers: ["Jung", "Freud", "Sartre"], 
        correct: 0,
        explanation: "Carl Jung soutient que les symboles et mythes de la culture résident dans l'inconscient."
    },

    // question n°55 : 
    { 
        question: "Quel concept est propre à l'inconscient selon Freud ?",
        answers: ["Célébrité", "État de rêve", "Repression"], 
        correct: 2,
        explanation: "La répression est un élément central dans l'analyse freudienne de l'inconscient."
    },

    // question n°56 : 
    { 
        question: "Qui considère l'inconscient comme 'un lieu de créativité' ?",
        answers: ["Freud", "Dali", "Sartre"], 
        correct: 0,
        explanation: "Freud montre que l'inconscient peut aussi inspirer créativité et art."
    },

    // question n°57 : 
    { 
        question: "Qui a formulé la théorie de l'inconscient sous l'angle fonctionnel ?",
        answers: ["Lacan", "Freud", "Jung"], 
        correct: 0,
        explanation: "Jacques Lacan renouvelle l'analyse fonctionnelle de l'inconscient à travers le langage."
    },

    // question n°58 : 
    { 
        question: "Quel axe relie l'inconscient à la culture, selon Klein ?",
        answers: ["Les pulsions", "Les complexes", "Les désirs"], 
        correct: 0,
        explanation: "Melanie Klein observe comment les pulsions innées forment la culture."
    },
    
    // question n°59 : 
    { 
        question: "Qui a dit que l'inconscient a une 'dynamique' propre ?",
        answers: ["Freud", "Jung", "Fromm"], 
        correct: 0,
        explanation: "Freud observe que l'inconscient agit selon ses propres règles et dynamiques."
    },

    // question n°60 : 
    { 
        question: "Quel concept désigne les projections inconscientes sur d'autres ?",
        answers: ["Projection", "Déni", "Transfert"], 
        correct: 0,
        explanation: "La projection est alors un mécanisme où des traits ou désirs personnels sont transférés sur autrui."
    },

    // question n°61 : 
    { 
        question: "Qui a fourni une analyse de l'inconscient à travers le rapport avec les mots ?",
        answers: ["Freud", "Lacan", "Foucault"], 
        correct: 1,
        explanation: "Jacques Lacan mettait en avant ce lien qui unit l'inconscient au langage."
    },
    
    // question n°62 : 
    { 
        question: "Qui a émis l'idée que l'inconscient pourrait affiner le déplacement de l'individu ?",
        answers: ["Freud", "Dewey", "Wittgenstein"], 
        correct: 0,
        explanation: "Freud soutient que l'inconscient incline à déterminer les mouvements de manière cachée."
    },

    // question n°63 : 
    { 
        question: "Quel est le rôle de l'inconscient selon Alain sur la dynamique libre ?",
        answers: ["Obstruction", "Caractère", "Étreinte"], 
        correct: 2,
        explanation: "Alain décrit l'inconscient comme une force indirecte, en intérieur de notre liberté." 
    },

    // question n°64 : 
    { 
        question: "Qui a dit que l'inconscient est 'un moteur d'émotions' ?",
        answers: ["Freud", "Hume", "Kant"], 
        correct: 0,
        explanation: "Freud énonce comment l'inconscient motivent des émotions, des comportements, et des désirs."
    },

    // question n°65 : 
    { 
        question: "Qui a décrit l'inconscient comme 'une histoire à raconter' ?",
        answers: ["Freud", "Ricoeur", "Jung"], 
        correct: 1,
        explanation: "Paul Ricoeur évoque la narration comme étant essentielle pour raconter l'inconscient."
    },

    // question n°66 : 
    { 
        question: "Quel auteur Korean corrèle souvenirs et contenus inconscients ?",
        answers: ["Fromm", "Bentham", "Hegel"], 
        correct: 0,
        explanation: "Erich Fromm lie les souvenirs aux contenus refoulés de l'inconscient."
    },

    // question n°67 : 
    { 
        question: "Qui a émis que les 'souffrances invisibles' révèlent l'inconscient ?",
        answers: ["Freud", "Kierkegaard", "Jung"], 
        correct: 0,
        explanation: "Freud soutient que les conséquences psychologiques permettent d'accéder à l'inconscient."
    },

    // question n°68 : 
    { 
        question: "Qui a critiqué le déterminisme psychologique de l'inconscient ?",
        answers: ["Sartre", "Camus", "Dewey"], 
        correct: 0,
        explanation: "Jean-Paul Sartre conteste la notion d'un inconscient déterminant totalement nos choix."
    },

    // question n°69 : 
    { 
        question: "Quel terme désigne l'influence de l'inconscient sur le comportement social ?",
        answers: ["Instincts", "Comportements", "Motivation"], 
        correct: 2,
        explanation: "L'inconscient motive nos comportements sociaux sans que nous en soyons directement conscients."
    },

    // question n°70 : 
    { 
        question: "Qui a évoqué l'inconscient sous le prisme des relations ?",
        answers: ["Freud", "Fromm", "Jacobi"], 
        correct: 1,
        explanation: "Erich Fromm affirme que les relations sociales influencent l'inconscient."
    },

    // question n°71 : 
    { 
        question: "Qui a formulé que « l'art, c'est faire parler l'inconscient » ?",
        answers: ["Freud", "Dali", "Breen"], 
        correct: 0,
        explanation: "Freud soutient que l'art révèle les désirs inconscients."
    },

    // question n°72 : 
    { 
        question: "Quel concept refoulé Freudiens est aussi exploré dans les contes classiques ?",
        answers: ["Culpabilité", "Désirs", "Mémoires"], 
        correct: 1,
        explanation: "Les contes classiques souvent présentent des désirs qui sont refoulés dans les récits."
    },

    // question n°73 : 
    { 
        question: "Qui a développé l'idée d'inconscient comme 'une découverte du détail' ?",
        answers: ["Freud", "Jung", "Adorno"], 
        correct: 1,
        explanation: "Carl Jung relie l'idée de l'inconscient à une attention minutieuse et déterminée."
    },

    // question n°74 : 
    { 
        question: "Qui a démonté que 'l'inconscient n'échappe pas aux émotions ?",
        answers: ["Freud", "Nietzsche", "Sartre"], 
        correct: 0,
        explanation: "Freud soutient que l'inconscient est suffocant, intégrant des émotions refoulées."
    },

    // question n°75 : 
    { 
        question: "Quel contexte lie l'inconscient à la performance artistique ?",
        answers: ["Psychologie", "Esthétique", "Esprit rationaliste"], 
        correct: 0,
        explanation: "La psychologie connecte l'inconscient avec la performance et l'expérience artistique."
    },

    // question n°76 : 
    { 
        question: "Qui a relié les 'signes de l'inconscient' à la littérature ?",
        answers: ["Freud", "Sartre", "Kant"], 
        correct: 0,
        explanation: "Freud souligne que la littérature peut révéler les signes et motifs de l'inconscient."
    },

    // question n°77 : 
    { 
        question: "Quel auteur a étudié des 'régulations de l'inconscient' ?",
        answers: ["Freud", "Hegel", "Ricoeur"], 
        correct: 0,
        explanation: "Freud examine comment l'inconscient régule les comportements."
    },

    // question n°78 : 
    { 
        question: "Qui a interprété le rêve en tant que 'message de l'inconscient' ?",
        answers: ["Freud", "Jung", "Sartre"], 
        correct: 0,
        explanation: "Freud interprète les rêves comme des messages sinueux de l'inconscient."
    },

    // question n°79 : 
    { 
        question: "Qui a lié la psychothérapie de l'inconscient à l'analyse des rêves ?",
        answers: ["Freud", "Hume", "Jung"], 
        correct: 0,
        explanation: "Freud a établi un lien entre l'analyse des rêves et la psychothérapie de l'inconscient."
    },
    
    // question n°80 : 
    { 
        question: "Quel est le lien entre culture et inconscient selon Freud ?",
        answers: ["Pas de lien", "Peut révéler la société", "La détermine exclusivement"], 
        correct: 1,
        explanation: "Freud soutient que les contenus inconscients révèlent souvent la culture sociétale."
    },

    // question n°81 : 
    { 
        question: "Quel lien associe l'inconscient à la rationalité ?",
        answers: ["L'irrationalité", "Le raisonnement", "Le renseignement"], 
        correct: 0,
        explanation: "L'inconscient est souvent perçu comme irrationnel, opérant en dehors de la compréhension."
    },

    // question n°82 : 
    { 
        question: "Qui relie l'inconscient aux dynamiques de pouvoir ?",
        answers: ["Hobbes", "Foucault", "Weber"], 
        correct: 1,
        explanation: "Michel Foucault discute de l'inconscient et de la manière dont il interagit avec le pouvoir."
    },

    // question n°83 : 
    { 
        question: "Qui aborde l'inconscient comme source de récits partagés ?",
        answers: ["Freud", "Jung", "Adorno"], 
        correct: 1,
        explanation: "Carl Jung explore comment l'inconscient exprime des récits et archétypes collectifs."
    },

    // question n°84 : 
    { 
        question: "Quel concept décrit des actes symbolisant des désirs refoulés ?",
        answers: ["Répression", "Diversion", "Projection"], 
        correct: 0,
        explanation: "La répression est un concept majeur en psychanalyse, rendant compte d'actes témoignant de désirs refoulés."
    },

    // question n°85 : 
    { 
        question: "Qui a mis l'accent sur l'importance de la parole dans l'accès à l'inconscient ?",
        answers: ["Freud", "Fromm", "Lacan"], 
        correct: 2,
        explanation: "Jacques Lacan considère que la parole est essentielle pour écouter et interpréter l'inconscient."
    },

    // question n°86 : 
    { 
        question: "Qui a affirmé que 'l'inconscient se révèle dans les quelques gestes quotidiens' ?",
        answers: ["Freud", "Husserl", "Nietzsche"], 
        correct: 0,
        explanation: "Sigmund Freud analyse comment des gestes quotidiens peuvent émerger des intentions inconscientes."
    },

    // question n°87 : 
    { 
        question: "Qui a formalement compris l'inconscient dans le processus du langage ?",
        answers: ["Bourdeau", "Lacan", "Freud"], 
        correct: 1,
        explanation: "Jacques Lacan insiste sur le fait que l'inconscient se manifeste à travers le langage."
    },

    // question n°88 : 
    { 
        question: "Qui évoque le 'fantasme' en lien avec l'inconscient ?",
        answers: ["Wittgenstein", "Freud", "Kant"], 
        correct: 1,
        explanation: "Freud discute des fantasmes refoulés comme non-exprimés par l'inconscient."
    },

    // question n°89 : 
    { 
        question: "Quel terme désigne un état polémique entre l'inconscient et le conscient ?",
        answers: ["L'égo", "L'inconscient", "Le ça"], 
        correct: 0,
        explanation: "L'égo représente la confrontation entre poussées de l'inconscient et la conscience."
    },

    // question n°90 : 
    { 
        question: "qui relie le devoir à la nature de l'inconscient ?",
        answers: ["Spinoza", "Kant", "Jung"], 
        correct: 1,
        explanation: "Kant par rapport à la nature du devoir souligne que l'inconscient pénètre la nature morale."
    },

    // question n°91 : 
    { 
        question: "Qui analyse la dynamique émotionnelle dans l'inconscient ?",
        answers: ["Freud", "Hume", "Kant"], 
        correct: 0,
        explanation: "Freud observe que les émotions refoulées conduisent à une dynamique de la psyché."
    },

    // question n°92 : 
    { 
        question: "Qui a soutenu que l'inconscient permet d'accéder à une conscience plus profonde ?",
        answers: ["Kant", "Auwal", "Hobbes"], 
        correct: 1,
        explanation: "Auwal postule que l'inconscient doit être exploré pour aller plus loin dans la compréhension de soi."
    },

    // question n°93 : 
    { 
        question: "Quel thème décrit l'inconscient comme étant subjectif ?",
        answers: ["Émotion", "Imagination", "Inhibition"], 
        correct: 1,
        explanation: "L'imagination montre comment l'inconscient se projette et se diversifie dans les rêveries."
    },

    // question n°94 : 
    { 
        question: "Quel penseur aborde l'inconscient à travers la 'liberté de l'individu et de ses choix' ?",
        answers: ["Sartre", "Freud", "Nietzsche"], 
        correct: 0,
        explanation: "Sartre met la liberté de l'individu en avant, mettant en question le déterminisme inconscient."
    },

    // question n°95 : 
    { 
        question: "Qui défend que 'les pulsions inconscientes sont le moteur des comportements' ?",
        answers: ["Freud", "Adorno", "Sartre"], 
        correct: 0,
        explanation: "Freud soutient que les pulsions inconscientes sont à l'origine des comportements."
    },

    // question n°96 : 
    { 
        question: "Qui analyse les limites de l'inconscient dans les pratiques sociales ?",
        answers: ["Durkheim", "Hegel", "Fromm"], 
        correct: 0,
        explanation: "Durkheim invite à examiner comment l'inconscient façonne les pratiques sociales."
    },

    // question n°97 : 
    { 
        question: "Qui explore l'influence de l'inconscient en analyse transactionnelle ?",
        answers: ["Berne", "Freud", "Jung"], 
        correct: 0,
        explanation: "Eric Berne cherche à établir l'impact de l'inconscient dans les interactions humaines."
    },

    // question n°98 : 
    { 
        question: "Qui stigmatise le déni dans la signification de l'inconscient ?",
        answers: ["Freud", "Fromm", "Sartre"], 
        correct: 0,
        explanation: "Freud stigmatise le déni comme un mécanisme important pour comprendre l'inconscient."
    },

    // question n°99 : 
    { 
        question: "Qui a émis que 'l'inconscient est la clé de l'art' ?",
        answers: ["Freud", "Dali", "Bourdieu"], 
        correct: 1,
        explanation: "Salvador Dali plaide que l'inconscient du créateur est essentiel à la conception artistique."
    },

    // question n°100 : 
    { 
        question: "Qui voit l'inconscient comme essentiel à la compréhension de l'humanité ?",
        answers: ["Freud", "Fromm", "Jung"], 
        correct: 2,
        explanation: "Carl Jung soutient que l'inconscient est une dimension essentielle pour comprendre l'expérience humaine."
    },
];