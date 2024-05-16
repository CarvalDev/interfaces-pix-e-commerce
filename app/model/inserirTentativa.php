<?php
require_once("Tentativa.php");
    try{
    $id = Tentativa::store($_POST['ct'], $_POST['ce'], $_POST['pp'],$_POST['tt'],$_POST['t'],$_POST['cc'], $_POST['iu']);
    $response = array("success" => true, "id" => $id);
    echo json_encode($response);
}catch(Exception $e){
    echo json_encode(["pinto" => $e->getMessage()]);
}
?>