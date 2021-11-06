import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            username: '',
            master_image: null,
        }
    },

    mutations: {
        add_username(state, username) {
            state.username= username
            

            this.commit('save_username');
        },
        save_username(state){
            window.localStorage.setItem('username', state.username)
        },
        SET_MASTER_IMAGE(state, files){
            state.master_image = files
        }
    },

    getters:{
        username: state=> {
            return state.username;
        },
    }

})

export default store
