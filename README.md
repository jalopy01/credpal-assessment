 CredPal Backend Assessment - CRUD API

A complete CRUD (Create, Read, Update, Delete) application built with Node.js, Express, TypeScript, and MongoDB with JWT authentication.

 Features

-  User registration and authentication
-  JWT-based authorization
-  Complete CRUD operations for items
-  MongoDB database integration
-  Input validation with Joi
-  TypeScript for type safety
- Protected routes with authentication middleware

## Tech Stack

- Runtime**: Node.js
- Framework**: Express.js
- Language**: TypeScript
- Database**: MongoDB
- Authentication**: JSON Web Tokens (JWT)
- Validation**: Joi
- Password Hashing**: bcryptjs

## Prerequisites

Before running this application, ensure you have:

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local instance or MongoDB Atlas account)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jalopy01/credpal-assessment.git
   cd credpal-assessment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory (see `.env.example` for reference):
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=3000
   ```

4. **Build the TypeScript code**
   ```bash
   npm run build
   ```

5. **Start the server**
   ```bash
   npm start
   ```
   
   For development with auto-reload:
   ```bash
   npm run dev
