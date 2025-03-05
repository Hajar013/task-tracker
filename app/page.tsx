import { fetchTasks } from "@/services/tasks.service";
import TaskItem from "@/component/task-item";

export default async function Home() {
  
  const tasks:Tasks.ITask[] = await fetchTasks() as Tasks.ITask[];
  return (
    <div className="max-w-2xl mx-auto p-6">
    <h1 className="text-3xl font-bold m-6 text-center text-[#7880FF]"> Task Tracker 📌 </h1>
    <ul className="space-y-4">
      {tasks.map((task: Tasks.ITask) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  </div>

    // <div>
    //   <h1>Task Tracker</h1>      
    //   <ul>
    //     {tasks.map((task: Tasks.ITask) => (
    //       // <li key={task.id}>
    //       //   {task.todo} {task.completed ? "Completed ✅" : "Pending ⏳"}
    //       // </li>
    //       <li
    //         key={task.id}
    //         // className={`p-4 rounded-lg border ${task.completed ? "bg-green-100" : "bg-yellow-100"}`}
    //       >
    //         <Link href={`/task/${task.id}`} 
    //         // className="font-medium text-blue-600"
    //         >
    //           {task.todo} ({task.completed ? "Completed ✅" : "Pending ⏳"})
    //         </Link>
    //       </li>

    //     ))}
    //   </ul>
    // </div>
  );
}
