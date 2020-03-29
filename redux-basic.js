const redux = require('redux')
const createStore = redux.createStore;

const initalState = {
    counter: 0
}

//Reducer
const rootReducer = (state = initalState, action) =>{
    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}

//Store
const store = createStore(rootReducer);

console.log(store.getState()) // 0

//Subscription
store.subscribe(()=>{
    console.log('[Subscription]', store.getState())
})

//Dispaching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 20})

console.log(store.getState()) // 1

