-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 15/05/2024 às 21:46
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `dbinterface`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `tbtentativas`
--

CREATE TABLE `tbtentativas` (
  `idTentativa` int(11) NOT NULL,
  `clicksTotaisTentativa` int(11) DEFAULT NULL,
  `clicksErradosTentativa` int(11) DEFAULT NULL,
  `percursoPerfeito` tinyint(1) DEFAULT NULL,
  `tempoTentativa` time NOT NULL,
  `tipoTentativa` varchar(10) NOT NULL,
  `concluiuPercurso` tinyint(1) NOT NULL,
  `idUsuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tbusuario`
--

CREATE TABLE `tbusuario` (
  `idUsuario` int(11) NOT NULL,
  `nomeUsuario` varchar(80) DEFAULT NULL,
  `emailUsuario` varchar(90) NOT NULL,
  `senhaUsuario` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tbusuario`
--

INSERT INTO `tbusuario` (`idUsuario`, `nomeUsuario`, `emailUsuario`, `senhaUsuario`) VALUES
(1, 'Advincula Ferraz', 'adm1@adm.com', '1111'),
(2, 'Armando Luiz', 'adm2@adm.com', '1111'),
(3, 'João Barreto', 'adm3@adm.com', '1111'),
(4, 'Sebastião Pereira', 'adm4@adm.com', '1111'),
(5, 'Vanessa Ferreira', 'adm5@adm.com', '1111'),
(6, 'Luiz Ricardo', 'adm6@adm.com', '1111'),
(7, 'Carlos Ossie', 'adm7@adm.com', '1111'),
(8, 'Gustavo Souza', 'adm8@adm.com', '1111'),
(9, 'Nayara Rocha', 'adm9@adm.com', '1111'),
(10, 'Henrique Fernando', 'adm10@adm.com', '1111'),
(11, 'Kaique Silva', 'adm11@adm.com', '1111'),
(12, 'Giovanna Meira', 'adm12@adm.com', '1111'),
(13, 'Bruno Rocha', 'adm13@adm.com', '1111'),
(14, 'Ester Carvalho', 'adm14@adm.com', '1111'),
(15, 'Maria Margarida', 'adm15@adm.com', '1111'),
(16, 'Lucas Mendes', 'adm16@adm.com', '1111');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `tbtentativas`
--
ALTER TABLE `tbtentativas`
  ADD PRIMARY KEY (`idTentativa`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Índices de tabela `tbusuario`
--
ALTER TABLE `tbusuario`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tbtentativas`
--
ALTER TABLE `tbtentativas`
  MODIFY `idTentativa` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tbusuario`
--
ALTER TABLE `tbusuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `tbtentativas`
--
ALTER TABLE `tbtentativas`
  ADD CONSTRAINT `tbtentativas_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `tbusuario` (`idUsuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
