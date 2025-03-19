"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const path = usePathname();
  const [count, setCount] = useState(0);
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? " 🍅" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
          {path === "/about-us" ? " 🍅" : ""}
        </li>
        {/* a 태그를 클릭할 경우 link component가 처리하여 새로고침하지 않음 */}
        <li>
          <button onClick={() => setCount((c) => c + 1)}>{count}</button>
          {/* 출력 초기 (JavaScript가 로드되기 전) 에는 단순한 HTML 이기 때문에 작동하지 않음 */}
        </li>
      </ul>
    </nav>
  );
}
