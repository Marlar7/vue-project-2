

import { ref }from 'vue';
import {db}from "../firebase/config"
let getPosts=()=>{
    let posts= ref ([]);
    let error= ref ("");
    let load =async() => {
    try {
      // await new Promise((resolve,reject)=>{
        
      //   setTimeout(resolve,2000)
      // })
        let response = await fetch("http://localhost:3000/Posts")
          if (response.status===404){
            throw new Error("not found url");
          }
          let datas=await response.json();
          posts.value=datas;
    }catch(err){
          error.value=err.message;
    }

  }
    return {posts, error, load};
}
export default getPosts;