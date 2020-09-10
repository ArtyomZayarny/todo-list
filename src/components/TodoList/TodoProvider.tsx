import React, {useState,useEffect} from 'react'

interface TodoProviderProps {
    children(data:[] | Array<{}>):JSX.Element;
}

const TodoProvider:React.FC<TodoProviderProps> = (props) => {

  const [data,setData] = useState([]);

  useEffect( () => {
      if (!data.length) {
      
        requestHandler()
      }
      
  },[data])

  const requestHandler = async () => {
      let response = await fetch('https://jsonplaceholder.typicode.com/todos');
      let todos = await response.json();
      setData(todos)
  }
    return props.children(data)

    
}

export default TodoProvider