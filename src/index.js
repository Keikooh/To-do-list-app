
import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list-class';


export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml(todo));

// const newTodo = new Todo('Aprender javascript');
// todoList.nuevoTodo(newTodo);

console.log('todos', todoList.todos);

