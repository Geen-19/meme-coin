
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 300px; /* adjust based on your image size */
  height: 300px; /* adjust based on your image size */
`;

const PikachuImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Eye = styled.div`
  position: absolute;
  width: 10px; /* adjust based on your needs */
  height: 10px; /* adjust based on your needs */
  background-color: black;
  border-radius: 50%;
  transition: all 0.1s;
`;

const LeftEye = styled(Eye)`
  left: 125px; /* adjust position based on your image */
  top: 140px;  /* adjust position based on your image */
`;

const RightEye = styled(Eye)`
  left: 175px; /* adjust position based on your image */
  top: 140px;  /* adjust position based on your image */
`;

const PikachuEyes = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const eyes = document.querySelectorAll('.eye');
      
      eyes.forEach(eye => {
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + (rect.width / 2);
        const eyeCenterY = rect.top + (rect.height / 2);
        
        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
        const radius = 15; // adjust the radius of eye movement
        
        const eyeX = Math.cos(angle) * radius;
        const eyeY = Math.sin(angle) * radius;
        
        eye.style.transform = `translate(${eyeX}px, ${eyeY}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Container>
      <PikachuImage 
        src="" 
        alt="Pikachu"
      />
      <LeftEye className="eye" />
      <RightEye className="eye" />
    </Container>
  );
};

export default PikachuEyes;