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

    //FOND
    var fond = document.getElementById('fond');
    var body = document.querySelector('body');

    //TABLEAU DES VIVANTS 
    var tableauJoueurs = [
      { id: "j1", vivant: true, role: "" },
      { id: "j2", vivant: true, role: "" },
      { id: "j3", vivant: true, role: "" },
      { id: "j4", vivant: true, role: "" },
      { id: "j5", vivant: true, role: "" },
      { id: "j6", vivant: true, role: "" },
      { id: "j7", vivant: true, role: "" },
      { id: "j8", vivant: true, role: "" }
    ];
    
      //MODIFICATION DES NOMS
    for (var i = 1; i <= sessionStorage.getItem('nb_joueur'); i++) {
      document.getElementById('j' + i).querySelector('.nomJoueur').textContent = sessionStorage.getItem('joueur' + i);
    }
    
    
    var listRoles = ['Loup-Garou', 'Loup-Garou', 'Petite_Fille', 'Chasseur', 'Sorciere', 'Cupidon', 'Salvateur', 'Voyante'];
    var nbrJoueurs = listRoles.length;
    var attrib = melangeRoles(nbrJoueurs);
    for (i = 0; i < nbrJoueurs; i++) {
      tableauJoueurs[i].role = listRoles[attrib[i]];
    }

    function melangeRoles(nbrJoueurs) {
      let tab = [];
      for (i = 0; i < nbrJoueurs; i++) {
        tab.push(i);
      }
      for (var i = tab.length -1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i+1));
        [tab[i], tab[j]] = [tab[j], tab[i]];
      }
      return tab
    }


    btnSuite.addEventListener('click', e=> {
      //console.log(tableauJoueurs);
      defileScenario(compteur);
      if(compteur <=21) {
        compteur +=1;
      } else {
        compteur = 17;
      }
      for(var i = 0; i<joueurs.length; i++) {
        joueurs[i].classList.remove("selectedGentil");
        joueurs[i].classList.remove("selectedMechant");
      }
    });
    
    function defileScenario(compteur) {

      fetch('../php/scenario.php')
      .then(r => r.json())
      .then(r => {
    
        r.forEach(element => {
          if(compteur == element.id) {
            txtScenario.innerHTML = element['role'];

            //REVEAL J1
            if(element['role'] == "reveal_j1") {
              joueurs[0].querySelector('.carte_dos').src = "../img/" + tableauJoueurs[0].role + ".png";
              body.style.backgroundImage = "url('../img/jour.jpg')";
            } else {
              joueurs[0].querySelector('.carte_dos').src = "../img/dos.png";
            }

            //REVEAL J2
            if(element['role'] == "reveal_j2") {
              joueurs[1].querySelector('.carte_dos').src = "../img/" + tableauJoueurs[1].role + ".png";
              body.style.backgroundImage = "url('../img/jour.jpg')";
            } else {
              joueurs[1].querySelector('.carte_dos').src = "../img/dos.png";
            }

            //REVEAL J3
            if(element['role'] == "reveal_j3") {
              joueurs[2].querySelector('.carte_dos').src = "../img/" + tableauJoueurs[2].role + ".png";
              body.style.backgroundImage = "url('../img/jour.jpg')";
            } else {
              joueurs[2].querySelector('.carte_dos').src = "../img/dos.png";
            }

            //REVEAL J4
            if(element['role'] == "reveal_j4") {
              joueurs[3].querySelector('.carte_dos').src = "../img/" + tableauJoueurs[3].role + ".png";
              body.style.backgroundImage = "url('../img/jour.jpg')";
            } else {
              joueurs[3].querySelector('.carte_dos').src = "../img/dos.png";
            }

            //REVEAL J5
            if(element['role'] == "reveal_j5") {
              joueurs[4].querySelector('.carte_dos').src = "../img/" + tableauJoueurs[4].role + ".png";
              body.style.backgroundImage = "url('../img/jour.jpg')";
            } else {
              joueurs[4].querySelector('.carte_dos').src = "../img/dos.png";
            }

            //REVEAL J6
            if(element['role'] == "reveal_j6") {
              joueurs[5].querySelector('.carte_dos').src = "../img/" + tableauJoueurs[5].role + ".png";
              body.style.backgroundImage = "url('../img/jour.jpg')";
            } else {
              joueurs[5].querySelector('.carte_dos').src = "../img/dos.png";
            }

            //REVEAL J7
            if(element['role'] == "reveal_j7") {
              joueurs[6].querySelector('.carte_dos').src = "../img/" + tableauJoueurs[6].role + ".png";
              body.style.backgroundImage = "url('../img/jour.jpg')";
            } else {
              joueurs[6].querySelector('.carte_dos').src = "../img/dos.png";
            }

            //REVEAL J8
            if(element['role'] == "reveal_j8") {
              joueurs[7].querySelector('.carte_dos').src = "../img/" + tableauJoueurs[7].role + ".png";
              body.style.backgroundImage = "url('../img/jour.jpg')";
            } else {
              joueurs[7].querySelector('.carte_dos').src = "../img/dos.png";
            }

            //NEUTRE 
            if(element['role'] == "neutre") {
              body.style.backgroundImage = "url('../img/jour.jpg')";
            }

            //CUPIDON
            if(txtScenario.innerHTML == 'Cupidon') {
              body.style.backgroundImage = "url('../img/nuit.jpg')";
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
              body.style.backgroundImage = "url('../img/nuit.jpg')";
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
              body.style.backgroundImage = "url('../img/nuit.jpg')";
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
              body.style.backgroundImage = "url('../img/nuit.jpg')";
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
              body.style.backgroundImage = "url('../img/nuit.jpg')";
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
              body.style.backgroundImage = "url('../img/jour.jpg')";
              revelationSorciere.style.visibility = "hidden";
              for (let i = 0; i < tableauJoueurs.length; i++) {
                if(!tableauJoueurs[i].vivant) {
                  joueurs[i].style.opacity = "0.5";
                  joueurs[i].querySelector('.carte_dos').src = '../img/' + tableauJoueurs[i].role + '.png';
                }
              }
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
      for(var i = 0; i<joueurs.length; i++) {
        joueurs[i].classList.remove("selectedGentil");
      }
      this.classList.add("selectedGentil");
      
    }

    function nuitSalvateur() {
      joueurSelectionne = this;
      joueurGardeSalvateur.innerHTML = joueurSelectionne.querySelector('.nomJoueur').textContent;

      for(var i = 0; i<joueurs.length; i++) {
        joueurs[i].classList.remove("selectedGentil");
      }
      this.classList.add("selectedGentil");
      }

    function nuitSorciere() {

      joueurSelectionne = this;
      for(var i = 0; i<joueurs.length; i++) {
        joueurs[i].classList.remove("selectedMechant");
      }
      
      if(compteurPotionVie < 1) {
        if(joueurSelectionne.querySelector('.nomJoueur').textContent == joueurMortSorciere.innerHTML) {
          console.log("sorciere sauve");
          for (let i = 0; i < joueurs.length; i++) {
            if(joueurSelectionne.id == tableauJoueurs[i].id) {
              tableauJoueurs[i].vivant = true;
              this.classList.add("selectedGentil")
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
              this.classList.add("selectedMechant");
            }
          }
          compteurPotionMort += 1;
        } else {console.log('uniquement cliquer pour sauver')}
      }
    }

    function  nuitVoyante() {

      joueurSelectionne = this;
      for(var i = 0; i<tableauJoueurs.length; i++) {
        if(tableauJoueurs[i].id == joueurSelectionne.id) {
          joueurSelectionne.querySelector('.carte_dos').src = '../img/' + tableauJoueurs[i].role + '.png';
        }
      }
    };

    function nuitLoups() {
      joueurSelectionne = this;
      for(var i = 0; i<joueurs.length; i++) {
        joueurs[i].classList.remove("selectedMechant");
      }
      this.classList.add("selectedMechant");

      if(joueurSelectionne.querySelector('.nomJoueur').innerHTML != joueurGardeSalvateur.innerHTML) {
        for (let i = 0; i < tableauJoueurs.length; i++) {
          if(joueurSelectionne.id == tableauJoueurs[i].id) {
            tableauJoueurs[i].vivant = false;
          }
        }
      } 
      joueurMortSorciere.innerHTML = joueurSelectionne.querySelector('.nomJoueur').textContent;
      
      // fetch('../php/cartes.php')
      // .then(r => r.json())
      // .then(r => {

      //   r.forEach(element => {
      //     if(element['nom'] == joueurSelectionne.querySelector('.nomJoueur').textContent) {
      //       if(element['nom'] != joueurGardeSalvateur.innerHTML) {
      //         //console.log('non');
      //         for (let i = 0; i < tableauJoueurs.length; i++) {
      //           if(element.id == tableauJoueurs[i].id) {
      //             tableauJoueurs[i].vivant = false;
      //           }
      //         }
      //         console.log(joueurMortSorciere);
      //         //joueurMortNuit.innerHTML = element['nom'];
      //         //roleMortNuit.innerHTML = element['role'];
      //         joueurMortSorciere.innerHTML = joueurSelectionne.querySelector('.nomJoueur').textContent;
      //         console.log(joueurMortSorciere);
      //       } else {
      //         //console.log('oui');
      //         //joueurMortNuit.innerHTML = "Personne";
      //         //roleMortNuit.innerHTML = "..."
      //         joueurMortSorciere.innerHTML = joueurSelectionne.querySelector('.nomJoueur').textContent;
      //       }
            
      //     }
      //   })
      // }
      // )
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

        for (let i = 0; i < tableauJoueurs.length; i++) {
          if(joueurSelectionne.id == tableauJoueurs[i].id) {
            tableauJoueurs[i].vivant = false;
            joueurSelectionne.querySelector('.carte_dos').src = '../img/' + tableauJoueurs[i].role + '.png';
        
          }
        }
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


