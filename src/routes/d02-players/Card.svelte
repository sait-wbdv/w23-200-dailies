<script>
  export let player;
</script>

<article class="card">
  <h3>{player.name}</h3>
  <ul>
    <li>Race: {player.race}</li>
    <li>Class: {player.class}</li>
    <li>Level: {player.level}</li>
    <li>Health: {player.health}</li>
    <li>Poisoned: {player.poisoned}</li>
    <li>Backpack:
      <ul>
        {#each player.backpack as item}
          <li>{item}</li>
        {/each}
      </ul>
    </li>
  </ul>
</article>

<style>

  article {
    border: 1px solid black;
    background-color: #eee;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.05), 
              0px 2px 2px rgba(0,0,0,0.05), 
              0px 4px 4px rgba(0,0,0,0.05), 
              0px 8px 8px rgba(0,0,0,0.05);
  }

  article:hover {
    background-color: transparent;
  }

  
</style>
