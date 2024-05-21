<?php  
include_once("../app/model/Usuario.php");
include_once("../app/model/Tentativa.php");
try{
    $dados = Usuario::logar($_POST['e'], $_POST['s']);
    if($dados !=false){
        $data = Tentativa::store($_POST['clicksTotais'], $_POST['clicksErrados'], '0', $_POST['tempoTentativa'], 'E-commerce', '0', $dados['id']);
       
        header("Location: home.php?userId=".$data);
    }else{
        header("Location: index.php?erro=true");
    }
}catch(Exception $e){
    echo json_encode(["error" => true]);
}

?>