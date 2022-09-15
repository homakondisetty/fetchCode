import axios from "axios";
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
axios.get("https://jsonplaceholder.typicode.com/todos/1").then((obj) => {
  const rawData = obj.data as Todo;
  console.log(`Completed ${rawData.completed}`);
});
