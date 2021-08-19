import dummy from "~/static/db.json";


export const state = () => ({
    username: '',
    dummyx2: dummy,

})

export const mutations = {
    add_username(state, username) {
        state.username= username
    },
}

export const getters = {
    username: state=> {
        return state.username;
    },
}
