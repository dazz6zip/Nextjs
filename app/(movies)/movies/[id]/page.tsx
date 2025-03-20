import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // const [movie, video] = await Promise.all([getMovie(id), getVideos(id)]);
  // 기존 방식은 movie, video 모두 fetching 이 완료되어야 화면 출력됨
  // movie-info / movie-videos 로 component 분리

  // Suspense : 하위 Component 를 fetch 하는 동안 await, 로딩 메시지 출력 (fallback)
  // 병렬 처리하되 render 완료되면 먼저 출력됨!

  // Suspense 가 await 처리를 해 주기 때문에 동일 폴더 내 loading 은 작동하지 않음
  // -> fetch await 하는 info, video components는 분리되었기 때문
  return (
    <div>
      <h3>Movie detail page</h3>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id}></MovieInfo>
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id}></MovieVideos>
      </Suspense>
    </div>
  );
}
