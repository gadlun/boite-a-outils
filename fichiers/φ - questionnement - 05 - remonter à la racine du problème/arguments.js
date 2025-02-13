const reperes = [
    
/* attention aux virgules ! le dernier argument est le seul à ne pas en comporter !*/
/* attention aux " dans la définition. A remplacer par '' */



{name: "La raison est-elle un outil d'émancipation ou un instrument de domination qui limite notre liberté ?",definition: "Dans quelle mesure la raison peut-elle à la fois libérer et contraindre l'individu ?"},
{name: "L'art doit-il chercher à représenter fidèlement la réalité ou peut-il s'en affranchir pour exprimer l'imaginaire ?",definition: "Quel est le rôle de l'art dans la représentation du réel et de l'imaginaire ?"},
{name: "La morale est-elle universelle et immuable ou dépend-elle des contextes culturels et historiques ?",definition: "Comment concilier l'universalité des principes moraux avec la diversité des cultures ?"},
{name: "Le langage est-il un simple outil de communication ou un élément constitutif de notre pensée ?",definition: "Quelle est l'influence du langage sur notre façon de penser et de percevoir le monde ?"},
{name: "La conscience de soi est-elle le propre de l'homme ou peut-elle exister chez d'autres êtres vivants ?",definition: "Quels sont les critères permettant de définir et d'identifier la conscience de soi ?"},
{name: "Le travail est-il une source d'épanouissement personnel ou une forme d'aliénation de l'individu ?",definition: "Comment le travail peut-il à la fois contribuer à notre développement et nous asservir ?"},
{name: "La démocratie est-elle le meilleur système politique ou comporte-t-elle des failles intrinsèques ?",definition: "Quelles sont les forces et les limites du système démocratique dans la gouvernance des sociétés ?"},
{name: "La religion est-elle une source de paix ou un facteur de division entre les hommes ?",definition: "Quel rôle joue la religion dans la cohésion sociale et les conflits entre les peuples ?"},
{name: "Le bonheur est-il un état durable ou une succession d'instants fugaces ?",definition: "Comment définir et atteindre le bonheur dans une perspective philosophique ?"},
{name: "La violence est-elle inhérente à la nature humaine ou le produit de conditions sociales spécifiques ?",definition: "Quelles sont les origines de la violence et comment peut-on la prévenir ou la contrôler ?"},
{name: "Le libre arbitre existe-t-il réellement ou nos actions sont-elles déterminées par des facteurs externes ?",definition: "Comment concilier la notion de liberté individuelle avec les déterminismes qui influencent nos choix ?"},
{name: "L'éducation doit-elle viser l'épanouissement individuel ou l'adaptation sociale de l'être humain ?",definition: "Quel équilibre trouver entre le développement personnel et l'intégration sociale dans l'éducation ?"},
{name: "La justice est-elle un idéal atteignable ou une utopie irréalisable dans notre société ?",definition: "Comment définir et mettre en œuvre une justice équitable dans un monde complexe ?"},
{name: "La technologie améliore-t-elle notre qualité de vie ou nous rend-elle dépendants et vulnérables ?",definition: "Quels sont les avantages et les risques liés au progrès technologique pour l'humanité ?"},
{name: "La vérité est-elle absolue et universelle ou relative et contextuelle selon les situations ?",definition: "Comment appréhender la notion de vérité dans un monde en constante évolution ?"},
{name: "L'amour est-il un sentiment irrationnel ou peut-il être fondé sur la raison ?",definition: "Quelle est la nature de l'amour et comment s'articule-t-il avec la raison ?"},
{name: "La mort donne-t-elle un sens à la vie ou en révèle-t-elle l'absurdité fondamentale ?",definition: "Comment la conscience de notre finitude influence-t-elle notre perception de l'existence ?"},
{name: "La nature doit-elle être dominée par l'homme ou préservée dans son état originel ?",definition: "Quel rapport l'humanité doit-elle entretenir avec la nature pour assurer un avenir durable ?"},
{name: "Le temps est-il une réalité objective ou une construction subjective de l'esprit humain ?",definition: "Comment notre perception du temps influence-t-elle notre compréhension du monde et de nous-mêmes ?"},
{name: "La culture est-elle un facteur d'unité ou de division entre les peuples ?",definition: "Quel rôle joue la diversité culturelle dans les relations entre les différentes sociétés ?"},
{name: "Le désir est-il une force motrice positive ou une source de frustration et de souffrance ?",definition: "Comment le désir influence-t-il nos actions et notre quête du bonheur ?"},
{name: "La science peut-elle tout expliquer ou existe-t-il des limites à la connaissance humaine ?",definition: "Quelles sont les frontières de la connaissance scientifique et comment les appréhender ?"},
{name: "La liberté d'expression doit-elle être absolue ou peut-elle être limitée dans certains cas ?",definition: "Comment concilier la liberté d'expression avec la protection des individus et de la société ?"},
{name: "L'histoire est-elle le fruit du hasard ou obéit-elle à des lois déterminées ?",definition: "Quelle est la part du déterminisme et du libre arbitre dans le cours de l'histoire ?"},
{name: "La philosophie a-t-elle encore un rôle à jouer ou est-elle devenue obsolète dans notre société ?",definition: "Quelle est la pertinence de la réflexion philosophique dans le monde contemporain ?"},
{name: "L'inconscient gouverne-t-il nos actions ou pouvons-nous le maîtriser par la raison ?",definition: "Comment l'inconscient influence-t-il notre comportement et nos décisions ?"},
{name: "La mondialisation est-elle un facteur de progrès ou une menace pour les cultures locales ?",definition: "Quels sont les effets de la mondialisation sur la diversité culturelle et l'identité des peuples ?"},
{name: "Le corps est-il un simple instrument ou une partie intégrante de notre identité ?",definition: "Quel rôle joue le corps dans la construction de notre identité et de notre rapport au monde ?"},
{name: "La mémoire est-elle fiable ou sujette à des distorsions et des illusions ?",definition: "Comment la mémoire façonne-t-elle notre identité et notre perception de la réalité ?"},
{name: "La justice sociale est-elle compatible avec la liberté individuelle ou y a-t-il un conflit inévitable ?",definition: "Comment concilier les exigences de justice sociale avec le respect des libertés individuelles ?"},
{name: "L'art contemporain est-il une forme d'expression légitime ou une imposture intellectuelle ?",definition: "Quels sont les critères permettant de juger la valeur et la légitimité de l'art contemporain ?"},
{name: "La conscience animale est-elle comparable à celle de l'homme ou fondamentalement différente ?",definition: "Comment évaluer et comprendre la conscience animale par rapport à la conscience humaine ?"},
{name: "La désobéissance civile est-elle un devoir moral ou une menace pour l'ordre social ?",definition: "Dans quelles circonstances la désobéissance civile peut-elle être justifiée moralement ?"},
{name: "Le transhumanisme est-il une évolution souhaitable ou une menace pour notre humanité ?",definition: "Quels sont les enjeux éthiques et philosophiques liés à l'amélioration technologique de l'être humain ?"},
{name: "La tolérance a-t-elle des limites ou doit-elle s'appliquer à toutes les opinions ?",definition: "Comment définir les limites de la tolérance dans une société pluraliste ?"},
{name: "Le patriotisme est-il une vertu ou un obstacle à la fraternité universelle ?",definition: "Comment concilier l'attachement à sa nation avec l'idéal d'une humanité unie ?"},
{name: "La peine de mort est-elle une justice légitime ou une barbarie indigne de nos sociétés ?",definition: "Quels sont les arguments éthiques pour et contre l'application de la peine capitale ?"},
{name: "L'euthanasie est-elle un droit fondamental ou une atteinte à la sacralité de la vie ?",definition: "Comment aborder la question de la fin de vie d'un point de vue éthique et philosophique ?"},
{name: "La publicité est-elle une information utile ou une manipulation des consciences ?",definition: "Quel est l'impact de la publicité sur notre liberté de choix et notre perception du monde ?"},
{name: "L'argent fait-il le bonheur ou est-il source de corruption morale ?",definition: "Quelle est la relation entre la richesse matérielle et le bien-être individuel et collectif ?"},
{name: "Le rêve est-il une échappatoire à la réalité ou une autre forme de conscience ?",definition: "Quel est le rôle du rêve dans notre compréhension de nous-mêmes et du monde ?"},
{name: "La mode est-elle une forme d'expression personnelle ou un instrument de conformisme social ?",definition: "Comment la mode influence-t-elle notre identité et nos relations sociales ?"},
{name: "Le rire est-il libérateur ou peut-il être une forme de cruauté ?",definition: "Quelles sont les fonctions sociales et psychologiques du rire et de l'humour ?"},
{name: "La solitude est-elle une souffrance ou une condition nécessaire à l'épanouissement personnel ?",definition: "Comment la solitude affecte-t-elle notre développement personnel et nos relations aux autres ?"},
{name: "Le pardon est-il une faiblesse ou une force morale ?",definition: "Quel est le rôle du pardon dans les relations interpersonnelles et la résolution des conflits ?"},
{name: "La curiosité est-elle un défaut ou une qualité essentielle pour le développement humain ?",definition: "Comment la curiosité contribue-t-elle à l'acquisition de connaissances et à l'évolution personnelle ?"},
{name: "Le doute est-il un obstacle à la connaissance ou une condition nécessaire au progrès ?",definition: "Quel est le rôle du doute dans la démarche scientifique et philosophique ?"}




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
