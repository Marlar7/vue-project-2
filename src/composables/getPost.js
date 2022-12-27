import { ref } from "vue";


let getPost=(id)=>{
    let post= ref(null);
    let error= ref("");
    let load= async()=>{
        try{ 
            // await new Promise((resolve,reject)=>{
            //     setTimeout(resolve,2000)
            // })
            let response = await fetch('http://localhost:3000/Posts/'+id);
     
            if (response.status===404){
                throw new Error ("not found URL");
            }
            let data=await response.json();
            post.value=data;
        }catch (err){
            error= err.message;
        }
    }
    return{post,error,load};
}
export default getPost;