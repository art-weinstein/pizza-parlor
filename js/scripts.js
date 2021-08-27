// Business Logic
function Pizza (size, toppings){
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function(){
  let pizzaSize = this.size;
  let pizzaTopping = this.toppings.length;
  let pizzaPrice = 0;
  if (pizzaSize === "Small"){
    pizzaPrice = 12 + (pizzaTopping * 2) - 2; 
    return  pizzaPrice;
  } else if (pizzaSize === "Medium"){
    pizzaPrice = 14 + (pizzaTopping * 3) - 3; 
    return  pizzaPrice;
  } else {
    pizzaPrice = 16 + (pizzaTopping * 3.5) - 3.5; 
    return  pizzaPrice;
  }
}

// UI Logic
$(document).ready(function(){
  $("form#order").submit(function(event){
    event.preventDefault();
    let size = $("#size").val();
    let topping = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      topping.push($(this).val());
    });
  // $("input:checkbox[name=veggies]:checked").each(function(){
  //     veggies.push($(this).val());
  //   });
    let orderPizza = new Pizza(size, topping);
    let pizzaCost = orderPizza.price();
    $(".size").text(orderPizza.size);
    $(".toppings").text(orderPizza.toppings.join(", "));
    // This ties into my comment in html, I was wondering if I could create a seperate list for each topping without creating new properites.
    // $(".meat").text(orderPizza.topping);
    // $(".veggies").text(orderPizza.topping);
    $(".cost").text(pizzaCost.toFixed(2));
    $(".initialCost").hide();
  });
});


