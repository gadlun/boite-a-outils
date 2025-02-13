const questions = [
    // question n°1 :
    { 
        question: "Quelle est la définition principale du langage selon les philosophes ?", 
        answers: ["Un moyen de communication verbal", "Un ensemble de symboles permettant la pensée", "Un outil pour manipuler les autres"], 
        correct: 1, 
        explanation: "Le langage est souvent considéré comme un ensemble de symboles qui permettent d'exprimer des pensées et des idées."
    },
    
    // question n°2 :
    { 
        question: "Qui est le philosophe célèbre pour ses travaux sur le langage et la signification ?", 
        answers: ["Platon", "Saussure", "Hegel"], 
        correct: 1, 
        explanation: "Ferdinand de Saussure est célèbre pour ses théories sur la linguistique et la structure du langage."
    },
    
    // question n°3 :
    { 
        question: "Quel concept désigne le fait que le langage façonne notre perception de la réalité ?", 
        answers: ["Le relativisme linguistique", "Le déterminisme linguistique", "La polysémie"], 
        correct: 1, 
        explanation: "Le déterminisme linguistique suggère que le langage limite et structure notre manière de penser et de percevoir le monde."
    },
    
    // question n°4 :
    { 
        question: "Quelle affirmation résume l'argument de Wittgenstein sur le langage ?", 
        answers: ["Le langage est une représentation fidèle de la réalité", "Le langage est incompréhensible sans contexte", "Les limites de mon langage signifient les limites de mon monde"], 
        correct: 2, 
        explanation: "Wittgenstein a soutenu que notre compréhension du monde est étroitement liée à notre capacité d'exprimer nos pensées par le langage."
    },
    
    // question n°5 :
    { 
        question: "Quel auteur a écrit 'Le langage et la pensée' ?", 
        answers: ["Socrate", "Locke", "Déleuze"], 
        correct: 1, 
        explanation: "John Locke a exploré la relation entre le langage et la pensée dans ses écrits philosophiques."
    },
    
    // question n°6 :
    { 
        question: "Selon Platon, quel est le lien entre le langage et la vérité ?", 
        answers: ["Le langage est toujours vrai", "Le langage peut ne pas refléter la vérité", "Le langage est la vérité"], 
        correct: 1, 
        explanation: "Platon croyait que le langage pouvait être trompeur et ne reflétait pas nécessairement la vérité."
    },
    
    // question n°7 :
    { 
        question: "Qui a introduit le concept de 'jeux de langage' ?", 
        answers: ["Wittgenstein", "Heidegger", "Kant"], 
        correct: 0, 
        explanation: "Wittgenstein a utilisé l'idée de jeux de langage pour illustrer comment le sens des mots varie selon le contexte."
    },
    
    // question n°8 :
    { 
        question: "Quel mouvement philosophique s'intéresse à la façon dont le langage crée la réalité ?", 
        answers: ["Le positivisme", "Le constructivisme", "L'existentialisme"], 
        correct: 1, 
        explanation: "Le constructivisme soutient que notre compréhension du monde est façonnée par le langage que nous utilisons."
    },
    
    // question n°9 :
    { 
        question: "Quel texte de Rousseau critique la langue écrite ?", 
        answers: ["Du Contrat Social", "Émile", "De l'origine et des fondements de l'inégalité entre les hommes"], 
        correct: 1, 
        explanation: "Rousseau, dans 'Émile', aborde les défauts de la langue écrite et valorise la langue parlée."
    },
    
    // question n°10 :
    { 
        question: "Quelle théorie soutient que la langue influence notre pensée et notre cognition ?", 
        answers: ["Théorie radicale", "Théorie intégrative", "Théorie du choix"], 
        correct: 0, 
        explanation: "La théorie radicale suggère que notre langage détermine notre pensée, ce qui a des implications profondes en philosophie."
    },
    
    // question n°11 :
    { 
        question: "Quel philosophe a soutenu que le langage est intrinsèquement lié à notre existence sociale ?", 
        answers: ["Hegel", "Sartre", "Lévinas"], 
        correct: 0, 
        explanation: "Hegel soutient que le langage est social et que notre existence se développe à travers la communication humaine."
    },
    
    // question n°12 :
    { 
        question: "Qu'est-ce que la théorie de la 'sociolinguistique' ?", 
        answers: ["L'étude des mots", "L'étude des dialectes", "L'étude des relations entre le langage et la société"], 
        correct: 2, 
        explanation: "La sociolinguistique explore comment le langage varie et change à travers les contextes sociaux."
    },
    
    // question n°13 :
    { 
        question: "Qui est connu pour ses travaux sur les actes de langage ?", 
        answers: ["Jacques Derrida", "J.L. Austin", "Henri Bergson"], 
        correct: 1, 
        explanation: "J.L. Austin est reconnu pour son analyse des actes de langage et de leur fonction communicative."
    },
    
    // question n°14 :
    { 
        question: "Quel courant philosophique s'intéresse au langage comme outil d'exclusion sociale ?", 
        answers: ["Structuralisme", "Marxisme", "Post-structuralisme"], 
        correct: 1, 
        explanation: "Le marxisme interroge la façon dont le langage peut servir à maintenir des rapports de domination sociale."
    },
    
    // question n°15 :
    { 
        question: "Quel auteur a écrit 'Le langage universel' ?", 
        answers: ["Lévi-Strauss", "Wittgenstein", "Bertrand Russell"], 
        correct: 2, 
        explanation: "Bertrand Russell a analysé le concept de langage universel dans ses réflexions philosophiques."
    },
    
    // question n°16 :
    { 
        question: "Quelle est la position de Nietzsche sur le langage ?", 
        answers: ["Il est un instrument fidèle de la vérité", "Il peut déformer la réalité", "Il est sans valeur"], 
        correct: 1, 
        explanation: "Nietzsche a critiqué le langage pour sa capacité à déformer et à truquer notre perception de la réalité."
    },
    
    // question n°17 :
    { 
        question: "Selon Hegel, quel est le rôle du langage dans la conscience de soi ?", 
        answers: ["Il est superflu", "Il est essentiel", "Il est restrictif"], 
        correct: 1, 
        explanation: "Hegel a affirmé que le langage joue un rôle fondamental dans le développement de la conscience de soi et de l'auto-compréhension."
    },
    
    // question n°18 :
    { 
        question: "Quel est l'impact du langage sur l'identité selon le constructivisme ?", 
        answers: ["Il n'a pas d'impact", "Il façonne notre perception de soi", "Il est principalement culturel"], 
        correct: 1, 
        explanation: "Le constructivisme soutient que notre identité est en grande partie façonnée par le langage que nous utilisons."
    },
    
    // question n°19 :
    { 
        question: "Lequel des philosophes suivants a abordé la question de l'herméneutique ?", 
        answers: ["Ricoeur", "Derrida", "Bergson"], 
        correct: 0, 
        explanation: "Paul Ricoeur a contribué de manière significative à la philosophie herméneutique, surtout en lien avec le texte et son interprétation."
    },
    
    // question n°20 :
    { 
        question: "Qu'est-ce que le langage ordinaire selon Wittgenstein ?", 
        answers: ["Un langage simplifié", "Le langage quotidien", "Un langage philosophique"], 
        correct: 1, 
        explanation: "Wittgenstein prône l'idée d'utiliser le langage ordinaire pour résoudre des problèmes philosophiques."
    },
    
    // question n°21 :
    { 
        question: "Quel lien fait-on entre langage et pouvoir dans les théories postcoloniales ?", 
        answers: ["Langage comme outil de domination", "Langage comme moyen d'unité", "Langage comme dépendant du contexte"], 
        correct: 0, 
        explanation: "Les théoriciens postcoloniaux analysent comment le langage a été utilisé pour maintenir des structures de domination."
    },
    
    // question n°22 :
    { 
        question: "Quel est l'impact des médias sur le langage moderne ?", 
        answers: ["Ils uniformisent le langage", "Ils enrichissent le vocabulaire", "Ils n'ont aucun impact"], 
        correct: 1, 
        explanation: "Les médias influencent largement notre vocabulaire et nos modes d'expression, rendant certains mots courants ou en vogue."
    },
    
    // question n°23 :
    { 
        question: "Quel est le concept de 'polysemy' ?", 
        answers: ["Un seul sens pour un mot", "Plusieurs significations pour un mot", "Un langage limité"], 
        correct: 1, 
        explanation: "La polysémie désigne le fait qu'un mot peut avoir plusieurs significations, selon le contexte."
    },
    
    // question n°24 :
    { 
        question: "Qui a découvert le 'critique du langage' dans le discours féministe ?", 
        answers: ["Cixous", "Irigaray", "Kristeva"], 
        correct: 1, 
        explanation: "Luce Irigaray a été importante en critiquant la manière dont le langage a été historiquement masculinisé."
    },
    
    // question n°25 :
    { 
        question: "Quel auteur a écrit 'La critique de la raison pure' ?", 
        answers: ["Hume", "Kant", "Descartes"], 
        correct: 1, 
        explanation: "Immanuel Kant a exploré les limites de la raison et du langage dans son œuvre majeure."
    },
    
    // question n°26 :
    { 
        question: "Quel est le but de la 'sémantique formelle' ?", 
        answers: ["Étudier les symboles", "Analyser la logique du langage", "Développer de nouveaux langages"], 
        correct: 1, 
        explanation: "La sémantique formelle tente d'établir une relation logique entre le langage et sa signification."
    },
    
    // question n°27 :
    { 
        question: "Selon le structuralisme, qu'est-ce qui crée le sens dans le langage ?", 
        answers: ["L'histoire personnelle", "Les oppositions binaires", "Le contexte social"], 
        correct: 1, 
        explanation: "Le structuralisme analyse les structures sous-jacentes et les oppositions binaires qui façonnent les significations."
    },
    
    // question n°28 :
    { 
        question: "Quel est le but de l'analyse du discours en linguistique ?", 
        answers: ["Comprendre la grammaire", "Étudier les interactions sociales à travers le langage", "Développer de nouveaux langages"], 
        correct: 1, 
        explanation: "L'analyse du discours vise à examiner comment le langage est utilisé dans différents contextes sociaux et culturels."
    },
    
    // question n°29 :
    { 
        question: "Qui a dit que 'le véritable langage' est dialogique ?", 
        answers: ["Bakhtine", "Derrida", "Heidegger"], 
        correct: 0, 
        explanation: "Mikhail Bakhtine a souligné que le langage authentique se manifeste dans le dialogue et l'interaction."
    },
    
    // question n°30 :
    { 
        question: "Quel lien existe entre langage et mémoire selon les recherches en psychologie ?", 
        answers: ["Aucun lien", "Elle l'influence", "Elle le freine"], 
        correct: 1, 
        explanation: "Le langage a un rôle crucial dans le processus de mémorisation et peut influencer comment les souvenirs sont rappelés."
    },
    
    // question n°31 :
    { 
        question: "Quelle position soutient que le langage est un processus social construit ?", 
        answers: ["Le langagisme", "Le structuralisme", "Le déterminisme linguistique"], 
        correct: 0, 
        explanation: "Le langagisme est une approche qui considère le langage comme un produit des structures sociales et historiques."
    },
    
    // question n°32 :
    { 
        question: "Quel concept désigne l'idée que la signification d'un mot peut changer au fil du temps ?", 
        answers: ["Sémantique historique", "Étymologie", "Connotation"], 
        correct: 0, 
        explanation: "La sémantique historique étudie comment les significations des mots évoluent avec le temps."
    },
    
    // question n°33 :
    { 
        question: "Quel est le rôle de la métaphore dans le langage ?", 
        answers: ["Elle déforme les idées", "Elle aide à comprendre des concepts complexes", "Elle est inutile"], 
        correct: 1, 
        explanation: "Les métaphores facilitent la compréhension de concepts abstraits en les rendant plus concrets."
    },
    
    // question n°34 :
    { 
        question: "Quel est le terme qui désigne l'étude de la structure des phrases ?", 
        answers: ["Sémantique", "Syntaxe", "Phonétique"], 
        correct: 1, 
        explanation: "La syntaxe est la branche de la linguistique qui étudie la manière dont les phrases sont construites."
    },
    
    // question n°35 :
    { 
        question: "Qui a développé la théorie de la grammaire générative ?", 
        answers: ["Chomsky", "Saussure", "Skinner"], 
        correct: 0, 
        explanation: "Noam Chomsky a proposé la grammaire générative, révolutionnant la compréhension des structures linguistiques."
    },
    
    // question n°36 :
    { 
        question: "Quel auteur a introduit le concept de l'implicite dans le discours ?", 
        answers: ["Austin", "Searle", "Grice"], 
        correct: 2, 
        explanation: "Herbert Paul Grice a proposé le principe de coopération, expliquant comment le sens implicite est généré dans la conversation."
    },
    
    // question n°37 :
    { 
        question: "Qu'est-ce que la 'linguistique critique' ?", 
        answers: ["L'étude des langues anciennes", "L'examen des contenus politiques et sociaux dans le langage", "L'analyse technologique du langage"], 
        correct: 1, 
        explanation: "La linguistique critique analyse comment le langage est utilisé pour maintenir le pouvoir et l'inégalité dans la société."
    },
    
    // question n°38 :
    { 
        question: "Quel rôle joue le langage dans les pratiques culturelles ?", 
        answers: ["Il est secondaire", "Il donne forme aux interactions culturelles", "Il crée des conflits"], 
        correct: 1, 
        explanation: "Le langage joue un rôle essentiel dans le façonnement et la transmission des pratiques culturelles au sein d'une communauté."
    },
    
    // question n°39 :
    { 
        question: "Quel lien existe entre langage et cognition selon les psychologues ?", 
        answers: ["Langage et cognition sont indépendants", "Le langage limite la cognition", "Le langage et la cognition sont intimement liés"], 
        correct: 2, 
        explanation: "Les psychologues soutiennent souvent que le langage influence la cognition et les processus de pensée."
    },
    
    // question n°40 :
    { 
        question: "Qui a dit que 'le discours est un acte de liberté' ?", 
        answers: ["Kant", "Sartre", "Derrida"], 
        correct: 1, 
        explanation: "Sartre a affirmé que le discours est un acte de liberté et de revendication d'identité et d'existence."
    },
    
    // question n°41 :
    { 
        question: "Quelle est la fonction symbolique du langage selon Ferdinand de Saussure ?", 
        answers: ["Il représente des objets", "Il est un outil de communication", "Il exprime des sentiments"], 
        correct: 0, 
        explanation: "Saussure a soutenu que le langage fonctionne comme un système de signes qui représente des objets et des concepts."
    },
    
    // question n°42 :
    { 
        question: "Quel est l'impact des dialectes sur la perception du langage ?", 
        answers: ["Ils sont insignifiants", "Ils enrichissent la langue", "Ils créent des divisions sociales"], 
        correct: 2, 
        explanation: "Les dialectes peuvent affecter les perceptions sociales et contribuer à des stéréotypes liés à l'identité linguistique."
    },
    
    // question n°43 :
    { 
        question: "Qu'est-ce que le fruit de l'évolution du langage dans l'histoire selon les linguistes ?", 
        answers: ["Il n'a pas évolué", "Il est statique", "Il change constamment"], 
        correct: 2, 
        explanation: "Les linguistes s'accordent à dire que le langage est un système dynamique qui évolue avec la culture et la société."
    },
    
    // question n°44 :
    { 
        question: "Quel est le lien entre langage et émotions dans la théorie des émotions ?", 
        answers: ["Aucun lien", "Le langage exprime uniquement des émotions", "Le langage peut influencer l'expression émotionnelle"], 
        correct: 2, 
        explanation: "Le langage peut influencer la manière dont les émotions sont exprimées et perçues dans différentes cultures."
    },
    
    // question n°45 :
    { 
        question: "Quel est le rôle de l'analyse conversationnelle ?", 
        answers: ["Étudier les règles grammaticales", "Analyser la structure des dialogues", "Développer un nouveau langage"], 
        correct: 1, 
        explanation: "L'analyse conversationnelle vise à étudier les structures et les dynamiques des échanges verbaux entre individus."
    },
    
    // question n°46 :
    { 
        question: "Qui a écrit 'Langage et culture' ?", 
        answers: ["Sapir", "Whorf", "Chomsky"], 
        correct: 0, 
        explanation: "Edward Sapir a exploré les relations entre langage et culture dans ses célèbres travaux ethnolinguistiques."
    },
    
    // question n°47 :
    { 
        question: "Quel est le rôle des connotations dans le langage ?", 
        answers: ["Elles ajoutent un sens supplémentaire", "Elles sont inutiles", "Elles diffèrent d'une culture à une autre"], 
        correct: 0, 
        explanation: "Les connotations font référence aux significations associées et aux implications sous-jacentes d'un mot, en plus de sa signification littérale."
    },
    
    // question n°48 :
    { 
        question: "Quelle affirmation est vraie au sujet de la 'théorie des actes de langage' ?", 
        answers: ["Le langage n'est qu'un moyen de communication", "Tout énoncé a des conséquences", "Elle ne s'applique qu'aux langues écrites"], 
        correct: 1, 
        explanation: "La théorie des actes de langage propose que chaque énoncé est un acte qui a des conséquences sur la communication."
    },
    
    // question n°49 :
    { 
        question: "Qui a introduit la notion d’ 'ellipses' dans le discours ?", 
        answers: ["Grice", "Bakhtine", "Derrida"], 
        correct: 0, 
        explanation: "Herbert Grice a introduit la notion d'ellipses pour décrire les omissions dans le langage qui affectent le sens."
    },
    
    // question n°50 :
    { 
        question: "Quel est l'impact des préjugés linguistiques sur le jugement social ?", 
        answers: ["Ils n'ont aucun impact", "Ils renforcent l'équité", "Ils peuvent créer des stéréotypes"], 
        correct: 2, 
        explanation: "Les préjugés linguistiques peuvent conduire à des jugements trop hâtifs et à des stéréotypes basés sur le langage utilisé."
    },
    
    // question n°51 :
    { 
        question: "Quel auteur a abordé le thème de la déconstruction du langage ?", 
        answers: ["Derrida", "Foucault", "Platon"], 
        correct: 0, 
        explanation: "Jacques Derrida a développé le concept de déconstruction, qui implique la dissociation des significations du langage."
    },
    
    // question n°52 :
    { 
        question: "Quel est le concept qui désigne l'absence de langage chez certaines espèces animales ?", 
        answers: ["L'alope", "La déficience linguistique", "La non-sociabilité"], 
        correct: 0, 
        explanation: "L'alope fait référence à une incapacité approfondie d'expression par le langage dans certaines espèces ou situations."
    },
    
    // question n°53 :
    { 
        question: "Quelle est la fonction principale de la rhétorique dans le langage ?", 
        answers: ["Manipuler le langage", "Instruire", "Convaincre"], 
        correct: 2, 
        explanation: "La rhétorique utilise le langage pour persuader et convaincre les auditeurs de certaines idées ou opinions."
    },
    
    // question n°54 :
    { 
        question: "Qu'est-ce que la 'linguistique de corpus' ?", 
        answers: ["Étudier les règles de grammaire", "Étudier le langage par le biais de grands ensembles textuels", "Développer une théorie du langage"], 
        correct: 1, 
        explanation: "La linguistique de corpus se concentre sur l'analyse du langage en examinant des bases de données de textes authentiques."
    },
    
    // question n°55 :
    { 
        question: "Quel phénomène désigne l'intégration de nouveaux mots par une langue ?", 
        answers: ["Le néologisme", "La polysemy", "L'emprunt"], 
        correct: 0, 
        explanation: "Le néologisme désigne le processus d'introduction et d'usage de nouveaux mots dans une langue."
    },
    
    // question n°56 :
    { 
        question: "Quel est le rôle du 'feeling' dans l'utilisation du langage ?", 
        answers: ["Il est secondaire", "Il influence la façon dont nous communiquons", "Il n'a aucun impact"], 
        correct: 1, 
        explanation: "Le 'feeling', ou la sensibilité, joue un rôle essentiel dans la manière dont les individus expriment leurs idées et leurs émotions."
    },
    
    // question n°57 :
    { 
        question: "Quel est le lien entre le langage et la créativité ?", 
        answers: ["Ils sont opposés", "Le langage enrichit la créativité", "La créativité limite le langage"], 
        correct: 1, 
        explanation: "Le langage offre les outils nécessaires pour exprimer des idées novatrices et créatives chez les individus."
    },
    
    // question n°58 :
    { 
        question: "Quel est le lien entre langage et culture dans le cadre du relativisme culturel ?", 
        answers: ["Ils sont indépendants", "Le langage façonne la culture", "La culture façonne le langage"], 
        correct: 2, 
        explanation: "Le relativisme culturel soutient que la culture d'un groupe influence le langage, façonnant ainsi les structures linguistiques."
    },
    
    // question n°59 :
    { 
        question: "Que signifie le terme 'signifié' dans la théorie sémiotique ?", 
        answers: ["Le son du mot", "Le concept associé à un mot", "Le symbole écrit"], 
        correct: 1, 
        explanation: "Dans la sémiotique, le signifié désigne le concept ou l'idée auquel un mot fait référence."
    },
    
    // question n°60 :
    { 
        question: "Qui a formulé l'idée que le langage est un système de signes ?", 
        answers: ["Saussure", "Chomsky", "Peirce"], 
        correct: 0, 
        explanation: "Ferdinand de Saussure a proposé que le langage fonctionne comme un système de signes, avec des relations entre signifiants et signifiés."
    },
    
    // question n°61 :
    { 
        question: "Qui a introduit le concept de 'langue comme un acte performatif' ?", 
        answers: ["Austin", "Derrida", "Habermas"], 
        correct: 0, 
        explanation: "J.L. Austin a proposé que certaines déclarations ne sont pas seulement descriptives, mais qu'elles effectuent quelque chose."
    },
    
    // question n°62 :
    { 
        question: "Quel est l'objectif principal de l'analyse du discours ?", 
        answers: ["Étudier les inégalités linguistiques", "Examiner des interactions sociales à travers le langage", "Traduire des langues"], 
        correct: 1, 
        explanation: "L'analyse du discours vise à comprendre comment le langage est utilisé dans les interactions sociales, et comment il reflète des relations de pouvoir."
    },
    
    // question n°63 :
    { 
        question: "Quelle affirmation résume l'approche structuraliste du langage ?", 
        answers: ["Le sens est dynamique", "Le sens est statique", "Le langage est isolé"], 
        correct: 0, 
        explanation: "L'approche structuraliste soutient que le sens des mots et de leur utilisation évolue en fonction des contextes sociaux et culturels."
    },
    
    // question n°64 :
    { 
        question: "Quel est le concept de 'recursion' dans le langage ?", 
        answers: ["La répétition de mots", "La capacité d'une langue à créer des structures infinies", "La variation des accents"], 
        correct: 1, 
        explanation: "La récursion se réfère à la capacité d'une langue d'utiliser des règles grammaticales pour former des phrases de manière infinie."
    },
    
    // question n°65 :
    { 
        question: "Quel est le rôle de la phonétique dans l'étude du langage ?", 
        answers: ["Analyse des significations", "Étude des sons", "Évaluation des discours"], 
        correct: 1, 
        explanation: "La phonétique se concentre sur l'étude des sons du langage, y compris leur articulation et leur perception."
    },
    
    // question n°66 :
    { 
        question: "Quel est le lien entre la linguistique et la psychologie dans l'étude du langage ?", 
        answers: ["Ils sont indépendants", "Ils se complètent", "Ils sont opposés"], 
        correct: 1, 
        explanation: "La linguistique et la psychologie se complètent, car la psychologie étudie la façon dont le langage est compris et utilisé dans l'esprit humain."
    },
    
    // question n°67 :
    { 
        question: "Quel auteur est connu pour ses études sur la linguistique générative ?", 
        answers: ["Chomsky", "Saussure", "Bakhtine"], 
        correct: 0, 
        explanation: "Noam Chomsky est célèbre pour ses travaux révolutionnaires sur la linguistique générative, qui modèlent les systèmes langagiers."
    },
    
    // question n°68 :
    { 
        question: "Quel est le lien entre langage et sujet selon l'approche psychanalytique ?", 
        answers: ["Le langage est inventé", "Le langage est une construction subjective", "Le langage livre la vérité"], 
        correct: 1, 
        explanation: "L'approche psychanalytique considère que le langage est une construction subjective qui structure la manière dont les individus perçoivent le monde."
    },
    
    // question n°69 :
    { 
        question: "Quel impact la culture a-t-elle sur la formation du langage ?", 
        answers: ["Elle est négligeable", "Elle influence la langue et son usage", "Elle ne change pas le langage"], 
        correct: 1, 
        explanation: "La culture influence le langage en façonnant les manières de parler, les dialectes et les significations des mots."
    },
    
    // question n°70 :
    { 
        question: "Qui a discuté la notion de 'l'importance de la langue' pour la pensée dans ses écrits ?", 
        answers: ["Wittgenstein", "Freud", "Heidegger"], 
        correct: 0, 
        explanation: "Wittgenstein a abordé l'importance de la langue et de ses limites dans la construction de la pensée."
    },
    
    // question n°71 :
    { 
        question: "Qu'est-ce que le 'linguistique cognitif' ?", 
        answers: ["Une approche sur la grammaire", "Une approche mettant l'accent sur la relation entre langage et cognition", "Une étude des parlers"], 
        correct: 1, 
        explanation: "La linguistique cognitive étudie comment le langage est lié à la cognition et à la manière dont les individus comprennent le monde."
    },
    
    // question n°72 :
    { 
        question: "Quel est le lien entre langage et éthique selon certains penseurs ?", 
        answers: ["Ils sont opposés", "Le langage informé l'éthique", "Il n'y a aucun lien"], 
        correct: 1, 
        explanation: "La manière dont le langage est utilisé peut influencer les conceptions éthiques et morales dans une société."
    },
    
    // question n°73 :
    { 
        question: "Qui a défini le rapport entre langage et société ?", 
        answers: ["Sociolinguistes", "Philosophes", "Linguistes traditionnels"], 
        correct: 0, 
        explanation: "Les sociolinguistes se concentrent sur les interactions entre le langage et les structures sociales."
    },
    
    // question n°74 :
    { 
        question: "Quel auteur a écrit des réflexions sur le langage dans 'Times of Change' ?", 
        answers: ["Whitehead", "Habermas", "Lyotard"], 
        correct: 1, 
        explanation: "Jürgen Habermas aborde les liens entre langage, société et temps dans plusieurs de ses ouvrages."
    },
    
    // question n°75 :
    { 
        question: "Qu'est-ce que la 'seconde langue' ?", 
        answers: ["Langue maternelle", "Langue étrangère apprise", "Langue de caractère symbolique"], 
        correct: 1, 
        explanation: "Une seconde langue désigne une langue qui est apprise après la langue maternelle et qui est souvent utilisée dans un contexte différent."
    },
    
    // question n°76 :
    { 
        question: "Quelle est la critique principale de la théorie du déterminisme linguistique ?", 
        answers: ["Elle est trop vaste", "Elle est trop restrictive", "Elle est réfutée"], 
        correct: 1, 
        explanation: "La théorie du déterminisme linguistique est souvent critiquée pour son implication que le langage restreint la pensée et la perception."
    },
    
    // question n°77 :
    { 
        question: "Quel effet la langue a-t-elle sur l'identité personnelle ?", 
        answers: ["Aucun effet", "Elle influence la perception de soi", "Elle va à l'encontre de l'identité"], 
        correct: 1, 
        explanation: "La langue peut influencer la manière dont un individu se perçoit et se définit, affectant ainsi son identité."
    },
    
    // question n°78 :
    { 
        question: "Quel est le lien entre écriture et langage oral ?", 
        answers: ["Ils sont opposés", "Ils sont complémentaires", "L'écriture annule le langage oral"], 
        correct: 1, 
        explanation: "L'écriture et le langage oral interagissent et se complètent, chacun renforçant la compréhension de l'autre."
    },
    
    // question n°79 :
    { 
        question: "Quel concept lié à la perception joue un rôle dans la bienveillance du langage ?", 
        answers: ["Contexte", "Normes", "Limites"], 
        correct: 0, 
        explanation: "Le contexte joue un rôle essentiel dans la façon dont le langage est perçu et interprété."
    },

    // question n°80 :
    { 
        question: "Quel est le sens d'une 'langue morte' ?", 
        answers: ["Une langue en désuétude", "Une langue sans évolution", "Une langue ancienne"], 
        correct: 0, 
        explanation: "Une langue morte est une langue qui ne possède plus de locuteurs natifs."
    },

    // question n°81 :
    { 
        question: "Qu'est-ce que le 'naturalism' dans le langage ?", 
        answers: ["Langage construit socialement", "Langage basé sur des instincts", "Langage en plein développement"], 
        correct: 1, 
        explanation: "Le naturalisme soutient que le langage est ancré dans des instincts naturels et biologiques."
    },

    // question n°82 :
    { 
        question: "Qui a écrit sur 'le mot comme symbole' ?", 
        answers: ["Ferdinand de Saussure", "Benedict Anderson", "Mikhail Bakhtine"], 
        correct: 0, 
        explanation: "Ferdinand de Saussure a analysé comment les mots fonctionnent comme des symboles dans la langue."
    },
    
    // question n°83 :
    { 
        question: "Quel concept désigne une variation d'une langue associée à une région donnée ?", 
        answers: ["Dialecte", "Langue nationale", "Sociolinguistique"], 
        correct: 0, 
        explanation: "Un dialecte désigne une variété d'une langue spécifique à une région géographique ou à un groupe social."
    },
    
    // question n°84 :
    { 
        question: "Quelle est la définition de la 'post-linguistique' ?", 
        answers: ["Langage et technologie", "Mouvements sociaux", "Nouvelle critique de la langue"], 
        correct: 2, 
        explanation: "La post-linguistique cherche à examiner le langage tout en comprenant la diversité des expériences humaines."
    },
    
    // question n°85 :
    { 
        question: "Quel est l'effet des préjugés sur le discours ?", 
        answers: ["Ils enrichissent le discours", "Ils déforment la signification", "Ils n'ont aucun effet"], 
        correct: 1, 
        explanation: "Les préjugés peuvent déformer la signification des mots et impacter la manière dont les idées sont perçues."
    },
    
    // question n°86 :
    { 
        question: "Qui a formulé l'idée que la langue peut être un outil pour le changement social ?", 
        answers: ["Bourdieu", "Hobbes", "Kant"], 
        correct: 0, 
        explanation: "Pierre Bourdieu a souligné le pouvoir de la langue comme un outil de changement social et de transformation des rapports de pouvoir."
    },
    
    // question n°87 :
    { 
        question: "Quel type de langage est souvent utilisé pour les interfaces technologiques ?", 
        answers: ["Langage soutenu", "Langage naturel", "Langage formel"], 
        correct: 2, 
        explanation: "Un langage formel est utilisé pour les langages de programmation et les interface technologiques, où la précision est cruciale."
    },
    
    // question n°88 :
    { 
        question: "Quel est le principe de la 'communication interculturelle' ?", 
        answers: ["Échange de langues", "Interaction entre différentes cultures", "Langue universelle"], 
        correct: 1, 
        explanation: "La communication interculturelle examine les interactions entre différentes cultures et les impacts des différences linguistiques."
    },
    
    // question n°89 :
    { 
        question: "Quel concept désigne l'étude des sons des langues ?", 
        answers: ["Sémantique", "Phonologie", "Morphologie"], 
        correct: 1, 
        explanation: "La phonologie est la branche de la linguistique qui s'intéresse aux sons et aux systèmes phonétiques des langues."
    },
    
    // question n°90 :
    { 
        question: "Quel phénomène désigne le changement de sens d'un mot au fil du temps ?", 
        answers: ["Évolution sémantique", "Étymologie", "Néologisme"], 
        correct: 0, 
        explanation: "L'évolution sémantique désigne le processus par lequel le sens d'un mot change au cours de l'histoire."
    },
    
    // question n°91 :
    { 
        question: "Quel est l'impact des normes linguistiques sur l'usage du langage ?", 
        answers: ["Pas d'impact", "Impact positif sur la clarté", "Impact limitatif sur la créativité"], 
        correct: 2, 
        explanation: "Les normes linguistiques peuvent parfois limiter la créativité en imposant des usages spécifiques."
    },
    
    // question n°92 :
    { 
        question: "Qui a développé une compréhension du langage en tant qu'outil de pouvoir ?", 
        answers: ["Foucault", "Derrida", "Husserl"], 
        correct: 0, 
        explanation: "Michel Foucault a analysé la relation entre le langage et le pouvoir, en soulignant comment le discours façonne les réalités sociales."
    },
    
    // question n°93 :
    { 
        question: "Quel rôle joue la métaphore dans la construction du sens ?", 
        answers: ["Aucun rôle", "Crée des significations nouvelles", "Ravit le sens ancien"], 
        correct: 1, 
        explanation: "Les métaphores créent des significations nouvelles et enrichissent le langage en offrant des perspectives variées."
    },
    
    // question n°94 :
    { 
        question: "Quel est le phénomène du 'code-switching' ?", 
        answers: ["Changement de syntaxe", "Changement de langue ou de dialecte dans la conversation", "Évolution sémantique"], 
        correct: 1, 
        explanation: "Le code-switching fait référence à l'alternance entre différentes langues ou dialectes au sein d'une même conversation."
    },
    
    // question n°95 :
    { 
        question: "Quel impact les réseaux sociaux ont-ils sur le langage contemporain ?", 
        answers: ["Uniformisation linguistique", "Évolution rapide du langage", "Aucun impact"], 
        correct: 1, 
        explanation: "Les réseaux sociaux influencent et favorisent une évolution rapide du langage à travers de nouveaux mots, abréviations et expressions."
    },
    
    // question n°96 :
    { 
        question: "Quel est le rôle du langage dans la construction de l'identité culturelle ?", 
        answers: ["Il n'y a pas de lien", "Il est central dans la définition d'une culture", "Il est négligeable"], 
        correct: 1, 
        explanation: "Le langage est central dans la définition et la transmission d'une culture, car il véhicule des valeurs et des traditions."
    },
    
    // question n°97 :
    { 
        question: "Quelle est la relation entre langage et pouvoir dans l'analyse discursive ?", 
        answers: ["Inexistante", "Le langage divise le pouvoir", "Le langage reflète et reproduit des rapports de pouvoir"], 
        correct: 2, 
        explanation: "L'analyse discursive montre que le langage reflète et peut reproduire des rapports de pouvoir dans une société."
    },
    
    // question n°98 :
    { 
        question: "Quel est le rôle des éléments non verbaux dans la communication ?", 
        answers: ["Ils n'ont pas d'impact", "Ils renforcent le sens du langage oral", "Ils créent de la confusion"], 
        correct: 1, 
        explanation: "Les éléments non verbaux, tels que les gestes et le ton, renforcent et complètent le sens du langage oral."
    },

    // question n°99 :
    { 
        question: "Quel auteur a proposé que les limites de ma langue signifient les limites de mon monde ?", 
        answers: ["Wittgenstein", "Peirce", "Saussure"], 
        correct: 0, 
        explanation: "Wittgenstein a soutenu que notre capacité à comprendre le monde est intrinsèquement liée à notre langage."
    },
    
    // question n°100 :
    { 
        question: "Quel concept désigne l'idée que le langage façonne et reflète des mentalités culturelles ?", 
        answers: ["Linguistique comparative", "Construction sociale", "Langage et culture"], 
        correct: 2, 
        explanation: "Le lien entre langage et culture est essentiel pour comprendre comment le langage reflète des mentalités et des valeurs culturelles."
    }
];