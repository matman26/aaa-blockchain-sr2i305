import web3 from './we3';
import Login from './build/Login.json';
import loginAddr from './variables.json'

const instance  = new web3.eth.Contract(
  JSON.parse(Login.interface),
  loginAddr.login_addr 
);

export default instance; 
