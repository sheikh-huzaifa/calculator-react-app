import React from 'react'
import PropTypes from 'prop-types'


const display = props => {

  return (
    
    <div className="row">
                
                <div className="input-group input-group-lg">
                    <span className="input-group-text" id="inputGroup-sizing-md" ><div className=" "></div></span>
                    <input type="text" className="form-control outPut" placeholder={props.calOutput} value={props.calOutput} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                  </div>
                  {/* <input type="button" className="topBtn" id="hideBtn" onclick={props.toggle()} value="⬆️"></input> */}
            </div>
  )
}

display.propTypes = {}

export default display