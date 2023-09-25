const WarningReducer=(state="",action)=>{
    if(action.type==='showWarning'){
        return action.payload
    }
    else{
        return state
    }
}


export default WarningReducer;