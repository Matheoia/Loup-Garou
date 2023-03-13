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
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nom` text NOT NULL,
  `description` text NOT NULL,
  `imgcarte` text NOT NULL,
  `audioa` text NOT NULL,
  `audiob` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `nom`, `description`, `imgcarte`, `audioa`, `audiob`) VALUES
(1, 'Cupidon', 'Son objectif est d\'éliminer tous les Loups-Garous. Dès le début de la partie, il doit former un couple de deux joueurs. Leur objectif sera de survivre ensemble, car si l\'un d\'eux meurt, l\'autre se suicidera.', '\"../img/cupidon.png\"', '', ''),
(2, 'Salvateur', 'Son objectif est d\'éliminer tous les Loups-Garous. Chaque nuit, il peut protéger quelqu\'un de l\'attaque des Loups-Garous.', '\"../img/salvateur.png\"', '', ''),
(3, 'Voyante', 'Son objectif est d\'éliminer tous les Loups-Garous. Chaque nuit, elle peut espionner un joueur et découvrir sa véritable identité.', '\"../img/voyante.png\"', '', ''),
(4, 'Loup-Garou', 'Son objectif est d\'éliminer tous les innocents (ceux qui ne sont pas Loups-Garous). Chaque nuit, il se réunit avec ses compères Loups pour décider d\'une victime à éliminer.', '\"../img/loup.png\"', '', ''),
(5, 'Sorciere', 'Son objectif est d\'éliminer tous les Loups-Garous. Elle dispose de deux potions : une potion de vie pour sauver la victime des Loups, et une potion de mort pour assassiner quelqu\'un.', '\"../img/sorciere.png\"', '', ''),
(6, 'Chasseur', 'Son objectif est d\'éliminer tous les Loups-Garous. A sa mort, il doit éliminer un joueur en utilisant sa dernière balle.', '\"../img/chasseur.png\"', '', ''),
(7, 'Villageois', 'Son objectif est d\'éliminer tous les Loups-Garous. Il ne dispose d\'aucun pouvoir particulier : uniquement sa perspicacité et sa force de persuasion. Toutefois, tous les joueurs voient son rôle d\'innocent.', '\"../img/villageois.png\"', '', ''),
(8, 'Petite_Fille', 'La petite fille est un villageois qui peut se réveiller au moment où les loups garous sont appelés, sans que les loups garous ne la remarque. Si par malheur elle se fait remarquer elle meurt instantanément.', '\"../img/petite_fille.png\"', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
