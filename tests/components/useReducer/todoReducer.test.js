import { todoReducer } from '../../../src/components/useReducer/todoReducer';

describe('todoReducer', () => {

    const initialState = [
        {
            id: 1,
            desc: 'Learn React',
            done: false
        },
        {
            id: 2,
            desc: 'Learn Mongo',
            done: false
        }
    ];

    test('should return the default state', () => {
        const state = todoReducer(initialState, {});
        expect(state).toBe(initialState);
    });

    test('should add a new todo', () => {
        const newTodo = {
            id: 3,
            desc: 'Learn Node',
            done: false
        };

        const action = {
            type: '[TODO] Add todo',
            payload: newTodo
        };

        const state = todoReducer(initialState, action);
        expect(state.length).toBe(3);
        expect(state).toEqual([...initialState, newTodo]);
    });

    test('should delete a todo', () => {
        const action = {
            type: '[TODO] Delete todo',
            payload: 1
        };

        const state = todoReducer(initialState, action);
        expect(state.length).toBe(1);
        expect(state).toEqual([initialState[1]]);
    });

    test('should toggle a todo', () => {
        const action = {
            type: '[TODO] Toggle todo',
            payload: 1
        };

        const state = todoReducer(initialState, action);
        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(initialState[1]);
    });
})