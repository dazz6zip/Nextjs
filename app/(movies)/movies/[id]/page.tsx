import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log(`start fetching`);
  // Promise.all -> 동시에 await
  const [movie, video] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log(`end fetching`);
  // 기존 코드는 순차적으로 실행됨 (movie 이후 video 로드)
  // Promise.all 사용으로 병렬 실행 처리

  return <h1>{movie.title}</h1>;
}
