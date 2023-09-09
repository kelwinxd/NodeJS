/*Criar Tabela e colunsa*/
CREATE TABLE Users (
 NameC VARCHAR(40) not null, Age INT(10) not null, Email VARCHAR(40), Cod INT(2)
not null auto_increment, PRIMARY KEY (Cod)
);

/*Mostra colunas da tabela*/
DESCRIBE Users 


/*Inserir dados na tabela*/
INSERT INTO users(NameC, Email, Age) VALUES ("itachi", "itachi_uchiha", 25)

/*Mostrar dados da tabela*/
SELECT * FROM users 
SELECT * FROM users WHERE Age = 24 

/*Deletando*/
DELETE FROM USERS - /*Deleta tudo*/
DELETE FROM Users WHERE nome = "kelwin"

/*Atualizando dados*/
UPDATE aluno SET Nome 'kelwin' WHERE Age > 10;






