import { createStore } from 'vuex'
import controller from '../assets/js/controller';

const store = createStore({
    state(){
        return {
            username: localStorage.getItem('username'),
            master_image: null,
            search: '',
            playlist: null,
            recents: []
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
        },
        AddRecents(state, search){
            /*if(state.recents.length === 0){
                state.recents.push(search)
            }
            else{
                for(var i=0; i<state.recents.length; i++){
                    var pos = state.recents[i]["url"].indexOf(search["url"]);
                    if( pos === -1)
                        state.recents.splice(0, 0, search)
                    if( pos !== -1){
                        state.recents.splice(pos, 1)
                        state.recents.splice(0, 0, search)
                    }
                }
            }*/
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
        },
        recents: state=>{
            var recents = state.recents.slice(0,3)
            return recents;
        }
    }

})

export default store
