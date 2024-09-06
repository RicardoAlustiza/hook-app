import { renderHook, act } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('useForm', () => {

    const initialForm = {
        name: 'Ricardo',
        email: 'ricardo@google.com'
    }

    test('should return default values', () => {

        const {result} = renderHook(() => useForm(initialForm));
        
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
    })

    test('should change name input value', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const {onInputChange} = result.current
        
        act(() => {
            onInputChange({target: {name: 'name', value: 'Juan'}})
        })

        expect(result.current.name).toBe('Juan');
        expect(result.current.formState.name).toBe('Juan');
    })

    test('should reset form', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const {onInputChange, onResetForm} = result.current
        
        act(() => {
            onInputChange({target: {name: 'name', value: 'Juan'}})
            onResetForm()
        })

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    })
})