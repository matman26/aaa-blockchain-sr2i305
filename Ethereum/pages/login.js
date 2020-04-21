import React, { Component } from 'react';
import Cookie from 'js-cookie';
import {signUp} from '../lib/auth'
import eosApi from '../lib/eosAPI'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import Layout from '../components/Layout'
import {Router, Link } from '../routes'

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
    const {result} = await signUp(this.state.username,1)
    console.log("Token: ",result)
    if(result.status === true){
      Cookie.set('session', result.signature)
      Router.pushRoute('/');
    }else{
      this.setState({errorMess: result})
    }
    this.resetState()
  }

  onSubmitEOS = async (event) =>{
    event.preventDefault();
    this.setState({loading:true,errorMess:''});
    console.log("Acaaaa");
    return eosApi.login(this.state.username)
    console.log("Despues promesa");
  }

  render(){
    return(
      <Layout>
        <Grid style={{ height: '80vh' }} verticalAlign='middle' columns='equal'>
          <Grid.Column style={{ maxWidth: 450 }} floated='left'>
            <video width='450px' height='150px' margin='auto' src="https://d33wubrfki0l68.cloudfront.net/392e4f97600667731f325389608f9d81e23d949e/5e764/ethereum-hero-light.mp4" playsInline autoPlay loop muted>
            </video>
            <Header as='h2' color='blue' textAlign='center'>
            <Header.Content>Log-in to your account</Header.Content>
              
            </Header>
            <Form size='large' onSubmit={this.onSubmitEth} error={!!this.state.errorMess}>
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
                <Button color='blue' fluid size='large' type='submit' loading={this.state.loading}>
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
          <Grid.Column style={{ maxWidth: 450 } } floated='right'>
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
          </Grid.Column>
        </Grid>
      </Layout>
    )
  }
}
export default Login