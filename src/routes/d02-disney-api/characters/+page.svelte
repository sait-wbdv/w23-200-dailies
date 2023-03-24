<script>
  // The object returned from +page.js MUST be called `data`
  export let data;
  console.log(data.characters);
</script>

<h1>Disney Characters</h1>
<ul>
  {#each data.characters as character}
  <a href="/d02-disney-api/characters/{character._id}">
    <article>
      <img src="{character.imageUrl}" alt="{character.name}">
      <h3>{character.name}</h3>
    </article>
  </a>
  {/each}
  </ul>

  <style>
    ul {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 2rem;
    }

    h3 {
      padding: 0 1rem;
    }

    a {
      display: block;
      border: 1px solid black;
      background-color: #eee;
      text-decoration: none;
      color: black;
    }
    a:hover {
      background-color: azure;
      transform: scale(1.1);
      transition: transform 100ms ease-out;
    }

    img {
      display: block;
    }
    
  </style>