import { ADD_TODO, REMOVE_TODO ,UPDATE_TODO , CHECK_TODO } from "./ActionTypes";

const todos=[
    {
        id:0 , 
        description:"sport",
        checked:true ,
        
    }
]

const Reducer=(state=todos , action)=>{
    switch(action.type){
        case ADD_TODO : return [...state , action.payload] ; 
        case REMOVE_TODO : return state.filter(e=>e.id!== action.payload) ;
        case UPDATE_TODO : return state.map(e=>e.id==action.payload.id ? {...e , description:action.payload.description} : e ) ; 
        case CHECK_TODO : return state.map(e=>e.id==action.payload? {...e , checked:!e.checked } : e)
        default : return state
    }
}
export default Reducer