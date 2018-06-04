/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : formdb

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-06-04 16:15:45
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of form
-- ----------------------------
INSERT INTO `form` VALUES ('1', '马燕峰', '男', '13477036346', '1131542953@qq.com', '410522199411022830', '河南省安阳市龙安区马投涧镇元二庄村', '中国地质大学', '计算机科学与技术', '党员', '计算机应用技术', '汉', '1994年11月02日', '无', '6级', null, '6/30', '20/120', 'http://localhost:3000/files/马燕峰-5个部分.pdf');
INSERT INTO `form` VALUES ('2', '马燕峰', '男', '13477036346', '1131542953@qq.com', '410522199411022830', '河北省邯郸市成安县马投涧镇元二庄村', '中国地质大学', '计算机科学与技术', '党员', '计算机应用技术', '汉', '1994年11月02日', '无', '6级', null, '6/30', '20/120', 'http://localhost:3000/files/马燕峰-5个部分.pdf');
INSERT INTO `form` VALUES ('3', '江良', '男', '67676767676', 'lxtx2013@foxmail.com', '524678524324563542', '广东省婺源', '海大', '数学', '群众', '计算机', '汉', '1996年07月04日', '无', '6', null, '岁', '1', 'http://localhost:3000/files/江良-5个部分.pdf');
INSERT INTO `form` VALUES ('4', '江良', '男', '67676767676', 'lxtx2013@foxmail.com', '524678524324563542', '湖南省婺源', '海大', '数学', '群众', '计算机', '汉', '1996年07月04日', '无', '6', null, '岁', '1', 'http://localhost:3000/files/江良-5个部分.pdf');
INSERT INTO `form` VALUES ('5', '马燕峰', '男', '13477036346', '1131542953@qq.com', '410522199411022830', '北京市kkkk', '中国地质大学', '计算机科学与技术', '党员', '计算机应用技术', '汉', '1994年11月02日', '无', '6级', null, '6/30', '20/120', 'http://localhost:3000/files/马燕峰-5个部分.pdf');
INSERT INTO `form` VALUES ('6', '马燕峰', '男', '13477036346', '1131542953@qq.com', '410522199411022830', '山西省kkkk', '中国地质大学', '计算机科学与技术', '党员', '计算机应用技术', '汉', '1994年11月02日', '无', '6级', null, '6/30', '20/120', 'http://localhost:3000/files/马燕峰-5个部分.pdf');
INSERT INTO `form` VALUES ('7', '马燕峰', '女', '13477036346', '1131542953@qq.com', '410522199411022830', '山东省聊城市市辖区马投涧镇元二庄村', '中国地质大学', '计算机科学与技术', '党员', '计算机应用技术', '汉', '2018年06月29日', '无', '6级', null, '6/30', '20/120', 'http://localhost:3000/files/马燕峰-5个部分.pdf');
INSERT INTO `form` VALUES ('8', '马燕峰', '女', '13477036346', '1131542953@qq.com', '410522199411022830', '北京市市辖区东城区马投涧镇元二庄村', '中国地质大学', '计算机科学与技术', '党员', '计算机应用技术', '汉', '2018年06月29日', '无', '6级', null, '6/30', '20/120', 'http://localhost:3000/files/马燕峰-5个部分.pdf');
INSERT INTO `form` VALUES ('9', '马燕峰', '女', '13477036346', '1131542953@qq.com', '410522199411022830', '内蒙古自治区马投涧镇元二庄村', '中国地质大学', '计算机科学与技术', '党员', '计算机应用技术', '汉', '2018年06月29日', '无', '6级', null, '6/30', '20/120', 'http://localhost:3000/files/马燕峰-5个部分.pdf');
INSERT INTO `form` VALUES ('10', '马燕峰', '女', '13477036346', '1131542953@qq.com', '410522199411022830', '浙江省马投涧镇元二庄村', '中国地质大学', '计算机科学与技术', '党员', '计算机应用技术', '汉', '2018年06月29日', '无', '6级', null, '6/30', '20/120', 'http://localhost:3000/files/马燕峰-5个部分.pdf');
INSERT INTO `form` VALUES ('11', '马燕峰', '女', '13477036346', '1131542953@qq.com', '410522199411022830', '江苏省马投涧镇元二庄村', '中国地质大学', '计算机科学与技术', '党员', '计算机应用技术', '汉', '2018年06月29日', '无', '6级', null, '6/30', '20/120', 'http://localhost:3000/files/马燕峰-5个部分.pdf');
INSERT INTO `form` VALUES ('12', '马燕峰', '女', '13477036346', '1131542953@qq.com', '410522199411022830', '上海市马投涧镇元二庄村', '中国地质大学', '计算机科学与技术', '党员', '计算机应用技术', '汉', '2018年06月29日', '无', '6级', null, '6/30', '20/120', 'http://localhost:3000/files/马燕峰-5个部分.pdf');
