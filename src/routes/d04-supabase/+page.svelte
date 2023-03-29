<script>
  export let data;
  console.log(data);
</script>

<h1>Countries</h1>
{#if data.countries.length > 0}
<ul>
  {#each data.countries as country}
    <li>{country.id}: {country.name}</li>
  {/each}
</ul>
{:else}
<p>No countries found</p>
{/if}