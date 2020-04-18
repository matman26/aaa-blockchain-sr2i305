const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);
const compiledFactory = require('../ethereum/build/CampaignFactory.json')
const compiledCampaign = require('../ethereum/build/Campaign.json')

let accounts;
let campaign;
let campaignAddr
let factory;

beforeEach(async ()=> {
  // Get a list of all the accounts
   accounts = await web3.eth.getAccounts();

  // use one of those accounts to deploy the contract
  factory =  await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
  .deploy({
    data: compiledFactory.bytecode
  })
  .send({from: accounts[0], gas:'1000000'});

  await factory.methods.createCampaign('100')
  .send({from: accounts[0], gas:'1000000'});

  // get first element of the returned array
  [campaignAddr] = await factory.methods.getDeployedCampaigns().call()

  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddr
  );
});

describe('campaigns', ()=>{ // multiple test to be perfommed
  it('deploys contracts', () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  it('Processes request', async() =>{
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei('10','ether')
    });

    await campaign.methods.createRequest('A',web3.utils.toWei('5','ether'), accounts[1])
    .send({from: accounts[0], gas:'1000000'});

    await campaign.methods.approveRequest(0)
    .send({from: accounts[0], gas:'1000000'});

    await campaign.methods.finalizeRequest(0)
    .send({from: accounts[0], gas:'1000000'});

    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, 'ether')
    balance = parseFloat(balance);
    assert(balance > 104 );

  });
});
