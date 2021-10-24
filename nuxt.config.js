import dummy from './static/db.json'
/*let dynamicRoutes = () => {
  return new Promise(resolve => {
    resolve(dummy.playlists.map(el => `playlists/${el.slug}`))
  })
}*/
module.exports = {
    /*
    ** Headers of the page
    */
    head: {
      title: 'madJam | Listen to carefully curated playlists',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '{{escape description }}' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/Icon.png' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css' },
        { href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css', rel: 'stylesheet', integrity: "sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x", crossorigin: "anonymous" },
      ],
      script: [
        {  src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js", integrity: "sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4", crossorigin:"anonymous"},
        {  src: "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js", type:"text/javascript"},
        {  src: "/js/app.js"},
      ]
    },

    components: true,
    /*
    ** Customize the progress bar color
    */
    loading: { color: '#3B8070' },

    /*generate: {
      //dynamicRoutes
      routes(){
        return dummy.playlists.map(el => {
          return '/playlists/'+ el.slug
        })
      }
    },*/

    css: [
      // CSS file in the project
      '~/assets/css/app.css',
    ],
    /*
    ** Build configuration
    */
    build: {
      /*
      ** Run ESLint on save
      */
      /*extend (config, { isDev, isClient }) {
        if (isDev && isClient) {
          config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/,
            options: {
              fix: true
            }
          })
        }
      }*/
    },
    buildModules:[
        '@nuxtjs/tailwindcss',
        '@nuxtjs/device'
    ],

    modules:[
      '@nuxtjs/axios',
    ]
  }
  
  