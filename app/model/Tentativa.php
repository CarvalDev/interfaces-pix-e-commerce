<?php  
    require_once(__DIR__."/Conexao.php");

class Tentativa{
    public static function store($clicksTotaisTentativa, $clicksErradosTentativa, $percursoPerfeito,$tempoTentativa, $idUsuario	){
        $pdo = Conexao::conexao();
            $com = "INSERT INTO tbtentativas VALUES (NULL, :ct,:ce, :pp, :tt, :iu)";
            $stmt = $pdo->prepare($com);
            $stmt->bindValue(":ct", $clicksTotaisTentativa);
            $stmt->bindValue(":ce", $clicksErradosTentativa);
            $stmt->bindValue(":pp", $percursoPerfeito);
            $stmt->bindValue(":tt", $tempoTentativa);
            $stmt->bindValue(":iu", $idUsuario);
            $stmt->execute();
    }
}


?>