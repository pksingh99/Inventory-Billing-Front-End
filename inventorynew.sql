-- MySQL dump 10.13  Distrib 5.7.19, for macos10.12 (x86_64)
--
-- Host: localhost    Database: inventorynew
-- ------------------------------------------------------
-- Server version	5.7.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` char(30) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `category` (`category`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (14,'ABCD'),(20,'BAPA'),(18,'BARE HA'),(9,'Celebration'),(11,'Coldplay'),(15,'EFG'),(2,'Fabric'),(8,'Festive'),(21,'Food'),(16,'HIJK'),(17,'HMM'),(13,'Jackson'),(19,'JKLM'),(5,'Kids Wear'),(7,'Kitchen'),(1,'Ladies Wear'),(3,'Mens Wear'),(10,'Office'),(12,'One Republic'),(22,'silk'),(6,'Sports');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employees` (
  `EID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `uname` varchar(20) NOT NULL,
  `upass` varchar(50) NOT NULL,
  `utype` varchar(10) NOT NULL,
  PRIMARY KEY (`EID`),
  UNIQUE KEY `uname` (`uname`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (1,'rohit naik','panjim',0,'roh','1234','admin'),(2,'rohit naik','panjim',0,'rohit','e2fc714c4727ee9395f324cd2e7f331f','admin');
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventory`
--

DROP TABLE IF EXISTS `inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inventory` (
  `EID` int(11) NOT NULL AUTO_INCREMENT,
  `PID` int(11) NOT NULL,
  `category` varchar(20) NOT NULL,
  `subcat` varchar(20) NOT NULL,
  `description` varchar(20) NOT NULL,
  `code` varchar(20) NOT NULL,
  `quantity` int(11) NOT NULL,
  `prate` int(11) NOT NULL,
  `srate` int(11) NOT NULL,
  `stax` int(11) NOT NULL,
  `invoiceNo` int(11) NOT NULL,
  `pamount` int(11) NOT NULL,
  `samount` int(11) NOT NULL,
  `purchasedate` date DEFAULT NULL,
  `sold` int(11) NOT NULL DEFAULT '0',
  `barcode` char(30) NOT NULL,
  PRIMARY KEY (`EID`),
  KEY `PID` (`PID`),
  CONSTRAINT `inventory_ibfk_1` FOREIGN KEY (`PID`) REFERENCES `purchaseinvoice` (`PID`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventory`
--

LOCK TABLES `inventory` WRITE;
/*!40000 ALTER TABLE `inventory` DISABLE KEYS */;
INSERT INTO `inventory` VALUES (22,19,'Just silk','silk','Jack','ABC-001',1,90,95,1,12345,90,95,'2017-12-04',1,'1'),(23,20,'Just silk','silk','Jack','ABC-001',1,90,95,0,12345,90,95,'2017-12-04',1,'1'),(24,21,'bare','Coldplay','Sav','abc-002',6,90,95,1,7888,540,570,'2017-12-04',0,'21'),(25,22,'bare','ABCD','GHJ','23',1,600,700,1,34323,600,700,'2017-12-04',0,'23'),(26,23,'bare','ABCD','GHJ','23',1,600,700,1,6778,600,700,'2017-12-04',0,'23'),(27,24,'bare','ABCD','GHJ','23',1,600,700,1,67999,600,700,'2017-12-04',0,'23'),(28,25,'bare','ABCD','GHJ','23',1,600,700,0,67999,600,700,'2017-12-04',0,'23'),(29,26,'bare','ABCD','GHJ','23',1,600,700,1,7890,600,700,'2017-12-04',0,'23'),(30,27,'bare','ABCD','GHJ','23',5,600,700,0,7890,3000,3500,'2017-12-04',0,'23'),(31,28,'bare','ABCD','GHJ','23',1,600,700,1,6789,600,700,'2017-12-04',0,'23'),(32,29,'bare','ABCD','GHJ','23',1,600,700,1,699,600,700,'2017-12-04',0,'23'),(33,30,'bare','ABCD','GHJ','23',1,600,700,1,566,600,700,'2017-12-04',0,'23');
/*!40000 ALTER TABLE `inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice`
--

DROP TABLE IF EXISTS `invoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `invoice` (
  `INID` int(11) NOT NULL AUTO_INCREMENT,
  `totalAmount` int(11) NOT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `clientname` varchar(50) DEFAULT NULL,
  `clientphone` bigint(20) DEFAULT NULL,
  `EID` int(11) DEFAULT NULL,
  `time` bigint(20) DEFAULT NULL,
  `invoicedate` date DEFAULT NULL,
  PRIMARY KEY (`INID`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice`
--

LOCK TABLES `invoice` WRITE;
/*!40000 ALTER TABLE `invoice` DISABLE KEYS */;
INSERT INTO `invoice` VALUES (1,1298,'','null',0,0,1508601952849,'2017-09-21'),(2,1298,'','null',0,0,1508606825191,'2017-09-21'),(3,110,'','null',0,1,1508607279627,'2017-09-21'),(7,0,'','null',0,0,1508607698469,'2017-09-21'),(9,0,'','null',0,0,1508608075275,'2017-09-21'),(10,0,'','null',0,0,1508608094476,'2017-09-21'),(11,2342,'','null',0,0,1508608133599,'2017-09-21'),(12,2310,'','null',0,0,1508614504941,'2017-09-22'),(13,990,'','null',0,0,1508615857810,'2017-09-22'),(14,-1100,'','null',0,0,1508617554196,'2017-09-22'),(15,1100,'','null',0,0,1508620310175,'2017-09-22'),(16,0,'','null',0,0,1508620648996,'2017-09-22'),(17,0,'','null',0,0,1508621805249,'2017-09-22'),(18,2583,'','null',0,0,1508768326061,'2017-09-23'),(19,2681,'','null',0,0,1508769122590,'2017-09-23'),(20,1232,'','null',0,0,1508769206006,'2017-09-23'),(21,1298,'','null',0,0,1508769749282,'2017-09-23'),(22,2571,'','null',0,0,1508771477133,'2017-09-23'),(23,118,'','null',0,0,1508772526788,'2017-09-23'),(24,2387,'','null',0,0,1508938893622,'2017-09-25'),(27,1100,'','null',0,0,1509552047083,'2017-10-01'),(28,3595,'','null',0,0,1509552100390,'2017-10-01'),(29,12100,'','null',0,0,1509553012431,'2017-10-01'),(30,3850,'','null',0,0,1509556781434,'2017-10-01'),(31,3696,'','null',0,0,1509556891568,'2017-10-01'),(32,1298,'','null',0,0,1509557473828,'2017-10-01'),(33,1428,'','null',0,0,1509560056176,'2017-10-01'),(34,13082,'','null',0,0,1509562325159,'2017-10-02'),(35,2200,'','null',0,0,1509562459213,'2017-10-02'),(36,7700,'','null',0,0,1509562459213,'2017-10-02'),(37,1376,'','null',0,1,1510944319018,'2017-10-18'),(38,212,'','null',0,0,1512402813110,'2017-11-04');
/*!40000 ALTER TABLE `invoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoices`
--

DROP TABLE IF EXISTS `invoices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `invoices` (
  `INID` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `rate` float DEFAULT NULL,
  `EID` int(11) DEFAULT NULL,
  `amount` float DEFAULT NULL,
  `gst` int(11) DEFAULT NULL,
  `barcode` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  KEY `INID` (`INID`),
  CONSTRAINT `invoices_ibfk_1` FOREIGN KEY (`INID`) REFERENCES `invoice` (`INID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoices`
--

LOCK TABLES `invoices` WRITE;
/*!40000 ALTER TABLE `invoices` DISABLE KEYS */;
INSERT INTO `invoices` VALUES (1,'',1100,NULL,1298,18,0,0),(3,'',110,NULL,110,0,0,0),(2,'',1100,NULL,1298,18,0,0),(7,'',100,NULL,100,0,0,0),(9,'',100,NULL,100,0,4,0),(10,'',100,NULL,100,0,4,0),(11,'',1100,NULL,1232,12,1,0),(11,'',110,NULL,110,0,2,0),(11,'',1100,NULL,1100,0,3,0),(12,'',1100,NULL,1100,0,1,0),(12,'',110,NULL,110,0,2,0),(12,'',1100,NULL,1100,0,3,0),(13,'',1100,NULL,1100,0,1,0),(15,'Saree',1100,NULL,1100,0,1,0),(18,'Saree',1100,NULL,1155,5,1,0),(18,'Saree',110,NULL,129.8,18,2,0),(18,'Saree',1100,NULL,1298,18,3,0),(19,'Saree',1100,NULL,1155,5,1,0),(19,'Saree',110,NULL,115.5,5,2,0),(19,'Saree',100,NULL,112,12,4,0),(19,'Saree',1100,NULL,1298,18,3,0),(20,'Saree',1100,NULL,1232,12,1,0),(21,'Saree',1100,NULL,1298,18,1,0),(22,'Saree',100,NULL,118,18,4,0),(22,'Saree',1100,NULL,1155,5,3,0),(22,'Saree',1100,NULL,1298,18,1,0),(23,'Saree',100,NULL,118,18,4,0),(24,'Saree',1100,NULL,1155,5,1,0),(24,'Saree',1100,NULL,1232,12,3,0),(27,'Saree',1100,NULL,1100,0,1,1),(28,'Saree',1100,NULL,3465,5,1,3),(28,'Saree',110,NULL,0,18,2,2),(29,'Saree',1100,NULL,12100,0,1,11),(30,'Saree',1100,NULL,0,0,1,5),(30,'Saree',110,NULL,0,0,2,7),(32,'Saree',1100,NULL,0,18,1,2),(33,'Saree',1100,NULL,0,18,1,2),(34,'Saree',110,NULL,1232,12,2,10),(34,'Saree',1100,NULL,11550,5,3,10),(34,'Saree',100,NULL,300,0,4,3),(35,'Saree',1100,NULL,2200,0,1,2),(36,'Saree',1100,NULL,7700,0,1,7),(37,'Saree',110,NULL,115.5,5,2,1),(37,'Tshirt',1200,NULL,1260,5,5,1),(38,'silk',95,NULL,106.4,12,22,1),(38,'silk',95,NULL,106.4,12,23,1);
/*!40000 ALTER TABLE `invoices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `prodid` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(50) NOT NULL,
  `barcode` char(50) NOT NULL,
  `code` char(10) NOT NULL,
  `instock` int(11) NOT NULL,
  `outstock` int(11) NOT NULL,
  `category` char(30) DEFAULT NULL,
  `subcategory` char(30) DEFAULT NULL,
  `MRP` int(11) NOT NULL,
  `selling_price` int(11) NOT NULL,
  `purchase_price` int(11) NOT NULL,
  `company` char(30) NOT NULL,
  PRIMARY KEY (`prodid`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `barcode` (`barcode`),
  UNIQUE KEY `code` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (20,'Jack','1','ABC-001',2,0,'silk','Just silk',100,95,90,'1'),(22,'Sav','21','abc-002',6,0,'Coldplay','bare',100,95,90,'1'),(23,'GHJ','23','23',13,0,'ABCD','bare',800,700,600,'3');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchaseinvoice`
--

DROP TABLE IF EXISTS `purchaseinvoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchaseinvoice` (
  `PID` int(11) NOT NULL AUTO_INCREMENT,
  `grandPurchaseTotal` int(11) NOT NULL,
  `grandSellingTotal` int(11) NOT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `SID` int(11) NOT NULL,
  `invoiceNo` int(11) DEFAULT NULL,
  `invoicedate` date DEFAULT NULL,
  PRIMARY KEY (`PID`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchaseinvoice`
--

LOCK TABLES `purchaseinvoice` WRITE;
/*!40000 ALTER TABLE `purchaseinvoice` DISABLE KEYS */;
INSERT INTO `purchaseinvoice` VALUES (19,90,95,'',1,12345,'2017-12-04'),(20,90,95,'',1,12345,'2017-12-04'),(21,540,570,'',2,7888,'2017-12-04'),(22,600,700,'',3,34323,'2017-12-04'),(23,600,700,'',2,6778,'2017-12-04'),(24,600,700,'',3,67999,'2017-12-04'),(25,600,700,'',2,67999,'2017-12-04'),(26,600,700,'',3,7890,'2017-12-04'),(27,3000,3500,'',2,7890,'2017-12-04'),(28,600,700,'',2,6789,'2017-12-04'),(29,600,700,'',3,699,'2017-12-04'),(30,600,700,'',3,566,'2017-12-04');
/*!40000 ALTER TABLE `purchaseinvoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategory`
--

DROP TABLE IF EXISTS `subcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subcategory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subcategory` char(30) NOT NULL,
  `cid` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cid` (`cid`),
  CONSTRAINT `subcategory_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategory`
--

LOCK TABLES `subcategory` WRITE;
/*!40000 ALTER TABLE `subcategory` DISABLE KEYS */;
INSERT INTO `subcategory` VALUES (1,'Saree',1),(2,'football',6),(3,'OK Mumma',18),(4,'OK',20),(5,'bare',14),(6,'Busict',21),(7,'Just silk',22);
/*!40000 ALTER TABLE `subcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suppliers`
--

DROP TABLE IF EXISTS `suppliers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `suppliers` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` bigint(20) DEFAULT NULL,
  `gstNo` varchar(255) DEFAULT NULL,
  `other` varchar(255) DEFAULT NULL,
  `sint` varchar(5) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suppliers`
--

LOCK TABLES `suppliers` WRITE;
/*!40000 ALTER TABLE `suppliers` DISABLE KEYS */;
INSERT INTO `suppliers` VALUES (1,'Alphabet','Panjim',89000000,'iuiui','','abc'),(2,'Apple','Goa',9673417124,'akkdsfjbqwiafjao2378zjfa','','apple'),(3,'Balaji Technology','TN',9000000000,'uyuyuyuyu78778','','BalT');
/*!40000 ALTER TABLE `suppliers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-05 12:54:20
