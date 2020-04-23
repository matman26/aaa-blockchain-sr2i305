import React, { Component } from 'react';
import { Menu,Input,Segment,Container,Header,Icon} from 'semantic-ui-react';
import { Link } from '../routes'

 
class HeaderNew extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Container as="nav">
        <Header inverted as="h1">
          <Link route='/home'>
            <a> AAA with Blockchain <Icon name='ethereum'/></a>
          </Link>
        </Header>
        <Menu borderless compact inverted>
          <Link route='/home' >
            <a className="item">Home</a>
          </Link>
          <Link route='/login' >
            <a className="item">Login</a>
          </Link>
          <Link route='https://github.com/matman26/aaa-blockchain-sr2i305'>
            <a className="item" target="_blank">Code</a>
          </Link>
        </Menu>
      </Container>  
    )
  }
}
export default HeaderNew