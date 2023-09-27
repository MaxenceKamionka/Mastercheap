CREATE TABLE users(
   id_user SMALLINT,
   user_name VARCHAR(20) NOT NULL,
   user_password VARCHAR(15) NOT NULL,
   user_email VARCHAR(50) NOT NULL,
   user_adress VARCHAR(100),
   PRIMARY KEY(id_user),
   UNIQUE(user_name),
   UNIQUE(user_email)
);

CREATE TABLE product(
   id_product SMALLINT,
	prod_name VARCHAR(30) NOT NULL,
   prod_price DECIMAL(15,2) NOT NULL,
   prod_price_unit DECIMAL(15,2),
   prod_unit VARCHAR(5),
   prod_grocery_name VARCHAR(30) NOT NULL,
   PRIMARY KEY(id_product)
);

CREATE TABLE tag(
   id_tag SMALLINT,
   tag_name VARCHAR(20) NOT NULL,
   tag_description VARCHAR(100),
   tag_img VARCHAR(100),
   PRIMARY KEY(id_tag)
);

CREATE TABLE shopping_list(
   id_shopping_list SMALLINT,
   shopping_list_name VARCHAR(50) NOT NULL,
   shopping_list_date DATE NOT NULL,
   shopping_list_desc VARCHAR(50),
   id_user SMALLINT NOT NULL,
   PRIMARY KEY(id_shopping_list),
   FOREIGN KEY(id_user) REFERENCES users(id_user)
);

CREATE TABLE CORRESPOND(
   id_product SMALLINT,
   id_tag SMALLINT,
   PRIMARY KEY(id_product, id_tag),
   FOREIGN KEY(id_product) REFERENCES product(id_product),
   FOREIGN KEY(id_tag) REFERENCES tag(id_tag)
);

CREATE TABLE POSSESS(
   id_product SMALLINT,
   id_shopping_list SMALLINT,
   quantity SMALLINT NOT NULL,
   PRIMARY KEY(id_product, id_shopping_list),
   FOREIGN KEY(id_product) REFERENCES product(id_product),
   FOREIGN KEY(id_shopping_list) REFERENCES shopping_list(id_shopping_list)
);

/*
Logical data Model:
users = (id_user SMALLINT, user_name VARCHAR(20), user_password VARCHAR(15), user_email VARCHAR(50), user_adress VARCHAR(100));
product = (id_product SMALLINT, prod_price DECIMAL(15,2), prod_price_unit DECIMAL(15,2), prod_unit VARCHAR(5), prod_grocery_name VARCHAR(30));
tag = (id_tag SMALLINT, tag_name VARCHAR(20), tag_description VARCHAR(100), tag_img VARCHAR(100));
shopping_list = (id_shopping_list SMALLINT, shopping_list_name VARCHAR(50), shopping_list_date DATE, shopping_list_desc VARCHAR(50), #id_user);
CORRESPOND = (#id_product, #id_tag);
POSSESS = (#id_product, #id_shopping_list, quantity SMALLINT);
*/

