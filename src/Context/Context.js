import react, { createContext, useState } from 'react'
import './context.css'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3'

 
export const MyContext = createContext()

const Context = () => {
  
     const [value, setValue] = useState(0)

     const handelChange =()=>{
         setValue(value+1)
     }

     const myData = {
         value,
         handelChange
     }

    return (
        <>
            <h1>Context Hooks</h1> 
                <h3>My Value : {value}</h3>
            <button onClick={handelChange}> Add </button>
            <button onClick={()=>setValue(0)}> Reset</button>
            <MyContext.Provider value={myData}>
                <Comp1 />
                <Comp2 />
                <Comp3 />
            </MyContext.Provider> 
        </>
    )
}

export default Context;
