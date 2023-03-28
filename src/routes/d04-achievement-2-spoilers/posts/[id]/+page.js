export const load = async ({ fetch, params }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const apiData = await response.json();

  return {
    post: apiData
  }
}