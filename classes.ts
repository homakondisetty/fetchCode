/*
 * Class - Class is a blueprint
 * Object - instance of class through which we can access class methods and fields
 * Modifiers - Public, Private and Protected
 * Inheritance - Child/Derived class can access properties/methods of Base/Parent class
 * Extends - Keyword used for inheritance
 * Interface - A long annotation, used for code reusability
 */
// Changed here 
export class Vehicle {
  constructor(public color: string) {}

   honk(): void {
    console.log("beep...");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

export class Car extends Vehicle {
  constructor(public tires: number, color: string) {
    super(color);
  }

   drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4,'red');
car.startDrivingProcess();
console.log(`Number of tires ${car.tires} and color is ${car.color}`);
