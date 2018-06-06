/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : formdb

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-06-06 08:59:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for form
-- ----------------------------
DROP TABLE IF EXISTS `form`;
CREATE TABLE `form` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '',
  `gender` enum('男','女') DEFAULT NULL,
  `phonenum` varchar(20) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `cardid` varchar(20) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `school` varchar(30) DEFAULT NULL,
  `major` varchar(20) DEFAULT NULL,
  `politics` varchar(20) DEFAULT NULL,
  `plan_major` varchar(20) DEFAULT NULL,
  `nation` varchar(20) DEFAULT NULL,
  `birthday` varchar(20) DEFAULT NULL,
  `duty` varchar(50) DEFAULT NULL,
  `cet` varchar(20) DEFAULT NULL,
  `hobby` varchar(255) DEFAULT NULL,
  `class_rank` varchar(20) DEFAULT NULL,
  `major_rank` varchar(20) DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `userid` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` enum('0','1') DEFAULT '0',
  `acticode` varchar(255) DEFAULT NULL,
  `token_exptime` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
