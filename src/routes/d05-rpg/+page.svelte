<script>
  export let data;
  console.log(data);
</script>

<h1>RPG Players</h1>
{#if data.players.length > 0}
<ul>
  {#each data.players as player}
    <li>{player.id}: {player.name}</li>
  {/each}
</ul>
{:else}
<p>No players found</p>
{/if}