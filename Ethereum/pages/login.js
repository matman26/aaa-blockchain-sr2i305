import React, { Component } from 'react';
import Cookie from 'js-cookie';
import {signUp} from '../lib/auth'
import { Button, Form, Grid, Header, Message, Segment, Container } from 'semantic-ui-react'
import Layout from '../components/Layout'
import {Router, Link } from '../routes'

import web3 from '../ethereum/we3'
import login from '../ethereum/login';

const options = [
  { key: 'u', text: 'User', value: 1 },
  { key: 'p', text: 'Provider', value: 0 }
];

class Login extends Component{
  state = {
    username: '',
    errorMess: '',
    role: -1,
    loading: false
  };

  resetState(){
    this.state = {
      username: '',
      errorMess: '',
      role: -1,
      loading: false
    }
  }

  onSubmitEth = async (event) =>{
    event.preventDefault();
    this.setState({loading:true,errorMess:''});
    const {username,role} = this.state
    const {result} = await signUp(username,role)
    console.log("Token: ",result)
    if(result.status === true){
      Cookie.set('session', result.signature)
      Router.pushRoute(`/profile/${result.addr}`);
      const profile = await login.methods.profile(result.addr).call();
      console.log(profile)

      this.setState({loading:false,errorMess:''});
    }else{
      this.setState({errorMess: result})
    }
    this.resetState()
  }

  render(){
    return(
      <Layout>
        <Container className="login">
        <Grid as='grid' verticalAlign='middle' textAlign='center'>
          <Grid.Column style={{ maxWidth: 450 }} inverted >
            <div>
            <video width='400px' height='200px' margin='auto' src="https://ethereum.org/ethereum-hero-dark.mp4" playsInline autoPlay loop muted className='logo'>
            </video>
            </div>
            
            <Header as='h2' textAlign='center'>
            <Header.Content>Log-in to your account</Header.Content>
              
            </Header>
            <Form size='large' onSubmit={this.onSubmitEth} error={!!this.state.errorMess}>
              <Segment as='form'stacked >
                <Form.Input
                  fluid
                  label='Username'
                  icon='user'
                  iconPosition='left'
                  placeholder='Username'
                  value = {this.state.username}
                  onChange={event => 
                    this.setState({username: event.target.value})
                  }
                />
                <Form.Select
                  fluid
                  label='Role'
                  options={options}
                  value = {this.state.role}
                  onChange={(e, { value }) => this.setState({ role: value })}
                />
                <Message 
                  error 
                  header='Something went wrong' 
                  content={this.state.errorMess} 
                  compact
                />
                <Grid verticalAlign='middle' textAlign='center' relaxed>
                  <Grid.Column width={8}>
                    <Button color="teal" 
                      inverted 
                      fluid 
                      size='large' 
                      type='submit' 
                      loading={this.state.loading}
                    >
                      Login
                    </Button>
                  </Grid.Column>
                </Grid>
              </Segment>
            </Form>
           </Grid.Column>
          
        </Grid>
        </Container>
      </Layout>
    )
  }
}
export default Login


// onSubmitEOS = async (event) =>{
  //   event.preventDefault();
  //   this.setState({loading:true,errorMess:''});
  //   console.log("Acaaaa");
  //   const data = {
  //     user: this.state.username
  //   }
  //   return eosApi.login(data)
  //   console.log("Despues promesa");
  // }


  {/*<Grid.Column style={{ maxWidth: 450 } } floated='right'>
          <Image centered size='small' src="/static/eosio.png" />
            <Header as='h2' color='blue' textAlign='center'>
              <Header.Content>Log-in to your account</Header.Content>
            </Header>
            <Form size='large' onSubmit={this.onSubmitEOS} error={!!this.state.errorMess}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='Username'
                  onChange={event => 
                    this.setState({username: event.target.value})
                  }
                />
                <Message 
                  error 
                  header='Something went wrong' 
                  content={this.state.errorMess} 
                  compact
                />
                <Button color='blue' fluid size='large' type='submit'>
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column> */}