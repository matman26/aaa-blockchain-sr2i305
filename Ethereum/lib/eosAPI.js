import { Api, JsonRpc, RpcError } from 'eosjs';
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig';

async function takeAction(action, datavalue){
  const privateKey = '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3'
  const signatureProvider = new JsSignatureProvider([privateKey]);
  const rpc = new JsonRpc('http://127.0.0.1:8888');
  const api = new Api({
    rpc,
    signatureProvider })  

    fetch("http://192.168.0.100:8888", {
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "accept": "application/json",
        "access-control-request-headers": "Content-Type, Authorization",
        "access-control-allow-origin": "*",
        "access-control-allow-headers": "Origin, Content-Type, X-Auth-Token"

      }
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    });
  // try {
  //   const result = await api.transact({
  //     actions: [{
  //       account: 'aaa',
  //       name: 'login',
  //       authorization: [{
  //         actor: 'matheus',
  //         permission: 'active',
  //       }]

  //     }],
  //     data: datavalue
  //   }, {
  //     blocksBehind: 3,
  //     expireSeconds: 30,
  //   });
  //   console.dir(result);
  // } catch (e) {
  //   console.log('\nCaught exception: ' + e);
  //   // if (e instanceof RpcError)
  //   //   console.log(JSON.stringify(e.json, null, 2)); 
  // }
}

class eosApi{
  static login({user}){
    return new Promise((resolve,reject) => {
      takeAction("login",{user: user})
      .then(()=>{
        resolve();
      })
      .catch(err => {
        reject();
      })
    });
  }
}

export default eosApi