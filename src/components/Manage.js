/* Stateful Component */
import React from 'react'
import styled from 'styled-components'

class DemoComponent extends React.Component {
  state = {}

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  render() {
    return (
      <div>
        <h1>This is Manage Items</h1>
      </div>
    )
  }
}

export default DemoComponent
