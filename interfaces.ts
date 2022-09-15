interface Reportable {
    summary(): string;
  }
  
  const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
      return `Name: ${this.name}`;
    },
  };
  
  const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
      return `My drink has ${this.sugar} grams of sugar`;
    },
  };
  
  const printSummary = (item: Reportable): void => {
    console.log(item.summary());
  };

  const employeeData = {
    data: [
      { firstName: "Homa", middleName: "Kiran", lastName: "Kondisetty" },
      { firstName: "Austin", middleName: "", lastName: "Ely" }
    ],
  };
  
  printSummary(oldCivic);
  printSummary(drink);
  