import {Todo} from '../todos/models/todo.model.js'


const Filters={
    All: 'all',
    Completed:'Completed',
    Pending:'Pending'
}
const state={
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del infinito'),
    ],
    filter: Filters.All
}


const initStore =()=>{
    console.log(state);
    console.log('InitStore');
}


const loadStore=()=>{
    throw new Error('Not implemented yet');
}




const getTodos=(filter=Filters.All)=>{
    switch(filter){
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter(todo=>todo.done);
            case Filters.Pending:
                return state.todos.filter(todo=>!todo.done);
        

    }


}

/**
 * 
 * @param {String} descripcion 
 */

const addTodo=(descripcion)=>{

throw new Error('Not implemented yet');
}


/**
 * 
 * @param {String} todoId 
 */
const toggleTodo=(todoId)=>{
    throw new Error('Not implemented yet');

}


const deleteTodo=(todoId)=>{
    throw new Error('Not implemented yet');

}

const deleteCompleted=()=>{
    throw new Error('Not implemented yet');

}

const setFilter=(newFilter=Filters.All)=>{
    throw new Error('Not implemented yet');
}

const getCurrentFilter=()=>{
    throw new Error('Not implemented yet');
}

export default {
    initStore,
    getTodos,
    loadStore,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
}