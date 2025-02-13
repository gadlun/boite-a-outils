const questions = [
    // question n°1 : 
    { 
        question: "Qui a dit : 'La vie sans musique est tout juste une erreur, une fatigue, un exil.' ?",
        answers: ["Friedrich Nietzsche", "Platon", "Aristote"], 
        correct: 0,
        explanation: "Cette citation est de Nietzsche, qui estime que la musique est essentielle à l'expérience humaine."
    },
    
    // question n°2 : 
    { 
        question: "Selon Épicure, quel est le but ultime de la vie ?",
        answers: ["Le plaisir", "La renommée", "La puissance"], 
        correct: 0,
        explanation: "Épicure prône la recherche du plaisir comme idéal de vie, mais un plaisir réfléchi qui ne conduit pas à la souffrance."
    },
    
    // question n°3 : 
    { 
        question: "Qui a développé la théorie des idées ?",
        answers: ["Aristote", "Platon", "Descartes"], 
        correct: 1,
        explanation: "Platon a proposé que le monde sensible n'est qu'une ombre des idées idéales, qui sont éternelles et immuables."
    },
    
    // question n°4 : 
    { 
        question: "Quelle est la position de Sénèque sur la richesse ?",
        answers: ["Elle est essentielle pour être heureux", "Elle est une source de bonheur", "Elle peut corrompre l'âme"], 
        correct: 2,
        explanation: "Sénèque avertit que l'attachement à la richesse peut mener à la corruption de l'âme et à la souffrance."
    },
    
    // question n°5 : 
    { 
        question: "Qui a dit : 'Connaître, c'est avoir le pouvoir' ?",
        answers: ["Foucault", "Hegel", "Kant"], 
        correct: 0,
        explanation: "Michel Foucault associe le savoir et le pouvoir en expliquant comment la connaissance influence les relations de pouvoir."
    },
    
    // question n°6 : 
    { 
        question: "Quel philosophe a écrit 'Le Prince' ?",
        answers: ["Machiavel", "Montesquieu", "Hobbes"], 
        correct: 0,
        explanation: "Machiavel est célèbre pour son ouvrage 'Le Prince', qui explore le pouvoir politique et la manipulation."
    },
    
    // question n°7 : 
    { 
        question: "Quelle est la caractéristique centrale de la philosophie de Descartes ?",
        answers: ["Le matérialisme", "Le rationalisme", "Le scepticisme"], 
        correct: 1,
        explanation: "Descartes est souvent considéré comme le père du rationalisme, mettant l'accent sur la raison comme source de connaissance."
    },
    
    // question n°8 : 
    { 
        question: "Qui a dit 'Je pense, donc je suis' ?",
        answers: ["Descartes", "Platon", "Kant"], 
        correct: 0,
        explanation: "Cette phrase emblématique de Descartes souligne l'importance du doute et de la pensée dans la quête de la vérité."
    },
    
    // question n°9 : 
    { 
        question: "Selon Kant, quelle est la condition pour agir moralement ?",
        answers: ["Suivre ses désirs", "Agir par devoir", "Obéir aux lois"], 
        correct: 1,
        explanation: "Kant soutient que la morale repose sur l'intention d'agir par devoir, indépendamment des conséquences."
    },
    
    // question n°10 : 
    { 
        question: "Qui a développé le concept de Surmoi ?",
        answers: ["Freud", "Sartre", "Nietzsche"], 
        correct: 0,
        explanation: "Sigmund Freud est à l'origine du modèle de la psyche comportant le Ça, le Moi et le Surmoi."
    },
    
    // question n°11 : 
    { 
        question: "Zhuangzi est connu pour sa philosophie du: ",
        answers: ["Taoïsme", "Confucianisme", "Bouddhisme"], 
        correct: 0,
        explanation: "Zhuangzi est une figure clé du taoïsme, prônant l'harmonie avec le Tao."
    },
    
    // question n°12 : 
    { 
        question: "Qui a dit : 'L'homme est un animal politique' ?",
        answers: ["Aristote", "Hobbes", "Socrate"], 
        correct: 0,
        explanation: "Aristote décrit l'homme comme un 'animal politique', soulignant la nature sociale de l'être humain."
    },
    
    // question n°13 : 
    { 
        question: "Quel philosophe a été influencé par la dialectique hégélienne ?",
        answers: ["Marx", "Kierkegaard", "Sartre"], 
        correct: 0,
        explanation: "Karl Marx s'est inspiré de la dialectique d'Hegel pour développer sa propre pensée sur l'histoire et la société."
    },
    
    // question n°14 : 
    { 
        question: "Pour Kant, d'où vient la moralité ?",
        answers: ["De la société", "De la raison", "Des émotions"], 
        correct: 1,
        explanation: "Kant soutient que la moralité est ancrée dans la raison, indépendante des contingences sociales ou émotionnelles."
    },
    
    // question n°15 : 
    { 
        question: "Qui a déclaré que 'la science est une foi en progrès' ?",
        answers: ["Bergson", "Mill", "Comte"], 
        correct: 1,
        explanation: "John Stuart Mill soutient l'idée que le progrès scientifique est crucial pour le développement humain."
    },
    
    // question n°16 : 
    { 
        question: "Quel concept est associé à Nietzsche ?",
        answers: ["Volonté de puissance", "Contrat social", "État de nature"], 
        correct: 0,
        explanation: "La 'volonté de puissance' est un concept central chez Nietzsche, représentant l'aspiration à s'affirmer."
    },
    
    // question n°17 : 
    { 
        question: "Quelle œuvre est de Hegel ?",
        answers: ["L'esprit des lois", "La phénoménologie de l'esprit", "Critique de la raison pure"], 
        correct: 1,
        explanation: "La 'Phénoménologie de l'esprit' est l'une des œuvres majeures d'Hegel, explorant la conscience et la réalité."
    },
    
    // question n°18 : 
    { 
        question: "Qui a souligné l'importance de l'expérience dans la connaissance ?",
        answers: ["Hume", "Kant", "Descartes"], 
        correct: 0,
        explanation: "David Hume a mis en avant l'expérience comme fondement de la connaissance empirique."
    },
    
    // question n°19 : 
    { 
        question: "Qui a écrit 'La structure des révolutions scientifiques' ?",
        answers: ["Popper", "Kuhn", "Feyerabend"], 
        correct: 1,
        explanation: "Thomas Kuhn évoque les changements de paradigmes dans la science dans son célèbre ouvrage."
    },
    
    // question n°20 : 
    { 
        question: "Sartre est associé à quel courant philosophique ?",
        answers: ["Existentialisme", "Rationalisme", "Idéalisme"], 
        correct: 0,
        explanation: "Jean-Paul Sartre est l'un des principaux représentants de l'existentialisme, explorant la liberté et l'angoisse."
    },

    // question n°21 : 
    { 
        question: "Qui a dit : 'L'homme est condamné à être libre' ?",
        answers: ["Sartre", "Kant", "Heidegger"], 
        correct: 0,
        explanation: "Cette citation célèbre de Sartre évoque la liberté inhérente à la condition humaine."
    },
    
    // question n°22 : 
    { 
        question: "Quel philosophe a affirmé que 'la vertu est la seule bonne' ?",
        answers: ["Épicure", "Sénèque", "Socrate"], 
        correct: 2,
        explanation: "Socrate défend l'idée que la vertu est la seule chose véritablement bonne, menant à une vie heureuse."
    },
    
    // question n°23 : 
    { 
        question: "Qui a proposé la théorie du Contrat Social ?",
        answers: ["Hobbes", "Rousseau", "Locke"], 
        correct: 1,
        explanation: "Rousseau a élaboré la théorie du contrat social, qui aborde l'origine et la légitimité du pouvoir politique."
    },

    // question n°24 : 
    { 
        question: "Quel auteur a introduit le concept de 'l'Übermensch' ?",
        answers: ["Nietzsche", "Heidegger", "Jaspers"], 
        correct: 0,
        explanation: "'L'Übermensch' de Nietzsche est un idéal d'être humain au-dessus des normes morales traditionnelles."
    },

    // question n°25 : 
    { 
        question: "Qui a dit : 'La connaissance est une lutte' ?",
        answers: ["Diderot", "Kant", "Foucault"], 
        correct: 2,
        explanation: "Foucault aborde la connaissance comme étant intrinsèquement liée au pouvoir dans ses œuvres."
    },
    
    // question n°26 : 
    { 
        question: "Quel est le principe fondamental de l'Utilitarisme ?",
        answers: ["Le bien-être présenté à la société", "La recherche du plaisir", "La maximisation du bonheur pour le plus grand nombre"], 
        correct: 2,
        explanation: "L'Utilitarisme, défendu par des penseurs comme Bentham et Mill, prône la maximisation du bonheur collectif."
    },

    // question n°27 : 
    { 
        question: "Qui a soutenu que 'l'existence précède l'essence' ?",
        answers: ["Sartre", "Heidegger", "Beauvoir"], 
        correct: 0,
        explanation: "Cette phrase emblématique de Sartre signifie que l'individu crée son propre sens à la vie."
    },
    
    // question n°28 : 
    { 
        question: "Quelle est l'idée centrale du stoïcisme ?",
        answers: ["Préserver le plaisir", "Acccepter ce qui ne dépend pas de nous", "Chercher la richesse"], 
        correct: 1,
        explanation: "Les stoïciens enseignent l'importance d'accepter les choses que nous ne pouvons pas contrôler."
    },

    // question n°29 : 
    { 
        question: "Qui a dit : 'Agis seulement selon cette maxime grâce à laquelle tu peux vouloir en même temps qu'elle devienne loi universelle.' ?",
        answers: ["Kant", "Spinoza", "Locke"], 
        correct: 0,
        explanation: "C'est la formulation de l'impératif catégorique de Kant, qui souligne la moralité universelle."
    },

    // question n°30 : 
    { 
        question: "Qui a théorisé le droit naturel ?",
        answers: ["Thomas d'Aquin", "Hobbes", "Rousseau"], 
        correct: 0,
        explanation: "Thomas d'Aquin a élaboré sur le concept de droit naturel, qui est une loi divine inscrite dans la nature."
    },

    // question n°31 : 
    { 
        question: "Quel penseur a dit : 'L’ennui est la nature même de l’homme' ?",
        answers: ["Kierkegaard", "Pascal", "Hume"], 
        correct: 1,
        explanation: "Pascal soutient que l'ennui est une condition humaine intrinsèque, d'où la quête de distractions."
    },

    // question n°32 : 
    { 
        question: "Quel philosophe a introduit le concept d'aliénation ?",
        answers: ["Marx", "Hegel", "Foucault"], 
        correct: 0,
        explanation: "Karl Marx analyse l'aliénation dans la relation entre le travailleur et les conditions de production."
    },

    // question n°33 : 
    { 
        question: "Quel est le piquant principal du 'Cogito' de Descartes ?",
        answers: ["Penser est nécessaire", "Le doute est inévitable", "La conscience est universelle"], 
        correct: 1,
        explanation: "Le 'Cogito' incarne l'idée que le doute même témoigne de notre existence pensante."
    },

    // question n°34 : 
    { 
        question: "Pour qui les 'catégories' sont-elles essentielles ?",
        answers: ["Husserl", "Kant", "Freud"], 
        correct: 1,
        explanation: "Kant expose les catégories de l'entendement qu'il utilise pour structurer notre expérience."
    },

    // question n°35 : 
    { 
        question: "Qui a dit : 'La libre volonté n'est qu'une illusion.' ?",
        answers: ["Marx", "Spinoza", "Nietzsche"], 
        correct: 1,
        explanation: "Spinoza affirme que notre volonté est déterminée par les causes extérieures, déniant le libre arbitre."
    },

    // question n°36 : 
    { 
        question: "Quel auteur a proposé le concept de 'surmoi' dans sa théorie psychanalytique ?",
        answers: ["Marx", "Freud", "Hegel"], 
        correct: 1,
        explanation: "Freud développe le concept de surmoi comme l'instance morale de la psyché humaine."
    },

    // question n°37 : 
    { 
        question: "Qui a dit : 'Il n'y a pas de faits, seulement des interprétations' ?",
        answers: ["Nietzsche", "Derrida", "Foucault"], 
        correct: 0,
        explanation: "Nietzsche remet en question le caractère objectif des faits, soulignant la subjectivité de notre compréhension."
    },

    // question n°38 : 
    { 
        question: "Quel est le but des 'métaphores' pour Nietzsche ?",
        answers: ["Distinguer la vérité", "Créer des illusions", "Aider à comprendre des concepts complexes"], 
        correct: 2,
        explanation: "Pour Nietzsche, les métaphores sont essentielles pour donner vie à des idées abstraites."
    },

    // question n°39 : 
    { 
        question: "Pour Kant, quelles sont les 'deux choses' qui l'émerveillent ?",
        answers: ["La nature et l'esprit humain", "Les étoiles et l'océan", "Les lois de la science et la morale"], 
        correct: 0,
        explanation: "Kant est fasciné par les réalités extérieures et intérieures qui le poussent à philosopher."
    },

    // question n°40 : 
    { 
        question: "Qui a écrit 'La critique de la raison pure' ?",
        answers: ["Kant", "Hegel", "Leibniz"], 
        correct: 0,
        explanation: "Kant examine les fondements de la connaissance dans cet ouvrage fondamental."
    },
    
    // question n°41 : 
    { 
        question: "Qui a dit : 'La sagesse commence dans l’émerveillement' ?",
        answers: ["Socrate", "Aristote", "Platon"], 
        correct: 1,
        explanation: "Aristote souligne que la curiosité et l'émerveillement sont les points de départ de la sagesse."
    },

    // question n°42 : 
    { 
        question: "Quel auteur a écrit 'Le capital' ?",
        answers: ["Sartre", "Marx", "Weber"], 
        correct: 1,
        explanation: "Karl Marx analyse les mécanismes économiques de la société capitaliste dans cet ouvrage majeur."
    },

    // question n°43 : 
    { 
        question: "Qui a popularisé le concept de 'l'absurde' ?",
        answers: ["Albert Camus", "Sartre", "Nietzsche"], 
        correct: 0,
        explanation: "Albert Camus explore la notion d'absurde dans ses écrits, notamment dans 'Le Mythe de Sisyphe'."
    },

    // question n°44 : 
    { 
        question: "Qui a introduit la méthode du doute radical ?",
        answers: ["Descartes", "Locke", "Hume"], 
        correct: 0,
        explanation: "René Descartes utilise la méthode du doute radical pour établir des certitudes fondamentales."
    },

    // question n°45 : 
    { 
        question: "Qui a écrit 'L'éthique' ?",
        answers: ["Spinoza", "Leibniz", "Kant"], 
        correct: 0,
        explanation: "Dans 'L'Éthique', Spinoza développe une vision rationaliste de la morale et de la nature."
    },

    // question n°46 : 
    { 
        question: "Qui a dit : 'La seule chose que je sais, c'est que je ne sais rien' ?",
        answers: ["Platon", "Socrate", "Aristote"], 
        correct: 1,
        explanation: "Cette citation souligne l'humilité épistémique de Socrate, qui valorise la recherche de la vérité."
    },

    // question n°47 : 
    { 
        question: "Qui a commencé la tradition empiriste en philosophie ?",
        answers: ["Locke", "Bacon", "Hume"], 
        correct: 0,
        explanation: "John Locke est l'un des principaux penseurs de l'empirisme, insistant sur l'importance de l'expérience."
    },

    // question n°48 : 
    { 
        question: "Quel est le fondement de la philosophie pragmatiste ?",
        answers: ["Le bonheur", "L'expérience", "L'action"], 
        correct: 2,
        explanation: "Le pragmatisme, notamment celui de William James, se concentre sur les conséquences pratiques des idées."
    },

    // question n°49 : 
    { 
        question: "Qui a dit : 'L’État est un mal nécessaire' ?",
        answers: ["Hobbes", "Rousseau", "Kant"], 
        correct: 1,
        explanation: "Rousseau décrit l'État comme un mal qui est nécessaire pour maintenir l'ordre social."
    },

    // question n°50 : 
    { 
        question: "Qui a dit : 'L'homme naît libre, mais partout il est enchaîné' ?",
        answers: ["Rousseau", "Hobbes", "Kant"], 
        correct: 0,
        explanation: "Cette citation de Rousseau souligne les contradictions de la condition humaine et de la société."
    },

    // question n°51 : 
    { 
        question: "Quel auteur est connu pour sa philosophie de la volonté ?",
        answers: ["Nietzsche", "Hegel", "Schopenhauer"], 
        correct: 2,
        explanation: "Arthur Schopenhauer introduit l'idée que la volonté est la force motrice derrière l'existence humaine."
    },

    // question n°52 : 
    { 
        question: "Qui a proposé la théorie de la relativité en philosophie ?",
        answers: ["Einstein", "Leibniz", "Hegel"], 
        correct: 1,
        explanation: "Leibniz a développé une réflexion sur la relativité du mouvement et de l'espace avant Einstein."
    },

    // question n°53 : 
    { 
        question: "Qui a élaboré le concept de 'l'érudition critique' ?",
        answers: ["Diderot", "Kant", "Foucault"], 
        correct: 0,
        explanation: "Diderot souligne l'importance de la critique et du questionnement dans l'acquisition de la connaissance."
    },

    // question n°54 : 
    { 
        question: "Qui a écrit 'Critique de la raison pratique' ?",
        answers: ["Hegel", "Kant", "Locke"], 
        correct: 1,
        explanation: "Dans cet ouvrage, Kant examine la moralité et les principes éthiques."
    },

    // question n°55 : 
    { 
        question: "Combien de catégories fondamentales Kant a-t-il identifiées ?",
        answers: ["12", "24", "10"], 
        correct: 0,
        explanation: "Kant identifie 12 catégories de l'entendement dans sa 'Critique de la raison pure'."
    },

    // question n°56 : 
    { 
        question: "Qui a dit que 'la morale est une affaire d'évidence' ?",
        answers: ["Kant", "Hume", "Rousseau"], 
        correct: 1,
        explanation: "Hume argue que notre sens moral repose sur des sentiments plutôt que sur des raisons." 
    },

    // question n°57 : 
    { 
        question: "Qui a créé l'idée de l'autochtone comme point de départ de la société ?",
        answers: ["Hobbes", "Rousseau", "Locke"], 
        correct: 1,
        explanation: "Rousseau évoque l'homme naturel dans son état de nature comme un idéal de moralité."
    },

    // question n°58 : 
    { 
        question: "Lequel de ces philosophes a été influencé par le bouddhisme ?",
        answers: ["Hegel", "Nagarjuna", "Kant"], 
        correct: 1,
        explanation: "Nagarjuna est un philosophe bouddhiste connu pour ses réflexions sur la vacuité."
    },

    // question n°59 : 
    { 
        question: "Qui a énoncé qu’il est préférable d’être 'un homme malheureux qu’un porc heureux' ?",
        answers: ["Mill", "Épicure", "Platon"], 
        correct: 0,
        explanation: "John Stuart Mill argue que le bonheur intellectuel est supérieur au bonheur animal."
    },

    // question n°60 : 
    { 
        question: "Qui a introduit l'idée de 'dialectique' ?",
        answers: ["Hegel", "Aristote", "Socrate"], 
        correct: 0,
        explanation: "Hegel développe une méthode dialectique pour comprendre le développement de la pensée."
    },

    // question n°61 : 
    { 
        question: "Qui a écrit 'L'Antéchrist' ?",
        answers: ["Nietzsche", "Schopenhauer", "Kant"], 
        correct: 0,
        explanation: "'L'Antéchrist' est un ouvrage polémique de Nietzsche critiquant la morale chrétienne."
    },

    // question n°62 : 
    { 
        question: "Pour Rousseau, quel est le sentiment essentiel à la base de la moralité ?",
        answers: ["La pitié", "L'amour", "La peur"], 
        correct: 0,
        explanation: "Rousseau soutient que la pitié est la base de la moralité naturelle chez l'homme."
    },

    // question n°63 : 
    { 
        question: "Qui a dit : 'Je suis ce que je suis' ?",
        answers: ["Sartre", "Kant", "Heidegger"], 
        correct: 1,
        explanation: "Cette affirmation trouve ses échos dans la philosophie existentiel comme une quête d'identité."
    },

    // question n°64 : 
    { 
        question: "Selon Hume, les idées viennent des: ",
        answers: ["Raisons", "Émotions", "Expériences"], 
        correct: 2,
        explanation: "Hume soutient que toute connaissance provient de l'expérience sensible."
    },

    // question n°65 : 
    { 
        question: "Qui a dit : 'La compassion est la source essentielle de la morale' ?",
        answers: ["Hegel", "Kant", "Schopenhauer"], 
        correct: 2,
        explanation: "Schopenhauer affirme que la compassion est la base de la morale et de l'éthique."
    },

    // question n°66 : 
    { 
        question: "Quel auteur a développé le concept de 'l'éternel retour' ?",
        answers: ["Heidegger", "Nietzsche", "Sartre"], 
        correct: 1,
        explanation: "L'idée de l'éternel retour est centrale dans la pensée de Nietzsche, questionnant le sens de l'existence."
    },

    // question n°67 : 
    { 
        question: "Qui a dit que 'l’homme est la mesure de toutes choses' ?",
        answers: ["Platon", "Protagoras", "Aristote"], 
        correct: 1,
        explanation: "Cette idée protagoréenne exprime le relativisme des vérités selon la perception humaine."
    },

    // question n°68 : 
    { 
        question: "Quelle philosophie Soren Kierkegaard a-t-il développée ?",
        answers: ["Existentialisme", "Humanisme", "Pragmatisme"], 
        correct: 0,
        explanation: "Kierkegaard est souvent considéré comme le père de l'existentialisme, en explorant l'individu et l'angoisse."
    },

    // question n°69 : 
    { 
        question: "Que signifie la 'philosophie de la liberté' chez Hegel ?",
        answers: ["L'autodétermination", "Le déterminisme", "La révolte"], 
        correct: 0,
        explanation: "Pour Hegel, la liberté est liée à la réalisation de soi et à l'autodétermination."
    },

    // question n°70 : 
    { 
        question: "Qui a introduit le concept de 'l'esprit positif' ?",
        answers: ["Comte", "Leibniz", "Condillac"], 
        correct: 0,
        explanation: "Auguste Comte est connu pour avoir introduit le positivisme, une approche scientifique de la réalité."
    },

    // question n°71 : 
    { 
        question: "Selon Nietzsche, que signifie 'devenir ce que nous sommes' ?",
        answers: ["Révéler notre essence", "Accepter notre sort", "Évoluer constamment"], 
        correct: 0,
        explanation: "Cela fait référence à l'idée de réaliser pleinement notre potentiel et notre authenticité."
    },

    // question n°72 : 
    { 
        question: "Qui soutient que la 'totalisation' de l'auto-connaissance est fondamentale ?",
        answers: ["Sartre", "Hegel", "Kant"], 
        correct: 1,
        explanation: "Hegel propose que l'auto-connaissance est un processus dynamique vers une compréhension complète."
    },

    // question n°73 : 
    { 
        question: "Qui a dit : 'La femme est l'avenir de l'homme' ?",
        answers: ["Sartre", "Beauvoir", "Simone Weil"], 
        correct: 1,
        explanation: "Simone de Beauvoir défend l'idée de l'émancipation des femmes dans son livre 'Le Deuxième Sexe'."
    },

    // question n°74 : 
    { 
        question: "Quel philosophe a mis en avant l'idée du 'droit de résistance' ?",
        answers: ["Hobbes", "Rousseau", "Locke"], 
        correct: 2,
        explanation: "Locke défend le droit de résistance contre des gouvernements tyranniques."
    },

    // question n°75 : 
    { 
        question: "Qui a dit : 'Tout est flux' ?",
        answers: ["Zénon", "Héraclite", "Parmenide"], 
        correct: 1,
        explanation: "Héraclite évoque l'idée de changement perpétuel, affirmant que rien ne demeure identique."
    },

    // question n°76 : 
    { 
        question: "Qui a écrit 'La nébuleuse du livre' ?",
        answers: ["Hegel", "Sartre", "Baudelaire"], 
        correct: 0,
        explanation: "Ce titre est souvent associé à des idées philosophiques concernant la révolution de l'esprit."
    },

    // question n°77 : 
    { 
        question: "Quelle est la caractéristique des 'droits naturels' selon Rousseau ?",
        answers: ["Ils sont inaliénables", "Ils sont conférés par l'État", "Ils ne sont pas universels"], 
        correct: 0,
        explanation: "Rousseau affirme que les droits naturels sont inhérents à chaque individu."
    },

    // question n°78 : 
    { 
        question: "Quel penseur a analysé le 'foulard islamique' à travers le prisme de la liberté ?",
        answers: ["Foucault", "Bourdieu", "Sartre"], 
        correct: 0,
        explanation: "Foucault aborde le sujet dans le cadre des relations de pouvoir et des normes sociétales."
    },

    // question n°79 : 
    { 
        question: "Qui est considéré comme le 'père de la sociologie' ?",
        answers: ["Émile Durkheim", "Max Weber", "Comte"], 
        correct: 2,
        explanation: "Auguste Comte est souvent qualifié de père de la sociologie en raison de son approche scientifique."
    },

    // question n°80 : 
    { 
        question: "Qui a dit : 'La fin justifie les moyens' ?",
        answers: ["Machiavel", "Hobbes", "Kant"], 
        correct: 0,
        explanation: "Cette phrase est souvent associée à Machiavel, illustrant le pragmatisme politique."
    },

    // question n°81 : 
    { 
        question: "Dans son ouvrage 'Le Discours de la méthode', Descartes introduit quel concept ?",
        answers: ["Cogito ergo sum", "Je pense à un ennemi", "Le principe de raison suffisante"], 
        correct: 0,
        explanation: "Le 'Cogito ergo sum' devient le fondement de sa philosophie de la pensée et de l'existence."
    },

    // question n°82 : 
    { 
        question: "Qui a dit : 'Tout ce qui est vrai est bon, tout ce qui est bon est vrai' ?",
        answers: ["Platon", "Kant", "Socrate"], 
        correct: 0,
        explanation: "Platon défend ici l'idée d'une connexion entre la vérité et les valeurs morales."
    },

    // question n°83 : 
    { 
        question: "Quel philosophe a introduit le 'devoir d'humanité' ?",
        answers: ["Kant", "Mill", "Hobbes"], 
        correct: 0,
        explanation: "Kant discute du devoir moral envers l'humanité dans sa philosophie éthique."
    },

    // question n°84 : 
    { 
        question: "Qui a écrit 'Les méditations métaphysiques' ?",
        answers: ["Descartes", "Hume", "Leibniz"], 
        correct: 0,
        explanation: "Dans cet ouvrage, Descartes établit les bases de sa pensée métaphysique."
    },

    // question n°85 : 
    { 
        question: "Qui a dit : 'Le droit de productivité professionnelle découle du travail' ?",
        answers: ["Marx", "Kant", "Hegel"], 
        correct: 0,
        explanation: "Marx quantifie le droit de propriété et leur matérialisation dans la production."
    },

    // question n°86 : 
    { 
        question: "Qui a dit : 'Les essences sont construites par les individus' ?",
        answers: ["Hegel", "Bourdieu", "Bacon"], 
        correct: 1,
        explanation: "Bourdieu utilise ce principe pour expliquer les constructions sociales des identités."
    },

    // question n°87 : 
    { 
        question: "Qui a écrit 'L'être et le néant' ?",
        answers: ["Hegel", "Sartre", "Beauvoir"], 
        correct: 1,
        explanation: "Sartre explore la question de l'existence et de la conscience dans cet ouvrage majeur."
    },

    // question n°88 : 
    { 
        question: "Ki a analyse la pensée 'anti-philosophique' ?",
        answers: ["Kant", "Heidegger", "Nietzsche"], 
        correct: 2,
        explanation: "Nietzsche remet en question les fondements et les vérités absolues de la philosophie."
    },

    // question n°89 : 
    { 
        question: "Qui a dit : 'L'imagination est plus importante que la connaissance' ?",
        answers: ["Einstein", "Kant", "Hegel"], 
        correct: 0,
        explanation: "Cette phrase célèbre d'Einstein illustre l'importance de la créativité dans l'apprentissage."
    },

    // question n°90 : 
    { 
        question: "Qui étudie le rapport de force dans les structures sociales ?",
        answers: ["Foucault", "Bourdieu", "Simone de Beauvoir"], 
        correct: 0,
        explanation: "Foucault analyse les relations de pouvoir en lien avec le savoir dans la société."
    },

    // question n°91 : 
    { 
        question: "Qui a proclamé que 'la nuance est essentielle dans la conversation' ?",
        answers: ["Kant", "Diderot", "Wittgenstein"], 
        correct: 2,
        explanation: "Wittgenstein défend l'idée que le langage est nuancé et contextuel."
    },

    // question n°92 : 
    { 
        question: "Qui a déclaré que 'tout comportement est construit par la société' ?",
        answers: ["Bourdieu", "Durkheim", "Weber"], 
        correct: 0,
        explanation: "Bourdieu évoque l'importance de la structure sociale dans la formation du comportement."
    },

    // question n°93 : 
    { 
        question: "Qui a fondé l'école du positivisme ?",
        answers: ["Comte", "Kant", "Hegel"], 
        correct: 0,
        explanation: "Auguste Comte est le fondateur du positivisme, insistant sur l'observation expérimentale."
    },

    // question n°94 : 
    { 
        question: "Qui soutient que 'l'histoire est cyclique' ?",
        answers: ["Williams", "Spengler", "Hegel"], 
        correct: 1,
        explanation: "Spengler défend une vision cyclique de l'histoire plutôt qu'une continuité linéaire."
    },

    // question n°95 : 
    { 
        question: "Qui a dit : 'Il faut d'abord savoir ce qui est vrai' ?",
        answers: ["Kant", "Pascal", "Heidegger"], 
        correct: 0,
        explanation: "Kantiens soutiennent le fait que la vérité est la base des systèmes éthiques."
    },

    // question n°96 : 
    { 
        question: "Qui a dit : 'La pensée historique est une pensée de la liberté' ?",
        answers: ["Kant", "Hegel", "Marx"], 
        correct: 1,
        explanation: "Hegel associe le développement de l'histoire à l'idée de progrès et de liberté."
    },
    
    // question n°97 : 
    { 
        question: "Qui a observé que 'l'humour est la manière la plus intelligente d'exprimer la colère' ?",
        answers: ["Freud", "Sartre", "Camus"], 
        correct: 0,
        explanation: "Freud analyse l'humour comme un mécanisme de défense face aux tensions psychologiques."
    },

    // question n°98 : 
    { 
        question: "Qui a dit : 'Il n’y a pas d'autre vérité que la vérité de l'autonomie' ?",
        answers: ["Sartre", "Beauvoir", "Kant"], 
        correct: 1,
        explanation: "Beauvoir souligne l'importance de l'autonomie et de la liberté individuelle."
    },

    // question n°99 : 
    { 
        question: "Qui a prononcé que 'le langage est ce qui préexiste' ?",
        answers: ["Wittgenstein", "Derrida", "Foucault"], 
        correct: 0,
        explanation: "Cette déclaration souligne les structures linguistiques qui forment notre réalité."
    },

    // question n°100 : 
    { 
        question: "Qui a écrit sur l’idée que 'l'homme est un animal à double nature' ?",
        answers: ["Hegel", "Aristote", "Kant"], 
        correct: 1,
        explanation: "Aristote aborde la nature humaine comme étant une dualité entre le physique et le rationnel."
    },
];