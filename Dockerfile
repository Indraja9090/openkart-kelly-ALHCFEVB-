
# line that tells Docker what base image to use for the application.
# telling to take latest Node.js version 
FROM node:latest

# Creates a new directory named `app` in the newly created `container`
RUN mkdir -p /app   

# Set the working directory to `/app`
# To make things easier when running the remaining commands, create a working directory.
# This instructs Docker to use this path as the default location for all subsequent commands.
# This means you can use relative file paths based on the working directory instead of full file paths.
WORKDIR /app

# Installs the Angular CLI globally within the container.
RUN npm install -g @angular/cli

#  Copies the package.json file to the /app directory.
COPY package.json /app

# Installs the dependencies specified in the package.json file.
# Install npm  packages to ensure the application has all its dependencies installed.
RUN npm install

# Copies the rest of the application code to the /app directory.
# command copies the entire application code (excluding the node_modules directory) from the current context (your local machine) 
#                                                                                                       to the /app directory within the container.
COPY . /app

# Prints the current working directory within the container
RUN pwd

# List all the files in the working directory
# Lists the contents of the current directory within the container.
RUN ls

# command to run when the container starts.
CMD ["ng", "serve", "--host", "0.0.0.0"]


# NOTE:
# Docker images can inherit from other images. 
# Therefore, instead of creating your own base image, you can use the official Node image that has all the tools and packages needed to run a  application.
# Most Dockerfiles start from a parent image.
                            # A parent image is the image that your image is based on.

# The COPY command takes two parameters. The first parameter tells Docker what file(s) you would like to copy into the image. 
# The second parameter tells Docker where to copy that file(s) to. For this example, copy  file into the working directory /app.