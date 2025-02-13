const syllogisms = [
    { major: "Tous les hommes sont mortels.", minor: "Socrate est un homme.", conclusion: "Donc, Socrate est mortel." },
    { major: "Tous les chats sont des animaux.", minor: "Mon chat est un chat.", conclusion: "Donc, mon chat est un animal." },
    { major: "Tous les oiseaux ont des plumes.", minor: "Un pingouin est un oiseau.", conclusion: "Donc, un pingouin a des plumes." },
    { major: "Tous les mammifères sont des animaux.", minor: "Un chien est un mammifère.", conclusion: "Donc, un chien est un animal." },
    { major: "Tous les reptiles pondent des œufs.", minor: "Une tortue est un reptile.", conclusion: "Donc, une tortue pond des œufs." },
    { major: "Tous les chiens sont des animaux fidèles.", minor: "Rex est un chien.", conclusion: "Donc, Rex est un animal fidèle." },
    { major: "Tous les fruits ont des graines.", minor: "Une pomme est un fruit.", conclusion: "Donc, une pomme a des graines." },
    { major: "Tous les poissons vivent dans l'eau.", minor: "Un saumon est un poisson.", conclusion: "Donc, un saumon vit dans l'eau." },
    { major: "Tous les étudiants passent des examens.", minor: "Marie est une étudiante.", conclusion: "Donc, Marie passe des examens." },
    { major: "Tous les livres ont des pages.", minor: "Mon livre est un livre.", conclusion: "Donc, mon livre a des pages." },

    { major: "Tous les mammifères ont un cœur.", minor: "Un éléphant est un mammifère.", conclusion: "Donc, un éléphant a un cœur." },
    { major: "Tous les arbres produisent de l'oxygène.", minor: "Un chêne est un arbre.", conclusion: "Donc, un chêne produit de l'oxygène." },
    { major: "Tous les insectes ont six pattes.", minor: "Une fourmi est un insecte.", conclusion: "Donc, une fourmi a six pattes." },
    { major: "Tous les véhicules ont des roues.", minor: "Une voiture est un véhicule.", conclusion: "Donc, une voiture a des roues." },
    { major: "Tous les poissons ont des nageoires.", minor: "Un requin est un poisson.", conclusion: "Donc, un requin a des nageoires." },

    { major: "Tous les animaux ont besoin d'eau pour vivre.", minor: "Un chat est un animal.", conclusion: "Donc, un chat a besoin d'eau pour vivre." },
    { major: "Tous les légumes sont comestibles.", minor: "Une carotte est un légume.", conclusion: "Donc, une carotte est comestible." },
    { major: "Tous les oiseaux pondent des œufs.", minor: "Une poule est un oiseau.", conclusion: "Donc, une poule pond des œufs." },
    { major: "Tous les reptiles sont à sang froid.", minor: "Un crocodile est un reptile.", conclusion: "Donc, un crocodile est à sang froid." },
    { major: "Tous les fruits viennent d'une plante.", minor: "Une banane est un fruit.", conclusion: "Donc, une banane vient d'une plante." },

    { major:"Tous les chats aiment dormir au soleil",minor:"Mon chat s'appelle Felix et c'est un chat",conclusion:" Donc, Felix aime dormir au soleil."},
    { major:"Tous les arbres perdent leurs feuilles en automne",minor:"Un érable est un arbre",conclusion:" Donc, un érable perd ses feuilles en automne."},
    { major:"Tous les insectes se reproduisent par œufs",minor:"Une abeille est un insecte",conclusion:" Donc une abeille se reproduit par œufs"},
    { major:"Tous les fruits contiennent des vitamines",minor:"Une orange est un fruit",conclusion:" Donc une orange contient des vitamines"},
    { major:"Tous les oiseaux migrent en hiver",minor:"Une oie est un oiseau",conclusion:" Donc une oie migre en hiver"},
    {major:"Majeure : Tous les objets de la catégorie A sont B",minor:"Mineure : Cet objet fait partie de la catégorie A,conclusion:"Conclusion : Donc cet objet est B"},
    {major:"Majeure : Tous les fruits contiennent de la vitamine C",minor:"Mineure : Une fraise est un fruit",conclusion:"Conclusion : Donc une fraise contient de la vitamine C"},
    {major:"Majeure : Tous les mammifères allaitent leurs petits",minor:"Mineure : Une vache est un mammifère",conclusion:"Conclusion : Donc une vache allaite ses petits"},
    {major:"Majeure : Tous les chiens aboient",minor:"Mineure : Mon chien s'appelle Max et c'est un chien",conclusion:"Conclusion : Donc Max aboie"},
    {major:"Majeure : Tous les oiseaux volent",minor:"Mineure : Un moineau est un oiseau",conclusion:"Conclusion : Donc le moineau vole"},
	{major:"Majeure : Tous ceux qui étudient réussissent leurs examens",minor:"Mineure : Paul étudie",conclusion:"Conclusion : Donc Paul réussira son examen"},
    {major:"Majeure : Tous ceux qui mangent équilibré sont en bonne santé",minor:"Mineure : Marie mange équilibré",conclusion:"Conclusion : Donc Marie est en bonne santé"},
    {major:"Majeure : Tous ceux qui font du sport sont plus heureux",minor:"Mineure : Jean fait du sport",conclusion:"Conclusion : Donc Jean est plus heureux"},
    {major:"Majeure : Tous ceux qui voyagent apprennent beaucoup de choses",minor:"Mineure : Sophie voyage souvent",conclusion:"Conclusion : Donc Sophie apprend beaucoup de choses"},
    {major:"Majeure : Tous ceux qui lisent régulièrement améliorent leur vocabulaire",minor:"Mineure : Lucas lit régulièrement",conclusion:"Conclusion : Donc Lucas améliore son vocabulaire"},
    {major:"Majeure : Tous ceux qui se lèvent tôt sont productifs",minor:"Mineure : Alice se lève tôt",conclusion:"Conclusion : Donc Alice est productive"},
    {major:"Majeure : Tous ceux qui écoutent de la musique se détendent",minor:"Mineure : Marc écoute de la musique",conclusion:"Conclusion : Donc Marc se détend"},
    {major:"Majeure : Tous ceux qui prennent le temps de méditer sont calmes",minor:"Mineure : Julie médite régulièrement",conclusion:"Conclusion : Donc Julie reste calme"},
    {major:"Majeure : Tous ceux qui pratiquent le yoga améliorent leur flexibilité",minor:"Mineure : Tom pratique le yoga depuis longtemps",conclusion:"Conclusion : Donc Tom améliore sa flexibilité"},
    {major:"Majeure : Tous ceux qui mangent beaucoup de fruits et légumes sont en bonne santé",minor:"Mineure : Emma mange beaucoup de fruits et légumes",conclusion:"Conclusion : Donc Emma est en bonne santé"},

     for (let i = syllogisms.length; i < 150; i++) {
         syllogisms.push({
             major:`Majeure ${i + 1}: Tous les objets de la catégorie X sont Y.`,
             minor:`Mineure ${i + 1}: Cet objet fait partie de la catégorie X.`,
             conclusion:`Conclusion ${i + 1}: Donc cet objet est Y.`
         });
     }
];
