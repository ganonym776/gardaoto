-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 23 Jul 2020 pada 18.41
-- Versi server: 10.4.8-MariaDB
-- Versi PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gardaoto`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admins`
--

CREATE TABLE `admins` (
  `Nim` int(11) NOT NULL,
  `Username` varchar(30) NOT NULL,
  `Password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `admins`
--

INSERT INTO `admins` (`Nim`, `Username`, `Password`) VALUES
(18112370, 'gunawan', 'gunawan'),
(18112371, 'gas', '$2b$10$OHmu4p61rHdnnhvCfAQFdui'),
(1232134, 'gas', '$2b$10$ebFI2jyMbUgi3/1U5VR61e6'),
(18112373, 'gas', '$2b$10$sZglgD1ll0LPGLPnujx2m.T');

-- --------------------------------------------------------

--
-- Struktur dari tabel `jaminan`
--

CREATE TABLE `jaminan` (
  `Kd_jaminan` int(11) NOT NULL,
  `Gmbr_jaminan` varchar(100) DEFAULT NULL,
  `Nm_jaminan` varchar(70) NOT NULL,
  `Deskripsi_jaminan` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `jaminan`
--

INSERT INTO `jaminan` (`Kd_jaminan`, `Gmbr_jaminan`, `Nm_jaminan`, `Deskripsi_jaminan`) VALUES
(1, '9.png', 'Personal Accident Driver', 'Pertanggungan ini akan melindungi pengemudi kendaraan bermotor yang Anda asuransikan dari resiko cidera badan atau kematian dan atau biaya pengobatan yang terjadi di dalam dan secara langsung disebabkan oleh kecelakaan kendaraan bermotor tersebut.'),
(2, '10.png', 'Personal Accident Passenger', 'Pertanggungan ini akan melindungi penumpang kendaraan bermotor yang Anda asuransikan dari resiko cidera badan atau kematian dan atau biaya pengobatan yang terjadi di dalam dan secara langsung disebabkan oleh kecelakaan kendaraan bermotor tersebut.'),
(3, '11.png', 'Third Party Liabilities (TPL)', 'Pertanggungan ini akan memungkinkan Anda untuk mendapatkan jaminan atas kerugian pihak ketiga yang disebabkan oleh kelalaian Anda saat berkendara menggunakan kendaraan bermotor yang Anda asuransikan. Kerugian yang dijamin tidak hanya kerusakan harta benda melainkan juga biaya pengobatan atas cidera badan atau kematian.'),
(4, '12.png', 'Strike, Riot, Civil Commotion', 'Pertanggungan ini akan melindungi kendaraan bermotor yang Anda asuransikan dari kerugian dan atau kerusakan yang secara langsung disebabkan oleh kerusuhan, pemogokan, penghalangan bekerja, tawuran, huru-hara, pembangkitan rakyat tanpa penggunaan senjata api, revolusi tanpa penggunaan senjata api, makar, dan atau pencegahan wajar terhadap risiko – risiko yang disebutkan sebelumnya.'),
(5, '13.png', 'Flood & Windstorm, Earthquake, Tsunami,  Eruption (Act of God)', 'Pertanggungan ini akan melindungi kendaraan bermotor Anda dari kerugian dan atau kerusakan yang secara langsung disebabkan oleh bencana alam. Adapun pertanggungan ini meliputi perluasan jaminan terhadap kerugian dan atau kerusakan yang disebabkan oleh angin topan, badai, hujan es, banjir, genangan air dan atau tanah longsor, dan perluasan jaminan terhadap kerugian dan atau kerusakan yang disebabkan oleh gempa bumi, tsunami, dan atau letusan gunung berapi.'),
(6, '14.jpg', 'Terrorism & Sabotage', 'Pertanggungan ini akan melindungi kendaraan bermotor yang Anda asuransikan dari kerugian terhadap resiko terorisme dan sabotase dan atau pencegahan wajar terhadap risiko-risiko yang disebutkan sebelumnya.');

-- --------------------------------------------------------

--
-- Struktur dari tabel `layananplus`
--

CREATE TABLE `layananplus` (
  `Id_layanan` int(11) NOT NULL,
  `Gmbr_layanan` varchar(100) DEFAULT NULL,
  `Nm_layanan` varchar(75) NOT NULL,
  `Deskripsi_layanan` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `layananplus`
--

INSERT INTO `layananplus` (`Id_layanan`, `Gmbr_layanan`, `Nm_layanan`, `Deskripsi_layanan`) VALUES
(1, '3.png', 'Layanan Home Survey & Pickup Delivery Service', 'Klaimm mudah melalui Aplikasi Garda Mobile Otocare bisa bebas pilih lokasi survei mobil dan antar jemput kendaraan menuju dan dari bengkel.'),
(2, '4.png', 'Perbaikan di Seluruh Jaringan Bengkel Garda Oto', 'Bekerjasama dengan bengkel authorized dan bengkel rekanan di seluruh Indonesia'),
(3, '5.png', 'Bantuan Darurat Garda Siaga 24 Jam', 'Layanan Emergency Roadside Assistance (ERA) berupa mobil gendong, derek, dan motor seperti butuh jumper, ban kempis, mogok, hingga kecelakaan.'),
(4, '6.png', 'Call Center Garda Akses 24 jam', 'Bahkan saat semua terlelap, Garda Akses kami secara profesional selalu terjaga untuk melayani kebutuhan informasi produk, layanan polis asuransi, lapor klaim, hingga bantuan darurat di jalan raya Garda Siaga.'),
(5, '7.png', 'Garansi Hasil Kerja Bengkel dan Jaminan Suku Cadang Asli', 'Garansi 6 bulan untuk hasil pengerjaan bengkel.'),
(6, '8.png', 'E-policy Terbit 1 X 24 Jam Setelah Persetujuan Survei', 'Polis elektronik terbit 1 X 24 jam setelah proses persetujuan survei.');

-- --------------------------------------------------------

--
-- Struktur dari tabel `messages`
--

CREATE TABLE `messages` (
  `Id_massages` int(11) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Judul_massages` varchar(50) NOT NULL,
  `Isi_massages` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `messages`
--

INSERT INTO `messages` (`Id_massages`, `Email`, `Judul_massages`, `Isi_massages`) VALUES
(1, 'mama@rumah', 'asasa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'),
(2, 'papa@rumah', 'asasa', 'aaaaaaaaadddddddddddddddddddddddddddd'),
(3, 'kaka@rumah', 'asasa', 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbba');

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `Kd_product` int(11) NOT NULL,
  `Gmbr_product` varchar(100) DEFAULT NULL,
  `Nm_product` varchar(50) NOT NULL,
  `Deskripsi_product` text NOT NULL,
  `Tgl_terbit` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`Kd_product`, `Gmbr_product`, `Nm_product`, `Deskripsi_product`, `Tgl_terbit`) VALUES
(1, '1.png', 'Total Lost Only (TLO)', 'Total Loss Only menjamin Total Loss Accident + Total Loss Stolen yaitu memberikan jaminan atas kerugian/kerusakan di mana biaya perbaikan ≥ 75% dari harga kendaraan sesaat sebelum kerugian dan kehilangan akibat pencurian.', '2020-06-26'),
(2, '2.png', 'Comprehensive', 'Comprehensive menjamin Partial Loss + Total Loss yaitu memberikan jaminan kerugian/kerusakan sebagian dan keseluruhan yang diakibatkan oleh semua risiko yang dijamin dalam polis termasuk kehilangan akibat pencurian.', '2020-06-26');

-- --------------------------------------------------------

--
-- Struktur dari tabel `team`
--

CREATE TABLE `team` (
  `Nim` int(12) NOT NULL,
  `Nama` varchar(30) NOT NULL,
  `Foto` varchar(150) DEFAULT NULL,
  `Posisi` varchar(10) NOT NULL,
  `Jurusan` varchar(16) NOT NULL,
  `Kelas` varchar(16) NOT NULL,
  `Keterangan` text NOT NULL,
  `Tgl_lahir` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `team`
--

INSERT INTO `team` (`Nim`, `Nama`, `Foto`, `Posisi`, `Jurusan`, `Kelas`, `Keterangan`, `Tgl_lahir`) VALUES
(18112370, 'Gunawan Prasetyo', 'picture2.jpg', 'FrontEnd', 'Informatika', '18-S1IF-08', 'Mengerjakan bagian page home dan admin', '2000-07-12'),
(18112371, 'Muhammad Nabil Pradipta', 'picture3.jpg', 'BackEnd', 'Informatika', '18-S1IF-08', 'Mengerjakan bagian Api dan Database', '2000-07-12'),
(18112372, 'Dina Rahma Novita', 'picture4.jpg', 'FrontEnd', 'Informatika', '18-S1IF-08', 'Mengerjakan bagian page product dan laporan ppt', '2000-07-12'),
(18112373, 'Jannio Alvares', 'picture5.png', 'BackEnd', 'Informatika', '18-S1IF-08', 'Mengerjakan bagian Api dan Database', '2000-07-12'),
(18112374, 'Isya Rahman Maulana', 'picture6.jpg', 'FrontEnd', 'Informatika', '18-S1IF-08', 'Mengerjakan bagian page login dan profil', '2000-07-12'),
(18112375, 'Yudha Pratama', 'picture7.jpg', 'FrontEnd', 'Informatika', '18-S1IF-08', 'Mengerjakan bagian contact me', '2000-07-12');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `jaminan`
--
ALTER TABLE `jaminan`
  ADD PRIMARY KEY (`Kd_jaminan`);

--
-- Indeks untuk tabel `layananplus`
--
ALTER TABLE `layananplus`
  ADD PRIMARY KEY (`Id_layanan`);

--
-- Indeks untuk tabel `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`Id_massages`);

--
-- Indeks untuk tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`Kd_product`);

--
-- Indeks untuk tabel `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`Nim`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `jaminan`
--
ALTER TABLE `jaminan`
  MODIFY `Kd_jaminan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `layananplus`
--
ALTER TABLE `layananplus`
  MODIFY `Id_layanan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `messages`
--
ALTER TABLE `messages`
  MODIFY `Id_massages` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `products`
--
ALTER TABLE `products`
  MODIFY `Kd_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
