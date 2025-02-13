const questions = [
    // question n°1 : 
    { 
        question: "Qui a formulé l'impératif catégorique, qui définit le devoir moral ?",
        answers: ["Kant", "Hobbes", "Sartre"], 
        correct: 0,
        explanation: "Immanuel Kant introduit l'impératif catégorique comme principe fondamental du devoir moral."
    },
    
    // question n°2 : 
    { 
        question: "Quel est le lien selon Kant entre devoir et liberté ?",
        answers: ["Le devoir limite la liberté", "Le devoir provient de la liberté", "Le devoir n'a rien à voir avec la liberté"], 
        correct: 1,
        explanation: "Kant soutient que le devoir, basé sur la raison, découle de la liberté de choisir moralement."
    },

    // question n°3 : 
    { 
        question: "Qui a dit que 'le devoir est supérieur à nos désirs' ?",
        answers: ["Kant", "Nietzsche", "Hegel"], 
        correct: 0,
        explanation: "Kant affirme que le devoir doit prévaloir sur les désirs personnels pour agir moralement."
    },

    // question n°4 : 
    { 
        question: "Quel philosophe a lié le devoir à la vertu ?",
        answers: ["Aristote", "Socrate", "Locke"], 
        correct: 0,
        explanation: "Aristote considère que le devoir est intrinsèque à la vertu, menant à un bon caractère."
    },

    // question n°5 : 
    { 
        question: "Qui a abordé le devoir à travers le prisme de l'Utilitarisme ?",
        answers: ["Bentham", "Mill", "Kant"], 
        correct: 1,
        explanation: "John Stuart Mill intègre la notion de devoir dans le cadre de l'utilitarisme et du bonheur collectif."
    },

    // question n°6 : 
    { 
        question: "Quel terme désigne le devoir envers la loi ?",
        answers: ["Devoir binaire", "Devoir légal", "Devoir moral"], 
        correct: 1,
        explanation: "Le devoir légal fait référence à l'obligation d'agir conformément aux lois établies."
    },

    // question n°7 : 
    { 
        question: "Qui a soutenu que 'le devoir émerge des normes sociales' ?",
        answers: ["Durkheim", "Weber", "Marx"], 
        correct: 0,
        explanation: "Émile Durkheim met en avant comment les normes sociales façonnent les devoirs individuels."
    },

    // question n°8 : 
    { 
        question: "Quel est le lien entre devoir et conscience selon Kant ?",
        answers: ["La conscience ne joue pas de rôle", "La conscience guide le devoir", "Le devoir est indépendant de la conscience"], 
        correct: 1,
        explanation: "Kant pense que la conscience éthique aide à discerner et accomplir son devoir."
    },

    // question n°9 : 
    { 
        question: "Qui a introduit la notion de devoir au sein de l'engagement politique ?",
        answers: ["Tocqueville", "Kant", "Thoreau"], 
        correct: 0,
        explanation: "Alexis de Tocqueville explore le devoir citoyen dans le cadre de l'engagement politique."
    },

    // question n°10 : 
    { 
        question: "Qui affirme que 'la responsabilité est un aspect fondamental du devoir' ?",
        answers: ["Kant", "Aristote", "Sartre"], 
        correct: 0,
        explanation: "Kant relie directement le devoir à la responsabilité individuel envers les choix moraux."
    },

    // question n°11 : 
    { 
        question: "Quel concept défend l'idée que le devoir est universel ?",
        answers: ["Ethique déontologique", "Utilitarisme", "Égoïsme"], 
        correct: 0,
        explanation: "L'éthique déontologique, représentée par Kant, affirme que le devoir est un principe universel."
    },

    // question n°12 : 
    { 
        question: "Qui a développé l'idée que le devoir émerge de la raison ?",
        answers: ["Aristote", "Kant", "Mill"], 
        correct: 1,
        explanation: "Kant soutient que le devoir doit se fonder sur des principes rationnels que chacun peut comprendre."
    },

    // question n°13 : 
    { 
        question: "Qui a argumenté que 'l'individu est responsable de ses devoirs envers autrui' ?",
        answers: ["Sartre", "Locke", "Rousseau"], 
        correct: 0,
        explanation: "Jean-Paul Sartre insiste sur la responsabilité particulière des individus vis-à-vis des autres."
    },

    // question n°14 : 
    { 
        question: "Quel philosophe a argué que le devoir implique de 'faire face à l'opposition' ?",
        answers: ["Kant", "Nietzsche", "Hegel"], 
        correct: 1,
        explanation: "Friedrich Nietzsche soutient que le devoir souvent exige de défier les normes et les conventions."
    },

    // question n°15 : 
    { 
        question: "Quel auteur aborde un 'devoir éthique' dans les affaires ?",
        answers: ["Weber", "Foucault", "Dewey"], 
        correct: 0,
        explanation: "Max Weber analyse comment le devoir éthique devrait homogénéiser les affaires politiques et économiques."
    },

    // question n°16 : 
    { 
        question: "Qui a soutenu que le bonheur est souvent un 'devoir partagé' ?",
        answers: ["Aristote", "Rousseau", "Mill"], 
        correct: 1,
        explanation: "Jean-Jacques Rousseau traite du bonheur partagé comme essentiel au devoir social."
    },

    // question n°17 : 
    { 
        question: "Qui a formulé la phrase 'Le devoir est dans la volonté' ?",
        answers: ["Kant", "Sartre", "Hume"], 
        correct: 0,
        explanation: "Kant observe que le devoir doit émaner de la volonté fondée sur la raison."
    },

    // question n°18 : 
    { 
        question: "Quel philosophe a analysé le devoir dans le cadre de l'autorité morale ?",
        answers: ["Weber", "Kant", "Engels"], 
        correct: 1,
        explanation: "Kant discute de l'autorité morale comme étant une dimension fondamentale du devoir."
    },

    // question n°19 : 
    { 
        question: "Qui se penche sur le devoir civique vis-à-vis de la société ?",
        answers: ["Locke", "Tocqueville", "Kant"], 
        correct: 1,
        explanation: "Alexis de Tocqueville soulève que le devoir civique fortifie la démocratie."
    },

    // question n°20 : 
    { 
        question: "Qui a établi que les devoirs sont liés à la structure sociale et au contexte historique ?",
        answers: ["Durkheim", "Marx", "Foucault"], 
        correct: 0,
        explanation: "Émile Durkheim soutient que les devoirs sociaux sont façonnés par la structure sociale."
    },

    // question n°21 : 
    { 
        question: "Quel concept traite de l'importance du devoir parental ?",
        answers: ["Éthique familiale", "Responsabilité civique", "Devoir social"], 
        correct: 0,
        explanation: "L'éthique familiale souligne la responsabilité morale des parents envers leurs enfants."
    },

    // question n°22 : 
    { 
        question: "Qui a discuté de l'obligation de dire la vérité comme un devoir moral ?",
        answers: ["Kant", "Hume", "Platon"], 
        correct: 0,
        explanation: "Kant soutient que dire la vérité est un devoir moral irréprochable."
    },

    // question n°23 : 
    { 
        question: "Qui a soutenu que le devoir est lié à la notion de 'droit' ?",
        answers: ["Hegel", "Locke", "Kant"], 
        correct: 1,
        explanation: "John Locke traite le devoir en termes de droits naturels que les individus doivent respecter."
    },

    // question n°24 : 
    { 
        question: "Qui a exploré la notion d'humanité en tant que devoir d'agir envers autrui ?",
        answers: ["Kant", "Nietzsche", "Hobbes"], 
        correct: 0,
        explanation: "Kant insiste sur le devoir d'agir en tant qu'homme envers les autres en tant qu'êtres rationnels."
    },

    // question n°25 : 
    { 
        question: "Quel concept lie tendance à suivre un devoir à la satisfaction individuelle ?",
        answers: ["Altruisme", "Égoïsme", "Hédonisme"], 
        correct: 0,
        explanation: "L'altruisme lie le devoir de servir autrui à la satisfaction personnelle du bonheur partagé."
    },

    // question n°26 : 
    { 
        question: "Qui a analysé le devoir sous l'approche de la 'bioéthique' ?",
        answers: ["Kant", "Singer", "K. Marx"], 
        correct: 1,
        explanation: "Peter Singer s'engage dans une discussion sur le devoir éthique dans le cadre de la bioéthique moderne."
    },

    // question n°27 : 
    { 
        question: "Qui a souligné que 'le devoir ne constitue pas seulement une obligation personnelle'? ",
        answers: ["Hegel", "Locke", "Sartre"], 
        correct: 0,
        explanation: "Hegel souligne que le devoir peut porter des significations sociétales et historiques."
    },

    // question n°28 : 
    { 
        question: "Quel auteur a confronté le devoir à la liberté individuelle ?",
        answers: ["Nietzsche", "Mill", "Kant"], 
        correct: 1,
        explanation: "John Stuart Mill met l'accent sur le devoir face à la liberté individuelle dans ses philosophie."
    },

    // question n°29 : 
    { 
        question: "Qui a trouvé que le devoir facilite la 'responsabilité sociale' ?",
        answers: ["Durkheim", "Sartre", "Foucault"], 
        correct: 0,
        explanation: "Durkheim analyse comment le devoir engage à assumer des responsabilités sociales."
    },

    // question n°30 : 
    { 
        question: "Qui a présenté le devoir comme 'un légataire du passé' ?",
        answers: ["Aristote", "Hegel", "Kierkegaard"], 
        correct: 1,
        explanation: "Hegel voit le passé comme une influence sur le devoir et responsabilité actuelles."
    },

    // question n°31 : 
    { 
        question: "Qui pense que le devoir sert à s'élever spirituellement ?",
        answers: ["Sartre", "Dewey", "Platon"], 
        correct: 2,
        explanation: "Platon relie le devoir à la quête de vérité et sagesse pour l'épanouissement."
    },

    // question n°32 : 
    { 
        question: "Qui a affirmé que le devoir peut être enseigné comme un habitus ?",
        answers: ["Bourdieu", "Sartre", "Dewey"], 
        correct: 0,
        explanation: "Bourdieu soutient que le devoir se construit comme un habitus au sein d'une culture."
    },

    // question n°33 : 
    { 
        question: "Qui propose que le devoir de justice est inflexible ?",
        answers: ["Aristote", "Kant", "Locke"], 
        correct: 1,
        explanation: "Kant argue que le devoir de rendre la justice doit être appliqué sans exception."
    },

    // question n°34 : 
    { 
        question: "Qui a souligné le devoir comme condition préalable à la vie sociale ?",
        answers: ["Durkheim", "Weber", "Sartre"], 
        correct: 0,
        explanation: "Durkheim affirme que le devoir est essentiel pour maintenir l'ordre social."
    },

    // question n°35 : 
    { 
        question: "Qui relie le devoir à la loyauté envers la culture ?",
        answers: ["Sartre", "Benjamin", "Tocqueville"], 
        correct: 2,
        explanation: "Tocqueville traite le devoir d'engagement envers sa culture et ses valeurs."
    },

    // question n°36 : 
    { 
        question: "Quel auteur a introduit le concept de 'devoir éthique' ?",
        answers: ["Kant", "Hume", "Mill"], 
        correct: 0,
        explanation: "Kant formalise la notion de devoir comme fondamentale dans la moralité éthique."
    },

    // question n°37 : 
    { 
        question: "Qui explore les 'devoirs envers soi-même' en philosophie ?",
        answers: ["Sartre", "Kant", "Locke"], 
        correct: 0,
        explanation: "Jean-Paul Sartre aborde le devoir moral que chaque individu a envers lui-même."
    },

    // question n°38 : 
    { 
        question: "Qui a abordé le devoir dans la société à travers la 'compétition' ?",
        answers: ["Hobbes", "Marx", "Bourdieu"], 
        correct: 2,
        explanation: "Pierre Bourdieu explore comment le devoir et la compétition façonnent les comportements dans la société."
    },

    // question n°39 : 
    { 
        question: "Qui introduit l'idée de 'devoir envers la nation' ?",
        answers: ["Rousseau", "Locke", "Hobbes"], 
        correct: 0,
        explanation: "Rousseau insiste sur les devoirs civiques envers la nation pour le bien-être collectif."
    },

    // question n°40 : 
    { 
        question: "Quel est le lien entre devoir et responsabilité selon Kant ?",
        answers: ["Ils sont opposés", "Ils sont complémentaires", "Ils sont identiques"], 
        correct: 1,
        explanation: "Pour Kant, le devoir et la responsabilité sont indissociablement liés à l'éthique."
    },

    // question n°41 : 
    { 
        question: "Qui a observé que 'tous les devoirs impliquent des sacrifices' ?",
        answers: ["Mill", "Hobbes", "Sartre"], 
        correct: 1,
        explanation: "Hobbes soutient que le devoir, par définition, implique des sacrifices personnels."
    },

    // question n°42 : 
    { 
        question: "Qui a exploré l'idée du 'devoir éthique' à travers les droits ?",
        answers: ["Kant", "Marx", "Hume"], 
        correct: 0,
        explanation: "Kant relie le devoir éthique au respect des droits des autres dans la société."
    },

    // question n°43 : 
    { 
        question: "De quel mouvement la 'désobéissance civile' est-elle un devoir ?",
        answers: ["Libéralisme", "Anarchisme", "Socialisme"], 
        correct: 1,
        explanation: "L'anarchisme justifie la désobéissance civile comme un devoir face à l'autorité injuste."
    },

    // question n°44 : 
    { 
        question: "À quel concept renvoie le devoir d'honnêteté ?",
        answers: ["Moralité", "Éthique", "Réciprocité"], 
        correct: 1,
        explanation: "L'éthique défend le devoir d'honnêteté en tant que principe fondamental de l'interaction humaine."
    },

    // question n°45 : 
    { 
        question: "Quel philosophe soutient que 'le bonheur est le devoir ultime' ?",
        answers: ["Marx", "Kant", "Foucault"], 
        correct: 1,
        explanation: "Kant estime que le bonheur doit être perçu comme le résultat de l'accomplissement du devoir."
    },

    // question n°46 : 
    { 
        question: "Qui a introduit l'idée du devoir politique ?",
        answers: ["Montesquieu", "Tocqueville", "Kant"], 
        correct: 1,
        explanation: "Alexis de Tocqueville insiste sur les devoirs des citoyens en tant qu'éléments de la démocratie."
    },

    // question n°47 : 
    { 
        question: "Quel concept éthique relie devoir et conviction ferme ?",
        answers: ["Plaisir", "Liberté", "Responsabilité"], 
        correct: 2,
        explanation: "La responsabilité éthique implique d'agir conformément aux devoirs et aux convictions."
    },

    // question n°48 : 
    { 
        question: "Qui a dit que le devoir est 'l'essence même de l'humanité' ?",
        answers: ["Sartre", "Kant", "Socrate"], 
        correct: 0,
        explanation: "Jean-Paul Sartre suggère que le devoir est central à l'expérience humaine."
    },

    // question n°49 : 
    { 
        question: "Qui a montré que le devoir doit être imposé par l'État ?",
        answers: ["Hobbes", "Kant", "Marx"], 
        correct: 0,
        explanation: "Hobbes soutient que le devoir d'obéissance doit être imposé par une autorité gouvernementale."
    },

    // question n°50 : 
    { 
        question: "Qui a affirmé que l'auto-réflexion est essentielle au devoir ?",
        answers: ["Weber", "Kant", "Sartre"], 
        correct: 1,
        explanation: "Kant avons que l'auto-réflexion est la clé pour discerner et accomplir son devoir."
    },

    // question n°51 : 
    { 
        question: "Quel concept philosophie renforce l'idée de l'individualité dans le devoir ?",
        answers: ["Libéralisme", "Égoïsme", "Socialisme"], 
        correct: 0,
        explanation: "Le libéralisme soutient que la responsabilité individuelle consolide les devoirs sociaux."
    },
    
    // question n°52 : 
    { 
        question: "Qui a assuré que 'le devoir de travailler pour le bien-être des autres' est fondamental ?",
        answers: ["Aristote", "Kant", "Mill"], 
        correct: 0,
        explanation: "Aristote insiste sur l'importance du devoir social envers autrui."
    },

    // question n°53 : 
    { 
        question: "Quel auteur évoque une 'morale de la responsabilité' ?",
        answers: ["Sartre", "Frankl", "Kant"], 
        correct: 0,
        explanation: "Jean-Paul Sartre insiste que chaque individu est responsable de ses actes et décisions."
    },

    // question n°54 : 
    { 
        question: "Qui parle du devoir et de l'éthique environnementale ?",
        answers: ["Aristote", "Leopold", "Kant"], 
        correct: 1,
        explanation: "Aldo Leopold évoque les devoirs éthiques envers l'environnement et la nature."
    },

    // question n°55 : 
    { 
        question: "Qui insiste que 'le devoir est un moyen de croissance personnelle' ?",
        answers: ["Aristote", "Nietzsche", "Kant"], 
        correct: 0,
        explanation: "Aristote soutient que le respect du devoir contribue à l'amélioration de soi."
    },

    // question n°56 : 
    { 
        question: "Qui a lié le devoir au bonheur ?",
        answers: ["Kant", "Mill", "Hegel"], 
        correct: 1,
        explanation: "John Stuart Mill soutient que le devoir peut contribuer significativement au bien-être général."
    },

    // question n°57 : 
    { 
        question: "Qui a plaider qu'il est de notre devoir de s'élever contre l'injustice ?",
        answers: ["Wollstonecraft", "Tocqueville", "Gandhi"], 
        correct: 2,
        explanation: "Mahatma Gandhi prône la résistance pacifique comme un devoir face à l'injustice."
    },

    // question n°58 : 
    { 
        question: "Qui a préconisé une 'démarche éthique de la décision' comme devoir ?",
        answers: ["Tocqueville", "Dewey", "Sartre"], 
        correct: 1,
        explanation: "John Dewey évoque l'importance de l'éthique and rationalité dans la prise de décision."
    },

    // question n°59 : 
    { 
        question: "Qui a discuté le lien entre devoir et l'institution sociale ?",
        answers: ["Hobbes", "Mill", "Weber"], 
        correct: 2,
        explanation: "Max Weber explore comment les institutions façonnent les devoirs au sein de la société."  
    },

    // question n°60 : 
    { 
        question: "Quel philosophe soutient que le devoir est une conséquence de notre nature sociale ?",
        answers: ["Darwin", "Marx", "Bourdieu"], 
        correct: 2,
        explanation: "Pierre Bourdieu argue que le devoir est façonné par notre position sociale et nos interactions."
    },

    // question n°61 : 
    { 
        question: "Qui plaide pour un devoir de préservation de la culture ?",
        answers: ["Bourdieu", "Dewey", "Benjamin"], 
        correct: 0,
        explanation: "Pierre Bourdieu défend que la préservation de la culture fait partie des devoirs sociaux."
    },

    // question n°62 : 
    { 
        question: "Qui analyse la relation entre devoir et bonheur dans ses oeuvres ?",
        answers: ["Nietzsche", "Platon", "Rousseau"], 
        correct: 0,
        explanation: "Nietzsche explore les tensions entre le devoir et la réalisation personnelle du bonheur."
    },

    // question n°63 : 
    { 
        question: "Qui a affirmé que 'le devoir est un engagement envers la société' ?",
        answers: ["Tocqueville", "Marx", "Locke"], 
        correct: 0,
        explanation: "Alexis de Tocqueville souligne le devoir civique que chacun a envers sa communauté."
    },

    // question n°64 : 
    { 
        question: "Quel auteur relie le devoir à la 'pratique de l'amour' ?",
        answers: ["Buddha", "Kant", "Beauvoir"], 
        correct: 1,
        explanation: "Kant évoque que l'amour implique des devoirs envers l'autre, comme une priorité éthique."
    },

    // question n°65 : 
    { 
        question: "Qui a proposé que l'éducation est un devoir fondamental pour la société ?",
        answers: ["Dewey", "Aristote", "Spinoza"], 
        correct: 0,
        explanation: "John Dewey défend que l'éducation est essentielle pour transmettre des valeurs et des devoirs."
    },
    
    // question n°66 : 
    { 
        question: "Qui évoque le devoir d'honnêteté dans la relation d'État ?",
        answers: ["Marx", "Weber", "Hobbes"], 
        correct: 1,
        explanation: "Max Weber prône que l'honnêteté doit gouverner les relations de l'État avec ses citoyens."
    },

    // question n°67 : 
    { 
        question: "Qui relie la liberté de choix à l'accomplissement du devoir ?",
        answers: ["Locke", "Kant", "Mill"], 
        correct: 2,
        explanation: "John Stuart Mill défend que la contestation et l'autonomie apportent des devoirs éthiques."
    },

    // question n°68 : 
    { 
        question: "Qui a dit : 'Le devoir éthique est indispensable à la société en croissance' ?",
        answers: ["Platonic", "Aristote", "Tocqueville"], 
        correct: 2,
        explanation: "Alexis de Tocqueville souligne que le devoir éthique façonne les valeurs de la société."
    },

    // question n°69 : 
    { 
        question: "Qui a écrit que 'le devoir de mémoire est essentiel' ?",
        answers: ["Hannah Arendt", "Marcel Proust", "Adorno"], 
        correct: 0,
        explanation: "Hannah Arendt évoque l'importance du devoir de mémoire pour préserver la culture."
    },

    // question n°70 : 
    { 
        question: "Qui propose que le devoir est généralement perçu comme une obligation sociale ?",
        answers: ["Marx", "Rousseau", "Dewey"], 
        correct: 2,
        explanation: "John Dewey évoque que le devoir prend souvent la forme d'obligations sociales envers autrui."
    },

    // question n°71 : 
    { 
        question: "Qui a relie le devoir à 'l'inclusivité' chez le sujet politique ?",
        answers: ["Dewey", "Weber", "Tocqueville"], 
        correct: 0,
        explanation: "John Dewey souligne l'importance de l'inclusivité des devoirs civiques pour le progrès."
    },

    // question n°72 : 
    { 
        question: "Qui aborde la notion de devoir à travers le motif 'd'égalité' ?",
        answers: ["Rousseau", "Kant", "Hobbes"], 
        correct: 0,
        explanation: "Rousseau plaide pour que les devoirs civiques soient basés sur l'égalité entre citoyens."
    },

    // question n°73 : 
    { 
        question: "Qui évoque le 'concept d'ethos' lié au devoir ?",
        answers: ["Aristote", "Kant", "Foucault"], 
        correct: 0,
        explanation: "Aristote relie l'ethos à la nécessité de composer avec ses devoirs pour une vie éthique."
    },
    
    // question n°74 : 
    { 
        question: "Qui a utilisé le terme 'devoir d'engagement' ?",
        answers: ["Dewey", "Mill", "Kant"], 
        correct: 0,
        explanation: "John Dewey insiste sur l'engagement des citoyens en tant que devoir collectif."
    },

    // question n°75 : 
    { 
        question: "Qui a étudié les responsabilités morales au sein du cadre social ?",
        answers: ["Durkheim", "Hegel", "Locke"], 
        correct: 0,
        explanation: "Émile Durkheim met en lumière le rôle des responsabilités morales dans la société."
    },

    // question n°76 : 
    { 
        question: "Qui a dit que 'le devoir est le fondement de la psychologie sociale' ?",
        answers: ["Milgram", "Sartre", "Weber"], 
        correct: 0,
        explanation: "Stanley Milgram souligne que le devoir joue un rôle clé en psychologie sociale."
    },

    // question n°77 : 
    { 
        question: "Qui défend que chaque acte a un devoir moral ?",
        answers: ["Kant", "Locke", "Marx"], 
        correct: 0,
        explanation: "Kant préconise que chaque acte doit se conformer à un devoir moral universel."
    },

    // question n°78 : 
    { 
        question: "Quel auteur a introduit l'idée que 'le devoir doit passer avant l'intérêt personnel' ?",
        answers: ["Hobbes", "Mill", "Kant"], 
        correct: 2,
        explanation: "Kant souligne que le devoir moral doit être supérieur à l'intérêt personnel."
    },

    // question n°79 : 
    { 
        question: "Qui a analysé le devoir dans le cadre des engagements sociaux ?",
        answers: ["Tocqueville", "Weber", "Marx"], 
        correct: 0,
        explanation: "Alexis de Tocqueville traite de l'engagement des citoyens comme un devoir social."
    },

    // question n°80 : 
    { 
        question: "Comment Kant définit-il l'idée de devoir ?",
        answers: ["Ausschluss", "Petits plaisirs", "Conception éthique"], 
        correct: 2,
        explanation: "Kant sous-tend que le devoir doit être basé sur une conception éthique rationnelle."
    },

    // question n°81 : 
    { 
        question: "Quel auteur souligne que 'remplir son devoir est une question de dignité humaine' ?",
        answers: ["Rousseau", "Kant", "Mill"], 
        correct: 1,
        explanation: "Kant dipybore que remplir son devoir indique une dignité morale et éthique de l'individu."
    },

    // question n°82 : 
    { 
        question: "Qui a déclaré que le devoir est 'le fondement de toute société' ?",
        answers: ["Marx", "Durkheim", "Tocqueville"], 
        correct: 1,
        explanation: "Durkheim cite le devoir comme la pièce maîtresse du fonctionnement social."
    },

    // question n°83 : 
    { 
        question: "Qui défend que 'l'obligation morale est liée à la tradition' dans le devoir ?",
        answers: ["Weber", "Marx", "Durkheim"], 
        correct: 2,
        explanation: "Durkheim montre comment les devoirs moraux sont enracinés dans les traditions sociales."
    },

    // question n°84 : 
    { 
        question: "Qui a soutenu que 'l'éducation est le meilleur moyen de discerner le devoir' ?",
        answers: ["Dewey", "Locke", "Rousseau"], 
        correct: 0,
        explanation: "John Dewey plaide que l'éducation permet d'apprendre et d'assumer ses devoirs."
    },

    // question n°85 : 
    { 
        question: "Quel philosophe lied le devoir à l'amour de soi ?",
        answers: ["Aristote", "Jacobi", "Kant"], 
        correct: 1,
        explanation: "Johann Gottlieb Fichte explore la manière dont l'amour de soi présente un devoir éthique."
    },

    // question n°86 : 
    { 
        question: "Qui a affirmé que les 'devoirs sont la lumière de la raison' ?",
        answers: ["Kant", "Hobbes", "Locke"], 
        correct: 0,
        explanation: "Kant incarnise que les devoirs sont éclairés par la raison et l'éthique."
    },

    // question n°87 : 
    { 
        question: "Qui enseigne que le bonheur doit motiver le devoir ?",
        answers: ["Kant", "Aristote", "Epicure"], 
        correct: 1,
        explanation: "Aristote soutient que le bonheur peut être une motivation pour l'accomplissement du devoir."
    },

    // question n°88 : 
    { 
        question: "Qui attache le devoir à la justice sociale ?",
        answers: ["Tocqueville", "Durkheim", "Kant"], 
        correct: 1,
        explanation: "Durkheim discute que le devoir est intrinsèquement lié à la poursuite de la justice sociale."
    },

    // question n°89 : 
    { 
        question: "Quel philosophe propose que 'les devoirs sont des attentes sociales' ?",
        answers: ["Weber", "Durkheim", "Foucault"], 
        correct: 1,
        explanation: "Émile Durkheim souligne le rôle des devoirs enracinés dans les attentes sociales."
    },

    // question n°90 : 
    { 
        question: "À quel mouvement politique associe-t-on le devoir d'égalité ?",
        answers: ["Socialisme", "Libéralisme", "Conservatisme"], 
        correct: 0,
        explanation: "Le socialisme promeut le devoir d'égalité et de justice au sein de l'État."
    },

    // question n°91 : 
    { 
        question: "Qui a dit : 'Le devoir est lié à la souffrance humaine' ?",
        answers: ["Hegel", "Nietzsche", "Epicure"], 
        correct: 1,
        explanation: "Friedrich Nietzsche relie le devoir à la résistance face à la souffrance humaine."
    },

    // question n°92 : 
    { 
        question: "Qui a introduit le principe de 'bonnes intentions' comme devoir ?",
        answers: ["Kant", "Sartre", "Mill"], 
        correct: 0,
        explanation: "Kant défend que les bonnes intentions sont fondamentales dans l'accomplissement du devoir."
    },

    // question n°93 : 
    { 
        question: "Qui inscrit le devoir dans le cadre humaniste ?",
        answers: ["Dewey", "Locke", "Kant"], 
        correct: 2,
        explanation: "Kant développe une éthique humaniste mettant de l’accent sur le devoir moral envers l’humanité."
    },

    // question n°94 : 
    { 
        question: "Qui relie le devoir à la pratique des valeurs culturelles ?",
        answers: ["Weber", "Bourdieu", "Mill"], 
        correct: 1,
        explanation: "Pierre Bourdieu explore comment le devoir est façonné par les hiérarchies culturelles."
    },

    // question n°95 : 
    { 
        question: "Qui considère que le devoir est un libre choix ?",
        answers: ["Sartre", "Kierkegaard", "Mill"], 
        correct: 0,
        explanation: "Jean-Paul Sartre argue que le devoir est un choix individuel conditionné par la liberté."
    },

    // question n°96 : 
    { 
        question: "Quel auteur plaide que l'État devrait éduquer les devoirs civiques ?",
        answers: ["Dewey", "Tocqueville", "Rousseau"], 
        correct: 0,
        explanation: "John Dewey soutient que l'éducation civique est essentielle pour enseigner les devoirs sociaux."
    },

    // question n°97 : 
    { 
        question: "Qui a abordé les 'devoirs universels' chez les êtres humains ?",
        answers: ["Sartre", "Kant", "Mill"], 
        correct: 1,
        explanation: "Kant propose des devoirs universels qui s'appliquent à tous les individus indépendamment de la culture."
    },

    // question n°98 : 
    { 
        question: "Qui relie le devoir à l'engagement actif dans la société ?",
        answers: ["Dewey", "Sartre", "Arendt"], 
        correct: 1,
        explanation: "Jean-Paul Sartre soutient que l'engagement est impératif en tant que devoir moral en société."
    },

    // question n°99 : 
    { 
        question: "Qui a dit que 'nous avons le devoir de lutter contre l'oppression' ?",
        answers: ["Marx", "Locke", "Durkheim"], 
        correct: 0,
        explanation: "Karl Marx positionne le devoir de lutte contre l'oppression des classes sociales."
    },

    // question n°100 : 
    { 
        question: "Qui reconnaît que le devoir est souvent source de conflit intérieur ?",
        answers: ["Kant", "Freud", "Sartre"], 
        correct: 1,
        explanation: "Sigmund Freud explique que le devoir peut engendrer des conflits psychologiques."
    }
];