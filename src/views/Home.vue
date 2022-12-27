<template>
  <div class="home">
    <div v-if="error">
      {{error}}
    </div>
    <div v-if="posts.length>0" class="layout">
      <div>
         <PostsList :posts="posts"> </PostsList>
      </div>
     <div>
       <TagCloud :posts="posts"></TagCloud>
     </div>
     
     
    </div>
    <div v-else>
      <Spinner>
      
      </Spinner>
    </div>
  </div>
</template>

<script>

import PostsList from '../components/PostsList'

import getPosts from "../composables/getPosts"

import Spinner from'../composables/Spinner'

import TagCloud from '../components/TagCloud'

export default {

  components: {PostsList, Spinner ,TagCloud},
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
    grid-template-columns: 3fr  1fr;
    gap:20px;

    }
</style>

