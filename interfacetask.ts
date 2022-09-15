let data = new Map();
data.set("firstName", "Homa");
data.set("middleName", "Kiran");
data.set("lastName", "Kondisetty");
let a: string = data.get("Homa");
console.log(data.get("Kiran"));
console.log(a);
for (var item of data) {
  console.log(item);
}


//    abstract class Mydatastore{

//        private data: Map<string, string>;
//         constructor(
//             data = new Map<string, string>()) {
//                 this.data=data;
//             }
//         public set(key: string, value:string){
//             this.data.set("Homa",  "age 25");
//             this.data.set("Kiran", "age 26");
//             this.data.set("uva", "age 30");
//             this.data.set("gopi", "age 31");
//             this.data.set("srinivas", "age 30");
//             console. log (this.data);
//         }
//         public get(key: string): string {
//             console.log(this.data.get("Homa"));
//             this.data.has("kondisetty");
//             return "No";
//         }
//         public delete(key: string) {
//             this.data.delete("Kiran")
//         }
//    }

//    class myData extends Mydatastore{
//     constructor(data: Map<string,string>){
//         super();
//     }
//  }

//  let about= new myData();
// about.get("Homa"); //James
