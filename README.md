# 📝 Registration Form Backend (MERN Stack)

This project is a backend system for a registration form built using the **MERN stack**. The backend is built with **Node.js** and **Express.js**, and it handles incoming registration data and saves it to an **Excel file**.

> ⚙️ Frontend (React) and MongoDB integration can be added or extended, but this part of the project currently focuses on backend and Excel integration.

---

## 🚀 Features

- API to handle user registration form submissions
- Saves submitted data to an Excel file using `xlsx`
- Basic error handling and form data validation (optional/ongoing)

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **xlsx** (for writing to Excel)
- **MongoDB** (optional/not used in this phase)

---

## 📁 Project Structure

/backend
├── routes/
│ └── register.js # Handles POST requests for form submissions
├── controllers/
│ └── registerController.js # Core logic for saving data to Excel
├── data/
│ └── registrations.xlsx # Output Excel file with form data
├── app.js # Main Express app setup
├── package.json
└── README.md

---

## 📦 Installation & Setup

1. Clone the repo:

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name/backend

Install dependencies:

bash
npm install

**Start the backend server:

bash
node app.js
# or if using nodemon
npx nodemon app.js**

📤 API Endpoint
POST /api/register
Submit registration form data.

Example Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "NTT-DATA",
  "job-title": "Employee"
}

📁 Data Storage
Form submissions are saved in an Excel file located at:

/data/registrations.xlsx
File is created if it doesn't exist, and new entries are appended.
🤝 Contributing
You're welcome to contribute to this project! Current focus areas:

 Backend form handling

 Save to Excel file

 Form validation

 MongoDB integration

 Frontend integration (React)

Steps to contribute:

Fork the repository

Create a feature branch: git checkout -b feature-name

Commit your changes

Push to your fork and create a pull request

📄 License
This project is licensed under the MIT License.

🙋‍♂️ Maintainer

---

Let me know if you’d like me to generate any actual code files (`app.js`, route files, Excel logic) or a `package.json` as a starter.
