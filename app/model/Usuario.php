<?php  
require_once("Conexao.php");

class Usuario{
    public static function logar($email, $senha)
    {
        $pdo = Conexao::conexao();
        $com = "SELECT nomeUsuario as nome, idUsuario as id FROM tbusuario
        WHERE emailUsuario = :e AND senhaUsuario = :s";
        $stmt = $pdo->prepare($com);
        $stmt->bindParam(":e", $email);
        $stmt->bindParam(":s", $senha);
        $stmt->execute();
        if($stmt->rowCount() >0){
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }else{
            return false;
        }
    }
}

?>