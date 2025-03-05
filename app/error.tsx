'use client'

interface IProps{
    error :Error;
    reset:()=>void;
}
const Error =(props:IProps)=>{
return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-2xl font-bold text-red-600">⚠️ Something went wrong!</h1>
      <p className="text-gray-600 mt-2">Please try again or refresh the page.</p>

      <div className="mt-4 flex gap-4">
        <button
          onClick={() => props.reset()}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          🔄 Try Again
        </button>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700"
        >
          🔃 Refresh Page
        </button>
      </div>
    </div>

);
}
export default Error