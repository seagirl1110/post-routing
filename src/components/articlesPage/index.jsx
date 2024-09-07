const articles = [1, 2, 3, 4, 5];

function ArticlesPage() {
  return (
    <div>
      <h2>Список статей</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>Статья {article}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArticlesPage;
