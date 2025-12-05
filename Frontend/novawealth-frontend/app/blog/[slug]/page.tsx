import { notFound } from "next/navigation";

const STRAPI_URL = "http://localhost:1337";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const res = await fetch(
    `${STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`,
    { next: { revalidate: 120 } }
  );

  if (!res.ok) return notFound();

  const data = await res.json();
  const article = data.data?.[0];

  if (!article) return notFound();

  const cover = article.coverImage?.url
    ? `${STRAPI_URL}${article.coverImage.url}`
    : undefined;

  return (
    <article className="max-w-3xl mx-auto p-6">
      {cover && (
        <img src={cover} alt={article.title} className="rounded-xl mb-6" />
      )}

      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

      <p className="text-sm text-gray-500 mb-8">
        {new Date(article.publishedAt).toLocaleDateString("pt-BR")}
      </p>

      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </article>
  );
}