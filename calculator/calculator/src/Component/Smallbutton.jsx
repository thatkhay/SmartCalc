import React from 'react'

function Smallbutton( {value, onClick} ) {
  const handleClick = (e) => {
   console.log(e.target.innerText);
   onClick(value)
  }
  return (
    <div>
        <button className='smallButton' onClick={handleClick}>{value}</button>
    </div>
  )
}

export default Smallbutton