# MyStore Project Overview

MyStore is Angular application that allows users to view a list of available products to purchase, add them to a shopping cart, and ultimately complete the checkout process. 

## Getting Started
1- run on cmd `npm install`
2-run on cmd `json-server --watch db.json` to make a server on local host 3000 to read data from json file
3- run on cmd `npm run start` to start application on local host 4200

## Project Description:
1- app is using platfrom angular 
2- app is actaully many components talk to each other
    `product-list component` :to call each iteam component to represent all products
    `product-item component` :show componenet name, price and button to add to cart
    `product-item-detail component` :open a full page represeting data of components
    `cart component` : to list all components on card ,increase more items or decrease and also show total price ,  user data form (name ,address, credit card) 
    `confirmation`: to confirm user data , price descripe when will be received products


    also we have  services to save all products from db .json to use on all app
     service cart to calculate total price




## License

[License](LICENSE.txt)
