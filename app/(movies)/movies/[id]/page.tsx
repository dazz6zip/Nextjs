// react route 에서 :id 하듯 폴더 이름 [id] 로 사용
export default async function MovieDetail({ params, searchParams }) {
  const { id } = await params;
  console.log("params : ", { id });
  console.log("searchParams : ", await searchParams);
  // searchParams : ex value?region=kr -> {region:'kr'}

  return <h1>Movie {id}</h1>;
}
