import React from 'react';

function Todo(props){
    return(
        <div>
             <input type='checkbox'  checked={props.isCompleted} onChange={()=>props.handleCheck(props.id)}/>
          <>  {props.chore}  </>  
        </div>
    )
}
export default Todo;