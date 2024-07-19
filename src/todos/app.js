/**
 * 
 * @param {String} elementId 
 */

import todoStore from '../store/todo.store';
import html from './app.html?raw';
import {renderTodos} from './use-cases/render-todos';


const ElementIDs={
    TodoList:'.todo-list',
    NewTodoInput:'#new-todo-input',

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


    //Referencias HTML

    const newDescriptionInput=document.querySelector(ElementIDs.NewTodoInput);

    //Listeners
    newDescriptionInput.addEventListener('keyup',(event)=>{
      if(event.keyCode!==13)
        return;
      if(event.target.value.trim().length===0)
        return;

      todoStore.addTodo(event.target.value);
      dislayTodos();
      event.target.value="";
    })

}