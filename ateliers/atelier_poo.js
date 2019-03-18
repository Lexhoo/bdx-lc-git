class Vehicle {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }

  display() {
    return 'Color : ' + this.color + ', model : ' + this.model;
  }
}

class Moto extends Vehicle {
  display() {
    return 'Type : ' + this.type + ', Color: ' + this.color;
  }
  fall() {
    return true;
  }
}

class Car extends Vehicle {
  display() {
    return 'Type : Car, Model: ' + this.model;
  }
}