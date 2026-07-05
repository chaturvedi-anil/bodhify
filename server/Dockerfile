# Use node.js 22 lts alpine image
FROM node:22-alpine

# Create application directory
WORKDIR /app

# Copy packages files
COPY package*.json ./

# Install production dependencies only 
RUN npm ci --omit=dev 

# Copy source code
COPY . .

# Render provides PORT automatically
EXPOSE 5000

# Start the server
CMD [ "npm", "start" ]