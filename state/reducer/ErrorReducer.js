const ErrorReducer=(state="",action)=>{
    if(action.type==='showError'){
        return action.payload
    }
    else{
        return state
    }
}


export default ErrorReducer;