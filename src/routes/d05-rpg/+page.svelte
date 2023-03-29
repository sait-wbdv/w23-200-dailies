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

<h2>Available Items</h2>
{#if data.items.length > 0}
<ul>
  {#each data.items as item}
    <li>{item.id}: {item.name}</li>
  {/each}
</ul>
{:else}
<p>No items found</p>
{/if}