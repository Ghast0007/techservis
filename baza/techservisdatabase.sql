-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 06 Mar 2022, 20:56
-- Wersja serwera: 10.4.21-MariaDB
-- Wersja PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `techservisdatabase`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `logowanie`
--

CREATE TABLE `logowanie` (
  `Id` int(11) NOT NULL,
  `login` varchar(45) NOT NULL,
  `haslo` varchar(200) NOT NULL,
  `rola` varchar(45) NOT NULL,
  `imie` varchar(255) NOT NULL,
  `nazwisko` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `telefon` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `logowanie`
--

INSERT INTO `logowanie` (`Id`, `login`, `haslo`, `rola`, `imie`, `nazwisko`, `mail`, `telefon`) VALUES
(30, 'Dorotka', '$2b$10$Au90aXnJk/nSrXhKY7E8qeEHr33ttMac/1QIbJ6YHoeyIFOTu4A4m', 'user', 'Dorota', 'Olszewska', 'ghast0007@gmail.com', '321654987'),
(31, 'Ghast0007', '$2b$10$O.SkWgRQnwb3fJpMLNDYze53HfF7YN9ssOLZ2FeVvj2Z7upjc2Q1u', 'user', 'Damian', 'Dobrzyński', 'ghast0007@gmail.com', '654654654'),
(32, 'admin', '$2b$10$YSKAzEGf8B5lGIYpkr/gvuO0n4WqKAlRTn2lvIl7v9EWcho3oeQmq', 'admin', 'Damian', 'Dobrzyński', 'ghast0007@gmail.com', '654654654'),
(34, 'natali', '$2b$10$kicP3CI8Ac.E5SNRYyWwNu6AJRog36SAThv72Glc07Bt8GWSDFIPu', 'user', 'natalia', 'dobrzyńska', 'cos@mail.pl', '234346468'),
(35, 'Kotek', '$2b$10$Fu4h6AXAzWyCXYgRsrlXOeJEzlIU3GdWZG8AwpSy5GHEF/UebUn1q', 'user', 'Ola', 'Kowalska', 'ola@mail.com', '123456789'),
(36, 'szarik', '$2b$10$YR/mrJeVNIR9sTuUx6JOIuHcnSLxeFvZudxHwdQ40MjTOBOM/UwnK', 'user', 'szarik', 'nowak', 'szarik@mail.com', '123321123'),
(39, 'Jan', '$2b$10$S.XpWAriA0Wp5j12WKHZ0.YRSYNrYKQzXArAa4Vbvd1k2yriLxtpO', 'user', 'Jan', 'Kowalski', 'jan@onet.pl', '1236654978'),
(44, 'Puszek', '$2b$10$I3ZafecW8gXvzWDZSNWtFOuYUgNqKPO6BR3GBr8xy5yBCsDo8Qu.C', 'user', 'Kamil', 'Nowak', 'nowak@mail.com', '+48 518 477 556'),
(47, 'Maciek', '$2b$10$I.zkuXfM6kqZpFxf.q9q9ewacA.efURQpMSqhoBJkdCYPEKNPFhdK', 'user', 'Maciek', 'Jakiś', 'maciek@mail.vom', '+48 518 477 006'),
(48, 'Marcel123', '$2b$10$7qEg2zTeUNsvIS5MgfknJu3I5TQ7XRdsF3H0yEOF/CNpZL2ScUPUi', 'user', 'Marcel', 'Szeluga', 'natalka12042004@wp.pl', '+48 789 254 062');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `logowanie`
--
ALTER TABLE `logowanie`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `logowanie`
--
ALTER TABLE `logowanie`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
