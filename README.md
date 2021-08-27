# Pizza Parlor

### By Art Weinstein

### A pizza building webpage used to practice object-oriented programming

## Technologies Used

* HTML
* CSS
* JavaScript

## Specs

1. The program will use a pizza constructor to generate a pizza object with properities for size and toppings. Pizza toppings will be selected from a checkbox and pushed
into the topping property in the pizza object and displayed.
2. The program will provide the user with a checkbox for various toppings, the UI logic will check for each checked item and return it on the HTML page through an array that goes into the object property. Each topping will have it's own set of checkboxes.
3. Create a cost prototype for the pizza object. It will take into account the size of the pizza and set a base cost for small, medium and large. The program will then return the base cost plus the number of toppings multiplied by increasing prices based on size. For example the base cost of a small pizza is twelve, each topping costs two dollars for small pizzas, therefore the small pizza choice will return 12 times (2 times the number of toppings).
4. Create an "Order your pizza" submit button under the form of checkboxes, test UI logic to ensure it takes user input into an empty array and push the array values into the property of the new pizza object named "orderPizza." After the information is submitted and processed, the initial cost will hide and the cost of the orderPizza along with its toppings will display to the user. 


## Description

This webpage allows the user to "order" a pizza via use of checkboxes, giving the user options of adding cheese, meat and veggies. The page will refresh every time a new order is submitted, with price values based on size and amount of toppings. The page will update accordingly each time a new topping is selected and the order your pizza button is pressed. The program makes use of object-oriented programming, and uses a pizza constructor with cost and topping properties. 

## Setup/Installation Requirements

1. [Clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) this repository.
2. Open the new directory.
3. Open index.html in a browser.

## Known Bugs

* No bugs known at the moment.

## License

* [MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2021 Art Weinstein

## Contact Information

[Email](artur.weintsein@gmail.com)