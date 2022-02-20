
import react,{useContext} from 'react'
import { MyContext } from './Context';
  
const Comp1 = ()=>{
    const Data = useContext(MyContext);
    return(
        <>   
           <h2>This is  Component 1  </h2>
           <button onClick={Data.handelChange}>Add</button>
             <h3>My value:{Data.value}</h3>

               
        </>
    )
}
export default Comp1