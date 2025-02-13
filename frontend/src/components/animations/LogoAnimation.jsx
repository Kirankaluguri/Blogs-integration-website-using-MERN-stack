import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`;

const LogoImage = styled(motion.img)`
  width: ${props => props.size || '50px'};
  height: ${props => props.size || '50px'};
`;

const LogoText = styled(motion.span)`
  font-size: ${props => props.fontSize || '24px'};
  font-weight: bold;
  background: linear-gradient(45deg, #00F5A0, #00D9F5, #9D00F5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  letter-spacing: 2px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;

const LogoAnimation = ({ size, fontSize, showText = true, className }) => {
  return (
    <LogoContainer
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <LogoImage
        src="/images/quest-logo.svg"
        alt="Quest Logo"
        size={size}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      {showText && (
        <LogoText
          fontSize={fontSize}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Quest
        </LogoText>
      )}
    </LogoContainer>
  );
};

export default LogoAnimation;
