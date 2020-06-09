create database lmkarting;

use lmkarting;

create table team(
    teamid int PRIMARY KEY AUTO_INCREMENT,
    teamname varchar(50),
    captainname varchar(100),
    college varchar(100),
    city varchar(20),
    state varchar(20),
    category varchar(20),
    phone varchar(10),
    email varchar(50),
    password varchar(15),
    date date
);