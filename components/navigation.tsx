"use client";
// 정적 HTML 파일 로드 후 동적 요소 로드 과정은 이 문구가 기재되어 있어야만 발생함
// 해당 components가 client에서 interactive 해야 한다는 선언
// BackEnd에서 Render 되고 FrontEnd에서 hydrate 된다는 것 (Not Only CSR)
// 이 문구가 없을 경우 Server Component 가 됨
// 브라우저가 선택적으로 JS 로드하므로 효율적 (속도 및 성능 측면에서 좋음)

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
