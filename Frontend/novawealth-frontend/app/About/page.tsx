// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 lg:px-8">
      {/* Header Section */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-[#F2F4F7] mb-6 leading-tight">
          About NovaWealth
        </h1>
        <p className="text-xl text-gray-600 dark:text-[#D9DEE7] leading-relaxed max-w-3xl mx-auto">
          Where finance meets technology. Building wealth through knowledge and smart decisions.
        </p>
      </header>

      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-[#F2F4F7] mb-6">
          Our Mission
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 dark:text-[#D9DEE7] leading-relaxed text-justify mb-6">
            NovaWealth was created with a simple belief: financial literacy and technological understanding 
            are the cornerstones of building sustainable wealth in the modern economy. We bridge the gap 
            between complex financial concepts and practical implementation through technology.
          </p>
          <p className="text-lg text-gray-700 dark:text-[#D9DEE7] leading-relaxed text-justify">
            Our content is crafted by developers and finance professionals who understand both the 
            technical and financial aspects of wealth building, offering unique insights that you 
            won't find elsewhere.
          </p>
        </div>
      </section>

      {/* What We Cover Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-[#F2F4F7] mb-6">
          What We Cover
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-[#F2F4F7] mb-3">
              📈 Investment Strategies
            </h3>
            <p className="text-gray-700 dark:text-[#D9DEE7] leading-relaxed">
              From traditional markets to cryptocurrency, we explore investment opportunities 
              with a data-driven approach.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-[#F2F4F7] mb-3">
              💻 Fintech & Tools
            </h3>
            <p className="text-gray-700 dark:text-[#D9DEE7] leading-relaxed">
              Reviews and tutorials on financial technology, trading platforms, 
              and wealth management tools.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-[#F2F4F7] mb-3">
              🔐 Security & Privacy
            </h3>
            <p className="text-gray-700 dark:text-[#D9DEE7] leading-relaxed">
              Protecting your digital assets and financial privacy in an increasingly 
              connected world.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-[#F2F4F7] mb-3">
              📚 Financial Education
            </h3>
            <p className="text-gray-700 dark:text-[#D9DEE7] leading-relaxed">
              Breaking down complex financial concepts into actionable insights 
              for developers and tech professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-[#F2F4F7] mb-6">
          Our Values
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-[#F2F4F7] mb-2">
              Transparency
            </h3>
            <p className="text-gray-700 dark:text-[#D9DEE7] leading-relaxed">
              We believe in open, honest communication about financial markets, risks, and opportunities.
            </p>
          </div>
          
          <div className="border-l-4 border-green-500 dark:border-green-400 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-[#F2F4F7] mb-2">
              Education-First
            </h3>
            <p className="text-gray-700 dark:text-[#D9DEE7] leading-relaxed">
              Every article is designed to teach, not just inform. We prioritize understanding over hype.
            </p>
          </div>
          
          <div className="border-l-4 border-purple-500 dark:border-purple-400 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-[#F2F4F7] mb-2">
              Long-term Thinking
            </h3>
            <p className="text-gray-700 dark:text-[#D9DEE7] leading-relaxed">
              We focus on sustainable wealth-building strategies rather than get-rich-quick schemes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-[#F2F4F7] mb-4">
          Ready to Start Building Wealth?
        </h2>
        <p className="text-gray-700 dark:text-[#D9DEE7] mb-6 leading-relaxed">
          Join our community of developers and tech professionals on the path to financial independence.
        </p>
        <a
          href="/blog"
          className="inline-block bg-[#0A1226] dark:bg-[#F2F4F7] text-white dark:text-[#0A1226] px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 dark:hover:bg-[#D9DEE7] transition"
        >
          Explore Our Articles
        </a>
      </section>
    </div>
  );
}