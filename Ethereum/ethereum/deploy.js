const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
const compiledLogin = require('./build/Login.json');
const envVariables = require('./variables.json')
const fs = require('fs-extra');
const path = require('path')

const provider = new HDWalletProvider(
  envVariables.metamask_mnemonic, envVariables.infura_endpoint
);
const web3 = new Web3(provider);

const deploy  = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Account', accounts[0]);

  const factory = await new web3.eth.Contract((JSON.parse(compiledFactory.interface)))
    .deploy({data: compiledFactory.bytecode})
    .send({gas:'1000000', from: accounts[0]});

  console.log('Factory deployed to: ',factory.options.address);  

  const login = await new web3.eth.Contract((JSON.parse(compiledLogin.interface)))
    .deploy({data: compiledLogin.bytecode})
    .send({gas:'1000000', from: accounts[0]});
  console.log('Login deployed to: ',login.options.address);  

  
  envVariables.factory_addr = factory.options.address
  envVariables.login_addr = login.options.address
  fs.writeFile("./ethereum/variables.json", JSON.stringify(envVariables))
  console.log(envVariables);
  

};

deploy();