# Quest - MERN Stack Blogging Platform

A full-stack blogging platform built with the MERN stack, featuring a modern UI, user authentication, and rich content management.

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MERN-Stack-Blogging-Web-Application
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```
   Create `.env` file with:
   ```env
   PORT=4000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

3. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   ```
   Create `.env` file with:
   ```env
   VITE_API_URL=http://localhost:4000/api/v1
   ```

4. **Run the application**
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run dev

   # Terminal 2 - Frontend
   cd frontend
   npm run dev
   ```

## 🏗️ Architecture

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JWT Authentication
- Cloudinary for image storage
- Express Validators
- Cookie Parser
- CORS enabled

### Frontend
- React 18 with Vite
- React Router v6
- Context API
- Styled Components
- Framer Motion
- Axios
- React Hot Toast

## 📦 Features

- 🎨 Modern UI/UX with Dark/Light mode
- 🔐 User Authentication
- ✍️ Blog Management
- 👥 User Profiles
- 📱 Responsive Design
- 🖼️ Image Upload
- 🔍 Search & Filter
- 📊 Author Dashboard

## 📁 Project Structure

```
MERN-Stack-Blogging-Web-Application/
├── backend/               # Backend server
│   ├── controllers/      # Route controllers
│   ├── middlewares/     # Custom middlewares
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   └── server.js        # Entry point
├── frontend/             # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── styles/      # Global styles
│   │   └── App.jsx     # Root component
│   └── index.html      # HTML template
└── README.md            # This file
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
# Integration-of-blogs-Web-application-using-MERN-Stack
