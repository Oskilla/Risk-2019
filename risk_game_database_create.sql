create table GameEntity (id int AUTO_INCREMENT not null, uuid varchar(400), primary key(id));
create table PlayerEntity (id int AUTO_INCREMENT not null, name varchar(400), color varchar(400), reserve int , mission varchar(400), countries varchar(400), uuid varchar(400), winner varchar(400),primary key(id));
