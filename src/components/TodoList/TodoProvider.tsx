import React, {useState,useEffect} from 'react'

interface TodoProviderProps {
    children(data:any):JSX.Element;
}


const TodoProvider:React.FC<TodoProviderProps> = (props) => {
//   const value:string = 'tim'

  const [data,setData] = useState([]);

  useEffect( () => {
      requestHandler()
  },[])

  const requestHandler = async () => {
      let response = await fetch('https://jsonplaceholder.typicode.com/todos');
      let todos = await response.json();
      setData(todos)
      
  }

    return props.children(data)
}

export default TodoProvider