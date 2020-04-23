import React, { Component } from 'react';
import web3 from '../ethereum/we3'
import login from '../ethereum/login';
import { Card,Icon,Image,Button, Form, Grid, Header, Message, Segment, Container } from 'semantic-ui-react'
import Layout from '../components/Layout'


const user ={
  'false': 'Provider',
  'true': 'Beloved User'

}

class Profile extends Component{
  static async getInitialProps(props){
    try{
      const profile = await login.methods.profile(props.query.address).call();
      return {
        username: profile[0], 
        role: user[String(profile[1])],
        address: props.query.address
      };
  }catch(e){
    console.log("error",e)
  }
    }
    
  

  renderCards(){
    const{
      username,
      role,
      address
    } = this.props
    console.log(this.props)
  }

  render(){
    return(

      <Layout>
        {this.renderCards()}
        <Container className="login">
        <Grid as='grid' verticalAlign='middle' textAlign='center'>
          <Grid.Column style={{ maxWidth: 450 }} inverted >
            <Card>
              <Image src='/static/eosio.png' wrapped ui={false} />
              <Card.Content>
                <Card.Header>{this.props.username}</Card.Header>
                <Card.Meta>
                  <span className='date'>{this.props.role}</span>
                </Card.Meta>
                <Card.Description>
                  {this.props.address}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          </Grid>  
        </Container>
      </Layout>
    )
  }
}
export default Profile