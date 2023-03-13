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
-- Table structure for table `scenario`
--

CREATE TABLE `scenario` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role` text NOT NULL,
  `vivant` tinyint(1) NOT NULL,
  `audioa` text NOT NULL,
  `audiob` text NOT NULL,
  `pouvoir` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `scenario`
--

INSERT INTO `scenario` (`id`, `role`, `vivant`, `audioa`, `audiob`, `pouvoir`) VALUES
(1, 'Cupidon', 1, '', '', 1),
(2, 'Salvateur', 1, '', '', 1),
(3, 'Voyante', 1, '', '', 1),
(4, 'Loup-Garou', 1, '', '', 1),
(5, 'Sorciere', 1, '', '', 1),
(6, 'Vote du jour', 1, '', '', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `scenario`
--
ALTER TABLE `scenario`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `scenario`
--
ALTER TABLE `scenario`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
