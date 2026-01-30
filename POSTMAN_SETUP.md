# Postman Setup for CredPal Assessment API

This document provides instructions on how to set up and use the API endpoints in Postman.

## Prerequisites

- Make sure the server is running (`npm run dev`).
- You have Postman installed.

## Authentication Endpoints

The base URL for the authentication endpoints is `http://localhost:3000/api/auth`.

### 1. Register a new user

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/auth/register`
- **Body:** `raw` (JSON)

```json
{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password123"
}
```

- **Response:**

```json
{
    "token": "your-jwt-token"
}
```

### 2. Login as an existing user

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/auth/login`
- **Body:** `raw` (JSON)

```json
{
    "email": "john.doe@example.com",
    "password": "password123"
}
```

- **Response:**

```json
{
    "token": "your-jwt-token"
}
```

## Item CRUD Endpoints

The base URL for the item endpoints is `http://localhost:3000/api/items`. All these endpoints require authentication. You need to include the JWT token in the `Authorization` header.

- **Header:** `Authorization`
- **Value:** `Bearer your-jwt-token`

### 1. Create a new item

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/items`
- **Body:** `raw` (JSON)

```json
{
    "title": "My First Item",
    "description": "This is my first item."
}
```

### 2. Get all items

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/items`

### 3. Get a single item

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/items/:id` (e.g., `http://localhost:3000/api/items/60f7e6b0a4b7c8a0b4e0b3b3`)

### 4. Update an item

- **Method:** `PUT`
- **URL:** `http://localhost:3000/api/items/:id`
- **Body:** `raw` (JSON)

```json
{
    "title": "My Updated Item",
    "description": "This is my updated item."
}
```

### 5. Delete an item

- **Method:** `DELETE`
- **URL:** `http://localhost:3000/api/items/:id`
