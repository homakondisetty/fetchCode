import { Vehicle, Car } from "../classes";

test("Vehicle class", () => {
  console.log = jest.fn();
  // GIVEN
  const objVehicle = new Vehicle("Something");
  // WHEN
  objVehicle.honk();
  // THEN
  expect(console.log).toBeCalledWith("beep...");
});

//describe
describe("Car Class", () => {
  console.log = jest.fn();
  test("startDrivingProcess method", () => {
    //Given
    const objCar = new Car(4, "Green");
    //When
    objCar.startDrivingProcess();
    // Then
    expect(console.log).toBeCalledWith("vroom");
    expect(console.log).toBeCalledWith("beep...");
    expect(objCar.tires).toBe(4)
  });

  test("drive method", () => {
    //Given
    const objCar = new Car(4, "Green");
    //When
    objCar.drive();
    // Then
    expect(console.log).toBeCalledWith("vroom");
  });
});
