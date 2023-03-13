<?php 

$link = mysqli_connect('localhost','root','root','loup_garou');
$requete = "SELECT * FROM roles"; 

if($result = mysqli_query($link, $requete)) {
    foreach($result as $key => $elem) {
        $tab[] = $elem;     
      }
}
echo json_encode($tab);
?>