import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'


function App() {
const[questions, setQuestions]=useState(data)

  return(
      <main>
        <div className='container'>
        <h3>Questions and answers about log in</h3>
        <div className="info">
            {
              questions.map((question)=>{
                const{id, title, info}=question
                  //because we are having map which means we are looping that is why the component tat we are rreturning comes in multiple according to the length of our data which is 5
                return(
                  //recall that instead of using the prop object, we can just spread what is inside our question into the SingleQuestion component by just saying {...question} and we would be fine 

                  <SingleQuestion key={id} prop={{id, title, info}}/>

                )

              })
            }

        </div>
        </div>
      </main>
  )
 

}

export default App
