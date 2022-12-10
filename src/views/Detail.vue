<template>
    
    <div>
        <h1> detail {{id}}</h1>
        <div v-if="post">
             {{post}}
        </div>
       <div v-else>
        <Spinner></Spinner>
       </div>
    </div>
</template>
<script>
import getPost from "../composable/getPost"
import Spinner from "../composable/Spinner"
export default {
    components:{Spinner},
    props:["id"],
    setup(props){
        let{post , error, load}=getPost(props.id);
        load();
        return{post, error}
    }

}
</script>
<style>

</style>


