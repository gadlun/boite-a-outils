function autocomp(myele) {
	myele.style.display='';
	myele.setAttribute('autocomplete', 'off');
	myele.setAttribute('onfocus', 'document.getElementById("auto_titre").style.display="";');
	myele.setAttribute('onblur', 'setTimeout(function(){document.getElementById("auto_titre").style.display="none";},200);');
	
	sp3=document.getElementById('auto_titre');
	
	sp3.setAttribute('style', 'min-width:'+myele.offsetWidth+'px;margin-top:'+myele.offsetHeight+'px;margin-left:-'+myele.offsetWidth+'px;position:absolute;border:1px solid grey;z-index:9999;text-align:left;background:white;max-height:130px;overflow-y:auto;overflow-x: hidden;');
	
	var outhtml='';
	out=ordered_match_list(myele.value,listetitres);
	for (i in out) {
		outhtml+='<span onclick="document.getElementById(\''+myele.id+'\').value=\''+out[i][1]+'\';">'+out[i][1]+'</span><br>';
	}
	sp3.innerHTML=outhtml;
}


// fonction qui affiche la liste "list" trié par pertinance de "search" 
// search = le /les mots à chercher dans la phrase
// list = tableau de phrases dans lesquels chercher
// tableau de retour trié par meilleur score
function ordered_match_list(search,list) {
	var maxscore=0;
	var out=[];
	for (i in list) {
		var list_ele=list[i];
		score=kmatch2(search, list_ele);
		out.push([score,list_ele]);
		maxscore=(score>maxscore)?score:maxscore;
	}
	out.sort(function(a, b) {
		if (a[0] === b[0]) {	return 0;	}
		else {	return (a[0] < b[0]) ? -1 : 1;	}
	});
	out.reverse();
	
	//on limite la sortie
	var out_limited=[];
	maxresult=15;
	if(search.length==0 || search.length==1) maxresult=0;
	for(i in out) {
		if(maxresult && out[i][0]/maxscore > 0.5) {
			--maxresult;
			out_limited.push(out[i]);
		}
	}
	
	return out_limited;
}


// calcul le score d'un terme calculé par le nombre de sous-chaines de s1
// se retrouvant dans s2 majoré par la taille de la sous-chaine
function kmatch2(s1, s2) {
	s1=s1.toLowerCase();
	s2=s2.toLowerCase();
    var l1=s1.length;
    var l2=s2.length;
	var found=0;
	var score=0;
	for(i=0;i<l2;++i) {
		found=0;
		for(j=0;j<l1;++j) {
			if(s1.charAt(j) == s2.charAt(i+j)) {
				found+=found?found*2:1;
				score+=found-1;
			}
		}
	}
	return score;
}


listetitres=['Cinq semaines en ballon',
'Voyage au centre de la Terre',
'Le Comte de Chanteleine',
'De la Terre à la Lune',
'Les Aventures du capitaine Hatteras',
'Les Enfants du capitaine Grant',
'Vingt mille lieues sous les mers',
'Autour de la Lune',
'Une ville flottante',
'Les Forceurs de blocus',
'Une fantaisie du docteur Ox',
'Aventures de trois Russes et de trois Anglais dans l\'Afrique australe',
'Le Tour du monde en quatre-vingts jours',
'Le Pays des fourrures',
'L\'Île mystérieuse',
'Le Chancellor',
'Michel Strogoff',
'Hector Servadac',
'Les Indes noires',
'Un capitaine de quinze ans',
'Les Cinq Cents Millions de la Bégum',
'Les Tribulations d\'un Chinois en Chine',
'La Maison à vapeur',
'Dix heures en chasse',
'La Jangada',
'L\'École des Robinsons',
'Le Rayon vert',
'Kéraban-le-Têtu',
'L\'Étoile du sud',
'L\'Archipel en feu',
'Frritt-Flacc',
'Mathias Sandorf',
'L\'Épave du Cynthia',
'Robur le Conquérant',
'Un billet de loterie',
'Nord contre Sud',
'Le Chemin de France',
'Gil Braltar',
'Deux ans de vacances',
'Famille-Sans-Nom',
'Sans dessus dessous',
'César Cascabel',
'Mistress Branican',
'Le Château des Carpathes',
'Claudius Bombarnac',
'P\'tit-Bonhomme',
'Mirifiques Aventures de maître Antifer',
'L\'Île à hélice',
'Face au drapeau',
'Clovis Dardentor',
'Le Sphinx des glaces',
'Le Superbe Orénoque',
'Le Volcan d\'or',
'Le Testament d\'un excentrique',
'Seconde patrie',
'Le Village aérien',
'Les Histoires de Jean-Marie Cabidoulin',
'Les Frères Kip',
'Bourses de voyage',
'Un drame en Livonie',
'Maître du monde',
'L\'Invasion de la mer'];