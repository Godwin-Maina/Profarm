import { createContext, useReducer } from "react";

export const productsContecxt= createContext();

//productReducer.
export const productReducer = (state,action)=>{ 
    switch(action.type){
        case 'SET_PRODUCTS':
            return{
                products:action.payload

                //payload 
            }
            case 'CREATE_PRODUCTS':
                return{
                    products:[action.payload, ...state.products]  //single new product aded.
                }

                default:
                    return state
    }

}

//provide context to application tree
export const ProductContecxtprovider =({children})=>{

    const [state,dispatch]=useReducer(productReducer,{products:null
    })

    return(

        <productsContecxt.Provider value={{...state,dispatch}}>
            {children}
        </productsContecxt.Provider>
    )
}
