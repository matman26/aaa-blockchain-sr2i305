FROM ubuntu:latest

# This specific key pair is used for development only, NEVER deploy anything to mainnet with it
ARG PRIVATE_KEY=5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3
ENV PRIVATE_KEY=${PRIVATE_KEY}

ARG PUBLIC_KEY=EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
ENV PUBLIC_KEY=${PUBLIC_KEY}

# Get dependencies, text editor
RUN apt update 
RUN apt install -y wget vim

# Install from binary package
RUN wget https://github.com/eosio/eos/releases/download/v2.0.4/eosio_2.0.4-1-ubuntu-18.04_amd64.deb 
RUN apt install -y ./eosio_2.0.4-1-ubuntu-18.04_amd64.deb


# Start the container with -p 8888:8888 to publish
EXPOSE 8888

# Get genesis block
RUN wget https://eosnodes.privex.io/static/genesis.json

# Config file for the node
COPY ./config/config.ini /root/.local/share/eosio/nodeos/config/genesis.json
COPY ./config/config.ini /root/.local/share/eosio/nodeos/config/config.ini
COPY ./aaa /root/aaa/
COPY ./bootstrap.sh /root/bootstrap.sh

ENTRYPOINT ["./root/bootstrap.sh"]
#ENTRYPOINT ["/bin/sh"]

