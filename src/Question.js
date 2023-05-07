import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'


const Question = ({prop}) => {
  const[showinfo, setshowinfo]=useState(false)


//the values available in our props include the id, title and the info
  return (
    
    <article className='question'>
      <header>
        <h4>{prop.title}</h4>
        <button className='btn' onClick={()=>{
         setshowinfo(!showinfo)
        }}>{showinfo?<AiOutlineMinus/>:<AiOutlinePlus/> }</button>
      </header>
      {
      showinfo && <p>{prop.info}</p> 
      //we made use of the double ampersand instead of the ternary operator, meaning that if the showinfo is true then show the info insid eof the paragraph and if it is not true do not show it. This is different from the ternary operator in which, we say if this is true, show this or if this is not ture show this and so on
      }
      
    </article>
  ) 

}

export default Question
