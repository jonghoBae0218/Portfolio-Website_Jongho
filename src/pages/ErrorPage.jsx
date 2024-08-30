import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 py-8">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4">Oops!</h1>
        <p className="text-xl mb-6">Sorry, an unexpected error has occurred.</p>
        <p className="text-lg italic mb-8">
          <i>{error.statusText || error.message}</i>
        </p>
        <a
          href="/"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
