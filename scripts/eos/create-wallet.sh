#!/bin/sh
WALLET_NAME=${1}   
PRIVATE_KEY=${2}   # Make sure to use only well-known private keys

# This creates an empty wallet; by default wallets are unlocked
cleos wallet create -n "${WALLET_NAME}" --to-console

# This imports a given private key to the wallet, thus linking it to a key pair
cleos wallet import -n "${WALLET_NAME}" \
	--private-key "${PRIVATE_KEY}"
