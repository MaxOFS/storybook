# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG NODE_VERSION=22.17.0

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine as base


WORKDIR /src/app
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

# Copy the rest of the source files into the image.
COPY . .

RUN npm install
RUN npm install -g @angular/cli

RUN ng build 
# Expose the port that the application listens on.
EXPOSE 6006

# Run the application.
CMD npm serve storybook 
