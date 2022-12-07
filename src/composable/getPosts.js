import { ref } from 'vue'
let getPosts=()=>{
    let posts=ref([]);
    let error=ref([]);
    let load =async() => {
    try {let res= await fetch("http://localhost:3000/Posts")
          if (response.status===404){
            throw new Error("not found url");
          }
          let datas=await respose.json()
          posts.value=datas
    }catch(err){
          error.value=(err.message)
    }

  }
    return {posts, error, load};
}
export default getPosts;