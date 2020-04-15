import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
  // Browser and metamaks
  window.ethereum.enable();
  web3 = new Web3(window.web3.currentProvider);
}else{
  // Server or n
  const provider = new Web3.providers.WebsocketProvider(
    // 'https://rinkeby.infura.io/v3/1918d37b1aa04dde9832c6a1fc8a18c3'
    'wss://rinkeby.infura.io/ws/v3/1918d37b1aa04dde9832c6a1fc8a18c3'
  );
  
  web3 = new Web3(provider);
}


export default web3;  