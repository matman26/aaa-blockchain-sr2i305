import React, { Component } from 'react';
import {Form, Button, Input, Message} from 'semantic-ui-react'
import Layout from '../../components/Layout'
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/we3'
import {Router} from '../../routes'


class CampaignNew extends Component{
  state = {
    minContrib: '',
    errorMess: '',
    loading: false
  };
  onSumit = async (event) => {
    event.preventDefault();
    this.setState({loading:true,errorMess:''});

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
      .createCampaign(this.state.minContrib)
      .send({
        from: accounts[0]
      });
      Router.pushRoute('/');
    } catch (error) {
      this.setState({errorMess: error.message});
    }
       this.setState({loading:false});

  }

  render(){
    return (
      <Layout> 
        <h3>Create campaign</h3>
        <Form onSubmit={this.onSumit} error={!!this.state.errorMess}> 
        {/* !! turns the string into it's boolean value, an empty string is false */}
          <Form.Field>
            <label>Minimum contrabution</label>
            <Input 
            label ='WEI' 
            position='right' 
            placeholder='Min to donate to be a contributer'
            value = {this.state.minContrib}
            onChange={event => 
              this.setState({minContrib: event.target.value})
            }
            />
          </Form.Field>
          <Message 
            error 
            header='Something went wrong' 
            content={this.state.errorMess} 
            compact
          />
          <Button primary type='submit' loading={this.state.loading}>Create</Button>
        </Form>


      </Layout>
    )  
  }
}
export default CampaignNew;