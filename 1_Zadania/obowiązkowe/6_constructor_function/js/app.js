//ZAD0
function Basket() {
    this.products = [];
    this.sum = 0;
}

Basket.prototype.showBasket = function()
{
        this.products.forEach(element => {
            console.log(element);
        });
        console.log(this.sum);
}

Basket.prototype.addProduct = function(name,price)
{
        this.products.push(name);
        this.sum += price
}

var aliceBasket = new Basket();
aliceBasket.addProduct("Mleko",10);
aliceBasket.addProduct("Jajka",20);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("Serek", 20);
bruceBasket.addProduct("Pomidory",20);
bruceBasket.addProduct("Pepsi",30);
bruceBasket.showBasket();


//ZAD1
var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function (newName) {
    console.log("Robot " + this.name + " changes name to " + newName);
    this.name = newName;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

var r1 = new Robot("Ozzy");
r1.changeName("Zaza");
r1.isFunctional = true;
r1.fixIt();

//ZAD2
var Calculator = function () {
    this.Operations = [];
}
Calculator.prototype.add = function (num1,num2) 
{
    this.Operations.push("Added " + num1 + " to " + num2 + " got " + (num1+num2));
    return num1+num2;
};
Calculator.prototype.multiply = function (num1,num2) 
{
    this.Operations.push("Multipled " + num1 + " with " + num2 + " got " + (num1*num2));
    return num1*num2;
};
Calculator.prototype.subtract = function (num1,num2) 
{
    this.Operations.push("Subtracted " + num1 + "  from " + num2 + " got " + (num1-num2));
    return num1-num2;
};
Calculator.prototype.divide = function (num1,num2) 
{
    this.Operations.push("Divided " + num1 + " by " + num2 + " got " + (num1/num2));
    return num1/num2;
};
Calculator.prototype.printOperations = function () 
{
    this.Operations.forEach(element => {
        console.log(element);
    });
};
Calculator.prototype.clearoperations = function () 
{
    this.Operations = [];
};
var c1 = new Calculator();
c1.add(1,2);
c1.multiply(2,2);
c1.subtract(4,2);
c1.divide(16,4);
c1.printOperations();
c1.clearoperations();
c1.printOperations();