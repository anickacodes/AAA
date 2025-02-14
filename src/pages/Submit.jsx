import { useState } from "react";

const Submit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
  };

  return (
    <div id="submit" className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center text-gray-800">Submit Your Story</h1>
      {submitted ? (
        <div className="text-center">
          <h2 className="text-lg font-semibold text-green-600">Thank you for your submission!</h2>
          <p>We will review your submission and get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Your Story or Question"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          ></textarea>
          <button type="submit" className="bg-yellow-500 text-white py-3 px-6 rounded-lg">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Submit;
