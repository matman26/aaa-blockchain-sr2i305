FROM ubuntu:latest
RUN apt update 
RUN apt install -y wget 
RUN wget https://github.com/eosio/eos/releases/download/v2.0.4/eosio_2.0.4-1-ubuntu-18.04_amd64.deb 
RUN apt install -y ./eosio_2.0.4-1-ubuntu-18.04_amd64.deb
EXPOSE 8888

ENTRYPOINT ["nodeos"]

