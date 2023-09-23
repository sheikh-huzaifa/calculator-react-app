import React ,{ useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Display from './landing page sections/display'
import {AllwaysUnhide}  from './landing page sections/AllwaysUnhide'
import ExtraBtn from './landing page sections/extraBtn'

const Landingpage = props => {
  const [value , setvalue]=useState("")
  const [view , setveiw]=useState(false)
  const toggle =()=>{
   setveiw(!view)
  }
  function insertingValue(input){
    setvalue((prevState) => (prevState += input))
  }
    const back=()=>{
          setvalue(value.slice(0, value.length - 1));
          setvalue((prewvalue)=> prewvalue.slice(0 , prewvalue.length - 1).toString())
        } 
    
    const promptClear=()=>{
      setvalue("")
    }

    const CalEqual=()=>{
      try {
        let result = eval(value).toString();
        setvalue(result)
    } catch (error) {
      setvalue("Incorrect Enteries")
    }   
       }
    
    
       const factorialBtn = () => {
        function factorial(n){
            let answer = 1;
             if (n === 0 || n === 1){
            return answer;
            }
            else if(n > 1){
            for(var i = n; i >= 1; i--){
                 answer = answer * i;
                }
                return answer;
                }
            else{
                return "number has to be positive."
                }  
            }
    
            // try {
                let result = eval(value).toString();
                let factorialResult = factorial(result)
                setvalue(factorialResult)
            // } catch (error) {
                
            //     setvalue ("Incorrect Enteries")
            // }
    }
    
    
  

console.log(value);
  return (

    <div className="container-fluid">
         <div className="container mt-5 pt-3 border-1 rounded-3 px-3 " style={{backgroundColor: "#15004f", width: "20%"}}>
            <Display calOutput={value} />
            {view && <ExtraBtn Working={setvalue} insert={insertingValue} value={value} factorialBtn={factorialBtn}/>}
            
            <AllwaysUnhide Working={insertingValue} del={back} clear={promptClear} equal={CalEqual} toggle={toggle}/>
            
         </div>

    </div>
  )
}

Landingpage.propTypes = {}

export default Landingpage