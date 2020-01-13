/// This module is used for communicating with the Ethereum smart contract
/// Because we are doing multiple lockdrop with multiple currencies, it is good to

import Lockdrop from '../../abi/Lockdrop.json';

export const ethereumOptions = {
	web3: {
		block: false,
		fallback: {
			type: 'ws',
			url: 'ws://127.0.0.1:9545'
		}
	},
	contracts: [Lockdrop],
	events: {
		Lockdrop: ['Locked']
	},
	polls: {
		// set polling interval to 30secs so we don't get buried in poll events
		accounts: 30000
	}
};

// locks the given token
export function lockEthereum(
	duration: number,
	amount: number,
	contractAddr: string
) {
	console.log(
		'locking ' + amount + ' ETH for ' + duration + ' days to ' + contractAddr
	);
}

export function getContractEvent() {
	return 'this is a smart contract state';
}
