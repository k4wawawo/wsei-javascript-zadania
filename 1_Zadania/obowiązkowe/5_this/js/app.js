//ZAD0
var car = {
    brand: "Subaru",
    color: "Green",
    numberOfKilometers: 0,
    printCarInfo: function() {
      return this.color + " " + this.brand + ", " + this.numberOfKilometers + " km.";
    },
    drive: function(km) {
      this.numberOfKilometers += km;
    }
  }
  
  console.log(car.printCarInfo());
  car.drive(50);
  console.log(car.printCarInfo());

  //ZAD1
  var car = {
    brand: "Subaru",
    color: "Green",
    numberOfKilometers: 0,
    printCarInfo: function() {
      return this.color + " " + this.brand + ", " + this.numberOfKilometers + " km.";
    },
    drive: function(km) {
      this.numberOfKilometers += km;
    },
  }
  
  car["carinspectDate"] = ["29.07.2006", "01.04.2008", "11.11.2010"];
  
  car["addNewcarinspectDate"] = function(date) {
    this.carInspectionDates.push(date);
  }
  
  car["getcarinspectDate"] = function() {
    return this.carInspectionDates;
  }

  //ZAD2
  var calculator = {
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    },
    sum: function() {
      return this.a + this.b;
    },
    multiply: function() {
      return this.a * this.b;
    }
};

calculator.save(4, 5);
console.log(calculator.sum());
console.log(calculator.multiply());

//ZAD3
var stairs = {
    step: 0,
    up: function() {
      this.step++;
    },
    down: function() {
      this.step--;
    },
    printStep: function() {
      console.log(this.step);
    }
  }