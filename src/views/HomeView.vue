<template>
  <div class="home">
    <div v-if="error">

    </div>
    <div v-if="posts.length>0">
      <post-list :posts="posts"></post-list>
    </div>
    <div v-else>
        loading...
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'
import PostList from '../components/PostList'
import getPosts from "../composable/getPosts"
export default {
  components: {
    PostList
  },
  setup(){
    let{posts, error, load}=getPosts()
    load();
    return{posts,error};
}
}
</script>
