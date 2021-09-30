<template>
    <h1>Details</h1>
    <div v-if="post" class="post">
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
        <button @click="deletePost">Delete</button>
    </div>
    <div v-else>
        Loading..
    </div>
    <div v-if="error">
        {{error}}
    </div>
</template>

<script>
import getPost from "../composables/getPost"
import {useRouter} from "vue-router"
import {db} from "../firebase/config"
export default {
    props:['id'],
    setup(props){
        let router = useRouter();
        // console.log(route.params.id);
        // this.$route.params.id;
        let {post,error,load}=getPost(props.id);
        load();

        let deletePost=async()=>{
            await db.collection("posts").doc(props.id).delete(); // delete code
            router.push("/"); // redirect
        }
        return{post,error,deletePost};
    }
}
</script>

<style>
.post {
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
}
.post h2 {
  display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
}
.post h2::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1deg);
}
.pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
}
</style>