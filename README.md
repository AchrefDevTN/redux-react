# Redux React

![Redux React](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*dm00QProOdGxcV9gv0RX_w.png)

## Overview

Redux React is a modern web application built with React, Redux, and Redux Thunk for efficient state management. This project demonstrates best practices for managing application state, user authentication, and dynamic data fetching in a scalable and maintainable way.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Folder Structure](#folder-structure)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)
- [Links](#-links)

## Features

- **User Authentication**: Handles user login and logout with Redux state management.
- **Dynamic Data Fetching**: Fetches data asynchronously using Axios and Redux Thunk.
- **State Persistence**: Persists Redux state across sessions using localStorage with encryption.
- **Loading Indicators**: Provides visual feedback during data fetching operations.
- **Error Handling**: Centralized error handling with user-friendly messages.

## Tech Stack

- **Frontend**: React, Redux, Redux Thunk
- **Data Fetching**: Axios
- **State Management**: Redux
- **State Persistence**: localStorage with encryption
- **Environment Management**: dotenv

## Prerequisites

Ensure you have the following installed and configured on your machine:

- **Node.js**: Version 14 or higher. [Download here](https://nodejs.org/)
- **npm**: Version 6 or higher. [Download here](https://www.npmjs.com/get-npm)

For installation assistance, refer to the official documentation or guides.

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AchrefDevTN/redux-react.git
   ```
2. **Navigate into the project directory:**
   ```bash
   cd redux-react
   ```
  
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Create a .env file in the root directory:**
   (Copy the contents below and configure your environment variables)
  
   ```ini
   REACT_APP_API_URL=http://localhost:5000
   REACT_APP_ENCRYPTION_SECRET=my-secret-key
   ```

5. **Run the application:**
   ```bash
   npm start
   ```

6. **Access the application:**
   - The application  will be running on
   ```bash
   http://localhost:3000
   ```



## Folder Structure

Here is an overview of the project structure:

   ```bash
   redux-react/
│
├── public/
│   ├── index.html             # The main HTML file
│   └── favicon.ico            # Favicon for the application
│
├── src/
│   ├── components/            # Reusable React components
│   │   ├── App.js             # Main App component
│   │   ├── Dashboard.js       # Dashboard page component
│   │   └── Login.js           # Login page component
│   │
│   ├── redux/
│   │   ├── actions/           # Redux action creators
│   │   │   ├── authActions.js # Authentication actions
│   │   │   └── userActions.js # User actions
│   │   │
│   │   ├── reducers/          # Redux reducers
│   │   │   ├── authReducer.js # Authentication reducer
│   │   │   ├── userReducer.js # User reducer
│   │   │   └── rootReducer.js # Combines all reducers
│   │   │
│   │   ├── selectors/         # Redux selectors
│   │   │   ├── authSelectors.js # Authentication selectors
│   │   │   └── userSelectors.js # User selectors
│   │   │
│   │   ├── services/          # API service functions
│   │   │   ├── axiosInstance.js # Configured Axios instance
│   │   │   ├── authService.js   # Authentication service functions
│   │   │   └── userService.js   # User service functions
│   │   │
│   │   └── store.js           # Redux store configuration
│   │
│   ├── utils/                 # Utility functions and helpers
│   │   ├── encryption.js      # Functions for data encryption
│   │   └── storage.js         # Functions for handling localStorage
│   │
│   ├── index.js               # Application entry point
│   ├── App.css                # Global CSS styles
│   └── App.js                 # Main App component
│
├── .env                       # Environment variables
├── package.json               # Project metadata and dependencies
└── README.md                  # Project documentation

   ```


## Error Handling
Errors are managed in Redux, with appropriate user feedback displayed in the UI. Error messages are centralized in the reducers and can be displayed in the components.

## Contributing
If you have suggestions or improvements, please submit an issue or pull request. Contributions are welcome!

## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/AchrefDevTN/redux-react/blob/main/LICENSE) file for details.

## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)]([https://www.linkedin.com/](https://www.linkedin.com/in/achref-ben-brahim-dev/))


| React | Redux | Axios | License |
|-------|-------|-------|---------|
| [![React](https://img.shields.io/badge/React-v18%2B-blue)](https://reactjs.org/) | [![Redux](https://img.shields.io/badge/Redux-v4%2B-blue)](https://redux.js.org/) | [![Axios](https://img.shields.io/badge/Axios-v0.21%2B-brightgreen)](https://axios-http.com/) | [![License](https://img.shields.io/badge/license-MIT-brightgreen)](LICENSE) |


