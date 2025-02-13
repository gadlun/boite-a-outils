let questions = [
    // question n°1  
    { question: "Qu'est-ce que la vérité ?", answers: ["Une opinion partagée", "Une certitude absolue", "Un consensus social", "Un fait observable"], correctAnswer: 1 },
    // question n°2  
    { question: "Peut-on vraiment connaître la réalité ?", answers: ["Oui, à travers les sens", "Non, c'est une illusion", "Oui, par la raison", "Non, c'est une construction mentale"], correctAnswer: 2 },
    // question n°3  
    { question: "La morale est-elle universelle ?", answers: ["Oui, elle est la même pour tous", "Non, elle dépend des cultures", "Oui, elle est basée sur la raison", "Non, elle est subjective"], correctAnswer: 1 },
    // question n°4  
    { question: "L'existence précède-t-elle l'essence ?", answers: ["Oui", "Non", "Cela dépend des circonstances", "Cela dépend de la philosophie de chacun"], correctAnswer: 0 },
    // question n°5  
    { question: "Qu'est-ce que le destin ?", answers: ["Un concept religieux", "Une conséquence de nos actes", "Une force supérieure", "Une illusion"], correctAnswer: 2 },
    // question n°6  
    { question: "Le libre arbitre existe-t-il vraiment ?", answers: ["Oui, nous avons des choix", "Non, tout est déterminé", "Oui, mais limité", "Non, c'est une illusion"], correctAnswer: 0 },
    // question n°7  
    { question: "La beauté est-elle objective ?", answers: ["Oui, tout le monde peut la ressentir", "Non, elle est subjective", "Oui, elle se retrouve dans la nature", "Non, elle dépend des cultures"], correctAnswer: 1 },
    // question n°8  
    { question: "Peut-on juger sans connaître ?", answers: ["Oui, par intuition", "Non, il faut toujours comprendre", "Oui, par expérience", "Non, cela mène à des préjugés"], correctAnswer: 3 },
    // question n°9  
    { question: "Qu'est-ce que la liberté ?", answers: ["Absence de contraintes", "Capacité d'agir selon sa volonté", "État d'esprit", "Danger de l'anarchie"], correctAnswer: 1 },
    // question n°10  
    { question: "La connaissance est-elle un pouvoir ?", answers: ["Oui, elle permet de contrôler", "Non, elle crée des responsabilités", "Oui, elle influence les autres", "Non, ce n'est qu'une illusion"], correctAnswer: 0 },
    // question n°11  
    { question: "La nature humaine est-elle bonne ?", answers: ["Oui, par défaut", "Non, elle est malveillante", "Cela dépend des circonstances", "Elle est neutre"], correctAnswer: 0 },
    // question n°12  
    { question: "Que signifie être authentique ?", answers: ["Être fidèle à soi-même", "Agir selon les normes sociales", "Être excentrique", "Éviter le conformisme"], correctAnswer: 0 },
    // question n°13  
    { question: "La souffrance a-t-elle un sens ?", answers: ["Oui, elle enseigne des leçons", "Non, elle est inutile", "Oui, elle est inévitable", "Non, elle cause du mal"], correctAnswer: 0 },
    // question n°14  
    { question: "La foi est-elle opposée à la raison ?", answers: ["Oui, ce sont deux voies différentes", "Non, elles se complètent", "Oui, la foi est irrationnelle", "Non, la foi peut être rationnelle"], correctAnswer: 1 },
    // question n°15  
    { question: "Peut-on être heureux sans être libre ?", answers: ["Oui, le bonheur est subjectif", "Non, la liberté est essentielle", "Oui, la soumission peut apporter du bonheur", "Non, la liberté est un droit"], correctAnswer: 0 },
    // question n°16  
    { question: "Qu'est-ce que la justice ?", answers: ["Équité entre les individus", "Application de lois", "Répartition des ressources", "Puni les fautes"], correctAnswer: 0 },
    // question n°17  la foi
    { question: "La science peut-elle expliquer tout ?", answers: ["Oui, tout est mesurable", "Non, il y a des mystères", "Oui, mais pas tout de suite", "Non, la science a des limites"], correctAnswer: 3 },
    // question n°18  
    { question: "Le bonheur est-il un but en soi ?", answers: ["Oui, c'est l'objectif de la vie", "Non, il est éphémère", "Oui, mais ce n'est pas l'unique but", "Non, il dépend des circonstances"], correctAnswer: 0 },
    // question n°19  
    { question: "La sagesse est-elle synonyme de connaissance ?", answers: ["Oui, elles vont de pair", "Non, la sagesse est plus profonde", "Oui, mais pas toujours", "Non, la connaissance peut être dangereuse"], correctAnswer: 1 },
    // question n°20  
    { question: "Peut-on croire en un monde meilleur ?", answers: ["Oui, c'est une motivation", "Non, c'est utopique", "Oui, mais il faut agir", "Non, rien ne change"], correctAnswer: 0 },
    
    // question n°21  
    { question: "L'homme est-il condamné à être libre ?", answers: ["Oui, c'est ce qui nous définit", "Non, la liberté est une charge", "Oui, mais cela entraîne des responsabilités", "Non, certains choisissent la servitude"], correctAnswer: 0 },
    // question n°22  
    { question: "La vérité est-elle relative ?", answers: ["Oui, elle varie selon les individus", "Non, elle est absolue", "Oui, elle dépend de la culture", "Non, elle est objective"], correctAnswer: 0 },
    // question n°23  
    { question: "Le passé influence-t-il nos choix ?", answers: ["Oui, nos expériences façonnent nos décisions", "Non, nous choisissons librement", "Oui, mais seulement à court terme", "Non, chaque moment est unique"], correctAnswer: 0 },
    // question n°24  
    { question: "L'économie peut-elle dicter nos valeurs ?", answers: ["Oui, elle influence nos comportements", "Non, les valeurs sont universelles", "Oui, mais ce n'est pas l'essentiel", "Non, la morale doit primer"], correctAnswer: 0 },
    // question n°25  
    { question: "La vérité peut-elle nuire ?", answers: ["Oui, parfois il vaut mieux mentir", "Non, la vérité est toujours bénéfique", "Oui, elle peut blesser", "Non, c'est la meilleure des solutions"], correctAnswer: 0 },
    // question n°26  
    { question: "Le bonheur est-il un état d'esprit ?", answers: ["Oui, il dépend de notre perception", "Non, c'est lié aux circonstances", "Oui, mais il est influencé par l'extérieur", "Non, il est inébranlable"], correctAnswer: 0 },
    // question n°27  
    { question: "Le désir est-il la source de tous les maux ?", answers: ["Oui, il crée de l'envie", "Non, il est nécessaire pour avancer", "Oui, il mène à des conflits", "Non, c'est l'absence de désir qui est problématique"], correctAnswer: 2 },
    // question n°28  
    { question: "Peut-on vivre sans valeurs ?", answers: ["Oui, mais c'est difficile", "Non, les valeurs guident nos actions", "Oui, chacun a ses propres valeurs", "Non, les valeurs sont innées"], correctAnswer: 1 },
    // question n°29  
    { question: "L'art a-t-il un rôle social ?", answers: ["Oui, il questionne et critique", "Non, c'est seulement subjectif", "Oui, il rapproche les gens", "Non, il est isolé du monde"], correctAnswer: 0 },
    // question n°30  
    { question: "La responsabilité individuelle existe-t-elle ?", answers: ["Oui, chaque action a des conséquences", "Non, c'est la société qui doit être responsable", "Oui, mais elle est souvent négligée", "Non, le destin guide nos choix"], correctAnswer: 0 },
    
    // question n°31  
    { question: "Le sourire est-il un acte politique ?", answers: ["Oui, c'est un symbole de résistance", "Non, c'est une expression individuelle", "Oui, il peut rassembler", "Non, il est éphémère"], correctAnswer: 0 },
    // question n°32  
    { question: "L'éducation doit-elle être unique pour tous ?", answers: ["Oui, pour l'égalité des chances", "Non, chacun a ses besoins", "Oui, pour la cohésion sociale", "Non, la diversité est enrichissante"], correctAnswer: 1 },
    // question n°33  
    { question: "La technologie nous éloigne-t-elle de la réalité ?", answers: ["Oui, elle crée des illusions", "Non, elle connecte", "Oui, mais cela dépend de l'usage", "Non, elle est essentielle à notre quotidien"], correctAnswer: 2 },
    // question n°34  
    { question: "La curiosité est-elle une vertu ?", answers: ["Oui, elle pousse à l'apprentissage", "Non, elle peut mener à des ennuis", "Oui, mais avec modération", "Non, elle peut être envahissante"], correctAnswer: 0 },
    // question n°35  
    { question: "L'humour détend-il les tensions ?", answers: ["Oui, il désamorce les conflits", "Non, il peut blesser", "Oui, mais parfois il est mal perçu", "Non, il est superficiel"], correctAnswer: 0 },
    // question n°36  
    { question: "Le bonheur des autres affecte-t-il notre bonheur ?", answers: ["Oui, le bonheur est contagieux", "Non, chacun trouve son bonheur", "Oui, mais parfois il crée de la jalousie", "Non, le bonheur est personnel"], correctAnswer: 0 },
    // question n°37  
    { question: "Les rêves ont-ils une signification ?", answers: ["Oui, ils reflètent nos désirs", "Non, ce ne sont que des coïncidences", "Oui, ils peuvent nous guider", "Non, ils sont aléatoires"], correctAnswer: 0 },
    // question n°38  
    { question: "Les émotions doivent-elles être réprimées ?", answers: ["Oui, elles rendent vulnérable", "Non, elles sont essentielles à la vie", "Oui, mais pas toutes les émotions", "Non, il faut les exprimer"], correctAnswer: 1 },
    // question n°39  
    { question: "Le changement est-il nécessaire ?", answers: ["Oui, c'est le seul constant", "Non, la stabilité est primordiale", "Oui, mais avec prudence", "Non, le changement est effrayant"], correctAnswer: 0 },
    // question n°40  
    { question: "La compassion est-elle une forme de faiblesse ?", answers: ["Oui, elle expose", "Non, elle est une force", "Oui, elle peut mener à des déceptions", "Non, elle unit les gens"], correctAnswer: 1 },
    
    // question n°41  
    { question: "La peur est-elle paralysante ?", answers: ["Oui, elle peut bloquer l'action", "Non, elle est nécessaire pour survivre", "Oui, mais elle peut être surmontée", "Non, elle est motivante"], correctAnswer: 0 },
    // question n°42  
    { question: "L'identité est-elle figée ?", answers: ["Oui, elle se construit dès l'enfance", "Non, elle évolue constamment", "Oui, mais avec des bases solides", "Non, elle est influencée par les autres"], correctAnswer: 1 },
    // question n°43  
    { question: "La solitude est-elle bénéfique ?", answers: ["Oui, elle permet la réflexion", "Non, elle est déprimante", "Oui, mais pas trop longtemps", "Non, elle est évitable"], correctAnswer: 0 },
    // question n°44  
    { question: "L'expérience est-elle meilleure que la théorie ?", answers: ["Oui, elle est concrète", "Non, la théorie est précieuse", "Oui, mais l'équilibre est nécessaire", "Non, la théorie éclaire l'expérience"], correctAnswer: 0 },
    // question n°45  
    { question: "La sagesse vient-elle avec l'âge ?", answers: ["Oui, l'expérience forge la sagesse", "Non, certains sont sages jeunes", "Oui, mais cela dépend des choix", "Non, chaque génération a sa sagesse"], correctAnswer: 0 },
    // question n°46  
    { question: "Le mal existe-t-il réellement ?", answers: ["Oui, c'est une réalité", "Non, c'est une construction sociale", "Oui, mais relativement", "Non, c'est une perception"], correctAnswer: 0 },
    // question n°47  
    { question: "Faut-il pardonner systématiquement ?", answers: ["Oui, c'est essentiel pour avancer", "Non, tout dépend de la faute", "Oui, mais pas sans conditions", "Non, certaines blessures sont irréparables"], correctAnswer: 1 },
    // question n°48  
    { question: "La foi peut-elle coexister avec le doute ?", answers: ["Oui, le doute est naturel", "Non, la foi nécessite la certitude", "Oui, le doute renforce la foi", "Non, ils s'opposent trop"], correctAnswer: 0 },
    // question n°49  
    { question: "La famille est-elle le socle de la société ?", answers: ["Oui, c'est la première institution", "Non, la société est plus vaste", "Oui, mais d'autres modèles existent", "Non, elle peut être dysfonctionnelle"], correctAnswer: 0 },
    // question n°50  
    { question: "Les gens changent-ils vraiment ?", answers: ["Oui, avec le temps", "Non, les traits de personnalité sont fixes", "Oui, mais ce n'est pas facile", "Non, tout est déterminé"], correctAnswer: 2 },

    // question n°51  
    { question: "Faut-il toujours dire la vérité ?", answers: ["Oui, c'est un principe", "Non, parfois mentir est mieux", "Oui, mais avec tact", "Non, cela peut nuire"], correctAnswer: 1 },
    // question n°52  
    { question: "La société peut-elle vivre sans moralité ?", answers: ["Oui, la loi suffit", "Non, la morale est fondamentale", "Oui, mais elle régresse", "Non, des normes sont nécessaires"], correctAnswer: 1 },
    // question n°53  
    { question: "La beauté peut-elle être mesurée ?", answers: ["Oui, par des critères", "Non, c'est subjectif", "Oui, mais c'est difficile", "Non, elle est indéfinie"], correctAnswer: 1 },
    // question n°54  
    { question: "Le pouvoir corrompt-il ?", answers: ["Oui, il change les gens", "Non, cela dépend des individus", "Oui, mais pas toujours", "Non, il peut rendre bon"], correctAnswer: 0 },
    // question n°55  
    { question: "Le temps guérit-il toutes les blessures ?", answers: ["Oui, il apaise", "Non, certaines restent", "Oui, mais il faut des actions", "Non, il est implacable"], correctAnswer: 1 },
    // question n°56  
    { question: "Les rituels ont-ils un sens ?", answers: ["Oui, ils créent des liens", "Non, ce sont des traditions", "Oui, ils apportent du réconfort", "Non, ils sont obsolètes"], correctAnswer: 0 },
    // question n°57  
    { question: "L'intuition est-elle fiable ?", answers: ["Oui, c'est un instinct", "Non, il faut des preuves", "Oui, mais à ne pas négliger", "Non, elle peut tromper"], correctAnswer: 0 },
    // question n°58  
    { question: "L'amour est-il éternel ?", answers: ["Oui, c'est un engagement", "Non, il évolue", "Oui, s'il est véritable", "Non, il peut s'éteindre"], correctAnswer: 1 },
    // question n°59  
    { question: "La liberté d'expression est-elle absolue ?", answers: ["Oui, c'est un droit fondamental", "Non, elle a des limites", "Oui, mais dans le respect", "Non, elle doit être responsable"], correctAnswer: 1 },
    // question n°60  
    { question: "La nature humaine est-elle égoïste ?", answers: ["Oui, c'est instinctif", "Non, elle peut être altruiste", "Oui, mais cela dépend de l'éducation", "Non, les gens sont naturellement bons"], correctAnswer: 2 },

    // question n°61  
    { question: "Les souvenirs sont-ils fiables ?", answers: ["Oui, ils sont notre passé", "Non, ils sont souvent altérés", "Oui, mais ils dépendent du vécu", "Non, la mémoire est sélective"], correctAnswer: 1 },
    // question n°62  
    { question: "Le travail est-il une valeur essentielle ?", answers: ["Oui, c'est un moyen de s'épanouir", "Non, il peut être aliénant", "Oui, mais équilibré", "Non, il est secondaire"], correctAnswer: 0 },
    // question n°63  
    { question: "La connaissance doit-elle être partagée ?", answers: ["Oui, c'est un droit", "Non, elle peut être dangereuse", "Oui, mais avec discernement", "Non, elle peut être manipulée"], correctAnswer: 0 },
    // question n°64  
    { question: "L'amitié est-elle inconditionnelle ?", answers: ["Oui, elle doit l'être", "Non, elle a des limites", "Oui, mais cela dépend des personnes", "Non, il faut aussi des attentes"], correctAnswer: 1 },
    // question n°65  
    { question: "Le pardon est-il un signe de faiblesse ?", answers: ["Oui, cela montre de la vulnérabilité", "Non, c'est une force", "Oui, mais c'est nécessaire", "Non, cela demande du courage"], correctAnswer: 1 },
    // question n°66  
    { question: "Le souvenir peut-il être un poids ?", answers: ["Oui, il peut entraver", "Non, il est précieux", "Oui, mais il peut renforcer", "Non, il est constructif"], correctAnswer: 0 },
    // question n°67  
    { question: "La solitude est-elle choisie ou subie ?", answers: ["Elle peut être les deux", "Non, elle est toujours subie", "Oui, seulement choisie", "Non, elle est rarement choisie"], correctAnswer: 0 },
    // question n°68  
    { question: "Les humains sont-ils fondamentalement bons ?", answers: ["Oui, ils sont altruistes", "Non, c'est une illusion", "Oui, mais le contexte change tout", "Non, la nature est égoïste"], correctAnswer: 2 },
    // question n°69  
    { question: "La peur peut-elle être un moteur ?", answers: ["Oui, elle pousse à agir", "Non, elle paralyse", "Oui, avec des limites", "Non, elle est seulement négative"], correctAnswer: 0 },
    // question n°70  
    { question: "Être heureux implique-t-il d'être égoïste ?", answers: ["Oui, il faut prendre soin de soi d'abord", "Non, le bonheur est partagé", "Oui, mais pas nécessairement", "Non, l'altruisme est plus gratifiant"], correctAnswer: 1 },

    // question n°71  
    { question: "Est-il vrai que les extrêmes se rencontrent ?", answers: ["Oui, on peut trouver un terrain d'entente", "Non, ils sont irrémédiables", "Oui, c'est une métaphore", "Non, chacun est campé sur ses opinions"], correctAnswer: 0 },
    // question n°72  
    { question: "Les principes devraient-ils primer sur l'émotion ?", answers: ["Oui, la raison guide", "Non, l'émotion est humaine", "Oui, mais il faut trouver un équilibre", "Non, c'est la base de la décision"], correctAnswer: 0 },
    // question n°73  
    { question: "La pauvreté est-elle une question de chance ?", answers: ["Oui, cela dépend de la naissance", "Non, c'est une construction sociale", "Oui, mais l'éducation y joue un rôle", "Non, tout le monde peut s'en sortir"], correctAnswer: 0 },
    // question n°74  
    { question: "La mort doit-elle être acceptée ?", answers: ["Oui, c'est inévitable", "Non, elle est à combattre", "Oui, cela soulage", "Non, il faut lutter pour vivre"], correctAnswer: 0 },
    // question n°75  
    { question: "L'ambition est-elle toujours positive ?", answers: ["Oui, elle pousse à avancer", "Non, elle peut détruire", "Oui, mais avec modération", "Non, elle doit être tempérée"], correctAnswer: 0 },
    // question n°76  
    { question: "Le choix est-il une illusion ?", answers: ["Oui, tout est déterminé", "Non, nous agissons librement", "Oui, notre environnement influence", "Non, nous sommes acteurs"], correctAnswer: 2 },
    // question n°77  
    { question: "Les souvenirs façonnent-ils notre identité ?", answers: ["Oui, ils sont notre histoire", "Non, nous sommes bien plus", "Oui, mais avec ses limites", "Non, l'identité est fluide"], correctAnswer: 0 },
    // question n°78  
    { question: "Les océans devraient-ils être protégés ?", answers: ["Oui, ils sont vitaux", "Non, ils sont naturels", "Oui, pour les générations futures", "Non, ce sont des ressources à exploiter"], correctAnswer: 0 },
    // question n°79  
    { question: "La confiance est-elle un risque ?", answers: ["Oui, elle peut être trahie", "Non, c'est une force", "Oui, mais elle est nécessaire", "Non, elle est inéluctable"], correctAnswer: 0 },
    // question n°80  
    { question: "Le bonheur est-il un luxe ?", answers: ["Oui, il ne vient pas sans effort", "Non, il peut être accessible à tous", "Oui, mais cela dépend des valeurs", "Non, il est une priorité"], correctAnswer: 1 },

    // question n°81  
    { question: "Le contrôle est-il utile dans une relation ?", answers: ["Oui, c'est protecteur", "Non, cela étouffe", "Oui, mais dans certaines limites", "Non, la liberté est primordiale"], correctAnswer: 1 },
    // question n°82  
    { question: "L'art doit-il être engagé ?", answers: ["Oui, il doit interpeler", "Non, il peut être libre", "Oui, mais cela dépend de l'artiste", "Non, chaque forme a sa place"], correctAnswer: 0 },
    // question n°83  
    { question: "La connaissance est-elle un acte de pouvoir ?", answers: ["Oui, elle permet d'agir", "Non, elle est neutre", "Oui, mais avec responsabilité", "Non, elle est accessoire"], correctAnswer: 0 },
    // question n°84  
    { question: "La vérité peut-elle être donnée ?", answers: ["Oui, par l'éducation", "Non, chacun la construit", "Oui, mais sous certaines conditions", "Non, elle est personnelle"], correctAnswer: 1 },
    // question n°85  
    { question: "La mémoire doit-elle être préservée ?", answers: ["Oui, pour apprendre", "Non, elle peut entraver", "Oui, mais pas seulement par la nostalgie", "Non, le passé doit être oublié"], correctAnswer: 0 },
    // question n°86  
    { question: "Le silence est-il assourdissant ?", answers: ["Oui, il peut être pesant", "Non, il est apaisant", "Oui, mais il peut aussi libérer", "Non, il est nécessaire"], correctAnswer: 0 },
    // question n°87  
    { question: "L'égalité est-elle réalisable ?", answers: ["Oui, avec des efforts", "Non, c'est un rêve", "Oui, mais au prix de sacrifices", "Non, cela ne dépend pas seulement des actions"], correctAnswer: 0 },
    // question n°88  
    { question: "La curiosité est-elle un défaut ?", answers: ["Oui, elle peut mener à des problèmes", "Non, elle est essentielle", "Oui, mais cela dépend des contextes", "Non, elle pousse à grandir"], correctAnswer: 1 },
    // question n°89  
    { question: "Le stress est-il toujours négatif ?", answers: ["Oui, il a des effets néfastes", "Non, il peut motiver", "Oui, mais avec modération", "Non, il est parfois bénéfique"], correctAnswer: 1 },
    // question n°90  
    { question: "L'engagement est-il synonyme de sacrifice ?", answers: ["Oui, il faut souvent renoncer", "Non, c'est un choix", "Oui, mais c'est positif", "Non, il peut aussi apporter des bénéfices"], correctAnswer: 0 },

    // question n°91  
    { question: "La société doit-elle valoriser l'individu ?", answers: ["Oui, chaque voix compte", "Non, c'est l'ensemble qui importe", "Oui, les talents doivent émerger", "Non, l'harmonie sociale est cruciale"], correctAnswer: 0 },
    // question n°92  
    { question: "L'échec est-il constructif ?", answers: ["Oui, il permet d'apprendre", "Non, c'est démoralisant", "Oui, mais cela dépend de l'attitude", "Non, il est à éviter"], correctAnswer: 0 },
    // question n°93  
    { question: "La nature humaine change-t-elle au fil du temps ?", answers: ["Oui, avec les expériences", "Non, elle est stable", "Oui, mais très lentement", "Non, elle est figée"], correctAnswer: 0 },
    // question n°94  
    { question: "La solidarité est-elle innée ?", answers: ["Oui, nous sommes fait pour aider", "Non, c'est une construction sociale", "Oui, mais elle peut disparaître", "Non, elle est conditionnée"], correctAnswer: 1 },
    // question n°95  
    { question: "Faut-il toujours chercher à être compris ?", answers: ["Oui, la communication est essentielle", "Non, c'est souvent inutile", "Oui, mais cela dépend des relations", "Non, il est parfois meilleur de se taire"], correctAnswer: 0 },
    // question n°96  
    { question: "L'abondance peut-elle être un fardeau ?", answers: ["Oui, elle crée des envies", "Non, c'est un bienfait", "Oui, elle apporte des responsabilités", "Non, elle enrichit les vies"], correctAnswer: 0 },
    // question n°97  
    { question: "La peur de l'inconnu est-elle naturelle ?", answers: ["Oui, elle protège", "Non, elle freine l'évolution", "Oui, mais certains l'embrassent", "Non, elle est à surmonter"], correctAnswer: 0 },
    // question n°98  
    { question: "Le désir peut-il être destructeur ?", answers: ["Oui, il peut mener à des conflits", "Non, il est essentiel à la vie", "Oui, mais il peut aussi motiver", "Non, il est qu'une émotion"], correctAnswer: 0 },
    // question n°99  
    { question: "L'engagement professionnel est-il essentiel ?", answers: ["Oui, il définit notre place", "Non, cela ne veut rien dire", "Oui, mais il doit être équilibré", "Non, d'autres priorités existent"], correctAnswer: 1 },
    // question n°100  
    { question: "La nature influence-t-elle notre bien-être ?", answers: ["Oui, elle est essentielle", "Non, c'est accessoire", "Oui, mais cela dépend de l'individu", "Non, la ville est bénéfique"], correctAnswer: 0 },

    // question n°101  
    { question: "Le jugement est-il inévitable ?", answers: ["Oui, c'est humain", "Non, il faut éviter de juger", "Oui, mais il doit être juste", "Non, il est subjectif"], correctAnswer: 0 },
    // question n°102  
    { question: "La technologie rend-elle la vie plus facile ?", answers: ["Oui, elle simplifie les tâches", "Non, elle complique tout", "Oui, mais pas toujours", "Non, elle crée des dépendances"], correctAnswer: 0 },
    // question n°103  
    { question: "Le bonheur peut-il être contagieux ?", answers: ["Oui, il se transmet", "Non, c'est une émotion personnelle", "Oui, mais parfois il suscite de la jalousie", "Non, il est unique"], correctAnswer: 0 },
    // question n°104  
    { question: "L'égalité des chances est-elle atteignable ?", answers: ["Oui, avec des réformes", "Non, c'est une utopie", "Oui, mais cela prend du temps", "Non, chaque individu est unique"], correctAnswer: 0 },
    // question n°105  
    { question: "L'individualisme est-il bénéfique à la société ?", answers: ["Oui, il libère les idées", "Non, il crée des inégalités", "Oui, mais avec des limites", "Non, l'interaction est essentielle"], correctAnswer: 0 },
    // question n°106  
    { question: "La bonté est-elle innée ?", answers: ["Oui, c'est un aspect humain", "Non, elle est cultivée", "Oui, elle dépend de l'environnement", "Non, elle est conditionnée"], correctAnswer: 1 },
    // question n°107  
    { question: "Les règles sont-elles nécessaires ?", answers: ["Oui, elles garantissent l'ordre", "Non, elles limitent la liberté", "Oui, mais avec des exceptions", "Non, l'instinct doit primer"], correctAnswer: 0 },
    // question n°108  
    { question: "La passion est-elle créatrice ?", answers: ["Oui, elle inspire", "Non, elle peut distraire", "Oui, mais c'est éphémère", "Non, elle est volatile"], correctAnswer: 0 },
    // question n°109  
    { question: "L'avenir peut-il être prévu ?", answers: ["Oui, avec des analyses", "Non, c'est imprévisible", "Oui, mais c'est dangereux", "Non, tout est incertain"], correctAnswer: 1 },
    // question n°110  
    { question: "La curiosité est-elle à l'origine des découvertes ?", answers: ["Oui, elle pousse à explorer", "Non, c'est la nécessité", "Oui, mais aussi la compétence", "Non, il faut du risque"], correctAnswer: 0 },

    // question n°111  
    { question: "L'être humain est-il naturellement grégaire ?", answers: ["Oui, il cherche la compagnie", "Non, il peut être solitaire", "Oui, mais cela varie", "Non, c'est une construction"], correctAnswer: 0 },
    // question n°112  
    { question: "La pensée critique est-elle enseignable ?", answers: ["Oui, cela doit être le but", "Non, elle est innée", "Oui, mais difficilement", "Non, elle dépend de l'expérience"], correctAnswer: 0 },
    // question n°113  
    { question: "Le bonheur est-il conditionné par les attentes ?", answers: ["Oui, plus on attend, plus on déçoit", "Non, il doit être spontané", "Oui, mais il faut être réaliste", "Non, l'attente est essentielle pour progresser"], correctAnswer: 0 },
    // question n°114  
    { question: "Le réconfort peut-il payer pour la souffrance ?", answers: ["Oui, il apaise", "Non, rien ne remplace", "Oui, parfois il permet de soulager", "Non, le temps fait le reste"], correctAnswer: 0 },
    // question n°115  
    { question: "L'éducation devrait-elle être universelle ?", answers: ["Oui, c'est un droit", "Non, chacun doit trouver son chemin", "Oui, mais cela dépend du contexte", "Non, la diversité est essentielle"], correctAnswer: 0 },
    // question n°116  
    { question: "L'honnêteté est-elle toujours la meilleure politique ?", answers: ["Oui, elle construit la confiance", "Non, parfois le mensonge est nécessaire", "Oui, mais pas à tout prix", "Non, c'est parfois un handicap"], correctAnswer: 0 },
    // question n°117  
    { question: "Le pessimisme est-il un choix ?", answers: ["Oui, c'est une perspective", "Non, c'est souvent dû aux circonstances", "Oui, mais il devrait être évité", "Non, certains voient le monde sous un jour obscur"], correctAnswer: 0 },
    // question n°118  
    { question: "La solitude est-elle une force ou une faiblesse ?", answers: ["Une force, elle permet d'apprendre à se connaître", "Une faiblesse, elle peut mener à l'isolement", "Cela dépend de l'individu", "Les deux, selon le contexte"], correctAnswer: 0 },
    // question n°119  
    { question: "La tolérance est-elle une vertu ?", answers: ["Oui, elle est nécessaire à la coexistence", "Non, c'est simplement l'absence de jugement", "Oui, mais elle a ses limites", "Non, elle entraîne parfois la faiblesse"], correctAnswer: 0 },
    // question n°120  
    { question: "La sagesse vient-elle d'une accumulation d'expériences ?", answers: ["Oui, on apprend de chaque expérience", "Non, l'expérience seule ne suffit pas", "Oui, mais aussi du partage", "Non, elle peut venir de la théorie"], correctAnswer: 0 },

    // question n°121  
    { question: "La technologie est-elle un progrès ?", answers: ["Oui, elle améliore la vie", "Non, elle crée des dépendances", "Oui, mais pas sans dangers", "Non, elle a des mauvais côtés"], correctAnswer: 0 },
    // question n°122  
    { question: "Le développement personnel est-il nécessaire ?", answers: ["Oui, pour s'épanouir", "Non, chacun évolue à son rythme", "Oui, mais cela peut devenir marchand", "Non, il faut se concentrer sur l'instant"], correctAnswer: 0 },
    // question n°123  
    { question: "Un bon leader doit-il être aimé ?", answers: ["Oui, cela facilite la communication", "Non, c'est le respect qui compte", "Oui, mais l'autorité prime", "Non, il doit être juste"], correctAnswer: 1 },
    // question n°124  
    { question: "La vie a-t-elle un sens ?", answers: ["Oui, cela dépend des croyances", "Non, c'est une question sans réponse", "Oui, à travers les expériences", "Non, chaque personne trouve son propre sens"], correctAnswer: 3 },
    // question n°125  
    { question: "Peut-on vraiment changer le monde ?", answers: ["Oui, avec des actions concrètes", "Non, tout est déterminé", "Oui, mais cela demande du temps", "Non, c'est utopique"], correctAnswer: 0 },
    // question n°126  
    { question: "La société est-elle responsable de nos échecs ?", answers: ["Oui, elle impose des normes", "Non, c'est notre choix", "Oui, mais il faut aussi se prendre en main", "Non, chacun est maître de son destin"], correctAnswer: 1 },
    // question n°127  
    { question: "Le bonheur des autres peut-il m'apporter du bonheur ?", answers: ["Oui, cela peut favoriser la joie", "Non, c'est éphémère", "Oui, mais c'est dépendant", "Non, il doit être intérieur"], correctAnswer: 0 },
    // question n°128  
    { question: "La nature est-elle sacralisée par l'homme ?", answers: ["Oui, elle est précieuse", "Non, elle est exploitée", "Oui, mais cela dépend des cultures", "Non, elle est souvent négligée"], correctAnswer: 0 },
    // question n°129  
    { question: "La richesse peut-elle acheter le bonheur ?", answers: ["Oui, elle offre des opportunités", "Non, le bonheur est intérieur", "Oui, mais cela dépend des valeurs", "Non, c'est illusoire"], correctAnswer: 1 },
    // question n°130  
    { question: "La critique doit-elle être constructive ?", answers: ["Oui, sinon elle est nuisible", "Non, la liberté d'expression prime", "Oui, elle doit aider à progresser", "Non, elle peut être parfois brutale"], correctAnswer: 0 },
    // question n°131  
    { question: "Les rêves sont-ils révélateurs de notre inconscient ?", answers: ["Oui, ils montrent nos désirs", "Non, ce sont des images aléatoires", "Oui, mais pas toujours", "Non, ils sont fictifs"], correctAnswer: 0 },
    // question n°132  
    { question: "La connaissance est-elle un but en soi ?", answers: ["Oui, pour comprendre le monde", "Non, elle doit servir à quelque chose", "Oui, mais relative", "Non, l'action est prioritaire"], correctAnswer: 1 },
    // question n°133  
    { question: "Le pardon doit-il être offert ou demandé ?", answers: ["Oui, cela peut être les deux", "Non, il faut toujours le demander", "Oui, mais il est plus puissant s'il est offert", "Non, parfois il est unilatéral"], correctAnswer: 0 },
    // question n°134  
    { question: "Le temps est-il un bien précieux ?", answers: ["Oui, il ne revient jamais", "Non, il est inépuisable", "Oui, mais il peut être mal utilisé", "Non, ce n'est qu'une illusion"], correctAnswer: 0 },
    // question n°135  
    { question: "La perfection est-elle attainable ?", answers: ["Oui, avec des efforts", "Non, elle est conceptuelle", "Oui, par la formation", "Non, chaque individu est imparfait"], correctAnswer: 1 },
    // question n°136  
    { question: "L'amitié peut-elle survivre à des conflits ?", answers: ["Oui, si les deux parties le désirent", "Non, elle est fragilisée", "Oui, mais cela demande du travail", "Non, il est difficile de rebâtir"], correctAnswer: 0 },
    // question n°137  
    { question: "L'indifférence est-elle un choix ?", answers: ["Oui, on choisit de ne pas s'impliquer", "Non, c'est une réaction face à la douleur", "Oui, mais parfois c'est protecteur", "Non, elle peut être imposée"], correctAnswer: 0 },
    // question n°138  
    { question: "La souffrance est-elle nécessaire pour grandir ?", answers: ["Oui, elle forge le caractère", "Non, on peut apprendre autrement", "Oui, mais pas toujours", "Non, le bonheur est aussi formateur"], correctAnswer: 0 },
    // question n°139  
    { question: "La route vers le succès est-elle parsemée d'échecs ?", answers: ["Oui, chaque échec est une leçon", "Non, on peut réussir du premier coup", "Oui, mais la persévérance est clé", "Non, le succès est aléatoire"], correctAnswer: 0 },
    // question n°140  
    { question: "La santé mentale est-elle aussi importante que la santé physique ?", answers: ["Oui, les deux sont liées", "Non, la santé physique prime", "Oui, mais souvent négligée", "Non, elle est secondaire"], correctAnswer: 0 },
    // question n°141  
    { question: "La frontière entre bon et mauvais est-elle floue ?", answers: ["Oui, elle dépend des individus", "Non, il y a des principes universels", "Oui, mais l'éducation y joue un rôle", "Non, cela suit des règles sociales"], correctAnswer: 0 },
    // question n°142  
    { question: "Peut-on vraiment comprendre autrui ?", answers: ["Oui, avec de l'empathie", "Non, chacun est unique", "Oui, mais ce n'est pas toujours nécessaire", "Non, nous vivons nos propres expériences"], correctAnswer: 0 },
    // question n°143  
    { question: "La résilience est-elle innée ou acquise ?", answers: ["Oui, cela dépend de l'individu", "Non, mais elle peut être développée", "Oui, mais avec l'environnement", "Non, elle est souvent éphémère"], correctAnswer: 0 },
    // question n°144  
    { question: "Les actions parlent-elles plus fort que les mots ?", answers: ["Oui, ce sont les actes qui comptent", "Non, les mots ont du poids", "Oui, mais cela dépend du contexte", "Non, les intentions doivent être claires"], correctAnswer: 0 },
    // question n°145  
    { question: "Le bonheur est-il un objectif de vie pour tous ?", answers: ["Oui, c'est ce que tout le monde veut", "Non, certaines personnes cherchent d'autres choses", "Oui, mais cela varie selon les cultures", "Non, la vie a beaucoup d'autres dimensions"], correctAnswer: 0 },
    // question n°146  
    { question: "Les échecs nous définissent-ils ?", answers: ["Oui, ils montrèrent notre caractère", "Non, ce n'est qu'une partie de la vie", "Oui, mais cela dépend de la perspective", "Non, l'identité est plus large"], correctAnswer: 0 },
    // question n°147  
    { question: "La paix est-elle un état naturel ?", answers: ["Oui, c'est le but de l'humanité", "Non, elle doit être maintenue", "Oui, mais doit être cultivée", "Non, les conflits sont inévitables"], correctAnswer: 0 },
    // question n°148  
    { question: "Le jugement est-il inévitable dans les interactions humaines ?", answers: ["Oui, c'est une réaction humaine", "Non, il peut y avoir compréhension", "Oui, mais cela dépend des expériences", "Non, la neutralité est possible"], correctAnswer: 0 },
    // question n°149  
    { question: "La paix intérieure est-elle synonyme de bonheur ?", answers: ["Oui, elle en est la source", "Non, le bonheur peut venir de l'extérieur", "Oui, mais elle dépend de la situation", "Non, ce sont deux choses séparées"], correctAnswer: 0 },
    // question n°150  
    { question: "Est-ce que le changement est une partie inévitable de la vie ?", answers: ["Oui, tout est en mouvement", "Non, certaines choses restent constantes", "Oui, mais certaines personnes résistent", "Non, il doit être minimisé"], correctAnswer: 0 }
];
