#!/bin/sh
# Start Nodeos in the background
nohup nodeos 2>&1 1>/root/nodeos.log &

sleep 10

PARAMS='-u http://172.18.0.2:8888 '
# This creates an empty wallet; by default wallets are unlocked
cleos ${PARAMS} wallet create -n user --to-console

# This imports a given private key to the wallet, thus linking it to a key pair
cleos ${PARAMS} wallet import -n user \
	--private-key "${PRIVATE_KEY}"

# Create two blockchain accounts
cleos ${PARAMS} create account eosio aaa "${PUBLIC_KEY}"
cleos ${PARAMS} create account eosio matheus "${PUBLIC_KEY}"

# Deploy the AAA contract to the aaa account
cleos ${PARAMS} set contract aaa /root/aaa -p aaa@active

# Push data to contract, change user's role
cleos ${PARAMS} push action aaa adduser '["matheus"]' -p matheus@active
cleos ${PARAMS} push action aaa setrole '["matheus",1]' -p aaa@active

/bin/sh

