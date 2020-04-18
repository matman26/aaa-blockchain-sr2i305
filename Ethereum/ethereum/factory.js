import web3 from './we3';
import CampaignFactory from './build/CampaignFactory.json';
import factoryAddr from './variables.json'

const instance  = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  factoryAddr.factory_addr 
);

export default instance; 


