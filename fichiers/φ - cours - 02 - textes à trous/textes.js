const texts = [
    "La [psychologie] est l'étude de l'[esprit], des [émotions] et du [comportement] humains, ainsi que des [relations] complexes qui nous influencent au quotidien. Comprendre ces [dynamiques] nous aide à mieux appréhender notre [réalité] et à naviguer dans nos [interactions].", 
    // citation n°1

    "L'[art] est une forme d'[expression] qui touche les [sens] et évoque des [réactions] uniques. Il nous transporte à travers des [mélodies], des [couleurs] et des [formes] qui défient les conventions culturelles et interpellent notre [âme].", 
    // citation n°2

    "La [sociologie] examine les [rapports] humains au sein des [sociétés] contemporaines, mettant en lumière comment la [culture] et les [normes] façonnent notre [comportement] ainsi que nos choix de vie au quotidien.",
    // citation n°3

    "La [musique] possède le pouvoir d'[influencer] nos [émotions], de créer des [souvenirs] profonds et de transformer les [ambiance] au sein de nos [vies]. Les composites et les paroles touchent notre [esprit] et évoquent des moments nostalgiques.",
    // citation n°4

    "L'[éducation] est la clé des [opportunités] dans notre [monde] moderne. Elle favorise la [connaissance], la [compréhension] et l'[esprit] critique, ouvrant des portes vers l'autonomie et l'inclusion de chacun à travers des [valeurs] fondamentales.",
    // citation n°5

    "La [nature] nous rappelle la beauté du [monde] vivant avec ses [paysages] diversifiés, ses [animaux] fascinants et les [écosystèmes] qui interagissent. Elle nous enseigne des leçons sur la [patience], le respect et l'harmonie à travers ses cycles.",
    // citation n°6

    "L'[amour] est un sentiment complexe, constitué de [passion], d'[engagement] et de [partage] réel. Une véritable aventure humaine pleine de [joies] et de défis quotidiens qui enrichit notre existence.",
    // citation n°7

    "La [technologie] redéfinit nos [vies] à travers des [outils] de communication et d'information. Elle nous offre de nouvelles [possibilités] tout en soulevant des questions éthiques qui méritent d'être examinées en profondeur.",
    // citation n°8

    "La [bienveillance] est une valeur fondamentale dans nos [relations] humaines, nous rappelant l'importance de l'[empathie], de la [compassion] et de l'[écoute] attentive envers autrui pour créer des liens sacrés.",
    // citation n°9

    "Le [sport] est un excellent moyen de [développer] la [discipline], la [confiance] et la [cohésion]. Pratiquer une activité physique peut non seulement améliorer notre [santé] physique mais également notre bien-être mental.",
    // citation n°10

    "L'[innovation] est le moteur de [changement] dans notre société moderne. Elle pousse les [individus] à remettre en question les normes établies et à imaginer des [solutions] créatives devant chaque défi rencontré.",
    // citation n°11

    "La [lecture] est une porte d'[entrée] vers d'autres [mondes] et d'autres [croyances]. S'immerger dans un livre enrichit nos [horizons] et stimule notre [imagination] tout en nous ouvrant à de nouvelles perspectives.",
    // citation n°12

    "Le [leadership] repose sur la capacité à inspirer et à guider un groupe vers un [objectif] commun. Un bon leader sait écouter, valoriser les [idées] de chacun et favoriser la [collaboration] au sein de l'équipe.",
    // citation n°13

    "L'[histoire] est un miroir de notre [passé], offrant les clés pour [comprendre] notre [présent] et orienter notre futur. Elle nous apprend que chaque événement historique a façonné nos sociétés modernes.",
    // citation n°14

    "Le [bonheur] est un état d'[être] que chaque [individu] recherche dans sa vie. Il se manifeste souvent à travers des [relations] humaines épanouissantes, le succès personnel et des moments de joie authentique.",
    // citation n°15

    "L'[écologie] étudie les interactions entre les [êtres] vivants et leur [environnement] naturel. Cette science met en lumière les conséquences des actions humaines sur la [nature] et appelle à un changement de comportement.",
    // citation n°16

    "La [découverte] est un moteur de [curiosité] et d'[exploration] dans notre [monde]. Chaque [expérience] nouvelle nous offre des occasions d'apprendre davantage sur notre environnement et notre place dans l'univers.",
    // citation n°17

    "Le [temps] est un concept précieux qui régit notre [existence]. Il nous rappelle que chaque [instant] est unique et éphémère, à apprécier pleinement et savourer les petits plaisirs de la vie.",
    // citation n°18

    "Les [rêves] constituent des manifestations de nos [aspirations] profondes, de nos [désirs] et de nos plus grands espoirs. Ils nous encouragent à agir et à rechercher un sens plus profond dans notre quotidien.",
    // citation n°19

    "La [spiritualité] est un voyage intérieur qui nous connecte à des réalités plus grandes. Ce chemin nous pousse à réfléchir, à explorer des [questions] existentielles et à chercher un sens dans notre existence.",
    // citation n°20

    "L'[engagement] civique est essentiel pour faire entendre nos [voix] dans la [société]. Participer à des initiatives renforce la [communauté] et favorise la prise de conscience sur les enjeux qui nous entourent.",
    // citation n°21

    "L'[espoir] est une lumière dans l'obscurité qui nous pousse à croire en de [meilleurs] jours à venir. Cultiver cet espoir permet de surmonter des [obstacles] et de garder notre foi en l'avenir.",
    // citation n°22

    "La [mémoire] collective façonne notre [identité] culturelle et historique. Elle nous connecte aux [générations] passées et transmet des [enseignements] précieux qui éclairent notre chemin.",
    // citation n°23

    "La [mode] constitue un moyen puissant d'[expression] personnelle, un reflet des [cultures] contemporaines. Elle permet à chacun de se démarquer et d'affirmer son [identité] unique dans un monde diversifié.",
    // citation n°24

    "La [science] est une démarche d'[étude] qui repose sur l'observation et l'expérimentation. Elle nous permet d'explorer les lois de l'Univers, de comprendre notre [existence] et d'améliorer notre qualité de vie.",
    // citation n°25

    "L'[humour] est un antidote à la [tristesse] et à la frustration qui limite les [conflits]. Il favorise les [connections] humaines et peut apporter légèreté et bonheur dans les moments difficiles.",
    // citation n°26

    "L'[optimisme] est une attitude qui nous pousse à voir le [verre] à moitié plein. Cultiver cet esprit positif permet d'affronter les [défis] tout en explorant des [possibilités] nouvelles.",
    // citation n°27

    "Le [changement] est inévitable et souvent difficile à accepter. Cependant, il représente aussi une opportunité de [croissance], qu'elle soit personnelle, sociale ou professionnelle.",
    // citation n°28

    "La [compassion] est la capacité de ressentir la [souffrance] d'autrui et de vouloir apporter du soulagement. Elle favorise des [interactions] humaines empreintes d'empathie et de solidarité.",
    // citation n°29

    "La [méditation] est une pratique qui nous aide à trouver la [tranquillité] d'esprit. Elle permet de [recentrer] nos pensées et de gérer nos [émotions] de manière apaisante.",
    // citation n°30

    "L'[altruisme] est un acte désintéressé qui vise à aider les autres sans rien attendre en retour. Ce [comportement] améliore non seulement la vie des autres, mais aussi notre propre [existence].",
    // citation n°31

    "Les [valeurs] et les [principes] guident nos décisions et nos comportements. Les vivre au quotidien renforce notre [intégrité], nous permettant d'agir en accord avec nos croyances.",
    // citation n°32

    "L'[équilibre] est essentiel pour mener une vie [harmonieuse]. Trouver cet équilibre entre le [travail] et la vie personnelle est un défi, mais une nécessité pour notre [bien-être].",
    // citation n°33

    "La [patience] est une vertu qui demande du [temps] et de l'engagement. Savoir attendre sans frustration et accepter que certains changements nécessitent des [efforts] importants.",
    // citation n°34

    "La [créativité] est le moteur de l'[innovation] et de l'expression artistique. Elle nous permet d'imaginer des [idées] originales et de dépasser les [conventions] dans nos projets.",
    // citation n°35

    "L'[égalité] est un principe fondamental qui garantit les mêmes [droits] et opportunités à toutes les [personnes]. Promouvoir cette valeur est essentiel pour construire des [sociétés] justes et inclusives.",
    // citation n°36

    "La [résilience] est la capacité à rebondir après des [épreuves]. Adopter une attitude résiliente nous aide face aux défis et nous pousse à rester fidèles à nos [objectifs].",
    // citation n°37

    "Les [décisions] que nous prenons façonnent notre [chemin] dans la vie. Nos [choix] ont des conséquences qui impactent non seulement notre avenir, mais aussi celui des autres.",
    // citation n°38

    "La [diversité] enrichit notre [société] en intégrant une variété de [perspectives] et d'expériences uniques. Reconnaître cette richesse favorise l'[inclusion] et l'harmonie au sein de nos communautés.",
    // citation n°39

    "La [nature] nous enseigne des [leçons] cruciales sur la résilience, l'[équilibre] et l'interconnexion de toutes les espèces. Elle rappelle que chaque [élément] est essentiel pour l'ensemble.",
    // citation n°40

    "Le [voyage] est une aventure unique qui élargit nos [horizons]. Chaque [expérience] nous confronte à de nouvelles [cultures], traduisant ainsi notre rapport aux [gens] et aux paysages variés.",
    // citation n°41

    "L'[honnêteté] est une valeur qui renforce la [confiance] dans nos [relations]. Faire preuve de transparence et d'authenticité crée des [liens] solides et durables avec autrui.",
    // citation n°42

    "La [tranquillité] d'esprit est un état recherché par quiconque pour vivre une [vie] équilibrée. Cette tranquillité aide également à gérer le [stress] et savourer les petits [joies].",
    // citation n°43

    "L'[apprentissage] est un processus continu qui débute dès notre [naissance]. Acquérir des [compétences] diverses et développer la curiosité sont essentiels pour notre [épanouissement].",
    // citation n°44

    "La [collaboration] est vitale pour la réalisation de [projets] significatifs. Coopérer ensemble vers un même [objectif] favorise les [liens] qui mènent à des réussites partagées.",
    // citation n°45

    "L'[amitié] est un précieux [cadeau] qui embellit nos [vies]. Elle nous accompagne dans les [moments] de joie ainsi que les épreuves, offrant soutien et réconfort.",
    // citation n°46

    "Le [respect] est au cœur de toutes nos interactions [humaines]. Traiter les [autres] avec dignité fait partie intégrante de la construction de [relations] saines et positives.",
    // citation n°47

    "L'[imagination] est le terrain de jeu de notre [esprit]. Elle nous permet d'inventer, de créer et de penser en dehors des [normes] établies, enrichissant ainsi notre parcours.",
    // citation n°48

    "La [technologie] continue d'influencer nos [vies] à un rythme rapide et changeant. Elle nous offre des [solutions] innovantes, mais entraîne aussi des défis éthiques à prendre en compte.",
    // citation n°49

    "La [réflexion] est cruciale pour notre [croissance]. Prendre le temps d'évaluer nos [choix] et nos [actions] favorise une meilleure compréhension de nous-mêmes et des autres.",
    // citation n°50

    "L'[humanité] est souvent définie par notre capacité à ressentir et à établir des [liens]. C'est cette empathie qui nous unit en tant qu'[espèce] sur cette planète.",
    // citation n°51

    "La [trahison] est l'une des blessures les plus douloureuses que l'on puisse infliger à une [relation]. Cela remet en question la [confiance] et laisse des marques durables.",
    // citation n°52

    "Le [succès] est une notion multiple qui varie d'une [personne] à l'autre. Chaque [individu] définit son propre succès selon ses critères et ses aspirations personnelles.",
    // citation n°53

    "La [générosité] est un acte pur de [don] qui élève à la fois celui qui donne et celui qui reçoit. Elle crée un sentiment d'[abondance] dans nos vies au sein de nos échanges.",
    // citation n°54

    "La [persévérance] est la qualité qui nous permet de continuer, même face aux [obstacles]. En surmontant nos épreuves avec détermination, nous prouvons que rien n'est impossible.",
    // citation n°55

    "Le [respect] de soi est fondamental pour construire une [image] positive. Acceptons-nous tel que nous sommes, le renforcement de l'[estime] de soi favorise une plus grande confiance.",
    // citation n°56

    "La [curiosité] est l'énergie motrice de l'[apprentissage] et de la découverte. Elle incite chaque [individu] à explorer, à poser des [questions] et à découvrir de nouvelles idées.",
    // citation n°57

    "Le [sentiment] d'appartenance est essentiel pour notre [bien-être] social. Établir des [connexions] authentiques avec les autres favorise un climat de solidarité dans notre communauté.",
    // citation n°58

    "La [philosophie] de vie que l'on choisit influe profondément sur notre manière de percevoir le [monde]. Chaque [croyance] façonne nos habitudes et guide nos réponses face aux défis.",
    // citation n°59

    "La [spontanéité] infuse une énergie nouvelle dans notre quotidien souvent [prévisible]. Être réceptif aux moments de surprise et saisir des [occasions] enrichit notre existence.",
    // citation n°60

    "Le [dialogue] est crucial pour résoudre des [conflits] et établir des relations saines. Écouter les autres nous aide à créer un pont vers une meilleure [compréhension] mutuelle.",
    // citation n°61

    "L'[authenticité] est la capacité d'être vrai envers soi-même et les [autres]. Être authentique dans toutes nos [relations] est essentiel pour construire la confiance et l'honnêteté.",
    // citation n°62

    "Le [travail] d'équipe est indispensable pour atteindre des [objectifs] communs et réaliser des projets ambitieux. Chaque membre contribue avec ses [compétences] uniques qui enrichissent le processus.",
    // citation n°63

    "La [nature] nous rappelle l'importance de chaque [élément] dans l'équilibre de notre écosystème. Elle nous enseigne que la diversité des [espèces] est essentielle à la survie de la planète.",
    // citation n°64

    "Le [progrès] humain repose sur notre capacité à innover et à améliorer notre [condition] de vie. Chaque avancée contribue positivement à notre [futur] et à celui de nos enfants.",
    // citation n°65

    "Le [plaisir] des petites choses de la [vie] quotidienne nous rappelle d'apprécier chaque [instant]. Que ce soit un bon repas ou une douce mélodie, ces joies enrichissent notre existence.",
    // citation n°66

    "L'[optimisme] est une attitude qui nous pousse à voir le [verre] à moitié plein. Cultiver cette vision positive permet d'affronter les [épreuves] avec force et confiance.",
    // citation n°67

    "L'[excellence] est une quête permanente pour nous [surpasser] dans toutes nos actions. Chercher à être le meilleur dans nos différents domaines enrichit notre parcours de vie.",
    // citation n°68

    "La [santé] mentale est une composante essentielle de notre [bien-être] global. Prendre soin de notre esprit est aussi crucial que veiller sur notre santé physique et sociale.",
    // citation n°69

    "La [nostalgie] évoque des souvenirs du [passé] qui peuvent mélanger joie et mélancolie. Accepter ces sentiments fait partie intégrante de notre expérience humaine.",
    // citation n°70

    "La [littérature] nous ouvre des portes vers des [univers] infinis d'imaginaire et de sagesse. Les auteurs nous racontent des [histoires] qui enrichissent notre esprit et notre moralité.",
    // citation n°71

    "L'[acceptation] est une étape cruciale dans le processus de la [guérison]. Apprendre à accueillir ce qui ne peut être changé est essentiel pour avancer sereinement dans nos vies.",
    // citation n°72

    "La [responsabilité] envers nous-mêmes et les [autres] est primordiale. Chaque [action] a des conséquences, il est donc fondamental d'en être conscient et d'agir en conséquence.",
    // citation n°73

];