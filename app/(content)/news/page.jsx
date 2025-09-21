"use client";

import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [news, setNews] = useState();

  useEffect(() => {
    async function fetchNews() {
      const respone = await fetch("http://localhost:8080/news");
      const news = await respone.json();

      setNews(news);
    }

    fetchNews();
  }, []);

  let newsContent;

  if (news) {
    return <NewsList news={news} />;
  }

  return (
    <>
      <h1>This is news page</h1>
      {newsContent}
    </>
  );
}
