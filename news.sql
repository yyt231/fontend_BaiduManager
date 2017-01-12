-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-12-02 03:37:18
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` char(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(5, '精选', '来自精选的标题4444', 'img/img.JPG', '2016-11-29 00:00:00', '精选意甲'),
(6, '精选', '来自精选的标题5', 'img/img.JPG', '2016-11-30 00:00:00', '精选意甲'),
(7, '精选', '来自精选的标题6', 'img/img.JPG', '2016-11-30 00:00:00', '精选意甲'),
(8, '精选', '来自精选的标题7', 'img/img.JPG', '2016-11-30 00:00:00', '精选意甲'),
(9, '百家', '来自百家的标题', 'img/img.JPG', '2016-12-01 00:00:00', '百花齐放'),
(11, '百家', '来自百家的标题1', 'img/img.JPG', '2016-11-30 00:00:00', '百花齐放'),
(12, '百家', '来自百家的标题2', 'img/img.JPG', '2016-11-30 00:00:00', '百花齐放'),
(13, '百家', '来自百家的标题3', 'img/img.JPG', '2016-11-30 00:00:00', '百花齐放'),
(14, '百家', '来自百家的标题4', 'img/img.JPG', '2016-11-30 00:00:00', '百花齐放'),
(15, '百家', '来自百家的标题5', 'img/img.JPG', '2016-11-30 00:00:00', '百花齐放'),
(16, '百家', '来自百家的标题6', 'img/img.JPG', '2016-11-30 00:00:00', '百花齐放'),
(17, '百家', '来自百家的标题7', 'img/img.JPG', '2016-11-30 00:00:00', '百花齐放'),
(19, '精选', '来自精选的标题9999', 'img/img.JPG', '2016-12-04 00:00:00', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
