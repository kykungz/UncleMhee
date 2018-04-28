import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  ${'' /* background: #19212b !important; */}
  background: var(--danger) !important;
`

const Hamburger = styled.button`
  background: rgba(0,0,0,0);
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

class DemoComponent extends React.Component {
  state = {}

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  toggle = () => {
    this.props.toggle()
  }

  render() {
    return (
      <Nav className="sticky-top navbar navbar-expand-lg">
        <Hamburger onClick={this.toggle} className="navbar-brand" href="#">
          <i style={{transform: 'scale(1.8)'}} className="fa fa-bars" aria-hidden="true"></i>
        </Hamburger>
        <div className="collapse navbar-collapse" id="navbarText">
          {/* <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul> */}
          <span className="navbar-text ml-auto">
            Navbar text with an inline element
          </span>
        </div>
      </Nav>
    )
  }
}

export default DemoComponent
