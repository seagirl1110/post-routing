import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage';
import ArticlesPage from './components/articlesPage';
import ArticlePage from './components/articlePage';
import NavComponent from './components/navComponent';

const articles = [
  {
    id: 1,
    title: 'His mother had always taught him',
    body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
  },
  {
    id: 2,
    title: 'He was an expert but not in a discipline',
    body: 'He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.',
  },
  {
    id: 3,
    title: 'Dave watched as the forest burned up on the hill.',
    body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
  },
  {
    id: 4,
    title: 'All he wanted was a candy bar.',
    body: "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
  },
  {
    id: 5,
    title: 'Hopes and dreams were dashed that day.',
    body: "Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.",
  },
];

function App() {
  return (
    <div className="App">
      <div className="center_container">
        <NavComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/articles"
            element={<ArticlesPage articles={articles} />}
          />
          <Route
            path="/articles/:id"
            element={<ArticlePage articles={articles} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
