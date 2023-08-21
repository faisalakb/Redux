const intialState=10;
const numberChange = (state = intialState, action)=>{
    switch(action.type){
        case 'increment':
            console.log("performing increment");
            return state + 1;
        case 'decrement':
            console.log("performing decrement");
            return state - 1;
        default:
            return state;
    }

}

export default numberChange;