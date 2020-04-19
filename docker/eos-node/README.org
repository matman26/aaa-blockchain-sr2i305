#+TITLE: EOS Setup
#+STARTUP: showall inlineimages
#+CREATOR: Matheus

* Basic EOS CLI Setup
Most of these steps will be incorporated into the Dockerfile, this section
is mostly used for documentation and as a guide.

** Container Setup
Build the docker container, then access the CLI for using cleos commands
#+BEGIN_SRC 
docker built -t my-eos-node ./docker/eos-node/
docker run -it my-eos-node
#+END_SRC

Open two terminal windows on the container. One of them should run:
#+BEGIN_SRC 
nodeos
#+END_SRC

To start the EOS node. The other terminal window should be used to type
in the cleos commands.

** Create Wallet
#+BEGIN_SRC 
# This creates an empty wallet; by default wallets are unlocked
cleos wallet create -n user --to-console

# This imports a given private key to the wallet, thus linking it to a key pair
cleos wallet import -n user \
	--private-key "${PRIVATE_KEY}"
#+END_SRC

** Create accounts
Create two accounts, one for the blockchain user and one the the AAA authority

#+BEGIN_SRC 
cleos create account eosio provider "${PRIVATE_KEY}"
cleos create account eosio matheus "${PRIVATE_KEY}"
#+END_SRC

** Deploy contract
Deploy the AAA contract to the provider account
#+BEGIN_SRC 
cleos set contract provider /root/aaa -p provider@active"
#+END_SRC

** Call contract
Push data to contract, recover the users table, change user's role
#+BEGIN_SRC 
cleos push action provider adduser '["matheus"]' -p matheus@active
cleos get table provider provider users
cleos push action provider setrole '["matheus",1]' -p matheus@active
cleos get table provider provider users
#+END_SRC

The login action requires the authority (validation) of the blockchain user, the user also 
needs to be registered to the users table.
#+BEGIN_SRC 
cleos push action provider login '["matheus"]' -p matheus@active
#+END_SRC
