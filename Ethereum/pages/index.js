import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout'
import { Link } from '../routes'


class CampaignIndex extends Component{
  static async getInitialProps(){
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return {campaigns};
  }
  renderCampaigns(){
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: <Link route={`/campaigns/${address}`}><a className='item'>View Campaign</a></Link>,
        fluid: true
      };
    });

    return <Card.Group items={items}/>;
  }

  render(){
    return( 
      <Layout> 
        <div>
          <h2>All dispo campaign</h2>
          <Link route='/campaigns/new'>
            <a className="item">
              <Button 
                floated= 'right'
                content='Create campaign' 
                icon='add circle' 
                labelPosition='right'
                primary
              />
            </a>
          </Link>
          
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  } 
}
export default CampaignIndex; 