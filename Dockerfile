# Use the official Node.js runtime as a parent image
FROM node:12-alpine

# Set the working directory to /app
WORKDIR /workspace

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port that the application will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]