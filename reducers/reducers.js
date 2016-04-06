// A reducer is a pure function that takes the precious state and an action,
// and returns the next state.

// Reducer NO-NOs:
//  - Mutate arguments
//  - Perform side effects like API calls and routing transitions
//  - Calling non-pure functions, e.g. Date.now() or Math.random()



import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
const { SHOW_ALL } = VisibilityFilters


const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todos(state = [], action){
  switch (action.type){
    case ADD_TODO:
      return [
        ...state, 
        {
          text: action.text,
          completed: false
        }
      ]
    case COMPLETE_TODO:
      return state.map((todo, index) => {
        if(index === action.index) {        
          return Object.assign({}, todo, {
          completed: true
        })
      }
      return todo
    })
    default: 
      return state
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBLITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todoApp(state = {}, action){
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}


const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp

/*

  {
    visibilityFilter: 'SHOW_ALL',
    todos: [
      {
        text: 'Consider using Redux',
        completed: true,
      },
      {
        text: 'Keep all state in a single tree',
        completed: false
      }
    ]
  }

*/