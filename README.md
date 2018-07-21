# QuantInsti-Assignment
Javascript MEAN Stack Assignment

1. Software to Install:
    - node and npm
    - mongo db

1. start the mongo server

3. import the ingredients and coupon data from the data folder using the below mongoimport commands:
  
    - mongoimport --db "quantinsti" --collection "ingredients" --file ingredients.json --jsonArray
    - mongoimport --db "quantinsti" --collection "coupons" --file coupons.json --jsonArray

4. run server;
    - node index.js

server will be running on localhost:8088
