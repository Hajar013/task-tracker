const Loading = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="border-4 border-t-4 border-gray-300 border-t-blue-500 w-16 h-16 rounded-full animate-spin"></div>
      <h1 className="text-2xl font-bold text-blue-600 mt-4">🔄 Loading...</h1>
      <p className="text-gray-600 mt-2">Please wait while we load your content.</p>
    </div>
  );
}

export default Loading;
