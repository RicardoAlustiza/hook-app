import { TodoItemComponent } from "./TodoItemComponent"

export const TodoListComponent = ({todos = [], onDeleteTodo, onToggleTodo}) => {

  return (
    <ul className="list-group">
        {
            todos.map((todo, i) => (
                <TodoItemComponent 
                  key={todo.id} 
                  todo={todo} 
                  onDeleteTodo={onDeleteTodo} 
                  onToggleTodo={onToggleTodo}
                />
            ))
        }
    </ul>
  )
}
