# Parking Management React App

A Parking Management application built with React to help manage and track parking slots, reservations, and vehicle information.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User authentication and authorization
- Manage parking slots
- Make and view reservations
- Track vehicle information
- Admin dashboard for monitoring and managing the system

## Demo

You can view a live demo of the app [here](https://your-demo-link.com).

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/parking-management-react-app.git
   cd parking-management-react-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following environment variables:

   ```env
   REACT_APP_API_URL=your-api-url
   REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
   REACT_APP_FIREBASE_APP_ID=your-firebase-app-id
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

   The app should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

- **Register/Login:** Users can register a new account or log in with an existing account.
- **Dashboard:** After logging in, users are taken to the dashboard where they can view available parking slots, make reservations, and view their reservation history.
- **Admin Panel:** Admin users can access the admin panel to manage parking slots, view all reservations, and manage users.

## Technologies Used

- **React** - Frontend library for building user interfaces
- **Firebase** - Backend-as-a-Service for authentication and data storage
- **React Router** - Library for routing in React applications
- **Axios** - HTTP client for making API requests
- **Material-UI** - UI framework for React

## Project Structure
