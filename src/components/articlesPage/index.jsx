import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

function ArticlesPage({ articles }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.articles_container}>
      <h2 className={styles.title}>Список статей</h2>
      <ul className={styles.articles_list}>
        {articles.map((article, index) => (
          <li
            className={styles.articles_item}
            onClick={() => navigate(`${pathname}/${index + 1}`)}
            key={index}
          >
            Статья {article.id}: {article.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

ArticlesPage.propTypes = {
  articles: PropTypes.array,
};

export default ArticlesPage;
