// Business Logic
function Pizza (){
  this.toppings = {};
  this.size = {};
}

Pizza.prototype.addToppings = function(topping){
  this.toppings[topping.toppingSelection] = topping
}

// UI Logic
$(document).ready(function(){
  $("form#order").submit(function(event){
    event.preventDefault();
    var meat = [];
    $("input:checkbox[name=meat]:checked").each(function(){
      meat.push($(this).val());
    });
    $(".meat").text(meat);
  });
});