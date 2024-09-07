import { useLocation, useNavigate } from 'react-router-dom';

function ArticlesPage({ articles }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Список статей</h2>
      <ul>
        {articles.map((article, index) => (
          <li onClick={() => navigate(`${pathname}/${index + 1}`)} key={index}>
            Статья {article.id}: {article.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticlesPage;
