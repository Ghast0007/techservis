-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 18 Lut 2022, 23:10
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
(32, 'admin', '$2b$10$YSKAzEGf8B5lGIYpkr/gvuO0n4WqKAlRTn2lvIl7v9EWcho3oeQmq', 'admin', 'Damian', 'Dobrzyński', 'ghast0007@gmail.com', '654654654');

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
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
