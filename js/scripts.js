function Pizza (){
  this.toppings = {};
  this.size = {};
}

Pizza.prototype.addToppings = function(topping){
  this.toppings[topping.toppingSelection] = topping
}