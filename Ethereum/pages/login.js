import React, { Component } from 'react';
import randomString from 'crypto-random-string'

import login from '../ethereum/login';
import web3 from '../ethereum/we3'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import Layout from '../components/Layout'
import {Router, Link } from '../routes'

class Login extends Component{
  state = {
    errorMess: '',
    loading: false
  };
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
      var ans = ""

      try{
        ans = await login.methods.recover(hash,signature).call()
        console.log(ans);
        
      }catch(error){
        console.log(error); 
      }
    
      if(ans.toLowerCase() === accounts[0].toLowerCase()) {
        localStorage.setItem('session', signature)
        Router.pushRoute('/');
      }
 
    } catch (error) {
      this.setState({errorMess: error.message});
    }

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
                <Form.Input fluid icon='user' iconPosition='left' />
                <Message 
                  error 
                  header='Something went wrong' 
                  content={this.state.errorMess} 
                  compact
                />
                {/* <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                /> */}
                <Button color='blue' fluid size='large' type='submit' loading={this.state.loading}>
                  Login
                </Button>
              </Segment>
            </Form>
            {/* <Message>
              New to us? <a href='#'>{this.props.address}</a>
            </Message> */}
          </Grid.Column>
        </Grid>
      </Layout>
    )
  }
}
export default Login