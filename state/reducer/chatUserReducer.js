const tokenReducer=(state="ABC",action)=>{
    if(action.type==='setchatUser'){
        return action.payload
    }
    else{
        return state
    }
}


export default tokenReducer;