import { Route, Navigate, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Sections/Header/Header';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from './Components/Sections/Footer/Footer';
import ContactUs from './Pages/ContactUs';

function App() {
  const location = useLocation();
  const { pathname } = location;
  const noHeaderPaths = ['/home'];
  const addClassToHeader = !noHeaderPaths.includes(pathname);

  return (
    <div>
      {/* {showHeader && <Header />} */}
      <Header isHeaderDark={addClassToHeader} />
      <Routes>
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about-us" element={<About />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
