import web3 from './we3';
import Campaign from './build/Campaign.json';

export default (address) =>{
  return new web3.eth.Contract(
    JSON.parse(Campaign.interface), address);
};
