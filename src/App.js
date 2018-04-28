import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import logo from './assets/logo.svg'
import RouterView from './router'
import Sidebar from 'react-sidebar'
import DemoRouterLink from './demo/DemoRouterLink'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  padding-top: 80px;
  padding-left: 1em;
  padding-right: 1em;
`

const SidebarItem = styled.div`
  background: #19212b;
  cursor: pointer;
  padding: .5em 1em;
  padding-left: 1.5em;
  padding-right: 0;
  padding-top: .4em;
  ${'' /* padding-top: 0; */}
  transition: all 300ms;
  text-decoration: none;
  color: lightgray;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;

  &:hover {
    filter: brightness(2);
  }
`

const SidebarSubItem = styled.div`
  background: #19212b;
  cursor: pointer;
  padding: .5em 1em;
  padding-left: 3em;
  padding-right: 0;
  transition: all 300ms;
  text-decoration: none;
  color: lightgray;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;

  &:hover {
    filter: brightness(2);
  }
`
const SidebarTitle = styled.h6`
  padding: 1.5em 1em;
  padding-top: 1em;
  background: rgb(8, 103, 16);
  color: white;
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
      <Link style={{textDecoration: 'none'}} to='/'>
        <SidebarTitle>Tesco Lotus Open Services</SidebarTitle>
      </Link>
      {/* <Link style={{textDecoration: 'none'}} to='/'>
        <SidebarItem>
          <i className="pr-3 fa fa-home" aria-hidden="true"></i>
          Home
        </SidebarItem>
      </Link> */}

      <Link style={{textDecoration: 'none'}} to='/dashboard'>
        <SidebarItem>
          <i className="pr-3 fa fa-dashboard" aria-hidden="true"></i>
          Dashboard
        </SidebarItem>
      </Link>

      {/* <Link style={{textDecoration: 'none'}} to='/services'>
        <SidebarItem>
          <i className="pr-3 fa fa-list" aria-hidden="true"></i>
          All Services
        </SidebarItem>
      </Link> */}
      <hr style={{ background: 'gray', margin: '.5em 0'}} />
          <Link style={{textDecoration: 'none'}} to='/manage'>
            <SidebarItem>
              <i className="pr-3 fa fa-pencil-square" aria-hidden="true"></i>
              Manage Items
            </SidebarItem>
          </Link>
          <Link style={{textDecoration: 'none'}} to='/warehouse'>
            <SidebarItem>
              <i className="pr-3 fa fa-cubes" aria-hidden="true"></i>
              Warehouse
            </SidebarItem>
          </Link>
          <Link style={{textDecoration: 'none'}} to='/logistic'>
            <SidebarItem>
              <i className="pr-3 fa fa-truck" aria-hidden="true"></i>
              Logistics
            </SidebarItem>
          </Link>
          <Link style={{textDecoration: 'none'}} to='/delivery'>
            <SidebarItem>
              <i className="pr-3 fa fa-motorcycle" aria-hidden="true"></i>
              Delivery
            </SidebarItem>
          </Link>
          <Link style={{textDecoration: 'none'}} to='/subscription'>
            <SidebarItem>
              <i className="pr-3 fa fa-thumbs-up" aria-hidden="true"></i>
              {' '}Subscription
            </SidebarItem>
          </Link>
          <Link style={{textDecoration: 'none'}} to='/pos'>
            <SidebarItem>
              <i className="pr-3 fa fa-window-restore" aria-hidden="true"></i>
              POS System
            </SidebarItem>
          </Link>

      <hr style={{ background: 'gray', margin: '.5em 0'}} />
      <Link style={{textDecoration: 'none'}} to='/support'>
        <SidebarItem>
          <i className="pr-3 fa fa-info-circle" aria-hidden="true"></i>
          {' '}Support
        </SidebarItem>
      </Link>
      <Link style={{textDecoration: 'none'}} to='/billing'>
        <SidebarItem>
          <i className="pr-3 fa fa-credit-card" aria-hidden="true"></i>
          Billing
        </SidebarItem>
      </Link>
    </div>
  )

  render() {
    return (
      <Router>
        <div className="App">
            <Sidebar
              styles={{sidebar: {background: '#19212b'}}}
              sidebar={this.sidebarContent}
              docked={this.state.isOpen}
              open={this.state.isOpen}
            >
              <Navbar toggle={this.toggleSidebar} />
              <div className="p-4">
                <RouterView />
              </div>

            </Sidebar>

        </div>
      </Router>
    )
  }
}

export default App
