let questions = [
    // Question 1  
    { question: "Qui a dit « Je pense, donc je suis » ?", answers: ["Platon", "Socrate", "Aristote", "Descartes"], correctAnswer: 3 },
    
    // Question 2  
    { question: "Qui a proposé l'idée du contrat social ?", answers: ["Hobbes", "Rousseau", "Locke", "Kant"], correctAnswer: 1 },
    
    // Question 3  
    { question: "Quel auteur a écrit « L’Éthique » ?", answers: ["Bergson", "Sartre", "Nietzsche", "Spinoza"], correctAnswer: 3 },
    
    // Question 4  
    { question: "Qui est l'auteur de « La République » ?", answers: ["Socrate", "Platon", "Epicure", "Aristote"], correctAnswer: 1 },
    
    // Question 5  
    { question: "Quel penseur a dit que l’existence précède l’essence ?", answers: ["Sartre", "Heidegger", "Kant", "Hegel"], correctAnswer: 0 },
    
    // Question 6  
    { question: "Qui a déclaré que « l'homme est condamné à être libre » ?", answers: ["Kierkegaard", "Sartre", "Nietzsche", "Kant"], correctAnswer: 1 },
    
    // Question 7  
    { question: "Quelle est la principale œuvre de Kierkegaard ?", answers: ["Le Concept d'angoisse", "Psychologie des foules", "L'Être et le Néant", "La Chute"], correctAnswer: 0 },
    
    // Question 8  
    { question: "Qu'est-ce que la « volonté générale » ?", answers: ["Un concept de Rousseau", "Un concept de Kant", "Un concept d'Hegel", "Un concept de Nietzsche"], correctAnswer: 0 },
    
    // Question 9  
    { question: "Qui a écrit « La Critique de la raison pure » ?", answers: ["Hegel", "Descartes", "Kant", "Aristote"], correctAnswer: 2 },
    
    // Question 10  
    { question: "Qu'appelle-t-on « l'ubiquité » ?", answers: ["La capacité d'être partout", "La capacité d'apprendre", "La capacité de penser", "La capacité d'agir"], correctAnswer: 0 },
    
    // Question 11  
    { question: "Qui a dit « La vie sans réflexion ne mérite pas d'être vécue » ?", answers: ["Epicure", "Socrate", "Aristote", "Platon"], correctAnswer: 1 },
    
    // Question 12  
    { question: "Qui a écrit « Le Gai Savoir » ?", answers: ["Hobbes", "Nietzsche", "Rousseau", "Hegel"], correctAnswer: 1 },
    
    // Question 13  
    { question: "Quel mouvement philosophique est associé à Descartes ?", answers: ["Existentialisme", "Rationalisme", "Empirisme", "Matérialisme"], correctAnswer: 1 },
    
    // Question 14  
    { question: "Qui a dit « L’homme est un loup pour l’homme » ?", answers: ["Hobbes", "Locke", "Rousseau", "Sartre"], correctAnswer: 0 },
    
    // Question 15  
    { question: "Quelle est la méthode proposée par Descartes pour arriver à la vérité ?", answers: ["Doute méthodique", "Intuition", "Observation", "Sensation"], correctAnswer: 0 },
    
    // Question 16  
    { question: "Qu’est-ce que le cogito ?", answers: ["Je pense, donc je suis", "Je doute de tout", "Je ressens", "Je m'observe"], correctAnswer: 0 },
    
    // Question 17  
    { question: "Qui est le principal penseur de l'humanisme ?", answers: ["Socrate", "Érasme", "Descartes", "Aristote"], correctAnswer: 2 },
    
    // Question 18  
    { question: "Que représente le « mouvement des Lumières » ?", answers: ["La guerre contre la paix", "La foi contre la science", "La raison contre l'obscurantisme", "La tradition contre la modernité"], correctAnswer: 2 },
    
    // Question 19  
    { question: "Qui a écrit « L'État et la Révolution » ?", answers: ["Marx", "Lénine", "Hegel", "Rousseau"], correctAnswer: 1 },
    
    // Question 20  
    { question: "Quel concept est associé au pessimisme de Nietzsche ?", answers: ["Le nihilisme", "Le surhomme", "La volonté de puissance", "L'éternel retour"], correctAnswer: 2 },
    
    // Question 21  
    { question: "Qui a développé le concept d' « être-pour-la-mort » ?", answers: ["Kant", "Platon", "Heidegger", "Sartre"], correctAnswer: 2 },
    
    // Question 22  
    { question: "Qu'est-ce que le bonheur selon Epicure ?", answers: ["Une absence de douleur", "Une recherche de plaisir", "Un état de paix", "Une quête de vérité"], correctAnswer: 0 },
    
    // Question 23  
    { question: "Quel auteur a écrit « Le Deuxième Sexe » ?", answers: ["Kant", "Hegel", "Beauvoir", "Socrate"], correctAnswer: 2 },
    
    // Question 24  
    { question: "Qui a parlé de « l'absurde » dans la condition humaine ?", answers: ["Kierkegaard", "Sartre", "Camus", "Nietzsche"], correctAnswer: 2 },
    
    // Question 25  
    { question: "Quelle philosophie voit la vie comme un combat ?", answers: ["Sartre", "Platon", "Kant", "Nietzsche"], correctAnswer: 3 },
    
    // Question 26  
    { question: "Qui a dit « Deviens ce que tu es » ?", answers: ["Nietzsche", "Rousseau", "Platon", "Aristote"], correctAnswer: 0 },
    
    // Question 27  
    { question: "Qu'est-ce que l'idéalisme ?", answers: ["La réalité dépend de l'esprit", "La réalité est objective", "La réalité est subjective", "La nature est première"], correctAnswer: 0 },

    // Question 28  
    { question: "Quelle est la principale œuvre de Spinoza ?", answers: ["Le Traité théologico-politique", "L'Éthique", "Le Monde", "Critique de la raison pure"], correctAnswer: 1 },

    // Question 29  
    { question: "Qui a fondé l'existentialisme ?", answers: ["Platon", "Descartes", "Kant", "Sartre"], correctAnswer: 3 },

    // Question 30  
    { question: "Qu'est-ce que le « constructivisme » ?", answers: ["Une forme de scepticisme", "Une méthode scientifique", "Une théorie de la connaissance", "Un art"], correctAnswer: 2 },

    // Question 31  
    { question: "Qui a dit que « la philosophie est une sorte de méditation » ?", answers: ["Socrate", "Platon", "Aristote", "Epictète"], correctAnswer: 3 },

    // Question 32  
    { question: "Quel auteur a écrit « La Nausee » ?", answers: ["Kant", "Sartre", "Camus", "Beauvoir"], correctAnswer: 1 },

    // Question 33  
    { question: "Qui a dit « La connaissance est pouvoir » ?", answers: ["Locke", "Rousseau", "Bacon", "Descartes"], correctAnswer: 0 },

    // Question 34  
    { question: "Quel terme désigne l'étude des valeurs ?", answers: ["Métaphysique", "Logique", "Éthique", "Esthétisme"], correctAnswer: 2 },
    
    // Question 35  
    { question: "Quel auteur a théorisé la « survie du plus apte » ?", answers: ["Darwin", "Nietzsche", "Hobbes", "Kant"], correctAnswer: 0 },

    // Question 36  
    { question: "Qui a écrit « Zoroastre » ?", answers: ["Nietzsche", "Kant", "Hegel", "Sartre"], correctAnswer: 0 },

    // Question 37  
    { question: "Qui est l'auteur de « Le monde comme volonté et comme représentation » ?", answers: ["Kant", "Hegel", "Platon", "Schopenhauer"], correctAnswer: 3 },

    // Question 38  
    { question: "Quel auteur a écrit « Le Prince » ?", answers: ["Machiavel", "Hobbes", "Rousseau", "Locke"], correctAnswer: 0 },

    // Question 39  
    { question: "Qu'est-ce que le stoïcisme ?", answers: ["Une forme d'art", "Une croyance religieuse", "Une méthode scientifique", "Une école de philosophie"], correctAnswer: 3 },

    // Question 40  
    { question: "Quel philosophe a influencé le marxisme ?", answers: ["Nietzsche", "Sartre", "Hegel", "Spinoza"], correctAnswer: 2 },

    // Question 41  
    { question: "Qui a écrit « Les Discours » sur la première philosophie ?", answers: ["Kant", "Hobbes", "Locke", "Descartes"], correctAnswer: 3 },

    // Question 42  
    { question: "Qu'est-ce que la « théorie de la connaissance » ?", answers: ["L'éthique", "La moralité", "L'épistémologie", "L'anthropologie"], correctAnswer: 2 },

    // Question 43  
    { question: "Qui a dit « La liberté est un bien que nul ne peut nous enlever » ?", answers: ["Voltaire", "Kant", "Rousseau", "Nietzsche"], correctAnswer: 2 },

    // Question 44  
    { question: "Quel concept désigne l'absence de cause dans l'univers ?", answers: ["Création", "Rien", "Silence", "Mouvement"], correctAnswer: 1 },

    // Question 45  
    { question: "Qui a développé la méthode dialectique ?", answers: ["Kant", "Hegel", "Sartre", "Platon"], correctAnswer: 1 },

    // Question 46  
    { question: "Qui a écrit « La logique » ?", answers: ["Hegel", "Aristote", "Kant", "Descartes"], correctAnswer: 1 },

    // Question 47  
    { question: "Qui est Marx ?", answers: ["Un économiste", "Un historien", "Un philosophe", "Les trois"], correctAnswer: 3 },

    // Question 48  
    { question: "Qui a écrit « Le système des droits naturels » ?", answers: ["Pufendorf", "Hobbes", "Rousseau", "Locke"], correctAnswer: 0 },

    // Question 49  
    { question: "Qu'est-ce que le réalisme ?", answers: ["Une école de pensée", "Une idéologie politique", "Une forme de cynisme", "Un mouvement artistique"], correctAnswer: 0 },

    // Question 50  
    { question: "Qui a dit « Le meilleur gouvernement est celui qui gouverne le moins » ?", answers: ["Rousseau", "Thoreau", "Voltaire", "Kant"], correctAnswer: 1 },

    // Question 51  
    { question: "Quel auteur a écrit « Le capital » ?", answers: ["Popper", "Engels", "Tolstoï", "Marx"], correctAnswer: 3 },

    // Question 52  
    { question: "Qui a développé la théorie du « surhomme » ?", answers: ["Nietzsche", "Kant", "Hegel", "Sartre"], correctAnswer: 0 },

    // Question 53  
    { question: "Qui a dit que « la liberté des uns s'arrête là où commence celle des autres » ?", answers: ["Rousseau", "Montesquieu", "Kant", "Voltaire"], correctAnswer: 0 },

    // Question 54  
    { question: "Qui a écrit « Essai sur l'entendement humain » ?", answers: ["Kant", "Hobbes", "Locke", "Descartes"], correctAnswer: 2 },

    // Question 55  
    { question: "Quel auteur a écrit « La philosophie de la liberté » ?", answers: ["Spinoza", "Hegel", "Sartre", "Kant"], correctAnswer: 3 },

    // Question 56  
    { question: "Qu'est-ce que l'éthique déontologique ?", answers: ["Une éthique des conséquences", "Une éthique de la vertu", "Une éthique des devoirs", "Une éthique de la responsabilité"], correctAnswer: 2 },

    // Question 57  
    { question: "Qui a théorisé le « contrat social » ?", answers: ["Hobbes", "Locke", "Kant", "Rousseau"], correctAnswer: 3 },

    // Question 58  
    { question: "Qui a écrit « Généalogie de la morale » ?", answers: ["Nietzsche", "Sartre", "Marx", "Hegel"], correctAnswer: 0 },

    // Question 59  
    { question: "Qu'est-ce que le matérialisme ?", answers: ["La réalité est matérielle", "La réalité est abstraite", "La réalité est immatérielle", "La réalité est subjective"], correctAnswer: 0 },

    // Question 60  
    { question: "Qui a écrit « Le monde comme volonté et comme représentation » ?", answers: ["Kant", "Hegel", "Platon", "Schopenhauer"], correctAnswer: 3 },

    // Question 61  
    { question: "Qui a dit que « l'homme est un animal politique » ?", answers: ["Platon", "Aristote", "Hobbes", "Rousseau"], correctAnswer: 1 },

    // Question 62  
    { question: "Quel est le premier livre de Kant ?", answers: ["La Critique de la raison pure", "Prolégomènes à toute métaphysique", "Critique de la raison pratique", "Les Fondements de la métaphysique des mœurs"], correctAnswer: 0 },

    // Question 63  
    { question: "Qu'est-ce que l'agnosticisme ?", answers: ["Croyance en Dieu", "Incertitude sur l'existence de Dieu", "Athéisme", "Foi inébranlable"], correctAnswer: 1 },

    // Question 64  
    { question: "Qui est l'auteur de « L'Éthique à Nicomaque » ?", answers: ["Platon", "Socrate", "Aristote", "Epicure"], correctAnswer: 2 },

    // Question 65  
    { question: "Qui a écrit « De la démocratie en Amérique » ?", answers: ["Marx", "Tocqueville", "Rousseau", "Kant"], correctAnswer: 1 },

    // Question 66  
    { question: "Qu'est-ce que le nihilisme ?", answers: ["Le refus des valeurs", "La croyance en Dieu", "Le matérialisme", "Le réalisme"], correctAnswer: 0 },

    // Question 67  
    { question: "Quel auteur a écrit « majeurs et mineurs » ?", answers: ["Machiavel", "Rousseau", "Diderot", "Sartre"], correctAnswer: 2 },

    // Question 68  
    { question: "Qui a dit que « la pensée est par essence critique » ?", answers: ["Sartre", "Kant", "Heidegger", "Hegel"], correctAnswer: 0 },

    // Question 69  
    { question: "Quel auteur a fondé l'école de Francfort ?", answers: ["Adorno", "Horkheimer", "Sartre", "Marcuse"], correctAnswer: 0 },

    // Question 70  
    { question: "Qui a écrit « Les Méditations » ?", answers: ["Descartes", "Kant", "Locke", "Aristote"], correctAnswer: 0 },

    // Question 71  
    { question: "Qu'est-ce que l'essentialisme ?", answers: ["L'idée que l'essence précède l'existence", "L'idée que l'existence précède l'essence", "L'idée que l'esprit est plus important que la matière", "L'idée que les formes sont réelles"], correctAnswer: 0 },

    // Question 72  
    { question: "Qui a écrit « Critique de la raison pure » ?", answers: ["Kant", "Voltaire", "Hegel", "Nietzsche"], correctAnswer: 0 },

    // Question 73  
    { question: "Qu'est-ce que la « volonté de puissance » ?", answers: ["Le désir de dominer", "Le désir d'apprendre", "Le désir de vivre", "Le désir de savoir"], correctAnswer: 0 },

    // Question 74  
    { question: "Qui a écrit « Sur la vérité et le mensonge » ?", answers: ["Nietzsche", "Kant", "Sartre", "Socrate"], correctAnswer: 0 },

    // Question 75  
    { question: "Quel philosophe a établi une distinction entre la morale et l'éthique ?", answers: ["Kant", "Brown", "Sartre", "Nietzsche"], correctAnswer: 0 },

    // Question 76  
    { question: "Qui a écrit « De l'esprit des lois » ?", answers: ["Voltaire", "Kant", "Montesquieu", "Rousseau"], correctAnswer: 2 },

    // Question 77  
    { question: "Quel auteur a théorisé l'égalité des sexes ?", answers: ["De Beauvoir", "John Stuart", "Mill", "Rousseau"], correctAnswer: 0 },

    // Question 78  
    { question: "Qu'est-ce que la morale utilitariste ?", answers: ["Maximiser le bonheur", "Une doctrine religieuse", "Une réflexion sur les choix", "Un code de déontologie"], correctAnswer: 0 },

    // Question 79  
    { question: "Qui a écrit « L'État et la révolution » ?", answers: ["Kant", "Lénine", "Marx", "Rousseau"], correctAnswer: 1 },

    // Question 80  
    { question: "Quel auteur a dit « Je suis condamné à être libre » ?", answers: ["Kierkegaard", "Nietzsche", "Sartre", "Sartre"], correctAnswer: 2 },

    // Question 81  
    { question: "Qu'est-ce que la phénoménologie ?", answers: ["L'étude de l'art", "L'étude du phénomène physique", "L'étude de la conscience", "L'étude de la moralité"], correctAnswer: 2 },

    // Question 82  
    { question: "Qui est l'auteur de « La société ouverte et ses ennemis » ?", answers: ["Marx", "Sartre", "Hegel", "Popper"], correctAnswer: 3 },

    // Question 83  
    { question: "Quel terme désigne l'étude du beau ?", answers: ["Esthétique", "Logique", "Éthique", "Ontologie"], correctAnswer: 0 },

    // Question 84  
    { question: "Qui a dit que « l'homme est un loup pour l'homme » ?", answers: ["Tocqueville", "Lévinas", "Sartre", "Hobbes"], correctAnswer: 3 },

    // Question 85  
    { question: "Qui a écrit « La Condition humaine » ?", answers: ["Sartre", "Malraux", "Camus", "Beauvoir"], correctAnswer: 0 },

    // Question 86  
    { question: "Qu'est-ce que le déterminisme ?", answers: ["L'idée que tout événement a une cause", "L'idée que l'homme est libre", "L'idée que le savoir est inexact", "L'idée que le hasard n'existe pas"], correctAnswer: 0 },

    // Question 87  
    { question: "Qui a écrit « Le représentant » ?", answers: ["Sartre", "Kant", "Hegel", "Marx"], correctAnswer: 3 },

    // Question 88  
    { question: "Quelles sont les principales préoccupations de la philosophie politique ?", answers: ["Le pouvoir, la liberté, la justice", "La vérité, la beauté, la bonté", "La foi, l'amour, l'art", "L'existence, le sensible, le réel"], correctAnswer: 0 },

    // Question 89  
    { question: "Qui a écrit « La terre et les hommes » ?", answers: ["Sartre", "Leibniz", "Bergson", "Machiavel"], correctAnswer: 0 },

    // Question 90  
    { question: "Qu'est-ce que le naturalisme ?", answers: ["Une éthique de responsabilité", "Une doctrine religieuse", "Une forme d'art", "Une vision du monde basée sur la nature"], correctAnswer: 3 },

    // Question 91  
    { question: "Qui a écrit « Les Lumières au rendez-vous de l'éthique » ?", answers: ["Rousseau", "Sartre", "Hegel", "Kant"], correctAnswer: 3 },

    // Question 92  
    { question: "Que représente le « Cogito » ?", answers: ["Je sais donc je suis", "Je doute donc je suis", "Je ressens donc je suis", "Je pense donc je suis"], correctAnswer: 3 },

    // Question 93  
    { question: "Qui a dit que « l'essence précède l'existence » ?", answers: ["Sartre", "Aristote", "Platon", "Kant"], correctAnswer: 2 },

    // Question 94  
    { question: "Qu'est-ce que l'individualisme ?", answers: ["L'accent sur l'individu", "L'accent sur le collectif", "L'accent sur l'État", "L'accent sur la tradition"], correctAnswer: 0 },

    // Question 95  
    { question: "Qui a écrit « La Déclaration des droits de l'homme et du citoyen » ?", answers: ["Rousseau", "Sieyes", "Montesquieu", "Marx"], correctAnswer: 0 },

    // Question 96  
    { question: "Quel auteur a écrit « La République » ?", answers: ["Socrate", "Kant", "Platon", "Aristote"], correctAnswer: 2 },

    // Question 97  
    { question: "Qu'est-ce que le relativisme ?", answers: ["L'idée que la vérité dépend du point de vue", "L'idée que des valeurs universelles existent", "L'idée que tout est vrai", "L'idée que rien n'est vrai"], correctAnswer: 0 },

    // Question 98  
    { question: "Qui a dit que « l'intelligence est l'outil dont dispose l'homme pour s'accomplir » ?", answers: ["Descartes", "Socrate", "Kant", "Rousseau"], correctAnswer: 0 },

    // Question 99  
    { question: "Qu'est-ce que le fatalisme ?", answers: ["L'idée que tout est prédéterminé", "L'idée de la responsabilité individuelle", "L'idée de l'égalité", "L'idée du hasard"], correctAnswer: 0 },

    // Question 100  
    { question: "Qui a écrit « L'esprit des lois » ?", answers: ["Kant", "Montesquieu", "Rousseau", "Voltaire"], correctAnswer: 1 },

    // Question 101  
    { question: "Qui a dit que « l'homme est la mesure de toute chose » ?", answers: ["Aristote", "Socrate", "Protagoras", "Platon"], correctAnswer: 2 },

    // Question 102  
    { question: "Qui a créé la méthode socratique ?", answers: ["Platon", "Aristote", "Rousseau", "Socrate"], correctAnswer: 3 },

    // Question 103  
    { question: "Qui a écrit « La peur de la connaissance » ?", answers: ["Hegel", "Sartre", "Rousseau", "Kant"], correctAnswer: 3 },

    // Question 104  
    { question: "Quel auteur a influencé le féminisme moderne ?", answers: ["Nietzsche", "Mill", "Marx", "De Beauvoir"], correctAnswer: 3 },

    // Question 105  
    { question: "Qui a dit que « la liberté consiste à ne dépendre que de soi » ?", answers: ["Hobbes", "Nietzsche", "Sartre", "Kant"], correctAnswer: 1 },

    // Question 106  
    { question: "Qu'est-ce que l'utopie ?", answers: ["Une vision d'une société idéale", "Un mythe", "Un cauchemar", "Une théorie politique"], correctAnswer: 0 },

    // Question 107  
    { question: "Qui a écrit « Essai sur le don » ?", answers: ["Mauss", "Derrida", "Sartre", "Bourdieu"], correctAnswer: 0 },

    // Question 108  
    { question: "Qu'est-ce que le libéralisme ?", answers: ["Un système économique", "Une forme d'art", "Une doctrine politique", "Un mouvement spirituel"], correctAnswer: 2 },

    // Question 109  
    { question: "Qui a écrit « De la lutte des classes » ?", answers: ["Lénine", "Marx", "Tocqueville", "Rousseau"], correctAnswer: 1 },

    // Question 110  
    { question: "Quel auteur a dit que « la vérité est mappable » ?", answers: ["Nietzsche", "Sartre", "Rorty", "Foucault"], correctAnswer: 0 },

    // Question 111  
    { question: "Qui a écrit sur l'historicisme ?", answers: ["Hegel", "Tocqueville", "Kant", "Marx"], correctAnswer: 0 },

    // Question 112  
    { question: "Qu'est-ce que la tradition ?", answers: ["Pensée contemporaine", "Innovations modernes", "Transmissions culturelles", "Création originale"], correctAnswer: 2 },

    // Question 113  
    { question: "Qui a copié Platon ?", answers: ["Socrate", "Hegel", "Aristote", "Bacon"], correctAnswer: 2 },

    // Question 114  
    { question: "Qui a mis au point le « plausibilisme » ?", answers: ["Sextus Empiricus", "Diderot", "Hume", "Pascal"], correctAnswer: 3 },

    // Question 115  
    { question: "Qui a écrit « La Croix du Sud » ?", answers: ["Plaute", "Jaspers", "Simmel", "Leibniz"], correctAnswer: 2 },

    // Question 116  
    { question: "Qui a dit que « la seule chose dont nous ayons à nous plaindre est notre incapacité à rire » ?", answers: ["Marx", "Dostoïevski", "Cioran", "Sartre"], correctAnswer: 2 },

    // Question 117  
    { question: "Quel est l'objet d'étude principal de la sociologie ?", answers: ["Le politique", "Les mœurs", "L'économie", "La société"], correctAnswer: 3 },

    // Question 118  
    { question: "Qui a écrit « L'idiot » ?", answers: ["Dostoïevski", "Proust", "Camus", "Sartre"], correctAnswer: 0 },

    // Question 119  
    { question: "Qui a dit que « le chaos est le premier principe de tout » ?", answers: ["Platon", "Héraclite", "Thucydide", "Leibniz"], correctAnswer: 1 },

    // Question 120  
    { question: "Quel auteur a créé le concept de « l'homme naturel » ?", answers: ["Spinoza", "Rousseau", "Hobbes", "Voltaire"], correctAnswer: 1 },

    // Question 121  
    { question: "Qui a écrit « La distinction » ?", answers: ["Foucault", "Bourdieu", "Lévi-Strauss", "Derrida"], correctAnswer: 1 },

    // Question 122  
    { question: "Qu'est-ce que le nihilisme existentialiste ?", answers: ["La liberté est absolue", "Il n'existe pas de sens à la vie", "L'humanité doit être guidée", "La vie est une aventure"], correctAnswer: 0 },

    // Question 123  
    { question: "Qui a écrit « Entretiens » ?", answers: ["Socrate", "Aristote", "Kant", "Platon"], correctAnswer: 3 },

    // Question 124  
    { question: "Qu'est-ce que l'humanisme ?", answers: ["L'accent sur la collectivité", "L'accent sur la dignité humaine", "L'accent sur la religion", "L'accent sur la tradition"], correctAnswer: 1 },

    // Question 125  
    { question: "Qui a écrit « Discours sur l'origine et les fondements de l'inégalité parmi les hommes » ?", answers: ["Locke", "Hobbes", "Kant", "Rousseau"], correctAnswer: 3 },

    // Question 126  
    { question: "Qu'est-ce que le pessimisme ?", answers: ["Croyance en un meilleur avenir", "Croyance que tout est aléatoire", "Croyance que le monde est mauvais", "Croyance à l'optimisme"], correctAnswer: 0 },

    // Question 127  
    { question: "Qui a écrit « Histoire de la pensée moderne » ?", answers: ["Hegel", "Kant", "Popper", "Tocqueville"], correctAnswer: 2 },

    // Question 128  
    { question: "Qu'est-ce que le stoïcisme ?", answers: ["Une réponse à l'absurde de la vie", "Une étude de l'éducation", "Un système philosophique qui valorise la vertu", "Une critique de la démocratie"], correctAnswer: 0 },

    // Question 129  
    { question: "Qui a écrit « Le déclin de l'Occident » ?", answers: ["Spengler", "Hegel", "Weber", "Marx"], correctAnswer: 0 },

    // Question 130  
    { question: "Qu'est-ce que le matérialisme dialectique ?", answers: ["Une approche critique de la société", "Un code éthique", "Une forme d'art", "L'idée que la matière est la base de toute réalité"], correctAnswer: 3 },

    // Question 131  
    { question: "Quel auteur a écrit « L'Antéchrist » ?", answers: ["Nietzsche", "Hegel", "Marx", "Kant"], correctAnswer: 0 },

    // Question 132  
    { question: "Qui a dit que « la fin de l'histoire » correspondait à l'avènement de la démocratie ?", answers: ["Fukuyama", "Marx", "Hegel", "Sartre"], correctAnswer: 0 },

    // Question 133  
    { question: "Quel est le principal message du livre « Le Contrat Social » ?", answers: ["L'égalité pour tous", "La nécessité de l'autorité", "Les valeurs de la démocratie", "L'impératif de la liberté"], correctAnswer: 3 },

    // Question 134  
    { question: "Qui a écrit « À la recherche du temps perdu » ?", answers: ["Camus", "Sartre", "Proust", "Bertrand"], correctAnswer: 2 },

    // Question 135  
    { question: "Qui a écrit « Valeurs et Dévalorisation » ?", answers: ["Sartre", "Bourdieu", "Kant", "Leibniz"], correctAnswer: 1 },

    // Question 136  
    { question: "Qui a popularisé le terme de 'surhomme' ?", answers: ["Sartre", "Kant", "Nietzsche", "Hegel"], correctAnswer: 2 },

    // Question 137  
    { question: "Qu'est-ce que la désobéissance civile ?", answers: ["Un acte de défiance contre l'autorité", "Un comportement anarchique", "Un principe politique", "Une tradition de l'éthique"], correctAnswer: 0 },

    // Question 138  
    { question: "Qui a écrit « De l'esprit des lois » ?", answers: ["Montesquieu", "Voltaire", "Rousseau", "Kant"], correctAnswer: 0 },

    // Question 139  
    { question: "Qu'est-ce que le nationalisme ?", answers: ["Une forme de communisme", "Une variante du capitalisme", "Une critique de la démocratie", "Une idéologie politique visant à promouvoir un État-nation"], correctAnswer: 0 },

    // Question 140  
    { question: "Qui a écrit « Cessez d'être naïfs » ?", answers: ["Nietzsche", "Popper", "Rousseau", "Foucault"], correctAnswer: 0 },

    // Question 141  
    { question: "Qui a dit que « le monde est divisé entre ceux qui savent et ceux qui croient » ?", answers: ["Voltaire", "Diderot", "Sartre", "Socrate"], correctAnswer: 0 },

    // Question 142  
    { question: "Qu'est-ce que le dissensus ?", answers: ["Une paix durable", "Un désaccord constructif", "Un état de consensus", "Une révolte sociale"], correctAnswer: 1 },

    // Question 143  
    { question: "Quelle théorie sociologique a été développée par Weber ?", answers: ["La bureaucratie", "Le capital culturel", "La modernité", "L'égalité des sexes"], correctAnswer: 0 },

    // Question 144  
    { question: "Qui a écrit « Le Crépuscule des idoles » ?", answers: ["Kant", "Sartre", "Nietzsche", "Hegel"], correctAnswer: 2 },

    // Question 145  
    { question: "Qu'est-ce que le capitalisme ?", answers: ["Une théorie sociale", "Un système économique basé sur la propriété privée", "Une forme politique", "Un mode de vie spirituel"], correctAnswer: 1 },

    // Question 146  
    { question: "Qui a écrit « Les Fleurs du mal » ?", answers: ["Flaubert", "Rimbaud", "Baudelaire", "Mérimée"], correctAnswer: 2 },

    // Question 147  
    { question: "Quel est le principe de la réflexion éthique dans l'éthique des soins ?", answers: ["Respecter le passé", "Dire la vérité à tout prix", "Se concentrer sur soi-même", "Prendre en compte le bien-être d'autrui"], correctAnswer: 3 },

    // Question 148  
    { question: "Qui a dit que « l'éducation est la meilleure richesse » ?", answers: ["Platon", "Socrate", "Rousseau", "Kant"], correctAnswer: 2 },

    // Question 149  
    { question: "Qu'est-ce que l'élément déclencheur du changement social ?", answers: ["L'innovation", "Le consensus", "L'harmonisation", "La contestation"], correctAnswer: 3 },

    // Question 150  
    { question: "Qui a écrit « Les Problèmes de l'esprit » ?", answers: ["Rousseau", "Descartes", "Kant", "Sartre"], correctAnswer: 0 }
];