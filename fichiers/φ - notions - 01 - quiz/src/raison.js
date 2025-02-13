const questions = [
    // question n°1 :
    { 
        question: "Quelle est la définition classique de la raison selon les philosophes ?", 
        answers: ["La capacité à connaître", "Un moyen de juger", "Un simple sentiment"], 
        correct: 1, 
        explanation: "La raison est souvent considérée comme la faculté de jugement qui permet à l'individu de prendre des décisions éclairées."
    },
    
    // question n°2 :
    { 
        question: "Qui a affirmé 'Je pense donc je suis' ?", 
        answers: ["Kant", "Descartes", "Spinoza"], 
        correct: 1, 
        explanation: "René Descartes a formulé cette célèbre phrase pour établir la certitude de l'existence à travers la pensée."
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
        question: "Quelle est la position de la philosophie empiriste sur la raison ?", 
        answers: ["Elle rejette la raison", "Elle est un outil essentiel", "Elle est imparfaite"], 
        correct: 2, 
        explanation: "La philosophie empiriste, incarnée par des penseurs comme Hume, souligne que la raison est soumise aux expériences sensorielles."
    },

    // question n°7 :
    { 
        question: "Quel auteur a écrit 'Critique de la raison pure' ?", 
        answers: ["Sartre", "Kant", "Hume"], 
        correct: 1, 
        explanation: "'Critique de la raison pure' de Kant analyse les limites et les capacités de la raison humaine."
    },
    
    // question n°8 :
    { 
        question: "Quel est le concept de 'dialectique' chez Hegel ?", 
        answers: ["Un processus de pensée", "Un simple raisonnement", "Une méthode d'éducation"], 
        correct: 0, 
        explanation: "La dialectique hegelienne est un processus de pensée qui avance par contradiction et dépassement, permettant le développement de la raison."
    },
    
    // question n°9 :
    { 
        question: "Quel est le rôle de la raison dans les débats éthiques ?", 
        answers: ["Elle n'est pas pertinente", "Elle fournit des fondements rationnels", "Elle limite les discussions"], 
        correct: 1, 
        explanation: "La raison joue un rôle essentiel dans les débats éthiques, fournissant un cadre pour l'analyse et le jugement moral."
    },
    
    // question n°10 :
    { 
        question: "Quel est le lien entre la raison et la liberté, selon Kant ?", 
        answers: ["La raison limite la liberté", "La raison permet de reconnaître la liberté", "La liberté est illusoire"], 
        correct: 1, 
        explanation: "Pour Kant, la raison permet à l'individu de comprendre et de choisir librement en fonction de la loi morale."
    },
    
    // question n°11 :
    { 
        question: "Qui a formé l'idée que la raison est la source de toute connaissance ?", 
        answers: ["Locke", "Descartes", "Hume"], 
        correct: 1, 
        explanation: "Descartes a soutenu que la raison est la base fondamentale d'où émane toute connaissance humaine."
    },
    
    // question n°12 :
    { 
        question: "Quelle théorie stipule que la raison doit être appliquée de manière universelle ?", 
        answers: ["Constructivisme", "Kantisme", "Utilitarisme"], 
        correct: 1, 
        explanation: "Le kantisme défend l'idée que les principes de la raison doivent être appliqués universellement à toutes les personnes."
    },
    
    // question n°13 :
    { 
        question: "Quel est le rôle de la raison pratique dans le dilemme éthique ?", 
        answers: ["Elle évite les dilemmes", "Elle aide à résoudre les dilemmes", "Elle complique les dilemmes"], 
        correct: 1, 
        explanation: "La raison pratique joue un rôle central dans la résolution de dilemmes éthiques en fournissant des critères de choix justifiés."
    },

    // question n°14 :
    { 
        question: "Quel est le lien entre raison et science selon les rationalistes ?", 
        answers: ["La science est secondaire", "La science est l'application de la raison", "Raison et science sont opposées"], 
        correct: 1, 
        explanation: "Les rationalistes voient la science comme une extension et une application de la raison humaine."
    },
    
    // question n°15 :
    { 
        question: "Quel concept évoque la capacité de la raison à évaluer des idées opposées ?", 
        answers: ["Dialectique", "Théorie", "Pantomime"], 
        correct: 0, 
        explanation: "La dialectique implique la capacité de la raison à évaluer et à harmoniser des idées opposées."
    },

    // question n°16 :
    { 
        question: "Qui a introduit l'expression 'les lumières' pour désigner la raison comme guide ?", 
        answers: ["Rousseau", "Voltaire", "Kant"], 
        correct: 2, 
        explanation: "Kant a écrit sur les 'lumières', affirmant que la raison devrait guider l'humanité vers la liberté et le progrès."
    },
    
    // question n°17 :
    { 
        question: "Quel est l'impact de la culture sur l'exercice de la raison ?", 
        answers: ["Aucun impact", "Elle influence les perceptions de la raison", "Elle la restreint"], 
        correct: 1, 
        explanation: "La culture façonne notre compréhension et notre application de la raison, influençant les normes et les valeurs."
    },
    
    // question n°18 :
    { 
        question: "Quel est le lien entre raison et autonomie selon Kant ?", 
        answers: ["La raison est indépendante de l'autonomie", "L'autonomie est fondée sur la raison", "L'autonomie doit être ignorée"], 
        correct: 1, 
        explanation: "Kant affirme que l'autonomie est basée sur la capacité de raisonner et de prendre des décisions intellectuelles."
    },
    
    // question n°19 :
    { 
        question: "Quel est l'objectif principal de la méthode cartésienne ?", 
        answers: ["Doutes pour trouver la vérité", "Suivre la tradition", "Évaluer la science"], 
        correct: 0, 
        explanation: "La méthode cartésienne consiste à douter systématiquement des connaissances pour établir des certitudes indubitables."
    },
    
    // question n°20 :
    { 
        question: "Quel est le concept de 'l'usage public de la raison' selon Kant ?", 
        answers: ["Utiliser la raison dans les conversations", "Réciter des faits", "Payer une leçon", "Exercer son jugement critique"], 
        correct: 3, 
        explanation: "Kant appuie l'usage public de la raison comme étant l'exercice du jugement critique face aux dogmes."
    },
    
    // question n°21 :
    { 
        question: "Qui a développé la critique du positivisme dans la philosophie de la raison ?", 
        answers: ["Marx", "Husserl", "Kant"], 
        correct: 1, 
        explanation: "Edmund Husserl a critique le positivisme, suggérant que la raison doit inclure également les expériences vécues."
    },
    
    // question n°22 :
    { 
        question: "Quel est le lien entre raison et bonheur selon Aristote ?", 
        answers: ["Raison et bonheur sont opposés", "Le bonheur s'atteint par la raison", "Le bonheur est un mirage"], 
        correct: 1, 
        explanation: "Aristote affirme que le bonheur s'atteint par l'usage de la raison et la vertu."
    },
    
    // question n°23 :
    { 
        question: "Quel est le lien entre raison et instinct selon la philosophie moderne ?", 
        answers: ["Ils sont indépendants", "L'instinct est supérieur à la raison", "La raison doit orienter l'instinct"], 
        correct: 2, 
        explanation: "La philosophie moderne soutient que la raison doit guider les instincts afin de favoriser des choix réfléchis."
    },

    // question n°24 :
    { 
        question: "Qui a formulé l'idée que la raison doit être alimentée par l'expérience ?", 
        answers: ["Kant", "Locke", "Descartes"], 
        correct: 1, 
        explanation: "John Locke a proposé que la raison doit être fondée sur les expériences sensorielles et l'observation."
    },

    // question n°25 :
    { 
        question: "Quel est le lien entre raison et sociétés démocratiques ?", 
        answers: ["La raison est sans importance", "La raison est essentielle pour le débat public", "La raison est limitée"], 
        correct: 1, 
        explanation: "Dans les sociétés démocratiques, la raison est essentielle pour le débat public et la prise de décisions éclairées."
    },

    // question n°26 :
    { 
        question: "Quelle approche admet que la raison humaine est limitée ?", 
        answers: ["Le rationalisme", "L'irrationalisme", "Le scepticisme"], 
        correct: 2, 
        explanation: "Le scepticisme admet que la raison humaine a des limites et que la certitude absolue est inatteignable."
    },

    // question n°27 :
    { 
        question: "Quel concept défend la supériorité de la raison sur les émotions ?", 
        answers: ["Rationalisme", "Émisme", "Philosophie du cœur"], 
        correct: 0, 
        explanation: "Le rationalisme postule que la raison doit primer sur les émotions pour parvenir à des décisions éclairées."
    },

    // question n°28 :
    { 
        question: "Quel est le rôle de la raison dans le stoïcisme ?", 
        answers: ["Contrer les émotions", "Ignorer les émotions", "Vivre en harmonie avec soi-même"], 
        correct: 0, 
        explanation: "Les stoïciens voient la raison comme un moyen de contrôler les émotions et d'atteindre une vie vertueuse."
    },

    // question n°29 :
    { 
        question: "Qui a développé la notion de 'rah' dans la philosophie ?", 
        answers: ["Descartes", "Sartre", "Wittgenstein"], 
        correct: 2, 
        explanation: "Wittgenstein a introduit 'rah', un terme lié à l'usage ensemble de la raison à travers le langage et ses limites."
    },

    // question n°30 :
    { 
        question: "Quelle est la relation entre raison et pouvoir dans la philosophie politique ?", 
        answers: ["Ils sont opposés", "Le pouvoir est fondé sur la raison", "Le pouvoir est irrationnel"], 
        correct: 1, 
        explanation: "La raison est souvent considérée comme une base fondamentale pour exercer le pouvoir de manière juste et équitable."
    },

    // question n°31 :
    { 
        question: "Quel lien établit-on entre justice et raison selon Kant ?", 
        answers: ["Justice et raison sont opposées", "La justice doit être fondée sur la raison", "La justice est une question d'émotion"], 
        correct: 1, 
        explanation: "Pour Kant, la justice doit être fondée sur des principes rationnels et universels pour garantir l'équité."
    },

     // question n°32 :
    { 
        question: "Quel est le rôle de la raison dans le développement de la pensée critique ?", 
        answers: ["Elle est sans importance", "Elle en est le fondement", "Elle est inexacte"], 
        correct: 1, 
        explanation: "La raison est le fondement essentiel du développement de la pensée critique, permettant une analyse réfléchie."
    },

    // question n°33 :
    { 
        question: "Qui a introduit le terme 'faculté de juger' ?", 
        answers: ["Aristote", "Kant", "Hume"], 
        correct: 1, 
        explanation: "Kant a introduit le concept de 'faculté de juger' pour analyser la manière dont les décisions morales sont prises."
    },

    // question n°34 :
    { 
        question: "Quel est le rôle de la norme dans la raison selon Kant ?", 
        answers: ["Elle est inutile", "Elle structure le raisonnement", "Elle limite la liberté"], 
        correct: 1, 
        explanation: "Pour Kant, la norme structure la raison et guide les actions humaines dans le cadre d'une moralité universelle."
    },

    // question n°35 :
    { 
        question: "Quel philosophe a consacré sa réflexion à la raison, la liberté et les droits de l'homme ?", 
        answers: ["Kant", "Rousseau", "Sartre"], 
        correct: 0, 
        explanation: "Kant a examinés les relations entre la raison, la liberté et les droits de l'homme dans ses écrits."
    },

    // question n°36 :
    { 
        question: "Quelle place la raison occupe-t-elle dans le dilemme éthique ?", 
        answers: ["Elle doit être ignorée", "Elle aide à résoudre le dilemme", "Elle complique le dilemme"], 
        correct: 1, 
        explanation: "La raison joue un rôle central dans la résolution des dilemmes éthiques en permettant une réflexion critique."
    },

    // question n°37 :
    { 
        question: "Qu'est-ce que le 'réalisme' sur la nature de la raison ?", 
        answers: ["Elle est absolue", "Elle est contextuelle", "Elle est illusoire"], 
        correct: 1, 
        explanation: "Le réalisme établit que la raison est souvent contextuelle et dépend des circonstances dans lesquelles elle s'applique."
    },

    // question n°38 :
    { 
        question: "Quel rôle la raison joue-t-elle dans la prise de décision morale ?", 
        answers: ["Aucun rôle", "Elle guide les choix", "Elle est contradictoire"], 
        correct: 1, 
        explanation: "La raison est essentielle pour guider les choix moraux, permettant de peser les conséquences des actions."
    },

    // question n°39 :
    { 
        question: "Quelle est la distinction entre raison et logique ?", 
        answers: ["Aucune distinction", "La raison est subjective", "La logique est un outil de la raison"], 
        correct: 2, 
        explanation: "La logique est souvent utilisée comme un outil au service de la raison, permettant d'établir la validité des propositions."
    },

    // question n°40 :
    { 
        question: "Qui a proposé l'idée que la raison pourrait être influencée par la culture ?", 
        answers: ["Heidegger", "Dewey", "Sartre"], 
        correct: 1, 
        explanation: "John Dewey a plaidé que la raison est influencée par des contextes culturels et sociaux."
    },

    // question n°41 :
    { 
        question: "Quel lien établit-on entre raison, science et philosophie ?", 
        answers: ["Ils sont opposés", "Ils s'enrichissent mutuellement", "Ils ne se croisent jamais"], 
        correct: 1, 
        explanation: "La science et la philosophie s'enrichissent mutuellement grâce à l'utilisation de la raison."
    },

    // question n°42 :
    { 
        question: "Quel est le lien entre raison et perception dans la philosophie moderne ?", 
        answers: ["Ils sont indépendants", "La perception ne doit pas influencer la raison", "La perception façonne la raison"], 
        correct: 2, 
        explanation: "La philosophie moderne soutient que la perception est déterminante pour façonner et guider notre raison."
    },

    // question n°43 :
    { 
        question: "Quel est le rôle de la raison dans la culture contemporaine ?", 
        answers: ["Elle est négligée", "Elle est fondamentale pour le dialogue", "Elle est illusoire"], 
        correct: 1, 
        explanation: "La raison est essentielle dans la culture contemporaine pour faciliter le dialogue et la compréhension entre différents points de vue."
    },

    // question n°44 :
    { 
        question: "Quelle est la position de la rhétorique sur la raison ?", 
        answers: ["Elle soutient la raison", "Elle la contredit", "Elle la minimise"], 
        correct: 0, 
        explanation: "La rhétorique est souvent utilisée pour renforcer des arguments rationnels dans la discussion."
    },
    
    // question n°45 :
    { 
        question: "Quel philosophe a reconnu la nécessité de la rationalité dans la vie sociale ?", 
        answers: ["Hume", "Dewey", "Rawls"], 
        correct: 1, 
        explanation: "John Dewey a fait valoir que la rationalité est cruciale pour l'avancement social et le progrès."
    },

    // question n°46 :
    { 
        question: "Quel est le lien entre la raison et le bonheur selon Aristote ?", 
        answers: ["Ils sont opposés", "La raison guide vers le bonheur", "La raison est sans rapport avec le bonheur"], 
        correct: 1, 
        explanation: "Aristote considère que la raison est essentielle pour atteindre le bonheur, car elle guide les actions vertueuses."
    },

    // question n°47 :
    { 
        question: "Qui a formé l'opinion que la raison est influencée par les émotions ?", 
        answers: ["Kant", "Hume", "Sartre"], 
        correct: 1, 
        explanation: "David Hume a soutenu que la raison est souvent et inévitablement influencée par les émotions."
    },

    // question n°48 :
    { 
        question: "Quel est le rôle de la responsabilité sociale dans la raison ?", 
        answers: ["Aucun rôle", "Elle doit guider les détournements de la raison", "Elle est complémentaire à la raison"], 
        correct: 2, 
        explanation: "La responsabilité sociale est liée à la raison, en guidant l'individu vers des choix éthiques et moraux."
    },

    // question n°49 :
    { 
        question: "Qu'est-ce que la rationalité limitée ?", 
        answers: ["La raison est toujours limitée", "Les individus ne prennent pas toujours les meilleures décisions", "Elle est inarrêtable"], 
        correct: 1, 
        explanation: "Le concept de rationalité limitée suggère que, en raison des informations incomplètes, les individus ne prennent pas toujours les meilleures décisions."
    },

    // question n°50 :
    { 
        question: "Quel est l'impact de l'éducation sur l'exercice de la raison ?", 
        answers: ["Aucun impact", "Elle l'améliore", "Elle la rend inférieure"], 
        correct: 1, 
        explanation: "L'éducation améliore l'exercice de la raison en fournissant des outils critiques et analytiques."
    },

    // question n°51 :
    { 
        question: "Quel est le lien entre raison et culture selon les anthropologues ?", 
        answers: ["Ils sont opposés", "Ils coexistent", "La culture influence la raison"], 
        correct: 2, 
        explanation: "Les anthropologues soutiennent que la culture influence profondément la manière dont nous exercons notre raison."
    },

    // question n°52 :
    { 
        question: "Quel philosophe contemporain a critiqué la domination de la raison sur les émotions ?", 
        answers: ["Hobbes", "Derrida", "Sartre"], 
        correct: 1, 
        explanation: "Jacques Derrida a critiqué l'idée que la raison doit dominer les émotions dans les discours philosophiques."
    },

    // question n°53 :
    { 
        question: "Quel est le message clé de la déclaration 'La raison est la lumière qui éclaire l'âme' ?", 
        answers: ["La raison est essentielle", "La raison est illusoire", "La raison est sans valeur"], 
        correct: 0, 
        explanation: "Cette déclaration souligne l'importance de la raison en tant que guide pour l'âme et les décisions morales."
    },

    // question n°54 :
    { 
        question: "Quel est le lien entre la pensée critique et la raison ?", 
        answers: ["Pas de lien", "La pensée critique repose sur la raison", "La pensée critique contredit la raison"], 
        correct: 1, 
        explanation: "La pensée critique est fondée sur l'usage de la raison pour analyser et évaluer les idées de manière réfléchie."
    },

    // question n°55 :
    { 
        question: "Quel rôle les émotions jouent-elles dans les décisions rationnelles selon les éthologues ?", 
        answers: ["Elles sont sans importance", "Elles influencent la raison", "Elles ne doivent pas être prises en compte"], 
        correct: 1, 
        explanation: "Les éthologues reconnaissent que les émotions influencent souvent les décisions, montrant l'interaction entre raison et émotions."
    },

    // question n°56 :
    { 
        question: "Quel est l'impact des normes sociales sur la raison ?", 
        answers: ["Aucun impact", "Elles peuvent limiter ou enrichir la raison", "Elles sont contraires à la raison"], 
        correct: 1,
        explanation: "Les normes sociales peuvent influencer la manière dont la raison est exercée, soit en la limitant, soit en l'enrichissant selon le cadre culturel."
    },

    // question n°57 :
    { 
        question: "Quelle figure a été pionnière de la raison critique au 18ème siècle ?", 
        answers: ["Diderot", "Kant", "Rousseau"], 
        correct: 1, 
        explanation: "Kant a été un pionnier de la raison critique, prônant une approche philosophique basée sur la réflexion rationnelle."
    },

    // question n°58 :
    { 
        question: "Quel impact l'irréductibilité de la raison a-t-elle dans le débat philosophique ?", 
        answers: ["Aucun impact", "Elle reste un sujet de tension", "Elle éclaire les débats"], 
        correct: 1, 
        explanation: "L'irréductibilité de la raison suscite des tensions dans les débats philosophiques sur la primauté et la place de la rationalité."
    },

    // question n°59 :
    { 
        question: "Qu'est-ce que la raison instrumentale selon les théoriciens critiques ?", 
        answers: ["Une forme de logique", "Un outil permettant de manipuler des phénomènes", "La clé de l'intuition"], 
        correct: 1, 
        explanation: "La raison instrumentale est perçue comme un outil qui peut être utilisé pour manipuler, souvent critiqué pour sa approche utilitariste."
    },

    // question n°60 :
    { 
        question: "Quel est le lien entre raison et société selon les sociologues ?", 
        answers: ["Pas de lien", "La société influence la rationalité", "La raison est figée"], 
        correct: 1, 
        explanation: "Les sociologues soutiennent que la société et ses normes influencent le développement et l'utilisation de la raison."
    },

    // question n°61 :
    { 
        question: "Quel philosophe a parler de 'l'usage de la raison en politique' ?", 
        answers: ["Locke", "Hume", "Hannah Arendt"], 
        correct: 2, 
        explanation: "Hannah Arendt a traité de l'usage de la raison dans le contexte politique, en soulignant l'importance d'une délibération éclairée."
    },

    // question n°62 :
    { 
        question: "Quel est le concept de l'usage critique de la raison par les Lumières ?", 
        answers: ["Critiques de l'autorité", "Soutien à la superstition", "Neutralité face à la raison"], 
        correct: 0, 
        explanation: "Le mouvement des Lumières a critiqué les formes d'autorité en valorisant l'usage critique de la raison."
    },

    // question n°63 :
    { 
        question: "Quel est l'impact de l'éducation sur la capacité de raison ?", 
        answers: ["Il est négligeable", "Il favorise le développement de la raison", "Il rend la raison rigide"], 
        correct: 1, 
        explanation: "L'éducation joue un rôle clé dans le développement des capacités de raisonnement et de pensée critique."
    },

    // question n°64 :
    { 
        question: "Qui a affirmé que la science devait être guidée par la raison ?", 
        answers: ["Descartes", "Kant", "Foucault"], 
        correct: 1,
        explanation: "Kant a affirmé que la raison doit guider la pratique scientifique pour garantir des découvertes morales et éthiques."
    },

    // question n°65 :
    { 
        question: "Quel est le rôle de la raison dans les processus décisionnels ?", 
        answers: ["Elle est superflue", "Elle est essentielle", "Elle doit être ignorée"], 
        correct: 1,
        explanation: "La raison est essentielle dans les processus décisionnels pour évaluer les options et choisir la meilleure voie."
    },

    // question n°66 :
    { 
        question: "Quel est le lien entre la raison et l'éthique selon Kant ?", 
        answers: ["Aucun lien", "La raison est la base de l'éthique", "L'éthique doit ignorer la raison"], 
        correct: 1, 
        explanation: "Kant affirmait que la raison est fondamentale pour établir les principes éthiques universels."
    },

    // question n°67 :
    { 
        question: "Qui a proposé les 'impératifs catégoriques' en rapport avec la raison ?", 
        answers: ["Kant", "Hobbes", "Socrate"], 
        correct: 0, 
        explanation: "Kant a formulé le concept d'impératif catégorique, affirmant qu'on doit agir selon des principes que l'on pourrait vouloir universels."
    },

    // question n°68 :
    { 
        question: "Quelle est la critique principale du rationalisme strict ?", 
        answers: ["Il ignore les émotions", "Il est trop flexible", "Il est inapplicable"], 
        correct: 0, 
        explanation: "Les critiques pointent souvent que le rationalisme strict néglige le rôle des émotions qui influencent le processus décisionnel."
    },

    // question n°69 :
    { 
        question: "Quel est le lien entre raison et expérience selon les empiristes ?", 
        answers: ["La raison est supérieure à l'expérience", "L'expérience est la base de la connaissance", "La raison et l'expérience sont indépendantes"], 
        correct: 1, 
        explanation: "Les empiristes, comme Hume, soutiennent que c'est l'expérience qui fournit la base de toutes connaissances, y compris la raison."
    },

    // question n°70 :
    { 
        question: "Quel est le lien entre raison et justice dans la philosophie politique ?", 
        answers: ["La justice n'a rien à voir avec la raison", "La justice doit être basée sur des principes rationnels", "La raison doit être ignorée"], 
        correct: 1, 
        explanation: "La justice dans la philosophie politique est souvent fondée sur des principes rationnels, garantissant l'équité et l'objectif."
    },

    // question n°71 :
    { 
        question: "Quel concept philosophie affirme que la raison est supérieure à la tradition ?", 
        answers: ["Humanisme", "Rationalisme", "Émérisme"], 
        correct: 1, 
        explanation: "Le rationalisme affirme que la raison doit guider la pensée plutôt que la tradition ou l'autorité."
    },

    // question n°72 :
    { 
        question: "Quel est le lien entre raison et bonheur selon Aristote ?", 
        answers: ["La raison est la clé du bonheur", "Le bonheur est irrationnel", "La raison ignorer le bonheur"], 
        correct: 0, 
        explanation: "Aristote soutient que la raison est essentielle pour déterminer les actions qui mènent au véritable bonheur."
    },

    // question n°73 :
    { 
        question: "Quel auteur a soutenu que la raison pourrait être influencée par des motivations externes ?", 
        answers: ["Rawls", "Kant", "Derrida"], 
        correct: 2, 
        explanation: "Jacques Derrida a montré comment des motivations externes peuvent influencer le raisonnement et les décisions."
    },

    // question n°74 :
    { 
        question: "Quel est le lien entre raison et dialogue selon les penseurs contemporains ?", 
        answers: ["Dialogue est illusoire", "La raison est cruciale pour le dialogue", "Dialogue nuit à la raison"], 
        correct: 1, 
        explanation: "Les penseurs contemporains affirment que la raison est la base d'un dialogue constructif et éclairé."
    },
    
    // question n°75 :
    { 
        question: "Quel est l'impact de la culture sur la raison ?", 
        answers: ["Aucun impact", "Elle façonne les modèles de pensée", "Elle la déforme"], 
        correct: 1, 
        explanation: "La culture influence les modèles de pensée et la façon de raisonner dans différentes sociétés."
    },

    // question n°76 :
    { 
        question: "Quel est le rôle de la logique dans le raisonnement ?", 
        answers: ["Elle est facultative", "Elle est fondamentale", "Elle est souvent ignorée"], 
        correct: 1, 
        explanation: "La logique est fondamentale pour structurer le raisonnement et dériver des conclusions valables."
    },

    // question n°77 :
    { 
        question: "Quel est le lien entre raison et condition humaine chez des philosophes existentialistes ?", 
        answers: ["Un lien fort", "La raison est un obstacle", "La condition humaine n'a rien à voir"], 
        correct: 1, 
        explanation: "Les philosophes existentialistes, comme Sartre, affirment que la raison peut parfois entraver la compréhension de la condition humaine."
    },

    // question n°78 :
    { 
        question: "Quel est le rôle de la raison dans les actions humaines ?", 
        answers: ["Elle est sans importance", "Elle guide les décisions", "Elle crée des conflits"], 
        correct: 1, 
        explanation: "La raison est essentielle pour guider les actions humaines et garantir des choix réfléchis."
    },

    // question n°79 :
    { 
        question: "Quel est le lien entre raison et morale dans la philosophie kantienne ?", 
        answers: ["Ils sont opposés", "La morale est fondée sur la raison", "La morale est indépendante"], 
        correct: 1, 
        explanation: "Kant soutient que la morale doit être fondée sur des principes rationnels et universellement applicables."
    },

    // question n°80 :
    { 
        question: "Qui a soutenu que 'la raison est la parole de l'homme' ?", 
        answers: ["Kant", "Sartre", "Kahneman"], 
        correct: 0, 
        explanation: "Kant a affirmé que la raison est l'un des fondements de notre humanité et de notre capacité à agir moralement."
    },

    // question n°81 :
    { 
        question: "Quel est le rapport entre la science et la raison ?", 
        answers: ["La science ignore la raison", "La raison est essentielle à la science", "Les deux sont indépendants"], 
        correct: 1, 
        explanation: "La raison est essentielle pour la science, car elle fournit des méthodes d'analyse et de logique dans les découvertes."
    },

    // question n°82 :
    { 
        question: "Quel est l'objectif de la foi par rapport à la raison dans de nombreuses traditions ?", 
        answers: ["La foi prend le pas sur la raison", "Il n'y a pas de rapport", "La foi et la raison sont complémentaires"], 
        correct: 2, 
        explanation: "Dans de nombreuses traditions, la foi et la raison sont considérées comme complémentaires pour comprendre le monde."
    },

    // question n°83 :
    { 
        question: "Qui a discuté de la raison et de l'individu dans un contexte politique ?", 
        answers: ["Platon", "Aristote", "Hobbes"], 
        correct: 0, 
        explanation: "Platon a analysé comment la raison informait les actions des individus dans le cadre de la cité idéale."
    },

    // question n°84 :
    { 
        question: "Quel est le lien entre la raison et l'absurde chez les existentialistes ?", 
        answers: ["Ils sont opposés", "La raison mène à l'absurde", "Ils se complètent"], 
        correct: 1, 
        explanation: "Les existentialistes, comme Camus, affirment que la raison peut parfois conduire à un sentiment d'absurde face à l'existence."
    },

    // question n°85 :
    { 
        question: "Quel est l'impact des émotions sur les décisions rationnelles ?", 
        answers: ["Aucun impact", "Elles peuvent les guider", "Elles les déforme"], 
        correct: 1, 
        explanation: "Les émotions peuvent influencer nos décisions et guide nos choix, souvent de manière irrationnelle."
    },

    // question n°86 :
    { 
        question: "Quel est le rôle de la philosophie de la raison dans le dialogue interculturel ?", 
        answers: ["Elle empêche le dialogue", "Elle ouvre des voies de compréhension", "Elle est sans importance"], 
        correct: 1, 
        explanation: "La philosophie de la raison est essentielle pour promouvoir la compréhension et le respect entre différentes cultures."
    },

    // question n°87 :
    { 
        question: "Quel lien établit-on entre raison et littérature ?", 
        answers: ["Pas de lien", "La littérature illumine la raison", "La raison avance la littérature"], 
        correct: 1, 
        explanation: "La littérature explore la condition humaine et peut enrichir notre compréhension de la raison et des émotions."
    },

    // question n°88 :
    { 
        question: "Quel concept définit la capacité à remettre en question ses propres croyances ?", 
        answers: ["Introspection", "Scepticisme", "Rationalisme"], 
        correct: 1, 
        explanation: "Le scepticisme est un concept qui encourage la remise en question des croyances, promouvant l'usage de la raison."
    },

    // question n°89 :
    { 
        question: "Quel est l'impact des biais cognitifs sur la raison ?", 
        answers: ["Ils améliorent la raison", "Ils limitaient la raison", "Ils n'ont aucun impact"], 
        correct: 1, 
        explanation: "Les biais cognitifs peuvent altérer le processus de raisonnement, conduisant à des décisions irrationnelles."
    },

    // question n°90 :
    { 
        question: "Qui a plaidé pour l'importance du dialogue dans la recherche de la vérité ?", 
        answers: ["Platon", "Hegel", "Habermas"], 
        correct: 2, 
        explanation: "Jürgen Habermas a soutenu que le dialogue est essentiel pour la recherche collective de la vérité."
    },

    // question n°91 :
    { 
        question: "Quel est le rapport entre raison et société selon les théoriciens ?", 
        answers: ["Ils sont opposés", "La société aide à conditionner l'exercice de la raison", "Ils sont indépendants"], 
        correct: 1, 
        explanation: "La société influence la manière dont nous exerçons notre raison, façonnant nos perspectives et nos choix."
    },

    // question n°92 :
    { 
        question: "Quel rôle joue la raison dans l'éthique déontologique ?", 
        answers: ["Elle est secondaire", "Elle doit orienter les actions morales", "Elle est une simple parole"], 
        correct: 1, 
        explanation: "L'éthique déontologique considère que la raison doit orienter les actions morales en obéissant à des règles universelles."
    },

    // question n°93 :
    { 
        question: "Quel concept refuse de considérer l'individu comme un agent rationnel ?", 
        answers: ["Rationalisme", "Empirisme", "Construccionisme"], 
        correct: 2, 
        explanation: "Le construccionisme remet en question l'idée que l'individu agit comme un agent rationnel dans tous les contextes."
    },

    // question n°94 :
    { 
        question: "Qui a proposé que la raison doit être conforme à l'universelle moralité ?", 
        answers: ["Kant", "Sartre", "Hume"], 
        correct: 0, 
        explanation: "Kant a affirmé que la raison doit être conforme à des principes moraux universels qui régissent l'action humaine."
    },

    // question n°95 :
    { 
        question: "Quel est le lien entre raison et vérité selon les rationalistes ?", 
        answers: ["La vérité est subjective", "La raison mène à la vérité", "La raison n'a pas d'importance"], 
        correct: 1, 
        explanation: "Les rationalistes soutiennent que la raison est le principal moyen d'atteindre la vérité."
    },

    // question n°96 :
    { 
        question: "Quel est le lien entre raison et connaissances empiriques ?", 
        answers: ["Elles sont indépendantes", "Elles doivent être combinées judicieusement", "Elles ne peuvent pas coexister"], 
        correct: 1, 
        explanation: "La raison et les connaissances empiriques doivent être combinées pour assurer une compréhension approfondie."
    },

    // question n°97 :
    { 
        question: "Quel rôle la raison joue-t-elle dans l'éthique de la vertu ?", 
        answers: ["Nulle", "Elle guide l'action vertueuse", "Elle la limite"], 
        correct: 1, 
        explanation: "Dans l'éthique de la vertu, la raison guide les individus vers des comportements vertueux et éthiques."
    },

    // question n°98 :
    { 
        question: "Quel est le principe des besoins rationnels dans la théorie des besoins ?", 
        answers: ["Les besoins sont irrationnels", "Les besoins rationnels doivent être satisfaits pour agir", "Les besoins sont constants"], 
        correct: 1, 
        explanation: "Dans la théorie des besoins, les besoins rationnels doivent être satisfaits pour permettre un comportement serein."
    },

    // question n°99 :
    { 
        question: "Quel philosophe a soutenu l'importance de la raison dans 'L'esprit moderne' ?", 
        answers: ["Descartes", "Kant", "Dewey"], 
        correct: 0, 
        explanation: "René Descartes a soutenu que la raison est l'élément central de la modernité et de la compréhension de soi."
    },

    // question n°100 :
    { 
        question: "Quel lien fait-on entre raison et empathie dans les éthiques contemporaines ?", 
        answers: ["Ils sont opposés", "Ils doivent être intégrés", "Raison est supérieure"], 
        correct: 1, 
        explanation: "Nombreux éthiciens contemporains soutiennent que la raison et l'empathie doivent être intégrées pour une compréhension complète de la moralité."
    }
];