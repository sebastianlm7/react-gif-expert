import { Fragment} from "react"
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";



export const GifGrid = ({ category }) => {
    // este hook lo que hace es que ejecuta la función en el primer arguemnto y en el segundo si no pongo nada se ejecuta solo una vez
    
    const {images, isLoading } = useFetchGifs( category ); 

    
    return (
    
    <Fragment>
    
        <h3> {category} </h3>
        
        {

         isLoading && (<h2> Cargando... </h2>)
        
        }
        

        <div className="card-grid">
            { images.map( ( image ) => (  
                
                <GifItem key={image.id} 

                {...image} // con esto estoy esparciendo todas las props que vienen con image (title, url)
                            // para que el componente hijo pueda tener acceso
                />

            ) 
        
            )}
    
        </div>

        
    
    </Fragment>
  )
}
