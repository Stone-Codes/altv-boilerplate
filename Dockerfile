FROM ubuntu:18.04

RUN mkdir /server

WORKDIR /server

RUN apt -y update && apt -y upgrade
RUN apt -y install curl

RUN curl -sL https://deb.nodesource.com/setup_13.x | sudo bash -
RUN apt -y install nodejs
RUN apt -y install gcc g++ make
RUN curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
RUN apt -y  update && apt -y install yarn

COPY data /app/data
COPY modules /app/modules
COPY resources /app/resources
COPY altv-server /app/altv-server
COPY libnode.so.72 /app/libnode.so.72
COPY server.cfg /app/server.cfg
COPY start.sh /app/start.sh

RUN chmod +x /app/start.sh
RUN chmod +x /app/altv-server

CMD start.sh