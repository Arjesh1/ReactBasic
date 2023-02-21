import { useState } from "react";
import "./App.css";
// import Prem from "./Title"; //export default
// import { Footer } from "./Title"; //inline export
// import { Display } from "./Display";

// import { Btns } from "./Btns.js";
// import { Form }from './Form'

import { Form1 } from "./Form1";
import { Display1 } from "./Display1";
import { Chat } from "./Chat";

// import { Form } from "./practise/Form"
// import { Display } from "./practise/Display1";
// import { Chat } from "./practise/Chat";
const App = () => {

  const [ddt, setDdt] = useState("")

  const handleOnSubmit = () =>{

  } 
 

  // let counter = 125;

  // const [counter, setCounter] = useState(0);

  // const increment = () => {
  //   setCounter(counter + 1);
  //   console.log(counter);
  // };

  // const decrement = () => {
  //   setCounter(counter - 1);
  //   console.log(counter);
  // };

  // const update = (operator) => {
  //   const fun = {
  //     "+": () => setCounter(counter + 1),
  //     "-": () => setCounter(counter - 1),
  //     reset: () => setCounter(0),
  //   };

  //   fun[operator]();
  //   // increment
  //   if (operator === "+") {
  //     setCounter(counter + 1);
  //   }
  //   //decrement
  //   if (operator === "-") {
  //     setCounter(counter - 1);
  //   }
  //   //reset
  //   if (operator === "reset") {
  //     setCounter(0);
  //   }
  // };

return (
    <div className="App">
{/* <Prem /> */}
      {/* <Footer />
      <Display counter={counter} />
      <br />
      <Btns update={update} />
      <Form/> */}
         
      <Form1 setDdt={setDdt}/>
      <hr/>
      <Display1 ddt={ddt}/>

{/* <Form/> */}




    </div>
  );
};

export default App;
