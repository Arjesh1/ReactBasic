// import {useState} from "react"

// export const Form = () => {

//     const [form, setform] = useState("")

//     const handleOnChange = (e) =>{
//         const {name , value} = e.target
//         setform(value)
//     }

//     const handleOnSubmit = (e) =>{
//         e.preventDefault()
//         setSubmitDt(form)
//     }

//     return (
//     <div>
//         <div>{form}</div>
//         <hr/>
//         <form action="" onSubmit={handleOnSubmit}>
//             <p> 
//                 <label htmlFor="">First Name</label>
//                 <input onChange={handleOnChange}type ="text"  name="fName"/>
//             </p>

//             <button type="submit">Submit</button>
//         </form>
//     </div>
//     )
    

// }