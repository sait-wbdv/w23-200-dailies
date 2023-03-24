<script>
  // imported variables usually need to be wrapped in {}
  import Card from './Card.svelte';

  export let data;
</script>

<main>
  <h1>List of Adventurers</h1>
  <section>
    {#each data.players as player}
      <a href="{data.route.id}/{player.id}">
        <Card {player} />
      </a>
    {/each}
  </section>
</main>

<style>
  section {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  a {
    display: block;
    text-decoration: none;
    color: #444;
    border-radius: 1rem;
  }

  a:hover {
    background-color: ghostwhite;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.1), 
              0px 2px 2px rgba(0,0,0,0.1), 
              0px 4px 4px rgba(0,0,0,0.1), 
              0px 8px 8px rgba(0,0,0,0.1);
  }


</style>