
import react, {useContext} from 'react'
import {MyContext} from './Context'
const Comp2 =()=>{

     const Data =useContext(MyContext)
    return(
        <> 
          <h2>This is Component 2 </h2>
          <button onClick={Data.handelChange}>Add</button>
          <h3>My Value: {Data.value}</h3> 
        </>
    )
}
export default Comp2