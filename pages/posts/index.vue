<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts" />
    </div>
</template>

<script>

import { mapGetters } from "vuex";

export default {
    // fetch(context) {
        // if (context.store.state.loadedPosts.length > 0) {
        //     return null;
        // }
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve({
        //             loadedPosts: [
        //                 { id: '1', title: 'First Post', previewText: 'This is our first post!', thumbnail: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg' },
        //                 { id: '2', title: 'Second Post', previewText: 'This is our second post!', thumbnail: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg' }
        //             ]
        //         });
        //     }, 1500);
        //     // reject(new Error());
        // })
        // .then(data => {
        //     // return data;
        //     context.store.commit('setPosts', data.loadedPosts);
        // })
        // .catch(e => {
        //     context.error(e);
        // });
    // },
    // middleware: 'log',
    computed: {
        ...mapGetters({
            loadedPosts: 'loadedPosts'
        }),
    }
    // created() {
    //     this.$store.dispatch('setPosts', this.loadedPosts);
    // }
}

</script>

<style scoped>

.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>