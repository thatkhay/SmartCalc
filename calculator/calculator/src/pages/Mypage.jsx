import React from 'react'
import Smallbutton from '../Component/Smallbutton'

function Mypage() {
  const buttonValues = ['AC','/','*','+','1','2','3','4','5','6','7','8','9','0','.','=']
  return (
    <div className='main'>
        <div className='mainCalcDiv'>
             <div className='inputDiv'>
                <input className='input'/>
             </div>
             <div className='buttonDiv'>
              {buttonValues.map((value) => (
                <Smallbutton key={value} value={value} />
                  ))}
               
             </div>
             <button className='del'>Del</button>
        </div>
    </div>
  )
}

export default Mypage