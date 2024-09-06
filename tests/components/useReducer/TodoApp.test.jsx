import { screen, render } from '@testing-library/react';
import { TodoApp } from '../../../src/components/useReducer/TodoApp';
import { useTodos } from '../../../src/hooks/useTodos';

jest.mock('../../../src/hooks/useTodos');

describe('TodoApp', () => {

    useTodos.mockReturnValue({
        todos: [
            {
                id: 1,
                description: 'Test todo',
                done: false
            },
            {
                id: 2,
                description: 'Test todo 2',
                done: true
            }
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        handleNewTodo: jest.fn()
    })

    test('should render', () => {

        render(<TodoApp />);

        expect(screen.getByText('Todo App: 2')).toBeTruthy();
    });
})