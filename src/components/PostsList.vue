<template>
<div>
<h1>Postslist</h1>
    <div v-for="post in posts" :key ="post.id">
        <SinglePost :post="post"></SinglePost>
    </div>
        
    
</div>
    
</template>
<script>
import SinglePost from './SinglePost'
export default{
    components:{SinglePost},
    props:["posts"],
    setup(props){
        console.log(props.post)
    }
}
</script>
<style>
    
</style>
