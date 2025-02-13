const questions = [
    // question n°1 : 
    { 
        question: "Quelle est la définition classique de la liberté selon les philosophes ?",
        answers: ["L'absence de contraintes", "L'exercice de la volonté", "La mesure du bonheur"], 
        correct: 1,
        explanation: "La liberté est souvent définie comme l'exercice de la volonté individuelle, permettant de choisir et d'agir selon ses désirs."
    },

    // question n°2 : 
    { 
        question: "Qui a dit 'L'homme est condamné à être libre' ?",
        answers: ["Sartre", "Kant", "Hegel"], 
        correct: 0,
        explanation: "Jean-Paul Sartre affirmait que la liberté est un état inévitable de l'existence humaine, même si cela engendre l'angoisse."
    },

    // question n°3 : 
    { 
        question: "Dans quelle œuvre Rousseau parle-t-il de la liberté naturelle ?",
        answers: ["Le Contrat Social", "Émile", "D'un contrat social"], 
        correct: 0,
        explanation: "Rousseau, dans 'Le Contrat Social', évoque la notion de liberté naturelle et ses implications dans la société."
    },

    // question n°4 : 
    { 
        question: "Quel est le lien entre liberté et déterminisme selon les penseurs contemporains ?",
        answers: ["Ils sont opposés", "Ils coexistent", "Le déterminisme limite la liberté"], 
        correct: 2,
        explanation: "Le déterminisme pose la question de savoir si la liberté d'action est possible lorsque tous nos choix semblent déterminés."
    },

    // question n°5 : 
    { 
        question: "Qui a défini la liberté comme l'absence de coercition ?",
        answers: ["Hobbes", "Mill", "Kant"], 
        correct: 1,
        explanation: "John Stuart Mill a défini la liberté comme une absence de coercition, ce qui est fondamental pour la pensée libérale."
    },

    // question n°6 : 
    { 
        question: "Quel philosopher associe liberté et autonomie morale ?",
        answers: ["Hegel", "Kant", "Socrate"], 
        correct: 1,
        explanation: "Kant relie la liberté à l'autonomie morale, affirmant que l'individu doit agir selon des lois qu'il se donne lui-même."
    },
    
    // question n°7 : 
    { 
        question: "Quel est le contraste majeur dans la vision de la liberté selon la philosophie américaine et européenne ?",
        answers: ["Liberté positive vs liberté négative", "Liberté d'expression vs liberté d'action", "Liberté individuelle vs liberté collective"], 
        correct: 0,
        explanation: "La philosophie américaine privilégie souvent la liberté négative (absence d'interférences) alors que la philosophie européenne peut mettre l'accent sur la liberté positive (capacité d'agir)."
    },

    // question n°8 : 
    { 
        question: "Quelle est la différence entre liberté et licence ?",
        answers: ["Il n'y a pas de différence", "La licence implique l'absence de règles", "La liberté est régulée par la morale"], 
        correct: 1,
        explanation: "La licence se réfère à l'absence de règles, tandis que la liberté implique des choix éclairés souvent encadrés par des normes morales."
    },

    // question n°9 : 
    { 
        question: "Qui a soutenu que la liberté humaine est la base de la morale ?",
        answers: ["Kant", "Rousseau", "Nietzsche"], 
        correct: 0,
        explanation: "Kant considère la liberté humaine comme essentielle pour le développement de la morale et des obligations éthiques."
    },

    // question n°10 : 
    { 
        question: "Quelle est la définition de la liberté politique ?",
        answers: ["Liberté de pensée", "Liberté d'expression", "Liberté reconnue par l'État"], 
        correct: 2,
        explanation: "La liberté politique désigne la reconnaissance, par les lois et institutions d'un État, des droits des individus."
    },

    // question n°11 : 
    { 
        question: "Quel philosophe a écrit 'Liberté, égalité, fraternité' ?",
        answers: ["Sartre", "Hegel", "Rousseau"], 
        correct: 2,
        explanation: "Rousseau a popularisé l'idée de 'liberté, égalité, fraternité' dans ses réflexions sur la société civile."
    },
    
    // question n°12 : 
    { 
        question: "Qu'est-ce que la 'liberté d'indifférence' selon certains philosophes ?",
        answers: ["Liberté de choisir entre des options", "Liberté des contraintes internes", "Liberté d'agir sans penser"], 
        correct: 0,
        explanation: "La 'liberté d'indifférence' se réfère à la capacité de faire un choix entre différentes options disponibles."
    },

    // question n°13 : 
    { 
        question: "Quels sont les droits individuels souvent associés à la liberté ?",
        answers: ["Droit à la propriété", "Droit à la paix", "Droit à la sécurité"], 
        correct: 0,
        explanation: "Le droit à la propriété est fréquemment associé au concept de liberté individuelle dans les théories libérales."
    },

    // question n°14 : 
    { 
        question: "Quel est l'argument principal en faveur des libertés individuelles selon John Stuart Mill ?",
        answers: ["La liberté est une illusion", "Les individus sont les mieux placés pour déterminer leur bonheur", "La société doit contrôler les actions des individus"], 
        correct: 1,
        explanation: "Mill soutient que les individus sont souvent les meilleurs juges de leur propre bonheur et donc devraient jouir de libertés individuelles."
    },

    // question n°15 : 
    { 
        question: "Quel concept définit la liberté comme le droit d'agir selon sa propre volonté, tant qu'on ne nuit pas aux autres ?",
        answers: ["Liberté négative", "Liberté positive", "Liberté égale"], 
        correct: 0,
        explanation: "La liberté négative signifie que les individus sont libres tant qu'ils ne portent pas atteinte à la liberté des autres."
    },

    // question n°16 : 
    { 
        question: "Qu'est-ce qu'une 'liberté positive' ?",
        answers: ["Absence de contraintes", "Capacité d'agir de manière autonome", "Liberté d'expression"], 
        correct: 1,
        explanation: "La liberté positive consiste en la capacité de l'individu à agir selon ses propres désirs et aspirations."
    },

    // question n°17 : 
    { 
        question: "Qui a critiqué l'idée que la liberté est simplement l'absence de contraintes ?",
        answers: ["Platon", "Sartre", "Isaiah Berlin"], 
        correct: 2,
        explanation: "Isaiah Berlin a critiqué la conception de la liberté uniquement comme absence de contraintes, en introduisant la distinction entre liberté positive et négative."
    },

    // question n°18 : 
    { 
        question: "Quel concept de la liberté est largement utilisé dans le débat sur les droits civiques ?",
        answers: ["Liberté économique", "Liberté politique", "Liberté sociale"], 
        correct: 2,
        explanation: "La liberté sociale est à la base des revendications pour l'égalité des droits et la justice sociale dans les mouvements de droits civiques."
    },

    // question n°19 : 
    { 
        question: "Qui a affirmé que 'la liberté consiste à faire ce que l'on veut' ?",
        answers: ["Kant", "Sartre", "Hobbes"], 
        correct: 1,
        explanation: "Sartre a soutenu que la liberté humaine implique la capacité de faire des choix selon ses propres désirs."
    },

    // question n°20 : 
    { 
        question: "Quel est le lien entre liberté et responsabilité morale ?",
        answers: ["Elles sont opposées", "La liberté entraîne la responsabilité", "La liberté est toujours accompagnée d'irresponsabilité"], 
        correct: 1,
        explanation: "La liberté est souvent considérée comme inextricablement liée à la responsabilité morale d'assumer ses choix."
    },

    // question n°21 : 
    { 
        question: "Quel auteur allemand a exploré la relation entre liberté et histoire ?",
        answers: ["Marx", "Hegel", "Nietzsche"], 
        correct: 1,
        explanation: "Hegel a analysé comment l'idée de liberté évolue à travers l'histoire et les luttes sociales."
    },

    // question n°22 : 
    { 
        question: "Quel est le paradoxe de la liberté selon certains philosophes ?",
        answers: ["Liberté égale contraintes", "Liberté et autonomie sont opposées", "Utilité et liberté sont opposées"], 
        correct: 0,
        explanation: "Le paradoxe consiste à se demander si la liberté individuelle peut engendrer des contraintes pour les autres."
    },

    // question n°23 : 
    { 
        question: "Qu'est-ce que l'aliénation en relation avec la liberté ?",
        answers: ["Un état de bonheur", "Un manque de liberté d'agir", "Une forme de liberté"], 
        correct: 1,
        explanation: "L'aliénation se réfère à un état dans lequel une personne ressent un manque de liberté ou de contrôle sur sa vie."
    },

    // question n°24 : 
    { 
        question: "Quelle est la vision d'Hobbes sur la liberté ?",
        answers: ["La liberté est totale", "La liberté est régulée par l'État", "La liberté doit être illimitée"], 
        correct: 1,
        explanation: "Hobbes affirmait que sans un pouvoir régulateur fort, la liberté mène à l'anarchie et à la guerre."
    },

    // question n°25 : 
    { 
        question: "Quel principe de la liberté est souvent associé à la Déclaration des droits de l'homme ?",
        answers: ["Liberté d'expression", "Liberté d'entreprendre", "Liberté d'association"], 
        correct: 0,
        explanation: "La Déclaration des droits de l'homme établit la liberté d'expression comme une valeur fondamentale des droits humains."
    },

    // question n°26 : 
    { 
        question: "Quel philosophe a affirmé que la liberté est nécessaire pour le bonheur humain ?",
        answers: ["Spinoza", "Mill", "Nietzsche"], 
        correct: 1,
        explanation: "John Stuart Mill soutenait que la liberté individuelle est essentielle pour aller vers le bonheur et l'épanouissement personnel."
    },

    // question n°27 : 
    { 
        question: "Quel lien établit Kant entre liberté et loi morale ?",
        answers: ["La loi limite la liberté", "La liberté est un prérequis à la loi", "L'obéissance à la loi est un acte de liberté"], 
        correct: 2,
        explanation: "Kant soutient que l'obéissance à une loi morale que l'on se donne soi-même est une expression de liberté."
    },

    // question n°28 : 
    { 
        question: "Comment peut-on percevoir les implications de la liberté sur la société ?",
        answers: ["Elle unit les gens", "Elle peut engendrer le désordre", "Elle impose des lois"], 
        correct: 1,
        explanation: "Une trop grande liberté sans limites peut entraîner le désordre au sein d'une société."
    },

    // question n°29 : 
    { 
        question: "Quelle est la principale critique du libéralisme économique en matière de liberté ?",
        answers: ["Il est excessif", "Il ignore les inégalités", "Il promeut l'égalité"], 
        correct: 1,
        explanation: "Les critiques du libéralisme économique affirment qu'il néglige les inégalités sociales qui peuvent entraver l'exercice de la liberté."
    },

    // question n°30 : 
    { 
        question: "Quel auteur a réfléchi sur la liberté dans son ouvrage 'L'Éthique' ?",
        answers: ["Kant", "Spinoza", "Descartes"], 
        correct: 1,
        explanation: "Spinoza aborde la liberté dans 'L'Éthique', en la liant à la compréhension des émotions et des passions."
    },

    // question n°31 : 
    { 
        question: "Quelle est la vision stoïcienne de la liberté ?",
        answers: ["Liberté externe", "Liberté intérieure", "Liberté illimitée"], 
        correct: 1,
        explanation: "Les stoïciens mettent l'accent sur la liberté intérieure, qui réside dans le contrôle de soi et des passions."
    },

    // question n°32 : 
    { 
        question: "Qui a introduit le terme 'libertarianisme' ?",
        answers: ["John Stuart Mill", "Robert Nozick", "Friedrich Hayek"], 
        correct: 1,
        explanation: "Robert Nozick est l'un des penseurs qui a popularisé l'idée de libertarianisme au 20e siècle."
    },

    // question n°33 : 
    { 
        question: "Qu'est-ce que la liberté d'expression ?",
        answers: ["Un droit fondamental dans une société démocratique", "Un droit illimité", "Un pouvoir de persuasion"], 
        correct: 0,
        explanation: "La liberté d'expression est un droit fondamental qui permet aux individus d'exprimer leurs idées et opinions sans censure."
    },

    // question n°34 : 
    { 
        question: "Quel philosophe a distingué entre 'liberté de' et 'liberté à' ?",
        answers: ["Isaiah Berlin", "Sartre", "Rousseau"], 
        correct: 0,
        explanation: "Isaiah Berlin a introduit cette distinction pour évoquer la différence entre absence de contraintes et capacité d'agir."
    },

    // question n°35 : 
    { 
        question: "Quel auteur a défendu l'idée que la liberté implique un choix éclairé plutôt que l'absence de choix ?",
        answers: ["Dewey", "Mill", "Sartre"], 
        correct: 0,
        explanation: "John Dewey a souligné que la liberté doit être exercée de manière réfléchie et éclairée pour avoir un véritable sens."
    },

    // question n°36 : 
    { 
        question: "Qu'est-ce que l'illusion de la liberté selon certains philosophes ?",
        answers: ["Le choix est fictif", "La liberté n'est pas un objectif", "Les contraintes n'existent pas"], 
        correct: 0,
        explanation: "L'illusion de la liberté survient lorsque les contraintes invisibles influencent nos choix tout en faisant croire à une totale liberté."
    },

    // question n°37 : 
    { 
        question: "Quel concept de liberté a été promu après la Révolution française ?",
        answers: ["Liberté d'opinion", "Liberté individuelle", "Liberté universelle"], 
        correct: 1,
        explanation: "La Révolution française a largement promu la liberté individuelle et les droits humains comme principes fondamentaux."
    },

    // question n°38 : 
    { 
        question: "Quel engagement est souvent lié à la liberté économique ?",
        answers: ["Interdiction d'entreprendre", "Régulation gouvernementale", "Libre marché"], 
        correct: 2,
        explanation: "La liberté économique est souvent associée au principe du libre marché, permettant aux individus de commercer sans restrictions."
    },

    // question n°39 : 
    { 
        question: "Quel auteur a soutenu que la liberté doit être encadrée par les lois ?",
        answers: ["Hobbes", "Mill", "Goethe"], 
        correct: 0,
        explanation: "Hobbes soutient que la liberté doit être maintenue dans le cadre de lois pour garantir l'ordre social."
    },

    // question n°40 : 
    { 
        question: "Quel est l'impact du contexte social sur l'exercice de la liberté ?",
        answers: ["Aucun impact", "Un impact négligeable", "Un impact significatif"], 
        correct: 2,
        explanation: "Le contexte social, y compris les normes et valeurs, influence considérablement la manière dont la liberté est exercée."
    },

    // question n°41 : 
    { 
        question: "Qu'est-ce que l'absentéisme en matière de liberté ?",
        answers: ["Un refus d'exercer ses droits", "Une forme de résistance", "Une sorte de déni"], 
        correct: 0,
        explanation: "L'absentéisme fait référence au manque d'engagement dans l'exercice de ses droits et libertés."
    },

    // question n°42 : 
    { 
        question: "Quel est le rôle de la responsabilité dans le débat sur la liberté ?",
        answers: ["La responsabilité souhaite restreindre la liberté", "Elle est indissociable de la liberté", "Elle n'a aucune pertinence"], 
        correct: 1,
        explanation: "La responsabilité est souvent considérée comme indissociable de la liberté, car elle implique de rendre compte de ses choix."
    },

    // question n°43 : 
    { 
        question: "Quelle notion définit les droits fondamentaux comme inhérents à tout être humain ?",
        answers: ["Liberté naturelle", "Liberté constitutionnelle", "Liberté conditionnelle"], 
        correct: 0,
        explanation: "La liberté naturelle désigne les droits qui sont considérés comme inhérents et universels à la condition humaine."
    },

    // question n°44 : 
    { 
        question: "Quel auteur a soudé libéralisme et utilitarisme ?",
        answers: ["Bentham", "Mill", "Kant"], 
        correct: 1,
        explanation: "John Stuart Mill a combiné libéralisme et utilitarisme, suggérant que la liberté individuelle permet de maximiser le bien-être social."
    },

    // question n°45 : 
    { 
        question: "Qui a défendu une vision collective et associative de la liberté ?",
        answers: ["Marx", "Hobbes", "Rousseau"], 
        correct: 0,
        explanation: "Karl Marx a soutenu que la liberté doit prendre en compte le cadre collectif et social dans lequel les individus vivent."
    },

    // question n°46 : 
    { 
        question: "Quel est le lien entre liberté et justice sociale dans la philosophie politique ?",
        answers: ["Ils sont opposés", "Ils se complètent", "La liberté restreint la justice"], 
        correct: 1,
        explanation: "Liberté et justice sociale se complètent dans la mesure où l'une ne peut s'épanouir pleinement sans l'autre."
    },

    // question n°47 : 
    { 
        question: "Quel est l'impact du langage sur la perception de la liberté ?",
        answers: ["Aucun impact", "Il influence les idées sur la liberté", "Il détermine la liberté"], 
        correct: 1,
        explanation: "Le langage façonne la manière dont les individus conceptualisent et expriment leurs idées sur la liberté."
    },

    // question n°48 : 
    { 
        question: "Quel est le lien entre culture et liberté ?",
        answers: ["La culture n'influence pas la liberté", "On ne peut pas avoir de liberté sans culture", "La culture limite la liberté"], 
        correct: 2,
        explanation: "La culture peut parfois restreindre la liberté par le biais de normes et de valeurs qui dictent les comportements."
    },

    // question n°49 : 
    { 
        question: "Quel est le rôle de la politique dans la sauvegarde de la liberté individuelle ?",
        answers: ["Elle peut la restreindre", "Elle doit la garantir", "Elle est sans intérêt"], 
        correct: 1,
        explanation: "La politique joue un rôle crucial dans la garantie des libertés individuelles par le biais de lois et de structures étatiques."
    },

    // question n°50 : 
    { 
        question: "Quelle position défend que la liberté d'un individu ne doit pas nuire à celle des autres ?",
        answers: ["Théorie de la liberté positive", "Liberté responsable", "Liberté illimitée"], 
        correct: 1,
        explanation: "La liberté responsable prône que l'exercice de sa propre liberté ne doit pas porter atteinte à la liberté d'autrui."
    },

    // question n°51 : 
    { 
        question: "Quel est le concept de liberté conditionnelle ?",
        answers: ["Liberté qui dépend de l'État", "Liberté sans conditions", "Liberté sous certaines restrictions"], 
        correct: 2,
        explanation: "La liberté conditionnelle se réfère à une liberté qui est accordée sous certaines conditions déterminées par la société."
    },
    
    // question n°52 : 
    { 
        question: "Quel auteur a introduit le terme 'liberté proactive' ?",
        answers: ["Kant", "Tocqueville", "Sartre"], 
        correct: 1,
        explanation: "Alexis de Tocqueville a mis en avant l'idée de liberté proactive, en soulignant l'importance de l'engagement civique."
    },

    // question n°53 : 
    { 
        question: "Qui a examiné la liberté et l'égalité dans 'De la démocratie en Amérique' ?",
        answers: ["Mill", "Tocqueville", "Proust"], 
        correct: 1,
        explanation: "Tocqueville a analysé la dynamique entre liberté et égalité dans les contextes démocratiques."
    },

    // question n°54 : 
    { 
        question: "Quelle est la vision de Rousseau sur la liberté dans la société ?",
        answers: ["Elle est illicite", "Elle est régulée par la loi", "Elle doit être négociée entre individus"], 
        correct: 2,
        explanation: "Rousseau a souligné que la liberté est le fruit d'un contrat social où les individus doivent négocier leurs libertés."
    },

    // question n°55 : 
    { 
        question: "Quel concept désigne le droit de choisir sa propre voie dans la vie ?",
        answers: ["Liberté personnelle", "Liberté politique", "Liberté intérieure"], 
        correct: 0,
        explanation: "La liberté personnelle désigne la capacité de l'individu à choisir son propre chemin et à suivre ses désirs."
    },

    // question n°56 : 
    { 
        question: "Quel est le rapport entre liberté d'expression et limites légales ?",
        answers: ["La liberté d'expression est absolue", "Il existe des limites légales à la liberté d'expression", "La liberté d'expression doit être réprimée"], 
        correct: 1,
        explanation: "La liberté d'expression est souvent limitée par la loi pour éviter des discours haineux ou discriminatoires."
    },

    // question n°57 : 
    { 
        question: "Quel est l'impact du revenu sur la liberté économique selon le mouvement libéral ?",
        answers: ["Aucun impact", "Le revenu détermine la liberté", "Le revenu et la liberté sont indépendants"], 
        correct: 1,
        explanation: "Selon le mouvement libéral, un revenu stable permet aux individus d'exercer une plus grande liberté économique."
    },

    // question n°58 : 
    { 
        question: "Qui a lié liberté à la notion de choix éthique dans ses travaux ?",
        answers: ["Platon", "Dewey", "Kant"], 
        correct: 2,
        explanation: "Kant a souligné que la liberté morale implique des choix éthiques, où l'individu agit selon des principes moraux."
    },

    // question n°59 : 
    { 
        question: "Quel impact la révolution numérique a-t-elle sur la liberté d'expression ?",
        answers: ["Elle la limite", "Elle l'élargit", "Elle l'annule"], 
        correct: 1,
        explanation: "La révolution numérique a élargi les horizons de la liberté d'expression en permettant une diffusion rapide et large des idées."
    },

    // question n°60 : 
    { 
        question: "Quel philosophe a critiqué l'idée que la liberté est toujours bénéfique ?",
        answers: ["Hobbes", "Mill", "Russell"], 
        correct: 0,
        explanation: "Hobbes a critiqué la notion que la liberté illimitée est toujours bénéfique, arguant qu'elle peut mener à l'anarchie."
    },

    // question n°61 : 
    { 
        question: "Quelle critique peut-on faire à la notion de liberté au sens purement économique ?",
        answers: ["Elle est dépassée", "Elle ignore les conséquences sociales", "Elle est fondamentale"], 
        correct: 1,
        explanation: "La critique principale réside dans le fait que la liberté économique peut engendrer des inégalités et nuire à la cohésion sociale."
    },

    // question n°62 : 
    { 
        question: "Quel est le défi de la liberté dans un monde globalisé ?",
        answers: ["La réduction de la liberté", "La diversité des perspectives", "L'uniformité des cultures"], 
        correct: 1,
        explanation: "Globalisation implique un défi à la notion de liberté, car elle implique une multitude de perspectives et de défis variés."
    },

    // question n°63 : 
    { 
        question: "Qui a proposé que la liberté implique à la fois des droits et des devoirs ?",
        answers: ["Marx", "Dewey", "J.S. Mill"], 
        correct: 1,
        explanation: "John Dewey a souligné que la liberté ne se limite pas aux droits individuels, mais doit inclure des responsabilités sociales."
    },

    // question n°64 : 
    { 
        question: "Quel défi éthique la liberté soulève-t-elle dans l'usage des technologies modernes ?",
        answers: ["Elle n'en soulève aucun", "Des questions de privacy et de surveillance", "Des opportunités économiques"], 
        correct: 1,
        explanation: "Les technologies modernes remettent en question la liberté à travers des préoccupations croissantes concernant la vie privée et la surveillance."
    },

    // question n°65 : 
    { 
        question: "Quel philosophes ont soutenu que la liberté et l'égalité sont liées ?",
        answers: ["Dewey et Marx", "Kant et Mill", "Rousseau et Tocqueville"], 
        correct: 0,
        explanation: "Dewey et Marx ont tous deux soutenu que la liberté ne peut pas être atteinte sans un certain niveau d'égalité sociale."
    },

    // question n°66 : 
    { 
        question: "Quel terme désigne l'instrumentalisation de la liberté à des fins politiques ?",
        answers: ["Liberté contrôlée", "Liberté sous contrôle", "Liberté par contournement"], 
        correct: 0,
        explanation: "La liberté contrôlée renvoie à des situations où la liberté est utilisée de manière à servir des intérêts politiques particuliers."
    },

    // question n°67 : 
    { 
        question: "Quel lien fait-on entre la liberté et la démocratie ?",
        answers: ["Ils sont opposés", "La démocratie nécessite des libertés individuelles", "La démocratie restreint la liberté"], 
        correct: 1,
        explanation: "La démocratie repose largement sur la protection et la promotion des libertés individuelles."
    },

    // question n°68 : 
    { 
        question: "Quel événement a été fondamental dans la redéfinition des libertés au XXe siècle ?",
        answers: ["La Première Guerre mondiale", "La Révolution française", "Le mouvement des droits civiques"], 
        correct: 2,
        explanation: "Le mouvement des droits civiques a été crucial pour redéfinir les libertés en améliorant l'égalité et les droits des minorités."
    },

    // question n°69 : 
    { 
        question: "Quel philosophe a soutenu que la liberté s'exprime par des choix réfléchis et responsables ?",
        answers: ["Sartre", "Dewey", "Mill"], 
        correct: 1,
        explanation: "John Dewey a mis en avant l'importance de la responsabilité et de la réflexion dans les choix qui expriment la liberté."
    },

    // question n°70 : 
    { 
        question: "Quel est le défi de la liberté face aux inégalités sociales ?",
        answers: ["Les inégalités n'affectent pas la liberté", "Les inégalités peuvent restreindre les opportunités", "Les inégalités sont bénéfiques"], 
        correct: 1,
        explanation: "Les inégalités sociales peuvent restreindre les opportunités et l'exercice effectif de la liberté pour certains groupes."
    },

    // question n°71 : 
    { 
        question: "Qu'est-ce que l'autonomie dans le contexte de la liberté ?",
        answers: ["Capacité à choisir", "Absence d'influence extérieure", "Conformité aux normes sociales"], 
        correct: 0,
        explanation: "L'autonomie se réfère à la capacité de choisir librement et d'agir selon ses propres valeurs et intérêts."
    },

    // question n°72 : 
    { 
        question: "Que désigne le terme 'liberté de conscience' ?",
        answers: ["Liberté économique", "Liberté religieuse", "Liberté d'expression"], 
        correct: 1,
        explanation: "La liberté de conscience fait référence à la liberté de croire et de pratiquer sa religion ou ses convictions personnelles."
    },

    // question n°73 : 
    { 
        question: "Quel est le principal débat autour de la liberté d'expression ?",
        answers: ["Elle doit être totale", "Elle peut être limitée par la loi", "Elle n'a pas d'importance"], 
        correct: 1,
        explanation: "Le débat central réside dans les limites à imposer à la liberté d'expression pour éviter les discours haineux ou diffamatoires."
    },

    // question n°74 : 
    { 
        question: "Qui a développé une théorie sur la liberté et le bonheur ?",
        answers: ["Socrate", "Aristote", "Marx"], 
        correct: 1,
        explanation: "Aristote a mis en avant le lien entre liberté et bonheur, suggérant que l'épanouissement humain est lié à des actions libres."
    },

    // question n°75 : 
    { 
        question: "Quelle est la vision de Hegel sur la liberté ?",
        answers: ["L'individu est libre sans contraintes", "La liberté est réalisée dans la reconnaissance sociale", "La liberté est illusoire"], 
        correct: 1,
        explanation: "Hegel soutient que la liberté est accomplie lorsque l'individu est reconnu par autrui, dans des relations sociales."
    },

    // question n°76 : 
    { 
        question: "Quel philosophe a affirmé que la sécurité est essentielle à la liberté ?",
        answers: ["Hobbes", "Locke", "Rousseau"], 
        correct: 0,
        explanation: "Hobbes a argumenté que sans sécurité, la liberté devient vulnérable et difficile à maintenir."
    },

    // question n°77 : 
    { 
        question: "Quel est l'impact des lois sur la liberté individuelle ?",
        answers: ["Elles la restreignent", "Elles la garantissent", "Elles n'ont aucun impact"], 
        correct: 1,
        explanation: "Les lois sont souvent établies pour garantir et protéger la liberté individuelle contre les abus."
    },

    // question n°78 : 
    { 
        question: "Qu'est-ce que le 'droit à la liberté' dans le cadre juridique ?",
        answers: ["Le droit de voir", "Le droit d'agir sans inhibition", "Le droit à un procès juste"], 
        correct: 2,
        explanation: "Le 'droit à la liberté' se réfère à la protection des individus contre l'emprisonnement injustifié et garantit un procès équitable."
    },

    // question n°79 : 
    { 
        question: "Quel est le lien entre liberté et autodétermination ?",
        answers: ["Ils sont opposés", "L'autodétermination est une forme de liberté", "La liberté rime avec dépendance"], 
        correct: 1,
        explanation: "L'autodétermination est souvent considérée comme une forme spécifique de liberté, impliquant le choix et le contrôle de sa propre vie."
    },

    // question n°80 : 
    { 
        question: "Comment la liberté est-elle perçue dans les dictatures ?",
        answers: ["Elle est respectée", "Elle est supprimée", "Elle est partielle"], 
        correct: 1,
        explanation: "Dans les régimes dictatoriaux, la liberté est souvent supprimée pour maintenir le pouvoir en place."
    },

    // question n°81 : 
    { 
        question: "Quel est le concept de 'liberté partielle' ?",
        answers: ["Liberté conditionnelle", "Liberté limitée par des règles", "Liberté d'une chose"], 
        correct: 1,
        explanation: "La liberté partielle implique que certains droits ou libertés sont restreints par des règles ou des règlements."
    },

    // question n°82 : 
    { 
        question: "Quel est le lien entre responsabilité sociale et liberté individuelle ?",
        answers: ["Elles sont opposées", "Elles sont complémentaires", "La responsabilité est plus importante que la liberté"], 
        correct: 1,
        explanation: "La responsabilité sociale est souvent perçue comme complémentaire à la liberté individuelle, car elle nécessite un équilibre entre l'exercice de la liberté et le respect des autres."
    },

    // question n°83 : 
    { 
        question: "Quel est le défi du capitalisme en matière de liberté ?",
        answers: ["Il limite la liberté", "Il favorise la liberté individuelle", "Il nécessite un niveau de solidarité"], 
        correct: 1,
        explanation: "Le capitalisme favorise souvent la liberté individuelle à travers la libre entreprise et le choix des consommateurs."
    },
    
    // question n°84 : 
    { 
        question: "Qui a écrit 'L'Esprit des lois' ?",
        answers: ["Hobbes", "Montesquieu", "Rousseau"], 
        correct: 1,
        explanation: "'L'Esprit des lois' de Montesquieu traite des relations entre liberté, loi et conditions politiques."
    },

    // question n°85 : 
    { 
        question: "Qu'est-ce que la liberté négative ?",
        answers: ["Liberté sans intervention extérieure", "Liberté encadrée", "Liberté sans conditions"], 
        correct: 0,
        explanation: "La liberté négative se réfère à l'absence d'interférence extérieure et permet aux individus d'agir comme ils le souhaitent."
    },

    // question n°86 : 
    { 
        question: "Quel est le paradoxe de la liberté d'engagement ?",
        answers: ["Liberté et obligation ne coexistent pas", "L'engagement peut restreindre la liberté", "La liberté ne doit pas être sollicitée"], 
        correct: 1,
        explanation: "Le paradoxe est que s'engager à quelque chose peut restreindre sa liberté d'agir dans d'autres directions."
    },

    // question n°87 : 
    { 
        question: "Quel est le rôle des droits de l'homme dans la protection de la liberté ?",
        answers: ["Ils n'ont aucun rôle", "Ils garantissent la liberté individuelle", "Ils compliquent la liberté"], 
        correct: 1,
        explanation: "Les droits de l'homme visent à garantir les libertés fondamentales des individus dans une société."
    },

    // question n°88 : 
    { 
        question: "Qui a défendu l'idée que la liberté est liée à l'autorité morale ?",
        answers: ["Platon", "Proust", "Baudelaire"], 
        correct: 0,
        explanation: "Platon défend que la véritable liberté est liée à la connaissance et à l'autorité morale que l'on se donne."
    },

    // question n°89 : 
    { 
        question: "Quel est l'effet de l'éducation sur la liberté individuelle ?",
        answers: ["Elle la restreint", "Elle la favorise", "Elle est indifférente"], 
        correct: 1,
        explanation: "L'éducation est souvent considérée comme un moyen fondamental de promouvoir la liberté individuelle en ouvrant des opportunités."
    },

    // question n°90 : 
    { 
        question: "Quel concept désigne le fait que la liberté d'un individu ne doit pas nuire à la liberté d'un autre ?",
        answers: ["Liberté négative", "Liberté responsable", "Liberté collective"], 
        correct: 1,
        explanation: "La liberté responsable implique que chaque individu doit agir dans le respect des libertés des autres."
    },

    // question n°91 : 
    { 
        question: "Quel philosophe a écrit sur la 'liberté dans l'Etat' ?",
        answers: ["Platon", "Hegel", "Kant"], 
        correct: 1,
        explanation: "Hegel a analysé la manière dont la liberté est exercée et protégée dans le cadre de l'État."
    },

    // question n°92 : 
    { 
        question: "Quel est l'impact de la patriarcat sur la liberté des femmes ?",
        answers: ["Il n'y a aucun impact", "Il favorise la liberté des femmes", "Il restreint leur liberté"], 
        correct: 2,
        explanation: "Le patriarcat est souvent perçu comme une structure sociale qui limite la liberté et l'autonomie des femmes."
    },

    // question n°93 : 
    { 
        question: "Qu'est-ce que le 'libertinage' ?",
        answers: ["La liberté illimitée", "La recherche de plaisirs sans contraintes", "Liberté encadrée"], 
        correct: 1,
        explanation: "Le libertinage désigne la recherche de plaisirs en dehors des normes conventionnelles, souvent associé à une liberté sans limites."
    },

    // question n°94 : 
    { 
        question: "Quel est le rôle de la lutte pour la liberté dans le développement personnel ?",
        answers: ["Elle n'a aucun rôle", "Elle est fondamentale pour le développement du caractère", "Elle freine le progrès"], 
        correct: 1,
        explanation: "La lutte pour la liberté est considérée comme cruciale pour le développement personnel et la construction de l'identité."
    },

    // question n°95 : 
    { 
        question: "Quel philosophe a fait la distinction entre 'liberté personnelle' et 'liberté politique' ?",
        answers: ["Hobbes", "Locke", "Rousseau"], 
        correct: 1,
        explanation: "Locke a différencié entre la liberté personnelle des individus et leur liberté politique au sein de la société."
    },

    // question n°96 : 
    { 
        question: "Qui a exploré la liberté dans 'L'Éthique' et a proposé l'idée que raison et liberté sont liées ?",
        answers: ["Sartre", "Kant", "Spinoza"], 
        correct: 2,
        explanation: "Spinoza a discuté de la liberté en relation avec la raison, soutenant que la compréhension rationnelle permet l'exercice de la liberté."
    },

    // question n°97 : 
    { 
        question: "Qui a affirmé que 'la liberté est le droit de faire tout ce qui nuit à autrui' ?",
        answers: ["Rousseau", "Mill", "Diderot"], 
        correct: 1,
        explanation: "John Stuart Mill a formulé cette célèbre définition pour souligner les limites de la liberté lorsqu'elle nuit aux autres."
    },

    // question n°98 : 
    { 
        question: "Quel est l'impact des mouvements sociaux sur la liberté en général ?",
        answers: ["Ils n'ont aucun impact", "Ils promeuvent la liberté", "Ils sont un obstacle à la liberté"], 
        correct: 1,
        explanation: "Les mouvements sociaux ont souvent joué un rôle clé dans l'avancement et la protection des libertés individuelles et collectives."
    },

    // question n°99 : 
    { 
        question: "Quel est le lien entre la technologie et la liberté d'expression ?",
        answers: ["La technologie restreint la liberté d'expression", "La technologie favorise la diffusion des idées", "La technologie rend l'expression minuscules"], 
        correct: 1,
        explanation: "La technologie favorise la diffusion des idées et des opinions, élargissant ainsi les possibilités d'expression."
    },

    // question n°100 : 
    { 
        question: "Quel est le rôle de la conscience dans l'exercice de la liberté ?",
        answers: ["Aucun rôle", "La conscience guide les choix moraux", "Elle est source de conflits"], 
        correct: 1,
        explanation: "La conscience joue un rôle crucial dans l'exercice de la liberté, guidant les choix moraux et éthiques des individus."
    }
];