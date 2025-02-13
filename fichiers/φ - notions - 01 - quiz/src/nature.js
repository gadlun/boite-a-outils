const questions = [
    // question n°1 :
    { 
        question: "Quelle est la définition classique de la nature ?", 
        answers: ["L'ensemble des éléments non modifiés par l'homme", "La création divine", "Les instincts de l'homme"], 
        correct: 0, 
        explanation: "La nature fait généralement référence à l'ensemble des éléments physiques dans leur état non modifié par l'homme."
    },
    
    // question n°2 :
    { 
        question: "Qui a affirmé que la nature est une expression de la volonté divine ?", 
        answers: ["Kant", "Platon", "Descartes"], 
        correct: 1, 
        explanation: "Platon a proposé que la nature est un reflet de la volonté divine et de l'ordre platonic."
    },
    
    // question n°3 :
    { 
        question: "Quel est le lien entre l'homme et la nature selon Rousseau ?", 
        answers: ["Les hommes sont supérieurs à la nature", "L'homme est naturellement bon et corruptible par la société", "L'homme doit dominer la nature"], 
        correct: 1, 
        explanation: "Rousseau soutient que l'homme naît bon et que c'est la société qui le corrompt, créant ainsi une rupture avec la nature."
    },
    
    // question n°4 :
    { 
        question: "Quelle est la position de Descartes par rapport à la nature ?", 
        answers: ["Elle est un obstacle à l'esprit", "Elle est à connaître et à maîtriser", "Elle est la pureté de l'âme"], 
        correct: 1, 
        explanation: "Descartes croyait que la nature devait être étudiée et maîtrisée par la raison et la science."
    },
    
    // question n°5 :
    { 
        question: "Quel est le concept de 'l'État de nature' ?", 
        answers: ["Conditions de vie primitive", "L'état des sociétés modernes", "Une utopie sociale"], 
        correct: 0, 
        explanation: "L'État de nature désigne un état théorique des sociétés humaines avant l'établissement des lois et des structures sociales."
    },
    
    // question n°6 :
    { 
        question: "Qui a écrit 'Le Contrat Social' ?", 
        answers: ["Rousseau", "Locke", "Hobbes"], 
        correct: 0, 
        explanation: "Rousseau a publié 'Le Contrat Social' en 1762, y défendant la notion de contract social comme fondement de la société."
    },
    
    // question n°7 :
    { 
        question: "Quel philosophe a introduit l'idée que la nature est un modèle d'harmonie ?", 
        answers: ["Aristote", "Kant", "Hegel"], 
        correct: 2, 
        explanation: "Hegel a proposé que la nature représente une forme d'harmonie dialectique en développement."
    },
    
    // question n°8 :
    { 
        question: "Quel est le lien entre la nature et l'homme selon les pensées écologiques modernes ?", 
        answers: ["L'homme est un intrus dans la nature", "L'homme doit vivre en harmonie avec la nature", "La nature doit être totalement exploitée"], 
        correct: 1, 
        explanation: "Les pensées écologiques modernes prônent une coexistence harmonieuse entre l'homme et la nature, dans le respect des écosystèmes."
    },
    
    // question n°9 :
    { 
        question: "Qui considère que la nature a une valeur intrinsèque ?", 
        answers: ["L'anthropocentrisme", "L'écocentrisme", "Le utilitarisme"], 
        correct: 1, 
        explanation: "L'écocentrisme soutient que la nature possède une valeur et une importance indépendantes des intérêts humains."
    },
    
    // question n°10 :
    { 
        question: "Quel concept philosophique relie l'homme et la nature ?", 
        answers: ["Dualisme", "Holisme", "Indifférence"], 
        correct: 1, 
        explanation: "Le holisme lie l'homme et la nature comme des parties intégrantes d'un tout plus vaste et interconnecté."
    },
    
    // question n°11 :
    { 
        question: "Quel est le point de vue des stoïciens sur la nature ?", 
        answers: ["La nature est une force destructrice", "Il faut vivre selon la nature", "La nature est irrationnelle"], 
        correct: 1, 
        explanation: "Les stoïciens croyaient qu'il était essentiel de vivre en accord avec la nature et les lois naturelles."
    },
    
    // question n°12 :
    { 
        question: "Quel lien Rousseau établit-il entre nature et liberté ?", 
        answers: ["La nature confine à l'esclavage", "L'homme est libre dans la nature", "La liberté est une illusion"], 
        correct: 1, 
        explanation: "Rousseau soutient que l'homme est naturellement libre lorsqu'il est éloigné des conventions sociales."
    },
    
    // question n°13 :
    { 
        question: "Quel est le défi que pose le changement climatique par rapport à la nature ?", 
        answers: ["Il n'y a aucun défi", "Il bouleverse l'équilibre naturel", "Il renforce le respect envers la nature"], 
        correct: 1, 
        explanation: "Le changement climatique bouleverse l'équilibre écologique, posant de sérieux défis à la nature et à l'humanité."
    },
    
    // question n°14 :
    { 
        question: "Qui a été un pionnier dans l'argumentation en faveur de la protection de la nature ?", 
        answers: ["Leopold", "Rousseau", "Kant"], 
        correct: 0, 
        explanation: "Aldo Leopold est connu pour ses contributions à la conservation et son plaidoyer en faveur d'une éthique du respect de la nature."
    },
    
    // question n°15 :
    { 
        question: "Quel est le lien entre nature et culture selon la théorie de la construction sociale ?", 
        answers: ["Ils sont opposés", "La culture est supérieure à la nature", "La culture façonne la perception de la nature"], 
        correct: 2, 
        explanation: "La théorie de la construction sociale soutient que la culture influence la manière dont nous percevons et interagissons avec la nature."
    },
    
    // question n°16 :
    { 
        question: "Quel est le point de vue de Kant sur la nature ?", 
        answers: ["Elle est immorale", "Elle est un modèle moralement neutre", "Elle doit être maîtrisée"], 
        correct: 1, 
        explanation: "Kant considère la nature comme un modèle moralement neutre, selon lequel les actions humaines peuvent être jugées."
    },

    // question n°17 :
    { 
        question: "Qui a introduit la notion de 'nature humaine' ?", 
        answers: ["Socrate", "Rousseau", "Aristote"], 
        correct: 2, 
        explanation: "Aristote a profondément exploré la notion de nature humaine, soulignant l'importance de la raison et de la vertu."
    },

    // question n°18 :
    { 
        question: "Quel est le lien entre nature et éthique environnementale ?", 
        answers: ["Aucun lien", "L'éthique découle des lois de la nature", "L'éthique est fondée sur le respect de la nature"], 
        correct: 2, 
        explanation: "L'éthique environnementale se base sur l'idée que respecter la nature est essentiel pour la justice envers les générations futures."
    },

    // question n°19 :
    { 
        question: "Quel effet a la révolte contre la nature dans la philosophie moderne ?", 
        answers: ["Elle est bénéfique", "Elle mène à l'aliénation", "Elle découvre de nouvelles opportunités"], 
        correct: 1, 
        explanation: "La révolte contre la nature est souvent vue comme source d'aliénation et de déséquilibre dans la relation entre l'homme et son environnement."
    },

    // question n°20 :
    { 
        question: "Qui a marqué le concept de 'philosophie de la nature' ?", 
        answers: ["Hegel", "Fichte", "Heidegger"], 
        correct: 0, 
        explanation: "Hegel a marqué le concept de philosophie de la nature par sa exploration des lois naturelles et de leur développement."
    },

    // question n°21 :
    { 
        question: "Quel est le rapport entre la technologie et la nature dans la pensée contemporaine ?", 
        answers: ["La technologie est l'ennemie de la nature", "La technologie améliore la nature", "La technologie peut aider à préserver la nature"], 
        correct: 2, 
        explanation: "La technologie, lorsqu'elle est utilisée de manière responsable, peut contribuer à la protection et à la préservation de la nature."
    },

    // question n°22 :
    { 
        question: "Quel lien établit-on entre nature et bonheur selon certaines philosophies ?", 
        answers: ["Ils sont indépendants", "Le bonheur est trouvé dans la nature", "La nature entrave le bonheur"], 
        correct: 1, 
        explanation: "Certaines philosophies soutiennent que la connexion avec la nature est essentielle pour atteindre le bonheur et l'épanouissement personnel."
    },

    // question n°23 :
    { 
        question: "Quel est l'impact de l'urbanisation sur la perception de la nature ?", 
        answers: ["Aucun impact", "Elle renforce l'importance de la nature", "Elle peut altérer notre relation avec la nature"], 
        correct: 2, 
        explanation: "L'urbanisation souvent réduit les interactions directes avec la nature, modifiant ainsi notre perception et notre appréciation."
    },

    // question n°24 :
    { 
        question: "Quel est le lien entre la nature et la créativité artistique ?", 
        answers: ["La nature n'inspire pas l'art", "L'art est une imitation de la nature", "La créativité artistique déforme la nature"], 
        correct: 1, 
        explanation: "La nature a longtemps été une source d'inspiration pour les artistes, influençant leur processus créatif."
    },

    // question n°25 :
    { 
        question: "Quel est le principe de la 'biophilie' ?", 
        answers: ["La préservation des espèces", "L'amour de la nature et des créatures vivantes", "Une vision utilitariste de la nature"], 
        correct: 1, 
        explanation: "La biophilie est l'idée que les humains ont une connexion innée avec la nature et les autres formes de vie."
    },
    
    // question n°26 :
    { 
        question: "Quel lien fait-on entre philosophie et nature dans la pensée romantique ?", 
        answers: ["La nature est sans importance", "La nature est vue comme un reflet de l'âme humaine", "La nature est dégradée"], 
        correct: 1, 
        explanation: "La pensée romantique établit un lien étroit entre la nature et l'âme humaine, considérant la nature comme un miroir des sentiments intérieurs."
    },

    // question n°27 :
    { 
        question: "Quel est le rôle des rites et traditions dans le lien entre l'homme et la nature ?", 
        answers: ["Ils créent une rupture", "Ils renforcent la connexion culturelle", "Ils sont inutiles"], 
        correct: 1, 
        explanation: "Les rites et traditions souvent établissent et renforcent la connexion culturelle entre l'homme et la nature."
    },

    // question n°28 :
    { 
        question: "Quel philosophe a proposé une éthique du care en lien avec la nature ?", 
        answers: ["Lévinas", "Held", "Rawls"], 
        correct: 1, 
        explanation: "Virginia Held a proposé une éthique du care qui souligne l'importance des relations interauthentiques avec la nature."
    },

    // question n°29 :
    { 
        question: "Quelle est l'importance de la nature dans la culture affective ?", 
        answers: ["Elle est sans impact", "Elle façonne les émotions humaines", "Elle est uniquement décorative"], 
        correct: 1, 
        explanation: "La nature joue un rôle important en influençant les émotions et les sentiments des individus."
    },

    // question n°30 :
    { 
        question: "Quel effet peut avoir l'art sur la perception de la nature ?", 
        answers: ["Il la déforme", "Il peut sensibiliser à sa protection", "Il n'a aucun effet"], 
        correct: 1, 
        explanation: "L'art peut sensibiliser les gens à la beauté de la nature et à la nécessité de sa préservation."
    },

    // question n°31 :
    { 
        question: "Quel est le concept de 'greenwashing' ?", 
        answers: ["Les efforts de protection de l'environnement", "La manipulation du langage environnemental", "La responsabilité sociale des entreprises"], 
        correct: 1, 
        explanation: "Le greenwashing désigne une pratique où des entreprises prétendent être respectueuses de l'environnement sans réelles actions concrètes."
    }, 

    // question n°32 :
    { 
        question: "Quel est le rapport entre nature et santé selon certaines études modernes ?", 
        answers: ["Aucun rapport", "La connexion à la nature améliore la santé mentale", "La nature est nuisible pour la santé"], 
        correct: 1, 
        explanation: "De nombreuses études montrent que le contact avec la nature peut avoir des bienfaits significatifs sur la santé mentale des individus."
    },

    // question n°33 :
    { 
        question: "Quel rôle le paysage joue-t-il dans la projection des sentiments humains ?", 
        answers: ["Il est négligeable", "Il est souvent romantisé", "Il crée une distance"], 
        correct: 1, 
        explanation: "Le paysage naturel est souvent romancé dans l'art et la littérature, projetant des sentiments humains et des réflexions sur la nature."
    },

    // question n°34 :
    { 
        question: "Quel est le lien entre nature et spiritualité dans de nombreuses cultures ?", 
        answers: ["Aucun lien", "La nature est déifiée", "La spiritualité ignore la nature"], 
        correct: 1, 
        explanation: "Dans de nombreuses cultures, la nature est souvent considérée comme sacrée et associée à des pratiques spirituelles."
    },

    // question n°35 :
    { 
        question: "Qui a été un fervent défenseur du concept de 'nature sauvage' ?", 
        answers: ["Muir", "Leopold", "Thoreau"], 
        correct: 0, 
        explanation: "John Muir a été un défenseur passionné de la nature sauvage et a joué un rôle clé dans le mouvement de conservation."
    },

    // question n°36 :
    { 
        question: "Quel est le rôle des mythes environnementaux dans la société contemporaine ?", 
        answers: ["Ils sont sans valeur", "Ils façonnent la compréhension de la nature", "Ils compliquent la réalité"], 
        correct: 1, 
        explanation: "Les mythes environnementaux peuvent façonner notre compréhension de la nature et influencer les attitudes envers la protection de l'environnement."
    },

    // question n°37 :
    { 
        question: "Quel est l'impact de la destruction des ressources naturelles sur la justice sociale ?", 
        answers: ["Il n'y a pas d'impact", "Cela crée des inégalités", "Cela favorise le développement équitable"], 
        correct: 1, 
        explanation: "La destruction des ressources naturelles peut exacerber les inégalités sociales et les injustices dans les sociétés." 
    },

    // question n°38 :
    { 
        question: "Quel concept décrit le lien profond entre l'homme et le vivant ?", 
        answers: ["Biophilie", "Anthropocentrisme", "Écocentrisme"], 
        correct: 0, 
        explanation: "La biophilie désigne l'affinité innée de l'homme pour le vivant et la nature qui l'entoure."
    },

    // question n°39 :
    { 
        question: "Quel est le rôle des politiques environnementales dans la protection de la nature ?", 
        answers: ["Elles sont sans impact", "Elles doivent réglementer l'exploitation", "Elles favorisent les abus"], 
        correct: 1, 
        explanation: "Les politiques environnementales sont mises en place pour réglementer l'exploitation des ressources et protéger la nature."
    },

    // question n°40 :
    { 
        question: "Quelle philosophie aborde la nature avec une attention égale à la liberté humaine ?", 
        answers: ["Libertarianisme", "Écologisme", "Impérialisme"], 
        correct: 1, 
        explanation: "L'écologisme chercher à harmoniser la nature avec la liberté humaine, considérant que les deux sont liées."
    },

    // question n°41 :
    { 
        question: "Quel est l'effet de l'industrialisation sur la nature ?", 
        answers: ["Amélioration de la nature", "Exploitation des ressources", "Protection des écosystèmes"], 
        correct: 1, 
        explanation: "L'industrialisation a généralement conduit à l'exploitation des ressources naturelles, souvent au détriment de l'environnement."
    },

    // question n°42 :
    { 
        question: "Quel est le rôle de l'éducation environnementale ?", 
        answers: ["Ignorer la nature", "Sensibiliser à la protection de la nature", "Enseigner uniquement des lois"], 
        correct: 1, 
        explanation: "L'éducation environnementale vise à sensibiliser les individus à la nécessité de préserver et de protéger la nature."
    },

    // question n°43 :
    { 
        question: "Quel est le lien entre nature et créativité artistique ?", 
        answers: ["La nature n'inspire pas l'art", "La nature est un sujet d'inspiration", "La créativité n'a pas besoin de la nature"], 
        correct: 1, 
        explanation: "La nature a longtemps été une source d'inspiration pour les artistes, influençant leur processus créatif."
    },

    // question n°44 :
    { 
        question: "Quel est le concept de 'développement durable' ?", 
        answers: ["Exploitation des ressources naturelles", "Développement sans considération de l'environnement", "Utilisation des ressources dans un cadre qui préserve la nature"], 
        correct: 2, 
        explanation: "Le développement durable promeut un équilibre entre le développement économique et la préservation de l'environnement."
    },

    // question n°45 :
    { 
        question: "Quel est le lien entre santé et environnement selon l'écologie ?", 
        answers: ["Aucun lien", "Les deux sont interconnectés", "L'environnement nuit à la santé"], 
        correct: 1, 
        explanation: "L'écologie souligne que la santé humaine est intimement liée à la qualité de l'environnement dans lequel les personnes vivent."
    },

    // question n°46 :
    { 
        question: "Quel est le rôle des rituels dans la connexion à la nature ?", 
        answers: ["Ils sont insignifiants", "Ils renforcent le lien culturel avec la nature", "Ils créent de la distance"], 
        correct: 1, 
        explanation: "Les rituels culturels souvent renforcent le lien entre les individus et la nature, célébrant des cycles naturels."
    },

    // question n°47 :
    { 
        question: "Quel est le lien entre changement climatique et justice sociale ?", 
        answers: ["Ils sont indépendants", "Le changement climatique exacerbe les inégalités", "La justice sociale freine le changement climatique"], 
        correct: 1, 
        explanation: "Le changement climatique a des effets disproportionnés sur les populations vulnérables, exacerbant ainsi les injustices sociales."
    },

    // question n°48 :
    { 
        question: "Qui a soutenu la notion de 'l'harmonie avec la nature' ?", 
        answers: ["Buddhisme", "Judaïsme", "Christianisme"], 
        correct: 0, 
        explanation: "Le bouddhisme prône souvent l'idée d'harmonie avec la nature et le respect de toutes les formes de vie."
    },

    // question n°49 :
    { 
        question: "Quel lien existe entre nature et identité individuelle ?", 
        answers: ["Ils sont séparés", "La nature façonne l'identité", "Ils sont contradictoires"], 
        correct: 1, 
        explanation: "La nature joue un rôle dans la construction de l'identité individuelle, influençant les croyances et les valeurs."
    },

    // question n°50 :
    { 
        question: "Quel concept souligne l'importance de l'intégration de la nature dans le développement urbain ?", 
        answers: ["Urbanité des institutions", "Écologie urbaine", "Urbanisme durable"], 
        correct: 2, 
        explanation: "L'urbanisme durable intègre la protection de la nature dans les plans de développement urbain pour promouvoir l'équilibre."
    },

    // question n°51 :
    { 
        question: "Quel est le concept de 'écologie sociale' ?", 
        answers: ["Protection intérieure", "Combinaison des mouvements sociaux et écologiques", "Règlement des conflits sociaux"], 
        correct: 1, 
        explanation: "L'écologie sociale lie les préoccupations écologiques aux luttes sociales, visant une société équitable et durable."
    },

    // question n°52 :
    { 
        question: "Quel rôle les systèmes de croyance jouent-ils dans la gestion de la nature ?", 
        answers: ["Aucun rôle", "Ils influencent les attitudes", "Ils sont opposés"], 
        correct: 1, 
        explanation: "Les systèmes de croyance influencent souvent la manière dont les sociétés gèrent et se rapportent à la nature."
    },

    // question n°53 :
    { 
        question: "Qu'est-ce que l'anthropocentrisme ?", 
        answers: ["L'économie humiliante", "Une vision centrée sur l'homme", "Le respect de la nature"], 
        correct: 1, 
        explanation: "L'anthropocentrisme est la perspective qui place l'homme au centre des préoccupations éthiques et philosophiques."
    },

     // question n°54 :
    { 
        question: "Quel est l'impact de l'agriculture industrielle sur la nature ?", 
        answers: ["Amélioration de la biodiversité", "Destruction des habitats naturels", "Pratique durable"], 
        correct: 1, 
        explanation: "L'agriculture industrielle est souvent critiquée pour sa contribution à la destruction des habitats naturels et à la perte de biodiversité."
    },

    // question n°55 :
    { 
        question: "Quel est le rôle des mouvements de conservation ?", 
        answers: ["Protéger la nature", "Contraindre les populations", "S'interroger sur la nature"], 
        correct: 0, 
        explanation: "Les mouvements de conservation visent principalement à protéger la nature et à préserver les écosystèmes menacés."
    },

    // question n°56 :
    { 
        question: "Qui a introduit le terme 'aire urbaine verte' ?", 
        answers: ["Henri Lefebvre", "Patrick Geddes", "Jane Jacobs"], 
        correct: 1, 
        explanation: "Patrick Geddes a développé le concept d'aire urbaine verte cherchant à intégrer la nature dans les espaces urbains."
    },

    // question n°57 :
    { 
        question: "Quel concept étudiant les relations existantes entre les êtres humains et la nature ?", 
        answers: ["Nature de la relation", "Justice environnementale", "Systèmes environnementaux"], 
        correct: 1, 
        explanation: "La justice environnementale étudie les relations existantes entre les droits humains et la gestion extraterrestre des ressources naturelles."
    },

    // question n°58 :
    { 
        question: "Quel lien existe entre nature et religion dans certaines cultures ?", 
        answers: ["Nature négligée", "Nature déifiée", "Nature antagoniste à la spiritualité"], 
        correct: 1, 
        explanation: "Dans plusieurs cultures, la nature est souvent considérée comme sacrée et est associée à des croyances religieuses."
    },

    // question n°59 :
    { 
        question: "Quel est le principe du développement durable ?", 
        answers: ["Exploiter toutes les ressources", "S'assurer que les besoins des générations futures sont respectés", "Ignorer les problèmes environnementaux"], 
        correct: 1, 
        explanation: "Le développement durable vise à répondre aux besoins présents sans compromettre la capacité des générations futures."
    },

    // question n°60 :
    { 
        question: "Qui a développé la vision politique de la nature en liaison avec la technique ?", 
        answers: ["Mortimer Adler", "Heidegger", "Gandhi"], 
        correct: 1, 
        explanation: "Heidegger a exploré la relation entre l'être humain, la technique et la nature dans sa philosophie."
    },

    // question n°61 :
    { 
        question: "Qu'est-ce que l'urbanisme biologique ?", 
        answers: ["Une théorie sur l'urbanisation", "Un mouvement social", "Une approche visant à intégrer la nature dans l'aménagement urbain"], 
        correct: 2, 
        explanation: "L'urbanisme biologique cherche à intégrer la nature et les espaces verts dans les aménagements urbains."
    },

    // question n°62 :
    { 
        question: "Quel est le lien entre économie et exploitation de la nature ?", 
        answers: ["Ils sont opposés", "L'économie peut favoriser la protection de la nature", "L'économie se concentre sur l'exploitation des ressources"], 
        correct: 2, 
        explanation: "L'économie moderne se concentre souvent sur l'exploitation des ressources, ce qui peut mener à la dégradation de la nature."
    },

    // question n°63 :
    { 
        question: "Quel est l'impact de la pollution sur la perception de la nature ?", 
        answers: ["Elle ne l'affecte pas", "Elle crée un détachement", "Elle améliore la connexion"], 
        correct: 1, 
        explanation: "La pollution peut créer un détachement entre les individus et la nature, nuisant à leur connexion avec l'environnement."
    },

    // question n°64 :
    { 
        question: "Qui a conçu le terme 'biophilie' ?",
        answers: ["E.O. Wilson", "Gandhi", "Rousseau"], 
        correct: 0, 
        explanation: "E.O. Wilson a introduit le terme 'biophilie', désignant l'affinité humaine innée pour le vivant et la nature."
    },

    // question n°65 :
    { 
        question: "Quel effet le changement climatique a-t-il sur la justice climatique ?", 
        answers: ["Aucun effet", "Il exacerbe les inégalités", "Il améliore les droits environnementaux"], 
        correct: 1, 
        explanation: "Le changement climatique exacerbe les inégalités, affectant disproportionnellement les populations vulnérables."
    },

    // question n°66 :
    { 
        question: "Quel est le lien entre la science et la philosophie dans l'étude de la nature ?", 
        answers: ["Ils sont opposés", "Ils se complètent", "La philosophie est sans rapport"], 
        correct: 1, 
        explanation: "La science et la philosophie se complètent dans l'étude de la nature, la science fournissant des données et la philosophie fournissant des réflexions critiques."
    },

    // question n°67 :
    { 
        question: "Qui a soutenu que la nature a des droits ?", 
        answers: ["Kant", "Callicott", "Tocqueville"], 
        correct: 1, 
        explanation: "J. Baird Callicott a plaidé pour l'idée que la nature elle-même devrait avoir certains droits reconnus légalement."
    },

    // question n°68 :
    { 
        question: "Comment la pollution affecte-t-elle la justice environnementale ?", 
        answers: ["Elle renforce les droits des citoyens", "Elle crée des inégalités d'accès", "C'est sans impact"], 
        correct: 1, 
        explanation: "La pollution crée des inégalités en affectant davantage les communautés vulnérables ayant moins d'accès aux ressources naturelles."
    },

    // question n°69 :
    { 
        question: "Quel est le rôle des espaces verts dans les environnements urbains ?", 
        answers: ["Ils sont inutiles", "Ils améliorent la qualité de vie", "Ils diminuent l'espace bâti"], 
        correct: 1, 
        explanation: "Les espaces verts dans les villes améliorent la qualité de vie des citoyens et favorisent des connexions avec la nature."
    },

    // question n°70 :
    { 
        question: "Quel est l'impact des croyances culturelles sur l'appréhension de la nature ?", 
        answers: ["Elles n'affectent rien", "Elles influencent la façon de traiter la nature", "Elles compliquent la perception"], 
        correct: 1, 
        explanation: "Les croyances culturelles jouent un rôle crucial dans la manière dont les individus perçoivent et interagissent avec la nature."
    },
  
    // question n°71 :
    { 
        question: "Quelle est l'approche éthique de la nature dans le confucianisme ?", 
        answers: ["Éthique individuelle", "Harmonie entre l'homme et la nature", "Utilitarisme"], 
        correct: 1, 
        explanation: "Le confucianisme prône l'harmonie entre l'homme et la nature, intégrant une éthique de respect mutuel."
    },

    // question n°72 :
    { 
        question: "Quel est le lien entre l'art et la nature ?", 
        answers: ["L'art ne peut pas se rapporter à la nature", "L'art inspire la nature", "L'art est une représentation de la nature"], 
        correct: 2, 
        explanation: "L'art est souvent une représentation de la nature, influençant comment les gens la perçoivent et l'interprètent."
    },

    // question n°73 :
    { 
        question: "Qui a présenté le concept de 'la transition énergétique' ?", 
        answers: ["Hansen", "Lovins", "Kahneman"], 
        correct: 0, 
        explanation: "James Hansen est reconnu pour ses études sur le climat et ses appels à la transition énergétique en faveur des solutions renouvelables."
    },

    // question n°74 :
    { 
        question: "Qu'est-ce qui constitue l'éthique de l'environnement ?", 
        answers: ["Concernant la protection de la nature", "Orientée sur le profit", "Ignorant les conséquences"], 
        correct: 0, 
        explanation: "L'éthique de l'environnement se préoccupe de la relation de l'homme avec la nature, promouvant sa protection et préservation."
    },

    // question n°75 :
    { 
        question: "Quel est le lien entre la nature et la sagesse dans la philosophie orientale ?", 
        answers: ["Aucun lien", "La nature est source de sagesse", "La sagesse est contraire à la nature"], 
        correct: 1, 
        explanation: "Dans de nombreuses philosophies orientales, la nature est considérée comme une source essentielle de sagesse nécessaire à la vie humaine."
    },

    // question n°76 :
    { 
        question: "Quel est l'impact de la surconsommation sur la nature ?", 
        answers: ["Elle préserve la nature", "Elle entraîne la destruction des ressources", "Elle n'a aucun impact"], 
        correct: 1, 
        explanation: "La surconsommation conduit à une exploitation irrationnelle des ressources naturelles, entraînant leur destruction."
    },

    // question n°77 :
    { 
        question: "Qui a proposé que le bien-être humain doit rejoindre le respect des espaces naturels ?", 
        answers: ["Huxley", "Nietzsche", "Capra"], 
        correct: 2, 
        explanation: "Fritjof Capra a plaidé pour que le bien-être humain soit en solide relation avec un respect fondamental des écosystèmes."
    },

    // question n°78 :
    { 
        question: "Quel philosophe a introduit le concept de 'la nécessité de l'écosystème pour l'homme' ?", 
        answers: ["Leopold", "Hempstead", "Gandhi"], 
        correct: 0, 
        explanation: "Aldo Leopold a formulé l'idée que l'écosystème est indispensable à la survie humaine et à la justice."
    },

    // question n°79 :
    { 
        question: "Quel lien établit-on entre nature et développement économique ?", 
        answers: ["Nature est un obstacle au développement", "Droit de l'homme et la nature sont complémentaires", "Exploitation des ressources favorise le développement"], 
        correct: 1, 
        explanation: "La croissance économique doit prendre en compte l'environnement et respecter les relations de justice avec la nature."
    },

    // question n°80 :
    { 
        question: "Quel impact a le facteur climatique sur les droits sociaux ?", 
        answers: ["Aucun impact", "Il renforce les droits", "Il limite certaines libertés"], 
        correct: 2, 
        explanation: "Les changements climatiques peuvent restreindre certains droits sociaux, affectant principalement les populations vulnérables."
    },

    // question n°81 :
    { 
        question: "Quel est le paradoxe de la richesse dans le contexte de la nature ?", 
        answers: ["Elle favorise la préservation", "Elle cause la destruction", "Elle crée des illusions"], 
        correct: 1, 
        explanation: "La richesse peut conduire à une exploitation accrue de la nature, provoquant des dommages environnementaux."
    },

    // question n°82 :
    { 
        question: "Quel est l'impact des politiques publiques sur la protection de la nature ?", 
        answers: ["Elles ne sont pas influentes", "Elles jouent un rôle essentiel", "Elles sont à éviter"], 
        correct: 1, 
        explanation: "Les politiques publiques ont un rôle essentiel dans la protection de la nature, définissant les régulations et les engagements environnementaux."
    },

    // question n°83 :
    { 
        question: "Quelle est la position prévalente sur le rapport entre progrès scientifique et nature ?", 
        answers: ["Le progrès est un danger pour la nature", "Le progrès doit respecter la nature", "Le progrès ignore la nature"], 
        correct: 1, 
        explanation: "Il est largement soutenu que le progrès scientifique doit se faire de manière respectueuse envers la nature."
    },

    // question n°84 :
    { 
        question: "Quel est le concept de 'l'agenda 21' ?", 
        answers: ["Programme de développement durable à l'échelle mondiale", "Un document sur la violence", "Une directive sur la nature"], 
        correct: 0, 
        explanation: "L'Agenda 21 est un plan d'action pour le XXIe siècle qui appelle à un développement durable à l'échelle mondiale."
    },

    // question n°85 :
    { 
        question: "Quel lien l'écologisme établit-il entre nature et justice ?", 
        answers: ["La nature est sans rapport", "La justice est cruciale pour la conservation", "Elle impose des limites sur la Nature"], 
        correct: 1, 
        explanation: "L'écologisme relie justice et nature, affirmant que la protection de la nature est essentielle à la justice environnementale."
    },
    
    // question n°86 :
    { 
        question: "Combien de temps les humains ont-ils quitté leurs racines naturelles ?", 
        answers: ["Un siècle", "Des milliers d'années", "Pas du tout"], 
        correct: 1, 
        explanation: "Les humains se sont éloignés de leurs racines naturelles depuis des milliers d'années en établissant des sociétés complexes."
    },

    // question n°87 :
    { 
        question: "Quelle a été l'influence de la philosophie grecque sur notre pensée sur la nature ?", 
        answers: ["Aucune influence", "Une influence profonde", "Une influence virale"], 
        correct: 1, 
        explanation: "La philosophie grecque a eu une énorme influence sur les concepts de nature, soulignant l'harmonie et l'ordre dans l'univers."
    },

    // question n°88 :
    { 
        question: "Quel philosophe a soutenu que la nature est le fondement de la moralité ?", 
        answers: ["Hume", "Leibniz", "Socrate"], 
        correct: 0, 
        explanation: "David Hume a défendu l'idée que les lois naturelles et la nature humaine sont à la base de la moralité."
    },

    // question n°89 :
    { 
        question: "Quel est le rôle des parcs naturels dans la préservation de la nature ?", 
        answers: ["Aucun rôle", "Ils préservent la biodiversité", "Ils sont simplement touristiques"], 
        correct: 1, 
        explanation: "Les parcs naturels jouent un rôle crucial en préservant les habitats et protégeant la biodiversité."
    },

    // question n°90 :
    { 
        question: "Quel est le concept de 'nettoyabilité' en matière de protection de la nature ?", 
        answers: ["Protection des ressources naturelles", "Capacité à restaurer des écosystèmes", "Respect des lois"], 
        correct: 1, 
        explanation: "La nettoyabilité concerne la capacité à restaurer et à maintenir des écosystèmes naturels."
    },

    // question n°91 :
    { 
        question: "Quel phénomène relie la nature aux émotions humaines ?", 
        answers: ["Isolation", "Romance", "Concordance"], 
        correct: 2, 
        explanation: "La concordance entre la nature et les émotions humaines se manifeste dans le besoin d'harmoniser avec le monde naturel."
    },

    // question n°92 :
    { 
        question: "Quel effet la protection de la nature a-t-elle sur la santé publique ?", 
        answers: ["Pas d'effet", "Amélioration des classes sociales", "Amélioration de la qualité de vie"], 
        correct: 2, 
        explanation: "La protection de la nature contribue à des environnements sains, favorisant ainsi la santé public."
    },

    // question n°93 :
    { 
        question: "Qui a influencé la pensée contemporaine sur le lien entre nature et justice sociale ?", 
        answers: ["Leopold", "Hobbes", "Freud"], 
        correct: 0, 
        explanation: "Aldo Leopold est connu pour son éthique de la terre, influençant la reconnaissance du lien entre nature et justice sociale."
    },

    // question n°94 :
    { 
        question: "Quelle est l'importance de la biodiversité dans la nature ?", 
        answers: ["Elle n'est pas importante", "Elle renforce les écosystèmes", "Elle complique la nature"], 
        correct: 1, 
        explanation: "La biodiversité enrichit les écosystèmes et contribue à leur résilience face aux changements."
    },

    // question n°95 :
    { 
        question: "Quel rôle joue l'art dans la sensibilisation à la nature ?", 
        answers: ["Aucun rôle", "Sensibiliser les individus aux enjeux environnementaux", "Deformer la réalité"], 
        correct: 1, 
        explanation: "L'art peut sensibiliser aux enjeux environnementaux en soulignant la beauté de la nature et la nécessité de la protéger."
    },

    // question n°96 :
    { 
        question: "Quel est l'impact des poètes sur le débat autour de la nature ?", 
        answers: ["Ils sont inutiles", "Ils inspirent des mouvements de protection", "Ils ignorent la nature"], 
        correct: 1, 
        explanation: "Les poètes, à travers leur travail, ont souvent inspiré des mouvements de protection de la nature et ont sensibilisé le public."
    },

    // question n°97 :
    { 
        question: "Quel est le lien entre la conscience professionnelle et la protection de la nature ?", 
        answers: ["Aucun lien", "La conscience professionnelle favorise des pratiques durables", "Elle néglige la nature"], 
        correct: 1, 
        explanation: "La conscience professionnelle peut jouer un rôle clé dans la promotion de pratiques durables et respectueuses de l'environnement."
    },

    // question n°98 :
    { 
        question: "Quel est le rapport entre justice sociale et protection de la nature ?", 
        answers: ["Indépendants", "Complémentaires", "Opposés"], 
        correct: 1, 
        explanation: "La justice sociale et la protection de la nature sont souvent complémentaires dans les luttes pour l'égalité et les droits."
    },

    // question n°99 :
    { 
        question: "Quel rôle les agriculteurs ont-ils dans la préservation de la nature ?", 
        answers: ["Aucun rôle", "Ils polluent les terres", "Ils sont essentiels à la durabilité des systèmes naturels"], 
        correct: 2, 
        explanation: "Les agriculteurs jouent un rôle essentiel dans la préservation de la nature grâce à des pratiques durables et responsables."
    },

    // question n°100 :
    { 
        question: "Quel impact les activités humaines ont-elles sur les écosystèmes ?", 
        answers: ["Elles améliorent les écosystèmes", "Elles n'ont aucun impact", "Elles peuvent les détruire"], 
        correct: 2, 
        explanation: "Les activités humaines, telles que la déforestation et la pollution, peuvent gravement endommager les écosystèmes naturels."
    }
];