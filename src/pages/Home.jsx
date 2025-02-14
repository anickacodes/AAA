import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-purple-600 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold leading-tight">
          Welcome to Supportive Talks!
        </h1>
        <p className="mt-4 text-xl">Empowering conversations for the mind, heart, and soul.</p>
        <Link to="/episodes"
          className="mt-6 inline-block bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg"
        >
          Listen Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
