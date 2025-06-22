import { Routes, Route } from 'react-router-dom';
import './css/App.css'
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';

function App() {
  const movieNumber = 1;
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}
export default App
