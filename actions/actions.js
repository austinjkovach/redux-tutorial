
/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const SET_VISIBLITY_FILTER = 'SET_VISIBLITY_FILTER'

/*
 * other constants
 */
 
let nextTodoId = 0

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function addTodo(text) {
  return { type: ADD_TODO, id: nextTodoId++, text }
}

export function completeTodo(index){
  return { type: COMPLETE_TODO, index }
}
export function setVisiblityFilter(filter){
  return {type: SET_VISIBLITY_FILTER, filter }
}

/*

  {
    type: ADD_TODO,
    text: 'Build my first Redux app'
  }


  {
    type: COMPLETE_TODO,
    index: 5
  }

*/