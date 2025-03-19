export const metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

// server에서 api url 접근한 것이기 때문에
// 브라우저 Network 상으로도 접근하지 않음!!!!
async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  // 로딩 상태가 화면에 최대한 빨리 보여야 하는데 현재는 그렇지 않음
  const response = await fetch(URL);
  // 처음 fetch만 api 에 요청해서 캐싱
  // 그 이후에는 기억된 데이터를 보여줌
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}
