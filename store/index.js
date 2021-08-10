export const state = () => ({
    loadedPosts: [],
    token: null,
})

export const mutations = {
    setPosts(state, posts) {
        state.loadedPosts = posts;
    },
    addPost(state, post) {
        state.loadedPosts.push(post);
    },
    editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
            post => post.id === editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost;
    },
    setToken(state, token) {
        state.token = token;
    }
}

export const actions = {
    nuxtServerInit(vuexContext, context) {
        return context.app.$axios.$get('/posts.json')
            .then(data => {
                const postsArray = [];
                for (const key in data) {
                    postsArray.push( {...data[key], id: key} );
                }
                vuexContext.commit('setPosts', postsArray)
            })
            .catch(e => context.error(e));
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         vuexContext.commit('setPosts', [
        //             { id: '1', title: 'First Post', previewText: 'This is our first post!', thumbnail: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg' },
        //             { id: '2', title: 'Second Post', previewText: 'This is our second post!', thumbnail: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg' }
        //         ]);
        //         resolve();
        //     }, 1500);
        //     // reject(new Error());
        // })
    },
    addPost(vuexContext, post) {
        const createdPost = {
            ...post, 
            updatedDate: new Date() 
        };

        return this.$axios.$post('/posts.jsonn?auth=' + vuexContext.state.token, createdPost)
        .then(data => {
            vuexContext.commit('addPost', { ...createdPost, id: data.name });
        })
        .catch(e => console.log(e));
    },
    editPost(vuexContext, editedPost) {

        return this.$axios.$put('/posts/' + editedPost.id + '.json?auth=' + vuexContext.state.token, editedPost)
        .then(data => {
            vuexContext.commit('editPost', editedPost);
        })
        .catch(e => console.log(e));

    },
    setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
    },
    authenticateUser(vuexContext, authData) {
        let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.fbAPIKey;

        if (!authData.isLogin) {
            authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.fbAPIKey;
        }

        return this.$axios.$post(authUrl, {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true,
            }
        ).then(result => {
            vuexContext.commit('setToken', result.idToken);
        })
        .catch(e => console.log(e));
    },
}

export const getters = {
    loadedPosts(state) {
        return state.loadedPosts;
    },
    isAuthenticated(state) {
        return state.token != null;
    }
}