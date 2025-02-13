const questions = [
    // question n°1 :
    { 
        question: "Quelle est la définition classique de la religion ?", 
        answers: ["Un ensemble de croyances", "Un système de règles morales", "Une institution sociale"], 
        correct: 0, 
        explanation: "La religion est souvent définie comme un ensemble de croyances et de pratiques liées au sacré et à la transcendance."
    },
    
    // question n°2 :
    { 
        question: "Qui a écrit 'L'origine des espèces' dans un contexte de remise en question des croyances religieuses ?", 
        answers: ["Kant", "Darwin", "Freud"], 
        correct: 1, 
        explanation: "Charles Darwin a écrit 'L'origine des espèces', publiant des idées sur l'évolution qui ont débattu le discours religieux."
    },

    // question n°3 :
    { 
        question: "Quel est le lien entre foi et raison chez Thomas d'Aquin ?", 
        answers: ["Ils sont en conflit", "Ils sont complémentaires", "Ils sont identiques"], 
        correct: 1, 
        explanation: "Thomas d'Aquin soutenait que foi et raison peuvent coexister, chacune apportant une compréhension différente du divin."
    },
    
    // question n°4 :
    { 
        question: "Qui a développé la théorie de la sécurité religieuse ?", 
        answers: ["Hobbes", "Durkheim", "Freud"], 
        correct: 1, 
        explanation: "Émile Durkheim a analysé la religion comme un moyen d'intégration sociale, promouvant la sécurité au sein de la communauté."
    },
    
    // question n°5 :
    { 
        question: "Quel est le concept d' 'éthique de la croyance' ?", 
        answers: ["La croyance est subjective", "On a le droit de croire n'importe quoi", "On doit avoir des raisons de croire"], 
        correct: 2, 
        explanation: "L'éthique de la croyance stipule que l'on doit avoir des raisons suffisantes et justifiées pour tenir des croyances."
    },
    
    // question n°6 :
    { 
        question: "Qui a proposé la distinction entre 'religion populaire' et 'religion organisée' ?", 
        answers: ["Tocqueville", "Marx", "Weber"], 
        correct: 2, 
        explanation: "Max Weber a fait cette distinction pour analyser les différentes formes que peuvent prendre les institutions religieuses."
    },
    
    // question n°7 :
    { 
        question: "Quel œuvre fondamentale explore la critique de la religion chez Karl Marx ?", 
        answers: ["L'idéologie allemande", "Le Capital", "Manifeste du Parti communiste"], 
        correct: 0, 
        explanation: "Dans 'L'idéologie allemande', Marx critique la religion comme un opium du peuple qui justifie la structure sociale."
    },
    
    // question n°8 :
    { 
        question: "Qui a soutenu que la religion est une construction sociale ?", 
        answers: ["Emile Durkheim", "Friedrich Nietzsche", "David Hume"], 
        correct: 0, 
        explanation: "Emile Durkheim a examiné comment la religion est une construction sociale et est essentielle pour maintenir la cohésion sociale."
    },
    
    // question n°9 :
    { 
        question: "Quel est le lien entre religion et moralité selon Kant ?", 
        answers: ["Ils sont opposés", "La moralité est fondée sur des principes religieux", "La moralité découle de la raison"], 
        correct: 2, 
        explanation: "Kant soutient que la moralité doit être fondée sur des principes rationnels plutôt que sur la religion."
    },
    
    // question n°10 :
    { 
        question: "Quelle critique principale formule Nietzsche envers la religion ?", 
        answers: ["La religion est essentielle", "La religion est une illusion", "La religion favorise la vérité"], 
        correct: 1, 
        explanation: "Nietzsche critique la religion comme étant une illusion qui limite le potentiel humain."
    },
    
    // question n°11 :
    { 
        question: "Quel est le concept de 'sécularisation' ?", 
        answers: ["L'intégration de la religion dans tous les aspects de la vie", "Le processus de séparation entre religion et société", "La promotion de la religion"], 
        correct: 1, 
        explanation: "La sécularisation désigne le processus de séparation entre les institutions religieuses et les institutions politiques ou sociales."
    },

    // question n°12 :
    { 
        question: "Qui a introduit la notion d' 'auto-justification' dans le cadre de la religion ?", 
        answers: ["Hobbes", "Kant", "Foucault"], 
        correct: 1, 
        explanation: "Kant a discuté de l'auto-justification des croyances, où chaque individu doit trouver des raisons valables pour ses croyances."
    },
    
    // question n°13 :
    { 
        question: "Quel est le rôle de la religion dans les sociétés contemporaines selon les sociologues ?", 
        answers: ["Elle est déclinante", "Elle est toujours influente", "Elle est sans importance"], 
        correct: 1, 
        explanation: "Les sociologues s'accordent à dire que la religion continue d'exercer une influence importante sur les valeurs et les comportements dans les sociétés contemporaines."
    },

    // question n°14 :
    { 
        question: "Quel est le lien entre religion et identités culturelles ?", 
        answers: ["Ils sont opposés", "La religion peut façonner l'identité culturelle", "La culture n'a aucun lien avec la religion"], 
        correct: 1, 
        explanation: "La religion joue un rôle central dans le façonnement des identités culturelles et des valeurs des communautés."
    },

    // question n°15 :
    { 
        question: "Quelle est la perspective de la théologie sur la raison ?", 
        answers: ["Elle l'ignore", "Elle la rejette", "Elle l'intègre dans sa réflexion"], 
        correct: 2, 
        explanation: "La théologie cherche à intégrer la raison pour comprendre la foi et les doctrines religieuses."
    },

    // question n°16 :
    { 
        question: "Quel lien est souvent établi entre religion et pouvoir ?", 
        answers: ["Ils sont indépendants", "La religion renforce souvent le pouvoir", "Le pouvoir contredit la religion"], 
        correct: 1, 
        explanation: "La religion a souvent été utilisée pour légitimer le pouvoir, créant ainsi des dynamiques complexes entre les deux."
    },
    
    // question n°17 :
    { 
        question: "Qui a autorisé la séparation entre Église et État ?", 
        answers: ["Locke", "Hobbes", "Kant"], 
        correct: 0, 
        explanation: "John Locke a plaidé en faveur de la séparation entre les institutions religieuses et étatiques pour protéger la liberté individuelle."
    },

    // question n°18 :
    { 
        question: "Quel est l'impact de l'athéisme sur la société moderne ?", 
        answers: ["Il diminue la moralité", "Il favorise l'harmonisation des croyances", "Il remet en question les dogmes religieux"], 
        correct: 2, 
        explanation: "L'athéisme remet en question les dogmes et pousse à un examen critique des croyances religieuses établies."
    },

    // question n°19 :
    { 
        question: "Quel rôle les rituels jouent-ils dans la religion ?", 
        answers: ["Aucun rôle", "Eux renforcent la communauté", "Ils sont inutiles"], 
        correct: 1, 
        explanation: "Les rituels jouent un rôle fondamental dans la consolidation des liens communautaires et le renforcement des identités religieuses."
    },
    
    // question n°20 :
    { 
        question: "Quel est le concept qui lie solidarité sociale et religion dans un contexte communautaire ?", 
        answers: ["Anthropocentrisme", "Engagement civique", "Société de confiance"], 
        correct: 2, 
        explanation: "Le concept de société de confiance souligne comment la religion peut favoriser la solidarité sociale et l'engagement communautaire."
    },
    
    // question n°21 :
    { 
        question: "Quel est le lien entre religion et éthique ?", 
        answers: ["Pas de lien", "La religion guide les normes éthiques", "L'éthique est sans lien avec la religion"], 
        correct: 1, 
        explanation: "Traditionnellement, la religion a joué un rôle essentiel dans la formulation et la transmission des normes éthiques."
    },
    
    // question n°22 :
    { 
        question: "Quel est le rôle de la religion dans la réflexion sur le problème du mal ?", 
        answers: ["Aucun rôle", "Elle fournit des explications", "Elle complique la question"], 
        correct: 1, 
        explanation: "La religion offre souvent des réponses et des explications au problème du mal, cherchant à concilier la présence du mal avec une foi en un être suprême."
    },
    
    // question n°23 :
    { 
        question: "Quel lien établissent des philosophies modernes entre science et religion ?", 
        answers: ["Ils s'opposent", "Ils sont complémentaires", "Les deux sont superflus"], 
        correct: 1, 
        explanation: "Les philosophies modernes soutiennent souvent que la science et la religion peuvent coexister et enrichir notre compréhension du monde."
    },

    // question n°24 :
    { 
        question: "Qu'est-ce que le vitalisme en lien avec la religion ?", 
        answers: ["Une absence de valeurs", "Une connexion spirituelle à la nature", "Une théorie psychologique"], 
        correct: 1, 
        explanation: "Le vitalisme évoque une connexion spirituelle entre les êtres vivants et la nature, souvent intégrée dans de nombreuses croyances religieuses."
    },
    
    // question n°25 :
    { 
        question: "Quel est le lien entre religion et valeurs dans la société contemporaine ?", 
        answers: ["Elles sont sans lien", "Elles sont opposées", "Religion façonne les valeurs sociales"], 
        correct: 2, 
        explanation: "La religion influence largement les valeurs sociales et morales, intégrant des concepts éthiques dans le vivre-ensemble."
    },

    // question n°26 :
    { 
        question: "Quel est le rapport entre la raison et la révélation dans la théologie ?", 
        answers: ["La raison est supérieure à la révélation", "Elles sont en conflit", "La raison et la révélation se complètent"], 
        correct: 2, 
        explanation: "Dans la théologie, la raison et la révélation sont souvent considérées comme complémentaires, chacune apportant une perspective différente."
    },

    // question n°27 :
    { 
        question: "Quel est le lien entre les rites et la tradition religieuse ?", 
        answers: ["Rites sont secondaires", "Ils révèlent des croyances culturelles", "Ils ont été abolis"], 
        correct: 1, 
        explanation: "Les rites jouent un rôle central dans la tradition religieuse, révélant les croyances et les valeurs d'une communauté."
    },

    // question n°28 :
    { 
        question: "Quel philosophe a analysé la relation entre la religion et la loi dans la société ?", 
        answers: ["Hobbes", "Kant", "Sartre"], 
        correct: 0, 
        explanation: "Thomas Hobbes a discuté de la relation entre la religion et la loi, soutenant que la loi protège la société."
    },

    // question n°29 :
    { 
        question: "Quel est le lien entre religion et identité personnelle ?", 
        answers: ["Elles sont opposées", "Elles influencent la perception de soi", "Elles n'ont aucun effet"], 
        correct: 1, 
        explanation: "La religion influence souvent la manière dont les individus se perçoivent et définissent leur identité."
    },

    // question n°30 :
    { 
        question: "Quel est le rôle de la science dans la critique des dogmes religieux ?", 
        answers: ["Elle favorise l'indifférence", "Elle questionne la foi", "Elle renforce les dogmes"], 
        correct: 1, 
        explanation: "La science remet souvent en question les dogmes religieux en proposant des explications basées sur des preuves empiriques."
    },

    // question n°31 :
    { 
        question: "Qui a exploré la dialectique entre raison et foi ?", 
        answers: ["Sartre", "Kierkegaard", "Russell"], 
        correct: 1, 
        explanation: "Kierkegaard a examiné la tension entre raison et foi, soutenant que la foi peut transcender la logique."
    },

    // question n°32 :
    { 
        question: "Quel est le lien entre religion et politique dans les théories contemporaines ?", 
        answers: ["Ils sont indépendants", "Ils sont souvent en conflit", "Ils se complètent"], 
        correct: 1, 
        explanation: "Religion et politique sont souvent en conflit dans les sociétés modernes, chacun revendiquant son domaine d'influence."
    },

    // question n°33 :
    { 
        question: "Quel est le rôle des textes sacrés dans la religion ?", 
        answers: ["Ils sont négligés", "Ils véhiculent des enseignements moraux", "Ils sont dépassés"], 
        correct: 1, 
        explanation: "Les textes sacrés véhiculent souvent des enseignements moraux et éthiques qui guident les croyants dans leur pratique."
    },

    // question n°34 :
    { 
        question: "Quel lien existe entre religion et communautarisme ?", 
        answers: ["Elles sont opposées", "Religion peut favoriser le communautarisme", "Le communautarisme limite la religion"], 
        correct: 1, 
        explanation: "La religion peut favoriser le communautarisme en rassemblant des individus autour de croyances et de pratiques communes."
    },

    // question n°35 :
    { 
        question: "Quel est le rôle des croyances religieuses dans le développement de la morale ?", 
        answers: ["Elles ne sont pas liées", "Elles fournissent des normes éthiques", "Elles sont nuisibles"], 
        correct: 1, 
        explanation: "Les croyances religieuses fournissent souvent des normes éthiques qui guident le comportement moral des individus."
    },

    // question n°36 :
    { 
        question: "Qui a critiqué l'usage de la religion dans la justification de la guerre ?", 
        answers: ["Nietzsche", "Russell", "Huxley"], 
        correct: 1, 
        explanation: "Bertrand Russell a critiqué l'utilisation de la religion comme justification de la guerre, plaidant pour la paix et la raison."
    },

    // question n°37 :
    { 
        question: "Quel est le lien entre la religion et la science dans l'histoire ?", 
        answers: ["Ils sont opposés", "Ils ont souvent coexisté", "Il n'y a pas de lien"], 
        correct: 1, 
        explanation: "La religion et la science ont souvent coexisté, avec des moments de conflit, mais aussi d'enrichissement mutuel."
    },

    // question n°38 :
    { 
        question: "Qui a soutenu que la religion doit évoluer avec la société ?", 
        answers: ["Leopold", "Scofield", "Dewey"], 
        correct: 2, 
        explanation: "John Dewey a affirmé que les institutions religieuses devaient évoluer pour répondre aux changements sociaux et culturels."
    },

    // question n°39 :
    { 
        question: "Quel est le message clé de la Déclaration universelle des droits de l'homme concernant la religion ?", 
        answers: ["La liberté de religion est essentielle", "La religion doit être imposée", "La religion est superflue"], 
        correct: 0, 
        explanation: "La Déclaration universelle des droits de l'homme assure que chacun a droit à la liberté de religion ou de croyance."
    },

    // question n°40 :
    { 
        question: "Quel rôle a joué le christianisme dans le développement de la civilisation occidentale ?", 
        answers: ["Aucun rôle", "Il a influencé profondément la culture", "Il a dégradé les sociétés"], 
        correct: 1, 
        explanation: "Le christianisme a eu une influence profonde sur la culture, l'art et les institutions de la civilisation occidentale."
    },

    // question n°41 :
    { 
        question: "Qui a proposé l'idée que chaque religion a une vérité propre ?", 
        answers: ["Kant", "Ricoeur", "Sartre"], 
        correct: 1, 
        explanation: "Paul Ricoeur a énoncé que chaque religion est porteuse d'une vérité pour ses adherents."
    },

    // question n°42 :
    { 
        question: "Quel est le lien entre religion et la paix sociale ?", 
        answers: ["Pas de lien", "La religion favorise la paix sociale", "La religion est source de conflits"], 
        correct: 1, 
        explanation: "La religion peut favoriser la paix sociale en promouvant des valeurs d'harmonie et de solidarité entre les individus."
    },

    // question n°43 :
    { 
        question: "Quel impact la religion a-t-elle sur les normes sociales ?", 
        answers: ["Elle n'impacte pas", "Elle établit des valeurs et des normes", "Elle ne doit pas être prise en compte"], 
        correct: 1, 
        explanation: "La religion influence considérablement les normes sociales, façonnant le comportement et les interactions des individus."
    },

    // question n°44 :
    { 
        question: "Quel est le rôle des leaders religieux dans la société actuelle ?", 
        answers: ["Ils sont obsolètes", "Ils influencent les croyants", "Ils sont limités à leurs communautés"], 
        correct: 1, 
        explanation: "Les leaders religieux continuent d'influencer les croyants et de jouer un rôle dans les discussions sociopolitiques."
    },

    // question n°45 :
    { 
        question: "Qui a plaidé pour l'interprétation rationnelle des textes sacrés ?", 
        answers: ["Locke", "Spinoza", "Hume"], 
        correct: 1, 
        explanation: "Benedictus de Spinoza a plaidé pour une interprétation rationnelle des textes religieux et leur concorde avec la raison."
    },

    // question n°46 :
    { 
        question: "Quel est le lien entre dévotion et morale dans la foi religieuse ?", 
        answers: ["Aucun lien", "La dévotion favorise l'éthique", "La morale n'a pas besoin de la dévotion"], 
        correct: 1, 
        explanation: "La dévotion à une foi religieuse nourrit souvent un code moral chez les croyants, influençant leur éthique."
    },

    // question n°47 :
    { 
        question: "Quel lien fait-on entre science et création dans des discours religieux ?", 
        answers: ["Ils sont en conflit", "Ils se complètent", "La science réfute la création"], 
        correct: 1, 
        explanation: "De nombreux discours religieux cherchent à établir un lien entre science et création, même si cela peut susciter des conflits."
    },

    // question n°48 :
    { 
        question: "Quel est le rôle des rituels religieux dans la vie quotidienne ?", 
        answers: ["Ils sont inutiles", "Ils renforcent l'appartenance", "Ils ne doivent pas être pratiqués"], 
        correct: 1, 
        explanation: "Les rituels religieux renforcent le sentiment d'appartenance et de cohésion au sein d'une communauté."
    },

    // question n°49 :
    { 
        question: "Quel impact la religion a-t-elle sur les valeurs éducatives ?", 
        answers: ["Pas d'impact", "Elle introduit des valeurs morales", "Elle limite les enseignements"], 
        correct: 1, 
        explanation: "La religion a un rôle important dans l'introduction de valeurs morales et éthiques dans l'éducation." 
    },
    
    // question n°50 :
    { 
        question: "Quel est le mouvement qui remet en question le dogme religieux ?", 
        answers: ["Rationalisme", "Mysticisme", "Émotions"], 
        correct: 0, 
        explanation: "Le rationalisme remet en question le dogme religieux, plaçant la raison et la logique comme voies principales de connaissance."
    },

    // question n°51 :
    { 
        question: "Qui a introduit le concept d' 'ultragauche' parmi les théoriciens sociaux ?", 
        answers: ["Bourdieu", "Zizek", "Derrida"], 
        correct: 1, 
        explanation: "Slavoj Žižek a introduit ce terme pour décrire des mouvements saints modernes qui entourent la pensée critique."
    },

    // question n°52 :
    { 
        question: "Quel est le lien entre la nature de la religion et la violence selon certains penseurs ?", 
        answers: ["Religion est intrinsèquement violente", "La nature de la religion ne cause pas la violence", "Religion n'a pas d'impact"], 
        correct: 1, 
        explanation: "Beaucoup de penseurs soulignent que la nature même de la religion ne prédispose pas intrinsèquement à la violence."
    }, 

    // question n°53 :
    { 
        question: "Quel lien entre la compassion et la religion dans les discussions contemporaines ?", 
        answers: ["Pas de lien", "La religion nourrit la compassion", "La compassion diminue avec la foi"], 
        correct: 1, 
        explanation: "Dans les discussions contemporaines, la religion est souvent vue comme une source de compassion et d'empathie."
    },

    // question n°54 :
    { 
        question: "Quel concept met en avant l'épistémologie de la croyance ?", 
        answers: ["Dogmatisme", "Éthique de la croyance", "Rationalisme"], 
        correct: 1, 
        explanation: "L'éthique de la croyance informe le fait que l'on doit justifier ses croyances par des raisons suffisantes."
    },

    // question n°55 :
    { 
        question: "Quel est le lien entre le modèle de laïcité et la religion dans la société moderne ?", 
        answers: ["Ils s'opposent", "Ils sont complémentaires", "Le modèle laïque limite la religion"], 
        correct: 2, 
        explanation: "Le modèle de laïcité cherche à séparer religion et politique, limitant ainsi l'influence de la religion dans des structures publiques."
    },

    // question n°56 :
    { 
        question: "Quel est l'impact des croyances religieuses sur le comportement social ?", 
        answers: ["Pas d'impact", "Elles peuvent inspirer des actions positives", "Elles découragent l-engagement"], 
        correct: 1, 
        explanation: "Les croyances religieuses peuvent inspirer des actions positives, favorisant la solidarité et l'engagement communautaire."
    },

    // question n°57 :
    { 
        question: "Quel est le rôle des sectes dans la dynamique de la religion ?", 
        answers: ["Pas d'impact", "Elles peuvent créer des tensions internes", "Elles renforcent la religion"], 
        correct: 1, 
        explanation: "Les sectes existent souvent dans une dynamique de tension interne, remettant en question l'autorité des institutions religieuses établies."
    },

    // question n°58 :
    { 
        question: "Quel est le rôle de l'éthique religieuse dans les discussions contemporaines ?", 
        answers: ["Elle n'a pas d'importance", "Elle est souvent négligée", "Elle influence toujours les débats éthiques"], 
        correct: 2, 
        explanation: "L'éthique religieuse continue d'influencer de nombreux débats éthiques contemporains, surtout dans les questions de moralité."
    },

    // question n°59 :
    { 
        question: "Quel est le principe de 'laïcité' dans le contexte religieux ?", 
        answers: ["Séparation religion-État", "Mélange de la religion et de l'État", "Aucune implication de l'État"], 
        correct: 0, 
        explanation: "La laïcité désigne la séparation des institutions religieuses et gouvernementales, garantissant l'indépendance des deux."
    },

    // question n°60 :
    { 
        question: "Quel rôle joue la méditation dans les pratiques religieuses ?", 
        answers: ["Aucun rôle", "Elle favorise la paix intérieure", "Elle complique la pratique"], 
        correct: 1, 
        explanation: "La méditation est souvent considérée comme une pratique spirituelle qui favorise la paix intérieure et la connexion avec le divin."
    },

    // question n°61 :
    { 
        question: "Quel est le lien entre l'art et la religion ?", 
        answers: ["L'art est sans rapport", "L'art exprime souvent des croyances religieuses", "L'art dénature la spiritualité"], 
        correct: 1, 
        explanation: "L'art a souvent été un moyen d'exprimer et de représenter des croyances religieuses à travers l'histoire."
    },

    // question n°62 :
    { 
        question: "Quel concept définit un mouvement spirituel qui va au-delà des dogmes traditionnels ?", 
        answers: ["Libéralisme religieux", "Mysticisme", "Néopaganisme"], 
        correct: 1, 
        explanation: "Le mysticisme définit une approche spirituelle qui transcende les dogmes, cherchant une connexion directe avec le divin."
    },

    // question n°63 :
    { 
        question: "Quel est l'impact de la religion sur les droits des femmes ?", 
        answers: ["Pas d'impact", "Protection des droits", "Reddition continuelle"], 
        correct: 2, 
        explanation: "La religion a souvent eu un impact sur les droits des femmes, en les entravant dans de nombreuses cultures et sociétés."
    },

    // question n°64 :
    { 
        question: "Qui a écrit 'La morale de la religion' ?", 
        answers: ["Kant", "Leibniz", "Hegel"], 
        correct: 0, 
        explanation: "Kant a exploré le lien entre religion et morale dans plusieurs de ses travaux, notamment en relation avec la raison."
    },

    // question n°65 :
    { 
        question: "Quel est le rôle des dogmes dans la structure religieuse ?", 
        answers: ["Ils sont sans importance", "Ils structurent la foi", "Ils plongent dans l'indifférence"], 
        correct: 1, 
        explanation: "Les dogmes jouent un rôle essentiel dans la structuration des croyances et des pratiques au sein de la foi."
    },
    
    // question n°66 :
    { 
        question: "Quelle est la critique principale à l'encontre des religions organisées ?", 
        answers: ["Elles encouragent la violence", "Elles sont trop dogmatiques", "Elles sont trop permissives"], 
        correct: 1, 
        explanation: "Une critique courante est que les religions organisées peuvent devenir trop dogmatiques, étouffant la pensée critique."
    },

    // question n°67 :
    { 
        question: "Quel est l'impact des rites religieux sur la communauté ?", 
        answers: ["Ils divisent la communauté", "Ils unissent la communauté", "Ils sont inutiles"], 
        correct: 1, 
        explanation: "Les rites religieux renforcent souvent le sentiment d'appartenance et unissent les membres d'une communauté."
    },
    
    // question n°68 :
    { 
        question: "Qui a défendu l'idée que la foi peut coexister avec la raison ?", 
        answers: ["Sartre", "Kant", "Nietzsche"], 
        correct: 1, 
        explanation: "Kant a soutenu que la foi peut et doit coexister avec la raison, créant un équilibre entre croyance et rationalité."
    },

    // question n°69 :
    { 
        question: "Quel est le rôle de l'agnosticisme par rapport à la religion ?", 
        answers: ["Il rejette toute croyance", "Il est une position neutre", "Il est une forme de foi"], 
        correct: 1, 
        explanation: "L'agnosticisme est une position philosophique qui défend le doute sur les vérités religieuses, restant neutre sur ces questions."
    },

    // question n°70 :
    { 
        question: "Quel est le lien entre religion et culture ?", 
        answers: ["Ils sont indépendants", "Ils s'influencent mutuellement", "La culture limite la religion"], 
        correct: 1, 
        explanation: "La religion et la culture s'influencent mutuellement, chacune façonnant les valeurs et les croyances de l'autre."
    },

    // question n°71 :
    { 
        question: "Qui a affirmé que 'la religion est l'opium du peuple' ?", 
        answers: ["Marx", "Hegel", "Freud"], 
        correct: 0, 
        explanation: "Karl Marx a utilisé cette expression pour critiquer le rôle de la religion dans le maintien de la domination sociale."
    },

    // question n°72 :
    { 
        question: "Quel est l'impact des nouvelles technologies sur la pratique religieuse ?", 
        answers: ["Aucun impact", "Elles peuvent faciliter la pratique", "Elles la rendent obsolète"], 
        correct: 1, 
        explanation: "Les nouvelles technologies, comme les réseaux sociaux, peuvent faciliter la pratique religieuse et la diffusion des croyances."
    },

    // question n°73 :
    { 
        question: "Quel est le rôle des symboles religieux dans la spiritualité ?", 
        answers: ["Ils sont superflus", "Ils représentent des croyances profondes", "Ils divisent les gens"], 
        correct: 1, 
        explanation: "Les symboles religieux jouent un rôle essentiel en représentant des croyances et en facilitant la connexion spirituelle."
    },

    // question n°74 :
    { 
        question: "Qui a exploré la notion de 'l'âme' dans le contexte de la religion ?", 
        answers: ["Locke", "Kant", "Platon"], 
        correct: 2, 
        explanation: "Platon a discuté de l'âme comme étant une entité immortelle au sein de ses réflexions philosophiques."
    },

    // question n°75 :
    { 
        question: "Quel est le lien entre religion et sentiments de culpabilité ?", 
        answers: ["Aucun lien", "La religion peut induire des sentiments de culpabilité", "La culpabilité est sans importance"], 
        correct: 1, 
        explanation: "Les religions peuvent induire des sentiments de culpabilité en établissant des normes morales que les individus s'efforcent de respecter."
    },

    // question n°76 :
    { 
        question: "Quel est le concept de 'religion populaire' ?", 
        answers: ["Une religion traditionnelle", "Une religion informelle pratiquée par le peuple", "Une religion universelle"], 
        correct: 1, 
        explanation: "La religion populaire désigne la pratique religieuse informelle qui est souvent distincte des doctrines des églises établies."
    },

    // question n°77 :
    { 
        question: "Quel rôle la religion joue-t-elle dans la pensée éthique contemporaine ?", 
        answers: ["C'est obsolète", "Elle influence les réflexions éthiques", "Elle est sans importance"], 
        correct: 1, 
        explanation: "La religion continue d'influencer la pensée éthique contemporaine, en contribuant à des discussions sur la moralité."
    },

    // question n°78 :
    { 
        question: "Qui a influencé le concept de 'nature humaine' dans le cadre religieux ?", 
        answers: ["Confucius", "Rousseau", "Saint Augustin"], 
        correct: 2, 
        explanation: "Saint Augustin a eu une influence majeure sur la conception de la nature humaine dans le cadre de la religion chrétienne."
    },

    // question n°79 :
    { 
        question: "Quel est le lien entre religion et conflit ?", 
        answers: ["Pas de lien", "Elle peut être source de conflits", "Elle éloigne les conflits"], 
        correct: 1, 
        explanation: "La religion peut parfois servir de justification aux conflits, exacerbé par des différences culturelles et doctrinales."
    },

    // question n°80 :
    { 
        question: "Quel est le rôle des doctrines religieuses dans le maintien de l'ordre social ?", 
        answers: ["Elles sont insignifiantes", "Elles établissent des normes", "Elles causent des désordres"], 
        correct: 1, 
        explanation: "Les doctrines religieuses établissent des normes qui régulent les comportements, contribuant ainsi à l'ordre social."
    },

    // question n°81 :
    { 
        question: "Qui a élaboré une critique de la religion en tant qu'outil d'oppression ?", 
        answers: ["Ingersoll", "Marx", "Nietzsche"], 
        correct: 1, 
        explanation: "Karl Marx a analysé comment la religion peut être utilisée comme un outil d'oppression au sein des structures sociales."
    }, 

    // question n°82 :
    { 
        question: "Quel est l'impact du relativisme culturel sur la perception des religions ?", 
        answers: ["Aucun impact", "Il encourage le respect des différentes croyances", "Il minimise les croyances"], 
        correct: 1, 
        explanation: "Le relativisme culturel encourage les individus à respecter et à comprendre les différentes croyances et pratiques religieuses."
    },

    // question n°83 :
    { 
        question: "Quel est le lien entre religion et justice sociale ?", 
        answers: ["Pas de lien", "Elles sont souvent opposées", "Elles peuvent être interconnectées"], 
        correct: 2, 
        explanation: "La religion peut promouvoir des valeurs de justice sociale en plaidant pour l'égalité et la solidarité."
    },

    // question n°84 :
    { 
        question: "Quel rôle la religiousité joue-t-elle dans l'éthique environnementale ?", 
        answers: ["Elle est opposée à l'éthique environnementale", "Elle agit comme un moteur pour l'éthique environnementale", "Elle est ignorée"], 
        correct: 1, 
        explanation: "La religiosité peut inciter à une éthique environnementale, soulignant la responsabilité de la protection de la nature."
    },

    // question n°85 :
    { 
        question: "Quel est le concept de 'sacré' dans la religion ?", 
        answers: ["Une force impersonnelle", "Une valeur sociale", "Une chose d'importance divine"], 
        correct: 2, 
        explanation: "Le sacré renvoie à ce qui est considéré comme ayant une importance divine et qui mérite un respect particulier."
    },

    // question n°86 :
    { 
        question: "Qui a contribué à l'analyse des interactions entre religion et pouvoir dans la société ?", 
        answers: ["Foucault", "Rawls", "Mill"], 
        correct: 0, 
        explanation: "Michel Foucault a étudié comment la religion et le pouvoir interagissent et influencent les dynamiques sociales."
    },

    // question n°87 :
    { 
        question: "Quel est le rôle de l'esprit critique dans la foi religieuse ?", 
        answers: ["Aucun", "Elle ne doit pas exister", "Elle peut renforcer la foi"], 
        correct: 2, 
        explanation: "L'esprit critique peut personnellement renforcer la foi en permettant aux individus de questionner et d'affiner leurs croyances."
    },

    // question n°88 :
    { 
        question: "Quel impact les guerres de religion ont-elles eu sur la société ?", 
        answers: ["Aucun impact", "Elles ont unifié les croyances", "Elles ont causé des divisions sociales"], 
        correct: 2, 
        explanation: "Les guerres de religion ont souvent entraîné des divisions sociales profondes et des conflits tragiques au sein des sociétés."
    },

    // question n°89 :
    { 
        question: "Quel est le lien entre religion et existence selon Nietzsche ?", 
        answers: ["La religion est essentielle", "La religion est une illusion", "La foi est nécessaire"], 
        correct: 1, 
        explanation: "Nietzsche a soutenu que la religion est une illusion qui empêche les individus de réaliser leur potentiel."
    },

    // question n°90 :
    { 
        question: "Qui a exploré le concept de mysticisme dans la spiritualité ?", 
        answers: ["Hegel", "Derrida", "Eckhart"], 
        correct: 2, 
        explanation: "Maître Eckhart a influencé la pensée mystique, soulignant les expériences spirituelles au-delà des dogmes religieux."
    },

    // question n°91 :
    { 
        question: "Quel est le lien entre religion et responsabilité sociale ?", 
        answers: ["Pas de lien", "Elles sont opposées", "La religion pousse à agir pour le bien commun"], 
        correct: 2, 
        explanation: "La religion encourage souvent la responsabilité sociale et l'action pour le bien-être de la communauté."
    },

    // question n°92 :
    { 
        question: "Quel mouvement cherche à intégrer la diversité religieuse dans le dialogue interreligieux ?", 
        answers: ["Sécularisation", "Pluralisme", "Démocratisation"], 
        correct: 1, 
        explanation: "Le pluralisme encourage le dialogue inclusif entre différentes traditions religieuses."
    },

    // question n°93 :
    { 
        question: "Qui a soutenu que la religion a un impact moral sur la société ?", 
        answers: ["Hobbes", "Platon", "Marx"], 
        correct: 0, 
        explanation: "Thomas Hobbes a discuté du rôle moral de la religion dans le maintien de l'ordre social."
    },

    // question n°94 :
    { 
        question: "Quel importance accordons-nous à la liberté religieuse dans les sociétés modernes ?", 
        answers: ["C'est une question secondaire", "Elle est fondamentale", "Elle est limitée"], 
        correct: 1, 
        explanation: "La liberté religieuse est considérée comme un droit fondamental dans les sociétés modernes, garantissant la diversité des croyances."
    },

    // question n°95 :
    { 
        question: "Quel lien entre religion et philosophie morale ?", 
        answers: ["Pas de lien", "Une influence significative", "Religion est négligeable"], 
        correct: 1, 
        explanation: "La religion peut influencer fortement la philosophie morale, en fournissant des principes éthiques fondamentaux."
    },

    // question n°96 :
    { 
        question: "Quel est le rôle des personnes de foi lors des crises sociales ?", 
        answers: ["Ignorer les crises", "Promouvoir des valeurs de solidarité", "Causer la discorde"], 
        correct: 1, 
        explanation: "Les personnes de foi jouent souvent un rôle crucial en promouvant des valeurs de solidarité et de justice pendant les crises."
    },

    // question n°97 :
    { 
        question: "Quel est le lien entre histoire et religion selon les historiens ?", 
        answers: ["Les deux sont complètement séparés", "Elles interagissent profondément", "La religion n'a pas d'impact historique"], 
        correct: 1, 
        explanation: "Histoire et religion interagissent profondément, car de nombreux événements historiques ont été façonnés par des croyances religieuses."
    },

    // question n°98 :
    { 
        question: "Quelle conception religieuse soutient l'idée que l'autorité doit être respectée ?", 
        answers: ["Rébellion", "Liberté", "Obéissance"], 
        correct: 2, 
        explanation: "De nombreuses conceptions religieuses enseignent que l'autorité doit être respectée pour maintenir l'ordre et la paix sociale."
    },

    // question n°99 :
    { 
        question: "Quel est le message principal de la critique de la religion par Marx ?", 
        answers: ["La religion est la vraie liberté", "La religion est un opium du peuple", "La foi est la clé de la dignité"], 
        correct: 1, 
        explanation: "Karl Marx a affirmé que la religion était un opium du peuple, cherchant à montrer qu'elle distrait des vraies luttes sociales."
    },

    // question n°100 :
    { 
        question: "Quel est le lien entre religion et santé mentale selon certaines études ?", 
        answers: ["Ils sont indépendants", "La religion améliore la santé mentale", "La religion contribue à des troubles mentaux"], 
        correct: 1, 
        explanation: "Certaines études montrent que des pratiques religieuses peuvent améliorer la santé mentale en offrant un soutien social et émotionnel."
    }
];