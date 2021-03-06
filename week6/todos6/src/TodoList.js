import Todo from "./Todo";
import {useContext} from 'react';
import {UserContext} from './context'

  console.log(UserContext)  

function TodoList(){
    const context= useContext(UserContext)
    console.log(context)
    const lists = context.todos.map((todo)=>{
         return <Todo key= {todo.id} todo={todo} />
     })
    return(
        <div>
            <ul>{lists}</ul>
        </div>
    )
}
export default TodoList
