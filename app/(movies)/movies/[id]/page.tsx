import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: { id: string };
}

// 동적인 제목을 가지고 있는 페이지를 위해 존재
export async function generateMetadata({ params: { id } }: IParams) {
  // 캐시된 데이터를 사용하므로 api 재호출이 아님
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id}></MovieInfo>
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id}></MovieVideos>
      </Suspense>
    </div>
  );
}
