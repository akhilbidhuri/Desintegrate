export default (state, action) =>{
    switch(action.type){
        case "Login":
        return {
            data: action.data
        }
        case "Register":
        return {
            data: action.data
        }
        default: return state
    }
}