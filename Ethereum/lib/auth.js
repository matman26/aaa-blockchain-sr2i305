import randomString from 'crypto-random-string';
import Cookie from 'js-cookie';
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
  } catch (error) {
    console.log(error);
    result = "Authentication has failed"
  }
  return {result}
}
export { signUp };
// try {
//   const accounts = await web3.eth.getAccounts();
//   const secret = randomString({length: 15, type:'base64'})
//   var hash = web3.utils.sha3(secret)
//   var signature = await web3.eth.personal.sign(hash, accounts[0])
//   console.log("signature",signature)
//   console.log("hash",hash)
//   var ans = "";
//   ans = await login.methods.signIn(hash,signature, this.state.username,1).send({
//     from: accounts[0]
//   }) 
//   const profile = await login.methods.profile(accounts[0]).call()
//   this.state.username = profile[0]
//   this.state.role = profile[1]
//   console.log("Profile",profile);
//   if(ans.status === true) {
//     Cookie.set('session', signature)
//     Router.pushRoute('/');
//   }else{
//     this.setState({errorMess: "Authentication has failed"});
//   }

//   this.setState({loading:false,errorMess:''});
// } catch (error) {
//   this.setState({errorMess: "Not username provided"});

// }