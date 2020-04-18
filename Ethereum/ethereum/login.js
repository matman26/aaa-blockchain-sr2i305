import web3 from './we3';
import Usermgm from './build/UserManagement.json';
import loginAddr from './variables.json'

const instance  = new web3.eth.Contract(
  JSON.parse(Usermgm.interface),
  loginAddr.login_addr 
);

export default instance; 
