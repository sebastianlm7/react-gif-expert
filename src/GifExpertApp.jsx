import { Fragment, useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
    

    const [categories, setCategories] = useState([]);

    
    const onAddCategory = ( newCategory ) => {
         
        if ( categories.includes( newCategory ) ) return; 
        setCategories( [newCategory, ...categories,])
        }

    return (

    <Fragment>
        
        <h1>Los Gifs de Agus</h1>

       
        <AddCategory 

        onNewCategory = { (value) => onAddCategory(value) }
        
        />


        {/* Listado de GIF */}
        
        
        { categories.map( category => (

            <GifGrid key={category} category = {category}  /> 
            )

          )} 
            
     
    </Fragment>
    
  )
}
