import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';


function Contents(props){
   function inDelete(){
   return props.onDelete(props.id);
}
   return (<div className="note"><h1> {props.title}</h1>
   <p >{props.content}</p>
   <button onClick={inDelete} ><DeleteIcon/></button></div>)
}

export default Contents;