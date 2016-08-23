import React from 'react'

export default React.createClass({
  render() {
    return (
    		<form className = 'form-inline'>
				<div className = "form-group">
					<input className = "form-control" type="text" placeholder = 'enter your name' /> 
					  <input className = "form-control" type="radio" value="m" /> Male 
					  <input className = "form-control" type="radio" value="f" /> Female 
					<button type="submit" className = 'btn btn-default' >Finish</button>
				</div>
			</form>
    	);
  }
})