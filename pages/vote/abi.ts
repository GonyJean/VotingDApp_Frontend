export const abi = [
			{
				"inputs": [
					{
						"internalType": "string",
						"name": "question",
						"type": "string"
					}
				],
				"name": "createPoll",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "getAllPollResults",
				"outputs": [
					{
						"components": [
							{
								"internalType": "string",
								"name": "name",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "yesCount",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "noCount",
								"type": "uint256"
							}
						],
						"internalType": "struct Voting.pollsListObj[]",
						"name": "",
						"type": "tuple[]"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "pollIndex",
						"type": "uint256"
					}
				],
				"name": "getPollResults",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "yes",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "no",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "CurrentIndex",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "getPollsCount",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"name": "polls",
				"outputs": [
					{
						"internalType": "string",
						"name": "question",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "pollIndex",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "choice",
						"type": "bool"
					}
				],
				"name": "vote",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			}
		] as const 