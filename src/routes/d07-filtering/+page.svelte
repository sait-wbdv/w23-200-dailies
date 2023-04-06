<script>
  export let data;
</script>

<h1>Magic Items</h1>
{#if data.magicItems.length > 0}
<ul>
  {#each data.magicItems as item}
    <li><a href="/d06-magic-items/{item.id}">{item.name}</a>: {item.weight_value}</li>
  {/each}
</ul>
{:else}
<p>No items found</p>
{/if}