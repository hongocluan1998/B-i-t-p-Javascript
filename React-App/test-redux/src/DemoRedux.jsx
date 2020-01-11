import { createStore } from "redux";
const defaultState = { todos: ["Hoc React", "Hoc Js"] };
function reducer(state = defaultState, action) {
    switch(action.type) {
        case "ADD_TODO":
            return [{}]
        default: 
            return false
    }
  //console.log(action);
}
const addTodo = {
  type: "ADD_TODO",
  text: "Hoc CSS"
};
const store = createStore(reducer);
console.log(store.getState());

store.dispatch(addTodo);
console.log(store.getState());
