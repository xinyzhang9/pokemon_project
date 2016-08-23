import React from 'react'
import HomeImg from './HomeImg'
import HomeForm from './HomeForm'
import HomeTitle from './HomeTitle'
import HomeFooter from './HomeFooter'

export default React.createClass({
  render() {
    return (<div>
    		<HomeTitle />
    		<HomeForm />
    		<HomeImg />
    		<HomeFooter />
    		</div>
    		);
  }
})
