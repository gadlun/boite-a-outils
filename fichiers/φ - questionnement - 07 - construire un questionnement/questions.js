const questions = [
    {
        intitule: "Le travail n'est-il qu'une contrainte ?",
        piste1: "Le travail est-il uniquement une obligation pesante ?",
        piste2: "ou peut-il être source d'épanouissement et de réalisation personnelle ?",
        racine1: "L'activité humaine est-elle fondamentalement une source de peine ?",
        racine2: "ou peut-elle être un moyen d'accomplissement et de satisfaction ?",
        enjeu: "Examiner la nature ambivalente du travail et son rôle dans l'épanouissement humain."
    },
    {
        intitule: "La liberté est-elle une illusion ?",
        piste1: "Sommes-nous réellement libres de nos choix ?",
        piste2: "ou sommes-nous déterminés par des facteurs hors de notre contrôle ?",
        racine1: "L'être humain possède-t-il un libre arbitre authentique ?",
        racine2: "ou ses actions sont-elles le résultat de causes extérieures à sa volonté ?",
        enjeu: "Analyser la tension entre le sentiment de liberté et les déterminismes qui influencent nos actions."
    },
    {
        intitule: "La science peut-elle tout expliquer ?",
        piste1: "La méthode scientifique est-elle capable de résoudre tous les mystères de l'univers ?",
        piste2: "ou existe-t-il des limites fondamentales à notre compréhension scientifique ?",
        racine1: "Le savoir scientifique est-il la seule forme de connaissance valable ?",
        racine2: "ou d'autres approches sont-elles nécessaires pour appréhender la réalité dans sa totalité ?",
        enjeu: "Explorer les possibilités et les limites de la connaissance scientifique face à la complexité du monde."
    },
    {
        intitule: "L'art a-t-il besoin d'être beau ?",
        piste1: "La beauté est-elle une condition nécessaire à la création artistique ?",
        piste2: "ou l'art peut-il exister indépendamment des critères esthétiques traditionnels ?",
        racine1: "La fonction de l'art est-elle principalement de plaire aux sens ?",
        racine2: "ou peut-elle inclure d'autres dimensions comme la provocation ou la réflexion critique ?",
        enjeu: "Examiner la relation entre l'art, la beauté et les autres finalités possibles de la création artistique."
    },
    {
        intitule: "Le bonheur est-il un idéal accessible ?",
        piste1: "Le bonheur est-il un état durable que l'on peut atteindre ?",
        piste2: "ou n'est-il qu'une quête perpétuelle et insaisissable ?",
        racine1: "La nature humaine est-elle compatible avec un état de bonheur permanent ?",
        racine2: "ou sommes-nous condamnés à une alternance entre satisfaction et désir ?",
        enjeu: "Analyser la nature du bonheur et les conditions de sa réalisation dans la vie humaine."
    },
    {
        intitule: "La morale est-elle universelle ?",
        piste1: "Existe-t-il des principes moraux valables pour tous les êtres humains ?",
        piste2: "ou la morale est-elle relative à chaque culture et société ?",
        racine1: "Les valeurs morales sont-elles fondées sur une nature humaine commune ?",
        racine2: "ou sont-elles le produit de constructions sociales et historiques ?",
        enjeu: "Examiner la possibilité d'une éthique universelle face à la diversité des cultures et des valeurs."
    },
    {
        intitule: "La conscience de soi est-elle le propre de l'homme ?",
        piste1: "La capacité de se percevoir comme un sujet est-elle uniquement humaine ?",
        piste2: "ou peut-on l'attribuer à d'autres formes de vie ou d'intelligence ?",
        racine1: "La conscience réflexive est-elle le résultat de l'évolution biologique humaine ?",
        racine2: "ou peut-elle émerger dans d'autres systèmes complexes, naturels ou artificiels ?",
        enjeu: "Explorer la nature de la conscience de soi et ses implications pour notre compréhension de l'esprit."
    },
    {
        intitule: "Le progrès est-il une illusion ?",
        piste1: "L'humanité avance-t-elle réellement vers un état meilleur ?",
        piste2: "ou l'idée de progrès n'est-elle qu'un mythe rassurant ?",
        racine1: "Le développement des connaissances et des techniques améliore-t-il la condition humaine ?",
        racine2: "ou crée-t-il de nouveaux problèmes qui compensent ses bienfaits ?",
        enjeu: "Examiner la validité du concept de progrès et son impact sur notre vision de l'histoire et du futur."
    },
    {
        intitule: "La justice est-elle possible ?",
        piste1: "Peut-on établir un système juridique et social parfaitement équitable ?",
        piste2: "ou la justice reste-t-elle un idéal inatteignable dans la pratique ?",
        racine1: "Les principes de justice sont-ils universels et applicables à toutes les situations ?",
        racine2: "ou sont-ils toujours limités par des contraintes pratiques et des intérêts particuliers ?",
        enjeu: "Analyser les fondements et les limites de la justice dans les sociétés humaines."
    },
    {
        intitule: "La vérité est-elle subjective ?",
        piste1: "La vérité dépend-elle de la perception et de l'interprétation de chacun ?",
        piste2: "ou existe-t-il des vérités objectives indépendantes de notre point de vue ?",
        racine1: "Notre compréhension du monde est-elle inévitablement colorée par notre subjectivité ?",
        racine2: "ou pouvons-nous accéder à une connaissance objective de la réalité ?",
        enjeu: "Explorer la nature de la vérité et les limites de notre capacité à la connaître."
    },
    {
        intitule: "Le langage reflète-t-il la pensée ?",
        piste1: "Le langage est-il un miroir fidèle de nos processus mentaux ?",
        piste2: "ou impose-t-il sa propre structure à notre façon de penser ?",
        racine1: "La pensée préexiste-t-elle au langage et cherche-t-elle simplement à s'exprimer ?",
        racine2: "ou le langage façonne-t-il fondamentalement notre manière de concevoir le monde ?",
        enjeu: "Analyser la relation entre langage et pensée et son impact sur notre compréhension de la cognition."
    },
    {
        intitule: "La démocratie est-elle le meilleur système politique ?",
        piste1: "La démocratie garantit-elle le mieux les droits et libertés des citoyens ?",
        piste2: "ou présente-t-elle des failles qui la rendent vulnérable à la manipulation et à l'inefficacité ?",
        racine1: "Le principe du gouvernement par le peuple est-il le plus juste et le plus efficace ?",
        racine2: "ou d'autres formes de gouvernement peuvent-elles mieux servir l'intérêt général ?",
        enjeu: "Examiner les forces et les faiblesses de la démocratie comme système politique."
    },
    {
        intitule: "L'homme est-il naturellement bon ou mauvais ?",
        piste1: "La nature humaine est-elle fondamentalement bienveillante et altruiste ?",
        piste2: "ou sommes-nous intrinsèquement égoïstes et agressifs ?",
        racine1: "Les comportements moraux sont-ils innés chez l'être humain ?",
        racine2: "ou sont-ils le résultat de l'éducation et de la socialisation ?",
        enjeu: "Analyser les fondements de la moralité humaine et ses implications pour la société."
    },
    {
        intitule: "Le temps est-il une illusion ?",
        piste1: "Le temps est-il une réalité objective et mesurable ?",
        piste2: "ou n'est-il qu'une construction subjective de notre esprit ?",
        racine1: "L'écoulement du temps correspond-il à une propriété fondamentale de l'univers ?",
        racine2: "ou n'est-il qu'une façon humaine d'ordonner nos expériences ?",
        enjeu: "Explorer la nature du temps et son rôle dans notre compréhension de la réalité."
    },
    {
        intitule: "La culture nous libère-t-elle ou nous enferme-t-elle ?",
        piste1: "La culture enrichit-elle notre expérience et élargit-elle nos horizons ?",
        piste2: "ou nous enferme-t-elle dans des schémas de pensée limités ?",
        racine1: "L'acquisition de connaissances culturelles augmente-t-elle notre liberté de pensée ?",
        racine2: "ou nous conditionne-t-elle à percevoir le monde d'une certaine manière ?",
        enjeu: "Analyser le rôle de la culture dans le développement individuel et collectif."
    },
    {
        intitule: "La violence peut-elle être légitime ?",
        piste1: "Existe-t-il des situations où l'usage de la violence est moralement justifiable ?",
        piste2: "ou la violence est-elle toujours moralement condamnable, quelles que soient les circonstances ?",
        racine1: "La violence peut-elle être un moyen acceptable pour atteindre des fins justes ?",
        racine2: "ou compromet-elle inévitablement la légitimité de toute cause ?",
        enjeu: "Examiner les conditions éthiques et politiques de l'usage de la violence."
    },
    {
        intitule: "Le bonheur individuel et le bien commun sont-ils compatibles ?",
        piste1: "La recherche du bonheur personnel peut-elle coïncider avec l'intérêt collectif ?",
        piste2: "ou y a-t-il nécessairement un conflit entre ces deux objectifs ?",
        racine1: "L'épanouissement individuel contribue-t-il au bien-être de la société ?",
        racine2: "ou le bien commun exige-t-il des sacrifices personnels ?",
        enjeu: "Analyser la relation entre le bonheur individuel et le bien-être collectif dans la société."
    },
    {
        intitule: "La raison est-elle suffisante pour guider nos actions ?",
        piste1: "La rationalité peut-elle à elle seule déterminer nos choix et nos comportements ?",
        piste2: "ou les émotions et l'intuition jouent-elles un rôle essentiel dans la prise de décision ?",
        racine1: "La pensée rationnelle est-elle le meilleur guide pour l'action morale et pratique ?",
        racine2: "ou d'autres facultés sont-elles nécessaires pour naviguer dans la complexité de la vie ?",
        enjeu: "Examiner le rôle de la raison et des autres facultés dans la conduite de la vie humaine."
    },
    {
        intitule: "L'identité personnelle est-elle une construction sociale ?",
        piste1: "Notre identité est-elle le résultat de nos interactions sociales et culturelles ?",
        piste2: "ou existe-t-il un noyau identitaire indépendant de l'influence sociale ?",
        racine1: "La société façonne-t-elle entièrement qui nous sommes ?",
        racine2: "ou avons-nous une essence individuelle qui transcende les conditionnements sociaux ?",
        enjeu: "Analyser la formation de l'identité personnelle et son rapport avec le contexte social."
    },
    {
        intitule: "La connaissance de soi est-elle possible ?",
        piste1: "Pouvons-nous vraiment nous connaître nous-mêmes de manière objective ?",
        piste2: "ou sommes-nous inévitablement biaisés dans notre auto-perception ?",
        racine1: "L'introspection peut-elle nous donner un accès direct à notre véritable nature ?",
        racine2: "ou notre compréhension de nous-mêmes est-elle toujours médiatisée et partielle ?",
        enjeu: "Explorer les possibilités et les limites de la connaissance de soi."
    },
    {
        intitule: "Le désir est-il source de bonheur ou de souffrance ?",
        piste1: "Le désir nous motive-t-il à atteindre le bonheur et l'épanouissement ?",
        piste2: "ou est-il la cause principale de notre insatisfaction et de notre malheur ?",
        racine1: "La poursuite de nos désirs est-elle le chemin vers une vie satisfaisante ?",
        racine2: "ou devrions-nous chercher à nous libérer de l'emprise du désir ?",
        enjeu: "Analyser le rôle du désir dans la quête du bonheur et le sens de la vie."
    },
    {
        intitule: "La nature a-t-elle des droits ?",
        piste1: "Devrions-nous reconnaître des droits fondamentaux à la nature et aux écosystèmes ?",
        piste2: "ou les droits sont-ils un concept uniquement applicable aux êtres humains ?",
        racine1: "La nature a-t-elle une valeur intrinsèque indépendante de son utilité pour l'homme ?",
        racine2: "ou sa valeur est-elle uniquement instrumentale, en fonction de nos besoins et intérêts ?",
        enjeu: "Examiner les fondements philosophiques de l'éthique environnementale."
    },
	{
        intitule: "Le travail n'est-il qu'une contrainte ?",
        piste1: "Le travail est-il uniquement une obligation pesante ?",
        piste2: "ou peut-il être source d'épanouissement et de réalisation personnelle ?",
        racine1: "L'activité humaine est-elle fondamentalement une source de peine ?",
        racine2: "ou peut-elle être un moyen d'accomplissement et de satisfaction ?",
        enjeu: "Examiner la nature ambivalente du travail et son rôle dans l'épanouissement humain."
    },
    {
        intitule: "La liberté est-elle une illusion ?",
        piste1: "Sommes-nous réellement libres de nos choix ?",
        piste2: "ou sommes-nous déterminés par des facteurs hors de notre contrôle ?",
        racine1: "L'être humain possède-t-il un libre arbitre authentique ?",
        racine2: "ou ses actions sont-elles le résultat de causes extérieures à sa volonté ?",
        enjeu: "Analyser la tension entre le sentiment de liberté et les déterminismes qui influencent nos actions."
    },
    {
        intitule: "La science peut-elle tout expliquer ?",
        piste1: "La méthode scientifique est-elle capable de résoudre tous les mystères de l'univers ?",
        piste2: "ou existe-t-il des limites fondamentales à notre compréhension scientifique ?",
        racine1: "Le savoir scientifique est-il la seule forme de connaissance valable ?",
        racine2: "ou d'autres approches sont-elles nécessaires pour appréhender la réalité dans sa totalité ?",
        enjeu: "Explorer les possibilités et les limites de la connaissance scientifique face à la complexité du monde."
    },
    {
        intitule: "L'art a-t-il besoin d'être beau ?",
        piste1: "La beauté est-elle une condition nécessaire à la création artistique ?",
        piste2: "ou l'art peut-il exister indépendamment des critères esthétiques traditionnels ?",
        racine1: "La fonction de l'art est-elle principalement de plaire aux sens ?",
        racine2: "ou peut-elle inclure d'autres dimensions comme la provocation ou la réflexion critique ?",
        enjeu: "Examiner la relation entre l'art, la beauté et les autres finalités possibles de la création artistique."
    },
    {
        intitule: "Le bonheur est-il un idéal accessible ?",
        piste1: "Le bonheur est-il un état durable que l'on peut atteindre ?",
        piste2: "ou n'est-il qu'une quête perpétuelle et insaisissable ?",
        racine1: "La nature humaine est-elle compatible avec un état de bonheur permanent ?",
        racine2: "ou sommes-nous condamnés à une alternance entre satisfaction et désir ?",
        enjeu: "Analyser la nature du bonheur et les conditions de sa réalisation dans la vie humaine."
    },
    {
        intitule: "La morale est-elle universelle ?",
        piste1: "Existe-t-il des principes moraux valables pour tous les êtres humains ?",
        piste2: "ou la morale est-elle relative à chaque culture et société ?",
        racine1: "Les valeurs morales sont-elles fondées sur une nature humaine commune ?",
        racine2: "ou sont-elles le produit de constructions sociales et historiques ?",
        enjeu: "Examiner la possibilité d'une éthique universelle face à la diversité des cultures et des valeurs."
    },
    {
        intitule: "La conscience de soi est-elle le propre de l'homme ?",
        piste1: "La capacité de se percevoir comme un sujet est-elle uniquement humaine ?",
        piste2: "ou peut-on l'attribuer à d'autres formes de vie ou d'intelligence ?",
        racine1: "La conscience réflexive est-elle le résultat de l'évolution biologique humaine ?",
        racine2: "ou peut-elle émerger dans d'autres systèmes complexes, naturels ou artificiels ?",
        enjeu: "Explorer la nature de la conscience de soi et ses implications pour notre compréhension de l'esprit."
    },
    {
        intitule: "Le progrès est-il une illusion ?",
        piste1: "L'humanité avance-t-elle réellement vers un état meilleur ?",
        piste2: "ou l'idée de progrès n'est-elle qu'un mythe rassurant ?",
        racine1: "Le développement des connaissances et des techniques améliore-t-il la condition humaine ?",
        racine2: "ou crée-t-il de nouveaux problèmes qui compensent ses bienfaits ?",
        enjeu: "Examiner la validité du concept de progrès et son impact sur notre vision de l'histoire et du futur."
    },
    {
        intitule: "La justice est-elle possible ?",
        piste1: "Peut-on établir un système juridique et social parfaitement équitable ?",
        piste2: "ou la justice reste-t-elle un idéal inatteignable dans la pratique ?",
        racine1: "Les principes de justice sont-ils universels et applicables à toutes les situations ?",
        racine2: "ou sont-ils toujours limités par des contraintes pratiques et des intérêts particuliers ?",
        enjeu: "Analyser les fondements et les limites de la justice dans les sociétés humaines."
    },
    {
        intitule: "La vérité est-elle subjective ?",
        piste1: "La vérité dépend-elle de la perception et de l'interprétation de chacun ?",
        piste2: "ou existe-t-il des vérités objectives indépendantes de notre point de vue ?",
        racine1: "Notre compréhension du monde est-elle inévitablement colorée par notre subjectivité ?",
        racine2: "ou pouvons-nous accéder à une connaissance objective de la réalité ?",
        enjeu: "Explorer la nature de la vérité et les limites de notre capacité à la connaître."
    },
    {
        intitule: "Le langage reflète-t-il la pensée ?",
        piste1: "Le langage est-il un miroir fidèle de nos processus mentaux ?",
        piste2: "ou impose-t-il sa propre structure à notre façon de penser ?",
        racine1: "La pensée préexiste-t-elle au langage et cherche-t-elle simplement à s'exprimer ?",
        racine2: "ou le langage façonne-t-il fondamentalement notre manière de concevoir le monde ?",
        enjeu: "Analyser la relation entre langage et pensée et son impact sur notre compréhension de la cognition."
    },
    {
        intitule: "La démocratie est-elle le meilleur système politique ?",
        piste1: "La démocratie garantit-elle le mieux les droits et libertés des citoyens ?",
        piste2: "ou présente-t-elle des failles qui la rendent vulnérable à la manipulation et à l'inefficacité ?",
        racine1: "Le principe du gouvernement par le peuple est-il le plus juste et le plus efficace ?",
        racine2: "ou d'autres formes de gouvernement peuvent-elles mieux servir l'intérêt général ?",
        enjeu: "Examiner les forces et les faiblesses de la démocratie comme système politique."
    },
    {
        intitule: "L'homme est-il naturellement bon ou mauvais ?",
        piste1: "La nature humaine est-elle fondamentalement bienveillante et altruiste ?",
        piste2: "ou sommes-nous intrinsèquement égoïstes et agressifs ?",
        racine1: "Les comportements moraux sont-ils innés chez l'être humain ?",
        racine2: "ou sont-ils le résultat de l'éducation et de la socialisation ?",
        enjeu: "Analyser les fondements de la moralité humaine et ses implications pour la société."
    },
	
	    // ... (autres sujets)
];