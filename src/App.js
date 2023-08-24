import { Route, Navigate, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Sections/Header/Header';
import Home from "./Pages/Home";

function App() {
  const location = useLocation();
  const { pathname } = location;
  const noHeaderPaths = ['/login', '/logout'];
  const showHeader = !noHeaderPaths.includes(pathname);

  return (
    <div>
      {showHeader && <Header />}
      <Routes>
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
