<?php  
    require_once("Conexao.php");

class Tentativa{
    public static function store($clicksTotaisTentativa, $clicksErradosTentativa, $percursoPerfeito,$tempoTentativa,$tipoTentativa,$concluiuPercurso, $idUsuario	){
        $pdo = Conexao::conexao();
            $com = "INSERT INTO tbtentativas VALUES (NULL, :ct,:ce, :pp, :tt,:t,:cc, :iu)";
            $stmt = $pdo->prepare($com);
            $stmt->bindValue(":ct", $clicksTotaisTentativa);
            $stmt->bindValue(":ce", $clicksErradosTentativa);
            $stmt->bindValue(":pp", $percursoPerfeito);
            $stmt->bindValue(":tt", $tempoTentativa);
            $stmt->bindValue(":t", $tipoTentativa);
            $stmt->bindValue(":cc", $concluiuPercurso);
            $stmt->bindValue(":iu", $idUsuario);
            $stmt->execute();
            return $pdo->lastInsertId();
    }
    public static function update($id,$clicksTotaisTentativa, $clicksErradosTentativa, $percursoPerfeito,$tempoTentativa,$tipoTentativa,$concluiuPercurso){
        $pdo = Conexao::conexao();
            $com = "UPDATE tbtentativas
            SET clicksTotaisTentativa = :ct, clicksErradosTentativa = :ce, percursoPerfeito = :pp, tempoTentativa=:tt, tipoTentativa =:t, concluiuPercurso = :cc
            WHERE idTentativa = :id AND concluiuPercurso = '0'";
            $stmt = $pdo->prepare($com);
            $stmt->bindValue(":ct", $clicksTotaisTentativa);
            $stmt->bindValue(":ce", $clicksErradosTentativa);
            $stmt->bindValue(":pp", $percursoPerfeito);
            $stmt->bindValue(":tt", $tempoTentativa);
            $stmt->bindValue(":t", $tipoTentativa);
            $stmt->bindValue(":cc", $concluiuPercurso);
            $stmt->bindParam(":id", $id);
            $stmt->execute();
            return $stmt->rowCount();
    }
    
}


?>