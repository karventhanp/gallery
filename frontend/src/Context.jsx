import {useState,createContext} from 'react'
import axios from 'axios'

export const Context=createContext()
export const ContextProvider=(props)=>{
    const [img,setImg]=useState(()=>{
        axios.get("http://localhost:5000/data/getimages")
        .then(res =>setImg(res.data))
        .catch(err => console.log(err))
    });

    const [aud,setAud]=useState(()=>{
        axios.get("http://localhost:5000/data/getaudios")
        .then(res=>setAud(res.data))
        .catch(err=>console.log(err))
    });

    const [vid,setVid]=useState(()=>{
        axios.get("http://localhost:5000/data/getvideos")
        .then(res=>setVid(res.data))
        .catch(err=>console.log(err))
    });

    return(
        <Context.Provider value={{yimg:[img,setImg],yaud:[aud,setAud],yvid:[vid,setVid]}}>
            {props.children}
        </Context.Provider>
    )
}
