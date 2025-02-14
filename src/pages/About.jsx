
const About = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center text-gray-800">Our Mission</h1>
      <p className="mt-4 text-xl text-center text-gray-600">
        At Supportive Talks, we aim to provide a space where honest conversations foster healing, growth, and community. We discuss challenging topics with grace, humor, and vulnerability.
      </p>
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Meet the Hosts</h2>
        <div className="mt-6 flex justify-center">
          <div className="w-1/3 p-4">
            <img
              src="host_image.jpg"
              alt="Host 1"
              className="rounded-full mx-auto"
            />
            <p className="mt-2 text-lg font-medium">Host 1 Name</p>
            <p className="text-gray-500">Short bio of Host 1.</p>
          </div>
          <div className="w-1/3 p-4">
            <img
              src="host_image.jpg"
              alt="Host 2"
              className="rounded-full mx-auto"
            />
            <p className="mt-2 text-lg font-medium">Host 2 Name</p>
            <p className="text-gray-500">Short bio of Host 2.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
