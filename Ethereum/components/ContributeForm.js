import React, { Component } from 'react';
import {Form, Input, Message, Button} from 'semantic-ui-react'
import web3 from '../ethereum/we3'
import Campaing from '../ethereum/campaign'
import { Router } from '../routes'


class ContributeForm extends Component{
  state = {
    amount: '',
    errorMess: '',
    loading: false
  };
  onSumit = async (event) => {
    event.preventDefault();
    this.setState({loading:true,errorMess:''});
    const campaing = Campaing(this.props.address);

    try {
      const accounts = await web3.eth.getAccounts();
      await campaing.methods
      .contribute()
      .send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.amount,'ether')
      });
      Router.replaceRoute(`/campaigns/${this.props.address}`);
    } catch (error) {
      this.setState({errorMess: error.message});
    }
       this.setState({loading:false,amount: ''});

  }
  render(){
    return(
    <Form onSubmit={this.onSumit} error={!!this.state.errorMess}> 
      <Form.Field>
        <label>Amount to contribute</label>
        <Input 
        label ='Ether' 
        position='right' 
        placeholder='How much do you want to contribute.'
        value = {this.state.amount}
        onChange={event => 
          this.setState({amount: event.target.value})
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
    );
  }

}

export default ContributeForm;