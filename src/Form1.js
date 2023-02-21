import { useState } from "react";
import { Chat } from "./Chat";
export const Form1 =({setDdt}) => {

        const [frmDt, setFrmDt] = useState("")

        //receive data from input field as we type
        const getDataFromInputAsWeType = event => {
            const { value } = event.target
            setFrmDt(value)
        }

        const handleOnFormSubmit = (e) => {
            e.preventDefault() //prevent browser from reload.
            setDdt(frmDt)
            
        }
    
    
    return (
        
        <div>
          <Chat frmDt1 ={frmDt}/>
       
        
          <form onSubmit={handleOnFormSubmit}>
        
                <input onChange={getDataFromInputAsWeType}
                type ="text"  name="fName" required/>
                <button type="submit">Submit</button>
        </form>

        
        </div>
        
    
    )

}