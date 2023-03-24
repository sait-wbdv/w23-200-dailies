<script>
  export let data;
</script>

<section>
  <h1>{data.character.name}</h1>
  <p><a href="{data.character.url}" target="_blank">More info</a></p>
  <img src="{data.character.imageUrl}" alt="{data.character.name}">

  {#if data.character.films.length}
  <h2>Films</h2>
  <ul>
    {#each data.character.films as film}
      <li>{film}</li>
    {/each}
  </ul>
  {/if}

  {#if data.character.shortFilms.length}
  <h2>Short Films</h2>
  <ul>
    {#each data.character.shortFilms as shortFilm}
      <li>{shortFilm}</li>
    {/each}
  </ul>
  {/if}

  {#if data.character.tvShows.length}
  <h2>TV Shows</h2>
  <ul>
    {#each data.character.tvShows as tvShow}
      <li>{tvShow}</li>
    {/each}
  </ul>
  {/if}

  {#if data.character.videoGames.length}
  <h2>Video Games</h2>
  <ul>
    {#each data.character.videoGames as videoGame}
      <li>{videoGame}</li>
    {/each}
  </ul>
  {/if}

  {#if data.character.parkAttractions.length}
  <h2>Park Attractions</h2>
  <ul>
    {#each data.character.parkAttractions as parkAttraction}
      <li>{parkAttraction}</li>
    {/each}
  </ul>
  {/if}
</section>
