export enum Priority {
  High = "High",
  Medium = "Medium",
  Low = "Low",
}
export async function fetchTasks(id?: number){

  const url = id 
  ? `https://dummyjson.com/todos/${id}`
  : "https://dummyjson.com/todos?limit=5" ;

const res= await fetch(url,{ method :"get", cache:"no-store"});

 const priorities: Priority[] = [Priority.High, Priority.Medium, Priority.Low];

if (!res.ok) {
  throw new Error(`Failed to fetch ${id !== undefined ? `task ${id}` : "tasks"}`);
}

const data =(await res.json());

if(id){
  return {...data,priority: getRandomPriority(id)} as Tasks.ITask;
}
else{
    const tasksRes = data as Tasks.IResponse;
    return tasksRes.todos.map((task: Tasks.IResponseTask) => ({
      id: task.id,
      todo: task.todo,
      completed: task.completed,
      priority: getRandomPriority(task.id),
  }));
    
}
}
function getRandomPriority(id: number): Priority {
  if(id % 3 == 1) return Priority.High;
  else if(id % 3 == 2) return Priority.Medium;
  else return Priority.Low;
}

// export async function getTasks() {
//   const res = await fetch("https://dummyjson.com/todos?limit=5", {
//     method: "get",
//     cache: "no-store",
//   });
//   const tasksRes = (await res.json()) as Tasks.IResponse;

//   if (!res.ok) throw new Error("Failed tto fetch tasks ");
//   console.log(tasksRes);
//   let tasks: Tasks.ITask[] = [];

//   tasks = tasksRes.todos.map((task: Tasks.ITask) => ({
//     id: task.id,
//     todo: task.todo,
//     completed: task.completed,
//   }));

//   return tasks;
// }
// export async function getTask(id: number) {
//   const res = await fetch(`https://dummyjson.com/todos/${id}`, {
//     method: "get",
//     cache: "no-store",
//   });
//   if (!res.ok) return null; // Handle invalid IDs
//   const taskRes =(await res.json())as Tasks.ITask;
//   return taskRes;
// }