"use client";
import { useEffect, useState } from "react";
import styles from "./MeowArticle.module.css";

export default function MeowArticle() {
  const [text, setText] = useState("데이터 준비중...");

  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com")
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);

  return <article className={styles.article}>{text}</article>;
}
// SSG : 서버에서 정적으로 생성됨
// ISR : 서버에서 주기적으로 업데이트됨
// SSR : 서버에서 요청시마다 렌더링됨
// CSR : 클라이언트에서 렌더링됨

/* 
  fetch("https://meowfacts.herokuapp.com", {
    next: { revalidate: 3 },
     cache:'no-store'
  });
   revalidate를 0으로하면 SSG가 된다. 페이지를 새로고침 할 때마다 SSG됨
  
  <revalidate 관련>
    https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
*/
