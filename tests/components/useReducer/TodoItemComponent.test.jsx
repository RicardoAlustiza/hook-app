import { TodoItemComponent } from "../../../src/components/useReducer/TodoItemComponent";
import { render, screen } from '@testing-library/react';

describe('TodoItemComponent', () => {

    const todo = {
        id: 1,
        description: 'Test todo',
        done: false
    }

    const onDeleteTodo = jest.fn();
    const onToggleTodo = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('should render the component', () => {

        render(
            <TodoItemComponent 
                todo={todo}
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo} 
            />
        );

        const liElement = screen.getByRole('listitem');
        const spanElement = screen.getByLabelText('description');
        
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        expect(spanElement.className).toContain('align-self-center');
        screen.debug();
    });

    test('should show the complete todo', () => {

        todo.done = true;

        render(
            <TodoItemComponent 
                todo={todo}
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo} 
            />
        );

        const spanElement = screen.getByLabelText('description');
        expect(spanElement.className).toContain('text-decoration-line-through');
    })

    test('should call the onToggleTodo function', () => {
        render(
            <TodoItemComponent 
                todo={todo}
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo} 
            />
        );

        const spanElement = screen.getByLabelText('description');
        spanElement.click();
        expect(onToggleTodo).toHaveBeenCalledWith(todo.id);
    });

    test('should call the onDeleteTodo function', () => {
        render(
            <TodoItemComponent 
                todo={todo}
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo} 
            />
        );

        const buttonElement = screen.getByRole('button');
        buttonElement.click();
        expect(onDeleteTodo).toHaveBeenCalledWith(todo.id);
    });
});