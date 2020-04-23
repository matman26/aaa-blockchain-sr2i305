import randomString from 'crypto-random-string';
import login from '../ethereum/login';
import web3 from '../ethereum/we3'

async function signature(){
  const accounts = await web3.eth.getAccounts();
  const secret = randomString({length: 15, type:'base64'})
  var hash = web3.utils.sha3(secret)
  var sign = await web3.eth.personal.sign(hash, accounts[0])
  return {hash,sign}
}

async function signUp(username,role){
  const{hash,sign} = await signature()
  const accounts = await web3.eth.getAccounts();
  var result = ""
  try {
    result = await login.methods.signIn(hash,sign,username,role).send({
      from: accounts[0]
    })
    result['signature'] = sign
    result['addr'] = accounts[0]
  } catch (error) {
    console.log(error);
    result = "Authentication has failed"
  }
  return {result}
}
export { signUp };