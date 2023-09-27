
-- select the shopping lists from the different users

select shopping_list.id_user,
shopping_list.id_shopping_list, 
shopping_list.shopping_list_name
from shopping_list, users 
where shopping_list.id_user = users.id_user 
order by users.id_user;



-- select all the products and their quantity in every shopping lists of the 1st user

select shopping_list.shopping_list_name,
product.id_product, 
product.prod_name, 
possess.quantity
from shopping_list, product, possess
where product.id_product = possess.id_product 
and possess.id_shopping_list = shopping_list.id_shopping_list
and shopping_list.id_user = 1;



-- select all the products with the tag "fruit"

SELECT
    product.id_product,
    product.prod_name,
    product.prod_price
FROM
    product
INNER JOIN
    CORRESPOND ON product.id_product = CORRESPOND.id_product
INNER JOIN
    tag ON CORRESPOND.id_tag = tag.id_tag
WHERE
    tag.tag_name = 'fruit';
	


-- select all the information of the 3rd user

select * from users where users.id_user = 3;



-- select all the products with the tag "fruit" and product name containing "Apple"

SELECT
    product.id_product,
    product.prod_name,
    product.prod_price
FROM
    product
INNER JOIN
    CORRESPOND ON product.id_product = CORRESPOND.id_product
INNER JOIN
    tag ON CORRESPOND.id_tag = tag.id_tag
WHERE
    tag.tag_name = 'fruit'
    AND product.prod_name LIKE '%Apple%';
	
	

-- show all the products with their associated tags

SELECT 
    product.id_product AS idp,
    product.prod_name AS productname,
    tag.tag_name AS tags
FROM product, tag, CORRESPOND
WHERE
    product.id_product=CORRESPOND.id_product and tag.id_tag=CORRESPOND.id_tag
ORDER BY idp;