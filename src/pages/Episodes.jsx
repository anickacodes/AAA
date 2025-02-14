
const Episodes = () => {
  const episodes = [
    {
      title: "Episode 1: Mental Health Awareness",
      description: "In this episode, we talk about mental health and how to navigate challenges.",
      link: "/episode-1",
    },
    {
      title: "Episode 2: Overcoming Art Blocks",
      description: "This episode discusses how artists can overcome creative blocks.",
      link: "/episode-2",
    },
  ];

  return (
    <div id="episodes" className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center text-gray-800">Episodes</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {episodes.map((episode, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4 hover:bg-gray-100">
            <h3 className="text-xl font-semibold">{episode.title}</h3>
            <p className="mt-2 text-gray-600">{episode.description}</p>
            <a
              href={episode.link}
              className="mt-4 text-yellow-500 font-medium"
            >
              Listen Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Episodes;
