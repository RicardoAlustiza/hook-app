import { useEffect, useReducer } from 'react';
import { todoReducer } from '../components/useReducer/todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatchTodoAction ] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        dispatchTodoAction({ type: '[TODO] Add todo', payload: todo });
    }

    const handleDeleteTodo = (todoId) => {
        dispatchTodoAction({ type: '[TODO] Delete todo', payload: todoId });
    }

    const handleToggleTodo = (todoId) => {
        dispatchTodoAction({ type: '[TODO] Toggle todo', payload: todoId });
    }
    
    const todosCount = todos.length;

    const pendingTodosCount = todos.filter(todo => !todo.done).length;

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount
    }
}
