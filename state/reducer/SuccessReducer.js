const SuccessReducer=(state="",action)=>{
    if(action.type==='showSuccess'){
        return action.payload
    }
    else{
        return state
    }
}


export default SuccessReducer;