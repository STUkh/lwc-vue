FROM node:18.16.0-bullseye

ENV DEBIAN_FRONTEND=noninteractive
ARG SALESFORCE_CLI_VERSION=nightly
# this will typically be nightly
ARG SF_CLI_VERSION=^1

RUN npm install --global sfdx-cli@${SALESFORCE_CLI_VERSION} --ignore-scripts
RUN npm install --global @salesforce/cli@${SF_CLI_VERSION}

RUN apt-get update && apt-get install --assume-yes openjdk-11-jdk-headless jq
RUN apt-get autoremove --assume-yes \
  && apt-get clean --assume-yes \
  && rm -rf /var/lib/apt/lists/*

ENV SFDX_CONTAINER_MODE true
ENV DEBIAN_FRONTEND=dialog
ENV SHELL /bin/bash

RUN apt-get update && apt-get install -y build-essential

CMD ["/bin/bash"]