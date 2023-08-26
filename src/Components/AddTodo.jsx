import React, { useState } from 'react'
import { AddTodo } from '../redux/Actions';
import { useDispatch } from 'react-redux';
export default function Add() {
    const dispatch=useDispatch()
    const [newTodo , setNewTodo]=useState({

    }) ; 
    const [description ,setDescription]=useState("") ; 

    const handleSubmit=(  event)=>{
        event.preventDefault();
        dispatch(AddTodo(newTodo))
        
    }
  return (
    <div>
        <form onSubmit={(event)=>handleSubmit(event)}>
            <input type='text' placeholder='add todo' onChange={(e)=>setNewTodo({id:Date.now() , description:e.target.value , checked:false})}  />
            
        </form>
    </div>
  )
}
