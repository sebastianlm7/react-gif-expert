import { useState } from "react"



export const AddCategory = ({ onNewCategory }) => {
  
    const [ inputValue, setInputValue ] = useState('');  

    const onInputChange = (event)=> {
        
         setInputValue( event.target.value ); // esto hace que mi input vaya cambiando a medida que el usuario tipea 
        
    }

    const onSubmit = (event)=> {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return; // si el input es menor a 1 no puedo apretar enter para cargar
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }
  
    return (
    
    <form onSubmit={ onSubmit } >
        
        <input 
        type = "text"
        placeholder = "Buscar GIF" 
        value = { inputValue }
        onChange = { onInputChange } 
        />
    </form>
    
    
  )
}
