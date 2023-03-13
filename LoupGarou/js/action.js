var description = document.getElementById('description');

fetch('../php/roles.php')
.then(r => r.json())
.then(r => {
  //console.log(r)

  let strCartes = "";

  r.forEach(element => {
    strCartes += "<div id='carte" + element['nom'] + "'><img class='carte'  src='../img/" + element['nom'] + ".png'></div>";
    //console.log(typeof(element['nom']));
  });

  document.getElementById('roles').innerHTML = strCartes;
  //document.getElementById('description').innerHTML = element['description']
  //'description.innerHTML='" + element['description'] + "
  //onmouseover='afficheDescription(" + element['nom'] + ")'

});

//var carte = document.getElementsByClassName('carte');
