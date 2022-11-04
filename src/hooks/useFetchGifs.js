import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// este es un hook que retorna un objeto (una funcino)
export const useFetchGifs = ( category ) => {

    

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState( true ); 


    useEffect( ()=> {
         getGifs( category )
             .then( newImages => setImages(newImages) )
             .then( setIsLoading(false)) ;
        


     }, [] )   


    return {
        images: images, //esto prodia ponerlo solo como images
        isLoading: isLoading
    }
  
}
