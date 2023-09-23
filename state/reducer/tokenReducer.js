const tokenReducer=(state={token:"abc",name:"Rajesh "},action)=>{
    if(action.type==='setToken'){
        return action.payload
    }
    else{
        return state
    }
}


export default tokenReducer;