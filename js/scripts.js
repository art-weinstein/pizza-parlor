// Business Logic
function Pizza (meat, veggies){
  this.meat = meat;
  this.veggies = veggies;
}

Pizza.prototype.price = function(){
  let pizzaMeat = this.meat.length;
  let pizzaVeggies = this.veggies.length;
  return 10 + (pizzaMeat * 2) + (pizzaVeggies * 2);

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
    let pizzaCost = orderPizza.price();
    $(".meat").text(orderPizza.meat);
    $(".veggies").text(orderPizza.veggies);
    $(".cost").text(pizzaCost);
  });
});

