export default (state, action) => {
    // console.log( state);
    // console.log(action.type);
    switch (action.type){
        case "SET_TECHNOLOGY":
            return {
                ...state,
                tech: action.tech
            }
        default:
            return state;
    }
}