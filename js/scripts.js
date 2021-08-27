// Business Logic
function Pizza (meat, veggies){
  this.meat = meat;
  this.veggies = veggies;
}

Pizza.prototype.addToppings = function(topping){
  this.toppings[topping.meatTopping] = topping
}



// UI Logic
$(document).ready(function(){
  $("form#order").submit(function(event){
    event.preventDefault();
    let meat = [];
    let veggies = [];
    $("input:checkbox[name=meat]:checked").each(function(){
      meat.push($(this).val());
    });
  $("input:checkbox[name=veggies]:checked").each(function(){
      veggies.push($(this).val());
    });
    let orderPizza = new Pizza(meat, veggies);
    $(".meat").text(orderPizza.meat);
    $(".veggies").text(orderPizza.veggies);
  });
});

