create database OrchisSystem;
use OrchisSystem;

create table Empresa(
idEmpresa int primary key auto_increment,
nomeEmpresa varchar (45) not null,
telefoneEmpresa char (18)not null,
cnpjEmpresa char (14) not null,
-- qtdFuncionariosEmpresa char(14) not null,
emailEmpresa varchar (65) not null,
-- cepEmpresa char(9),
senhaEmpresa varchar(45) not null
);


create table Estufa(
idEstufa int auto_increment primary key,
controleEtileno boolean not null,
controleLuminosidade boolean not null,
areaPlantio float not null,
precoCusto float not null,
fkEmpresa int,
constraint fkEstufaEmpresa foreign key (fkEmpresa)
				references Empresa(idEmpresa)
);

create table Sensor(
idSensor int primary key auto_increment,
tipoSensor varchar (45),
fkEstufa int,
constraint fkSensorEstufa foreign key (fkEstufa)
				references Estufa(idEstufa)
);

create table MedidaSensor(
idMedidaSensor int primary key auto_increment,
valorEtileno int,
dataColetaEtileno TIMESTAMP DEFAULT current_timestamp,
valorLuminosidade int,
dataColetaLuminosidade TIMESTAMP DEFAULT current_timestamp
-- fkSensor int,
-- primary key (idMedidaSensor, fkSensor),
-- constraint fkMedidaSensor foreign key (fkSensor)
				-- references Sensor(idSensor)
);