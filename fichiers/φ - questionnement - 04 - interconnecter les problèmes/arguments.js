const reperes = [
    
/* attention aux virgules ! le dernier argument est le seul à ne pas en comporter !*/
/* attention aux " dans la définition. A remplacer par '' */

{name: "La raison est-elle un outil d'émancipation ou un instrument de domination qui limite notre liberté ?",definition: "Le progrès scientifique améliore-t-il nécessairement la condition humaine ou peut-il aussi engendrer de nouvelles formes d'aliénation ?"},
{name: "L'art doit-il chercher à représenter fidèlement la réalité ou peut-il s'en affranchir pour exprimer l'imaginaire ?",definition: "La beauté est-elle une qualité objective des choses ou une construction subjective de l'esprit humain ?"},
{name: "La morale est-elle universelle et immuable ou dépend-elle des contextes culturels et historiques ?",definition: "Les valeurs morales sont-elles innées chez l'être humain ou sont-elles le fruit d'un apprentissage social ?"},
{name: "Le langage est-il un simple outil de communication ou un élément constitutif de notre pensée ?",definition: "La diversité linguistique est-elle une richesse culturelle ou un obstacle à la compréhension mutuelle ?"},
{name: "La conscience de soi est-elle le propre de l'homme ou peut-elle exister chez d'autres êtres vivants ?",definition: "L'identité personnelle est-elle une donnée stable ou une construction en perpétuelle évolution ?"},
{name: "Le travail est-il une source d'épanouissement personnel ou une forme d'aliénation de l'individu ?",definition: "La division du travail est-elle nécessaire à l'efficacité économique ou une source d'inégalités sociales ?"},
{name: "La démocratie est-elle le meilleur système politique ou comporte-t-elle des failles intrinsèques ?",definition: "Le pouvoir corrompt-il nécessairement ceux qui l'exercent ou peut-il être utilisé de manière éthique ?"},
{name: "La religion est-elle une source de paix ou un facteur de division entre les hommes ?",definition: "La foi religieuse est-elle compatible avec la raison ou sont-elles fondamentalement opposées ?"},
{name: "Le bonheur est-il un état durable ou une succession d'instants fugaces ?",definition: "La quête du bonheur est-elle une fin en soi ou un moyen d'atteindre d'autres objectifs ?"},
{name: "La violence est-elle inhérente à la nature humaine ou le produit de conditions sociales spécifiques ?",definition: "La guerre peut-elle être justifiée moralement ou est-elle toujours condamnable quelles que soient les circonstances ?"},
{name: "Le libre arbitre existe-t-il réellement ou nos actions sont-elles déterminées par des facteurs externes ?",definition: "La responsabilité morale est-elle compatible avec le déterminisme ou exige-t-elle une forme de liberté absolue ?"},
{name: "L'éducation doit-elle viser l'épanouissement individuel ou l'adaptation sociale de l'être humain ?",definition: "L'autorité est-elle nécessaire dans l'éducation ou faut-il privilégier l'autonomie de l'apprenant ?"},
{name: "La justice est-elle un idéal atteignable ou une utopie irréalisable dans notre société ?",definition: "L'égalité devant la loi est-elle suffisante ou faut-il aussi viser l'égalité des conditions ?"},
{name: "La technologie améliore-t-elle notre qualité de vie ou nous rend-elle dépendants et vulnérables ?",definition: "L'intelligence artificielle est-elle une menace pour l'humanité ou un outil pour son développement ?"},
{name: "La vérité est-elle absolue et universelle ou relative et contextuelle selon les situations ?",definition: "Le mensonge peut-il être moralement justifié ou est-il toujours répréhensible quelles que soient les circonstances ?"},
{name: "L'amour est-il un sentiment irrationnel ou peut-il être fondé sur la raison ?",definition: "Le mariage est-il une institution nécessaire ou une convention sociale dépassée dans notre époque ?"},
{name: "La mort donne-t-elle un sens à la vie ou en révèle-t-elle l'absurdité fondamentale ?",definition: "L'immortalité est-elle souhaitable pour l'être humain ou serait-elle source de nouveaux problèmes existentiels ?"},
{name: "La nature doit-elle être dominée par l'homme ou préservée dans son état originel ?",definition: "Le progrès technologique est-il compatible avec la protection de l'environnement ou sont-ils fondamentalement opposés ?"},
{name: "Le temps est-il une réalité objective ou une construction subjective de l'esprit humain ?",definition: "Le passé détermine-t-il inévitablement notre avenir ou pouvons-nous nous en libérer totalement ?"},
{name: "La culture est-elle un facteur d'unité ou de division entre les peuples ?",definition: "L'identité culturelle est-elle une richesse à préserver ou un obstacle à l'universalisme humaniste ?"},
{name: "Le désir est-il une force motrice positive ou une source de frustration et de souffrance ?",definition: "La satisfaction de tous nos désirs conduirait-elle au bonheur ou à une forme de vide existentiel ?"},
{name: "La science peut-elle tout expliquer ou existe-t-il des limites à la connaissance humaine ?",definition: "La méthode scientifique est-elle applicable à tous les domaines ou certains échappent-ils à son investigation ?"},
{name: "La liberté d'expression doit-elle être absolue ou peut-elle être limitée dans certains cas ?",definition: "La censure est-elle parfois nécessaire pour protéger la société ou toujours une atteinte aux droits fondamentaux ?"},
{name: "L'histoire est-elle le fruit du hasard ou obéit-elle à des lois déterminées ?",definition: "Le progrès historique est-il inéluctable ou peut-il y avoir des régressions dans l'évolution des sociétés ?"},
{name: "La philosophie a-t-elle encore un rôle à jouer ou est-elle devenue obsolète dans notre société ?",definition: "La sagesse est-elle un idéal atteignable ou une quête sans fin pour l'être humain ?"},
{name: "L'inconscient gouverne-t-il nos actions ou pouvons-nous le maîtriser par la raison ?",definition: "La psychanalyse est-elle une science rigoureuse ou une simple interprétation subjective de l'esprit ?"},
{name: "La mondialisation est-elle un facteur de progrès ou une menace pour les cultures locales ?",definition: "L'uniformisation culturelle est-elle inévitable ou peut-on préserver la diversité dans un monde globalisé ?"},
{name: "Le corps est-il un simple instrument ou une partie intégrante de notre identité ?",definition: "La dualité corps-esprit est-elle pertinente ou faut-il penser l'être humain comme une unité indivisible ?"},
{name: "La mémoire est-elle fiable ou sujette à des distorsions et des illusions ?",definition: "L'oubli est-il un défaut de la mémoire ou une fonction nécessaire à notre équilibre mental ?"},
{name: "La justice sociale est-elle compatible avec la liberté individuelle ou y a-t-il un conflit inévitable ?",definition: "L'État-providence est-il une nécessité sociale ou une entrave à l'initiative personnelle ?"},
{name: "L'art contemporain est-il une forme d'expression légitime ou une imposture intellectuelle ?",definition: "La beauté est-elle encore un critère pertinent pour juger l'art ou faut-il privilégier d'autres aspects ?"},
{name: "La conscience animale est-elle comparable à celle de l'homme ou fondamentalement différente ?",definition: "Les droits des animaux doivent-ils être étendus ou la supériorité humaine justifie-t-elle leur exploitation ?"},
{name: "La désobéissance civile est-elle un devoir moral ou une menace pour l'ordre social ?",definition: "La loi doit-elle toujours être respectée ou y a-t-il des situations qui justifient sa transgression ?"},
{name: "Le transhumanisme est-il une évolution souhaitable ou une menace pour notre humanité ?",definition: "L'amélioration technologique de l'être humain est-elle éthiquement acceptable ou doit-elle être limitée ?"},
{name: "La tolérance a-t-elle des limites ou doit-elle s'appliquer à toutes les opinions ?",definition: "Le relativisme culturel est-il une attitude respectueuse ou une forme de lâcheté morale ?"},
{name: "Le patriotisme est-il une vertu ou un obstacle à la fraternité universelle ?",definition: "L'attachement à sa nation est-il compatible avec l'ouverture aux autres cultures ou source de conflits ?"},
{name: "La peine de mort est-elle une justice légitime ou une barbarie indigne de nos sociétés ?",definition: "La vengeance a-t-elle sa place dans un système judiciaire ou doit-elle être totalement exclue ?"},
{name: "L'euthanasie est-elle un droit fondamental ou une atteinte à la sacralité de la vie ?",definition: "La souffrance en fin de vie a-t-elle un sens ou doit-on permettre d'y mettre fin volontairement ?"},
{name: "La publicité est-elle une information utile ou une manipulation des consciences ?",definition: "La société de consommation nous rend-elle plus heureux ou aliène-t-elle nos véritables besoins ?"},
{name: "L'argent fait-il le bonheur ou est-il source de corruption morale ?",definition: "La richesse matérielle est-elle un objectif légitime ou faut-il privilégier d'autres formes d'épanouissement ?"},
{name: "Le rêve est-il une échappatoire à la réalité ou une autre forme de conscience ?",definition: "L'interprétation des rêves a-t-elle une valeur scientifique ou relève-t-elle de la superstition ?"},
{name: "La mode est-elle une forme d'expression personnelle ou un instrument de conformisme social ?",definition: "L'apparence physique joue-t-elle un rôle trop important dans notre société ou est-elle négligeable ?"},
{name: "Le rire est-il libérateur ou peut-il être une forme de cruauté ?",definition: "L'humour a-t-il des limites morales ou tout peut-il être sujet à plaisanterie ?"},
{name: "La solitude est-elle une souffrance ou une condition nécessaire à l'épanouissement personnel ?",definition: "La vie en société est-elle indispensable au bonheur ou peut-on s'épanouir dans l'isolement ?"},
{name: "Le pardon est-il une faiblesse ou une force morale ?",definition: "La vengeance apporte-t-elle une satisfaction durable ou perpétue-t-elle le cycle de la violence ?"},
{name: "La curiosité est-elle un défaut ou une qualité essentielle pour le développement humain ?",definition: "L'ignorance peut-elle être préférable à la connaissance ou doit-on toujours chercher à savoir ?"},
{name: "Le doute est-il un obstacle à la connaissance ou une condition nécessaire au progrès ?",definition: "La certitude absolue est-elle atteignable ou faut-il accepter une part d'incertitude dans nos savoirs ?"}

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
