import { Api, JsonRpc, RpcError } from 'eosjs';
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig';

async function takeAction(action, datavalue){
  const privateKey = '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3'
  const signatureProvider = new JsSignatureProvider([privateKey]);
  const rcp = new JsonRpc('http://172.18.0.2:8888');
  const api = new Api({
    rcp,
    signatureProvider, 
    textDecoder: new TextDecoder(), 
    textEncoder: new TextEncoder()
  })
  try {
    const resp = await rcp.get_table_rows({
      json: true,              // Get the response as json
      code: 'eosio.token',     // Contract that we target
      scope: 'aaa',         // Account that owns the data
      table: 'users',       // Table name
      limit: 10,               // Maximum number of rows that we want to get
      reverse: false,         // Optional: Get reversed data
      show_payer: false     // Optional: Show ram payer
    });
    console.log(resp)
  } catch (e) {
    console.error('\nCaught exception: ' + e);
    if (e instanceof RpcError)
      console.log(JSON.stringify(e.json, null, 2));
  }
  

  
  // try {
  //   const result = await api.transact({
  //     actions: [{
  //       account: 'aaa',
  //       name: action,
  //       authorization: [{
  //         actor: 'laura',
  //         permission: 'active',
  //       }],
  //       data: datavalue,
  //     }]
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
  static login(username){
    return new Promise((resolve,reject) => {
      takeAction("login",username)
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