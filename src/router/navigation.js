import {defineComponent, inject} from 'vue'
import {useLoading} from 'vue-loading-overlay'

export default defineComponent({
    setup(router) {
        //const $loading = useLoading()
        // or use inject without importing useLoading
        const $loading =  inject('$loading')

        router.beforeResolve((to, from, next) => {
            // If this isn't an initial page load.
            if (to.name) {
              // Start the route progress bar.
              //NProgress.start()
                $loading.show({
                    // Pass props by their camelCased names
                    container: this.$refs.loadingContainer,
                    canCancel: true, // default false
                    onCancel: this.yourCallbackMethod,
                    color: '#000000',
                    loader: 'spinner',
                    width: 64,
                    height: 64,
                    backgroundColor: '#ffffff',
                    opacity: 0.5,
                    zIndex: 999,
                })
            }
            next()
          })
          
        router.afterEach((to, from) => {
        //NProgress.done()
        // Complete the animation of the route progress bar.
            $loading.hide();
        })

    }
})