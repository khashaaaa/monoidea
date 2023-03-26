# Specify the base image
FROM node:16-alpine

# Create and set the working directory
WORKDIR /frontend

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire React app to the container
COPY . .

# Build the production version of the React app
RUN npm run build

# Expose the port your React app is running on
EXPOSE 3001

# Start the React app
CMD [ "npm", "run", "start" ]