const questions = [
    // question n°1 :
    {
        question: "Quelle est la définition classique du travail en philosophie ?",
        answers: ["Un effort physique uniquement", "Un moyen de subsistance", "Une activité humaine significative"],
        correct: 2,
        explanation: "Le travail est défini comme une activité humaine significative, qui peut englober la créativité, la productivité et l'engagement."
    },

    // question n°2 :
    {
        question: "Quel philosophe a lié le travail à la dignité humaine ?",
        answers: ["Marx", "Kant", "Aristote"],
        correct: 0,
        explanation: "Karl Marx a soutenu que le travail est essentiel pour la réalisation de soi et l'engagement dans la société."
    },

    // question n°3 :
    {
        question: "Quelle est la position de Kant sur le travail ?",
        answers: ["Il est indigne", "Il a une valeur morale", "Il est uniquement un moyen de subsistance"],
        correct: 1,
        explanation: "Kant considère que le travail a une valeur morale, car il permet à l'individu d'agir avec liberté et responsabilité."
    },

    // question n°4 :
    {
        question: "Quel est le lien entre travail et aliénation selon Marx ?",
        answers: ["Le travail ne cause pas d'aliénation", "Le travail peut entraîner l'aliénation des travailleurs", "Le travail libère les esprits"],
        correct: 1,
        explanation: "Marx a soutenu que les conditions de travail dans le capitalisme peuvent aliéner les travailleurs de leur produit et de leur essence."
    },

    // question n°5 :
    {
        question: "Qui a introduit la notion de 'travail immatériel' ?",
        answers: ["Lazzarato", "Sartre", "Foucault"],
        correct: 0,
        explanation: "Maurizio Lazzarato a introduit le concept de 'travail immatériel', qui se réfère à des formes de travail non liées à des biens matériels."
    },

    // question n°6 :
    {
        question: "Quelle est la conception du travail dans la question de la justice sociale ?",
        answers: ["Le travail est secondaire", "Le travail garantit l'égalité sociale", "Le travail n'est pas relié à la justice"],
        correct: 1,
        explanation: "Le travail est souvent considéré comme un fondement de la justice sociale, garantissant l'égalité des opportunités."
    },

    // question n°7 :
    {
        question: "Quel est le lien entre travail et temps dans le sens capitaliste ?",
        answers: ["Le temps de travail est flexible", "Le temps de travail est limité", "Le travail est synonyme de temps"],
        correct: 2,
        explanation: "Dans le capitalisme, le travail est souvent mesuré et valorisé en fonction du temps consacré à l'activité."
    },

    // question n°8 :
    {
        question: "Qui a écrit 'Le Capital' ?", 
        answers: ["Marx", "Smith", "Durkheim"], 
        correct: 0, 
        explanation: "Karl Marx a écrit 'Le Capital', où il analyse la relation entre travail, capital et exploitation."
    },

    // question n°9 :
    {
        question: "Quel impact le travail a-t-il sur l'identité selon des études modernes ?",
        answers: ["Il est sans impact", "Il défini l'identité des individus", "Il la limite"],
        correct: 1,
        explanation: "Le travail joue un rôle fondamental dans la définition de l'identité individuelle et personnelle dans le cadre social."
    },

    // question n°10 :
    {
        question: "Quel est le concept de 'travail décent' ?",
        answers: ["Travail sans salaire ", "Un travail respectueux des droits liés à l'emploi", "Travail simplement légal"],
        correct: 1,
        explanation: "Le travail décent fait référence à un emploi qui respecte les droits fondamentaux des travailleurs et assure des conditions de vie dignes."
    },
    
    // question n°11 :
    {
        question: "Quel est le rôle du travail dans le développement personnel ?", 
        answers: ["Aucun rôle", "Il favorise la croissance personnelle", "Il crée des dépendances"], 
        correct: 1, 
        explanation: "Le travail favorise la croissance personnelle en offrant des opportunités d'apprentissage et de progrès."
    },

    // question n°12 :
    { 
        question: "Quel est le lien entre travail et satisfaction personnelle ?", 
        answers: ["Pas de lien", "Le travail peut favoriser la satisfaction", "Aucun impact"], 
        correct: 1, 
        explanation: "Le travail peut contribuer à la satisfaction personnelle, notamment lorsqu'il est aligné avec les passions et les intérêts des individus."
    },

    // question n°13 :
    { 
        question: "Quelle est la concept de 'fordisme' dans le travail ?", 
        answers: ["Production de masse", "Production artisanale", "Aucune standardisation"], 
        correct: 0, 
        explanation: "Le fordisme désigne un modèle de production de masse, caractérisé par des méthodes standardisées et des chaînes de montage."
    },

    // question n°14 :
    { 
        question: "Quel auteur a abordé la question du 'travail et de l'aliénation' ?", 
        answers: ["Engels", "Hegel", "Marx"], 
        correct: 2, 
        explanation: "Karl Marx a analysé comment le travail peut entraîner l'aliénation des travailleurs dans le capitalisme."
    },

    // question n°15 :
    { 
        question: "Quel est le lien entre propriété privée et travail ?", 
        answers: ["Ils sont opposés", "Le travail renforce la propriété", "La propriété n'impact pas le travail"], 
        correct: 1, 
        explanation: "Dans le capitalisme, la propriété privée est souvent renforcée par le travail, en en tirant des bénéfices par l'exploitation des travailleurs."
    },

    // question n°16 :
    { 
        question: "Quelle est l'idée de 'lutte des classes' dans le lien entre travail et société ?", 
        answers: ["Pas de lien", "Les classes se soutiennent", "Les classes luttent pour le contrôle des moyens de production"], 
        correct: 2, 
        explanation: "L'idée de lutte des classes met en avant le conflit entre les classes sociales pour le contrôle des moyens de production."
    },

    // question n°17 :
    { 
        question: "Quelle est la vision de la technique dans la production du travail ?", 
        answers: ["Elle est néfaste", "Elle améliore l'efficacité", "Elle est indépendante"], 
        correct: 1, 
        explanation: "La technique est souvent vue comme un moteur d'amélioration de l'efficacité dans le processus de travail."
    },

    // question n°18 :
    { 
        question: "Qui a introduit le lien entre travail et bonheur ?", 
        answers: ["Marx", "Sartre", "Aristote"], 
        correct: 2, 
        explanation: "Aristote a soutenu que le travail, lorsqu'il est fait avec vertu, contribue au véritable bonheur."
    },

    // question n°19 :
    { 
        question: "Quel est le lien entre travail et société selon les sociologues ?", 
        answers: ["Pas de lien", "Le travail structure les interactions sociales", "Le travail est secondaire"], 
        correct: 1, 
        explanation: "Le travail structure les interactions sociales et contribue à la formation des identités individuelles."
    },

    // question n°20 :
    { 
        question: "Quel est le concept de 'la société de consommation' ?", 
        answers: ["Une société sans travail", "Une société axée sur la production", "Une société qui valorise le travail et le loisir"], 
        correct: 2, 
        explanation: "La société de consommation valorise le travail et le loisir, mettant l'accent sur le plaisir et la satisfaction par la consommation."
    },

    // question n°21 :
    { 
        question: "Quel est le lien entre travail et injustice sociale ?", 
        answers: ["Pas de lien", "Le travail peut renforcer les injustices", "Le travail crée une justice"], 
        correct: 1, 
        explanation: "Le travail peut renforcer les injustices sociales, notamment dans des systèmes exploitants où les droits des travailleurs sont ignorés."
    },

    // question n°22 :
    { 
        question: "Qui a introduit le concept de 'recherche-action' ?", 
        answers: ["Sartre", "Dewey", "Marx"], 
        correct: 1, 
        explanation: "John Dewey a introduit le concept de recherche-action, cherchant à imprégner l'éducation de la responsabilité et de l'action concrètes."
    },

    // question n°23 :
    { 
        question: "Quel est le lien entre urbanisation et travail ?", 
        answers: ["Pas de lien", "L'urbanisation crée des opportunités de travail", "Le travail est passé sous terre"], 
        correct: 1, 
        explanation: "L'urbanisation crée des opportunités de travail en rassemblant des personnes et en développant des infrastructures."
    },
    
    // question n°24 :
    { 
        question: "Quel concept soutient qu'il faut assurer à chaque individu un emploi décent ?", 
        answers: ["Justice sociale", "Droits humains", "Travail décent"], 
        correct: 2, 
        explanation: "'Travail décent' fait référence à un emploi qui garantit des conditions de travail dignes et respectueuses des droits."
    },

    // question n°25 :
    { 
        question: "Quel est le lien entre le travail et les droits des travailleurs ?", 
        answers: ["Pas de lien", "Les droits des travailleurs dépendent du travail", "Les droits des travailleurs sont universels"], 
        correct: 1, 
        explanation: "Les droits des travailleurs sont souvent liés aux conditions de travail et peuvent influencer le type d'emplois disponibles."
    },

    // question n°26 :
    { 
        question: "Quel est l'effet des mouvements ouvriers sur les droits des travailleurs ?", 
        answers: ["Aucun effet", "Ils ont permis des avancées", "Ils sont irréalistes"], 
        correct: 1, 
        explanation: "Les mouvements ouvriers ont eu un impact significatif en faveur des droits des travailleurs, permettant d'instaurer des protections."
    },

    // question n°27 :
    { 
        question: "Quel rôle le travail joue-t-il dans la construction des identités sociales ?", 
        answers: ["Pas de rôle", "Il façonne les statuts sociaux", "Il dégrade les identités"], 
        correct: 1, 
        explanation: "Le travail façonne souvent les statuts sociaux et les identités des individus au sein de la société."
    },

    // question n°28 :
    { 
        question: "Quel lien établit-on entre travail et devoir moral ?", 
        answers: ["Pas de lien", "Le travail est une obligation morale", "Le devoir moral n'inclut pas le travail"], 
        correct: 1, 
        explanation: "De nombreux théoriciens considèrent que le travail est une obligation morale qui contribue au bien-être de la société."
    },

    // question n°29 :
    { 
        question: "Quel est le concept de 'écologie du travail' ?", 
        answers: ["Basée sur les techniques", "Respect de l'environnement dans le cadre du travail", "Combinaison de travail et loisirs"], 
        correct: 1, 
        explanation: "L'écologie du travail prend en compte le respect de l'environnement et la durabilité dans la pratique quotidienne du travail."
    },
 
    // question n°30 :
    { 
        question: "Quel lien entre travail et bonheur existe selon Aristote ?", 
        answers: ["Ils sont opposés", "Le travail peut mener au bonheur", "Le bonheur n'est pas lié au travail"], 
        correct: 1, 
        explanation: "Pour Aristote, le travail, lorsqu'il est orienté vers des fins vertueuses, peut être un moyen d'atteindre le bonheur."
    },
    
    // question n°31 :
    { 
        question: "Qui a introduit le terme 'travail immatériel' ?", 
        answers: ["Marx", "Lazzarato", "Hegel"], 
        correct: 1, 
        explanation: "Maurizio Lazzarato a introduit le concept de 'travail immatériel', englobant des formes de travail qui ne produisent pas forcément des biens matériels."
    },

    // question n°32 :
    { 
        question: "Quel est le lien entre travail et rationalité selon le modèle mercantile ?", 
        answers: ["Ils sont opposés", "Rationalité guide le travail", "Le travail ignore la rationalité"], 
        correct: 1, 
        explanation: "Dans le modèle mercantile, la rationalité guide le travail pour maximiser la productivité et les profits."
    },

    // question n°33 :
    { 
        question: "Quelle est la vision de la technique sur le travail selon Heidegger ?", 
        answers: ["Elle est positive", "Elle alien les travailleurs", "Elle renforce le bonheur"], 
        correct: 1, 
        explanation: "Heidegger a critiqué la technique pour son potentiel d'aliénation des travailleurs, éloignant l'homme de son essence."
    },

    // question n°34 :
    { 
        question: "Quel lien se dessine entre solidarité et travail dans la société moderne ?", 
        answers: ["Aucun lien", "Les valeurs de solidarité façonnent les pratiques de travail", "La solidarité est finalement sans rapport"], 
        correct: 1, 
        explanation: "Les valeurs de solidarité peuvent façonner les pratiques de travail, surtout dans des contextes de travail coopératif."
    },

    // question n°35 :
    { 
        question: "Quel est le rôle de la technique dans le travail moderne ?", 
        answers: ["Aucun rôle", "Elle améliore la productivité", "Elle simplifie les tâches"], 
        correct: 1, 
        explanation: "La technique joue un rôle crucial dans l'amélioration de la productivité et de l'efficacité au travail."
    },

    // question n°36 :
    { 
        question: "Quel est le lien entre travail et pays dans le discours économique ?", 
        answers: ["Pas de lien", "Le travail favorise la diversité des pays", "Le travail influencera le pays d'origine"], 
        correct: 2, 
        explanation: "Le travail influence souvent le développement économique des pays, façonnant leur croissance et leurs valeurs."
    },

    // question n°37 :
    { 
        question: "Quel rôle jouent les normes de travail dans la relation employé-employeur ?", 
        answers: ["Aucun", "Elles régulent les attentes de part et d'autre", "Elles ne sont pas importantes"], 
        correct: 1, 
        explanation: "Les normes de travail régulent les attentes et les droits des employeurs et des employés, maintenant l'équilibre dans la relation."
    },

    // question n°38 :
    { 
        question: "Quel est le lien entre évolution technologique et changement dans le monde du travail ?", 
        answers: ["Pas de lien", "Il y a un lien direct", "La technologie est sans importance"], 
        correct: 1, 
        explanation: "L'évolution technologique a un impact direct sur le changement dans le monde du travail, modifiant les compétences requises et les méthodes."
    },

    // question n°39 :
    { 
        question: "Qui a dit que le 'travail est la clé de l'épanouissement personnel' ?", 
        answers: ["Aristote", "Marx", "Locke"], 
        correct: 0, 
        explanation: "Aristote a exprimé l'idée que le travail, surtout s'il est fait avec vertu, est crucial pour l'épanouissement personnel."
    },

    // question n°40 :
    { 
        question: "Quel est le concept de 'travail collaboratif' dans les sociétés modernes ?", 
        answers: ["L'individualisme", "Le travail en équipe", "Le repli sur soi"], 
        correct: 1, 
        explanation: "Le travail collaboratif se réfère au travail en équipe, favorisant l'échange et l'innovation."
    },

    // question n°41 :
    { 
        question: "Quel est le rôle du travail dans la construction de l'identité sociale ?", 
        answers: ["Aucun", "Il façonne la position sociale", "Il n'est pas pris en compte"], 
        correct: 1, 
        explanation: "Le travail joue un rôle significatif dans la construction de l'identité sociale, en liant un individu à des statuts et des rôles."
    },

    // question n°42 :
    { 
        question: "Quel est l'impact de la productivité sur la notion de travail moderne ?", 
        answers: ["Elle n'a pas d'impact", "Elle favorise la consommation excessive", "Elle est essentielle pour le développement"], 
        correct: 2, 
        explanation: "La productivité est essentielle pour le développement économique et influe sur la manière dont le travail est perçu et organisé."
    },

    // question n°43 :
    { 
        question: "Qui a introduit le terme de 'travail décent' ?", 
        answers: ["OIT", "Marx", "Mill"], 
        correct: 0, 
        explanation: "L'Organisation internationale du travail (OIT) a introduit le terme de 'travail décent' pour promouvoir des droits universels au travail."
    },

    // question n°44 :
    { 
        question: "Quel est le lien entre conditions de travail et bien-être individuel ?", 
        answers: ["Pas de lien", "Les conditions de travail affectent le bien-être", "Les conditions n'ont pas d'importance"], 
        correct: 1, 
        explanation: "De bonnes conditions de travail sont essentielles pour garantir le bien-être des employés, impactant leur satisfaction et motivation."
    },

    // question n°45 :
    { 
        question: "Quel rôle la reconnaissance joue-t-elle dans la satisfaction au travail ?", 
        answers: ["Pas de rôle", "Elle est essentielle pour le moral", "Elle crée des divisions"], 
        correct: 1, 
        explanation: "La reconnaissance est essentielle pour le moral et la satisfaction des employés, influençant leur engagement."
    },

    // question n°46 :
    { 
        question: "Quel est le lien entre travail et aliénation dans la société moderne ?", 
        answers: ["Pas de lien", "Le travail peut rendre les individus aliénés", "Le travail renforce la connexion"], 
        correct: 1, 
        explanation: "Dans la société moderne, le travail peut aliéné les individus, les séparant de la satisfaction qu'ils pourraient tirer de leur activité."
    },

    // question n°47 :
    { 
        question: "Quel est le principal défi du travail à distance ?", 
        answers: ["Aucun défi", "Isolement social", "Efficacité accrue"], 
        correct: 1, 
        explanation: "Le travail à distance présente le défi de l'isolement social, affectant les interactions et la communication entre collègues."
    },

    // question n°48 :
    { 
        question: "Quel lien entre compétence et travail existe ?", 
        answers: ["Pas de lien", "Les compétences définissent la performance au travail", "Elles sont indifférentes"], 
        correct: 1, 
        explanation: "Les compétences sont des déterminants clés de la performance et de l'efficacité dans le monde du travail."
    },

    // question n°49 :
    { 
        question: "Quel est l'impact de la mondialisation sur le travail ?", 
        answers: ["Pas d'impact", "Elle crée des opportunités", "Elle nuit à la justice sociale"], 
        correct: 2, 
        explanation: "La mondialisation a un impact varié sur le travail, créant des inégalités et nuisant à la justice sociale dans certains cas."
    },

    // question n°50 :
    { 
        question: "Quel est le rôle de la créativité dans le monde du travail ?", 
        answers: ["Aucun", "Elle est essentielle pour l'innovation", "Elle limite les processus"], 
        correct: 1, 
        explanation: "La créativité est essentielle pour l'innovation dans le monde du travail, permettant de trouver de nouvelles solutions aux problèmes."
    },

    // question n°51 :
    { 
        question: "Quel est le lien entre l'éthique et la technique dans le contexte du travail ?", 
        answers: ["Ils sont opposés", "La technique doit respecter l'éthique", "L'éthique est sans rapport avec la technique"], 
        correct: 1, 
        explanation: "La technique dans le travail doit être guidée par des valeurs éthiques pour garantir la responsabilité au sein des pratiques."
    },

    // question n°52 :
    { 
        question: "Quel est le rôle de l'empathie dans le milieu de travail ?", 
        answers: ["Pas de rôle", "Elle améliore les relations", "Elle est nuisible"], 
        correct: 1, 
        explanation: "L'empathie améliore les relations interpersonnelles dans le milieu de travail, favorisant la collaboration et la compréhension."
    },

    // question n°53 :
    { 
        question: "Quel impact le travail collaboratif a-t-il sur la créativité ?", 
        answers: ["Aucun impact", "Il peut stimuler la créativité", "Il l'étouffe"], 
        correct: 1, 
        explanation: "Le travail collaboratif stimule souvent la créativité en permettant divers échanges d'idées."
    },

    // question n°54 :
    { 
        question: "Qui a introduit le concept de 'l'influence sociale' sur le travail ?", 
        answers: ["Kahneman", "Emerson", "Bourdieu"], 
        correct: 2, 
        explanation: "Pierre Bourdieu a discuté des influences sociales sur le travail, notamment le capital social et culturel."
    },

    // question n°55 :
    { 
        question: "Quel est le rôle de l'analyse des modalités du travail dans la compréhension du monde moderne ?", 
        answers: ["Pas de rôle", "Elle aide à éclairer les dynamiques sociales", "Elle complique les analyses"], 
        correct: 1, 
        explanation: "L'analyse des modalités du travail permet de mieux comprendre les dynamiques sociales et économiques dans le contexte moderne."
    },

    // question n°56 :
    { 
        question: "Quel est le concept de 'capital humain' dans le domaine du travail ?", 
        answers: ["Capacité à travailler ensemble", "Ensemble de compétences et de connaissances d'un individu", "Un terme désignant l'inutilité"], 
        correct: 1, 
        explanation: "Le capital humain fait référence aux compétences, talents et connaissances qu'un individu apporte au milieu de travail."
    },

    // question n°57 :
    { 
        question: "Quel est le rôle des compétences transversales dans le monde du travail ?", 
        answers: ["Elles sont sans importance", "Elles améliorent l'employabilité", "Elles complicent le travail"], 
        correct: 1, 
        explanation: "Les compétences transversales, comme la communication et le travail en équipe, améliorent l'employabilité dans le monde du travail."
    },

    // question n°58 :
    { 
        question: "Qui a soutenu que l'économie doit être au service du bien commun ?", 
        answers: ["Smith", "Marx", "Hannah Arendt"], 
        correct: 2, 
        explanation: "Hannah Arendt a plaidé pour que l'économie serve le bien commun, reliant le travail à la vie politique."
    },

    // question n°59 :
    { 
        question: "Quel est le lien entre travail et altruisme ?", 
        answers: ["Pas de lien", "Le travail favorise l'altruisme", "L'altruisme nuit au travail"], 
        correct: 1, 
        explanation: "Le travail peut favoriser l'altruisme en encourageant une communauté d'entraide et de soutien."
    },

    // question n°60 :
    { 
        question: "Quel est le lien entre travail et justice sociale ?", 
        answers: ["Pas de lien", "Le travail doit être équitable", "Le travail crée des injustices"], 
        correct: 1, 
        explanation: "La justice sociale exige que le travail soit équitablement distribué, venant compenser les inégalités."
    },

    // question n°61 :
    { 
        question: "Qui a plaidé pour que le travail soit une expérience d'émancipation ?", 
        answers: ["Marx", "Nietzsche", "Sartre"], 
        correct: 0, 
        explanation: "Karl Marx a soutenu que le travail devrait être une expérience d'émancipation personnelle et collective."
    },

    // question n°62 :
    { 
        question: "Quel est le lien entre travail et vocation selon les croyances religieuses ?", 
        answers: ["Passion", "Le travail est un appel divin", "Le travail est indifférent à la spiritualité"], 
        correct: 1, 
        explanation: "Dans de nombreuses croyances religieuses, le travail est considéré comme un appel ou une vocation divine."
    },

    // question n°63 :
    { 
        question: "Quel est le rôle des syndicats dans la défense des droits des travailleurs ?", 
        answers: ["Pas de rôle", "Ils ne sont pas nécessaires", "Ils sont cruciaux pour la protection des droits"], 
        correct: 2, 
        explanation: "Les syndicats jouent un rôle crucial dans la défense des droits des travailleurs et l'amélioration des conditions de travail."
    },

    // question n°64 :
    { 
        question: "Quel est le lien entre travail et rêve américain ?", 
        answers: ["Pas de lien", "Le travail est la clé du succès", "Efforts ne mènent pas à la récompense"], 
        correct: 1, 
        explanation: "Le rêve américain souligne l'idée que le travail acharné mène à la réussite et à l'ascension sociale."
    },

    // question n°65 :
    { 
        question: "Quel auteur a développé la notion de 'travail immatériel' dans le cadre du capitalisme moderne ?", 
        answers: ["Sartre", "Negri", "Harvey"], 
        correct: 1, 
        explanation: "Antonio Negri a développé le concept de 'travail immatériel', caractérisant des formes de travail qui vont au-delà des biens matériels."
    },

    // question n°66 :
    { 
        question: "Quel est le lien entre travail et plaisir dans la pensée moderne ?", 
        answers: ["Ils sont opposés", "Le plaisir peut naître du travail", "Le plaisir n'a rien à voir avec le travail"], 
        correct: 1, 
        explanation: "La pensée contemporaine suggère que le plaisir peut découler du travail, notamment dans des emplois satisfaisants."
    },

    // question n°67 :
    { 
        question: "Quel concept désigne la transition du travail à la maison vers le travail à distance ?", 
        answers: ["Télétravail", "Réduction", "Mobilité professionnelle"], 
        correct: 0, 
        explanation: "Le télétravail se réfère à la pratique de travailler à distance, souvent facilitée par les technologies numériques."
    },

    // question n°68 :
    { 
        question: "Quel est l'impact de la santé mentale sur le travail ?", 
        answers: ["Pas d'impact", "Elle affecte la productivité", "Elle améliore les performances"], 
        correct: 1, 
        explanation: "La santé mentale a un impact significatif sur la productivité et la performance des employés au travail."
    },

    // question n°69 :
    { 
        question: "Qui a plaidé pour l'importance de la recherche-action dans la pratique du travail ?", 
        answers: ["Dewey", "Kant", "Hobbes"], 
        correct: 0, 
        explanation: "John Dewey a plaidé pour l'importance de la recherche-action, intégrant théorie et pratique dans le travail."
    },

    // question n°70 :
    { 
        question: "Quel est le lien entre le travail et la responsabilité sociale ?", 
        answers: ["Pas de lien", "Le travail doit être responsable", "Le travail est sans importance"], 
        correct: 1, 
        explanation: "Le concept de responsabilité sociale dans le travail exige que les individus et les entreprises agissent en faveur du bien-être collectif."
    },

    // question n°71 :
    { 
        question: "Quel est le rôle des politiques publiques dans la régulation des conditions de travail ?", 
        answers: ["Aucun rôle", "Elles régulent et protègent les droits", "Elles sont superflues"], 
        correct: 1, 
        explanation: "Les politiques publiques sont essentielles pour réguler les conditions de travail et protéger les droits des travailleurs."
    },

    // question n°72 :
    { 
        question: "Quel progrès le féminisme a-t-il apporté aux conditions de travail ?", 
        answers: ["Pas de progrès", "Il a limité les droits", "Il a amélioré les droits des femmes"], 
        correct: 2, 
        explanation: "Le féminisme a joué un rôle clé dans l'amélioration des droits des femmes au travail et dans l'égalité des chances."
    },

    // question n°73 :
    { 
        question: "Quel est le rôle de la motivation dans l'atteinte d'objectifs au travail ?", 
        answers: ["Pas de rôle", "Elle est cruciale", "Elle n'a pas d'effet"], 
        correct: 1, 
        explanation: "La motivation est cruciale pour atteindre des objectifs au travail, favorisant l'engagement et la productivité."
    },

    // question n°74 :
    { 
        question: "Quel est le lien entre travail et valeurs sociales ?", 
        answers: ["Ils ne sont pas liés", "Le travail reflète les valeurs", "Le travail ignore les valeurs"], 
        correct: 1, 
        explanation: "Le travail reflète souvent les valeurs sociales d'une communauté et peut influencer ces valeurs à son tour."
    },

    // question n°75 :
    { 
        question: "Quel est l'impact de la précarité sur les conditions de travail ?", 
        answers: ["Pas d'impact", "Elle dégrade les conditions", "Elle améliore les conditions"], 
        correct: 1, 
        explanation: "La précarité dégrade souvent les conditions de travail, créant des incertitudes pour les travailleurs."
    },

    // question n°76 :
    { 
        question: "Quel est le lien entre intégration sociale et emploi ?", 
        answers: ["Pas de lien", "L'emploi peut favoriser l'intégration", "L'intégration ignore l'emploi"], 
        correct: 1, 
        explanation: "L'emploi peut favoriser l'intégration sociale en offrant aux individus un sens d'appartenance et d'activités."
    },

    // question n°77 :
    { 
        question: "Quel est le lien entre évolution des technologies et pénibilité du travail ?", 
        answers: ["Pas de lien", "Technologies augmentent la pénibilité", "Elles réduisent la pénibilité"], 
        correct: 2, 
        explanation: "Les avancées technologiques réduisent souvent la pénibilité du travail en automatisant des tâches lourdes."
    },

    // question n°78 :
    { 
        question: "Quel est le lien entre justice sociale et conditions de travail ?", 
        answers: ["Pas de lien", "Conditions de travail équitables favorisent la justice sociale", "Justice sociale est sans rapport avec le travail"], 
        correct: 1, 
        explanation: "Des conditions de travail équitables sont essentielles pour promouvoir la justice sociale, garantissant des opportunités pour tous."
    },

    // question n°79 :
    { 
        question: "Quel est le lien entre travail et identité professionnelle ?", 
        answers: ["Pas de lien", "Le travail façonne notre identité professionnelle", "L'identité ignore le travail"], 
        correct: 1, 
        explanation: "Le travail façonne souvent notre identité professionnelle, influençant comment nous nous définissons en tant que professionnels."
    },

    // question n°80 :
    { 
        question: "Quel est le lien entre travail à distance et satisfaction au travail ?", 
        answers: ["Pas de lien", "Le travail à distance améliore la satisfaction", "Le travail fixe est le seul moyen de satisfaction"], 
        correct: 1, 
        explanation: "Le travail à distance peut améliorer la satisfaction au travail, offrant plus de flexibilité et d'équilibre entre vie professionnelle et personnelle."
    },

    // question n°81 :
    { 
        question: "Quelle critique est souvent adressée au modèle de travail à la chaîne ?", 
        answers: ["Il est efficace", "Il déshumanise les travailleurs", "Il favorise l'autonomie"], 
        correct: 1, 
        explanation: "Le modèle de travail à la chaîne est souvent critiqué pour déshumaniser les travailleurs en les réduisant à des tâches répétitives."
    }, 

    // question n°82 :
    { 
        question: "Quel est le lien entre travail et liberté selon les sociologues ?", 
        answers: ["Pas de lien", "Le travail peut limiter la liberté", "Le travail n'est jamais important"], 
        correct: 2, 
        explanation: "Les sociologues soutiennent que le travail peut, dans certains contextes, limiter la liberté des individus en créant des dépendances."
    },

    // question n°83 :
    { 
        question: "Quel est le lien entre travail et bonheur selon la psychologie positive ?", 
        answers: ["Pas de lien", "Le travail peut influencer le bonheur", "Le bonheur est uniquement personnel"], 
        correct: 1, 
        explanation: "La psychologie positive reconnaît que le travail peut influencer le bonheur, notamment grâce à la satisfaction et l'engagement."
    },

    // question n°84 :
    { 
        question: "Quel est le lien entre la rémunération et la satisfaction au travail ?", 
        answers: ["Pas de lien", "La rémunération influence la satisfaction", "La satisfaction est sans rapport à la rémunération"], 
        correct: 1, 
        explanation: "La rémunération influence la satisfaction au travail, les employés étant souvent plus satisfaits lorsqu'ils estiment recevoir une compensation équitable."
    },

    // question n°85 :
    { 
        question: "Qui a écrit sur 'l'éthique du travail' ?", 
        answers: ["Max Weber", "Bourdieu", "Marx"], 
        correct: 0, 
        explanation: "Max Weber a analysé l'éthique du travail dans le contexte du protestantisme et son effet sur le développement du capitalisme."
    },

    // question n°86 :
    { 
        question: "Quel est le lien entre travail et évolution sociétale ?", 
        answers: ["Pas de lien", "Le travail façonne l'évolution sociétale", "L'évolution sociétale ignore le travail"], 
        correct: 1, 
        explanation: "Le travail façonne l'évolution sociétale en influençant les structures économiques, politiques et sociales."
    },

    // question n°87 :
    { 
        question: "Quel est le rôle de l'informatique dans le monde du travail moderne ?", 
        answers: ["Aucun rôle", "Elle facilite les processus", "Elle complique les tâches"], 
        correct: 1, 
        explanation: "L'informatique facilite les processus de travail en automatisant des tâches et en améliorant l'efficacité."
    },

    // question n°88 :
    { 
        question: "Quel est le lien entre travail décent et droits de l'homme ?", 
        answers: ["Pas de lien", "Le travail décent est un droit fondamental", "Ils sont opposés"], 
        correct: 1, 
        explanation: "Le travail décent est reconnu comme un droit fondamental des droits de l'homme, garantissant conditions et respect."
    },

    // question n°89 :
    { 
        question: "Quel lien existe entre informatique et travail à distance ?", 
        answers: ["Pas de lien", "L'informatique permet le travail à distance", "Elle limite le travail à distance"], 
        correct: 1, 
        explanation: "L'informatique permet la mise en place du travail à distance, lui donnant un cadre numérique et flexible."
    },

    // question n°90 :
    { 
        question: "Quel impact la reconnaissance au travail a-t-elle sur le moral des employés ?", 
        answers: ["Aucun impact", "Elle améliore le moral", "Elle complique les relations"], 
        correct: 1, 
        explanation: "La reconnaissance au travail est essentielle pour améliorer le moral des employés et favoriser leur satisfaction."
    },

    // question n°91 :
    { 
        question: "Quel est le lien entre profession et statut social ?", 
        answers: ["Aucun lien", "La profession influence le statut social", "Ils sont identiques"], 
        correct: 1, 
        explanation: "La profession a une forte influence sur le statut social d'un individu, déterminant souvent ses opportunités et son ressource."
    },

    // question n°92 :
    { 
        question: "Quel est le lien entre travail et collectif ?", 
        answers: ["Pas de lien", "Le travail est souvent collectif", "Le collectif n'impacte pas le travail"], 
        correct: 1, 
        explanation: "Le travail est souvent collectif et nécessite des contributions et collaborations pour atteindre des résultats."
    },

    // question n°93 :
    { 
        question: "Quel est le lien entre créativité et innovation dans le monde du travail ?", 
        answers: ["Ils sont opposés", "La créativité est clé pour l'innovation", "L'innovation est sans imagination"], 
        correct: 1, 
        explanation: "La créativité est souvent considérée comme la clé pour favoriser l'innovation dans le monde du travail."
    },

    // question n°94 :
    { 
        question: "Quel est le rôle de la performance dans l'évaluation du travail ?", 
        answers: ["Aucun rôle", "Elle détermine des promotions", "Elle est sans pertinence"], 
        correct: 1, 
        explanation: "La performance joue un rôle crucial dans l'évaluation du travail et dans la détermination des promotions et des avancements."
    },

    // question n°95 :
    { 
        question: "Quel est le lien entre travail et migrations ?", 
        answers: ["Pas de lien", "Les migrations influencent le travail disponible", "Les migrations n'ont aucune pertinence dans le travail"], 
        correct: 1, 
        explanation: "Les migrations influencent la disponibilité des emplois et peuvent impacter le marché du travail dans les régions ciblées."
    },

    // question n°96 :
    { 
        question: "Quelle approche analyse les impacts du travail sur le bien-être personnel ?", 
        answers: ["Psychologie positive", "Anthropologie", "Narratologie"], 
        correct: 0, 
        explanation: "La psychologie positive explore comment le travail et l'engagement peuvent influencer le bien-être personnel."
    },

    // question n°97 :
    { 
        question: "Quel est le lien entre emploi et inégalités ?", 
        answers: ["Pas de lien", "L'emploi peut exacerber les inégalités socio-économiques", "L'emploi favorise l'égalité"], 
        correct: 1, 
        explanation: "L'emploi peut exacerber les inégalités socio-économiques, en fonction des opportunités et de l'accès aux ressources."
    },

    // question n°98 :
    { 
        question: "Quel est le rôle de l'éthique du travail dans le monde contemporain ?", 
        answers: ["Aucun rôle", "Elle guide les comportements au sein du travail", "Elle n'a pas d'importance"], 
        correct: 1, 
        explanation: "L'éthique du travail joue un rôle important dans le guidage des comportements et des normes comportementales au sein des pratiques professionnelles."
    },

    // question n°99 :
    { 
        question: "Quel est l'impact de la flexibilité au travail sur la satisfaction des employés ?", 
        answers: ["Aucun impact", "Elle augmente la satisfaction", "Elle réduit la productivité"], 
        correct: 1, 
        explanation: "La flexibilité au travail est souvent liée à une augmentation de la satisfaction des employés, favorisant leur engagement."
    },

    // question n°100 :
    { 
        question: "Quel est le lien entre travail et temps selon les théoriciens modernes ?", 
        answers: ["Ils sont opposés", "Le travail est une mesure du temps", "Le temps influence la qualité du travail"], 
        correct: 2, 
        explanation: "Le temps joue un rôle crucial dans le travail, influençant la qualité, la productivité et le rythme des tâches."
    }
];