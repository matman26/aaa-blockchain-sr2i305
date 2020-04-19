FROM ubuntu:latest

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
COPY ./aaa /root/

#ENTRYPOINT ["nodeos"]

