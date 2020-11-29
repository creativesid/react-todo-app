import React , {useState} from 'react'
import TodoForm from './TodoForm'
import { AiFillEdit  } from 'react-icons/ai';
import { MdDelete  } from 'react-icons/md';

function Todo({todos, completeTodo, remove, editTodo }) {
    const [edit , setEdit] = useState({
        id:null,
        value:''
    })

    const handleUpdate = value =>{
        editTodo(edit.id,value);
        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={handleUpdate} />
    }


    return todos.map((todo, index) => (
        <div
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <AiFillEdit onClick={() => setEdit({ id: todo.id, value: todo.text })}
                   className='edit-icon' />
                <MdDelete onClick={()=>remove(todo.id)} 
                   className='delete-icon' />
            </div>
        </div>
    ))
}

export default Todo

