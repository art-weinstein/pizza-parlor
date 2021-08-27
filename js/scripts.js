// Business Logic
function Pizza (size, meat, veggies){
  this.size = size;
  this.meat = meat;
  this.veggies = veggies;
}

Pizza.prototype.price = function(){
  let pizzaSize = this.size;
  let pizzaMeat = this.meat.length;
  let pizzaVeggies = this.veggies.length;
  if (pizzaSize === "Small"){
    return  12 + (pizzaMeat * 2) + (pizzaVeggies * 2);
  } else if (pizzaSize === "Medium"){
    return 14 + (pizzaMeat * 3) + (pizzaVeggies * 3);
  } else {
    return 16 + (pizzaMeat * 3.5) + (pizzaVeggies * 3.5);
  }
}

// UI Logic
$(document).ready(function(){
  $("form#order").submit(function(event){
    event.preventDefault();
    let size = $("#size").val();
    let meat = [];
    let veggies = [];
    $("input:checkbox[name=meat]:checked").each(function(){
      meat.push($(this).val());
    });
  $("input:checkbox[name=veggies]:checked").each(function(){
      veggies.push($(this).val());
    });
    let orderPizza = new Pizza(size, meat, veggies);
    let pizzaCost = orderPizza.price();
    $(".size").text(orderPizza.size);
    $(".meat").text(orderPizza.meat);
    $(".veggies").text(orderPizza.veggies);
    $(".cost").text(pizzaCost);
  });
});
