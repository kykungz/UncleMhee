import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 728px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: whitesmoke;
  border-radius: 50%;
  height: 380px;
`

class Services extends React.Component {
  state = {}

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  render() {
    return (
      <div>
        <h1>This is DashBoard</h1>
        <Grid>
          <Box>Warehouse</Box>
          <Box>Logistic</Box>
          <Box>Delivery</Box>
          <Box>Subscription</Box>
          <Box>Point of Sale System</Box>
        </Grid>
      </div>
    )
  }
}

export default Services
