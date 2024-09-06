import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('useCounter', () => {

    test('should return default values', () => {

        const {result} = renderHook(() => useCounter());
        const {counter, decrement, increment, reset} = result.current;

        expect(counter).toBe(0);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    })

    test('should have the counter value to 100', () => {

        const {result} = renderHook(() => useCounter(100));
        const {counter} = result.current;

        expect(counter).toBe(100);
    })

    test('should increment the counter value', () => {

        const {result} = renderHook(() => useCounter(100));
        const {counter, increment} = result.current;

        act(() => {
            increment();
            increment(2);
        })

        expect(result.current.counter).toBe(103);
    })

    test('should decrement the counter value', () => {

        const {result} = renderHook(() => useCounter(100));
        const {counter, decrement} = result.current;

        act(() => {
            decrement();
            decrement();
        })

        expect(result.current.counter).toBe(98);
    })

    test('should reset the counter value', () => {

        const {result} = renderHook(() => useCounter(100));
        const {counter, decrement, reset} = result.current;

        act(() => {
            decrement();
            reset();
        })

        expect(result.current.counter).toBe(100);
    })
})