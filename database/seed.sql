
insert into users 
values (1, 'Maxence KAMIONKA', '2tournay!','maxencekamionka@gmail.com','16 rue Cendrillon 75014 Paris France');
insert into users 
values (2, 'Noam DETOURNAY', 'm4x3nc3!','noam2tournay@gmail.com','78 rue Victor Hugo 75012 Paris France');
insert into users 
values(3, 'Romain BILLY', 'r0ms30!','roms30@gmail.com','150 avenue des Champs-Elysées 75008 Paris France');



INSERT INTO product (id_product, prod_price, prod_price_unit, prod_unit, prod_name, prod_grocery_name)
VALUES
   (1, 2.99, 2.99, 'lb', 'Apples', 'walmart'),
   (2, 1.49, 1.49, 'lb', 'Bananas', 'walmart'),
   (3, 3.49, 3.49, 'lb', 'Cabbage', 'target'),
   (4, 3.99, 3.99, 'lb', 'Granny Smith Apple', 'walmart');
   
   
   
INSERT INTO tag
VALUES
    (1, 'fruit', 'this is a fruit', 'www.imagelink.com'),
    (2, 'vegetable', 'this is a vegetable', 'www.imagelink.com');
	
	
	
INSERT INTO shopping_list
VALUES
   (1, 'Weekly Groceries', '2023-09-27', 'Essentials for the week', 1),
   (2, 'Pastry Supplies', '2023-10-05', 'Items for the pastry', 2),
   (3, 'Groceries for tuesday', '2023-09-27', 'Want to buy fruits', 1),
   (4, 'Groceries', '2023-09-28', 'Want to buy fruits', 3);
   
   
   
insert into POSSESS (id_product, id_shopping_list, quantity)
values (1,1,2), (2,1,1), (3,1,1), (1,2,1), (2,3,6), (3,4,10);



insert into CORRESPOND (id_product, id_tag)
values (1,1), (2,1), (3,2),(4,1);

