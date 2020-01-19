// ZAD0A

var city = {
    capital: "Warsaw",
    population: 38413000,
    president: "Andrzej Duda",
    primeMinisters: ["Mateusz Morawiecki"]
}

console.log(city.capital);
console.log(city.population);
console.log(city.president);
console.log(city.primeMinisters);

// ZAD0B
var timeMachine = {
  shape: "Shade",
  model: "PP440",
  run: function(date, place) {
    console.log("Date: " + date);
    console.log("Place: " + place);
  }
}

console.log(timeMachine.shape);
console.log(timeMachine.model);
timeMachine.run("05.06.1994", "Nairobi");

// ZAD1
var book = {
  title: "Wiedźmin",
  author: "Andrzej Sapkowski",
  numberOfPages: 228
}

console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);

// ZAD2
var person = {
  name: "Zaza",
  age: 18,
  sayHello: function() {
    console.log("Hello!");
  }
}

console.log(person.name);
console.log(person.age);
person.sayHello();

// ZAD3
var recipe = {
  title: "jajecznica"
}

recipe["ingredients"] = ["jajka", "cebula", "maslo", "boczek", "szynka", "mleko"];

console.log(recipe.title);
console.log(recipe.ingredients);

// ZAD4
var movie = {
    director: "Peter Jackson",
    writers: [" J.R.R. Tolkien ", "Fran Walsh", "Philippa Boyens", "Peter Jackson"],
    stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    country: "New Zealand | USA",
    budget: "$93,000,000",
    imdbPoints: 8.8,
    year: 2001,
    time: "2h 58 min",
    category: " Adventure, Drama, Fantasy"
}

for (var tmp in movie) {
  console.log(movie[tmp]);
}

// ZAD5
var animals = [
    {
        type: "cat",
        breed: "persian",
        name: "Tiberius",
        health: [
            {
                date: "2012-03-03",
                visitType: "grafting"
            },
            {
                date: "2015-06-23",
                visitType: "bowel surgery"
            }
        ]
    },
    {
        type: "Guinea pig",
        breed: "The Rex",
        name: "Marko",
        health: [
            {
                date: "2015-12-04",
                visitType: "grafting"
            },
            {
                date: "2016-03-15",
                visitType: "ear cleaning"
            }
        ]
    }

]

for (var i= 0; i < animals.length; i++) {
  for (var key in animals) {
    console.log(animals[key]);
  }
}

//ZAD6
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

if (!spoon.isExist) {
  console.log (spoon)
}