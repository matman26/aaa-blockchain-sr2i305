import React, { Component } from 'react';
import { Menu,Input,Segment,Container,Header } from 'semantic-ui-react';
import { Link } from '../routes'

 
class HeaderL extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Container as="nav">
        <Header inverted as="h1">
          <Link route='/home'>
          AAA with Blockchain
          </Link>
        </Header>
        <Menu borderless compact inverted>
          <Menu.Item active>
            <Link route='/home' >Home</Link>   
          </Menu.Item>
          <Menu.Item>
            <Link route='/login' >Login</Link>   
          </Menu.Item>
          <Menu.Item>Contact</Menu.Item>
        </Menu>
      </Container>
      
      // <div>
        
      //     <Menu pointing style={{marginTop: '2em'}}>
      //       <Link route='/home'>
      //         <a className="item">AAA with Blockchain</a>
      //       </Link>
      //       <Menu.Menu position='right'>
      //       <Link route='/login'>
      //         <a className="item">Login</a>
      //       </Link>
      //       </Menu.Menu>
      //     </Menu>
      // </div>
    )
  }
}
export default HeaderL