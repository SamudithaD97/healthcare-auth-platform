# Healthcare Authentication Web Application

A modern, responsive healthcare web application featuring a complete authentication system built with React, Tailwind CSS, and EmailJS. This project includes a homepage and full authentication flow designed for healthcare providers.

## 🏥 About

This project is inspired by [ProMed Health Plus](https://promedhealthplus.com), a healthcare services provider. The application showcases a professional authentication system tailored for independent healthcare providers and medical practices.

## ✨ Features

- **User Registration**: Sign up with email verification and welcome email
- **User Login**: Secure login with email and password
- **Forgot Password**: Password reset flow with email verification code
- **Homepage**: Modern landing page with healthcare-focused design
- **Email Notifications**: Automated emails for registration and password recovery
- **Responsive Design**: Fully responsive UI built with Tailwind CSS
- **Form Validation**: Client-side validation for all forms
- **Toast Notifications**: Real-time feedback for user actions

## 🛠️ Technologies Used

- **React**: Frontend framework
- **React Router**: Navigation and routing
- **Tailwind CSS**: Utility-first CSS framework for styling
- **EmailJS**: Email service integration for automated notifications
- **LocalStorage**: Client-side user data management

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn package manager
- EmailJS account (for email functionality - EmailJS credentials is already included in this repository for testing and demonstration purposes only)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

**Important**: A `.env` file with EmailJS credentials is already included in this repository for **testing and demonstration purposes only**. 

The `.env` file contains pre-configured EmailJS settings:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_reset_password_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

**Note**: In production environments, never commit `.env` files to version control. This file is included only for easy testing and demonstration.

### 4. Run the Application

```bash
npm run dev
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
healthcare-auth-app/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── image1.png          # Login page image
│   │       └── image2.png          # Register page image
│   ├── Components/
│   │   ├── Common/
│   │   ├── Home/
│   │   │   └── Home.js             # Homepage component
│   │   ├── Login/
│   │   │   └── Login.js            # Login page component
│   │   └── Register/
│   │       └── Register.js         # Registration page component
│   ├── Pages/
│   │   └── ForgotPassword.js       # Password reset component
│   ├── App.css                     # Global styles
│   ├── App.js                      # Main app component with routes
│   ├── App.test.js                 # App tests
│   ├── index.css                   # Tailwind CSS imports
│   ├── index.js                    # Entry point
│   ├── logo.svg                    # Logo file
│   ├── reportWebVitals.js          # Performance monitoring
│   └── setupTests.js               # Test configuration
├── .env                            # Environment variables (EmailJS credentials)
├── .gitignore                      # Git ignore file
├── package-lock.json               # Dependency lock file
└── package.json                    # Project dependencies and scripts
```

## 🔐 Authentication Flow

### Registration
1. User fills out registration form (Full Name, Email, Password, Confirm Password)
2. Form validates all fields and checks password match
3. User data is stored in localStorage
4. User is redirected to login page

### Login
1. User enters email and password
2. Credentials are validated against localStorage data
3. On success, user is redirected to homepage
4. Current user session is stored

### Forgot Password
1. User enters registered email
2. 6-digit verification code is generated and sent via email
3. User enters the verification code
4. After verification, user can set a new password
5. Password is updated in localStorage

## 🎨 Styling

The application uses Tailwind CSS with a custom teal color scheme:
- Primary: Teal-600 (`#0f766e`)
- Secondary: Teal-500 (`#14b8a6`)
- Gradients and modern UI components
- Fully responsive design

## ⚠️ Important Notes

- **Testing Only**: The `.env` file with EmailJS credentials is included in this repository for **testing and demonstration purposes only**. Email functionality is pre-configured and ready to use.
- **Production Warning**: In a production environment, never commit `.env` files to version control. Always add `.env` to `.gitignore` and use secure environment variable management.
- **localStorage**: User data is stored in browser localStorage. This is suitable for demos but not recommended for production
- **Security**: For production applications, implement proper backend authentication with encrypted passwords and secure API keys

## 🔧 Available Scripts

- `npm run dev`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm test`: Runs the test suite
- `npm run eject`: Ejects from Create React App (one-way operation)

## 🙏 Acknowledgments

- Business concept inspired by [ProMed Health Plus](https://promedhealthplus.com)
- Images from Getty Images 
- Email service powered by EmailJS

---

**Note**: This is a frontend-only application created for educational and demonstration purposes.
