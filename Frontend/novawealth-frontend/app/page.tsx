// import React from 'react'

// const page = () => {
//   return (
//     <div className='bg-[#0A1226] p-4 rounded-xl border border-[#1A253A]'>
//       <h1 className='text-2xl font-semibold leading-tight text-[#F2F4F7]'>NovaWealth</h1>
//       <p>Welcome to NovaWealth!</p>
//     </div>
//   )
// }

// export default page

// app/page.tsx
export default function Home() {
  return (
    <section className="max-w-5xl mx-auto py-24 px-4">
      <h1 className="text-5xl font-bold leading-tight text-gray-900 dark:text-[#F2F4F7] mb-4">
        Build wealth with knowledge.
      </h1>

      <p className="text-lg leading-relaxed text-gray-600 dark:text-[#D9DEE7] max-w-2xl">
        Insights on finance, software engineering, investing and long-term growth —
        written for developers by developers.
      </p>

      <div className="mt-8">
        <a
          href="/blog"
          className="inline-block bg-[#0A1226] dark:bg-[#F2F4F7] text-white dark:text-[#0A1226] px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-[#D9DEE7] transition"
        >
          Read the Blog
        </a>
      </div>
    </section>
  );
}
