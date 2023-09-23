import React from 'react'
import PropTypes from 'prop-types'

const extraBtn = props => {
    const insert=(value)=>{
        props.insert(value)
    }
  return (
    <div className=" pt-2" id="extra"  >
                <div className="row my-2 " >
                    <div className="col-2 "><button type="button" className="btn btn-outline-light extraBtn" onClick={() => props.Working(Math.sin(props.value).toFixed(2))}>SIN</button></div>
                    <div className="col-2 offset-1"><button type="button" className="btn btn-outline-light extraBtn " onClick={() => props.Working(Math.cos(props.value).toFixed(2))}>COS</button></div>
                    <div className="col-2 offset-1"><button type="button" className="btn btn-outline-light extraBtn" onClick={() => props.Working(Math.tan(props.value).toFixed(2))}>TAN</button></div>
                    <div className="col-2 offset-1"><button type="button" className="btn btn-outline-light extraBtn" onClick={()=>props.factorialBtn()}>!</button></div>
                </div>
        
                <div className="row my-2" >
                    <div className="col-2  "><button type="button" className="btn btn-outline-light extraBtn" onClick={() => props.Working(Math.LN2(props.value).toFixed(2))}>LN</button></div>
                    <div className="col-2 offset-1"><button type="button" className="btn btn-outline-light extraBtn" onClick={() => props.Working(Math.log(props.value).toFixed(2))}>LOG</button></div>
                    <div className="col-2 offset-1"><button type="button" className="btn btn-outline-light extraBtn" onClick={()=> insert(3.14)}>π</button></div>
                    <div className="col-2 offset-1"><button type="button" className="btn btn-outline-light extraBtn">e</button></div>
                </div>
        
                <div className="row my-2"  >
                    <div className="col-2  "><button type="button" className="btn btn-outline-light extraBtn">(</button></div>
                    <div className="col-2 offset-1"><button type="button" className="btn btn-outline-light extraBtn">)</button></div>
                    <div className="col-2 offset-1"><button type="button" className="btn btn-outline-light extraBtn">√</button></div>
                    <div className="col-2 offset-1"><button type="button" className="btn btn-outline-light extraBtn">^</button></div>
                </div>
        
                
            </div>
  )
}

extraBtn.propTypes = {}

export default extraBtn