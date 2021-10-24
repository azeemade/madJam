import dummy from "~/static/db.json";


export const state = () => ({
    username: '',
    dummyx2: dummy,
    master_image: null,

})

export const mutations = {
    add_username(state, username) {
        state.username= username
        window.localStorage.setItem('username', username)
    },
    SET_MASTER_IMAGE(state, files){
        state.master_image = files
    },
}

export const getters = {
    username: state=> {
        //return state.username;
        let username = localStorage.getItem('username');
        return username
    },
}
