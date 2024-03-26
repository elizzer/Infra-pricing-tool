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


## ENV

### Client

NEXT_PUBLIC_GOOGLE_CLIENT_ID=204111667910-pa7sor3lus1pl5g82tumisaphfgiev9a.apps.googleusercontent.com
NEXT_PUBLIC_SERVER_ENDPOINT=http://localhost:5000
NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT_URL=http://localhost:3000/auth/login


### Server

GOOGLE_CLIENT_ID="204111667910-pa7sor3lus1pl5g82tumisaphfgiev9a.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET= "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"
