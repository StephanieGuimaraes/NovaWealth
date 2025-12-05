import { notFound } from "next/navigation";

const STRAPI_URL = "http://localhost:1337";

// Função para converter Rich Text do Strapi para HTML
function richTextToHtml(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return '';

  return blocks.map(block => {
    switch (block.type) {
      case 'paragraph':
        const text = block.children?.map((child: any) => {
          let content = child.text || '';
          if (child.bold) content = `<strong>${content}</strong>`;
          if (child.italic) content = `<em>${content}</em>`;
          if (child.underline) content = `<u>${content}</u>`;
          return content;
        }).join('') || '';
        return `<p class="mb-4 text-gray-800 dark:text-gray-200 leading-relaxed text-lg text-justify">${text}</p>`;
        
      case 'heading':
        const headingText = block.children?.map((child: any) => child.text).join('') || '';
        const level = block.level;
        const headingClasses = {
          1: 'text-4xl font-bold mb-6 mt-8 text-gray-900 dark:text-white',
          2: 'text-3xl font-bold mb-5 mt-7 text-gray-900 dark:text-white',
          3: 'text-2xl font-bold mb-4 mt-6 text-gray-900 dark:text-white',
          4: 'text-xl font-bold mb-3 mt-5 text-gray-900 dark:text-white',
          5: 'text-lg font-bold mb-3 mt-4 text-gray-900 dark:text-white',
          6: 'text-base font-bold mb-2 mt-3 text-gray-900 dark:text-white'
        };
        return `<h${level} class="${headingClasses[level as keyof typeof headingClasses] || headingClasses[3]}">${headingText}</h${level}>`;
        
      case 'list':
        const listTag = block.format === 'ordered' ? 'ol' : 'ul';
        const listClass = block.format === 'ordered' ? 'list-decimal pl-6 mb-4' : 'list-disc pl-6 mb-4';
        const listItems = block.children?.map((item: any) => {
          const itemText = item.children?.map((child: any) => {
            let content = child.text || '';
            if (child.bold) content = `<strong>${content}</strong>`;
            if (child.italic) content = `<em>${content}</em>`;
            return content;
          }).join('') || '';
          return `<li class="mb-2 text-gray-800 dark:text-gray-200 leading-relaxed">${itemText}</li>`;
        }).join('') || '';
        return `<${listTag} class="${listClass}">${listItems}</${listTag}>`;
        
      case 'quote':
        const quoteText = block.children?.map((child: any) => {
          let content = child.text || '';
          if (child.bold) content = `<strong>${content}</strong>`;
          if (child.italic) content = `<em>${content}</em>`;
          return content;
        }).join('') || '';
        return `<blockquote class="border-l-4 border-blue-500 dark:border-blue-400 pl-6 py-4 mb-6 bg-gray-50 dark:bg-gray-800 italic text-gray-700 dark:text-gray-300 text-lg rounded-r-md">${quoteText}</blockquote>`;
        
      default:
        return '';
    }
  }).join('');
}

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

  // Converter Rich Text para HTML
  const contentHtml = richTextToHtml(article.content);
  return (
    <article className="max-w-4xl mx-auto p-6 lg:p-8">
      {cover && (
        <div className="mb-8">
          <img 
            src={cover} 
            alt={article.title} 
            className="w-full h-auto rounded-lg shadow-lg object-cover max-h-96" 
          />
        </div>
      )}

      <header className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <time dateTime={article.publishedAt} className="font-medium">
            {new Date(article.publishedAt).toLocaleDateString("pt-BR", {
              weekday: 'long',
              year: 'numeric',
              month: 'long', 
              day: 'numeric'
            })}
          </time>
        </div>
      </header>

      <div 
        className="article-content"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}