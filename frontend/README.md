# Quest - MERN Stack Blogging Platform

Quest is a modern, feature-rich blogging platform built with the MERN (MongoDB, Express.js, React, Node.js) stack. It provides a seamless experience for both readers and authors to create, share, and engage with content.

## Features

- 🎨 Modern UI with Dark/Light mode support
- 🔐 User Authentication & Authorization
  - Author registration and login
  - Protected routes and role-based access
- ✍️ Blog Management
  - Create, edit, and delete blog posts
  - Rich text editor for content creation
  - Image upload support
- 👥 User Profiles
  - Author dashboard
  - Profile customization
  - Author statistics
- 🎯 Advanced Features
  - Responsive design
  - Animated logo and UI elements
  - Real-time updates
  - Search functionality
  - Category filtering

## Tech Stack

### Frontend
- React 18 with Vite
- React Router v6 for navigation
- Context API for state management
- Styled Components for styling
- Framer Motion for animations
- Axios for API requests
- React Hot Toast for notifications

### UI Components
- Custom animated logo
- Responsive navbar with dark mode toggle
- Modern card layouts
- Interactive forms

## Getting Started

1. **Installation**
   ```bash
   cd frontend
   npm install
   ```

2. **Development**
   ```bash
   npm run dev
   ```
   The application will start at `http://localhost:5173`

3. **Build**
   ```bash
   npm run build
   ```

## Environment Variables

Create a `.env` file in the frontend directory with:
```env
VITE_API_URL=http://localhost:4000/api/v1
```

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── animations/    # Custom animations
│   │   ├── layout/        # Layout components
│   │   ├── pages/         # Page components
│   │   └── miniComponents/# Reusable components
│   ├── styles/            # Global styles
│   ├── main.jsx          # Entry point
│   └── App.jsx           # Root component
└── public/
    └── images/           # Static assets
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
