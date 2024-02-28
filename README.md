# Expense_Manager
 
The Expense Management System is a web-based application designed to assist users in tracking and managing their daily expenses. Built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), this system aims to provide a scalable, responsive, and user-friendly platform for efficient expense management.

## Objectives
1. Simplify expense tracking for individuals and organizations.
2. Provide detailed insights into spending patterns to enable better financial management.
3. Offer a platform for users to create, update, and delete expenses and categories.
4. Generate comprehensive reports based on user-defined time periods and categories.

## Features
- **User Authentication and Authorization:** Secure sign-up and login functionality with role-based access control.
- **Expense and Category Management:** Create, update, and delete expense entries and categories. Track expenses by date, category, and description. Support attaching receipts or other relevant documents.
- **Dashboard and Reporting:** Visualize expenses with an overview dashboard displaying total expenses, expenses by category, and recent transactions. Generate reports based on selected date ranges and categories using pie charts and bar graphs.
- **Responsive User Interface:** Design a clean, responsive user interface using React.js and CSS frameworks for seamless user experience across devices.

## Technical Architecture
**Frontend:**
- Utilized React.js for building the user interface with responsive design.
- Incorporated tsparticle library for background effects and other libraries like unique-names-generator, react-datepicker, and moment.
  
**Backend:**
- Built a RESTful API using Node.js and Express.js to handle client requests and serve as the application's backend.
- Implemented authentication and authorization using JSON Web Tokens (JWT) and middleware for endpoint protection.
  
**Database:**
- Stored all data, including user information, expense entries, and categories, in MongoDB, a NoSQL database.
- Utilized Mongoose ORM for schema definition and validation.

## Run Locally
1. Clone the project: `git clone https://github.com/khwa-hish/Expense_Manager.git`
2. Navigate to the project directory: `cd Expense-Tracker-App`
3. Install frontend dependencies: 
   ```
   cd frontend
   npm install
   ```
4. Install backend dependencies: 
   ```
   cd backend
   npm install
   ```
5. Start the frontend server: `npm start`
6. Start the backend server: `npm run dev`

## Environment Variables
To run this project locally, add the following environment variables to your `.env` file in the backend folder:
- `MONGO_URL`: Your MongoDB Connection String
- `PORT`: Port number

## Tech Stack
**Client:** React, Redux, react-bootstrap, Material Icons 
**Server:** Node, Express  
**Database:** MongoDB  
