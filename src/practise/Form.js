import { useState } from "react";
import { Chat } from "./Chat";
import {Display} from "./Display"
export const Form = () =>{

    const [frmDt, setFrmDt] = useState("")
   
    const typingWhenTyped = (event) =>{
        const {value} = event.target
        setFrmDt(value)
    }

    const [sendDt, setSendDt] = useState("")
    const showSubmitDt =(e) =>{
        e.preventDefault()

       const sendDt = frmDt
        
    }
    



    return(
        <>
        <Chat frmDt={frmDt}/>
        <form onSubmit={showSubmitDt} >
            <input onChange={typingWhenTyped} type="text" required></input>
            <button type="submit">Submit</button>
        </form>
        <Display sendDt = {frmDt}/>
        </>

    )
}