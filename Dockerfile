# Stage 1: Build the application
FROM node:23-alpine AS build

# Set the working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy only package files for dependency installation
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the source code
COPY . .

# Build the app for production
RUN pnpm run build


# Stage 2: Run the application with a minimal image
FROM node:23-alpine AS runtime

# Set the working directory
WORKDIR /app

# Copy only the build output and production dependencies
COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./
COPY --from=build /app/pnpm-lock.yaml ./

# Install only production dependencies
RUN npm install -g pnpm && pnpm install --prod --frozen-lockfile

# Expose the port the app will run on
EXPOSE 3000

# Start the app
CMD ["node", "build/index.js"]
