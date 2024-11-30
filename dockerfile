# Stage 1: Test Stage
FROM node:18 AS test-stage

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json for installing Jest and other dependencies
COPY package*.json ./

# Install dependencies (for testing purposes only)
RUN npm install --only=dev

# Copy the rest of the app source code
COPY . .

# Run Jest tests
RUN npm i --save-dev jest
RUN npm run test

# Stage 2: Production Stage
FROM nginx:alpine AS production-stage

# Set environment variables
ARG PORT=80
ENV PORT=$PORT

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy static assets to nginx directory
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=test-stage /app    .
# Expose port from environment variable
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
