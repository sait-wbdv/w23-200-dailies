<script>
  import Card from '../Card.svelte';

  export let data;

</script>
<main>
  <h1>Player Details</h1>
  <section>
    {#if data.player}
    <a href="{data.player.url}" target="_blank">
      <Card player={data.player} />
    </a>
    {:else}
    <h3>Player not found</h3>
    {/if}
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