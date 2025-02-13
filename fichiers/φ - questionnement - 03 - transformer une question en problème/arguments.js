const reperes = [
    
/* attention aux virgules ! le dernier argument est le seul à ne pas en comporter !*/
/* attention aux " dans la définition. A remplacer par '' */

{name: "La liberté est-elle une illusion ?", definition: "ou une réalité que nous expérimentons quotidiennement ?"},
{name: "Le bonheur est-il un état permanent ?", definition: "ou une succession de moments éphémères ?"},
{name: "La raison est-elle notre meilleur guide ?", definition: "ou devons-nous parfois nous fier à nos émotions ?"},
{name: "La vérité est-elle absolue ?", definition: "ou dépend-elle du contexte et de la perspective ?"},
{name: "L'art doit-il être beau ?", definition: "ou peut-il avoir d'autres fonctions plus importantes ?"},
{name: "La morale est-elle universelle ?", definition: "ou varie-t-elle selon les cultures et les époques ?"},
{name: "Le langage reflète-t-il la réalité ?", definition: "ou façonne-t-il notre perception du monde ?"},
{name: "La science peut-elle tout expliquer ?", definition: "ou y a-t-il des limites à sa connaissance ?"},
{name: "Le temps est-il une réalité objective ?", definition: "ou une construction subjective de notre esprit ?"},
{name: "La conscience est-elle propre à l'être humain ?", definition: "ou peut-elle exister sous d'autres formes ?"},
{name: "Le progrès technique est-il toujours bénéfique ?", definition: "ou peut-il parfois nuire à l'humanité ?"},
{name: "La justice est-elle un idéal atteignable ?", definition: "ou une notion toujours imparfaite dans la pratique ?"},
{name: "L'identité personnelle est-elle fixe ?", definition: "ou évolue-t-elle constamment au fil du temps ?"},
{name: "La démocratie est-elle le meilleur système politique ?", definition: "ou existe-t-il des alternatives plus efficaces ?"},
{name: "Le libre arbitre existe-t-il réellement ?", definition: "ou nos actions sont-elles déterminées par des facteurs externes ?"},
{name: "La culture façonne-t-elle notre nature ?", definition: "ou sommes-nous principalement définis par notre biologie ?"},
{name: "Le bonheur dépend-il de circonstances extérieures ?", definition: "ou est-il le résultat d'un état d'esprit ?"},
{name: "La violence peut-elle être justifiée ?", definition: "ou est-elle toujours moralement condamnable quelles que soient les circonstances ?"},
{name: "L'éducation doit-elle viser l'épanouissement individuel ?", definition: "ou privilégier l'adaptation à la société ?"},
{name: "La technologie nous libère-t-elle ?", definition: "ou crée-t-elle de nouvelles formes de dépendance ?"},
{name: "Le pouvoir corrompt-il nécessairement ?", definition: "ou peut-il être exercé de manière éthique et bienveillante ?"},
{name: "La beauté est-elle dans l'œil de celui qui regarde ?", definition: "ou existe-t-il des critères objectifs pour la définir ?"},
{name: "La religion est-elle une source de paix ?", definition: "ou un facteur de division et de conflit ?"},
{name: "Le travail est-il une nécessité aliénante ?", definition: "ou un moyen d'épanouissement et de réalisation de soi ?"},
{name: "La mémoire est-elle fiable ?", definition: "ou est-elle sujette à des distorsions et des reconstructions ?"},
{name: "L'amour est-il un sentiment irrationnel ?", definition: "ou peut-il être expliqué par la raison ?"},
{name: "La mort donne-t-elle un sens à la vie ?", definition: "ou en révèle-t-elle l'absurdité fondamentale ?"},
{name: "La nature humaine est-elle fondamentalement bonne ?", definition: "ou sommes-nous naturellement enclins à l'égoïsme et à la violence ?"},
{name: "L'art doit-il imiter la nature ?", definition: "ou chercher à créer de nouvelles formes d'expression ?"},
{name: "La vérité est-elle toujours bonne à dire ?", definition: "ou y a-t-il des situations où le mensonge est préférable ?"},
{name: "Le bonheur est-il le but ultime de l'existence ?", definition: "ou y a-t-il des valeurs plus importantes à poursuivre ?"},
{name: "La connaissance de soi est-elle possible ?", definition: "ou sommes-nous toujours en partie mystérieux à nous-mêmes ?"},
{name: "Le progrès moral de l'humanité est-il réel ?", definition: "ou l'histoire n'est-elle qu'une succession de cycles ?"},
{name: "La liberté d'expression doit-elle être absolue ?", definition: "ou faut-il lui imposer certaines limites pour protéger la société ?"},
{name: "L'intelligence artificielle peut-elle égaler l'intelligence humaine ?", definition: "ou y a-t-il des aspects irréductibles de la cognition humaine ?"},
{name: "La philosophie a-t-elle encore sa place aujourd'hui ?", definition: "ou la science l'a-t-elle rendue obsolète ?"},
{name: "Le patriotisme est-il une vertu ?", definition: "ou un obstacle à la compréhension mutuelle entre les peuples ?"},
{name: "La justice doit-elle viser la punition ?", definition: "ou privilégier la réhabilitation et la réparation ?"},
{name: "L'histoire est-elle écrite par les vainqueurs ?", definition: "ou peut-elle atteindre une forme d'objectivité ?"},
{name: "Le rire est-il propre à l'homme ?", definition: "ou existe-t-il des formes d'humour chez d'autres espèces ?"},
{name: "La mondialisation est-elle une chance pour l'humanité ?", definition: "ou une menace pour les cultures et les identités locales ?"},
{name: "Le génie est-il inné ?", definition: "ou le résultat d'un travail acharné et de circonstances favorables ?"},
{name: "La désobéissance civile est-elle justifiable ?", definition: "ou doit-on toujours respecter les lois de son pays ?"},
{name: "L'amitié est-elle désintéressée ?", definition: "ou cache-t-elle toujours une forme d'intérêt personnel ?"},
{name: "La peine de mort est-elle moralement acceptable ?", definition: "ou constitue-t-elle une violation des droits humains fondamentaux ?"},
{name: "Le hasard joue-t-il un rôle dans l'univers ?", definition: "ou tout est-il déterminé par des lois causales ?"},
{name: "La beauté sauvera-t-elle le monde ?", definition: "ou faut-il chercher d'autres solutions aux problèmes de l'humanité ?"},
{name: "L'égalité parfaite entre les hommes est-elle possible ?", definition: "ou les inégalités sont-elles inévitables dans toute société ?"},
{name: "La fin justifie-t-elle les moyens ?", definition: "ou existe-t-il des limites éthiques infranchissables quelles que soient les circonstances ?"}



/* pas de virgule ! */

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
