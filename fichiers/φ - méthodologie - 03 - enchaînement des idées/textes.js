const textes = [
    { // citation n°1  
        auteur: "René Descartes", 
        titre: "Méditations Métaphysiques", 
        texte: "D'abord, je pense donc je suis. Ensuite, il est nécessaire de douter de tout ce qui peut être mis en question. En conséquence, cela prouve ma nécessité d'exister.", 
        ref: "Paris : Vrin, 1966, p. 50." 
    }, 
    
    { // citation n°2  
        auteur: "Jean-Paul Sartre", 
        titre: "L'être et le néant", 
        texte: "Premièrement, l’existence précède l’essence. D'autre part, chaque individu se définit par ses choix. En somme, cela entraîne une responsabilité inévitable.", 
        ref: "Paris : Gallimard, 1943, p. 22-23." 
    }, 
    
    { // citation n°3  
        auteur: "Platon", 
        titre: "La République", 
        texte: "D'une part, la justice est la vertu qui assure l'harmonie dans la cité. D'autre part, chaque individu doit remplir sa fonction. Pour conclure, c'est la recherche du bien qui anime le juste.", 
        ref: "Paris : Flammarion, 1981, p. 150." 
    }, 
    
    { // citation n°4  
        auteur: "Aristote", 
        titre: "Éthique à Nicomaque", 
        texte: "Le bonheur, en premier lieu, est la finalité suprême de l’existence humaine. De plus, il ne peut être atteint que par la vertu et la pratique. Ainsi, vivre raisonnablement est essentiel pour être heureux.", 
        ref: "Paris : Vrin, 1998, p. 78." 
    }, 
    
    { // citation n°5  
        auteur: "Épicure", 
        titre: "Lettre à Ménécée", 
        texte: "D'abord, la douleur peut être un mal, mais elle est souvent subjective. En outre, chercher des plaisirs simples et naturels est essentiel. Par conséquent, les plaisirs intellectuels surpassent ceux du corps.", 
        ref: "Paris : Les Belles Lettres, 2001, p. 36." 
    }, 
    
    { // citation n°6  
        auteur: "Marc Aurèle", 
        titre: "Pensées pour moi-même", 
        texte: "En premier lieu, accepte ce qui ne dépend pas de toi. Puis, cultive la vertu dans tout ce que tu entreprends. Ainsi, l'esprit doit rester calme face aux aléas de la vie.", 
        ref: "Paris : Flammarion, 1999, p. 47." 
    }, 
    
    { // citation n°7  
        auteur: "Sénèque", 
        titre: "De la Brièveté de la Vie", 
        texte: "Premièrement, la vie est suffisamment longue pour qui sait l’exploiter. Cependant, beaucoup d'hommes la dilapident dans des futilités. En fin de compte, apprendre à vivre pleinement est essentiel.", 
        ref: "Paris : Les Belles Lettres, 1993, p. 12." 
    }, 
    
    { // citation n°8  
        auteur: "Kant", 
        titre: "Critique de la raison pure", 
        texte: "Premièrement, la connaissance débute avec l'expérience. D'autre part, séparer le phénomène du noumène est fondamental. En conséquence, comprendre ces distinctions est crucial.", 
        ref: "Paris : Vrin, 1990, p. 84." 
    }, 
    
    { // citation n°9  
        auteur: "Friedrich Nietzsche", 
        titre: "Ainsi parlait Zarathoustra", 
        texte: "D'abord, deviens qui tu es, c'est un défi majeur. En outre, l'individu doit surmonter les normes imposées. Ainsi, cette auto-invention est un acte de liberté suprême.", 
        ref: "Paris : Gallimard, 1992, p. 112." 
    }, 
    
    { // citation n°10  
        auteur: "Jean-Jacques Rousseau", 
        titre: "Du Contrat Social", 
        texte: "Premièrement, l'homme naît libre, mais il est partout enchaîné par les conventions. De plus, la volonté générale doit primer sur les intérêts particuliers. En seront-elles des conséquences, la liberté devient la clé de la justice.", 
        ref: "Paris : Flammarion, 1990, p. 89." 
    }, 
    
    { // citation n°11  
        auteur: "David Hume", 
        titre: "Enquête sur l'entendement humain", 
        texte: "D'une part, toute connaissance provient de l'expérience. D'autre part, les impressions sont plus vives que les idées. Ainsi, nos passions dominent souvent notre raison.", 
        ref: "Paris : Vrin, 1993, p. 56." 
    }, 
    
    { // citation n°12  
        auteur: "Karl Marx", 
        titre: "Le Capital", 
        texte: "D'abord, la valeur d'une marchandise dépend du travail qu'elle nécessite. En revanche, la lutte des classes est le moteur de l'histoire. En conséquence, c'est une dynamique qui façonne les sociétés.", 
        ref: "Paris : La Découverte, 1992, p. 27." 
    }, 
    
    { // citation n°13  
        auteur: "Martin Heidegger", 
        titre: "Être et Temps", 
        texte: "En premier lieu, l’être humain est un être conscient de sa mortalité. Puis, chaque moment de la vie doit être vécu authentiquement. En somme, l’angoisse révèle notre essence véritable.", 
        ref: "Paris : Diffusion, 1990, p. 40." 
    }, 
    
    { // citation n°14  
        auteur: "Simone de Beauvoir", 
        titre: "Le Deuxième Sexe", 
        texte: "D'abord, on ne naît pas femme, on le devient. De surcroît, l'oppression est systématique dans la société. Par conséquent, la libération nécessite une prise de conscience collective.", 
        ref: "Paris : Gallimard, 1949, p. 95." 
    }, 
    
    { // citation n°15  
        auteur: "Gilles Deleuze", 
        titre: "Différence et Répétition", 
        texte: "D'une part, la différence doit être célébrée. D'autre part, elle est la source d'innovation. En outre, l'art exprime cette diversité de manière puissante.", 
        ref: "Paris : PUF, 1968, p. 77." 
    }, 
    
    { // citation n°16  
        auteur: "Michel Foucault", 
        titre: "Surveiller et punir", 
        texte: "Premièrement, le contrôle social se renforce par les institutions modernes. De plus, la prison est un modèle de régulation. En conséquence, la résistance à cette normalisation est cruciale.", 
        ref: "Paris : Gallimard, 1975, p. 102." 
    }, 
    
    { // citation n°17  
        auteur: "Albert Camus", 
        titre: "Le Mythe de Sisyphe", 
        texte: "D'abord, l'absurde caractérise la quête humaine de sens. En conséquence, la révolte est nécessaire contre l'absurde. Finalement, vivre sans appel traduit une forme de liberté.", 
        ref: "Paris : Gallimard, 1942, p. 32." 
    }, 
    
    { // citation n°18  
        auteur: "Hannah Arendt", 
        titre: "La Condition de l'Homme Moderne", 
        texte: "En premier lieu, l'action humaine relie les individus. En second lieu, la natalité représente une promesse de renouveau. Finalement, cette interaction forge notre existence.", 
        ref: "Paris : Calmann-Lévy, 1958, p. 22." 
    }, 
    
    { // citation n°19  
        auteur: "Blaise Pascal", 
        titre: "Pensées", 
        texte: "D'une part, le cœur a ses raisons que la raison ne connaît point. D'autre part, l'homme est un roseau pensant. En fin de compte, l'essence de son existence réside dans sa quête de vérité.", 
        ref: "Paris : Hachette, 1959, p. 110." 
    }, 
    
    { // citation n°20  
        auteur: "Gottfried Wilhelm Leibniz", 
        titre: "Essais de Théodicée", 
        texte: "D'abord, Dieu a créé le meilleur des mondes possibles. Cependant, le mal existe en ce monde. Par conséquent, chaque élément contribue à l'harmonie universelle.", 
        ref: "Paris : Vrin, 1999, p. 15." 
    }, 
    
    { // citation n°21  
        auteur: "Arthur Schopenhauer", 
        titre: "Le Monde comme Volonté et comme Représentation", 
        texte: "D'une part, la volonté est l'essence de toute vie. Cependant, l'existence est souvent marquée par la souffrance. En fin de compte, l'art offre un moyen d'évasion à cette douleur.", 
        ref: "Paris : Flammarion, 1994, p. 60." 
    }, 
    
    { // citation n°22  
        auteur: "Emmanuel Levinas", 
        titre: "Totalité et Infini", 
        texte: "D'une part, l'autre est essentiel dans notre humanité. D'autre part, la responsabilité éthique est fondamental. Par conséquent, chaque dialogue doit commencer par l'accueil de l'autre.", 
        ref: "La Haye : Martinus Nijhoff, 1961, p. 28." 
    }, 
    
    { // citation n°23  
        auteur: "John Stuart Mill", 
        titre: "De la Liberté", 
        texte: "Premièrement, la liberté d'expression est essentielle à la vérité. De surcroît, chaque individu doit avoir le droit de penser. En conséquence, cela garantit une société démocratique.", 
        ref: "Paris : Flammarion, 1994, p. 90." 
    }, 
    
    { // citation n°24  
        auteur: "Henri Bergson", 
        titre: "L'Évolution créatrice", 
        texte: "D'abord, le temps vécu est un mystère à explorer. En second lieu, la durée vraie transcende la simple mesure. Ainsi, l'intuition devient essentielle pour comprendre notre existence.", 
        ref: "Paris : Félix Alcan, 1907, p. 45." 
    }, 
    
    { // citation n°25  
        auteur: "Georg Wilhelm Friedrich Hegel", 
        titre: "La Phénoménologie de l'Esprit", 
        texte: "Premièrement, la conscience passe par plusieurs phases. D'autre part, chaque phase révèle des vérités plus profondes. En conséquence, le savoir absolu est l'objectif ultime de cette quête.", 
        ref: "Berlin : de Gruyter, 1988, p. 180." 
    }, 
    
    { // citation n°26  
        auteur: "Ludwig Wittgenstein", 
        titre: "Tractatus Logico-Philosophicus", 
        texte: "D'abord, la structure du langage détermine notre perception. En conséquence, les limites de notre langage sont les limites de notre monde. Par conséquent, comprendre le sens exige un effort en communication.", 
        ref: "Paris : Vrin, 1971, p. 20." 
    }, 
    
    { // citation n°27  
        auteur: "Jacques Derrida", 
        titre: "De la Grammatologie", 
        texte: "En premier lieu, l’écriture est un acte qui déconstructe les idées. D'autre part, aucune signification reste totalement stable. En somme, il faut questionner nos certitudes sans cesse.", 
        ref: "Paris : Les Éditions de Minuit, 1967, p. 35." 
    }, 
    
    { // citation n°28  
        auteur: "Edmund Husserl", 
        titre: "La Crise des Sciences Européennes", 
        texte: "Premièrement, la phénoménologie explore la conscience. D'autre part, chaque expérience est dirigée vers un objet. En fin de compte, un retour aux 'choses mêmes’ est nécessaire.", 
        ref: "La Haye : Martinus Nijhoff, 1936, p. 48." 
    }, 
    
    { // citation n°29  
        auteur: "Alain", 
        titre: "Propos sur les pouvoirs", 
        texte: "D'abord, le jugement est le fondement de la liberté. En revanche, la puissance du pouvoir doit être questionnée. En somme, l'éducation est la clé pour penser de manière autonome.", 
        ref: "Paris : Grasset, 1948, p. 55." 
    }, 
    
    { // citation n°30  
        auteur: "Bertrand Russell", 
        titre: "La Conquête du bonheur", 
        texte: "Premièrement, la recherche du bonheur est essentielle. En outre, cela dépend de nos relations. En fin de compte, une éducation adéquate est fondamentale pour notre épanouissement.", 
        ref: "Paris : Payot, 1930, p. 28." 
    }, 
    
    { // citation n°31  
        auteur: "Paul Ricoeur", 
        titre: "Soi-même comme un autre", 
        texte: "Premièrement, l'identité personnelle est une construction. De plus, la responsabilité éthique est essentielle. En conclusion, comprendre l'autre enrichit notre propre identité.", 
        ref: "Paris : Seuil, 1990, p. 34." 
    }, 
    
    { // citation n°32  
        auteur: "Jürgen Habermas", 
        titre: "Théorie de l'agir communicationnel", 
        texte: "D'abord, la communication est fondamentalement démocratique. Ensuite, cela repose sur la volonté de comprendre autrui. En conséquence, une éthique du dialogue est primordiale.", 
        ref: "Paris : Gallimard, 1981, p. 154." 
    }, 
    
    { // citation n°33  
        auteur: "Albert Camus", 
        titre: "L'Étranger", 
        texte: "L'absurde définit notre rapport à l'univers. Meursault est l'incarnation de cet état d'esprit. En conséquence, son parcours est un défi aux conventions.", 
        ref: "Paris : Gallimard, 1942, p. 75." 
    }  
];