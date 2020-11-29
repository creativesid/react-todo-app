import React,{useState , useEffect} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos]; 

    setTodos(newTodos);
    console.log(...todos);
  };

  useEffect(() => {
    const dataStore = JSON.parse(localStorage.getItem('dataStore'));
    if(dataStore !== null){
      setTodos(dataStore)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('dataStore',JSON.stringify(todos))
  }, [todos])

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const remove = id =>{
      const removeArray = [...todos].filter(todo=>todo.id !==id)
      setTodos(removeArray)

  }

  const editTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

    return (
        <div>
            <h1>What are you planning today</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos}
                completeTodo={completeTodo}
                remove={remove}
                editTodo={editTodo}
            />
        </div>
    )
}

export default TodoList
