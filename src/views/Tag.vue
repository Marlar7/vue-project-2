<template>
    <div class="tag">
        <div v-if="post.length" class="layout">
        <div>
            <PostList :posts="filteredPosts"></PostList>
        </div>
        <div>
            <TagCloud :posts="posts"></TagCloud>
        </div>
    </div>
    </div>
</template>
<script>
import TagCloud from '../components/TagCloud';
import PostsList from '../components/PostsList';
import getPosts from '../composable/getPosts ';
import {computed}from 'vue';
export default {
    components :{
        TagCloud, PostsList
    },
    props: ["tag"],
    setup(props){
        let{posts, error,load}=getPosts();
        load();
        let filteredPosts=computed(()=>{
            return posts.value.filter((post)=>{
                return post.tags.includes(props.tag)

            })
        })
        return{posts,error,filteredPosts}
    }
}
</script>
<style>
    .tag{
        max-width:1200px;
        margin:0 auto;
    }
</style>


