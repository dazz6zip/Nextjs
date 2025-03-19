import Navigation from "../components/navigation";

export default function Page() {
  // 서버에서 모든 Page, Component를 정적 HTML 생성
  // use client가 기재된 component에 대해 hydrate
  // hydrate : 정적 HTML 를 interative 한 React Component로 바꾸는 것

  // 사용자가 다운받아야 하는 JS 코드의 양이 줄어듦

  // server component 안에 client component -> 가능
  // client component 안에 server component -> 불가능

  // DB 통신 가능!!
  // API key를 사용해서 fetch
  // use client를 기재하지 않을 경우 ssr만 실행되기 때문에 client에 가지 않음
  // -> DB 통신도 보안 문제 없이 가능하다는 뜻

  return (
    <div>
      <Navigation />
      <h1>Hello!</h1>
    </div>
  );
}
