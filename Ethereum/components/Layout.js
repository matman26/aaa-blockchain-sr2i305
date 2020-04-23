import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import Head from 'next/head';
import HeaderNew from './HeaderNew'


export default (props) => {
  return(
    <div className="Home">
    <Head>
      <link href="/static/Home.css" rel="stylesheet" />
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
    </Head>
    <Segment inverted vertical textAlign="center">
    <HeaderNew/>
      {props.children}
      <Segment inverted vertical as="footer">
        <i>Blockchain et Crypto-monnaie: analyse et mise oeuvre</i> - SR2I305
          Télécom Paris - 2020.
      </Segment>  
    </Segment>
  </div>
  )
};


