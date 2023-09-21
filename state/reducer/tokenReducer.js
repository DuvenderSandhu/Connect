const tokenReducer=(state={token:"abc",name:"Hello"},action)=>{
    if(action.type==='setToken'){
        return action.payload
    }
    else{
        return state
    }
}


export default tokenReducer;