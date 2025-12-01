"use client";

import React from "react";

interface ArticleCardProps {
  title: string;
  summary: string;
  cover?: string;
  publishedAt: string;
}

export default function ArticleCard({
  title,
  summary,
  cover,
  publishedAt,
}: ArticleCardProps) {
  return (
    <div className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition">
      {cover && (
        <img
          src={cover}
          alt={title}
          className="w-full h-48 object-cover rounded-xl mb-3"
        />
      )}

      <h2 className="text-xl font-semibold mb-1">{title}</h2>

      <p className="text-sm text-gray-600 mb-2">{summary}</p>

      <span className="text-xs text-gray-400">
        {new Date(publishedAt).toLocaleDateString("pt-BR")}
      </span>
    </div>
  );
}