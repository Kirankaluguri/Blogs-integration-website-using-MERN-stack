import React from 'react';
import { motion } from 'framer-motion';
import { FaPencilAlt, FaCamera, FaCode, FaUtensils, FaPlane, FaHeartbeat, FaGamepad, FaMusic } from 'react-icons/fa';

const BlogIcons = () => {
  const icons = [
    { Icon: FaPencilAlt, label: 'Lifestyle', color: '#FF6B6B' },
    { Icon: FaCamera, label: 'Photography', color: '#4ECDC4' },
    { Icon: FaCode, label: 'Technology', color: '#45B7D1' },
    { Icon: FaUtensils, label: 'Food', color: '#96C93D' },
    { Icon: FaPlane, label: 'Travel', color: '#FFE66D' },
    { Icon: FaHeartbeat, label: 'Health', color: '#FF7EB3' },
    { Icon: FaGamepad, label: 'Gaming', color: '#7F7FD5' },
    { Icon: FaMusic, label: 'Music', color: '#E0C3FC' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const iconVariants = {
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

  const floatVariants = {
    initial: { y: 0 },
    float: {
      y: [-10, 10],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className="blog-icons-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {icons.map(({ Icon, label, color }, index) => (
        <motion.div
          key={label}
          className="blog-icon-wrapper"
          variants={iconVariants}
          whileHover={{ scale: 1.1 }}
          style={{ '--delay': index }}
        >
          <motion.div
            className="blog-icon"
            variants={floatVariants}
            animate="float"
            style={{ backgroundColor: color }}
          >
            <Icon size={24} color="white" />
          </motion.div>
          <span className="blog-icon-label">{label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BlogIcons;
