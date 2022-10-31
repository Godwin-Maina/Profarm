
import {useState } from 'react';
import { useAuthContext } from './useAuthContext';



export const UseSignup =()=>{

    const [error,setError]=  useState(null);
    const [isLoading,setIsLoading]= useState(null);
    const {dispatch} = useAuthContext();

    const signup = async(FirstName,LastName,Email,Password)=>{
    setIsLoading(true)
    setError(null)

    const response = await fetch('http://localhost:3001/signup',{
        method:'POST',
        headers:{'Content-Type':"application/json"},
        body: JSON.stringify({FirstName,LastName,Email,Password})
    });

        const json= await response.json()

        if(!response.ok){
            setIsLoading(false);
            setError(json.error)
        }
        if(response.ok){
             //save user to local storage (email and token)
             localStorage.setItem('user',JSON.stringify(json))
       
        //updating auth context using AuthContext context
        dispatch({type:'LOGIN',payload:json})
        setIsLoading(false)
        }
    }
        return {signup,isLoading,error}
    }
