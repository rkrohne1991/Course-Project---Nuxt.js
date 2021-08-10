const pkg = require('./package')

const databaseUrl = process.env.BASE_URL || 'https://nuxt-blog-a4571-default-rtdb.firebaseio.com';

module.exports = {
    // mode: 'universal',
    // mode: 'spa',

    env: {
        baseUrl: databaseUrl,
        fbAPIKey: 'AIzaSyA1UuPbpK-zvdOYo3cmxUojmM_TF901SMA',
    },

    /*
    ** Headers of the page
    */
    head: {
        title: 'WD Blog',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'My cool Web Development Blog' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap' }
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fa923f', height: '4px', duration: 5000 },
    loadingIndicator: {
        name: 'circle',
        color: '#fa923f'
    },

    /*
    ** Global CSS
    */
    css: [
        '~/assets/styles/main.css'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/core-components.js',
        '~/plugins/date-filter.js',
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
    ],

    axios: {
        baseURL: process.env.BASE_URL || 'https://nuxt-blog-a4571-default-rtdb.firebaseio.com',
        credentials: false,
    },

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        
        },

        babel:{
            plugins: [
                ["@babel/plugin-proposal-class-properties", { "loose": true }],
                ["@babel/plugin-proposal-private-methods", { "loose": true }],
                ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
            ]
        }
    },

    transition: {
        name: 'fade',
        mode: 'out-in',
    },

    // router: {
    //     middleware: 'log'
    // }
}