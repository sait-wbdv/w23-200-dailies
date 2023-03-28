export const load = async ({ fetch }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const apiData = await response.json();

  return {
    posts: apiData
  }
}