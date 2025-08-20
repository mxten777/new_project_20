

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import RecommendPage from './pages/RecommendPage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <HomePage />
            </>
          } />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/recommend" element={<RecommendPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
