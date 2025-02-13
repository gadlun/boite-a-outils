const reperes = [
    
/* attention aux virgules ! le dernier argument est le seul à ne pas en comporter !*/
/* attention aux " dans la définition. A remplacer par '' */

{name: "La raison est-elle un outil d'émancipation ou un instrument de domination qui limite notre liberté ?",definition: "L'enjeu est de déterminer si la raison libère l'homme ou l'asservit."},
{name: "L'art doit-il chercher à représenter fidèlement la réalité ou peut-il s'en affranchir pour exprimer l'imaginaire ?",definition: "L'enjeu est de définir la fonction de l'art entre mimesis et création pure."},
{name: "La morale est-elle universelle et immuable ou dépend-elle des contextes culturels et historiques ?",definition: "L'enjeu est de déterminer si les valeurs morales sont absolues ou relatives."},
{name: "Le langage est-il un simple outil de communication ou un élément constitutif de notre pensée ?",definition: "L'enjeu est de comprendre le rôle du langage dans la formation de la pensée."},
{name: "La conscience de soi est-elle le propre de l'homme ou peut-elle exister chez d'autres êtres vivants ?",definition: "L'enjeu est de définir la spécificité de la conscience humaine."},
{name: "Le travail est-il une source d'épanouissement personnel ou une forme d'aliénation de l'individu ?",definition: "L'enjeu est d'évaluer l'impact du travail sur la condition humaine."},
{name: "La démocratie est-elle le meilleur système politique ou comporte-t-elle des failles intrinsèques ?",definition: "L'enjeu est d'examiner les forces et les limites du système démocratique."},
{name: "La religion est-elle une source de paix ou un facteur de division entre les hommes ?",definition: "L'enjeu est d'analyser le rôle de la religion dans les relations humaines."},
{name: "Le bonheur est-il un état durable ou une succession d'instants fugaces ?",definition: "L'enjeu est de comprendre la nature et la temporalité du bonheur."},
{name: "La violence est-elle inhérente à la nature humaine ou le produit de conditions sociales spécifiques ?",definition: "L'enjeu est de déterminer l'origine de la violence humaine."},
{name: "Le libre arbitre existe-t-il réellement ou nos actions sont-elles déterminées par des facteurs externes ?",definition: "L'enjeu est d'examiner la possibilité de la liberté humaine face au déterminisme."},
{name: "L'éducation doit-elle viser l'épanouissement individuel ou l'adaptation sociale de l'être humain ?",definition: "L'enjeu est de définir les objectifs de l'éducation entre individualité et socialisation."},
{name: "La justice est-elle un idéal atteignable ou une utopie irréalisable dans notre société ?",definition: "L'enjeu est d'évaluer la possibilité de réaliser la justice dans le monde réel."},
{name: "La technologie améliore-t-elle notre qualité de vie ou nous rend-elle dépendants et vulnérables ?",definition: "L'enjeu est d'analyser l'impact de la technologie sur la condition humaine."},
{name: "La vérité est-elle absolue et universelle ou relative et contextuelle selon les situations ?",definition: "L'enjeu est de déterminer la nature de la vérité entre absolu et relativisme."},
{name: "L'amour est-il un sentiment irrationnel ou peut-il être fondé sur la raison ?",definition: "L'enjeu est de comprendre la nature de l'amour entre émotion et rationalité."},
{name: "La mort donne-t-elle un sens à la vie ou en révèle-t-elle l'absurdité fondamentale ?",definition: "L'enjeu est d'examiner l'influence de la mortalité sur le sens de l'existence."},
{name: "La nature doit-elle être dominée par l'homme ou préservée dans son état originel ?",definition: "L'enjeu est de définir la relation idéale entre l'homme et la nature."},
{name: "Le temps est-il une réalité objective ou une construction subjective de l'esprit humain ?",definition: "L'enjeu est de comprendre la nature du temps entre réalité et perception."},
{name: "La culture est-elle un facteur d'unité ou de division entre les peuples ?",definition: "L'enjeu est d'analyser le rôle de la culture dans les relations interculturelles."},
{name: "Le désir est-il une force motrice positive ou une source de frustration et de souffrance ?",definition: "L'enjeu est d'évaluer l'impact du désir sur le bien-être humain."},
{name: "La science peut-elle tout expliquer ou existe-t-il des limites à la connaissance humaine ?",definition: "L'enjeu est de déterminer l'étendue et les limites du savoir scientifique."},
{name: "La liberté d'expression doit-elle être absolue ou peut-elle être limitée dans certains cas ?",definition: "L'enjeu est de définir les limites éthiques de la liberté d'expression."},
{name: "L'histoire est-elle le fruit du hasard ou obéit-elle à des lois déterminées ?",definition: "L'enjeu est de comprendre les mécanismes qui régissent le cours de l'histoire."},
{name: "La philosophie a-t-elle encore un rôle à jouer ou est-elle devenue obsolète dans notre société ?",definition: "L'enjeu est d'évaluer la pertinence de la philosophie dans le monde contemporain."},
{name: "L'inconscient gouverne-t-il nos actions ou pouvons-nous le maîtriser par la raison ?",definition: "L'enjeu est de déterminer l'influence de l'inconscient sur notre comportement."},
{name: "La mondialisation est-elle un facteur de progrès ou une menace pour les cultures locales ?",definition: "L'enjeu est d'analyser les effets de la mondialisation sur la diversité culturelle."},
{name: "Le corps est-il un simple instrument ou une partie intégrante de notre identité ?",definition: "L'enjeu est de comprendre le rôle du corps dans la construction de l'identité."},
{name: "La mémoire est-elle fiable ou sujette à des distorsions et des illusions ?",definition: "L'enjeu est d'évaluer la fiabilité de la mémoire dans notre perception du passé."},
{name: "La justice sociale est-elle compatible avec la liberté individuelle ou y a-t-il un conflit inévitable ?",definition: "L'enjeu est de concilier les exigences de justice sociale et de liberté individuelle."},
{name: "L'art contemporain est-il une forme d'expression légitime ou une imposture intellectuelle ?",definition: "L'enjeu est de définir la valeur et la légitimité de l'art contemporain."},
{name: "La conscience animale est-elle comparable à celle de l'homme ou fondamentalement différente ?",definition: "L'enjeu est de comprendre la nature de la conscience animale par rapport à l'humain."},
{name: "La désobéissance civile est-elle un devoir moral ou une menace pour l'ordre social ?",definition: "L'enjeu est d'évaluer la légitimité et les conséquences de la désobéissance civile."},
{name: "Le transhumanisme est-il une évolution souhaitable ou une menace pour notre humanité ?",definition: "L'enjeu est d'examiner les implications éthiques de l'amélioration technologique de l'homme."},
{name: "La tolérance a-t-elle des limites ou doit-elle s'appliquer à toutes les opinions ?",definition: "L'enjeu est de définir les limites de la tolérance dans une société pluraliste."},
{name: "Le patriotisme est-il une vertu ou un obstacle à la fraternité universelle ?",definition: "L'enjeu est de concilier l'attachement national et l'ouverture aux autres cultures."},
{name: "La peine de mort est-elle une justice légitime ou une barbarie indigne de nos sociétés ?",definition: "L'enjeu est d'évaluer la légitimité éthique et l'efficacité de la peine capitale."},
{name: "L'euthanasie est-elle un droit fondamental ou une atteinte à la sacralité de la vie ?",definition: "L'enjeu est de définir les limites éthiques concernant la fin de vie."},
{name: "La publicité est-elle une information utile ou une manipulation des consciences ?",definition: "L'enjeu est d'analyser l'impact de la publicité sur notre liberté de choix."},
{name: "L'argent fait-il le bonheur ou est-il source de corruption morale ?",definition: "L'enjeu est d'examiner la relation entre richesse matérielle et bien-être."},
{name: "Le rêve est-il une échappatoire à la réalité ou une autre forme de conscience ?",definition: "L'enjeu est de comprendre la nature et la fonction du rêve dans notre vie psychique."},
{name: "La mode est-elle une forme d'expression personnelle ou un instrument de conformisme social ?",definition: "L'enjeu est d'analyser le rôle de la mode dans l'identité et les relations sociales."},
{name: "Le rire est-il libérateur ou peut-il être une forme de cruauté ?",definition: "L'enjeu est d'examiner les fonctions sociales et psychologiques du rire."},
{name: "La solitude est-elle une souffrance ou une condition nécessaire à l'épanouissement personnel ?",definition: "L'enjeu est de comprendre le rôle de la solitude dans le développement personnel."},
{name: "Le pardon est-il une faiblesse ou une force morale ?",definition: "L'enjeu est d'évaluer la valeur morale et les effets du pardon."},
{name: "La curiosité est-elle un défaut ou une qualité essentielle pour le développement humain ?",definition: "L'enjeu est de déterminer le rôle de la curiosité dans l'acquisition de connaissances."},
{name: "Le doute est-il un obstacle à la connaissance ou une condition nécessaire au progrès ?",definition: "L'enjeu est de comprendre le rôle du doute dans la démarche scientifique et philosophique."}

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
