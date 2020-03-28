<script>
  import TagList from './TagList.svelte'

  export let posts
</script>

{#each posts as post}
  <article>
    <a href={`/posts/${post.permalink}`}>
      <h2>{post.title}</h2>
      <p>{post.summary}</p>
    </a>

    {#if post.tags.length}
      <TagList {post}/>
    {/if}
  </article>
{/each}
