//fonction pour afficher une pop-up de bienvenue explicative sur la structure des pages
let message_bienvenue = "Bonjour et bienvenue sur mon site !\n\nToutes les pages sont construites sur le même model, avec un <head> et un <body>. Dans le body se trouve un <aside> pour la navbar, et un <div> principal où sont placés le <main> avec le corps de la page (seule partie qui change radicalement) et un <footer>.\n\nBonne visite \ud83d\ude1c !! \n\n\nPS: un easter eggs est caché dans les pages"
function affiche_message() {
	alert(message_bienvenue);
	console.log("l'utilisateur a regardé la structure du site");
}

//fonction caché pour gratter un 20
document.getElementById('logo_ordinateur').addEventListener("dblclick",affiche_easter_eggs);
function affiche_easter_eggs() {
	console.log("l'utilisateur a trouvé l'easter eggs !!")
	console.log("en attente de la note que va me mettre l'utilisateur...");
	//repète tant que l'utilisateur n'a pas validé 20
	while (prompt("Bravo ! vous avez trouvé l'easter eggs !!\n\nBon tant que vous êtes là... Quelle note allez-vous me mettre ?") != 20) {
	}
	console.log("l'utilisateur a rentré la note 20/20");
	alert("\ud83d\ude0e PARFAIT, c'est noté ! \ud83d\ude0e");
}