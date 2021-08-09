<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" @submit="onSubmit" />
        </section>
    </div>
</template>

<script>

import AdminPostForm from '@/components/Admin/AdminPostForm';

export default {
    layout: 'admin',
    components: {
        AdminPostForm
    },
    // data() {
    //     return {
    //         loadedPost: {
    //             author: 'Maximilian',
    //             title: 'My awesome Post',
    //             content: 'Super amazing, thanks for that!',
    //             thumbnailLink: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'
    //         }
    //     }
    // },
    asyncData(context) {
        return context.app.$axios.$get(
                '/posts/' + context.params.postId + '.json'
            )
            .then(data => {
                return {
                    loadedPost: { ...data, id: context.params.postId }
                }
            })
            .catch(e => context.error(e));
    },
    methods: {
        onSubmit(editedPost) {
            this.$store.dispatch('editPost', editedPost)
            .then(() => {
                this.$router.push('/admin')
            });
        }
    }
}

</script>

<style scoped>
.update-form {
    width: 90%;
    margin: 20px auto;
}
@media (min-width: 768px) {
    .update-form {
        width: 500px;
    }
}
</style>