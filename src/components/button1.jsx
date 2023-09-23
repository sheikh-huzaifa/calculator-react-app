import React from 'react'
import PropTypes from 'prop-types'

const button1 = props => {
  return (
    <div class="col-2 "><input type="button" class="btn btn-outline-secondary inBtn" onclick={props.handler} value={props.value}>{props.innerText}</input></div>
  )
}

button1.propTypes = {}

export default button1