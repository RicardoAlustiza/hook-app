import React from 'react'
import { useForm } from '../../hooks/useForm'

export const AddTodoFormComponent = ({onNewTodo}) => {
    
    const {description, onInputChange, onResetForm} = useForm({
        description: ''
    })

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        }
        onNewTodo(newTodo);
        onResetForm();
    }


  return (
    <form onSubmit={onFormSubmit}>
        <input 
            type="text"
            name="description"
            placeholder="¿Qué hay que hacer?"
            autoComplete="off"
            className="form-control"
            value={description}
            onChange={onInputChange}
        />
        <button 
            type="submit"
            className="btn btn-outline-primary mt-1 btn-block mt-2"
        >
            Agregar
        </button>
    </form>
  )
}
