// load function is built-in to SvelteKit
// fetch is also provided by SvelteKit and must be in an async function
export const load = async ({ fetch }) => {

  // fetch must have `await` in front of it
  const response = await fetch(`https://api.disneyapi.dev/characters`);

  // `.json()` converts raw JSON to a regular JS object
  // `.json()` must also always have await in front of it
  const disneyData = await response.json();

  // return values must always be wrapped in a object
  return {
    // `characters` can be a name of your choice
    // `disneyData` has to match the variable above
    // `data` was chosen by Disney API nerds
    characters: disneyData.data
  }
}