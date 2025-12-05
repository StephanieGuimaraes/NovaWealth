import ArticleCard from "@/components/ArticleCard";

const STRAPI_URL = "http://localhost:1337";

async function getArticles() {
  const res = await fetch(
    `${STRAPI_URL}/api/articles?populate=*`,
    {
      next: { revalidate: 60 }, // revalida a cada 1 minuto
    }
  );

  const data = await res.json();
  console.log("Fetch: ", data);
  return data.data;
}

export default async function BlogPage() {
  const articles = await getArticles();
console.log("Fetch: ", articles);
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Articles</h1>

      {articles.length === 0 && (
        <p className="text-gray-600">Nenhum artigo encontrado.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article: any) => {
          //const attrs = article.attributes;
          console.log("Article Attributes: ", article.summary);
        //   const cover = attrs.cover?.data?.attributes?.url
        //     ? `${STRAPI_URL}${attrs.cover.data.attributes.url}`
        //     : undefined;

          return (
            <ArticleCard
              key={article.id}
              title={article.title}
              summary={article.summary}
              publishedAt={article.publishedAt}
              cover={article.coverImage.url ? `${STRAPI_URL}${article.coverImage.url}` : undefined}
              slug={article.slug}
            />
          );
        })}
      </div>
    </div>
  );
}