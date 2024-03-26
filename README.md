# Infra-pricing-tool

## Description

Infra-pricing-tool is a web application that helps users estimate infrastructure costs on cloud platforms like AWS and Azure.

The project consists of two main components:
- **Server:** An Express server responsible for handling API requests and fetching pricing information from cloud providers.
- **Client:** A Next.js application that provides a user interface for interacting with the server and displaying pricing data to users.

## Installation

### Server

1. Navigate to the `server` directory.
   ```bash
    cd server
    npm install

### Client

1. Navigate to the `client` directory.
   ```bash
    cd client
    npm install

## Usage

### Database 
    Have local running mongoDB instance 
    "mongodb://127.0.0.1:27017/infra_pricing"

### Server

    node index.js

### Client

    npm run dev

Open your web browser and visit http://localhost:3000 to access the client application.