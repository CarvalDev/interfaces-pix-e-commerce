<?php
require_once("Tentativa.php");
    try{
    Tentativa::store($_POST['ct'], $_POST['ce'], $_POST['pp'],$_POST['tt'],$_POST['t'], $_POST['iu']);
    $response = array("success" => true);
    echo json_encode($response);
}catch(Exception $e){
    echo json_encode(["error" => $_POST]);
}
?>