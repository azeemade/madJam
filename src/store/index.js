import { createStore } from 'vuex'
import controller from '../assets/js/controller';

const store = createStore({
    state(){
        return {
            username: localStorage.getItem('username'),
            master_image: null,
            search: '',
            playlist: null
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
        },
        search(state, search){
            state.search = search
        },
        FetchPlaylist(state, id){
            let pl = controller.FindPlaylist(id)
            state.playlist = pl
        }
    },

    getters:{
        username: state=> {
            return state.username;
        },
        search: state=> {
            return state.search;
        },
        playlist: state=> {
            return state.playlist;
        }
    }

})

export default store
