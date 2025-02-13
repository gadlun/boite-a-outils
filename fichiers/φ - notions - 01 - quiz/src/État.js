const questions = [
    // question n°1 : 
    { 
        question: "Qui a défini l'État comme 'un pouvoir coercitif' ?",
        answers: ["Hobbes", "Locke", "Platon"], 
        correct: 0,
        explanation: "Thomas Hobbes décrit l'État comme un pouvoir qui impose l'ordre par la force pour éviter le chaos."
    },
    
    // question n°2 : 
    { 
        question: "Quel penseur est célèbre pour sa théorie du 'contrat social' ?",
        answers: ["Rousseau", "Hobbes", "Kant"], 
        correct: 0,
        explanation: "Jean-Jacques Rousseau propose que l'État est fondé sur un contrat social entre les individus."
    },

    // question n°3 : 
    { 
        question: "Qui a soutenu que 'l'État doit garantir la liberté' ?",
        answers: ["Mill", "Hegel", "Sartre"], 
        correct: 0,
        explanation: "John Stuart Mill argue que l'État a un rôle essentiel dans la protection des libertés individuelles."
    },

    // question n°4 : 
    { 
        question: "Quel philosophe critique le pouvoir absolu de l'État ?",
        answers: ["Marx", "Hobbes", "Machiavel"], 
        correct: 2,
        explanation: "Machiavel analyse les dynamiques du pouvoir politique et critique l'autoritarisme."
    },

    // question n°5 : 
    { 
        question: "Quel concept introduit le lien entre l'État et la souveraineté ?",
        answers: ["Nation", "Pouvoir", "Légitimité"], 
        correct: 1,
        explanation: "La souveraineté est le pouvoir suprême d'un État sur son territoire et sa population."
    },

    // question n°6 : 
    { 
        question: "Qui a analysé le lien entre capitalisme et État ?",
        answers: ["Marx", "Weber", "Hegel"], 
        correct: 0,
        explanation: "Karl Marx scrute les relations entre le mode de production capitaliste et les structures étatiques."
    },

    // question n°7 : 
    { 
        question: "Qui a introduit l'idée que 'l'État est l'organe de la classe dominante' ?",
        answers: ["Engels", "Hegel", "Locke"], 
        correct: 0,
        explanation: "Friedrich Engels développe l'idée que l'État sert principalement les intérêts des classes dominantes."
    },

    // question n°8 : 
    { 
        question: "Quel auteur parle de l'État comme outil de 'domination' ?", 
        answers: ["Foucault", "Rousseau", "Marx"], 
        correct: 0,
        explanation: "Michel Foucault évoque l'État en tant qu'instrument de contrôle et de domination des populations."
    },

    // question n°9 :
    { 
        question: "Qui a théorisé que 'l'État est le garant de l'ordre social' ?",
        answers: ["Hobbes", "Markus", "Hegel"], 
        correct: 0,
        explanation: "Hobbes définissait l'État comme un pouvoir stabilisateur ayant pour fonction essentielle l'ordre social."
    },

    // question n°10 : 
    { 
        question: "Selon Rousseau, quel est le but de l'État ?",
        answers: ["Assurer le bien commun", "Accroître les impôts", "Favoriser des intérêts privés"], 
        correct: 0,
        explanation: "Rousseau soutient que l'État doit être dirigé vers le bien commun pour l'ensemble de la société."
    },

    // question n°11 : 
    { 
        question: "Qui a fondé la 'théorie de l'État pluraliste' ?",
        answers: ["Dahl", "Machiavel", "Marx"], 
        correct: 0,
        explanation: "Robert Dahl propose que l'État est une arène où plusieurs groupes d'intérêts luttent pour le pouvoir."
    },
    
    // question n°12 : 
    { 
        question: "Quel théoricien a soutenu que 'l'État doit évoluer pour s'adapter' ?",
        answers: ["Marx", "Weber", "Durkheim"], 
        correct: 2,
        explanation: "Émile Durkheim explore comment l'État doit évoluer en fonction des évolutions sociales."
    },

    // question n°13 : 
    { 
        question: "Qui argumente que 'la légitimité est un attribut essentiel de l'État' ?",
        answers: ["Weber", "Marx", "Sartre"], 
        correct: 0,
        explanation: "Max Weber insiste sur le fait que la légitimité est cruciale pour le fonctionnement d'un État."
    },

    // question n°14 : 
    { 
        question: "Qui a proposé la 'doctrine des droits des citoyens' ?",
        answers: ["Rousseau", "Locke", "Kant"], 
        correct: 1,
        explanation: "John Locke propose que l'État doit garantir les droits naturels des citoyens."
    },

    // question n°15 : 
    { 
        question: "Quel concept l'État réalise-t-il selon Hegel ?",
        answers: ["La rationalité", "La tradition", "La tyrannie"], 
        correct: 0,
        explanation: "Hegel prétend que l'État est la réalisation de la rationalité dans l'histoire."
    },

    // question n°16 : 
    { 
        question: "Qui souligne la séparation des pouvoirs dans l'État ?",
        answers: ["Montesquieu", "Rousseau", "Hobbes"], 
        correct: 0,
        explanation: "Montesquieu établit que la séparation des pouvoirs est essentielle pour éviter la tyrannie."
    },

    // question n°17 : 
    { 
        question: "Quel type d'État préconise Rousseau ?",
        answers: ["État démocratique", "État totalitaire", "État aristocratique"], 
        correct: 0,
        explanation: "Rousseau préfère un État démocratique basé sur la participation active des citoyens."
    },

    // question n°18 : 
    { 
        question: "Qui critique les inégalités au sein de l'État ?",
        answers: ["Aristote", "Marx", "Sartre"], 
        correct: 1,
        explanation: "Karl Marx analyse comment l'État crée et maintient les inégalités socio-économiques."
    },

    // question n°19 : 
    { 
        question: "Qui a introduit l'idée que 'l'État est un produit historique' ?",
        answers: ["Engels", "Weber", "Rousseau"], 
        correct: 0,
        explanation: "Engels soutient que l'État a évolué historiquement en réponse aux besoins sociaux."
    },

    // question n°20 : 
    { 
        question: "Quel auteur a abordé la 'nature humaine' dans le contexte de l'État ?",
        answers: ["Hobbes", "Rousseau", "Locke"], 
        correct: 1,
        explanation: "Rousseau affirme que l'État doit prendre en compte la nature humaine pour fonctionner."
    },

    // question n°21 : 
    { 
        question: "Qui a discuté des dangers de l'État comme 'Corruption du bien commun' ?",
        answers: ["Platon", "Marx", "Althusser"], 
        correct: 0,
        explanation: "Platon met en garde contre les dangers d'un État qui laisse place à la corruption."
    },

    // question n°22 : 
    { 
        question: "Qui a analysé le 'pouvoir constitutionnel' ?",
        answers: ["Hobbes", "Locke", "Foucault"], 
        correct: 1,
        explanation: "John Locke établit que le pouvoir doit être limité par une constitution pour protéger les droits individuels."
    },

    // question n°23 : 
    { 
        question: "Qui a introduit le concept de 'l'État providence' ?",
        answers: ["Bismarck", "Marx", "Weber"], 
        correct: 0,
        explanation: "Otto von Bismarck a été le pionnier de l'idée d'un État providence pour assurer la sécurité sociale."
    },

    // question n°24 : 
    { 
        question: "Dans quelle philosophie l'État prend-il en charge le bien commun ?",
        answers: ["Libéralisme", "Socialisme", "Anarchisme"], 
        correct: 1,
        explanation: "Le socialisme soutient que l'État doit intervenir pour promouvoir le bien-être de tous."
    },

    // question n°25 : 
    { 
        question: "Quel concept éthique propose d'améliorer l'État par l'éducation ?",
        answers: ["Éthique", "Démocratie", "Philosophie politique"], 
        correct: 2,
        explanation: "La philosophie politique insiste souvent sur le rôle de l'éducation dans la création d'un État éthique."
    },

    // question n°26 : 
    { 
        question: "Qui relie l'État à 'l'identité nationale' ?",
        answers: ["Anderson", "Sartre", "Marx"], 
        correct: 0,
        explanation: "Benedict Anderson discute de l'État en tant que construction et produit d'une identité nationale."
    },

    // question n°27 : 
    { 
        question: "Quelle pensée décrit la société comme un 'contrat social' ?",
        answers: ["Anarchisme", "François Mouhot", "Rousseau"], 
        correct: 2,
        explanation: "Jean-Jacques Rousseau place cette notion au cœur de sa philosophie politique."
    },

    // question n°28 : 
    { 
        question: "Quel concept politique associe l'État à 'la souveraineté populaire' ?",
        answers: ["Libéralisme", "Démocratie", "Totalitarisme"], 
        correct: 1,
        explanation: "La démocratie soutient que le pouvoir de l'État provient du consentement et de la participation des citoyens."
    },

    // question n°29 : 
    { 
        question: "Quel auteur a établi la 'philosophie du droit' comme voie vers un État juste ?",
        answers: ["Kant", "Rousseau", "Sartre"], 
        correct: 0,
        explanation: "Kant élabore une philosophie du droit qui cherche la justice par le biais de la raison."
    },

    // question n°30 : 
    { 
        question: "Qui a plaidé pour un 'État minimal' ?",
        answers: ["Locke", "Friedman", "Nozick"], 
        correct: 2,
        explanation: "Robert Nozick défend l'idée d'un État minimal qui protège les droits individuels sans interférer."
    },

    // question n°31 : 
    { 
        question: "Qui associe l'État à 'l'hypothèse du contrat' ?",
        answers: ["Hobbes", "Rousseau", "Locke"], 
        correct: 1,
        explanation: "Jean-Jacques Rousseau défend cette idée comme la base du pouvoir du gouvernement."
    },

    // question n°32 : 
    { 
        question: "Qui considère l'État comme un 'instrument de libération' ?",
        answers: ["Marx", "Aristote", "Sartre"], 
        correct: 0,
        explanation: "Karl Marx voit l'État comme un outil qui peut être utilisé pour libérer les opprimés."
    },

    // question n°33 : 
    { 
        question: "Quel auteur oppose de manière critique 'les classes sociales à l'État' ?",
        answers: ["Marx", "Weber", "Tocqueville"], 
        correct: 0,
        explanation: "Karl Marx analyse comment l'État est souvent un instrument au service des classes dominantes."
    },

    // question n°34 : 
    { 
        question: "Qui a discuté de l'État en relation avec 'la vie publique' ?",
        answers: ["Sartre", "John Stuart Mill", "Arendt"], 
        correct: 2,
        explanation: "Hannah Arendt souligne que l'État façonne la vie publique et sa démocratie."
    },

    // question n°35 : 
    { 
        question: "Qui relie l'État à 'la morale' dans son fonctionnement ?",
        answers: ["Kant", "Dewey", "Foucault"], 
        correct: 0,
        explanation: "Kant affirme que la moralité doit guider les décisions politiques de l'État."
    },

    // question n°36 : 
    { 
        question: "Quel concept l'État définit-il dans le cadre du 'bien commun' ?",
        answers: ["Hédonisme", "Socialisme", "Démocratie"], 
        correct: 1,
        explanation: "Le socialisme place le bien commun au centre des préoccupations de l'État."
    },

    // question n°37 : 
    { 
        question: "Quel auteur pose des questions sur la 'révolution' et l'État ?",
        answers: ["Foucault", "Bakunin", "Bakhtin"], 
        correct: 1,
        explanation: "Mikhail Bakounine questionne la nécessité et la fonction de l'État face à la révolution."
    },

    // question n°38 :
    { 
        question: "Qui a dit : 'Tout pouvoir corrompt' ?",
        answers: ["Goldman", "Acton", "Kant"], 
        correct: 1,
        explanation: "Lord Acton souligne que le pouvoir a tendance à corrompre ceux qui l'exercent."
    },

    // question n°39 : 
    { 
        question: "Quel est le but de l’incarnation de l'État selon Rousseau ?",
        answers: ["Assurer la paix", "Favoriser la guerre", "Établir des tributs"], 
        correct: 0,
        explanation: "Rousseau défend l'idée que l'État est conçu pour assurer la paix et l'harmonie sociale."
    },

    // question n°40 : 
    { 
        question: "Qui a introduit l'idée que 'l'État doit garder les classes sociales en équilibre' ?",
        answers: ["Tocqueville", "Marx", "Dahl"], 
        correct: 0,
        explanation: "Alexis de Tocqueville discute des classes sociales et de la nécessité de les équilibrer au sein de l'État."
    },

    // question n°41 : 
    { 
        question: "Qui formalise la 'théorie de la légitimité' ?",
        answers: ["Weber", "Rousseau", "Marx"], 
        correct: 0,
        explanation: "Max Weber développe une théorie de la légitimité du pouvoir exercé par l'État."
    },

    // question n°42 : 
    { 
        question: "Qui a jubilé le ‘bon sens’ comme fondement du pouvoir ?",
        answers: ["Tocqueville", "Locke", "Dewey"], 
        correct: 1,
        explanation: "John Locke marque le bon sens comme preponderance dans l'écriture d'une politique juste."
    },

    // question n°43 : 
    { 
        question: "Qui propose que 'le système politique doit être basé sur la raison' ?",
        answers: ["Kant", "Hobbes", "Sartre"], 
        correct: 0,
        explanation: "Kant plaide pour l'utilisation de la raison dans la formation d'un État juste."
    },

    // question n°44 : 
    { 
        question: "Quel concept politique définit 'le gouvernement par le peuple' ?",
        answers: ["Démocratie", "Oligarchie", "Monarchie"], 
        correct: 0,
        explanation: "La démocratie est gouvernée par la participation citoyenne et le consentement du peuple."
    },

    // question n°45 : 
    { 
        question: "Quel processus intéresse Foucault sur le sujet du pouvoir et de l'État ?",
        answers: ["Formation de gouvernement", "Amendements constitutionnels", "Élections libres"], 
        correct: 0,
        explanation: "Foucault explore comment le pouvoir s'organise et se normalise à travers les institutions."
    },
    
    // question n°46 : 
    { 
        question: "Qui aborde l'État d'un point de vue méthodologique en sociologie ?",
        answers: ["Weber", "Bourdieu", "Foucault"], 
        correct: 1,
        explanation: "Pierre Bourdieu aborde méthodiquement l'État et son impact sur la société."
    },

    // question n°47 : 
    { 
        question: "Qui voit l'État comme un garant de l'ordre social ?",
        answers: ["Hegel", "Hobbes", "Locke"], 
        correct: 1,
        explanation: "Thomas Hobbes vante l'État comme une nécessité pour maintenir l'ordre dans la société."
    },

    // question n°48 : 
    { 
        question: "Qui aborde une critique de l'État à travers le concept d'aliénation ?",
        answers: ["Marx", "Aristote", "Kant"], 
        correct: 0,
        explanation: "Karl Marx critique l'État comme un vecteur qui maintient l'aliénation des classes ouvrières."
    },

    // question n°49 : 
    { 
        question: "Qui oppose l'État à 'l'individu'? ",
        answers: ["Tocqueville", "Hobbes", "Mill"], 
        correct: 0,
        explanation: "Alexis de Tocqueville observe les tensions entre l'État et l'individu dans la démocratie."
    },

    // question n°50 : 
    { 
        question: "Qui a déclaré : 'L'État est une machine à garantir l'ordre' ?",
        answers: ["Hobbes", "Weber", "Marx"], 
        correct: 1,
        explanation: "Max Weber définit l'État principalement par sa capacité à garantir l'ordre au sein de la société."
    },

    // question n°51 : 
    { 
        question: "Qui a introduit la théorie du 'totalitarisme' ?",
        answers: ["Foucault", "Tocqueville", "Arendt"], 
        correct: 2,
        explanation: "Hannah Arendt analyse les régimes totalitaires et leurs rapports avec l'État."
    },

    // question n°52 : 
    { 
        question: "Qui a mis l'accent sur l'État comme l'incarnation de la volonté générale ?",
        answers: ["Rousseau", "Hegel", "Dewey"], 
        correct: 0,
        explanation: "Rousseau défend que l'État doit incarner la volonté générale du peuple."
    },

    // question n°53 : 
    { 
        question: "Quel concept oppose l'État et la liberté ?",
        answers: ["Totalitarisme", "Libéralisme", "Oligarchie"], 
        correct: 0,
        explanation: "Le totalitarisme est souvent considéré comme opposé à la liberté individuelle."
    },

    // question n°54 : 
    { 
        question: "Qui établit la doctrine de l'État éthique ?",
        answers: ["Kant", "Hegel", "Weber"], 
        correct: 1,
        explanation: "Hegel développe la notion d'un État éthique enraciné dans l'auto-réalisation et le bien commun."
    },

    // question n°55 : 
    { 
        question: "Quelle notion définit un État basé sur la loi ?",
        answers: ["État de droit", "État autoritaire", "État démocratique"], 
        correct: 0,
        explanation: "L'État de droit indique que les pratiques gouvernementales doivent se baser sur des lois définies."
    },

    // question n°56 : 
    { 
        question: "Qui a discuté de la 'société civile' en relation avec l'État ?",
        answers: ["Marx", "Hegel", "Rousseau"], 
        correct: 1,
        explanation: "Hegel établit que la société civile est complémentaire à l'État garantissant ordres et droits."
    },

    // question n°57 : 
    { 
        question: "Qui relie la justice à la puissance de l'État ?",
        answers: ["Aristote", "Sartre", "Kant"], 
        correct: 0,
        explanation: "Aristote postule que l'État est une entité responsable de la justice dans la société."
    },

    // question n°58 : 
    { 
        question: "Quel rôle offre la 'société démocratique' en matière d'État ?",
        answers: ["Rendre la justice", "Assurer des droits", "Gérer par la force"], 
        correct: 1,
        explanation: "La démocratie souligne la nécessité d'assurer des droits individuels au sein de l'État."
    },

    // question n°59 : 
    { 
        question: "Qui a mis l'accent sur la nécessité d'un État minimal ?",
        answers: ["Weber", "Nozick", "Locke"], 
        correct: 1,
        explanation: "Robert Nozick défend l'idée que l'État doit être limité à ses fonctions essentielles."
    },

    // question n°60 : 
    { 
        question: "Quel auteur souligne l'importance du 'droit naturel' dans l'État ?",
        answers: ["Locke", "Kant", "Rousseau"], 
        correct: 0,
        explanation: "John Locke insiste sur le droit naturel comme fondamental pour la légitimité de l'État."
    },

    // question n°61 : 
    { 
        question: "Qui a dit que l'État doit servir le 'bien commun' ?",
        answers: ["Aristote", "Hobbes", "Bourdieu"], 
        correct: 0,
        explanation: "Aristote soutient que l'État doit œuvrer pour le bien commun de tous ses citoyens."
    },

    // question n°62 : 
    { 
        question: "Qui a défini l'État comme 'un phénomène historique' ?",
        answers: ["Weber", "Marx", "Bourdieu"], 
        correct: 1,
        explanation: "Karl Marx analyse l'État comme évoluant au fil de l'évolution historique des sociétés."
    },

    // question n°63 : 
    { 
        question: "Quel concept de l'État aborde la 'décentralisation' ?",
        answers: ["État unitaire", "État fédéral", "État dictatorial"], 
        correct: 1,
        explanation: "L'État fédéral est caractérisé par une décentralisation des pouvoirs entre différents niveaux."
    },

    // question n°64 : 
    { 
        question: "Qui a écrit sur 'l'art de gouverner' dans le contexte de l'État ?",
        answers: ["Machiavel", "Kant", "Weber"], 
        correct: 0,
        explanation: "Machiavel dans 'Le Prince' discute des stratégies efficaces pour gouverner."
    },

    // question n°65 : 
    { 
        question: "Qui décrit l'État comme 'un mal nécessaire' ?",
        answers: ["Hobbes", "Locke", "Dewey"], 
        correct: 0,
        explanation: "Hobbes voit l'État comme inévitable pour éviter le chaos et maintenir l'ordre."
    },

    // question n°66 : 
    { 
        question: "Qui a abordé l'impact de l'État sur la culture et l'identité nationale ?",
        answers: ["Anderson", "Hegel", "Oakeshott"], 
        correct: 0,
        explanation: "Benedict Anderson explore comment l'État façonne l'identité et la culture nationale."
    },

    // question n°67 : 
    { 
        question: "Qui a analysé le capitalisme dans le cadre de l'État moderne ?",
        answers: ["Foucault", "Weber", "Bourdieu"], 
        correct: 1,
        explanation: "Max Weber critique le capitalisme et l'État moderne et leurs relations complexes."
    },

    // question n°68 : 
    { 
        question: "Qui a mis l'accent sur la responsabilité éthique de l'État ?",
        answers: ["Kant", "Rousseau", "Sartre"], 
        correct: 0,
        explanation: "Kant défend l'idée que l'État a une obligation éthique envers ses citoyens."
    },
    
    // question n°69 : 
    { 
        question: "Quel est le lien entre l'État et le droit selon Hobbes ?",
        answers: ["L'État est un garant du droit", "Le droit précède l'État", "L'État n'a pas besoin du droit"], 
        correct: 0,
        explanation: "Hobbes affirme que l'État est essentiel pour établir et maintenir l'ordre juridique."
    },

    // question n°70 : 
    { 
        question: "Qui a plaidé pour un gouvernement 'sans tyrannie' ?",
        answers: ["Sartre", "Wittgenstein", "Locke"], 
        correct: 2,
        explanation: "John Locke soutient que l'État doit être juste et empêcher la tyrannie face aux droits individuels."
    },

    // question n°71 : 
    { 
        question: "Qui a introduit l'idée que 'l'État doit favoriser l'éducation' ?",
        answers: ["Dewey", "Rousseau", "Kant"], 
        correct: 0,
        explanation: "John Dewey met en avant le rôle crucial de l'éducation dans la création d'une société juste."
    },
    
    // question n°72 : 
    { 
        question: "Qui a soutenu que l'État est 'un projet humain' ?",
        answers: ["Marx", "Bourdieu", "Hegel"], 
        correct: 1,
        explanation: "Pierre Bourdieu analyse l'État comme un projet social façonné par des interactions humaines."
    },

    // question n°73 : 
    { 
        question: "Quel auteur utilise le terme 'fétichisme' en lien avec l'État et la société ?",
        answers: ["Marx", "Weber", "Foucault"], 
        correct: 0,
        explanation: "Karl Marx évoque le fétichisme pour critiquer la manière dont l'État préserve les rapports de force."
    },

    // question n°74 : 
    { 
        question: "Qui connecte la justice à la légitimité de l'État ?",
        answers: ["Tocqueville", "Rousseau", "Machiavel"], 
        correct: 0,
        explanation: "Alexis de Tocqueville montre que la justice est essentielle à la légitimité d'un État."
    },

    // question n°75 : 
    { 
        question: "Qui affirme que l'État doit 'agir de manière impartiale' ?",
        answers: ["Hobbes", "Mill", "Montesquieu"], 
        correct: 2,
        explanation: "Montesquieu propose que l'État doit agir objectivement pour protéger les droits de tous."
    },

    // question n°76 : 
    { 
        question: "Qui a proposé que 'l'État est l'outil des classes dirigeantes' ?",
        answers: ["Engels", "Marx", "Weber"], 
        correct: 1,
        explanation: "Karl Marx soutient que l'État est un instrument au service des intérêts des classes dominantes."
    },
    
    // question n°77 : 
    { 
        question: "Qui a argumenté que la démocratie nécessite un engagement civique ?",
        answers: ["Mill", "Tocqueville", "Dewey"], 
        correct: 1,
        explanation: "Alexis de Tocqueville insiste sur l'importance de l'engagement civique pour la démocratie."
    },

    // question n°78 : 
    { 
        question: "Qui a dit que 'le pouvoir politique doit être limité par un système de droits' ?",
        answers: ["Hobbes", "Locke", "Weber"], 
        correct: 1,
        explanation: "Locke argumente que les droits naturels doivent limiter le pouvoir de l'État."
    },

    // question n°79 : 
    { 
        question: "Qui a soutenu que 'l'État doit protéger les plus vulnérables' ?",
        answers: ["Rousseau", "Marx", "Machiavel"], 
        correct: 0,
        explanation: "Rousseau défend l'idée que l'État a une responsabilité de veiller sur les plus faibles."
    },

    // question n°80 : 
    { 
        question: "Qui a associé le concept d'État avec le 'contrat social' dans le contexte de la justice ?",
        answers: ["Locke", "Hobbes", "Rousseau"], 
        correct: 2,
        explanation: "Rousseau évoque le contrat social comme une notion centrale de la justice politique."
    },

    // question n°81 : 
    { 
        question: "Qui discute les dangers de la bureaucratie ?",
        answers: ["Weber", "Marx", "Locke"], 
        correct: 0,
        explanation: "Max Weber examine comment la bureaucratie peut conduire à une rationalisation excessive."
    },

    // question n°82 : 
    { 
        question: "Qui critique la centralisation excessive de l'État ?",
        answers: ["Engels", "Bakunin", "Marx"], 
        correct: 1,
        explanation: "Mikhail Bakounine critique la centralisation comme nuisible à la liberté individuelle."
    },

    // question n°83 : 
    { 
        question: "Qui a déclaré que 'l'État a besoin de légitimité' ?",
        answers: ["Weber", "Hobbes", "Foucault"], 
        correct: 0,
        explanation: "Max Weber définit la légitimité comme cruciale au fonctionnement de l'État."
    },

    // question n°84 : 
    { 
        question: "Quel auteur souligne le lien entre État et violence ?",
        answers: ["Foucault", "Locke", "Weber"], 
        correct: 0,
        explanation: "Michel Foucault examine comment l'État utilise la violence pour maintenir la domination."
    },

    // question n°85 : 
    { 
        question: "Qui a écrit sur la 'nature de l'égalité' au sein de l'État ?",
        answers: ["Rousseau", "Mill", "Kant"], 
        correct: 1,
        explanation: "John Stuart Mill explore l'égalité et la justice dans le cadre de l'État démocratique."
    },

    // question n°86 : 
    { 
        question: "Quel auteur propose un État 'entreprise' ?",
        answers: ["Weber", "Berle", "Bertrand"], 
        correct: 1,
        explanation: "Adolf Berle évoque l'idée d'un État commerce et ses relations complexes avec le capitalisme."
    },

    // question n°87 : 
    { 
        question: "Qui a assisté à la crise de l'État moderne ?",
        answers: ["Kant", "Durkheim", "Foucault"], 
        correct: 2,
        explanation: "Foucault analyse comment l'État moderne lutte pour maintenir son autorité face aux changements."
    },
    
    // question n°88 : 
    { 
        question: "Qui a dit que 'l'État est là pour nous défendre' ?",
        answers: ["Hobbes", "Locke", "Rousseau"], 
        correct: 1,
        explanation: "Locke défend l'État comme protecteur des droits naturels des individus."
    },

    // question n°89 : 
    { 
        question: "Qui a formé l'idée de la 'totalité fonctionnelle' dans l’État ?",
        answers: ["Hegel", "Locke", "Weber"], 
        correct: 0,
        explanation: "Hegel dit que l'État doit être perçu comme une totalité fonctionnant pour la raison."
    },

    // question n°90 : 
    { 
        question: "Qui étudie le concept de l'autorité au sein de l'État ?",
        answers: ["Weber", "Sartre", "Dewey"], 
        correct: 0,
        explanation: "Max Weber définit différents types d'autorité qui façonnent l'État."
    },

    // question n°91 : 
    { 
        question: "Quel mouvement politique oriente le contrôle par des institutions décentralisées ?",
        answers: ["Anarchisme", "Libéralisme", "Collectivisme"], 
        correct: 0,
        explanation: "L’anarchisme prône des structures décentralisées pour éviter tout contrôle autoritaire."
    },

    // question n°92 : 
    { 
        question: "Qui a mis l'accent sur la 'légitimité et l'autorité' dans l'État ?",
        answers: ["Locke", "Weber", "Tocqueville"], 
        correct: 1,
        explanation: "Max Weber analyse le lien entre légitimité et autorité comme fondamental pour le fonctionnement de l'État."
    },

    // question n°93 : 
    { 
        question: "Qui voit le bonheur comme le 'but ultime' de l'État ?",
        answers: ["Rousseau", "Kant", "Locke"], 
        correct: 0,
        explanation: "Rousseau définit le bonheur comme l'objectif premier pour un État bien ordonné."
    },

    // question n°94 : 
    { 
        question: "Qui parle du 'pouvoir discrétionnaire' de l'État ?",
        answers: ["Sartre", "Weber", "Machiavel"], 
        correct: 1,
        explanation: "Max Weber discutent du pouvoir discrétionnaire que détient l'État pour prendre des décisions."
    },

    // question n°95 : 
    { 
        question: "Qui a dit que 'l'État ne peut être contesté' ?",
        answers: ["Locke", "Kant", "Hobbes"], 
        correct: 2,
        explanation: "Hobbes affirme que l'État doit être respecté pour garantir la sécurité et l'ordre."
    },

    // question n°96 : 
    { 
        question: "Qui souligne l'importance d'un État 'dynamique' ?",
        answers: ["Schmidt", "Weber", "Bourdieu"], 
        correct: 0,
        explanation: "Carl Schmitt parle de l'importance d'un État qui s'adapte rapidement aux réalités."
    },

    // question n°97 : 
    { 
        question: "Quel philosophe propose une 'importance sur l'individu' par rapport à l'État ?",
        answers: ["Rousseau", "Sartre", "Locke"], 
        correct: 1,
        explanation: "Jean-Paul Sartre place l'individu au centre du débat philosophique sur l'État."
    },

    // question n°98 : 
    { 
        question: "Qui a introduit le concept de la 'société civile' au sein du fonctionnement de l'État ?",
        answers: ["Tocqueville", "Marx", "Hegel"], 
        correct: 0,
        explanation: "Tocqueville discute de la façon dont la société civile complète l'État."
    },
    
    // question n°99 : 
    { 
        question: "Qui affirme que 'l'État est l'outil de répression des classes dominantes' ?",
        answers: ["Marx", "Engels", "Sartre"], 
        correct: 0,
        explanation: "Karl Marx parle de l'État comme d'un instrument de contrôle des classes dominantes sur les opprimés."
    },

    // question n°100 : 
    { 
        question: "Qui a mis en avant la 'psychologie de l'État' ?",
        answers: ["Bourdieu", "Savant", "Durkheim"], 
        correct: 0,
        explanation: "Pierre Bourdieu investit une dimension psychologique sur comment l'État influence les comportements."
    }
];