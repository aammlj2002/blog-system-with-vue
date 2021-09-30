<template>
    <div class="home">
        <div v-if="error">
            {{error}}
        </div>
        <div v-if="posts.length>0" class="layout">
            <div>
                <PostList :posts="posts"/>
            </div>
            <div>
                <TagCloud :posts="posts"/>
            </div>
        </div>
        <div v-else>
            <Spinner/>
        </div>
    </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import Spinner from '../components/Spinner'
import PostList from '../components/PostList'
import getPosts from "../composables/getPosts"

export default {
    components: {
        TagCloud,
        Spinner,
        PostList 
    },
    setup(){
        let {posts,error,load} = getPosts();//composable function
        load();
        return{posts,error};
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
        grid-template-columns: 3fr 1fr;
        grid-gap: 20px;
    }
</style>