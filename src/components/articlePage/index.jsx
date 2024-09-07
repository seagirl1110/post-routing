import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.css';

function ArticlePage({ articles }) {
  const { id } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const article = articles.find((item) => (item.id = id));

  return (
    <div className={styles.article_container}>
      <h2 className={styles.title}>
        Статья {article.id}: {article.title}
      </h2>
      <p>{article.body}</p>
      <p className={styles.path}>Текущий путь: {pathname}</p>
      <button className={styles.btn} onClick={() => navigate('/articles')}>
        Назад
      </button>
    </div>
  );
}

ArticlePage.propTypes = {
  articles: PropTypes.array,
};

export default ArticlePage;
