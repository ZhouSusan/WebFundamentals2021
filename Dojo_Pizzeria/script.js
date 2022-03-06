function pizzaOven(bread, sauce, cheese, toppings) {
    var pizza = {};
    pizza.bread = bread;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

var p3 = pizzaOven("thin", "alfredo", ["parmesan"], ["italian susage", "salami"]);
console.log(p3);

var p4 = pizzaOven("Gluten-Free", "BBQ", ["3-Cheese Blend", "PeperJack"], ["Beef", "Grilled CHicken", "Spicy Italian Sausage"]);
console.log(p4);


//Random Pizza
var crust = [
    "twisted and dip",
    "Deep dish",
    "thin",
    "hand-tossed",
    "gluteen-free",
    "stuffed dish"
];

var sauce = [
    "BBQ",
    "Pesto",
    "Garlic Rub",
    "Red Sauce",
    "No sauce",
];

var cheese = [
    "Mozzarella",
    "Asiago",
    "Parmesan",
    "Feta",
    "Dairy-Free Cheese",
    "No cheese"
]

var topping = [
    "bacon",
    "pepeeroni",
    "sausage",
    "salami",
    "mushrooms",
    "grren pepper",
    "pinnnaple"
];

function randomSelector(array) {
    var randomItem = Math.floor(array.length*Math.random());
    return array[randomItem];
};

function randomPizza() {
    var pizza = {};
    pizza.crust =  randomSelector(crust);
    pizza.sauce = randomSelector(sauce);
    pizza.cheese = [randomSelector(cheese)];
    pizza.topping = [randomSelector(topping)];
    return pizza;
};

console.log(randomPizza());