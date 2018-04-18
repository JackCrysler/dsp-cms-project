let mutations ={
    saveToken(state,payload){
        state.token = payload
    },
    saveUser(state,payload){
        state.username = payload
    },
    updateCreativeTplType(state,payload){
        state.creativeTplType = payload
    }
}

export default mutations