import React  from 'react'
import PropTypes from 'prop-types'

export const AllwaysUnhide = props => {
    const Working=(value)=>{
        props.Working(value)
    }
    return (
    
    <div id="mainPortion" className="" style={{backgroundColor: "#15004f"}}>
                <div className="row mt-3  "> 
                    <div className="col-2 "><button type="button" className="btn btn-outline-secondary inBtn" id="hideBtn" onClick={()=>props.toggle()} value="⬆️">⇧</button></div>
                    <div className="col-2 offset-1"><button type="button" className="btn btn-outline-secondary inBtn" onClick={()=>props.del()}>⌫</button></div>
                    <div className="col-2 offset-1"><button type="button" className="btn btn-outline-secondary inBtn" onClick={()=>Working('%')}> %</button></div>
                    <div className="col-2 offset-1"><button type="button" className="btn btn-outline-secondary inBtn" onClick={()=>Working('/')}> ÷</button></div>
                </div>
    
                <div className="row  pb-2 "> 
                    <div className="col-2 "><button type="button" className="btn btn-outline-light inBtn" onClick={()=>Working('1')}>1</button></div>
                    <div className="col-2 offset-1"><button type="button" className="btn btn-outline-light inBtn" onClick={()=>Working('2')}>2</button></div>
                    <div className="col-2 offset-1"><button type="button" className="btn btn-outline-light inBtn" onClick={()=>Working('3')}> 3</button></div>
                    <div className="col-2 offset-1"><button type="button" className="btn btn-outline-secondary inBtn" onClick={()=>Working('*')}> ×</button></div>
                </div>
    
                <div className="row mt-2 pb-2 "> 
                    <div className="col-2 "><button type="button" className="btn btn-outline-light inBtn" onClick={()=>Working('4')}>4</button></div>
                    <div className="col-2 offset-1"><button type="button" className="btn btn-outline-light inBtn" onClick={()=>Working('5')}>5</button></div>
                    <div className="col-2 offset-1"><button type="button" className="btn btn-outline-light inBtn" onClick={()=>Working('6')}>6</button></div>
                    <div className="col-2 offset-1"><button type="button" className="btn btn-outline-secondary inBtn" onClick={()=>Working('-')}  >-</button></div>
                </div>
    
                <div className="row mt-2 pb-2 "> 
                    <div className="col-2 "><button type="button" className="btn btn-outline-light inBtn" onClick={()=>Working('7')}>7</button></div>
                    <div className="col-2 offset-1"><button type="button" className="btn btn-outline-light inBtn" onClick={()=>Working('8')}>8</button></div>
                    <div className="col-2 offset-1"><button type="button" className="btn btn-outline-light inBtn" onClick={()=>Working('9')}>9</button></div>
                    <div className="col-2 offset-1"><button type="button" className="btn btn-outline-secondary inBtn" onClick={()=>Working('+')}>+</button></div>
                </div>
    
    
                <div className="row mt-2 pb-3 "> 
                    
                    <div className="col-2 "><button type="button" className="btn btn-outline-light inBtn" onClick={()=>props.clear()}>AC</button></div>
                    <div className="col-2 offset-1"><button type="button" className="btn btn-outline-light inBtn" onClick={()=>Working('0')}>0</button></div>
                    <div className="col-2 offset-1"><button type="button" className="btn btn-outline-light inBtn" onClick={()=>Working('.')}>.</button></div>
                    <div className="col-2 offset-1"><button type="button" className="btn btn-outline-secondary inBtn" onClick={()=>props.equal()}>=</button></div>
                </div>
            </div>
  )
}

AllwaysUnhide.propTypes = {}

// export default AllwaysUnhide