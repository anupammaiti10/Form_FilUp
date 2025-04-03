# Form Fill-up Backend Project

A Node.js backend application for handling student form submissions using Express and MongoDB.

## Prerequisites

- Node.js (v12 or higher)
- MongoDB (running locally or remote connection)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```sh
git clone <repository-url>
cd Form_FilUp
```

2. Install dependencies:
```sh
npm install
```

## Project Structure

```
Form_FilUp/
├── db/
│   └── db.js         # Database connection and schema
├── models/           # Data models
├── public/           # Static files
│   └── style.css
├── views/           
│   ├── index.ejs    # Main form template
│   ├── edit.ejs     # Edit form template
│   └── submitted_Form.ejs
├── script.js        # Main application file
├── package.json
└── README.md
```

## Features

- Student form submission
- Form validation using express-validator
- MongoDB integration for data storage
- EJS templating engine
- Form editing functionality
- Responsive design

## Available Scripts

```sh
# Start the server
npm start

# Run in development mode (if nodemon is installed)
npm run dev
```

## Dependencies

- express: ^4.21.1
- mongoose: ^8.8.0
- ejs: ^3.1.10
- express-validator: ^7.2.0
- dotenv: ^16.4.5
- bootstrap: ^5.3.3

## API Endpoints

- GET `/form-filUp` - Display form
- POST `/form-filUp` - Submit form
- GET `/edit-form/:No` - Edit form
- POST `/update/:No` - Update form
 