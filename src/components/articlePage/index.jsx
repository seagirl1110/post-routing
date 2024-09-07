import { useLocation, useNavigate, useParams } from 'react-router-dom';

function ArticlePage({ articles }) {
  const { id } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const article = articles.find((item) => (item.id = id));

  return (
    <div>
      <h2>
        Статья {article.id}: {article.title}
      </h2>
      <p>{article.body}</p>
      <p>Текущий путь: {pathname}</p>
      <button onClick={() => navigate('/articles')}>Назад</button>
    </div>
  );
}

export default ArticlePage;
