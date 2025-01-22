import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons/Buttons'
import CountField from './components/CountField/CountField'
function App() {


  return (
   <>
   <CountField/>
   
   <div className='button-container'> 
   <Buttons btnType='number'/>
   <Buttons btnType='operator'/>
   <Buttons btnType='function'/>
   <Buttons btnType='enter'/>
   </div>
   
   </>
  )
}

export default App
