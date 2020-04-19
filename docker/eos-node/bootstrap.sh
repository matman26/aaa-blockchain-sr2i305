#!/bin/sh
# Start Nodeos in the background
nohup nodeos 2>&1 1>/root/nodeos.log &

sleep 5

# This creates an empty wallet; by default wallets are unlocked
cleos wallet create -n user --to-console

# This imports a given private key to the wallet, thus linking it to a key pair
cleos wallet import -n user \
	--private-key "${PRIVATE_KEY}"

# Create two blockchain accounts
cleos create account eosio provider "${PUBLIC_KEY}"
cleos create account eosio matheus "${PUBLIC_KEY}"

# Deploy the AAA contract to the provider account
cleos set contract provider /root/aaa -p provider@active

# Push data to contract, change user's role
cleos push action provider adduser '["matheus"]' -p matheus@active
cleos push action provider setrole '["matheus",1]' -p provider@active

/bin/sh

