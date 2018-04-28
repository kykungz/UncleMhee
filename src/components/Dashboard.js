import React from 'react'
import styled from 'styled-components'

let activated = false;

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
  border-radius: 8px;
  height: 380px;
`

const AddWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: 80px;
  background: rgba(0, 0, 0, 0.1);
`

const Add = (props) => (
  <AddWrapper className="d-flex justify-content-center align-items-center">
    <button onClick={props.onActivate} className="btn btn-primary">Activate</button>
  </AddWrapper>
)

const Service = (props) => (
  <div className="position-relative">
    <Box>{props.name}</Box>
    {
      !activated && <Add onActivate={props.onActivate}/>
    }
  </div>
)

class DemoComponent extends React.Component {
  state = {}

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  render() {
    return (
      <div>
        <h1>This is DashBoard</h1>
        <Grid>
          <Service onActivate={() => {
            activated = true
            console.log("hi")
          }} name="Warehouse"/>
          <Service name="Logistic"/>
          <Service name="Delivery"/>
          <Service name="Subscripion"/>
          <Service name="POS System"/>
          {/* <Box>Logistic</Box>
          <Box>Delivery</Box>
          <Box>Subscription</Box>
          <Box>Point of Sale System</Box> */}
        </Grid>
      </div>
    )
  }
}

export default DemoComponent
