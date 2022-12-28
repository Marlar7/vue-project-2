<template>
    
</template>
<script>
import {db} from "../firebase/config"
export default {
    setup(){
        db.collection("posts").onSnapshot((snap)=>{
            
        })
    }
}
</script>
<style>

</style>


