import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Episodes from './pages/Episodes';
import Submit from './pages/Submit';
import Forum from './pages/Forum';
import Resources from './pages/Resources';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul className="flex justify-center space-x-4">
            <li><Link to="/" className="text-xl">Home</Link></li>
            <li><Link to="/about" className="text-xl">About</Link></li>
            <li><Link to="/episodes" className="text-xl">Episodes</Link></li>
            <li><Link to="/submit" className="text-xl">Submit</Link></li>
            <li><Link to="/forum" className="text-xl">Forum</Link></li>
            <li><Link to="/resources" className="text-xl">Resources</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
