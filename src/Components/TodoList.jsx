import React,{useState} from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { RemoveTodo , CheckTodo, UpdateTodo } from '../redux/Actions'

export default function TodoList() {
    const dispatch=useDispatch()
    const todos=useSelector((state)=>state) ; 
    const [show,setShow]=useState({show:false , indx:-1})
    const [newTodo , setNewTodo] = useState("")
  return (
    <div >
        {todos.map(e=>(
            <div style={{display:"flex" , flexDirection:"row" }} key={e.id} >
                <p style={{textDecoration:e.checked?"line-through" : "none" , margin:"2rem"}}>{e.description}</p>
                <button onClick={()=>dispatch(RemoveTodo(e.id))}>Delete</button>
                <button onClick={()=>dispatch(CheckTodo(e.id))}>check</button>
                <button onClick={()=>{ setShow(prev=>{return{show:!prev.show , indx:e.id}}) }}>Update</button>
                {show.show&&show.indx==e.id ? <form onSubmit={(ev)=>{ev.preventDefault() ; dispatch(UpdateTodo({id:e.id , description:newTodo}))}}><input onChange={(e)=>setNewTodo(e.target.value)} placeholder='update todo'  type='text'/></form> : <></>}
            </div>
        ))}
    </div>
  )
}
