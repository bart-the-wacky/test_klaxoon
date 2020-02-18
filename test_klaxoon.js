import { Selector } from 'testcafe';

fixture `Test Automatisation Klaxoon`
	.page `https://test.klaxoon.io/join/NQKWVK`;
	
test('Test Automatisation Klaxoon Rendu', async t => {
    // Test code
	const resultat = Selector('.likable-list-item.i');
	const pseudo = 'bart_rendu_klaxoon_1';
	await t
		//première étape: saisir un peudo qui n'a pas déjà été saisi et cliquer sur le bouton "rejoindre"
		.typeText("#nickname", pseudo)
		.takeScreenshot()
		.click(Selector('.o-button').withText('rejoindre'))
		//deuxième étape: ouvrir le menu d'activités via le bouton "+", et cliquer sur l'onglet "Storms" afin d'ouvrir la Storm "Un mot pour l'année écoulée?"
		.takeScreenshot()
		.click(Selector('#pmp-speakup-btn'))
		.click(Selector('.ma1').withText('Storms'))
		//troisième étape: saisir chaque terme puis appuyer sur le bouton "envoyer", ce qui réinitialise la zone de saisie
		.takeScreenshot()
		.typeText(".input-reset", 'Étoiles')
		.click(Selector('.submit').withText('envoyer'))
		.typeText(".input-reset", 'Année')
		.click(Selector('.submit').withText('envoyer'))
		.typeText(".input-reset", 'Surprise')
		.click(Selector('.submit').withText('envoyer'))
		//quatrième étape: cliquer sur l'icône en forme de liste afin d'ouvrir la liste des mots envoyés jusqu'à présent, et vérifier la présence des mots qui viennent d'être saisis
		//(les mots saisis par l'utilisateur apparaissent en italique)
		.click(Selector('.f-small').withText('idées'))
		.takeScreenshot()
		.expect(resultat.nth(0).textContent).contains('Étoiles', 'Première vérification sur le terme étoiles')
		.expect(resultat.nth(1).textContent).contains('Année', 'Deuxième vérification sur le terme années')
		.expect(resultat.nth(2).textContent).contains('Surprise', 'Troisième vérification sur le terme surprise')
		//cinquième et dernière étape: fermeture de l'activité et déconnexion
		.click('.close-bg')
		.click(Selector('#pmp-speakup-btn'))
		.click(Selector('#burgatar'))
		.click(Selector('.db').withText('Déconnexion'))
		.click(Selector('.br2').withText('oui'));
});
