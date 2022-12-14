<template>
  <div class="home">
    <div v-if="error">
      {{error}}
    </div>
    <div v-if="posts.length>0">
      <PostsList :posts="posts"></PostsList>
     
    </div>
    <div v-else>
      <Spinner>
      
      </Spinner>
    </div>
  </div>
</template>

<script>

import PostsList from '../components/PostsList'

import getPosts from "../composable/getPosts"

import Spinner from'../composable/Spinner'
export default {

  components: {PostsList, Spinner },
  setup(){ 
    
    let{posts, error, load}=getPosts()

   load();
   return{posts, error};
}
}
</script>
<style>
 .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout{
    display: grid;
    grid-template-columns: 3fr  1fr  ;
    gap:20px;
    }
</style>

