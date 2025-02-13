import React, { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../main';
import { FaArrowRight, FaPen, FaImage, FaCode, FaBook } from 'react-icons/fa';
import BlogIcons from '../animations/BlogIcons';
import LogoAnimation from '../animations/LogoAnimation';

const Welcome = () => {
  const { mode } = useContext(Context);
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const createParticle = () => {
      const particles = document.querySelector('.particles');
      if (!particles) return;

      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 6 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      const startPos = Math.random() * 100;
      particle.style.left = `${startPos}%`;
      particle.style.top = '0%';
      
      const endPos = startPos + (Math.random() * 20 - 10);
      const animationDuration = Math.random() * 3 + 5;
      
      particle.style.transform = `translate(${endPos - startPos}vw, 100vh)`;
      particle.style.transition = `transform ${animationDuration}s linear, opacity ${animationDuration}s ease-in-out`;
      
      requestAnimationFrame(() => {
        particles.appendChild(particle);
        requestAnimationFrame(() => {
          particle.style.opacity = '0.8';
          setTimeout(() => {
            particle.remove();
          }, animationDuration * 1000);
        });
      });
    };

    const interval = setInterval(createParticle, 200);
    return () => clearInterval(interval);
  }, []);

  const handleEnterClick = (e) => {
    e.preventDefault();
    setIsExiting(true);
    
    // Create ripple effect
    const ripple = document.createElement('div');
    ripple.className = 'page-transition-ripple';
    document.body.appendChild(ripple);

    // Add random movement to floating icons
    document.querySelectorAll('.floating-icon').forEach(icon => {
      icon.style.setProperty('--random-x', `${Math.random() * 200 - 100}px`);
      icon.style.setProperty('--random-rotate', `${Math.random() * 360}deg`);
    });

    // Add random angles to trails
    document.querySelectorAll('.trail').forEach(trail => {
      trail.style.setProperty('--trail-angle', `${-15 + Math.random() * 30}deg`);
    });

    // Trigger exit animations with delay
    setTimeout(() => {
      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
      navigate('/home');
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      title: "Share Your Stories",
      description: "Express yourself through powerful storytelling"
    },
    {
      title: "Connect with Authors",
      description: "Join a community of passionate writers"
    },
    {
      title: "Discover New Ideas",
      description: "Explore diverse perspectives and insights"
    },
    {
      title: "Join the Community",
      description: "Be part of something bigger"
    }
  ];

  return (
    <div className={`welcome-container ${mode === 'dark' ? 'dark-bg' : 'light-bg'} ${isExiting ? 'exiting' : ''}`}>
      {/* Logo */}
      <motion.div
        className="logo-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <LogoAnimation size="80px" fontSize="32px" />
      </motion.div>

      {/* Decorative Shapes */}
      <div className="decorative-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Floating Icons */}
      <div className="floating-icons">
        <div className="floating-icon icon-1">
          <FaPen />
        </div>
        <div className="floating-icon icon-2">
          <FaImage />
        </div>
        <div className="floating-icon icon-3">
          <FaCode />
        </div>
        <div className="floating-icon icon-4">
          <FaBook />
        </div>
      </div>

      {/* Light Trails */}
      <div className="light-trails">
        <div className="trail trail-1"></div>
        <div className="trail trail-2"></div>
        <div className="trail trail-3"></div>
        <div className="trail trail-4"></div>
      </div>

      {/* Corner Decorations */}
      <div className="corner-decoration corner-top-left"></div>
      <div className="corner-decoration corner-top-right"></div>
      <div className="corner-decoration corner-bottom-left"></div>
      <div className="corner-decoration corner-bottom-right"></div>

      <div className="particles" />
      <AnimatePresence>
        <motion.div
          className="welcome-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ 
            scale: isExiting ? 1.5 : 1,
            opacity: 0,
            transition: { duration: 0.5 }
          }}
        >
          <motion.h1
            className="welcome-title"
            variants={itemVariants}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
          >
            Welcome to Quest
          </motion.h1>
          
          <motion.p
            className="welcome-subtitle"
            variants={itemVariants}
          >
            Your Journey Through Knowledge Begins Here
          </motion.p>

          <BlogIcons />

          <motion.div
            className="features-grid"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-item"
                variants={itemVariants}
                style={{ '--delay': index }}
                whileHover={{
                  scale: 1.05,
                  rotateX: 10,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="enter-button-container"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 245, 160, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/home" 
                className="enter-button"
                onClick={handleEnterClick}
              >
                Enter Quest <FaArrowRight className="arrow-icon" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Welcome;
