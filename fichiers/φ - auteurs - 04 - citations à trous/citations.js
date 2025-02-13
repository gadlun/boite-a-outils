const citations = [
    {
        text: "«&nbsp;Je pense, donc je suis. Cette phrase résume l'idée que la pensée est la preuve de notre existence et de notre conscience de soi.&nbsp;»",
        missingWords: ["pense", "existence", "phrase", "preuve", "conscience"],
        author: "René Descartes",
        work: "Discours de la méthode",
        publisher: "Vrin",
        city: "Paris",
        year: "1996",
        page: "25"
    },
    {
        text: "«&nbsp;L'homme est un animal politique, il ne peut vivre en dehors de la société. Cette nature sociale lui permet d'épanouir ses talents et de participer à la vie collective.&nbsp;»",
        missingWords: ["politique", "société", "sociale", "talents", "collective"],
        author: "Aristote",
        work: "Politique",
        publisher: "Garnier-Flammarion",
        city: "Paris",
        year: "1960",
        page: "12"
    },
    {
        text: "«&nbsp;La liberté consiste à ne dépendre que de la loi, et cette loi doit être juste. C'est ainsi que l'on peut garantir l'égalité entre tous les citoyens et assurer une société équitable.&nbsp;»",
        missingWords: ["dépendre", "juste", "égalité", "citoyens", "équitable"],
        author: "Montesquieu",
        work: "De l'esprit des lois",
        publisher: "Flammarion",
        city: "Paris",
        year: "1989",
        page: "88"
    },
    {
        text: "«&nbsp;Le bonheur n'est pas une destination, mais un chemin que nous construisons chaque jour. Nos choix et nos actions façonnent notre expérience de vie et notre épanouissement personnel.&nbsp;»",
        missingWords: ["destination", "chemin", "choix", "actions", "épanouissement"],
        author: "Albert Camus",
        work: "Le Mythe de Sisyphe",
        publisher: "Gallimard",
        city: "Paris",
        year: "1942",
        page: "168"
    },
    {
       text:"«&nbsp;L'homme est condamné à être libre, car il doit choisir et assumer ses choix. Dans un monde sans repères fixes, la responsabilité de nos actes devient le fondement de notre existence.&nbsp;»", 
       missingWords:["condamné", "choix", "repères", "responsabilité", "existence"], 
       author:"Jean-Paul Sartre", 
       work:"L'Être et le Néant", 
       publisher:"Gallimard", 
       city:"Paris", 
       year:"1943", 
       page:"45"
     },
     {
       text:"«&nbsp;La connaissance est le pouvoir qui nous permet d'agir sur le monde, d'en comprendre les mécanismes. Cette compréhension nous donne la capacité de changer le cours des événements et d'influencer notre environnement.&nbsp;»", 
       missingWords:["pouvoir", "changer", "mécanismes", "comprendre", "influencer"], 
       author:"Francis Bacon", 
       work:"Meditationes Sacrae", 
       publisher:"Oxford University Press", 
       city:"Oxford", 
       year:"1597", 
       page:"42"
     },
     {
         text:"«&nbsp;La justice est la première vertu des institutions sociales et politiques, garantissant l'égalité entre tous les citoyens. Elle assure la stabilité et la cohésion de la société en protégeant les droits individuels.&nbsp;»",
         missingWords:["sociales", "égalité", "citoyens", "stabilité", "droits"],
         author:"John Rawls",
         work:"Théorie de la justice",
         publisher:"Seuil",
         city:"Paris",
         year:"1987",
         page:"45"
     },
     {
         text:"«&nbsp;La morale est la science du bien et du mal, elle guide nos actions dans un monde complexe. Elle nous aide à naviguer dans les situations difficiles et à prendre des décisions éthiques.&nbsp;»",
         missingWords:["science", "difficile", "guide", "naviguer", "éthiques"],
         author:"Emmanuel Kant",
         work:"Fondements de la métaphysique des mœurs",
         publisher:"Vrin",
         city:"Paris",
         year:"1993",
         page:"32"
     },
     {
      text:"«&nbsp;Philosopher, c'est apprendre à mourir, à comprendre notre condition humaine. C'est aussi accepter notre finitude avec sagesse et vivre pleinement chaque instant de notre existence.&nbsp;»", 
      missingWords:["mourir", "finitude", "condition", "sagesse", "existence"], 
      author:"Michel Montaigne", 
      work:"Essais", 
      publisher:"Flammarion", 
      city:"Paris", 
      year:"2002", 
      page:"90"
    },
    {
      text :"«&nbsp;L'Homme naît bon, c'est la société qui le corrompt. Il faut préserver cette bonté originelle pour vivre en harmonie et construire une communauté basée sur la confiance et le respect mutuel.&nbsp;»",  
      missingWords:["corrompt","harmonie", "bonté", "communauté", "respect"],  
      author :"Jean-Jacques Rousseau" ,
      work :"Du Contrat Social" ,
      publisher :"Flammarion" ,
      city :"Paris" ,
      year :"1992" ,
      page :"75"
   },
   {
      text :"«&nbsp;Le bonheur n'est pas une destination, mais une manière de voyager dans la vie. Il s'agit d'aborder chaque expérience avec sérénité et enthousiasme, en appréciant le chemin parcouru.&nbsp;»",  
      missingWords:["destination","enthousiasme", "voyager", "sérénité", "chemin"],  
      author :"Albert Schweitzer" ,
      work :"Essais sur la philosophie religieuse" ,
      publisher :"Flammarion" ,
      city :"Paris" ,
      year :"1934" ,
      page :"23"
   },
   {
     text :"«&nbsp;La vérité est fille de discussion, non pas fille de sympathie. Elle se construit par le dialogue entre les individus, à travers l'échange d'idées et la confrontation des points de vue.&nbsp;»",  
     missingWords:["sympathie","dialogue", "vérité", "échange", "confrontation"],  
     author :"Gaston Bachelard" ,
     work :"La formation de l'esprit scientifique" ,
     publisher :"Vrin" ,
     city :"Paris" ,
     year :"1938" ,
     page :"50"
   },
   {
     text :"«&nbsp;Tout homme a droit à la liberté d'opinion et d'expression, ce qui implique le droit de ne pas être censuré. Cette liberté est fondamentale pour le développement personnel et le progrès de la société.&nbsp;»",  
     missingWords:["censuré","expression", "liberté", "opinion", "progrès"],  
     author :"Droits de l'Homme" ,
     work :"Déclaration universelle des droits de l'homme" ,
     publisher :"ONU" ,
     city :"Paris" ,
     year :"1948" ,
     page :"Article 19"   
   },
   {
     text :"«&nbsp;La politique consiste à conquérir et conserver le pouvoir par tous les moyens possibles. Cela inclut parfois la manipulation des masses et l'utilisation stratégique de l'information pour maintenir son autorité.&nbsp;»",
     missingWords:["pouvoir","manipulation", "conquérir", "stratégique", "autorité"],
     author :"Machiavel" ,
     work :"Le Prince" ,
     publisher :"Flammarion" ,
     city :"Paris" ,
     year :"2014" ,
     page :"88"   
   }
]
