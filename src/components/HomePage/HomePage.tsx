import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-4 text-center pt-40">
      <div className="h-screen-100px flex flex-col justify-center items-center">
        <h1
          className="text-5xl font-bold mb-4 md:text-8xl 
        "
        >
          Hi,
        </h1>
        <h2 className="text-3xl mb-6 md:text-6xl">Welcome to Bridge App</h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold md:py-4 md:px-6 px-4 py-2 rounded text-2xl md:text-4xl"
          onClick={() => {
            navigate("/bridge");
          }}
        >
          Get Started Now!
        </button>
      </div>
    </div>
  );
}
