// fonctions pour modifier l'image et sa légende

function moderniser() {
	if(document.getElementById('légende').innerHTML == "un ordinateur hight-teck :") {
		console.log("l'utilisateur a laissé l'image moderne");
	} else {
		console.log("l'utilisateur a modernisé l'image");
	}
	// modification de l'image et de la légende
	document.getElementById('légende').innerHTML = "un ordinateur hight-teck :";
	document.getElementById('image_ordinateur').src = "../media/un_ordinateur_hight_teck.jpg";
}

function rendre_obsolète() {
	if(document.getElementById('légende').innerHTML == "l'ENIAC :") {
		console.log("l'utilisateur a laissé l'image obsolète");
	} else {
		console.log("l'utilisateur a rendu obsolète l'image");
	}
	// modification de l'image et de la légende
	document.getElementById('légende').innerHTML = "l'ENIAC :";
	document.getElementById('image_ordinateur').src = "../media/l'ENIAC.jpg";
}


////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////


// fonctions du quizz de convertions

function soumettre() {
	console.log("Résultats de l'utilisateur :");
	//defini les bonnes réponses
	let reponses = {"conver1":10101, "conver2":11010101, "conver3":19, "conver4":255};
	//change le style de la case en fonction de la réponse
	for (let i = 1; i <= 4; i++) {
		let zone = document.getElementById("conver"+i);
		if (zone.value == reponses["conver"+i]) {
			zone.style.background='green';
			console.log("- question " + i + " : bonne réponse");
		} else if (zone.value == '') {
			zone.style.background='white';
			console.log("- question " + i + " : champ vide");
		} else {
			zone.style.background='red';
			console.log("- question " + i + " : mauvaise réponse");
		}
		zone.style.color='white';
	}
}

function effacer() {
	//detection des cases à effacer
	let selection = document.getElementById('selection');
	let a_effacer = selection.options[selection.selectedIndex].text.charAt(3);
	//pour remettre la case dans son état d'origine
	function effacer_zone(zone) {
		zone.value='';
		zone.style.background='white';
		zone.style.color='blue';
	}
	if (a_effacer == 't') {
		for (let i = 1; i <= 4; i++) {
			effacer_zone(document.getElementById('conver'+i));
		}
		console.log("l'utilisateur a effacé toutes les réponses");
	} else {
		effacer_zone(document.getElementById('conver'+a_effacer));
		console.log("l'utilisateur a effacé la réponse " + a_effacer);
	}
}


////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////


// fonctions du convertisseur

function decimal_vers_binaire() {
	document.getElementById('conver_bi').value = (document.getElementById('conver_deci').value-0).toString(2);
}

function binaire_vers_decimal() {
	document.getElementById('conver_deci').value = parseInt(document.getElementById('conver_bi').value,2);
}