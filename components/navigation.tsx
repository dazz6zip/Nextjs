"use client";
// 컴포넌트와 페이지들은 전부 BackEnd에서 가져옴

// rendering : react 코드를 브라우저가 이해 가능한 html로 변환
// react : csr (클라이언트가 요소 구축)
//         기존에 빈 화면이고 브라우저가 JavaScript를 가져와 출력함
//         대체로 검색 엔진에서는 HTML을 읽기 때문에 이런 방식은 검색에 걸리지 않음
// Next.js : ssr (사용자에게 HTML을 주기 전에 server에서 render)
//           경로 접속시 서버에 요청, response로 html 반환함
//           사용자 페이지 접근시 JavaScript에 의존하지 않음

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🍅" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
          {path === "/about-us" ? "🍅" : ""}
        </li>
      </ul>
    </nav>
  );
}
