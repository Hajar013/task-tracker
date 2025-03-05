"use client";

import { notFound, useParams, useRouter } from "next/navigation";
import { fetchTasks } from "@/services/tasks.service";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Loading from "@/app/Loading";

const TaskDetails = () => {
  const router = useRouter();
  const { id } = useParams();
  const [copyStatus, setCopyStatus] = useState<string | null>(null);
  const [task, setTask] = useState<Tasks.ITask | null>(null);
  const [loader, setLoader] = useState<Boolean>(true);
  useEffect(() => {
    setLoader(true);
    fetchTask(Number(id));
  }, []);

  async function fetchTask(id: number) {
    if (typeof id !== "number" || isNaN(id) || id <= 0) {
      router.push("/not-found");
      return;
    }
    try {
      const task: Tasks.ITask = (await fetchTasks(id)) as Tasks.ITask;
      if (!task) {
        router.push("/not-found");
        return;
      }
      setTask(task);
    } catch {
      router.push("/not-found");
      return;
    }finally{
      setLoader(false);
    }
  }

  async function copyToClipboard() {
    try {
      if (task) {
        setLoader(true);
        await navigator.clipboard.writeText(task.todo);
        setCopyStatus("Copied! ✅");
      }
    } catch (err) {
      console.error("Failed to copy:", err);
      setCopyStatus("Failed to copy ❌");
    } finally {
      setLoader(false);
      setTimeout(() => setCopyStatus(null), 2000);
    }
  }

  return (
    loader?<Loading/>:(
    task !== null && (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="border-2 border-[#7880FF] bg-white p-6 rounded-lg shadow-md w-full max-w-lg text-center">
          <h2 className="text-2xl font-bold text-[#7880FF]">Task #{task.id}</h2>
          <p className="text-lg text-gray-600 mt-2">{task.todo}</p>

          <p className="mt-3 text-lg">
            Status:{" "}
            <span
              className={
                task.completed
                  ? "text-green-600 font-bold"
                  : "text-yellow-600 font-bold"
              }
            >
              {task.completed ? "Completed " : "Pending "}
            </span>
          </p>
          <p className="mt-2 text-lg">
            Priority:{" "}
            <span
              className={`px-3 py-1 rounded-full text-white font-bold ${
                task.priority === "High"
                  ? "bg-red-500"
                  : task.priority === "Medium"
                  ? "bg-yellow-500"
                  : "bg-green-500"
              }`}
            >
              {task.priority}
            </span>
          </p>
          <Image
            src={
              "data:image/png;base64,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"
            }
            alt="Task "
            width={50}
            height={50}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,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"
            className="mt-3"
          />
          <div className="mt-4">
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
            >
              📋 Copy Task Title
            </button>
            {copyStatus && (
              <span
                className={`ml-2 font-medium ${
                  copyStatus.includes("✅") ? "text-green-600" : "text-red-600"
                }`}
              >
                {copyStatus}
              </span>
            )}
          </div>

          <div className="mt-6">
            <Link
              href="/"
              className="text-blue-600 hover:underline flex items-center justify-center"
            >
              ⬅ Back to Tasks
            </Link>
          </div>
        </div>
      </div>
    )
  )
  );
};
//as server component
// import { getTask } from "@/services/tasks.service";
// import Link from "next/link";
// import { notFound } from "next/navigation";

// interface IProps{
//     params:Promise<{id:number}>
// }
// const TaskDetails= async(props:IProps)=>{
//     const id=( await props.params).id;
//     const task =await getTask(id);
//     if (!task ) return notFound();
//     return (
// <div>
//     <h2>Task #{task.id}</h2>
//     <p>{task.todo}</p>
//     <p className="mt-2">
//         Status:{" "}
//         <span className={task.completed ? "text-green-600 font-bold" : "text-yellow-600 font-bold"}>
//           {task.completed ? "Completed ✅" : "Pending ⏳"}
//         </span>
//       </p>
// <div>
//     <Link href="/"
//     >
//         ⬅ Back to Tasks
//     </Link>
// </div>
// </div>
//     );

// }
export default TaskDetails;
