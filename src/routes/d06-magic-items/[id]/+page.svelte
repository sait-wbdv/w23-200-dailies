<script>
  export let data;
  console.log(data);
</script>

{#if data.magicItem}
<h1>{data.magicItem.name}</h1>
<h2>Details</h2>
<p>{data.magicItem.description}</p>
{:else}
<h1>Uh Oh!</h1>
<p>No item found.</p>
{/if}