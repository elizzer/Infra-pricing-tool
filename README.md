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


## Architecture Document for Backend Server

### Overview

This document outlines the architecture of a Node.js backend server, designed to handle various functionalities related to infrastructure pricing and potentially AWS interactions. The server leverages MongoDB as its primary data storage solution.

### Key Components:

    Express.js: Web application framework for building Node.js servers.
    Mongoose: ODM (Object Document Mapper) for interacting with MongoDB database.
    Body-parser: Middleware for parsing incoming request bodies.
    Cors: Middleware for enabling cross-origin resource sharing (CORS).
    Session: Middleware for managing user sessions.
    Connect-mongodb-session: Adapter for storing sessions in MongoDB.
    Dotenv: Library for loading environment variables from a .env file.
    Structure

1. Server Setup:

    Express app initialization.
    Middleware configuration:
    Body-parser for parsing request bodies.
    Cors for enabling CORS.
    Session middleware using MongoDB for storage (Connect-mongodb-session adapter).
    Environment variables loading using Dotenv.

2. Database Connection:
    Mongoose connection establishment to a MongoDB database named infra_pricing.

3. Route Configuration:
    Mounting of various route controllers:
        regionRoutes (admin/region controller for region-related operations).
        serviceRoutes (admin/service controller for service-related operations).
        infraRoutes (admin/infra controller for infrastructure-related operations).
        googleOauth (user/session/googleOauth controller for Google OAuth).
        userRoutes (user controller for user-related actions).
        awsRoutes (aws/aws controller for interacting with AWS, likely for pricing).
    These routes interact with the MongoDB database through Mongoose to perform CRUD (Create, Read, Update, Delete) operations and retrieve data as needed.

4. Server Startup:

    Listening on port 5000.
    Logging server and database connection status.

5. Frontend setup

    1. Login:

        Users can enter their credentials (username and password) to authenticate and access the application's functionalities.
        Session management (using cookies) to maintain user state after login.

    2. Session Authentication:
        The frontend validates user sessions upon accessing protected features to ensure a valid login state.

    3. Google Sign-in:
        Users can sign in using their Google account for a streamlined authentication experience.
        Integration with Google OAuth API:
            Implement Google OAuth redirect flow to handle user sign-in and authorization.
            Obtain user information from Google upon successful sign-in.

    4. Register:
        Users can create new accounts on the platform.
        User registration form with email, name and password fields.
        Secure user data storage (hashed passwords).

    5. Create New Inquiry:
        Users can initiate a new request for AWS service pricing.
        Select the desired AWS service using dropdown.
        Provide configuration details (product,company name,).
        Submit the inquiry for price calculation.

    6. List Inquiries and Delete Inquiry:
        Users can view a list of their past inquiries, potentially with details like:
        Service type.
        Configuration details.
        Calculated price (if available). 
        Users might be able to delete past inquiries for record management.

Frontend Technology: NextJS

This section can list the frontend frameworks or libraries used to build the user interface (e.g., React, Angular, Vue.js).
Mention any additional frontend libraries or tools that facilitate these features (e.g., form libraries, UI component libraries).

## Data Flow:

Inquiry Submission: When a user submits an inquiry through the frontend interface, the user's selections and input are packaged into a request object.
API Request to Backend: The frontend makes an API request (e.g., a POST request) to a designated endpoint on the backend server. This request typically carries the inquiry object containing the user's selected service and configuration details.

## Price Calculation:
Once the pricing data is retrieved from the AWS Pricing Calculator API, the server parses the JSON response to extract the relevant price based on the user's specific inquiry.
Any necessary calculations are performed to represent the cost monthly.
