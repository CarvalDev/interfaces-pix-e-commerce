<?php  
    require_once("Conexao.php");

class Tentativa{
    public static function store($clicksTotaisTentativa, $clicksErradosTentativa, $percursoPerfeito,$tempoTentativa,$tipoTentativa, $idUsuario	){
        $pdo = Conexao::conexao();
            $com = "INSERT INTO tbtentativas VALUES (NULL, :ct,:ce, :pp, :tt,:t, :iu)";
            $stmt = $pdo->prepare($com);
            $stmt->bindValue(":ct", $clicksTotaisTentativa);
            $stmt->bindValue(":ce", $clicksErradosTentativa);
            $stmt->bindValue(":pp", $percursoPerfeito);
            $stmt->bindValue(":tt", $tempoTentativa);
            $stmt->bindValue(":t", $tipoTentativa);
            $stmt->bindValue(":iu", $idUsuario);
            $stmt->execute();
    }
}


?>