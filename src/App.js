import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import logo from './assets/logo.svg'
import RouterView from './router'
import Sidebar from 'react-sidebar'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  padding-top: 80px;
  padding-left: 1em;
  padding-right: 1em;
`

const SidebarItem = styled.div`
  background: #2c3e50;
  cursor: pointer;
  padding: .7em 1em;
  padding-left: 1.5em;
  padding-right: 0;
  ${'' /* padding-top: .5em; */}
  ${'' /* padding-top: 0; */}
  transition: all 300ms;
  text-decoration: none;
  color: white;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 15px;
  letter-spacing: 0.8px;

  &:hover {
    filter: brightness(2);
  }
`

const SidebarSubItem = styled.div`
  background: #2c3e50;
  cursor: pointer;
  padding: .5em 1em;
  padding-left: 3em;
  padding-right: 0;
  transition: all 300ms;
  text-decoration: none;
  color: white;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 18px;

  &:hover {
    filter: brightness(2);
  }
`
const SidebarTitle = styled.h6`
  padding: 1.5em 2em;
  padding-top: 1em;
  background: #2c3e50;
  color: white;
  text-align: center;
`

const Transition = styled.div`
  transition: all 100ms;
  ${'' /* animation: fade 2s;

  @keyframes fade {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  } */}
`

const Circle = styled.img`
  width: 160px;
  height: 160px;
  ${'' /* margin: 1.5em auto; */}
  padding: 20px;
  padding-bottom: 2em;
`

const Name = styled.div`
  font-size: 22px;
  font-family: 'Josefin Sans', sans-serif;
`

const mql = window.matchMedia(`(min-width: 800px)`);

class App extends React.Component {
  state = {
    isOpen: true
  }

  toggleSidebar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  sidebarContent = (
    <div>
      <SidebarTitle>
        <Circle width='100' src={require('./assets/LungMhee.svg')} alt=""/>
        <Name>
          UncleTedd
        </Name>
      </SidebarTitle>

      <Link style={{textDecoration: 'none'}} to='/'>
        <SidebarItem style={{ borderLeft: 'solid thick white', background: '#34495e' }}>
          <i className="pr-3 fa fa-th" aria-hidden="true"></i>
          ALL ACTIVITIES
        </SidebarItem>
      </Link>

      <Link style={{textDecoration: 'none'}} to='/'>
        <SidebarItem>
          <i className="pr-3 fa fa-credit-card-alt" aria-hidden="true"></i>
          BILLING
        </SidebarItem>
      </Link>

      <Link style={{textDecoration: 'none'}} to='/'>
        <SidebarItem>
          <i className="pr-4 fa fa-flag" aria-hidden="true"></i>
          REPORT
        </SidebarItem>
      </Link>

      <Link style={{textDecoration: 'none'}} to='/'>
        <SidebarItem>
          <i className="pr-4 fa fa-wrench" aria-hidden="true"></i>
          REPAIR
        </SidebarItem>
      </Link>

      <Link style={{textDecoration: 'none'}} to='/'>
        <SidebarItem>
          <i className="pr-4 fa fa-users" aria-hidden="true"></i>
          SERVICES
        </SidebarItem>
      </Link>
    </div>
  )

  render() {
    return (
      <Router>
        <div className="App">
            <Sidebar
              styles={{sidebar: {background: '#2c3e50'}}}
              sidebar={this.sidebarContent}
              docked={this.state.isOpen}
              open={this.state.isOpen}
            >
              <RouterView />
            </Sidebar>
        </div>
      </Router>
    )
  }
}

export default App
