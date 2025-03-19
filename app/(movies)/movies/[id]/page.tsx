export default async function MovieDetail({ params, searchParams }) {
  const { id } = await params;

  return <h1>Movie {id}</h1>;
}
