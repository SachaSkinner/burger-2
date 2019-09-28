USE burgers_db;

INSERT INTO burgers(burger_name)
VALUES
 ('chicken teriyaki'), 
 ('oven roasted chicken'),
 ('turkey breast'),
 ('Italian B.M.T'),
 ('tuna'),
 ('black forest ham'),
 ('meatball marinara');
 

 
--  updating some rows 
 
 SELECT * FROM burgers;
-- UPDATE burgers
-- SET devoured=true
-- WHERE item_id=3