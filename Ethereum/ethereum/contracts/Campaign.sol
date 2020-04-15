pragma solidity ^0.4.25;

contract Login {

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