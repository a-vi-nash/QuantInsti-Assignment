# QuantInsti-Assignment
Javascript MEAN Stack Assignment

1. Software to Install:
node and npm
mongo db

2. start the mongo server

3. import the ingredients and coupon data from the data folder using the below mongoimport commands:
mongoimport --db "quantinsti" --collection "ingredients" ingredients.json;
mongoimport --db "quantinsti" --collection "coupons" coupons.json;

4. run server;
node index.js

server will be running on localhost:8088
