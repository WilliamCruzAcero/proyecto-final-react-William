import { useState } from "react"


const Count = () => {
  
    const [increase, setIncrease ] = useState(0)
   
    const clickMinus = ()=>{
      setIncrease( increase - 1) 
    }
    const clickPlus = ()=>{
      setIncrease( increase + 1) 
    }
    
    
      
  
  
    return (
      <div className='flex'>
            <box-icon onClick={clickMinus} name='minus'></box-icon>
            <p className='cantidad'>{increase}</p>
            <div></div>
            <box-icon onClick={clickPlus} name='plus'></box-icon>
          </div>
          
    )
  }
  
  export default Count