import React,{useState, useEffect} from 'react'


type TodoListProps = {
        posts:[] 
}
interface IPost {
    title:string
}
const TodoList:React.FC<TodoListProps> = (props) => {
    const [posts,setPosts] = useState([])
  useEffect( () => {
      if (props.posts.length ) {
        setPosts(props.posts)  
      }
  }, [props.posts])

    return (
        <ul>
          {posts.map( (post:IPost) => <li>{post.title}</li>)}       
        </ul>
    )
}
export default TodoList