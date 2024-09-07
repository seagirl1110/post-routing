import './App.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import HomePage from './components/homePage';
import ArticlesPage from './components/articlesPage';
import ArticlePage from './components/articlePage';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/articles">Статьи</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
