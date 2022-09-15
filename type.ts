/* Types
There are two different types in 
    a.	Primitive types – String, number, Boolean, null, undefined, void, symbol
    b.	Object types – Object, class, function, arrays  etc.

Type Annotation Vs Type Inference: 
    a.	Type Annotation: Developer says typescript the type 
    b.	Type inference: Typescript guesses the type */

// Type annotations for different primitive types
const Name: string = "Homa";
const age: number = 26;
const happy: boolean = true;
const nothing: null = null;
const nothing2: undefined = undefined;

// Class
class Cars {}
// Obejcts
let c: Cars = new Cars();

// Arrays
let carMake: string[] = ["Toyota", "Ford", "Tesla"];
let carNumber: number[] = [11, 12, 13];
let carCondition: boolean[] = [true, false, true]

// Object literal
let obj: { x: number; y: string } = { x: 10, y: "Hello" };
console.log(obj);

// function (Little diffrent in terms of annotation)
let addition: (a: number, b: number) => void = (a: number, b: number) => a + b;


/*  When to use type annotations
    a. Declare var on one line and initialize on another 
    b. Var type can't be inferred 
    c. When a function resturn `any`
*/
const jsonString = '{ "x": 10, "y": "Hello" }';
// const pasrsedJson = JSON.parse(jsonString); // pasrsedJson - type `any` 
const pasrsedJson: {x: number, y: string} = JSON.parse(jsonString);
