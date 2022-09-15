/*
  Abstract class: Cannot create an instance all we can do is inheritance
  Map data structure:
    - Object 
	  - Holds key-value pairs 
	  - Remembers insertion order
 	  - Both primitive () and object types can be used as either a key or a value 
	  - Key is unique, which can occur only once 

    Advantages over an JSObject: 
      - Can be directly iterated using for…of  Vs need to use 
      - Length of map using size Vs need Object.keys().length
      - Remembers insertion order Vs Object sorts the properties 
      - More performance while frequent adding/removing of key-value pairs Vs less 
      - Effective on Big data chucks Vs effective on small data chunks
*/
// Parent class
export abstract class MyDatastore {
  //private data: Map<string, string>;
  private data = new Map<string, string>();
  constructor() {
    this.data = new Map<string, string>();
  }
  public set(key: string, value: string) {
    this.data.set(key, value);
  }
  // what should happen if we get a key that's not in the map?
  public get(key: string) {
    const hasKey = this.data.has(key);
    if(!hasKey) throw new Error(`Invalid key: ${key}`);
    return this.data.get(key)
  }
  // what should happen if we get a key that's not in the map?
  public getAll(keys: string[]): string[] {
    const result: string[] = [];
    keys.forEach((key) => {
      const value = this.data.get(key);
      if (value) {
        result.push(value);
      }
    });
    return result;
  }
  //delete operation is performing below
  public delete(key: string) {
    this.data.delete(key);
  }
}

// Derived class
export class derivedDataStore extends MyDatastore {}
const myclass = new derivedDataStore();

// myclass.set("firstName", "Homa");
// myclass.set("middleName", "Kiran");
// myclass.set("lastName", "Kondisetty");

// console.log(myclass.get("firstName"));

// console.log(myclass.get("asghcdg")); // Stopped here 

// const alldata = myclass.getAll(["firstName", "middleName", "lastName"]);
// console.log(`${alldata}`);
// myclass.delete("firstName");
// console.log(myclass.get("firstName"));
