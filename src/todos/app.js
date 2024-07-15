/**
 * 
 * @param {String} elementId 
 */

import todoStore from '../store/todo.store';
import html from './app.html?raw';
import {renderTodos} from './use-cases/render-todos';


const ElementIDs={
    TodoList:'.todo-list',


}

export const App=(elementId)=>{


const dislayTodos=()=>{
    const todos=todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(ElementIDs.TodoList,todos);
  

}


    //Cuando la funcion App() se llama

    (()=>{

        const app=document.createElement('div');
        app.innerHTML=html;
        document.querySelector(elementId).append(app);
        dislayTodos();

    })();

}