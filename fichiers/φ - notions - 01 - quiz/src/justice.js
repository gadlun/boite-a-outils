const questions = [
    // question n°1 :
    { 
        question: "Quelle est la définition classique de la justice selon Aristote ?", 
        answers: ["La redistribution des richesses", "L’égalité des droits pour tous", "L’équilibre entre le bien et le mal"], 
        correct: 1, 
        explanation: "Aristote définit la justice comme l'égalité des droits et des devoirs pour tous les citoyens."
    },
    
    // question n°2 :
    { 
        question: "Qui a affirmé que 'la justice est la première vertu des institutions sociales' ?", 
        answers: ["Platon", "Rawls", "Kant"], 
        correct: 1, 
        explanation: "John Rawls soutient que la justice doit être la base de toute institution sociale."
    },
    
    // question n°3 :
    { 
        question: "Quel est le lien entre justice et égalité selon le utilitarisme ?", 
        answers: ["L'égalité est primordiale", "La justice doit maximiser le bonheur collectif", "La justice ne se soucie pas de l'égalité"], 
        correct: 1, 
        explanation: "Le utilitarisme soutient que la justice doit viser à maximiser le bonheur pour le plus grand nombre."
    },
    
    // question n°4 :
    { 
        question: "Qui a développé le concept de 'justice distributive' ?", 
        answers: ["Aristote", "Rawls", "Marx"], 
        correct: 0, 
        explanation: "Aristote a introduit l'idée de justice distributive, où les ressources doivent être réparties de manière équitable."
    },
    
    // question n°5 :
    { 
        question: "Dans quelle œuvre Kant traite-t-il de la justice ?", 
        answers: ["Critique de la raison pure", "Fondements de la métaphysique des mœurs", "La paix perpétuelle"], 
        correct: 1, 
        explanation: "Dans 'Fondements de la métaphysique des mœurs', Kant aborde la notion de justice et de moralité."
    },
    
    // question n°6 :
    { 
        question: "Quel philosophe s'est opposé aux théories de justice basées uniquement sur le résultat ?", 
        answers: ["Rawls", "Mill", "Nozick"], 
        correct: 2, 
        explanation: "Robert Nozick a critiqué les théories qui se concentrent uniquement sur la distribution des résultats au détriment des droits individuels."
    },
    
    // question n°7 :
    { 
        question: "Quelle assertion définit la justice réparatrice ?", 
        answers: ["Punir les criminels", "Réhabiliter les délinquants", "Restaurer les relations entre victimes et coupables"], 
        correct: 2, 
        explanation: "La justice réparatrice vise à rétablir les victimes et les délinquants en favorisant le dialogue et la réconciliation."
    },
    
    // question n°8 :
    { 
        question: "Qui a proposé la théorie de la justice comme équité ?", 
        answers: ["Aristote", "Rawls", "Dworkin"], 
        correct: 1, 
        explanation: "John Rawls a mis en avant la théorie de la justice comme équité pour assurer des principes justes dans les société."
    },
    
    // question n°9 :
    { 
        question: "Comment Aristote distingue-t-il la justice corrective et la justice distributive ?", 
        answers: ["La corrective rétablit l'ordre social", "La distributive concerne les biens matériels", "Les deux sont identiques"], 
        correct: 1, 
        explanation: "La justice corrective vise à restaurer l'équilibre après une injustice, tandis que la justice distributive traite de la répartition des biens."
    },
    
    // question n°10 :
    { 
        question: "Quel rôle la loi joue-t-elle dans la conception de la justice ?,",
        answers: ["Elle est arbitraire", "Elle définit la justice", "Elle est sans importance"], 
        correct: 1, 
        explanation: "La loi structure la société et donne un cadre à la compréhension de la justice et des droits des individus."
    },
    
    // question n°11 :
    { 
        question: "Quel philosophe a critiqué l'approche utilitariste de la justice ?", 
        answers: ["Kant", "Mill", "Bentham"], 
        correct: 0, 
        explanation: "Kant s'oppose à l'approche utilitariste, estimant que la justice ne doit pas être subordonnée à l'effet global sur le bonheur."
    },
    
    // question n°12 :
    { 
        question: "Quel concept désigne le traitement égal de tous les individus selon la loi ?", 
        answers: ["Justice sociale", "Justice formelle", "Justice réparatrice"], 
        correct: 1, 
        explanation: "La justice formelle stipule que tous les individus doivent être traités de manière égale devant la loi."
    },

    // question n°13 :
    { 
        question: "Quel lien fait-on entre justice et démocratie ?", 
        answers: ["Elles sont opposées", "Elles sont complémentaires", "La démocratie limite la justice"], 
        correct: 1, 
        explanation: "La justice est essentielle pour la démocratie, car elle garantit les droits et l'égalité devant la loi."
    },
    
    // question n°14 :
    { 
        question: "Quel auteur a affirmé que la justice doit être fondée sur le respect des droits de l'individu ?", 
        answers: ["Locke", "Rousseau", "Marx"], 
        correct: 0, 
        explanation: "John Locke a soutenu que la justice repose sur le respect des droits individuels et la protection de la propriété."
    },
    
    // question n°15 :
    { 
        question: "Qui a écrit 'La théorie de la justice' en 1971 ?", 
        answers: ["Kant", "Rawls", "Nozick"], 
        correct: 1, 
        explanation: "'La théorie de la justice' de John Rawls est un ouvrage fondamental qui redéfinit les débats autour de la justice."
    },
    
    // question n°16 :
    { 
        question: "Quelle vision de la justice est proposée par Robert Nozick dans 'Anarchy, State, and Utopia' ?", 
        answers: ["Une approche utilitariste", "Une approche libertarienne", "Une approche marxiste"], 
        correct: 1, 
        explanation: "Robert Nozick défend une vision libertarienne de la justice basée sur la propriété individuelle et la liberté."
    },
    
    // question n°17 :
    { 
        question: "Qu'est-ce que la justice sociale ?", 
        answers: ["L'égalité économique", "La répartition égale des ressources", "Le respect des droits individuels"], 
        correct: 2, 
        explanation: "La justice sociale vise à garantir que chaque individu dispose des droits et des opportunités pour s'épanouir."
    },

    // question n°18 :
    { 
        question: "Quel philosophe a lié étroitement justice et vertu ?", 
        answers: ["Aristote", "Kant", "Hegel"], 
        correct: 0, 
        explanation: "Aristote considère la justice comme une vertu morale essentielle au bien-être de la société."
    },

    // question n°19 :
    { 
        question: "Quelle est la perspective de Kant sur la notion de justice ?", 
        answers: ["C'est subjective", "Elle est universelle et objective", "Elle dépend des circonstances"], 
        correct: 1, 
        explanation: "Kant défend l'idée que la justice est une norme universelle et objective, applicable à tous."
    },

    // question n°20 :
    { 
        question: "Quelle critique souvent adressée à la justice distributive concerne l'efficacité économique ?", 
        answers: ["Elle ne favorise pas la productivité", "Elle nuit à la liberté individuelle", "Elle est arbitraire"], 
        correct: 0, 
        explanation: "Les critiques affirment que la justice distributive peut nuire aux incitations nécessaires à la productivité économique."
    },

    // question n°21 :
    { 
        question: "Quel lien fait-on entre justice et état de droit ?", 
        answers: ["Ils sont opposés", "Ils se complètent", "L'état de droit limite la justice"], 
        correct: 1, 
        explanation: "L'état de droit est essentiel pour garantir une justice équitable et indépendante."
    },

    // question n°22 :
    { 
        question: "Quel est le rôle des tribunaux dans le système de justice ?", 
        answers: ["Imposer des lois uniquement", "Interpréter et appliquer la loi", "Écrire des lois"], 
        correct: 1, 
        explanation: "Les tribunaux interprètent et appliquent la loi dans les cas spécifiques, en garantissant la justice."
    },

    // question n°23 :
    { 
        question: "Quel problème éthique soulève la peine de mort dans le débat sur la justice ?", 
        answers: ["Efficacité des systèmes judiciaires", "Équité dans le traitement", "Droits de l'individu contre l'État"], 
        correct: 2, 
        explanation: "La peine de mort soulève des questions sur la légitimité de l'État à retirer la vie à un individu."
    },

    // question n°24 :
    { 
        question: "Quel concept désigne la recherche d'une justice économique et sociale ?", 
        answers: ["Justice distributive", "Justice corrective", "Justice réparatrice"], 
        correct: 0, 
        explanation: "La justice distributive se concentre sur la répartition équitable des ressources et des biens au sein d'une société."
    },

    // question n°25 :
    { 
        question: "Quel est le propos de 'La théorie de la justice' de Rawls concernant la justice ?", 
        answers: ["Elle est relative", "Elle doit être universelle", "Elle ne peut être atteinte"], 
        correct: 1, 
        explanation: "Rawls soutient que la justice doit être universelle, fondée sur des principes équitables choisis derrière un 'voile d'ignorance'."
    },

    // question n°26 :
    { 
        question: "Qui a introduit la notion de 'la société juste' ?", 
        answers: ["Marx", "Aristote", "Rawls"], 
        correct: 2, 
        explanation: "John Rawls a défini le concept de 'société juste', fondée sur l'égalité des droits et des opportunités."
    },
    
    // question n°27 :
    { 
        question: "Quel est le lien entre justice et vertu dans la pensée d'Aristote ?", 
        answers: ["La vertu est secondaire", "La justice est une forme de vertu", "La vertu est opposée à la justice"], 
        correct: 1, 
        explanation: "Pour Aristote, la justice est une vertu qui doit guider les actions des individus dans la société."
    },

    // question n°28 :
    { 
        question: "Quel est le concept de 'jusnaturalism' ?", 
        answers: ["Droits basés sur la justice sociale", "Droits universels basés sur la nature humaine", "Droits imposés par l'État"], 
        correct: 1, 
        explanation: "Le jusnaturalism soutient que les droits et la justice sont basés sur des principes naturels, inhérents à l'humanité."
    },

    // question n°29 :
    { 
        question: "Quelle critique est souvent faite des théories utilitaristes de la justice ?", 
        answers: ["Elles négligent l'individu", "Elles n'ont aucune valeur", "Elles sont trop complexes"], 
        correct: 0, 
        explanation: "Les critiques signalent que les théories utilitaristes mettent l'accent sur le bien-être collectif en négligeant les droits individuels."
    },

    // question n°30 :
    { 
        question: "Quel rôle jouent les lois dans le maintien de la justice ?", 
        answers: ["Elles fixent des normes", "Elles sont arbitraires", "Elles limitent la liberté"], 
        correct: 0, 
        explanation: "Les lois établissent des normes qui régulent le comportement, permettant le maintien d'un ordre juste dans la société."
    },

    // question n°31 :
    { 
        question: "Quelle est la distinction entre justice et équité selon Rawls ?", 
        answers: ["Ils sont identiques", "Justice = procédures, équité = résultats", "Justice = résultats, équité = procédés"], 
        correct: 1, 
        explanation: "Rawls distingue la justice comme étant une question de règles et équité comme étant une question de résultats."
    }, 

    // question n°32 :
    { 
        question: "Quel est le rôle de la justice pénale ?", 
        answers: ["Prévenir les crimes", "Punir uniquement", "Réhabiliter les délinquants"], 
        correct: 0, 
        explanation: "La justice pénale vise principalement à prévenir les crimes, en plus de punir et réhabiliter les délinquants."
    },

    // question n°33 :
    { 
        question: "Comment Hegel conceptualise-t-il la justice ?", 
        answers: ["Comme une norme sociétale", "Comme un idéal abstrait", "Comme une réalisation historique"], 
        correct: 2, 
        explanation: "Hegel voit la justice comme une réalisation qui se manifeste au fil de l'évolution historique des sociétés."
    },

     // question n°34 :
    { 
        question: "Quel est le lien entre justice sociale et droits de l'homme ?", 
        answers: ["Ils sont opposés", "Ils sont emblématiques", "Ils se complètent"], 
        correct: 2, 
        explanation: "La justice sociale et les droits de l'homme sont interconnectés, renforçant les revendications pour l'égalité et la dignité."
    },

    // question n°35 :
    { 
        question: "Qu'est-ce que la justice procédurale ?", 
        answers: ["Justice basée sur des résultats", "Justice fondée sur des règles équitables", "Justice ne prenant pas en compte les individus"], 
        correct: 1, 
        explanation: "La justice procédurale se fonde sur des processus équitables et transparents dans la prise de décision."
    },

    // question n°36 :
    { 
        question: "Quel est le modèle de justice basé sur l'égalité ethnico-communautaire ?", 
        answers: ["Justice communautaire", "Justice sociétale", "Justice institutionnelle"], 
        correct: 0, 
        explanation: "La justice communautaire traite la notion d'égalité en valorisant le respect des particularités culturelles."
    }, 

    // question n°37 :
    { 
        question: "Quel philosophe a formulé la théorie de la justice par reconnaissance ?", 
        answers: ["Hegel", "Taylor", "Sen"], 
        correct: 1, 
        explanation: "Charles Taylor a introduit la théorie de la justice par reconnaissance, valorisant l'identité et la dignité."
    },

    // question n°38 :
    { 
        question: "Quel impact la culture a-t-elle sur la notion de justice ?", 
        answers: ["Aucun impact", "Elle influence les perceptions de justice", "Elle impose la justice"], 
        correct: 1, 
        explanation: "Les valeurs culturelles influencent la manière dont la justice est perçue et appliquée au sein d'une société."
    },

    // question n°39 :
    { 
        question: "Qui a plaidé pour l'égalité des droits dans le milieu du 20e siècle ?", 
        answers: ["Marx", "King", "Gandhi"], 
        correct: 1, 
        explanation: "Martin Luther King a plaidé pour l'égalité des droits et a lutté contre les discriminations raciales aux États-Unis."
    },

    // question n°40 :
    { 
        question: "Quel est l'impact des inégalités sociales sur la justice ?", 
        answers: ["Aucun impact", "Elles renforcent la justice", "Elles entravent l'accès à la justice"], 
        correct: 2, 
        explanation: "Les inégalités sociales peuvent créer des obstacles à l'accès à la justice pour certaines couches de la population."
    },

    // question n°41 :
    { 
        question: "Quel rôle joue l'altruisme dans le concept de justice ?", 
        answers: ["Il est négligeable", "C'est une vertu associée à la justice", "Il la contredit"], 
        correct: 1, 
        explanation: "L'altruisme est souvent considéré comme une vertu qui soutient et renforce les principes de justice."
    },

    // question n°42 :
    { 
        question: "Quelle affirmation résume le mieux la justice restaurative ?", 
        answers: ["Réhabilitation des victimes et des délinquants", "Sanction uniquement", "Rétribution au coupable"], 
        correct: 0, 
        explanation: "La justice restaurative promeut la réhabilitation des victimes tout en offrant une opportunité au délinquant de se racheter."
    },

    // question n°43 :
    { 
        question: "Qui a écrit 'Discipline et punir' ?", 
        answers: ["Foucault", "Marx", "Kant"], 
        correct: 0, 
        explanation: "'Discipline et punir' de Michel Foucault explore le rôle du pouvoir et des institutions dans la conception de la justice."
    },

    // question n°44 :
    { 
        question: "Quelle est la critique principale des systèmes pénaux modernes ?", 
        answers: ["Ils sont trop bureaucratiques", "Ils ne réhabilitent pas efficacement", "Ils sont inéquitables"], 
        correct: 1, 
        explanation: "Les critiques pointent souvent que les systèmes pénaux actuels échouent à réhabiliter efficacement les délinquants."
    },

    // question n°45 :
    { 
        question: "Quel est le lien entre justice et paix selon les penseurs contemporains ?", 
        answers: ["Ils s'opposent", "La justice est essentielle à la paix", "La paix est supérieure à la justice"], 
        correct: 1, 
        explanation: "La justice est souvent considérée comme un élément essentiel pour établir et maintenir la paix dans les sociétés."
    },

    // question n°46 :
    { 
        question: "Quelle relation établit Platon entre justice et bien ?", 
        answers: ["Il n'y a pas de relation", "La justice est le bien", "Le bien est inférieur à la justice"], 
        correct: 1, 
        explanation: "Platon conçoit la justice comme intrinsèquement liée au bien, faisant de la justice une valeur morale fondamentale."
    },

    // question n°47 :
    { 
        question: "Quel concept désigne l'idée que les lois doivent refléter la volonté du peuple ?", 
        answers: ["Justice sociale", "Démocratie", "Légalité"], 
        correct: 1, 
        explanation: "La démocratie repose sur l'idée que la loi doit refléter la volonté du peuple, assurant ainsi une justice collective."
    },

    // question n°48 :
    { 
        question: "Qui a discuté la justice sous le prisme de l'institution sociale ?", 
        answers: ["Marx", "Tocqueville", "Hegel"], 
        correct: 1, 
        explanation: "Alexis de Tocqueville a analysé la relation entre justice et structures institutionnelles dans ses œuvres sur la démocratie."
    },

    // question n°49 :
    { 
        question: "Qu'est-ce que l'équité dans le contexte de la justice ?", 
        answers: ["La conformité aux lois", "L'égalité des droits", "La compensation individuelle"], 
        correct: 2, 
        explanation: "L'équité implique de prendre en compte les situations individuelles des personnes lors de la distribution de la justice."
    },

    // question n°50 :
    { 
        question: "Quel est l'impact des droits humains sur la justice ?", 
        answers: ["Ils sont sans importance", "Ils constituent un cadre juridique pour la justice", "Ils ne s'appliquent que dans certains contextes"], 
        correct: 1, 
        explanation: "Les droits humains établissent un cadre juridique essentiel pour la protection de la justice dans les sociétés."
    },

    // question n°51 :
    { 
        question: "Quel type de justice se concentre sur le droit des victimes ?", 
        answers: ["Justice réparatrice", "Justice distributive", "Justice corrective"], 
        correct: 0, 
        explanation: "La justice réparatrice met l'accent sur le droit des victimes à être entendues et à voir les relations restaurées."
    },

    // question n°52 :
    { 
        question: "Quel auteur a affirmé que 'la justice est l'art d'attribuer ce qui est dû' ?", 
        answers: ["Platon", "Aristote", "Kant"], 
        correct: 1, 
        explanation: "Aristote a proposé que la justice est l'art de donner à chaque individu ce qui lui revient de droit."
    },

    // question n°53 :
    { 
        question: "Quel est le rôle des institutions judiciaires dans la promotion de la justice ?", 
        answers: ["Elles garantissent l'équité", "Elles imposent des lois", "Elles renforcent les inégalités"], 
        correct: 0, 
        explanation: "Les institutions judiciaires ont pour rôle de garantir l'équité et l'application juste des lois."
    },

    // question n°54 :
    { 
        question: "Qui a écrit 'Le Prince', traitant de l'utilisation du pouvoir à des fins justes ?", 
        answers: ["Machiavel", "Tocqueville", "Hobbes"], 
        correct: 0, 
        explanation: "'Le Prince' de Machiavel traite des stratégies politiques et des implications morales du pouvoir."
    },

    // question n°55 :
    { 
        question: "Quel lien Rawls établit-il entre justice et liberté ?", 
        answers: ["La justice est limitée par la liberté", "La liberté est subordonnée à la justice", "Justice socialiste"], 
        correct: 0, 
        explanation: "Rawls affirme que la vraie justice doit garantir des libertés fondamentales tout en respectant les droits de chacun."
    },

    // question n°56 :
    { 
        question: "Quelle critique peut-on faire au système pénitentiaire ?",
        answers: ["Il ne réhabilite pas", "Il est trop coûteux", "Il est surpeuplé"], 
        correct: 0, 
        explanation: "Le système pénitentiaire est souvent critiqué pour son incapacité à réhabiliter efficacement les délinquants."
    },

    // question n°57 :
    { 
        question: "Quel impact la pauvreté a-t-elle sur l'accès à la justice ?", 
        answers: ["Pas de lien", "Elle améliore l'accès", "Elle limite l'accès"], 
        correct: 2, 
        explanation: "La pauvreté peut constituer un obstacle à l'accès aux services juridiques et à la justice."
    },

    // question n°58 :
    { 
        question: "Quel est le but principal de la justice corrective ?", 
        answers: ["Punir uniquement", "Restaurer l'équilibre", "Réhabiliter les coupables"], 
        correct: 1, 
        explanation: "La justice corrective vise à restaurer l'équilibre en réparant les préjudices causés par des actes injustes."
    },

    // question n°59 :
    { 
        question: "Qui a écrit 'La justice sociale' en théorie politique ?", 
        answers: ["Marx", "Rawls", "Sen"], 
        correct: 2, 
        explanation: "Amartya Sen a discuté de la justice sociale en liant les capacités individuelles à la justice."
    },

    // question n°60 :
    { 
        question: "Quel lien entre justice et philosophie politique existe-t-il ?", 
        answers: ["Ils sont opposés", "Ils se complètent", "La philosophie politique est sans rapport avec la justice"], 
        correct: 1, 
        explanation: "La justice est souvent au cœur des débats en philosophie politique, car elle guide les théorie sur l'organisation sociale."
    },

    // question n°61 :
    { 
        question: "Quel est l'impact de la corruption sur la justice ?", 
        answers: ["Elle améliore la justice", "Elle entrave la justice", "Elle n'a pas d'impact"], 
        correct: 1, 
        explanation: "La corruption crée des inégalités et compromet l'intégrité des systèmes juridiques, entravant ainsi l'accès à la justice."
    },

    // question n°62 :
    { 
        question: "Quel est le lien entre justice et responsabilité individuelle ?", 
        answers: ["Ils sont opposés", "Ils se complètent", "La responsabilité est sans importance"], 
        correct: 1, 
        explanation: "La responsabilité individuelle est souvent perçue comme essentielle pour garantir une justice équitable."
    },

    // question n°63 :
    { 
        question: "Comment la justice socialiste envisage-t-elle la distribution des richesses ?", 
        answers: ["Égalitaire", "Inégalitaire", "Indifférente"], 
        correct: 0, 
        explanation: "La justice socialiste prône une distribution égalitaire des richesses pour réduire les inégalités sociales."
    },

    // question n°64 :
    { 
        question: "Quel auteur a été un défenseur des droits des femmes dans le cadre de la justice ?", 
        answers: ["Mansbridge", "Beauvoir", "Kant"], 
        correct: 1, 
        explanation: "Simone de Beauvoir a plaidé pour les droits des femmes et leur place dans les discussions sur la justice."
    },

    // question n°65 :
    { 
        question: "Quel rôle la culture joue-t-elle dans la définition de la justice ?", 
        answers: ["Aucun rôle", "Elle influence les valeurs de justice", "Elle impose des lois"], 
        correct: 1, 
        explanation: "La culture joue un rôle dans la manière dont la justice est comprise et pratiquée dans différentes sociétés."
    },

    // question n°66 :
    { 
        question: "Quel est le but principal des droits de l'homme dans le contexte de la justice ?", 
        answers: ["Imposer des sanctions", "Protéger les libertés individuelles", "Établir des lois"], 
        correct: 1, 
        explanation: "Les droits de l'homme visent à protéger les libertés fondamentales et à garantir la justice pour tous."
    },

    // question n°67 :
    { 
        question: "Qui a écrit '001530000000301234561' en connectant justice et démocratie ?", 
        answers: ["Hobbes", "Rawls", "Tocqueville"], 
        correct: 2, 
        explanation: "Alexis de Tocqueville a analysé la relation entre justice et démocratie, en explorant l'importance de l'égalité dans les sociétés."
    },

    // question n°68 :
    { 
        question: "Quel concept désigne la justice fondée sur la protection des droits individuels ?", 
        answers: ["Justice sociale", "Justice constitutionnelle", "Justice corrective"], 
        correct: 1, 
        explanation: "La justice constitutionnelle se concentre sur la protection des droits individuels garantis par la constitution."
    },

    // question n°69 :
    { 
        question: "Quel est l'impact des mouvements pour les droits civiques sur la justice ?", 
        answers: ["Ils renforcent la justice", "Ils ne portent pas à la justice", "Ils n'ont aucun effet"], 
        correct: 0, 
        explanation: "Les mouvements pour les droits civiques ont joué un rôle clé dans la promotion de la justice et de l'égalité."
    },

    // question n°70 :
    { 
        question: "Quel est le lien entre justice et moralité selon Kant ?", 
        answers: ["Ils sont indépendants", "Ils sont identiques", "La moralité est une condition de la justice"], 
        correct: 2, 
        explanation: "Kant soutient que la moralité est intrinsèquement liée à la notion de justice, car elle guide les actions justes."
    },

    // question n°71 :
    { 
        question: "Que propose le principe de précaution dans le contexte de la justice ?", 
        answers: ["Ignorer les conséquences", "Évaluer les risques avant d'agir", "Limiter les libertés"], 
        correct: 1, 
        explanation: "Le principe de précaution vise à évaluer et minimiser les risques avant de prendre des décisions, particulièrement dans des situations incertaines."
    },

    // question n°72 :
    { 
        question: "Quel concept dépeint la justice transactionnelle ?", 
        answers: ["Justice par échange", "Justice par rétribution", "Justice par engagement"], 
        correct: 0, 
        explanation: "La justice transactionnelle se concentre sur l'équité dans les transactions entre personnes, où chacun doit recevoir ce qu'il mérite."
    },

    // question n°73 :
    { 
        question: "Quel est le but de l'éducation dans la promotion de la justice ?", 
        answers: ["Aiguiser l'esprit critique", "Imposer des règles", "Éliminer les droits"], 
        correct: 0, 
        explanation: "L'éducation vise à développer l'esprit critique, ce qui est essentiel pour comprendre et promouvoir la justice."
    },
    
    // question n°74 :
    { 
        question: "Qui a abordé la notion de 'justice sociale' dans le contexte de l'histoire contemporaine ?", 
        answers: ["Kant", "Hobbes", "Piketty"], 
        correct: 2, 
        explanation: "Thomas Piketty a abordé les nouvelles dimensions de la justice sociale, liées à l'économie et aux inégalités."
    },

    // question n°75 :
    { 
        question: "Quel concept remet en question la justice comme purement punitive ?", 
        answers: ["Justice corrective", "Justice sociale", "Justice réparatrice"], 
        correct: 2, 
        explanation: "La justice réparatrice remet en question le modèle punitif, cherchant à rétablir les relations après un crime."
    },

    // question n°76 :
    { 
        question: "Quel lien établit-on entre justice et responsabilité politique ?", 
        answers: ["Responsabilité est supérieure", "Justice est indépendante", "Elles se complètent"], 
        correct: 2, 
        explanation: "La justice et la responsabilité politique sont interconnectées, chacune soutenant l'autre dans le fonctionnement d'une société."
    },

    // question n°77 :
    { 
        question: "Quelle est la critique principale des théories de justice axées sur les résultats ?", 
        answers: ["Elles sont défectueuses", "Elles négligent les droits", "Elles sont inefficaces"], 
        correct: 1, 
        explanation: "Les critiques indiquent que ces théories peuvent négliger les droits individuels au nom d'une redistribution équitable."
    },

    // question n°78 :
    { 
        question: "Qui a proposé que la justice exige une évaluation contextuelle plutôt qu'une approche unifiée ?", 
        answers: ["Derrida", "Einstein", "Dworkin"], 
        correct: 3, 
        explanation: "Ronald Dworkin a soutenu que la justice nécessite une évaluation contextuelle, tenant compte des spécificités de chaque situation."
    },

    // question n°79 :
    { 
        question: "Qu'est-ce que la justice selon la théorie des droits naturels ?", 
        answers: ["Justice est définie par la société", "Justice est universelle", "Justice n'a pas de fondements"], 
        correct: 1, 
        explanation: "La théorie des droits naturels soutient que la justice est ancrée dans des droits universels et inhérents à tous les individus."
    },

    // question n°80 :
    { 
        question: "Quel concept de justice est lié à la réparation des préjudices ?", 
        answers: ["Justice corrective", "Justice distributive", "Justice équitable"], 
        correct: 0, 
        explanation: "La justice corrective vise à réparer les préjudices en restaurant l'équilibre entre la victime et l'auteur."
    },

    // question n°81 :
    { 
        question: "Quel est l'impact de la législation sur la justice ?", 
        answers: ["Elle la limite", "Elle la trace", "Elle l'influence"], 
        correct: 2, 
        explanation: "La législation influence les perceptions et les applications de la justice au sein d'une société."
    },

    // question n°82 :
    { 
        question: "Quel concept désigne l'idée que la justice nécessite une distribution équitable des biens ?", 
        answers: ["Justice distributive", "Justice corrective", "Justice sociale"], 
        correct: 0, 
        explanation: "La justice distributive met l'accent sur la manière dont les ressources et les biens doivent être répartis de façon équitable."
    },

    // question n°83 :
    { 
        question: "Quel est l'objectif principal de la justice réparatrice ?", 
        answers: ["Restaurer l'équilibre", "Punir le coupable", "Ignorer la victime"], 
        correct: 0, 
        explanation: "La justice réparatrice vise à restaurer l'équilibre en prenant en compte les intérêts des victimes et des délinquants."
    },
    
    // question n°84 :
    { 
        question: "Que critique la théorie postcoloniale sur la justice ?", 
        answers: ["Elle n'est pas nécessaire", "Elle est souvent biaisée", "Elle est inutile"], 
        correct: 1, 
        explanation: "La théorie postcoloniale critique les notions de justice qui ne prennent pas en compte les inégalités héritées du colonialisme."
    },

    // question n°85 :
    { 
        question: "Quel auteur a souligné le lien entre justice et histoire ?",
        answers: ["Kant", "Marx", "Tocqueville"], 
        correct: 1, 
        explanation: "Karl Marx a abordé la justice en soulignant son évolution au fil de l'histoire économique et sociale."
    },

    // question n°86 :
    { 
        question: "Quel lien fait-on entre justice et bien-être individuel ?", 
        answers: ["Ils sont opposés", "Ils sont complémentaires", "Le bien-être est plus important que la justice"], 
        correct: 1, 
        explanation: "La justice est souvent perçue comme un aspect essentiel du bien-être individuel dans une société équilibrée."
    },

    // question n°87 :
    { 
        question: "Quel est l'impact de la publicité sur la justice sociale ?", 
        answers: ["Aucun impact", "Elle crée des attentes irréalistes", "Elle promeut le changement"], 
        correct: 2, 
        explanation: "La publicité peut sensibiliser le public à des inégalités sociales et inciter à des changements pour la justice."
    },

    // question n°88 :
    { 
        question: "Quel est le rôle des partenaires dans la mise en œuvre de la justice ?", 
        answers: ["Ils sont sans importance", "Ils sont essentiels", "Ils compliquent le processus"], 
        correct: 1, 
        explanation: "Les partenaires sont essentiels pour garantir une mise en œuvre réussie des principes de justice dans la société."
    },
    
    // question n°89 :
    { 
        question: "Quel est l'impact de la technologie sur la justice aujourd'hui ?", 
        answers: ["Aucun impact", "Elle complexifie les systèmes légaux", "Elle facilite l'accès à la justice"], 
        correct: 2, 
        explanation: "La technologie peut faciliter l'accès à la justice à travers des outils numériques et l'information en ligne."
    },

    // question n°90 :
    { 
        question: "Qui a introduit le concept de justice sociale dans des contextes économiques ?",
        answers: ["Karl Marx", "Mill", "Bourdieu"], 
        correct: 0, 
        explanation: "Karl Marx a introduit le concept de justice sociale dans le contexte de l'économique, en plaidant contre l'exploitation."
    }, 

    // question n°91 :
    { 
        question: "Quel lien existe entre la liberté d'expression et la justice ?", 
        answers: ["Aucun lien", "Elles s'opposent", "Elles sont interdépendantes"], 
        correct: 2, 
        explanation: "La liberté d'expression et la justice sont liées, car l'une des conditions de la justice est la possibilité de discuter et d'exprimer des idées."
    },

    // question n°92 :
    { 
        question: "Quel auteur a mis en avant les 'inégalités comme injustices' ?", 
        answers: ["Rawls", "Sen", "Dworkin"], 
        correct: 1, 
        explanation: "Amartya Sen a développé l'idée que les inégalités ne doivent pas seulement être abordées sur le plan des résultats, mais aussi du potentiel."
    },

    // question n°93 :
    { 
        question: "Quelle est la vision de la justice selon les libertariens ?", 
        answers: ["Les libertés individuelles doivent être illimitées", "La justice doit être régulée", "Elle dépend de l'État"], 
        correct: 0, 
        explanation: "Les libertariens prônent une vision de la justice où les libertés individuelles doivent être respectées sans intervention de l'État."
    },

    // question n°94 :
    { 
        question: "Quel est l'objectif de la justice économique ?", 
        answers: ["Établir l'équité", "Favoriser la croissance", "Encadrer la redistribution"], 
        correct: 0, 
        explanation: "L'objectif de la justice économique est d'établir une équité dans la distribution des ressources."
    },

    // question n°95 :
    { 
        question: "Quel auteur a écrit 'Discours sur l'origine et les fondements de l'inégalité parmi les hommes' ?", 
        answers: ["Rousseau", "Kant", "Hobbes"], 
        correct: 0, 
        explanation: "'Discours sur l'origine et les fondements de l'inégalité parmi les hommes' de Rousseau explore les concepts de justice et d'inégalité."
    },

    // question n°96 :
    { 
        question: "Quelle affirmation résume la position de l'éthique utilitariste sur la justice ?", 
        answers: ["Le bonheur du plus grand nombre", "L'égalité avant tout", "Les droits individuels sont primordiaux"], 
        correct: 0, 
        explanation: "Les utilitaristes défendent que la justice doit viser à maximiser le bonheur pour le plus grand nombre."
    },

    // question n°97 :
    { 
        question: "Quel est l'impact du colonialisme sur les notions de justice dans les sociétés contemporaines ?", 
        answers: ["Il n'a pas d'impact", "Il a des répercussions durables", "Il a été corrigé"], 
        correct: 1, 
        explanation: "Le colonialisme a laissé des impacts durables sur la justice, influençant les constructions sociales de la justice d'aujourd'hui."
    },

    // question n°98 :
    { 
        question: "Quelle est la principale demande des mouvements féministes en matière de justice ?", 
        answers: ["Égalité des droits", "Réparation pour les injustices", "La suppression des lois"], 
        correct: 0, 
        explanation: "Les mouvements féministes plaident pour l'égalité des droits comme une condition essentielle de la justice."
    },

    // question n°99 :
    { 
        question: "Quelle est la position centrale de la justice écologique ?", 
        answers: ["Protéger l'environnement", "Équilibrer les droits humains et l'environnement", "Ignorer l'environnement"], 
        correct: 1, 
        explanation: "La justice écologique plaide pour un équilibre entre les droits humains et la protection de l'environnement."
    },

    // question n°100 :
    { 
        question: "Quel est le lien entre justice et bonheur selon une perspective philosophique ?", 
        answers: ["Ils sont indépendants", "La justice est essentielle au bonheur", "Le bonheur doit primer sur la justice"], 
        correct: 1, 
        explanation: "De nombreuses philosophies estiment que la justice contribue au bien-être et au bonheur des individus dans une société."
    }
];