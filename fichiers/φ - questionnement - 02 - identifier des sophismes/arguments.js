const reperes = [
    
/* attention aux virgules ! le dernier argument est le seul à ne pas en comporter !*/
/* attention aux " dans la définition. A remplacer par '' */

  	{ name: "Fausse analogie",definition :"L'art est à la philosophie ce que le bonheur est au malheur. Donc la philosophie rend malheureux."},
  	{ name: "Fausse alternative",definition :"Soit la philosophie rend malheureux, soit elle n'a aucun effet. Or elle a bien un effet, donc elle rend malheureux."},
  	{ name: "Généralisation hâtive",definition :"Ce malheureux a fait de la philosophie, donc la philosophie rend tous les hommes malheureux."},
  	{ name: "Pétition de principe (cercle vicieux)",definition :"Le malheur est la conséquence de la philosophie, donc la philosophie rend malheureux."}, 
  	{ name: "Appel à l'ignorance",definition :"Rien ne prouve que la philosophie rend heureux. Donc la philosophie rend malheureux"}, 	
	{ name: "Sophisme du pire(de la double faute)",definition :"La pauvreté rend peut-être malheureux, mais ce n'est rien en comparaison avec la philosophie!"}, 	
  	{ name: "Appel au sentiment",definition :"Oui, j'ai rendu mon DM en retard, mais ce travail était si difficile et j'y ai passé tellement d'heures, soyez humain !"},


	{ name: "Faux dilemme", definition: "Soit tu es avec nous, soit tu es contre nous." },
	{ name: "Faux dilemme", definition: "L'hydroélectricité est une énergie verte oui ou non." },
	{ name: "Faux dilemme", definition: "On tue l'industrie ou on pollue." },
	{ name: "Non sequitur", definition: "Le monde est d'une prodigieuse perfection, à l'image de l'œil humain. Donc, une intelligence supérieure est responsable de l'univers." },
	{ name: "Non sequitur", definition: "Tous les consommateurs d'héroïne ont commencé par le haschisch. Tu fumes du haschisch, donc tu vas finir héroïnomane." },
	{ name: "Non sequitur", definition: "100% des gagnants auront tenté leur chance. Donc si tu joues, tu gagnes." },
	{ name: "Généralisation hâtive", definition: "J'ai rencontré deux politiciens corrompus, donc toute la classe politique est corrompue." },
	{ name: "Appel à la tradition", definition: "Il en a toujours été ainsi que les femmes accomplissent davantage de tâches ménagères que les hommes." },
	{ name: "Caricature", definition: "Selon le réalisateur du film BACON, tous les agriculteurs sont des criminels qui devraient aller en prison." },
	{ name: "Double faute", definition: "Ce n'est pas grave si on ne signe pas le Protocole de Kyoto, les États-Unis ne le signent pas et ils polluent plus que nous." },
	{ name: "Appel à la popularité", definition: "La nature est au service de l'être humain. C'est vrai parce que tout le monde le sait depuis toujours." },
	{ name: "Appel à la popularité", definition: "80% de la population considère que l'eau devrait rester gratuite. On ne doit donc pas facturer la gestion de l'eau." },
	{ name: "Déshonneur par association", definition: "Comparer un adversaire politique à Hitler pour le discréditer." },
	{ name: "Fausse analogie", definition: "Les humains sont comme des ordinateurs, ils ont besoin d'être programmés pour fonctionner correctement." },
	{ name: "Ad hominem", definition: "Tu ne peux pas avoir raison sur le changement climatique, tu n'es même pas un scientifique !" },
	{ name: "Pente glissante", definition: "Si on légalise le mariage homosexuel, bientôt on légalisera le mariage avec des animaux." },
	{ name: "Post hoc ergo propter hoc", definition: "J'ai mis mon chapeau porte-bonheur et j'ai gagné au loto. Mon chapeau m'a fait gagner." },
	{ name: "Argument d'autorité", definition: "Ce célèbre acteur dit que ce régime fonctionne, donc ça doit être vrai." },
	{ name: "Homme de paille", definition: "Les végétariens veulent que tout le monde arrête de manger de la viande du jour au lendemain." },
	{ name: "Appel à la nature", definition: "Le tabac est naturel, donc il ne peut pas être mauvais pour la santé." },
	{ name: "Tu quoque", definition: "Tu me dis d'arrêter de fumer, mais toi-même tu fumes !" },
	{ name: "Appel à l'émotion", definition: "Comment peux-tu être contre cette loi ? Pense aux enfants !" },
	{ name: "Argument ad ignorantiam", definition: "On n'a jamais prouvé que les fantômes n'existaient pas, donc ils existent." },
	{ name: "Faux compromis", definition: "Les climatosceptiques et les climatologues ont tous les deux des arguments valables." },
	{ name: "Sophisme du joueur", definition: "J'ai perdu 10 fois de suite à la roulette, je suis sûr de gagner au prochain tour." },
	{ name: "Sophisme de la solution parfaite", definition: "Pourquoi recycler ? Ça ne résoudra pas totalement le problème des déchets." },
	{ name: "Sophisme de l'accident", definition: "Les couteaux peuvent tuer, donc il faut les interdire." },
	{ name: "Sophisme de composition", definition: "Chaque pièce de cette machine est légère, donc la machine entière est légère." },
	{ name: "Sophisme de division", definition: "L'équipe a gagné le championnat, donc chaque joueur est un champion." },
	{ name: "Sophisme du Texas", definition: "Cet hiver est particulièrement froid, donc le réchauffement climatique n'existe pas." },
	{ name: "Sophisme de l'anecdote", definition: "Mon grand-père fumait un paquet par jour et a vécu jusqu'à 95 ans, donc fumer n'est pas si dangereux." },
	{ name: "Sophisme du coût irrécupérable", definition: "J'ai déjà dépensé tant d'argent dans ce projet, je ne peux pas abandonner maintenant." },
	{ name: "Sophisme de l'effort", definition: "J'ai travaillé dur sur ce rapport, donc il doit être bon." },
	{ name: "Sophisme de la nouveauté", definition: "C'est une nouvelle technologie, donc elle est forcément meilleure que l'ancienne." },
	{ name: "Sophisme de l'ancienneté", definition: "Cette méthode est utilisée depuis des siècles, elle doit être la meilleure." },
	{ name: "Sophisme du juste milieu", definition: "Les extrêmes sont toujours mauvais, la vérité se trouve au milieu." },
	{ name: "Sophisme de la pureté", definition: "Si on ne peut pas éliminer complètement la pauvreté, ça ne vaut pas la peine d'essayer." },
	{ name: "Sophisme de l'homme qui bat sa femme", definition: "Avez-vous arrêté de battre votre femme ?" },
	{ name: "Sophisme de la cause unique", definition: "Le chômage a augmenté depuis que ce gouvernement est au pouvoir, donc c'est la faute du gouvernement." },
	{ name: "Sophisme du vrai Écossais", definition: "Aucun vrai chrétien ne commettrait un tel acte." },
	{ name: "Sophisme de la preuve anecdotique", definition: "Je connais quelqu'un qui a été guéri par cette thérapie alternative, donc elle fonctionne." },
	{ name: "Sophisme de l'appel à la flatterie", definition: "Une personne intelligente comme vous comprendra sûrement l'intérêt de cet investissement." },
	{ name: "Sophisme de l'appel à la pitié", definition: "Vous ne pouvez pas me mettre une mauvaise note, j'ai travaillé si dur !" },
	{ name: "Sophisme de l'appel à la crainte", definition: "Si vous ne votez pas pour moi, le pays sombrera dans le chaos." },
	{ name: "Sophisme de la fausse dichotomie", definition: "Soit vous êtes pour la croissance économique, soit vous êtes pour la protection de l'environnement." },
	{ name: "Sophisme de la pente fatale", definition: "Si on autorise l'euthanasie, bientôt on tuera les personnes âgées pour économiser." },
	{ name: "Sophisme de l'homme de paille inversé", definition: "Mon adversaire n'a même pas abordé mon argument le plus fort." },
	{ name: "Sophisme de la preuve par assertion", definition:"C'est vrai parce que je le dis, point final."},
	{ name:"Sophisme de l'appel à l'incrédulité" ,definition:"Je ne peux pas croire que l'évolution soit vraie, c'est trop complexe."},
	{name:"Sophisme de la corrélation implique causalité" ,definition:"Les ventes de crème glacée augmentent en même temps que les noyades, donc la crème glacée cause des noyades."} /* pas de virgule ! */









	

];

function getRandomElements(arr, num) {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, num);
}

function loadReperes() {
    const selectedReperes = getRandomElements(reperes, 5);
    
    const repereTable = document.getElementById('repereTable');
    selectedReperes.forEach(repere => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = repere.name;
        cell.onclick = (event) => selectCell(event, 'repere', repere);
        row.appendChild(cell);
        repereTable.appendChild(row);
    });

    const definitionTable = document.getElementById('definitionTable');
    const shuffledDefinitions = getRandomElements(selectedReperes, selectedReperes.length);
    shuffledDefinitions.forEach(repere => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = repere.definition;
        cell.onclick = (event) => selectCell(event, 'definition');
        row.appendChild(cell);
        definitionTable.appendChild(row);
    });

    return selectedReperes;
}
