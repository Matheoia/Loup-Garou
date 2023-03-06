<?php

// PHP de connexion à la base de données AlwaysData avec le compte de Claire Girardin

$link = pg_connect("host=postgresql-girardinclaire.alwaysdata.net dbname=girardinclaire_loupgarou user=girardinclaire password=wT5RySfX#JE");

if (!$link) {
    die('Erreur de connexion');
}

?>
