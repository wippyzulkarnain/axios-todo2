import React from 'react';

const TodoDetail = props => {
    return (  
        <div>
            description :{props.description} <br/>
            done : {props.done}
            <button onClick={()=> props.deleteTodo(props.index)}>Delete</button> 
            <br/><br/>
        </div>
    );
}
 
export default TodoDetail;