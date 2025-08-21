import {createStore} from "vuex"
const store = createStore({
    state() {
        return {
            allFoods: [],
            user: undefined,
            admin: undefined,
        }
    },
    mutations: {
        setUser(state, payload){
            state.user = payload;
        },
        setAdmin(state, payload){
            state.admin = payload;
        }
    },
})

export default store;