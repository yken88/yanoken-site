import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import styles from './style';
import { Navbar, Hero, Skills, Footer } from './components';
import { Blogs } from './components/pages/Blogs';
import { Home } from './components/pages/Home';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Router>    
    </div>
  )
}

export default App
