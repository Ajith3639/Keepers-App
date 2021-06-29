import React,{useState} from  "react"
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props){
    const[expands,expandFun]=useState(false);
    const [Title,createNote]=useState({
        title:"",
        content:""

    })
    function expand(){
        expandFun(true);
    }
    function addItems(event){
        const item=event.target.value;
        const name=event.target.name;
        createNote(prevvalue=>{
               if(name==="title"){
                  return{ title:item,
                   content:prevvalue.content}
               }
               else if(name==="content"){
                return{ title:prevvalue.title,
                    content: item }
               }

        }
            
        )

    }
    function submitNote(event){
        event.preventDefault();
        props.onAdd(Title);
        
        
    }
return(
<form className="create-note">
{expands&&(<input name="title" placeholder="Title" onChange={addItems} value={Title.title}></input>)}
    
    <textarea name ="content" onChange={addItems} value={Title.content}  onClick={expand} row={expands?3:1} placeholder="Take a note"></textarea>
    <Zoom in={true}><Fab onClick={submitNote} ><AddIcon/></Fab></Zoom>
    
    
    </form>
    );

}

export default CreateArea;