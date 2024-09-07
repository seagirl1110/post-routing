import { useLocation, useParams } from 'react-router-dom';

function ArticlePage() {
  const { id } = useParams();
  const { pathname } = useLocation();

  return (
    <div>
      <h2>Статья {id}</h2>
      <p>Содержание статьи {id}</p>
      <p>Текущий путь: {pathname}</p>
    </div>
  );
}

export default ArticlePage;
