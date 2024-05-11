<?php
require_once(__DIR__."../../Model/Tentativa.php");
    try{
    Tentativa::store($_POST['ct'], $_POST['ce'], $_POST['pp'],$_POST['tt'], $_POST['iu']);
    $response = array("success" => true);
    echo json_encode($response);
}catch(Exception $e){
    echo json_encode(["error" => $_POST]);
}
?>