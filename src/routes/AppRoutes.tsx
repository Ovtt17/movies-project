import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import FavoriteMovies from '../components/movie/FavoriteMovies';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<FavoriteMovies />} />
    </Routes>
  );
}

export default AppRoutes;