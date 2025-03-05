import Link from "next/link";
import Image from "next/image";

interface IProps {
  task: Tasks.ITask;
}

export default function TaskItem(props: IProps) {
  return (
    <li className="p-4 bg-white shadow-md border-2 border-[#7880FF] rounded-lg flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold">{props.task.todo}</h2>
        <p
          className={`text-sm ${
            props.task.completed ? "text-green-600" : "text-yellow-600"
          }`}
        >
          {props.task.completed ? "Completed " : "Pending "}
        </p>
        <p className="mt-2 text-lg">
            Priority:{" "}
            <span
              className={`px-3 py-1 rounded-full text-white font-bold ${
                props.task.priority === "High"
                  ? "bg-red-500"
                  : props.task.priority === "Medium"
                  ? "bg-yellow-500"
                  : "bg-green-500"
              }`}
            >
              {props.task.priority}
            </span>
          </p>

        <Image
          src={
            props.task.completed
              ? "https://media.istockphoto.com/id/2188825511/photo/check-mark-icon-on-green-bubble-symbol-element-3d-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=SPhVxm1OU4ioiOLr7P0I_Z07mCDb7jyul9iB3AqUKts="
              : "https://plus.unsplash.com/premium_vector-1731582098306-11e5a1d604ad?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Task Status"
          width={50}
          height={50}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,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"
          className="mt-3"
        />
      </div>
      <div className="flex gap-4">
        <Link
          href={`/task/${props.task.id}`}
          className="text-blue-500 hover:underline"
        >
          View Details →
        </Link>
      </div>
    </li>
  );
}
