<script>
  import PostLink from './PostLink.svelte'

  export let data;
  console.log(data.posts);
 </script>
 
 <h1>Posts</h1>
 <ul>
  {#each data.posts as post}
    <li><PostLink {post} /></li>
  {/each}
 </ul>