/**
 * 
 * @param {String} elementId 
 */

import todoStore from '../store/todo.store';
import html from './app.html?raw';
import {renderTodos} from './use-cases/render-todos';


const ElementIDs={
    clearCompletedButton:'.clear-completed',
    TodoList:'.todo-list',
    NewTodoInput:'#new-todo-input',
  

}

export const App=(elementId)=>{


const displayTodos=()=>{
    const todos=todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(ElementIDs.TodoList,todos);
  

}


    //Cuando la funcion App() se llama

    (()=>{

        const app=document.createElement('div');
        app.innerHTML=html;
        document.querySelector(elementId).append(app);
        displayTodos();

    })();


    //Referencias HTML

    const newDescriptionInput=document.querySelector(ElementIDs.NewTodoInput);
    const todoListUl=document.querySelector(ElementIDs.TodoList);
    const clearCompletedButton=document.querySelector(ElementIDs.clearCompletedButton);

    //Listeners
    newDescriptionInput.addEventListener('keyup',(event)=>{
      if(event.keyCode!==13)
        return;
      if(event.target.value.trim().length===0)
        return;

      todoStore.addTodo(event.target.value);
      displayTodos();
      event.target.value="";
    })

    todoListUl.addEventListener('click', (event) => {
      const element = event.target.closest('[data-id]');
      todoStore.toggleTodo( element.getAttribute('data-id') );
      displayTodos();
  });


  todoListUl.addEventListener('click', (event) => {
    const isDestroyElement = event.target.className==='destroy';
    const element = event.target.closest('[data-id]');
    if(!isDestroyElement||!element )
      return;

    todoStore.deleteTodo(element.getAttribute('data-id'));
    displayTodos();

    
   
});

clearCompletedButton.addEventListener('click',()=>{
  todoStore.deleteCompleted();
  displayTodos();
});


}