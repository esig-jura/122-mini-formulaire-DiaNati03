/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

// Récupération du formulaire
const formulaire = document.querySelector('form');
const txtMDP = document.querySelector('#password');
const txtMDPConfirm = document.querySelector('#confirmPassword');
const listeBackground = document.querySelector('#background');
const body =document.querySelector('body');
console.log(formulaire, txtMDP, txtMDPConfirm, listeBackground, body);

// Ecouter l'envoi du formulaire (=> c'est pour être quitte d'écrire function
formulaire.addEventListener('submit', (event) => {
//Stoppe l'envoi du formulaire
    event.preventDefault();
//Tableau des erreurs
    let erreurs = [];
// Récupérer la valeur du mdp et de la confirmation du mdp
    let mdp = txtMDP.value;
    let mdpConfirm = txtMDPConfirm;
//Tester si mdp > 3
    if(txtMDP.value.length < 3){
        erreurs.push('Le mot de passe doit contenir au moins 3 caractères !')
    }

//Tester si les mdp sont identiques
    if(mdp !== mdpConfirm) {
        alert('Les mots de passes sont différents !!')
    } else {
        alert('Compte créé avec succès !');
//Envoyer le formulaire
        formulaire.submit();
    }
//S'il y a des erreurs
    if(erreurs.length > 0) {
        let msg = '';

        //pour chaque erreur dans le tableau
        for (let e of erreurs){
            msg += '\n' + e;
        }
        alert(msg);
        //Stop la fonction
        return;
    }


});

// Ecouter le changement de valuer dans la iste déroulante
listeBackground.addEventListener('change', ()=> {
    //remplacer img de fond du body
    body.style.backgroundImage = 'url(./img/backgrounds/'+ listeBackground.value +')';
})