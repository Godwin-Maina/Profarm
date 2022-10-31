
import { useContext } from "react";

import { productsContecxt } from "../context/productContext";


//whenever we want to use the productscontext we shall only invoke this hook

export const Useproductcontext =()=>{

 const context= useContext (productsContecxt)
 
 
 if(!context){
        throw Error("use productcontext must be used inside an productcontextprovider")
    }
    
    return context

}


  
