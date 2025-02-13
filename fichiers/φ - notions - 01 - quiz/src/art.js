const questions = [
    // question n°1 : 
    { 
        question: "Qui a déclaré que 'l'art est un mensonge qui nous fait réaliser la vérité' ?",
        answers: ["Picasso", "Dali", "Brenan"], 
        correct: 0,
        explanation: "Cette phrase du célèbre artiste Pablo Picasso souligne le potentiel de l'art à révéler des vérités profondes."
    },
    
    // question n°2 : 
    { 
        question: "Qui a défini l'art comme 'l'imitation de la nature' ?",
        answers: ["Aristote", "Platon", "Kant"], 
        correct: 0,
        explanation: "Aristote affirme que l'art, en un sens, est une imitation de la réalité naturelle."
    },

    // question n°3 : 
    { 
        question: "Dans quelle philosophie l'art est-il considéré comme un moyen d'élever l'esprit ?",
        answers: ["Rationalisme", "Idéalisme", "Pragmatisme"], 
        correct: 1,
        explanation: "L'idéalisme considère l'art comme une voie d'accès à la réalité supérieure et idéale."
    },

    // question n°4 : 
    { 
        question: "Qui a écrit 'La Découverte de l'art' ?",
        answers: ["Arendt", "Dewey", "Kant"], 
        correct: 1,
        explanation: "John Dewey explore la relation entre l'art et l'expérience dans son ouvrage 'Art as Experience'."
    },

    // question n°5 : 
    { 
        question: "Selon Kant, quel est le lien entre l'art et le beau ?",
        answers: ["L'art doit être beau", "L'art ne doit pas être beau", "L'art est une question d'objectivité"], 
        correct: 0,
        explanation: "Kant voit l'art comme nécessairement lié à l'expérience esthétique du beau."
    },

    // question n°6 : 
    { 
        question: "Qui a défendu l'idée que 'l'art doit déstabiliser' ?",
        answers: ["Duchamp", "Kandinsky", "Picasso"], 
        correct: 0,
        explanation: "Marcel Duchamp défend l'idée que l'art doit provoquer le questionnement et la déstabilisation des normes."
    },

    // question n°7 : 
    { 
        question: "Quel mouvement artistique est lié à l'idée de 'l'implicite' ?",
        answers: ["Surréalisme", "Impressionnisme", "Expressionnisme"], 
        correct: 0,
        explanation: "Le surréalisme joue avec l'implicite et l'inconscient pour créer des œuvres évocatrices."
    },

    // question n°8 : 
    { 
        question: "Qui a introduit l'idée que 'l'art est la représentation de la condition humaine' ?",
        answers: ["Kant", "Hegel", "Heidegger"], 
        correct: 1,
        explanation: "Hegel considère l'art comme une manière d'exprimer et de représenter l'esprit humain."
    },

    // question n°9 : 
    { 
        question: "Quel auteur affirme que 'l'expérience esthétique est essentielle à la condition humaine' ?",
        answers: ["Dewey", "Nietzsche", "Merleau-Ponty"], 
        correct: 0,
        explanation: "John Dewey soutient que l'art est une expérience fondamentale qui enrichit notre vie quotidienne."
    },

    // question n°10 : 
    { 
        question: "Qui voit l'art comme un moyen d'évasion face à la réalité ?",
        answers: ["Bourdieu", "Schiller", "Hegel"], 
        correct: 1,
        explanation: "Friedrich Schiller soutient que l'art offre une évasion nécessaire de la trivialité de la vie."
    },

    // question n°11 : 
    { 
        question: "Quel est le but selon Tolstoï de l'art ?",
        answers: ["Transmettre des émotions", "Faire de l'argent", "Imiter la nature"], 
        correct: 0,
        explanation: "Tolstoï considère que l'art authentique doit transmettre des émotions humaines profondes."
    },

    // question n°12 : 
    { 
        question: "Qui a dit : 'L'art ne reproduit pas le visible, il rend visible' ?",
        answers: ["Kandinsky", "Van Gogh", "Giorgio de Chirico"], 
        correct: 0,
        explanation: "Wassily Kandinsky souligne que l'art révèle des notions absentes dans la simple représentation."
    },

    // question n°13 : 
    { 
        question: "Quel mouvement remet en question le rôle de l'art à travers la vie quotidienne ?",
        answers: ["Dadaïsme", "Cubisme", "Futurisme"], 
        correct: 0,
        explanation: "Le Dadaïsme questionne et remet en cause les conventions artistiques et normatives."
    },

    // question n°14 : 
    { 
        question: "Qui a défini la beauté de l'art comme un 'sensible' en lien avec le sublime ?",
        answers: ["Kant", "Hegel", "Platon"], 
        correct: 0,
        explanation: "Kant explore la beauté en tant que jugement esthétique énigmatique lié au sublime."
    },

    // question n°15 : 
    { 
        question: "Qui a abordé l'art comme 'l'enjeu de la culture' ?",
        answers: ["Adorno", "Dewey", "Benjamin"], 
        correct: 0,
        explanation: "Theodor Adorno évoque l'art comme intégral à la culture et critique des systèmes de valeurs."
    },

    // question n°16 : 
    { 
        question: "Qui a utilisé le terme 'art pour l'art' en relation avec l'autonomisation de l'art ?",
        answers: ["Duchamp", "Baudelaire", "Flaubert"], 
        correct: 1,
        explanation: "Charles Baudelaire s'illustre avec l'idée que l'art doit exister pour lui-même."
    },

    // question n°17 : 
    { 
        question: "Quel philosophe établit un lien entre l'art et le politique ?",
        answers: ["Bourdieu", "Foucault", "Hegel"], 
        correct: 1,
        explanation: "Michel Foucault analyse comment l'art et l'esthétique s'associent à des structures de pouvoir."
    },

    // question n°18 : 
    { 
        question: "Qui affirme que le 'beau est toujours le fruit d'une lutte' ?",
        answers: ["Kant", "Dewey", "Nietzsche"], 
        correct: 2,
        explanation: "Nietzsche souligne que le beau émerge à travers des conflits, transformant des valeurs en créations."
    },

    // question n°19 : 
    { 
        question: "Quel est le rôle de l'art selon Schopenhauer ?",
        answers: ["Échapper à la douleur", "Rendre la vie supportable", "S'élever spirituellement"], 
        correct: 2,
        explanation: "Schopenhauer voit dans l'art un moyen d'élever notre esprit au-dessus de la suffering existante."
    },

    // question n°20 : 
    { 
        question: "Qui a dit que l'art est 'la plus belle des mensonges' ?",
        answers: ["Hegel", "Matisse", "Dali"], 
        correct: 2,
        explanation: "Salvador Dali met en avant le caractère subjectif et trompeur de l'art par rapport à la réalité."
    },

    // question n°21 : 
    { 
        question: "Quel auteur associe l'art au sublime et au transcendant ?",
        answers: ["Hume", "Kant", "Smith"], 
        correct: 1,
        explanation: "Kant parle du sublime comme une expérience esthétique qui élève l'âme au-delà de l'ordinaire."
    },

    // question n°22 : 
    { 
        question: "Quel mouvement artistique vise à capturer l'authenticité du moment ?",
        answers: ["Impressionnisme", "Cubisme", "Surréalisme"], 
        correct: 0,
        explanation: "L'impressionnisme s'efforce de capturer l'instantanéité et la lumière, se basant sur la perception."
    },

    // question n°23 : 
    { 
        question: "Qui voit l'art comme une 'réflexion de la société' ?",
        answers: ["Bourdieu", "Kandinsky", "Kant"], 
        correct: 0,
        explanation: "Pierre Bourdieu soutient que l'art est en grande partie influencé et façonne notre société."
    },

    // question n°24 : 
    { 
        question: "Qui a exploré le lien entre art et enracinement culturel ?",
        answers: ["Geertz", "Tocqueville", "Dewey"], 
        correct: 0,
        explanation: "Clifford Geertz examine comment l'art peut refléter et enrichir la culture humaine."
    },

    // question n°25 : 
    { 
        question: "Qui a dit que 'l'art réside dans les sensations de l'âme' ?",
        answers: ["Dewey", "Picasso", "Platon"], 
        correct: 0,
        explanation: "John Dewey affirme que l'art provient de l'expérience et des sensations intérieures."
    },

    // question n°26 : 
    { 
        question: "Quel est le rôle de l'art selon Hegel ?",
        answers: ["Révélation de l'Absolu", "Évasion", "Molière"], 
        correct: 0,
        explanation: "Hegel analyse l'art comme une manifestation du développement de l'Esprit Absolu."
    },

    // question n°27 : 
    { 
        question: "Qui aborde la notion de 'l'art du quotidien' ?",
        answers: ["Adorno", "Ben-Jamin", "Hannah Arendt"], 
        correct: 1,
        explanation: "Walter Benjamin analyse comment l'art se manifeste dans les pratiques quotidiennes."
    },

    // question n°28 : 
    { 
        question: "Qui a mis l'accent sur 'l'art de l'irrévérence'?",
        answers: ["Duchamp", "Bacon", "Sartre"], 
        correct: 0,
        explanation: "Marcel Duchamp défend la provocation des normes artistiques à travers sa démarche."
    },

    // question n°29 : 
    { 
        question: "Qui a formé le concept de 'l'expérience esthétique' ?",
        answers: ["Dewey", "Heidegger", "Adorno"], 
        correct: 0,
        explanation: "John Dewey discute de l'expérience esthétique comme essentielle à la compréhension de l'art."
    },

    // question n°30 : 
    { 
        question: "Qui a dit que 'l'art est une critique du réel' ?",
        answers: ["Kant", "Adorno", "Benjamin"], 
        correct: 1,
        explanation: "Theodor Adorno soutient que l'art est essentiel en tant que critique des dysfonctionnements de la société."
    },

    // question n°31 : 
    { 
        question: "Qui a associé 'art et morale' dans sa philosophie ?",
        answers: ["Schopenhauer", "Sartre", "Hegel"], 
        correct: 1,
        explanation: "Sartre explore comment l'art peut et doit influencer la moralité et la conscience sociale."
    },

    // question n°32 : 
    { 
        question: "Qui a déclaré que l'art est 'le cœur de l'humanité' ?",
        answers: ["Sartre", "Schiller", "Dewey"], 
        correct: 1,
        explanation: "Friedrich Schiller plaide pour l’importance de l’art dans le développement de l’humanité."
    },

    // question n°33 : 
    { 
        question: "Quel mouvement artistique s'oppose à la beauté classique ?",
        answers: ["Futurisme", "Romantisme", "Surréalisme"], 
        correct: 0,
        explanation: "Le Futurisme souligne le mouvement et l’énergie, rejetant les canons de la beauté classique."
    },

    // question n°34 : 
    { 
        question: "Qui a utilisé le terme 'postmodernisme' en lien avec l'art ?",
        answers: ["Derrida", "Lyotard", "Foucault"], 
        correct: 1,
        explanation: "Jean-François Lyotard discute du postmodernisme et son impact sur le discours artistico-culturel."
    },

    // question n°35 : 
    { 
        question: "Quelle philosophie défend que l'art exprime une vérité universelle ?",
        answers: ["Idéalisme", "Réalisme", "Mitigisme"], 
        correct: 0,
        explanation: "L'idéalisme suggère que l'art doit transcender l'expérience individuelle vers une vérité universelle."
    },

    // question n°36 : 
    { 
        question: "Qui a dit que l'art est 'un moyen de contrôle culturel' ?",
        answers: ["Marx", "Adorno", "Althusser"], 
        correct: 1,
        explanation: "Adorno soulève que l'art peut être utilisé pour renforcer les valeurs bourgeoisies."
    },

    // question n°37 : 
    { 
        question: "Qui a affirmé que l'esthétique est une voie d'accès à la beauté ?",
        answers: ["Baudelaire", "Hegel", "Kant"], 
        correct: 2,
        explanation: "Kant stipule que l'esthétique est essentielle pour apprécier la beauté dans l'art."
    },

    // question n°38 : 
    { 
        question: "Qui est célèbre pour ses performances artistiques défiant les normes ?",
        answers: ["Marina Abramović", "Damien Hirst", "Banksy"], 
        correct: 0,
        explanation: "Marina Abramović est reconnue pour ses performances qui interrogent les limites de l'art."
    },

    // question n°39 : 
    { 
        question: "Qui a défendu l'idée que 'l'art est l'enfant de l'imagination' ?",
        answers: ["Shelley", "Keats", "Wordsworth"], 
        correct: 0,
        explanation: "Percy Bysshe Shelley insiste sur le pouvoir de l'imagination dans la création artistique."
    },

    // question n°40 : 
    { 
        question: "Quel philosophe maria l'art avec l'éthique ?",
        answers: ["Dewey", "Kant", "Arendt"], 
        correct: 1,
        explanation: "Kant relie la création artistique et la responsabilité éthique de l'artiste."
    },

    // question n°41 : 
    { 
        question: "Qui a ainsi souligné que 'l'œuvre d'art appartient à son époque' ?",
        answers: ["Benjamin", "Foucault", "Marx"], 
        correct: 0,
        explanation: "Walter Benjamin aborde comment l'art est un produit et un reflet de son époque historique."
    },

    // question n°42 : 
    { 
        question: "Qui a déclaré que 'l'art est politique' ?",
        answers: ["Foucault", "Bourdieu", "Kant"], 
        correct: 0,
        explanation: "Michel Foucault soutient que l'art ne peut être séparé de contextes de pouvoir."
    },

    // question n°43 : 
    { 
        question: "Qui a proposé que 'l'art et la vie sont indissociables' ?",
        answers: ["Dewey", "Kant", "Hegel"], 
        correct: 0,
        explanation: "John Dewey affirme que l'art enrichit et est intrinsèque à la vie humaine."
    },

    // question n°44 : 
    { 
        question: "Chez qui trouve-t-on l'idée que 'l'art est une forme d'existence' ?",
        answers: ["Nietzsche", "Beauvoir", "Duchamp"], 
        correct: 0,
        explanation: "Friedrich Nietzsche soutient que l'art est essentiel à l'existence et à la création de sens."
    },

    // question n°45 : 
    { 
        question: "Qui a remis l'accent sur le lien entre avant-garde et innovation artistique ?",
        answers: ["Dadaïstes", "Impressionnistes", "Surréalistes"], 
        correct: 0,
        explanation: "Le Dadaïsme s'efforce d'introduire de nouvelles idées et méthodes artistiques."
    },

    // question n°46 : 
    { 
        question: "Qui déclare que 'la beauté est dans l'œil de celui qui regarde' ?",
        answers: ["Smith", "Hume", "Kant"], 
        correct: 1,
        explanation: "David Hume met l'accent sur le caractère subjectif de l'appréciation de la beauté dans l'art."
    },

    // question n°47 : 
    { 
        question: "Quel artiste est célèbre pour ses 'ready-mades' ?",
        answers: ["Dali", "Picasso", "Duchamp"], 
        correct: 2,
        explanation: "Marcel Duchamp est bien connu pour ses ready-mades, transformant des objets quotidiens en art."
    },

    // question n°48 : 
    { 
        question: "Qui voit l'art comme un 'moyen d'accéder à l'absolu' ?",
        answers: ["Kant", "Hegel", "Bourdieu"], 
        correct: 1,
        explanation: "Hegel propose que l'art est un moyen de saisir les vérités modestes de la réalité."

    },

    // question n°49 : 
    { 
        question: "Qui a défini le 'réel' comme l'objet principal de l'art ?",
        answers: ["Dewey", "Sartre", "Merleau-Ponty"], 
        correct: 2,
        explanation: "Merleau-Ponty développe une théorie de l'art où le corps et la perception jouent un rôle central dans l'idée du réel."
    },

    // question n°50 : 
    { 
        question: "Quel énoncé résume l'art comme 'création de sens' ?",
        answers: ["Il doit être sincère", "Il doit provoquer des émotions", "Il doit être une représentation du réel"], 
        correct: 1,
        explanation: "L'art crée un sens à travers les émotions qu'il suscite, améliorant l'expérience humaine."
    },

    // question n°51 : 
    { 
        question: "Quel artiste a défendu la beauté de l'indifférence ?",
        answers: ["Morandi", "Kandinsky", "Warhol"], 
        correct: 2,
        explanation: "Andy Warhol illustre l'indifférence envers les objets créés par la société de consommation."
    },

    // question n°52 : 
    { 
        question: "Qui souligne le rôle de la transgression pour l'art ?",
        answers: ["Dali", "Bourdieu", "Foucault"], 
        correct: 2,
        explanation: "Foucault soutient que l'art transcende les normes en confrontant les conventions établies."
    },

    // question n°53 : 
    { 
        question: "Quel philosophe analyse la fonctionnalité de l'art ?",
        answers: ["Dewey", "Kant", "Nietzsche"], 
        correct: 0,
        explanation: "Dewey considère l'art comme essentiel à la réalisation et à la satisfaction des besoins humains."
    },

    // question n°54 : 
    { 
        question: "Qui est célèbre pour sa contribution à la théorie de la réception ?",
        answers: ["Bourdieu", "Iser", "Benjamin"], 
        correct: 1,
        explanation: "Hans Robert Jauss a introduit la théorie de la réception, mettant en avant le rôle du spectateur."
    },

    // question n°55 : 
    { 
        question: "Qui a soutenu que 'l'art est une forme de contemplation' ?",
        answers: ["Kant", "Sartre", "Heidegger"], 
        correct: 0,
        explanation: "Kant insiste sur le fait que l'art invite à la contemplation esthétique et une appréciation réfléchie."
    },

    // question n°56 : 
    { 
        question: "Quelle est la vision de Nietzsche sur l'art ?",
        answers: ["Il est une illusion", "Il est un outil de vérité", "Il est un symbole de la décadence"], 
        correct: 1,
        explanation: "Nietzsche affirme que l'art est un puissant outil pour exprimer une vision de l'existence."
    },

    // question n°57 : 
    { 
        question: "Qui parle de 'l'interprétation active' de l'œuvre d'art ?",
        answers: ["Dewey", "Bourdieu", "Benjamin"], 
        correct: 0,
        explanation: "Dewey met l'accent sur la manière dont l'œuvre d'art est activement interprétée par le public."
    },

    // question n°58 : 
    { 
        question: "Quel est le rôle de l'art selon Alain de Botton ?",
        answers: ["Critiquer la société", "Promouvoir le bonheur", "S'élever au-dessus"], 
        correct: 1,
        explanation: "Alain de Botton se concentre sur la façon dont l'art peut enrichir notre bonheur quotidien."
    },

    // question n°59 : 
    { 
        question: "Quel mouvement artistique consiste insuffisamment des éléments de réalité ?",
        answers: ["Surréalisme", "Cubisme", "Abstrait"], 
        correct: 0,
        explanation: "Le Surréalisme se penche sur l'inconscient et entraîne la réinvention de la réalité."
    },

    // question n°60 : 
    { 
        question: "Qui a résumé que l'art est 'des yeux intelligents' ?",
        answers: ["Dickens", "Rabelais", "Thoreau"], 
        correct: 2,
        explanation: "Henry David Thoreau évoque la sagesse que l'art peut provoquer chez ceux qui prennent le temps de le contempler."
    },

    // question n°61 : 
    { 
        question: "Quel est le principal concept dans la philosophie de l'art de Bourdieu ?",
        answers: ["L'objectivité", "Le capital culturel", "Le réalisme"], 
        correct: 1,
        explanation: "Bourdieu explore comment le capital culturel influence la production et la consommation des œuvres d'art."
    },

    // question n°62 : 
    { 
        question: "Qui a dépeint que 'la modernité est l'art du changement constant' ?",
        answers: ["Benjamin", "Marx", "Dewey"], 
        correct: 0,
        explanation: "Walter Benjamin souligne la modernité avec sa nature dynamique et instable en matière d'art."
    },

    // question n°63 : 
    { 
        question: "Qui a assuré que l'art doit faire l'objet de 'l'expérience vécue' ?",
        answers: ["Dewey", "Picasso", "Benjamin"], 
        correct: 0,
        explanation: "John Dewey plaide que l'art prend tout son sens au travers des expériences vécues."
    },

    // question n°64 : 
    { 
        question: "Qui a analysé la 'culture de la consommation' en matière d'art ?",
        answers: ["Bourdieu", "Hegel", "Adorno"], 
        correct: 0,
        explanation: "Pierre Bourdieu critique la tendance de la culture de consommation à réduire l'art à un simple produit."
    },

    // question n°65 : 
    { 
        question: "Qui a introduit la notion de 'la fonction sociale de l'art' ?",
        answers: ["Simon", "Bourdieu", "Sartre"], 
        correct: 1,
        explanation: "Bourdieu propulse l'idée que l'art a un rôle social dans la réflexion et la critique."
    },

    // question n°66 : 
    { 
        question: "Quel artiste a bousculé les normes avec le mouvement dada ?",
        answers: ["Kandinsky", "Duchamp", "Picasso"], 
        correct: 1,
        explanation: "Marcel Duchamp et ses ready-mades défient les conventions artistiques traditionnelles."
    },

    // question n°67 : 
    { 
        question: "Quel est l'art selon Chagall ?",
        answers: ["Libération de l'âme", "Mauvaise interprétation", "Éloge du bonheur"], 
        correct: 0,
        explanation: "Marc Chagall voit l'art comme un moyen d'élever l'âme vers la beauté et la spiritualité."
    },

    // question n°68 : 
    { 
        question: "Qui émettre la notion d'un 'art engagé' ?",
        answers: ["Matisse", "Foucault", "Dali"], 
        correct: 1,
        explanation: "Foucault insiste sur la nécessité d'un art qui s'engage avec les problèmes et les injustices de la société."
    },

    // question n°69 : 
    { 
        question: "Qui associe le terme 'le sublime' à l'expérience esthétique ?",
        answers: ["Kant", "Sartre", "Hegel"], 
        correct: 0,
        explanation: "Kant explique comment le sublime influence l'expérience de l'art et l'esthétique."
    },

    // question n°70 : 
    { 
        question: "Cette phrase 'L'art est un ressort de construction de l'identité' est associée à quelle approche ?",  
        answers: ["Constructivisme", "Existentialisme", "Structuralisme"], 
        correct: 0,
        explanation: "Le constructivisme met l'accent sur la façon dont l'art participe à la construction de notre identité."
    },

    // question n°71 : 
    { 
        question: "Qui a souligné le caractère polysémique de l'art ?",
        answers: ["Lyotard", "Benjamin", "Foucault"], 
        correct: 0,
        explanation: "Jean-François Lyotard plaide pour la multiplicité d'interprétations possibles dans une œuvre d'art."
    },

    // question n°72 : 
    { 
        question: "Qui a dit : 'L'art est un miroir d'une époque' ?",
        answers: ["Rimbaud", "Cézanne", "Adorno"], 
        correct: 2,
        explanation: "Theodor Adorno explore comment l'art reflète les tensions et les préoccupations d'une époque."
    },

    // question n°73 : 
    { 
        question: "Qui défend l'idée que l'art ne doit pas avoir pour but l'éducation morale ?",
        answers: ["Blandine", "Adorno", "Dewey"], 
        correct: 1,
        explanation: "Adorno argumente que l'art peut se détacher des objectifs politiques ou moraux pour exister pour lui-même."
    },

    // question n°74 : 
    { 
        question: "Qui fusionne l’art et la science à travers le concept de 'l’art technologique' ?",
        answers: ["Dewey", "Kandinsky", "Futuristes"], 
        correct: 2,
        explanation: "Le Futurisme célèbre le progrès technologique et l'innovation, intégrant la science et l'art."
    },

    // question n°75 : 
    { 
        question: "Qui a déclaré que 'l'art est un moyen de socialisation' ?",
        answers: ["Lacan", "Dewey", "Benjamin"], 
        correct: 1,
        explanation: "John Dewey défend l'idée que l'art favorise l'interaction sociale et la communauté."
    },

    // question n°76 : 
    { 
        question: "Qui parle d'un 'art total' en lien avec l'interdépendance des diverses disciplines ?",
        answers: ["Wagner", "Marin", "Else"], 
        correct: 0,
        explanation: "Richard Wagner plaide pour un art total, fusionnant musique, théâtre et arts visuels."
    },

    // question n°77 : 
    { 
        question: "Quel mouvement artistique vise à créer une aliénation artistique ?",
        answers: ["Dadaïsme", "Cubisme", "Surréalisme"], 
        correct: 0,
        explanation: "Le Dadaïsme utilise l'absurde pour créer une forme d'aliénation par rapport aux normes établies."
    },

    // question n°78 : 
    { 
        question: "Qui considère la 'folie' comme source d'inspiration artistique ?",
        answers: ["Bacon", "Dali", "Nietzsche"], 
        correct: 1,
        explanation: "Salvador Dali affirme que la folie peut être une source de créativité dans l'art."
    },

    // question n°79 : 
    { 
        question: "Quel artiste a employé des images de la culture populaire dans son art ?",
        answers: ["Lichtenstein", "Dali", "Van Gogh"], 
        correct: 0,
        explanation: "Roy Lichtenstein utilise des éléments de la culture populaire et de la bande dessinée dans son travail."
    },

    // question n°80 : 
    { 
        question: "Quel thème fréquemment abordé dans l'art est lié au désir ?",
        answers: ["La mort", "L'amour", "La guerre"], 
        correct: 1,
        explanation: "L'amour est un thème récurrent dans l'art, explorant les diverses dimensions du désir."
    },

    // question n°81 : 
    { 
        question: "Qui parle de l'art en tant que 'démarche de la subjectivité' ?",
        answers: ["Dewey", "Kandinsky", "Merleau-Ponty"], 
        correct: 2,
        explanation: "Merleau-Ponty discute de la manière dont la subjectivité influence à la fois la création et l'appréciation de l'art."
    },

    // question n°82 : 
    { 
        question: "Selon Adorno, quel est l'un des principaux rôles de l'art ?",
        answers: ["Divertir", "Critiquer la société", "Apprendre des normes"], 
        correct: 1,
        explanation: "Adorno soutient que l'art doit servir à questionner et critiquer les hiérarchies sociales."
    },

    // question n°83 : 
    { 
        question: "Qui a dit que 'l'art du cinéma est l'art de la perception' ?",
        answers: ["Baudry", "Bazin", "Derrida"], 
        correct: 1,
        explanation: "André Bazin souligne l'importance de la perception dans la réalisation cinématographique."
    },

    // question n°84 : 
    { 
        question: "Qui propose que l'art est une façon d'exprimer l'indicible ?",
        answers: ["Hume", "Kandinsky", "Benjamin"], 
        correct: 1,
        explanation: "Wassily Kandinsky plaide que l'art a la capacité d'exprimer des émotions que les mots ne peuvent pas transmettre."
    },

    // question n°85 : 
    { 
        question: "Qui a écrit sur la 'politique de l'art' ?",
        answers: ["Foucault", "Benjamin", "Adorno"], 
        correct: 0,
        explanation: "Michel Foucault discute de l'art dans le cadre des relations de pouvoir qui influencent les créations."
    },

    // question n°86 : 
    { 
        question: "Qui a dit que 'l'œuvre d'art est le produit de l'angoisse' ?",
        answers: ["Sartre", "Beauvoir", "Nietzsche"], 
        correct: 0,
        explanation: "Jean-Paul Sartre évoque comment l'angoisse peut se traduire dans la création artistique."
    },

    // question n°87 : 
    { 
        question: "Qui a exploré la relation entre art et aliénation ?",
        answers: ["Adorno", "Bourdieu", "Althusser"], 
        correct: 0,
        explanation: "Theodor Adorno examine l'aliénation en tant que principe dominant dans l'art moderne."
    },

    // question n°88 : 
    { 
        question: "Qui a plaidé que l'art est avant tout une activité cognitive ?",
        answers: ["Foucault", "Dewey", "Husserl"], 
        correct: 1,
        explanation: "John Dewey avance que la cognition joue un rôle essentiel dans la production et l'appréciation de l'art."
    },

    // question n°89 : 
    { 
        question: "Quel est le lien entre art et perception selon Merleau-Ponty ?",
        answers: ["Ils sont opposés", "Ils sont connectés", "Ils ne se rencontrent jamais"], 
        correct: 1,
        explanation: "Merleau-Ponty souligne que l'art engage profondément la perception : on voit avec notre corps."
    },

    // question n°90 : 
    { 
        question: "Qui a exploré le thème du 'souffle artistique' ?",
        answers: ["Sartre", "Kandinsky", "Matta"], 
        correct: 1,
        explanation: "Kandinsky parle de la passion et du souffle artistique comme moyens d'atteindre des idéaux esthétiques."
    },

    // question n°91 : 
    { 
        question: "Qui a relié l'art au 'jeu' en psychologie ?",
        answers: ["Sartre", "Freud", "Kandinsky"], 
        correct: 1,
        explanation: "Freud observe que l'art permet de jouer avec des désirs et des peurs cachés à travers une forme de simulation."
    },

    // question n°92 : 
    { 
        question: "Quelle phrase relie art et temps chez Bergson ?",
        answers: ["L'art est intemporel", "L'art représente chaque instant", "L'art fige le temps"], 
        correct: 1,
        explanation: "Bergson soutient que l’art capture le flux du temps et l’instantané de l’expérience."
    },

    // question n°93 : 
    { 
        question: "Qui a avancé la notion de 'l'art total' chez Wagner ?",
        answers: ["Debussy", "Nietzsche", "Kandinsky"], 
        correct: 0,
        explanation: "Wagner célèbre l'idée d'un art qui combine musique, théâtre et arts visuels pour créer une expérience globale."
    },

    // question n°94 : 
    { 
        question: "Qui a dit : 'La beauté est sujet à la critique' ?",
        answers: ["Sartre", "Kant", "Adorno"], 
        correct: 1,
        explanation: "Kant déclare que l'art et la beauté sont toujours sujets à évaluation critique."
    },

    // question n°95 : 
    { 
        question: "Qui a exprimé que 'l'art est un besoin fondamental de l'homme' ?",
        answers: ["Bourdieu", "Tolstoï", "Adorno"], 
        correct: 1,
        explanation: "Tolstoï soutient que l'art est une nécessité humaine, ayant une profonde valeur sociale."
    },

    // question n°96 : 
    { 
        question: "Quel mouvement fait l'éloge de la 'réalité' dans la création ?",
        answers: ["Réalisme", "Surréalisme", "Impressionnisme"], 
        correct: 0,
        explanation: "Le réalisme s'engage à représenter la vie telle qu'elle est, sans embellissement."
    },

    // question n°97 : 
    { 
        question: "Qui explore l'importance des 'mémoires collectives' en art ?",
        answers: ["Benjamin", "Foucault", "Adorno"], 
        correct: 0,
        explanation: "Walter Benjamin met en lumière comment l'art est connecté aux mémoires et aux récits culturels partagés."
    },

    // question n°98 : 
    { 
        question: "Qui s'intéresse à 'l'interaction entre l'art et le public' ?",
        answers: ["Rancière", "Ricoeur", "Dewey"], 
        correct: 0,
        explanation: "Jacques Rancière discute de la manière dont l'art engage le public à questionner et à débattre."
    },

    // question n°99 : 
    { 
        question: "Qui a déclaré que 'l'art devrait inspirer la réflexion critique' ?",
        answers: ["Dewey", "Kant", "Adorno"], 
        correct: 2,
        explanation: "Theodor Adorno soutient que l'art doit encourager une critique des normes sociétales."
    },

    // question n°100 : 
    { 
        question: "Qui a défini l'art comme un 'savoir' d'interaction humaine ?",
        answers: ["Lacan", "Dewey", "Lyotard"], 
        correct: 1,
        explanation: "John Dewey affirme que l'art est un savoir basé sur l'expérience humaine et l'interaction sociale."
    },
];