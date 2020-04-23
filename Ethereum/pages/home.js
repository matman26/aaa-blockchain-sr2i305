import React, { Component } from "react";
import Layout from '../components/Layout'
import { Button, Icon, Container, Header, Menu, Segment } from "semantic-ui-react";
import { Link, Router } from '../routes'


class Home extends Component {

  onClick = () => Router.pushRoute('/login');
  render() {
    return (
      <Layout>
        <Container className="content">
          <Header inverted as="h1">
          AAA using Blockchain <Icon name='ethereum'/>
          </Header>
          <p>
            Authentication, Authorization and Accounting refers to a security
            framework for mediating network and application access. 
            This is an implementation of the AAA framework using the Ethereum
            Blockchain.
          </p>
          <Button 
          size="huge" 
          color="teal" 
          inverted
          onClick={this.onClick}
          > See it in action! </Button>
        </Container>
      </Layout>
      
    );
  }
}

export default Home;