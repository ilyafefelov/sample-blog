<script context="module">
  import {findPost} from '../../posts'

  export function preload(page) {
    return { post: findPost(page.params.permalink) }
  }
</script>

<script>
  import TagList from '../../components/TagList.svelte'

  export let post
</script>

<h1>{post.title}</h1>

<TagList {post}/>

{@html post.html}
