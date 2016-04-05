import { createStore } from 'redux';
let store = createStore(todoApp);


/* 

  // Log the initial state
  console.log(store.getState())

  // Every time the state changes, log it
  // Note that subscribe() returns a function for unregistering the the listener
  let unsubscribe = store.subscribe(() => 
    console.log(store.getState())
  );

  store.dispatch(addTodo('Learn about actions'));
  store.dispatch(addTodo('Learn about reducers'));
  store.dispatch(addTodo('Learn about store'));
  store.dispatch(completeTodo(0));
  store.dispatch(completeTodo(1));

*/