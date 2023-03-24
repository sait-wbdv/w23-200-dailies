export const load = async ({fetch, params}) => {
  const response = await fetch(`https://api.disneyapi.dev/characters/${params.id}`);
  const disneyData = await response.json();

  return {
    character: disneyData
  }
}