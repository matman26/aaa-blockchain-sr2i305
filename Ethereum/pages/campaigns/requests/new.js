import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react'
import Layout from '../../../components/Layout'
import Campaign from '../../../ethereum/campaign'
import web3 from '../../../ethereum/we3'
import { Link  } from '../../../routes'


class RequestNew extends Component{
  static async getInitialProps(props) {
    const {address} = props.query
    return { address };
  }

  state = {
    value: '',
    description:'',
    recipient: '',
    errorMess: '',
    loading: false
  };
  onSumit = async (event) => {
    event.preventDefault();
    this.setState({loading:true,errorMess:''});

    const campaign = Campaign(this.props.address);
    const {description, value, recipient } = this.state

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
      .createRequest(description, web3.utils.toWei(value,'ether'),recipient)
      .send({
        from: accounts[0]
      });
      // Router.pushRoute('/');
    } catch (error) {
      this.setState({errorMess: error.message});
    }
       this.setState({loading:false});
  }

  render(){
    return (
      <Layout> 
        <Link route={`/campaigns/${this.props.address}/requests`}>
          <a>
            <Button primary> Back</Button>
          </a>
        </Link>
        <h3>Create request</h3>
        <Form onSubmit={this.onSumit} error={!!this.state.errorMess}> 
        {/* !! turns the string into it's boolean value, an empty string is false */}
          <Form.Field>
            <label>Description</label>
            <Input 
            // label ='WEI' 
            // position='right' 
            placeholder='What is going to be requested '
            value = {this.state.description}
            onChange={event => 
              this.setState({description: event.target.value})
            }
            />
          </Form.Field>
          <Form.Field>
            <label>Value</label>
            <Input 
            label ='Ether' 
            position='right' 
            placeholder='How much does it cost?'
            value = {this.state.value}
            onChange={event => 
              this.setState({value: event.target.value})
            }
            />
          </Form.Field>
          <Form.Field>
            <label>Recipient</label>
            <Input 
            // label ='' 
            // position='right' 
            placeholder='To whom is the money gonna be sent'
            value = {this.state.recipient}
            onChange={event => 
              this.setState({recipient: event.target.value})
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
export default RequestNew;