const philosophes = [
    // auteur n°1
    {
        nom: "Rousseau",
        propositions: [
            { 
                texte: "L'être humain est naturellement bon.", 
                type: "daccord", 
                justification: "Rousseau défend l'idée que l'homme naît bon mais est corrompu par la société." 
            },
            { 
                texte: "La société corrompt l'homme.", 
                type: "daccord", 
                justification: "Pour Rousseau, la propriété privée et les inégalités sociales dénaturent l'homme." 
            },
            { 
                texte: "La propriété privée est la source des inégalités.", 
                type: "daccord", 
                justification: "Rousseau critique la propriété privée comme fondement des injustices sociales." 
            },
            { 
                texte: "La conscience morale nous est imposée par la société.", 
                type: "pasdaccord", 
                justification: "Rousseau pense que la conscience morale est innée, pas imposée." 
            },
            { 
                texte: "L'éducation doit être naturelle et non contraignante.", 
                type: "daccord", 
                justification: "Rousseau prône une éducation qui respecte la nature de l'enfant." 
            },
            { 
                texte: "La religion est nécessaire pour fonder la morale.", 
                type: "pasdaccord", 
                justification: "Rousseau croit en une morale naturelle, indépendante de la religion." 
            },
        ]
    },
    // auteur n°2
    {
        nom: "Kant",
        propositions: [
            { 
                texte: "Agis uniquement selon la maxime qui peut devenir une loi universelle.", 
                type: "daccord", 
                justification: "C'est le principe de l'impératif catégorique chez Kant." 
            },
            { 
                texte: "La raison pure peut déterminer la moralité.", 
                type: "daccord", 
                justification: "Kant pense que la raison est la source de la moralité." 
            },
            { 
                texte: "La liberté est l'obéissance à la loi que l'on s'est prescrite.", 
                type: "daccord", 
                justification: "Pour Kant, la vraie liberté est l'autonomie morale." 
            },
            { 
                texte: "La morale dépend des conséquences de nos actions.", 
                type: "pasdaccord", 
                justification: "Kant rejette l'éthique conséquentialiste." 
            },
            { 
                texte: "Le bonheur est le but ultime de l'humanité.", 
                type: "pasdaccord", 
                justification: "Kant pense que le devoir moral prime sur le bonheur." 
            },
            { 
                texte: "La métaphysique est une science impossible.", 
                type: "pasdaccord", 
                justification: "Kant croit en la possibilité d'une métaphysique critique." 
            },
        ]
    },
    // auteur n°3
    {
        nom: "Platon",
        propositions: [
            { 
                texte: "Le monde sensible est une illusion.", 
                type: "daccord", 
                justification: "Platon distingue le monde sensible du monde des Idées, qu'il considère comme plus réel." 
            },
            { 
                texte: "La justice est l'harmonie entre les parties de l'âme.", 
                type: "daccord", 
                justification: "Dans 'La République', Platon définit la justice comme un équilibre intérieur." 
            },
            { 
                texte: "Les philosophes doivent gouverner la société.", 
                type: "daccord", 
                justification: "Platon croit que seuls les philosophes peuvent accéder à la vérité et gouverner justement." 
            },
            { 
                texte: "L'art doit être banni de la cité idéale.", 
                type: "pasdaccord", 
                justification: "Platon critique l'art comme une imitation trompeuse de la réalité." 
            },
            { 
                texte: "L'âme est immortelle.", 
                type: "daccord", 
                justification: "Platon défend l'idée de la réincarnation et de l'immortalité de l'âme." 
            },
            { 
                texte: "La démocratie est le meilleur régime politique.", 
                type: "pasdaccord", 
                justification: "Platon critique la démocratie comme un régime instable et injuste." 
            },
        ]
    },
    // auteur n°4
    {
        nom: "Aristote",
        propositions: [
            { 
                texte: "Le bonheur est le but de la vie humaine.", 
                type: "daccord", 
                justification: "Aristote définit le bonheur comme la finalité de l'existence dans 'L'Éthique à Nicomaque'." 
            },
            { 
                texte: "La vertu est un juste milieu entre deux extrêmes.", 
                type: "daccord", 
                justification: "Aristote propose une éthique de la modération." 
            },
            { 
                texte: "L'homme est un animal politique.", 
                type: "daccord", 
                justification: "Aristote pense que l'homme ne peut s'épanouir qu'en société." 
            },
            { 
                texte: "L'esclavage est naturel.", 
                type: "pasdaccord", 
                justification: "Aristote justifie l'esclavage par des arguments naturalistes, ce qui est contestable aujourd'hui." 
            },
            { 
                texte: "La raison est la faculté la plus noble de l'homme.", 
                type: "daccord", 
                justification: "Aristote valorise la raison comme ce qui distingue l'homme des autres animaux." 
            },
            { 
                texte: "La métaphysique est la science de l'être en tant qu'être.", 
                type: "pasdaccord", 
                justification: "Aristote définit la métaphysique comme l'étude des principes premiers." 
            },
        ]
    },
    // auteur n°5
    {
        nom: "Descartes",
        propositions: [
            { 
                texte: "Je pense, donc je suis.", 
                type: "daccord", 
                justification: "Descartes fonde la certitude de l'existence sur la pensée." 
            },
            { 
                texte: "Le doute est le premier pas vers la vérité.", 
                type: "daccord", 
                justification: "Descartes utilise le doute méthodique pour atteindre la certitude." 
            },
            { 
                texte: "L'âme et le corps sont deux substances distinctes.", 
                type: "daccord", 
                justification: "Descartes défend un dualisme entre l'esprit et la matière." 
            },
            { 
                texte: "Les animaux sont des machines sans âme.", 
                type: "pasdaccord", 
                justification: "Descartes réduit les animaux à des automates, ce qui est contesté aujourd'hui." 
            },
            { 
                texte: "La science doit se fonder sur des principes clairs et distincts.", 
                type: "daccord", 
                justification: "Descartes prône une méthode scientifique rigoureuse." 
            },
            { 
                texte: "Dieu est la garantie de la vérité.", 
                type: "pasdaccord", 
                justification: "Descartes invoque Dieu pour assurer la fiabilité de la raison." 
            },
        ]
    },
    // auteur n°6
    {
        nom: "Nietzsche",
        propositions: [
            { 
                texte: "Dieu est mort.", 
                type: "daccord", 
                justification: "Nietzsche annonce la fin des valeurs traditionnelles et religieuses." 
            },
            { 
                texte: "La volonté de puissance est le moteur de l'existence.", 
                type: "daccord", 
                justification: "Nietzsche voit dans la volonté de puissance l'essence de la vie." 
            },
            { 
                texte: "La morale est une invention des faibles pour dominer les forts.", 
                type: "daccord", 
                justification: "Nietzsche critique la morale chrétienne comme une morale d'esclaves." 
            },
            { 
                texte: "L'éternel retour est une pensée libératrice.", 
                type: "pasdaccord", 
                justification: "Nietzsche propose l'éternel retour comme test pour évaluer la valeur de nos actions." 
            },
            { 
                texte: "La vérité est une illusion nécessaire.", 
                type: "daccord", 
                justification: "Nietzsche remet en question l'idée de vérité objective." 
            },
            { 
                texte: "Le surhomme est l'idéal à atteindre.", 
                type: "pasdaccord", 
                justification: "Nietzsche imagine le surhomme comme celui qui crée ses propres valeurs." 
            },
        ]
    },
	
 // auteur n°7
    {
        nom: "Sartre",
        propositions: [
            { 
                texte: "L'existence précède l'essence.", 
                type: "daccord", 
                justification: "Sartre affirme que l'homme n'a pas de nature prédéfinie et se construit par ses choix." 
            },
            { 
                texte: "L'homme est condamné à être libre.", 
                type: "daccord", 
                justification: "Pour Sartre, la liberté est une condition inévitable de l'existence humaine." 
            },
            { 
                texte: "L'enfer, c'est les autres.", 
                type: "daccord", 
                justification: "Sartre souligne l'importance du regard d'autrui dans la construction de soi." 
            },
            { 
                texte: "La mauvaise foi est inévitable.", 
                type: "pasdaccord", 
                justification: "Sartre pense qu'on peut échapper à la mauvaise foi par la prise de conscience." 
            },
            { 
                texte: "L'engagement politique est une nécessité pour le philosophe.", 
                type: "daccord", 
                justification: "Sartre prône un intellectuel engagé dans les luttes de son temps." 
            },
            { 
                texte: "Le déterminisme rend la liberté impossible.", 
                type: "pasdaccord", 
                justification: "Sartre rejette le déterminisme et affirme la liberté radicale de l'homme." 
            },
        ]
    },

    // auteur n°8
    {
        nom: "Hegel",
        propositions: [
            { 
                texte: "L'histoire progresse dialectiquement.", 
                type: "daccord", 
                justification: "Hegel voit l'histoire comme un processus dialectique de thèse, antithèse et synthèse." 
            },
            { 
                texte: "Le réel est rationnel et le rationnel est réel.", 
                type: "daccord", 
                justification: "Cette formule résume la philosophie hégélienne de l'identité entre pensée et réalité." 
            },
            { 
                texte: "L'État est la réalisation de l'Esprit objectif.", 
                type: "daccord", 
                justification: "Pour Hegel, l'État est l'incarnation de la raison dans l'histoire." 
            },
            { 
                texte: "La liberté individuelle prime sur l'État.", 
                type: "pasdaccord", 
                justification: "Hegel subordonne l'individu à l'État comme réalisation de la liberté concrète." 
            },
            { 
                texte: "La philosophie doit être un système total.", 
                type: "daccord", 
                justification: "Hegel aspire à une philosophie englobant tous les aspects de la réalité." 
            },
            { 
                texte: "La conscience de soi se forme dans le rapport à l'autre.", 
                type: "daccord", 
                justification: "La dialectique du maître et de l'esclave illustre cette idée hégélienne." 
            },
        ]
    },

    // auteur n°9
    {
        nom: "Spinoza",
        propositions: [
            { 
                texte: "Dieu et la Nature sont une seule et même chose.", 
                type: "daccord", 
                justification: "Spinoza défend un panthéisme où Dieu s'identifie à la totalité de la Nature." 
            },
            { 
                texte: "Le libre arbitre est une illusion.", 
                type: "daccord", 
                justification: "Spinoza croit en un déterminisme absolu où tout découle nécessairement de la nature de Dieu." 
            },
            { 
                texte: "Les émotions peuvent être comprises rationnellement.", 
                type: "daccord", 
                justification: "Spinoza propose une analyse géométrique des affects humains." 
            },
            { 
                texte: "La béatitude consiste en la connaissance de Dieu.", 
                type: "daccord", 
                justification: "Pour Spinoza, la plus haute forme de connaissance mène à l'amour intellectuel de Dieu." 
            },
            { 
                texte: "La superstition est source de tous les maux.", 
                type: "daccord", 
                justification: "Spinoza critique vivement les superstitions religieuses." 
            },
            { 
                texte: "L'homme peut échapper totalement aux passions.", 
                type: "pasdaccord", 
                justification: "Spinoza pense qu'on peut modérer les passions par la raison, mais pas les éliminer complètement." 
            },
        ]
    },
	
	
    // Ajoutez d'autres philosophes ici...
];

function getRandomPhilosophe() {
    const randomIndex = Math.floor(Math.random() * philosophes.length);
    return philosophes[randomIndex];
}

function getRandomPropositions(philosophe, count) {
    const shuffled = philosophe.propositions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
