export function managePresents(state, action){
    //set default state to 0
    state.numberOfPresents = 0
    // use a switch statement for conditional logic for our action
    switch(action.type) {
        // using action.type allows us to pass in conditional info
        // allows for more flexibility with arg
        // can pass in obj instead of string
        //string wont allow for lots of customization or changes
        case 'INCREASE' :
            return {numberOfPresents: state.numberOfPresents + 1}
        default:
            return state;
    }
}
