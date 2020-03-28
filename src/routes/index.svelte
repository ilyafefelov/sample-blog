<script>
  import {posts} from '../posts'
  import PostList from '../components/PostList.svelte'
</script>
<svelte:head>
  <title>Josh's Weblog</title>
</svelte:head>

<h1>Josh's Weblog</h1>

<PostList {posts}/>
