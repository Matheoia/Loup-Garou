var case_form = document.getElementById('nb_joueur');
var submit = document.getElementById('submit');
var joueurs = document.getElementById('joueurs');

case_form.addEventListener('click', function(e){
    sessionStorage.setItem('nb_joueur', document.getElementById('nb_joueur').value);
    noms.innerHTML = '';
    for (var i = 1; i <= sessionStorage.getItem('nb_joueur'); i++) {
        noms.innerHTML += '<p>Joueur.se ' + i + ' <input type="text" name="prenom' + i + '" id = "joueur' + i + '"></p>';
    }
})

submit.addEventListener('mouseover', function(e){
    for (var i = 1; i <= sessionStorage.getItem('nb_joueur'); i++) {
        sessionStorage.setItem('joueur' + i, document.getElementById('joueur' + i).value)
    }
})