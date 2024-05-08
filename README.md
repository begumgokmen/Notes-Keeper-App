# Notes-Keeper-App
A notes keeper application that allows user to add, edit, and delete notes. 

# What is Notes Keeper?
Notes Keeper is a web-based application that allows users to create, update, delete, and browse personal notes. It is built using the MERN stack (MongoDB, Express.js, React.js, Node.js), offering a responsive and intuitive user interface to manage a digital collection of notes.

# Why is Notes Keeper Useful?
This application provides an easy way to keep track of important information, tasks, or any other personal notes. It serves as a convenient tool for users looking to organize their thoughts and information in one accessible, centralized place.

# Frontend
The frontend of Notes Keeper is developed using React.js. It provides a user-friendly interface for managing notes. Here's what happens on the frontend:

## User Interface: 
Users interact with a dynamic web interface that allows them to add, delete, and edit notes. Each note's content is rendered using custom components that manage states with React hooks.

## HTTP Requests: 
The frontend uses Axios for HTTP requests to communicate with the backend API. It retrieves, sends, and updates data asynchronously without needing to reload the web page.

## State Management: 
State management is handled via React hooks (useState, useEffect) to store and manipulate the state of notes throughout the application lifecycle.

# Backend
The backend is built with Node.js, Express.js, and MongoDB. It handles data management and serves the frontend application. Key aspects include:

## API Endpoints: 
The server exposes several API endpoints for handling CRUD operations (GET, POST, PATCH, DELETE) on notes. Each request to these endpoints is handled by specific controller functions that interact with the MongoDB database.

## Database Interaction: 
Uses Mongoose to interact with a MongoDB database. It defines schemas and models to organize and manage data effectively. The Note model is used to create, retrieve, update, and delete documents in the database.

## Middleware: 
Includes middleware for error handling and managing cross-origin resource sharing (CORS) to ensure that the API can be safely accessed from different origins.

# Integration
The integration between the frontend and backend is critical for the seamless operation of Notes Keeper. The frontend makes API calls to the backend to fetch and manipulate data, which is then reflected in the frontend application in real-time.

## Style Guide

## Framework
The application utilizes Tailwind CSS for styling. It helps maintain a consistent style across all components with utility classes that can be applied directly in the component markup. 

## Note Style
Each note title is assigned a random color from a set palette to visually distinguish each note. This random coloration is achieved through a CSS class that rotates colors based on the note's index, creating a vibrant and dynamic appearance. Additionally, each note comes with intuitive icons for editing and deleting. These icons are styled to be clear and accessible but do not overpower the note's content.

## Page Style
The application sports a soft pastel background, promoting a calm and inviting atmosphere. Notes are organized in a grid layout, allowing users to easily navigate and manage their entries.

# Getting Started
Here are some instructions to set up Notes Keeper locally:

## Prerequisites:
Install Node.js and npm
Install MongoDB or have a MongoDB Atlas account

## Clone the repository:
git clone [repository-url]
cd notes-keeper

## Install dependencies:
npm install

## Set up environment variables:
Create a .env file in the root directory and add the following:
MONGO_DB_URI=your_mongodb_uri

## Start the server:
npm start

## Run the application:
Open a new terminal and start the frontend:
cd client  # Navigate into the client directory if separated
npm start



