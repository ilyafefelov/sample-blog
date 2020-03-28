<script context="module">
  import {findByTag} from '../../posts'

  export function preload(page) {
    return {posts: findByTag(page.params.tag)}
  }
</script>

<script>
  import PostList from '../../components/PostList.svelte'
  export let posts
</script>

<PostList {posts}/>
