# AAA-blockchain-sr2i305


## **Kickstart Ethereum DApp**

Distributed application using React, Solidity and Docker

### **Pre-requirements**
+ [MetaMask](https://metamask.io/download.html) with at least one *Ethereum* account.
+ [Infura](https://infura.io/) endpoints

#### **MetaMask**
1. Once the extension is installed, create a wallet and **store the mnemonic (12 words) phrase**
2. Select the **Rinkeby** Test network and make a deposit. 
   
3. Get yourself some *Ether* by following the instructions provided by [Rinkeby](https://www.rinkeby.io/#faucet) Test Faucet.

#### **Infura**
1. Login to your Infura account and go to the **Ethereum** tab

2. Create a new project. 
   
3. Under the Keys section choose the **Rinkeby** endpoints.

### **DApp variables setup**
In the **ethereum/variables.json** file provide the values for the following variables:
```json
{
  "metamask_mnemonic": "twelve word mnemonic provided by MetaMask",
  "infura_endpoint": "https://rinkeby.infura.io/v3/<token>",
  "infura_websocket_endpoint": "wss://rinkeby.infura.io/ws/v3/<token>"
}
```

### **Deploy the DApp**
To deploy the app run
```bash
docker-compose build
docker-compose up
```