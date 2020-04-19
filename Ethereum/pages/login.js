import React, { Component, useLayoutEffect } from 'react';
import randomString from 'crypto-random-string'

import login from '../ethereum/login';
import web3 from '../ethereum/we3'
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
    try {
      const accounts = await web3.eth.getAccounts();
      const secret = randomString({length: 15, type:'base64'})
      var hash = web3.utils.sha3(secret)
      var signature = await web3.eth.personal.sign(hash, accounts[0])
      console.log("signature",signature)
      console.log("hash",hash)
      var ans = "";
      ans = await login.methods.signIn(hash,signature, this.state.username,1).send({
        from: accounts[0]
      }) 
      const profile = await login.methods.profile(accounts[0]).call()
      this.state.username = profile[0]
      this.state.role = profile[1]
      console.log("Profile",profile);
      if(ans.status === true) {
        localStorage.setItem('session', signature)
        // Router.pushRoute('/');
      }else{
        this.setState({errorMess: "Authentication has failed"});
      }

      this.setState({loading:false,errorMess:''});
    } catch (error) {
      this.setState({errorMess: "Not username provided"});

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