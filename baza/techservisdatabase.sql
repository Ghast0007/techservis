-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 10 Lut 2022, 11:26
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
  `rola` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `logowanie`
--

INSERT INTO `logowanie` (`Id`, `login`, `haslo`, `rola`) VALUES
(13, 'dami', '$2b$10$527OybstsVOG7kHRl6QHgO2MAd12LqXIS.8.LfHjF598IuiPiZahC', 'user'),
(14, 'admin', '$2b$10$8qyUgs0mlk1hHZhpnAxMjO1T7R6xVZmhJ9QfitgSfyI.TKlDFscIW', 'admin'),
(15, 'Bożena', '$2b$10$OkJcIBoUbxdaevEoWIbvseCiXf9YsNAvjJQ2WL2MgiJxYvYUHjq.q', 'user'),
(16, 'damian', '$2b$10$mRuc0mvTuJZs3QRx18oH.OWtNJemwo/wUrB77uBCohMt01mt3tJgW', 'user'),
(17, 'ghast0007', '$2b$10$fCByG.4SXKoYdoULWwQOlujtSKyBzHvVXUVE8KxNjMymO16lRydgK', 'user'),
(18, 'Dorotka', '$2b$10$.UyO1hNZ.8.tkLu5IH5PhOf09CqiijA1aKY8pnKTfxY9lcuyoQhsy', 'user'),
(19, 'kamil', '$2b$10$NPwGXvgdQusohcvHBNWvHO3VjJOMuv8iZA4dwPj8ntF8dSj2oxtEC', 'user'),
(21, 'asdasd', '$2b$10$2JZI04AYOYcg.7.br4Mrc.GvscOXEQyq7o9iustkViNbA1YDQY6z2', 'user'),
(22, 'domek', '$2b$10$sWjwcOSsvsm7D90UusCFrOaJcJ4Rdoq.7xqo6mu8Ixw/yaLiUiIsS', 'user'),
(23, 'qwerty', '$2b$10$Y2Y/OjrbucK2jImi/tfIleWK7186PjY6eYtT07zGKXcSrEkpJq./O', 'user'),
(24, 'new', '$2b$10$dhBO0WYGBMA.doAwqRs9uuL/pBgtJSbQ34VtkaMjouOCLnWC0sQIS', 'user'),
(25, 'new2', '$2b$10$1XWJUWFmfK.cCwFONlvu1uj1ZYk.4YKU3YeQop5ObD7R9lUDxAtmu', 'user'),
(26, 'aaa', '$2b$10$6.D.lIcHMpRn91BBDiFUOeGVEGxTAxEs6sValB92CiLLbFn.DipI2', 'user'),
(27, 'serwisant', '$2b$10$7xCEQEcChg22Kv8fOsnSBuKJ/RDxXbU7eLdBzmupXcRoHd1l3HOLy', 'admin');

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
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
