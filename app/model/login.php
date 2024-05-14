<?php  
require_once("Usuario.php");
try{
    $dados = Usuario::logar($_POST['e'], $_POST['s']);
    if($dados !=false){
    echo json_encode([
        "success" => true,
        "usuario" => $dados
    ]);
    }else{
        echo json_encode([
            "error" => true
        ]);
    }
}catch(Exception $e){
    echo json_encode(["error" => true]);
}

?>