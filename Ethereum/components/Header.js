import React, { Component } from 'react';
import { Menu,Input,Segment } from 'semantic-ui-react';
import { Link } from '../routes'

 
class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div>
         <Menu pointing style={{marginTop: '2em'}}>
            
              <Link route='/'>
                <a className="item">Crowdcoin</a>
              </Link>
              <Link route='/'>
                <a className="item">Campaigns</a>
              </Link>
              <Link route='/campaigns/new'>
                <a className="item">Create campaign</a>
              </Link>
            <Menu.Menu position='right'>
            <Link route='/login'
              >
              <a className="item">Login</a>
            </Link>
            </Menu.Menu>
          </Menu>
      </div>
    )
  }
}
export default Header