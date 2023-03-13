document.addEventListener("DOMContentLoaded", function() {
    var joueurs = document.getElementsByClassName('joueur');
    var elimination = document.getElementById('elimination');

    //VOTE LE JOUR
    var labelElim = document.getElementById('label_elimin');
    const annuleElim = document.getElementById('annule_elimin');
    const confirmElim = document.getElementById('confirm_elimin');

    //REVELATION LE JOUR
    var revelation = document.getElementById('revelation');
    var joueurMortNuit = document.getElementById('joueurMortNuit');
    var roleMortNuit = document.getElementById('roleMortNuit');

    //SCENARIO
    const btnSuite = document.getElementById('suite');
    var txtScenario = document.getElementById('txtScenario');
    var compteur = 1; 

    //SORCIERE
    var revelationSorciere = document.getElementById('revelationSorciere');
    var joueurMortSorciere = document.getElementById('joueurMortSorciere');
    var joueurSauveSorciere = document.getElementById('joueurSauveSorciere')
    var joueurTueSorciere = document.getElementById('joueurTueSorciere');
    var compteurPotionVie = 0;
    var compteurPotionMort = 0;

    //SALVATEUR 
    var joueurGardeSalvateur = document.getElementById('joueurGardeSalvateur');

    //CUPIDON
    var couple = [];

    //TABLEAU DES VIVANTS 
    var tableauJoueurs = [
      { id: "j1", vivant: true },
      { id: "j2", vivant: true },
      { id: "j3", vivant: true },
      { id: "j4", vivant: true },
      { id: "j5", vivant: true },
      { id: "j6", vivant: true },
      { id: "j7", vivant: true },
      { id: "j8", vivant: true }
    ];
    
    /*
    var listRoles = [];   
    fetch('../php/cartes.php') 
    .then(r => r.json())
    .then(r => {
      r.forEach(element => {
        for (let i = 0; i < tableauJoueurs.length; i++) {
          if(tableauJoueurs[i].id == element.id) {
            tableauJoueurs[i].role = element['role'];
            listRoles.push(element['role']);
          }
        }
      })
    });*/

    btnSuite.addEventListener('click', e=> {
      //console.log(tableauJoueurs);
      defileScenario(compteur);
      if(compteur <=5) {
        compteur +=1;
      } else {
        compteur = 2;
      }
    });
    
    function defileScenario(compteur) {

      fetch('../php/scenario.php')
      .then(r => r.json())
      .then(r => {
    
        r.forEach(element => {
          if(compteur == element.id) {
            txtScenario.innerHTML = element['role'];

            //CUPIDON
            if(txtScenario.innerHTML == 'Cupidon') {
              for (let i = 0; i < joueurs.length; i++) {
                joueurs[i].addEventListener('click', nuitCupidon);
              }
            } else {
              for (let i = 0; i < joueurs.length; i++) {
                joueurs[i].removeEventListener('click', nuitCupidon);
              }
            }

            //SALVATEUR
            if(txtScenario.innerHTML == 'Salvateur') {
              for (let i = 0; i < joueurs.length; i++) {
                joueurs[i].addEventListener('click', nuitSalvateur);
              }
            } else {
              for (let i = 0; i < joueurs.length; i++) {
                joueurs[i].removeEventListener('click', nuitSalvateur);
              }
            }

            //VOYANTE
            if(txtScenario.innerHTML == 'Voyante') {
              for (let i = 0; i < joueurs.length; i++) {
                joueurs[i].addEventListener('click', nuitVoyante);
              }
            } else {
              for (let i = 0; i < joueurs.length; i++) {
                joueurs[i].removeEventListener('click', nuitVoyante);
              }
            }

            //LGS
            if(txtScenario.innerHTML == 'Loup-Garou') {
              for (let i = 0; i < tableauJoueurs.length; i++) {
                if(tableauJoueurs[i].vivant) {
                  joueurs[i].querySelector('.carte_dos').src = '../img/dos.png';
                  joueurs[i].addEventListener('click', nuitLoups);
                }
              }
            } else {
              for (let i = 0; i < joueurs.length; i++) {
                joueurs[i].removeEventListener('click', nuitLoups);
              }
            }


            //SORCIERE
            if(txtScenario.innerHTML == 'Sorciere') {
              revelationSorciere.style.visibility = "visible";
              for (let i = 0; i < joueurs.length; i++) {
                joueurs[i].addEventListener('click', nuitSorciere);
              }
            } else {
              for (let i = 0; i < joueurs.length; i++) {
                joueurs[i].removeEventListener('click', nuitSorciere);
              }
            }

             
            //VOTE DU JOUR
            if(txtScenario.innerHTML == 'Vote du jour') {
              //revelation.style.visibility = "visible";
              revelationSorciere.style.visibility = "hidden";
              console.log(couple);

              fetch('../php/cartes.php')
              .then(r => r.json())
              .then(r => {
                for (let i = 0; i < tableauJoueurs.length; i++) {
                  if(!tableauJoueurs[i].vivant) {
                    joueurs[i].style.opacity = "0.5";
                    joueurs[i].querySelector('.carte_dos').src = "../img/" + r[i]['role'] + ".png";
                  }
                }
              })
              for (let i = 0; i < joueurs.length; i++) {
                joueurs[i].addEventListener('click', VoteLeJour);
              }
            } else {
              revelation.style.visibility = "hidden";
              for (let i = 0; i < joueurs.length; i++) {
                joueurs[i].removeEventListener('click', VoteLeJour);
              }
            }
          }
        })
    })
    }

    function nuitCupidon() {
      joueurSelectionne = this;
      couple.push(joueurSelectionne);
    }

    function nuitSalvateur() {
      joueurSelectionne = this;
      joueurGardeSalvateur.innerHTML = joueurSelectionne.querySelector('.nomJoueur').textContent;
    }

    function nuitSorciere() {

      joueurSelectionne = this;

      if(compteurPotionVie < 1) {
        if(joueurSelectionne.querySelector('.nomJoueur').textContent == joueurMortSorciere.innerHTML) {
          console.log("sorciere sauve");
          for (let i = 0; i < joueurs.length; i++) {
            if(joueurSelectionne.id == tableauJoueurs[i].id) {
              tableauJoueurs[i].vivant = true;
            }
          }
          joueurSauveSorciere.innerHTML = joueurMortSorciere.innerHTML;
          joueurMortNuit.innerHTML = "Personne";
          roleMortNuit.innerHTML = "...";
          compteurPotionVie += 1;
        }
      }

      if(compteurPotionMort < 1) {
        if(joueurSauveSorciere.innerHTML != joueurSelectionne.querySelector('.nomJoueur').textContent) {
          console.log("sorciere tue");
          joueurTueSorciere.innerHTML = joueurSelectionne.querySelector('.nomJoueur').textContent;
          for (let i = 0; i < tableauJoueurs.length; i++) {
            if(joueurSelectionne.id == tableauJoueurs[i].id) {
              tableauJoueurs[i].vivant = false;
            }
          }
          compteurPotionMort += 1;
        } else {console.log('uniquement cliquer pour sauver')}
      }
    }

    function  nuitVoyante() {

      joueurSelectionne = this;
      fetch('../php/cartes.php')
      .then(r => r.json())
      .then(r => {
        r.forEach(element => {
          if(element['nom'] == joueurSelectionne.querySelector('.nomJoueur').textContent) {
            joueurSelectionne.querySelector('.carte_dos').src = '../img/' + element['role'] + '.png';
          }
        })
      })
    };

    function nuitLoups() {
      joueurSelectionne = this;
      fetch('../php/cartes.php')
      .then(r => r.json())
      .then(r => {

        r.forEach(element => {
          if(element['nom'] == joueurSelectionne.querySelector('.nomJoueur').textContent) {
            if(element['nom'] != joueurGardeSalvateur.innerHTML) {
              console.log('non');
              for (let i = 0; i < tableauJoueurs.length; i++) {
                if(element.id == tableauJoueurs[i].id) {
                  tableauJoueurs[i].vivant = false;
                }
              }
              //joueurMortNuit.innerHTML = element['nom'];
              //roleMortNuit.innerHTML = element['role'];
              joueurMortSorciere.innerHTML = element['nom'];
            } else {
              console.log('oui');
              //joueurMortNuit.innerHTML = "Personne";
              //roleMortNuit.innerHTML = "..."
              joueurMortSorciere.innerHTML = element['nom'];
            }
            
          }
        })
      })
    };

    function VoteLeJour() {
    
      joueurSelectionne = this;
      elimination.style.visibility = 'visible';
      labelElim.innerHTML = joueurSelectionne.querySelector(".nomJoueur").textContent;
      
      annuleElim.addEventListener('click', annulerElimination);
      confirmElim.addEventListener('click', confirmerElimination);

      function annulerElimination() {
        elimination.style.visibility = 'hidden';
        annuleElim.removeEventListener('click', annulerElimination);
        confirmElim.removeEventListener('click', confirmerElimination);
      }
          
      function confirmerElimination() {
        revelation.style.visibility = "hidden";
        elimination.style.visibility = 'hidden';
        joueurSelectionne.style.opacity = "0.5";

        fetch('../php/cartes.php')
        .then(r => r.json())
        .then(r => {
          r.forEach(element => {
            if(element['nom'] == joueurSelectionne.querySelector('.nomJoueur').textContent) {
              joueurSelectionne.querySelector('.carte_dos').src = '../img/' + element['role'] + '.png';
              for (let i = 0; i < tableauJoueurs.length; i++) {
                if(joueurSelectionne.id == tableauJoueurs[i].id) {
                  tableauJoueurs[i].vivant = false;
                }
              }
            }
          })
        })
        annuleElim.removeEventListener('click', annulerElimination);
        confirmElim.removeEventListener('click', confirmerElimination);
        }
    }






    var timer;
    var timerDisplay = document.getElementById("timer");
    

    document.getElementById("startBtn").addEventListener("click", function() {
        if (!timer) {
            var twoMinutes = 2 * 60;
            startTimer(twoMinutes, timerDisplay);
            timer = true;
          }
    });

    timerDisplay.addEventListener("click", function() {
        if (timer) {
          clearInterval(intervalId);
          timerDisplay.textContent = "";
          timer = false;
        }
      });
   
});

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}


