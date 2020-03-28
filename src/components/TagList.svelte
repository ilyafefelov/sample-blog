<script>
  export let post
</script>

{#each post.tags as tag, index}
  <a href="/tag/{tag}">{tag}</a>
{/each}

<style>
  a {
    display: inline-block;
    padding: 0.2em 0.6em;
    margin-right: 0.5em;
    background: #ccc;
  }
</style>
