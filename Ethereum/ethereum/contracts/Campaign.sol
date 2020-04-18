pragma solidity ^0.4.25;

contract Login {

	function recover(bytes32 hash, bytes memory signature) public returns (address) {
		if (signature.length != 65) {
			revert("ECDSA: invalid signature length");
		}

		// Divide the signature in r, s and v variables
		bytes32 r;
		bytes32 s;
		uint8 v;

		// ecrecover takes the signature parameters, and the only way to get them
		// currently is to use assembly.
		// solhint-disable-next-line no-inline-assembly
		assembly {
			r := mload(add(signature, 0x20))
			s := mload(add(signature, 0x40))
			v := byte(0, mload(add(signature, 0x60)))
		}


		if (uint256(s) > 0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0) {
			revert("ECDSA: invalid signature 's' value");
		}

		if (v != 27 && v != 28) {
			revert("ECDSA: invalid signature 'v' value");
		}

		// If the signature is valid (and not malleable), return the signer address
		address signer = ecrecover(toEthSignedMessageHash(hash), v, r, s);
		require(signer != address(0), "ECDSA: invalid signature");

		return signer;
	}

	function toEthSignedMessageHash(bytes32 hash) internal pure returns (bytes32) {
			// 32 is the length in bytes of hash,
			// enforced by the type signature above
		return keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", hash));
	}

	event LoginAttempt(address sender, string challenge);

	function login(string challenge) public {
			emit LoginAttempt(msg.sender, challenge);
	}
}

contract CampaignFactory{
	address[] public deployedCampaings;
	
	function createCampaign(uint minVal) public{
			address newCamp = new Campaign(minVal, msg.sender);
			deployedCampaings.push(newCamp);
	}
	
	function getDeployedCampaigns() public view returns(address[]){
			return deployedCampaings;
	}
}

contract Campaign{
	struct Request{
			string description;
			uint value;
			address recipient;
			bool complete;
			uint approvalCount;
			mapping(address => bool) approvals;
	}
	
	address public manager;
	uint public minContribution;
	mapping(address => bool) public approvers; // keys are not saved, a hashmap is used instead
	uint public approversCount;
	Request[] public requests;
	
	
	constructor(uint min, address creator) public {
			manager = creator; 
			minContribution = min;
	}
	
	function contribute() public payable{
			require(msg.value > minContribution);
			approvers[msg.sender] = true;
			approversCount++;
	}
	
	
	function createRequest(string description, uint value, address recipient) 
			public restricted payable{ // payable when the function will transfer ether
			
			require(value <= address(this).balance);
			require(approvers[msg.sender]); 
			// Memory: creates a new copy of the data in memory
			// storage: Point to the same memory of the Variable
			
			Request memory tempReque = Request({
					description: description,
					value: value,
					recipient: recipient,
					complete: false,
					approvalCount: 0
			});
			
			requests.push(tempReque);
	}
	
	
	function approveRequest(uint index) public{
			
			Request storage tempReque = requests[index];
			require(approvers[msg.sender]);
			require(!tempReque.approvals[msg.sender]);
			tempReque.approvals[msg.sender] = true;
			tempReque.approvalCount++;
			
	}
	
	function finalizeRequest(uint index) public payable restricted{
			Request storage tempReque = requests[index];
			
			require(tempReque.approvalCount > (approversCount/2));
			require(!tempReque.complete);
			tempReque.recipient.transfer(tempReque.value);
			tempReque.complete = true;
			
	}
	
	function getSummary() public view returns (
		uint,uint,uint,uint,address){
		return(
			minContribution,
			this.balance,
			requests.length,
			approversCount,
			manager
		);
	}

	function getRequestCount() public view returns(uint){
		return( requests.length);
	}
	
	modifier restricted(){
			require(manager ==  msg.sender);
			_; // place holder 
	}
}