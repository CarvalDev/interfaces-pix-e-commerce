<?php  
require_once("Usuario.php");
try{
    $dados = Usuario::pagamento($_POST['id'], $_POST['s']);
    if($dados !=false){
    echo json_encode([
        "success" => true,
        "senhaOk" => $dados
    ]);
    }else{
        echo json_encode([
            "error" => true,
            "resposta" => $dados
        ]);
    }
}catch(Exception $e){
    echo json_encode(["error" => true, 'message' => $e->getMessage()]);
}

?>