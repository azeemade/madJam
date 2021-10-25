import dummy from "~/static/db.json";


export const state = () => ({
    username: '',
    dummyx2: dummy,
    master_image: null,

})

export const mutations = {
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
}

export const getters = {
    username: state=> {
        return state.username;
    },
}
