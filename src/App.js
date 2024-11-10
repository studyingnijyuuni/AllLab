import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import MyHeader from './Lab7.1/Header.js'
import MyContent from './Lab7.1/Content.js';
import MyImage from './Lab7.1/Image.js'

import MyGallery from './Lab7.2/GoodsGallery.js'

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Lab7.1</Link>
        ---------Або---------
        <Link to="/Lab7.2">Lab7.2</Link>
      </nav>
      <Routes>
        <Route path="/" element={
          <div class="Lab7.1">
            <MyHeader />
            <MyContent />
            <MyImage />
          </div>
          } />
        <Route path="/Lab7.2" element={<div><MyGallery /></div>} />
      </Routes>
    </Router>
    
  );
}

export default App;
