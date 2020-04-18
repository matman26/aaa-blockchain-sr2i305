import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react'
import Layout from '../../components/Layout'
import ContributeForm from '../../components/ContributeForm'
import Campaing from '../../ethereum/campaign'
import web3 from '../../ethereum/we3'
import {Router, Link} from '../../routes'

class CampaingShow extends Component{
  static async getInitialProps(props) {
    const campaign = Campaing(props.query.address);
    const summary = await campaign.methods.getSummary().call();

    return {
      minContribution: summary[0], 
      balance: summary[1],
      numRequest: summary[2],
      approversCount: summary[3],
      manager: summary[4],
      address: props.query.address
    };
  }

  renderCards(){
    const{
      balance,
      manager,
      minContribution,
      numRequest,
      approversCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Address of manager',
        description: 'Creator',
        style: {overflowWrap: 'break-word'}
      },
      {
        header: web3.utils.fromWei(balance,'ether'),
        meta: 'Balance (ether)',
        description: 'Available Balance',
        style: {overflowWrap: 'break-word'}
      },
      {
        header: minContribution,
        meta: 'Minimun contribution',
        description: 'Minimum contribution to become a contributer',
        style: {overflowWrap: 'break-word'}
      },
      {
        header: numRequest,
        meta: 'Made requests',
        description: 'Number of request that need to be approved by the contributors',
        style: {overflowWrap: 'break-word'}
      },
      {
        header: approversCount,
        meta: 'Number of approvers',
        description: 'People who have donated to the campaign',
        style: {overflowWrap: 'break-word'}
      },

    ]
    return <Card.Group items={items} />
  }
  render(){
    return(
      <Layout>  
        <h3>Campaing Show</h3>
        <Grid>
          <Grid.Row>  
            <Grid.Column width={10}>
              {this.renderCards()} 
              
            </Grid.Column>
            <Grid.Column width={6}>
              <ContributeForm address={this.props.address}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                <Button primary>View Request</Button>
                </a>
              </Link>
            </Grid.Column> 
          </Grid.Row>
        </Grid>
    
      </Layout>
    )
  }
}

export default CampaingShow;