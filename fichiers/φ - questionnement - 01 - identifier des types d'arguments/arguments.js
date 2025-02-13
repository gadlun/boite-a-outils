const reperes = [
    
/* attention aux virgules ! le dernier argument est le seul à ne pas en comporter !*/
/* attention aux " dans la définition. A remplacer par '' */

  	{ name: "Sophisme !",definition :"Si vous critiquez la philosophie, alors votre professeur perdra son travail, il finira à la rue et il n'y survivra pas !"},
  	{ name: "Généralisation hâtive",definition :"Ce malheureux a fait de la philosophie, donc la philosophie rend tous les hommes malheureux."},
  	{ name: "Fausse analogie",definition :"L'art est à la philosophie ce que le bonheur est au malheur. Donc la philosophie rend malheureux."},
  	{ name: "Appel au sentiment",definition :"Oui j'ai rendu mon DM en retard mais ce devoir était si difficile et j'y ai passé tellement d'heures, soyez humain !"}, 
  	{ name: "Faux alternative (faux dilemme)",definition :"Soit la philosophie rend malheureux, soit elle n'a aucun effet. Or elle a bien un effet, donc elle rend malheureux."}, 	
  	{ name: "Pétition de principe (cercle vicieux)",definition :"Le malheur est la conséquence de la philosophie, donc la philosophie rend malheureux."}, 
  	{ name: "Appel à l'ignorance",definition :"Rien ne prouve que la philosophie rend heureux. Donc la philosophie rend malheureux."}, 	
  	{ name: "Sophisme du pire (de la double faute)",definition :"La pauvreté rend peut-être malheureux, mais ce n'est rien en comparaison avec la philosophie !"},
  	{ name: "Raisonnement par analogie",definition :"La philosophie permet de soigner l'âme comme la médecine soigne le corps et vise son bien-être, donc la philosophie vise le bonheur de l'âme."}, 
	{ name: "Raisonnement par alternative",definition :"Soit la philosophie rend heureux, soit elle rend malheureux, or il est clair qu'elle ne rend pas malheureux, donc elle rend heureux."}, 
  	{ name: "Raisonnement par l'absurde",definition :"Si la philosophie rendait malheureux, la plupart des philosophes auraient mis fin à leur jour, or ce n'est pas le cas : ainsi la philosophie rend heureux."}, 
  	{ name: "Syllogisme déductif",definition :"La philosophie rend heureux, or je fais de la philosophie, donc je suis heureux."}, 
  	{ name: "Sophisme !",definition :"Les seuls hommes heureux sont tous philosophes, donc la philosophie rend heureux."}, 
  	{ name: "Raisonnement inductif (généralisation)",definition :"Sénèque est mort heureux, or Sénèque est un philosophe, donc la philosophie rend heureux."}, 
  	{ name: "Sophisme !",definition :"Les biens matériels sont la source du bonheur, car ce qui rend heureux c'est de posséder des objets."}, 
  	{ name: "Syllogisme déductif",definition :"Le bonheur suppose une situation matérielle confortable, or les biens matériels sont source de confort donc avoir des biens matériels est une condition du bonheur."},
  	{ name: "Alternative (raisonnement par élimination)",definition :"Soit avoir des biens matériels est une condition du bonheur, soit on peut être heureux sans bien matériel. Or il est presque impossible d'être heureux ainsi. Donc avoir des biens matériels est une condition du bonheur."},
  	{ name: "Raisonnement par analogie",definition :"Le bonheur repose sur le bien-être de l'esprit, tout comme la santé du corps est une condition pour son bien-être."},
  	{ name: "Raisonnement inductif (par généralisation)",definition :"La plupart des populations qui se disent heureuses bénéficient d'un salaire moyen élevé et d'aides sociales importantes. Donc le bien-être matériel est une condition du bonheur."},
  	{ name: "Raisonnement par l'absurde",definition :"Si les biens matériels n'étaient pas une condition bonheur, alors il serait possible d'être heureux dans la misère absolue. Or personne ne souhaite tomber dans une misère absolue. Donc les biens matériels sont une condition du bonheur."},
	{ name: "Raisonnement par analogie",definition : "Il est légitime de pratiquer l'euthanasie sur certains animaux en grande souffrance, donc il est légitime de l'appliquer à des cas d'êtres humains en grande souffrance." },
    { name: "Alternative (raisonnement par élimination)",definition :"Soit on pratique l'euthanasie sur des personnes en grande souffrance, soit on les laisse souffrir. Or il n'est pas légitime de laisser souffrir une personne en connaissance de cause. Donc il est légitime de pratiquer l'euthanasie à des cas de personnes en grande souffrance." },
    { name: "Raisonnement par l'absurde",definition :"Si l'euthanasie est interdite dans les cas de grande souffrance, on devra laisser souffrir les personnes en état de grande souffrance. Or il n'est pas légitime de laisser souffrir des personnes en état de grande souffrance. Donc il est légitime de d'autoriser l'euthanasie pour les personnes en état de grande souffrance." },
    { name: "Raisonnement inductif(par généralisation)",definition :"En 2008, Chantal Sébire a refusé les soins palliatifs malgré sa souffrance physique intense, et a réclamé le droit de mourir dans la dignité. Or cette demande semble légitime. Donc il est légitime de d'autoriser l'euthanasie pour les personnes en état de grande souffrance." },	
    { name: "Sophisme !",definition :"En temps de guerre, on autorise d'achever les prisonniers blessés. Donc il est légitime d'autoriser l'euthanasie pour les personnes en état de grande souffrance." },
    { name: "Syllogisme déductif",definition : "Il est légitime de venir en aide à toute personne en grande souffrance. Or l'euthanasie consiste à venir en aide à des personnes en grande souffrance. Donc il est légitime de pratiquer l'euthanasie à des cas de personnes en grande souffrance." } /* pas de virgule ! */

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
