import React, { Component } from 'react';
import Cookie from 'js-cookie';
import {signUp} from '../lib/auth'
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
  onSubmit = async (event) =>{
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
  render(){
    return(
      <Layout>
        <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='blue' textAlign='center'>
              {/* <Image src='/logo.png' /> Log-in to your account */}
              Log-in to your account
            </Header>
            <Form size='large' onSubmit={this.onSubmit} error={!!this.state.errorMess}>
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
        </Grid>
      </Layout>
    )
  }
}
export default Login