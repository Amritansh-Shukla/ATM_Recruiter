# ATM Recruiter

## Overview

ATM Recruiter is a job portal application that allows users to find and apply for jobs while enabling HR professionals to post and manage job listings. The platform offers a seamless experience for job seekers and recruiters.

## Features

- **User Authentication**: Login and registration for job seekers and HR.
- **Job Listing & Search**: Browse and apply for jobs.
- **HR Dashboard**: Post and manage job listings.
- **Application Tracking**: HR can track applicants and hired candidates.
- **Secure Authentication**: JWT-based authentication with cookie storage.

## Technologies Used

### **Frontend**

- React.js (with React Bootstrap for styling)
- React Router for navigation

### **Backend**

- Node.js with Express.js
- MongoDB with Mongoose for database management
- JWT authentication


## Installation & Setup

### **Backend Setup**

1. Clone the repository:
   ```sh
   git clone https://github.com/Amritansh-Shukla/ATM_Recruiter.git
   cd ATM_Recruiter/backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```sh
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     ```
4. Start the backend server:
   ```sh
   npm start
   ```

### **Frontend Setup**

1. Navigate to the frontend folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## API Endpoints

### **User Authentication**

- `POST /api/auth/register` → Register a new user
- `POST /api/auth/login` → Login and receive JWT token

### **Job Management**

- `GET /api/jobs` → Fetch all jobs
- `POST /api/jobs` → HR can add a job (requires authentication)
- `GET /api/jobs/:id` → Fetch job details by ID
- `POST /api/jobs/apply/:id` → Apply for a job (requires authentication)

## Deployment

### **Deploying Backend**

- Use **Render**, **Heroku**, or **Vercel** for backend deployment.
- Example:
  ```sh
  git push heroku main
  ```

### **Deploying Frontend**

- Use **Netlify**, **Vercel**, or **Firebase Hosting**.
- Example:
  ```sh
  npm run build
  netlify deploy
  ```

## Contribution Guidelines

- Fork the repository and create a new branch.
- Make changes and commit with a meaningful message.
- Push changes and create a pull request.

## License

This project is licensed under the MIT License.

