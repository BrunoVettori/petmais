# petmais
petmais


----------- DATABSE SCHEMA ------------

create table dono (
    cpf varchar(100) primary key,
  nome varchar (250) not null,
  endereco varchar (250) not null,
  contato varchar (100) not null
);

CREATE TABLE animal (
  id serial PRIMARY KEY,
  nome varchar(100) NOT NULL,
  tipo varchar(100) NOT NULL,
  raca varchar(100) NOT NULL,
  sexo varchar(100) NOT NULL,
  peso varchar(100) NOT NULL,
  dono_cpf varchar(100) NOT NULL REFERENCES dono(cpf)
);


create table servico (
    id serial primary key,
  tipo varchar (100) unique not null,
  valor varchar (100) not null
);

create table empregado (
    cpf varchar(100) primary key,
  nome varchar(100) not null,
  contato varchar(100) not null
);

create table agendamento(
  id serial primary key,
  servico int NOT NULL REFERENCES servico(id),
  animal int NOT NULL REFERENCES animal(id),
  empregado varchar(100) NOT NULL REFERENCES empregado(cpf)
); 