<?php
require_once("Tentativa.php");
    try{
    $id = Tentativa::update( $_POST['id'],$_POST['ct'], $_POST['ce'], $_POST['pp'],$_POST['tt'],$_POST['t'],$_POST['cc']);
    $response = array("success" => true, "row"=> $id);
    echo json_encode($response);
}catch(Exception $e){
    echo json_encode(["error" => $e->getMessage()]);
}
?>