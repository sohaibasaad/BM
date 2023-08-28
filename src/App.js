import { Route, Navigate, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Sections/Header/Header';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from './Components/Sections/Footer/Footer';

function App() {
  // const location = useLocation();
  // const { pathname } = location;
  // const noHeaderPaths = ['/login', '/logout'];
  // const showHeader = !noHeaderPaths.includes(pathname);

  return (
    <div>
      {/* {showHeader && <Header />} */}
      <Header />
      <Routes>
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about-us" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
