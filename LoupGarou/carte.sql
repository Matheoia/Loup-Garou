-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 13, 2023 at 09:01 AM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `loup_garou`
--

-- --------------------------------------------------------

--
-- Table structure for table `carte`
--

CREATE TABLE `carte` (
  `nom` text NOT NULL,
  `role` text NOT NULL,
  `id` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `carte`
--

INSERT INTO `carte` (`nom`, `role`, `id`) VALUES
('joueur1', 'Cupidon', 'j1'),
('joueur2', 'Salvateur', 'j2'),
('joueur3', 'Voyante', 'j3'),
('joueur4', 'Loup-Garou', 'j4'),
('joueur5', 'Loup-Garou', 'j5'),
('joueur6', 'Sorciere', 'j6'),
('joueur7', 'Chasseur', 'j7'),
('joueur8', 'Petite_Fille', 'j8');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
