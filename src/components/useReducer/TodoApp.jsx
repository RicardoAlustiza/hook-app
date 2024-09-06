import { TodoListComponent } from './TodoListComponent'
import { AddTodoFormComponent } from './AddTodoFormComponent'
import { useTodos } from '../../hooks/useTodos'

export const TodoApp = () => {

    const {todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodos();

    return (
        <>
            <h1>Todo App: {todosCount} <small>Pendientes: { pendingTodosCount }</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoListComponent 
                        todos={todos} 
                        onDeleteTodo={handleDeleteTodo} 
                        onToggleTodo={handleToggleTodo} 
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>

                    <AddTodoFormComponent onNewTodo={ handleNewTodo } />
                </div>
            </div>
        </>
    )
}
