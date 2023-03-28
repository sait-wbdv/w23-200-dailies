<script>
  import Post from './Post.svelte'

  export let data;
</script>

<!-- 
<h1>{data.post.title}</h1>
<p>{data.post.body}</p> 
-->

<Post post={data.post} />