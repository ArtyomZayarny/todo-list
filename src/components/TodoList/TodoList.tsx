import React,{useState, useEffect} from 'react'

interface TodoListProps {
        data:[] | Array<{}>
}
interface IPost {
    title?:string
}
const TodoList:React.FC<TodoListProps> = (props) => {
    const [posts,setPosts] = useState([{}])
    useEffect( () => {
      if (props.data.length) {
        setPosts(props.data)  
      }
    }, [props.data])

    return (
        <ul>
          {posts.map( (post:IPost) => <li>{post.title}</li>) }       
        </ul>
    )
}
export default TodoList