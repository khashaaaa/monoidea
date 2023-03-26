# Specify the base image
FROM node:16-alpine

# Create and set the working directory
WORKDIR /backend

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire NestJS app to the container
COPY . .

# Build the production version of the NestJS app
RUN npm run build

# Expose the port your NestJS app is running on
EXPOSE 3000

# Start the NestJS app
CMD [ "npm", "run", "start" ]