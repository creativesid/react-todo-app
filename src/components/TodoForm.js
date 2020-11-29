import React,{useState , useEffect , useRef} from 'react'

function TodoForm(props) {
    const[input,setInput] = useState(props.edit ? props.edit.value : '');
    const inref = useRef(null)

    useEffect(()=>{
        inref.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
      };
    
      const handleSubmit = e => {
        e.preventDefault();
    
        props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: input
        });
        setInput('');
      };
    

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input type='text' 
                    name='text' 
                    placeholder='Update' 
                    value={input} 
                    className='todo-input'
                    onChange={handleChange}
                    ref={inref}
                    />
                    <button className='todo-button edit' 
                    onClick={handleSubmit} >
                        Update
                    </button>
                </>
        
            ):(
                <>
                    <input type='text' 
                    name='text' 
                    placeholder='Add todo' 
                    value={input} 
                    className='todo-input'
                    onChange={handleChange}
                    ref={inref}
                    />
                    <button className='todo-button' 
                    onClick={handleSubmit} >
                        Add todo
                    </button>
                </>
            )}
            
        </form>
    )
}

export default TodoForm


