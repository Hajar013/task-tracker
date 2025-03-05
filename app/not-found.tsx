import Link from "next/link";

export default function NotFound() {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-red-600">Task Not Found 😢</h1>
        <p className="text-lg text-gray-600 mt-2">Sorry, the task you're looking for doesn't exist.</p>
        <Link href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          ⬅ Back to Homepage
        </Link>
      </div>
    );
  }
  