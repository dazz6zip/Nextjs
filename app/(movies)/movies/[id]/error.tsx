"use client";
// error 파일에는 반드시 use client 구문 추가

// 페이지는 굴러가지 않더라도 앱 자체는 굴러가야 하므로 에러 처리는 필수!
// 현재 위치 폴더 (movie/:id 경로) 내에만 작동

export default function ErrorOMG() {
  return <h1>lol somthing broke...</h1>;
}
