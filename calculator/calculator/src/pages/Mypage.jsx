import React from 'react'
import Smallbutton from '../Component/Smallbutton'

function Mypage() {
  return (
    <div>
        <div className='mainCalcDiv'>
             <div className='inputDiv'>
                <input className='input'/>
             </div>
             <div className='buttonDiv'>
                <Smallbutton />
                <Smallbutton />
                <Smallbutton />
                <Smallbutton />
                <Smallbutton />
                <Smallbutton />
                <Smallbutton />
                <Smallbutton />
                <Smallbutton />
                <Smallbutton />
                <Smallbutton />
                <Smallbutton />
                <Smallbutton />
                <Smallbutton />
                <Smallbutton />
                <Smallbutton />
             </div>
             <button className='del'>Del</button>
        </div>
    </div>
  )
}

export default Mypage