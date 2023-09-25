const tokenReducer=(state={token:"",name:""},action)=>{
    if(action.type==='setToken'){
        return action.payload
    }
    else{
        return state
    }
}


export default tokenReducer;