// PikachuComponent.jsx
import React from 'react';
import styled from 'styled-components';
import pikachuImage from '../../assets/pikaPic.png';
import wingImage from '../../assets/left.png';

const Container = styled.div`
  position: relative;
  text-align: center;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const Text = styled.h1`
  font-family: Impact;
  font-size: 256px;
  font-weight: 400;
  line-height: 312.25px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #FFFFFF;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-83%, -160%);
  z-index: 1;
  margin: 0;
`;
const TokenTextContainer = styled.div`
  background-color: white;
  padding: 20px;
  position: absolute;
  left: 70%;
  transform: translateY(950%) rotate(25deg);
  z-index: 3;
  transform-origin: center;
  border-radius: 32px; // Optional: adds rounded corners
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Optional: adds subtle shadow
`;
const TokenText = styled.div`
    
  font-family: Impact;
  font-weight: 400;
  color: #000000;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
`;

const CopyableText = styled.div`
  font-family: monospace;
  font-size: 16px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  cursor: pointer;
  user-select: all;
  position: absolute;
  border-radius: 24px;
  top: 20px;
  transform: translateY(1500%);
  z-index: 4;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const PikachuContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Pikachu = styled.img`
  width: 640px;
  height: 640px;
  position: relative;
  z-index: 2;
`;

const Wing = styled.img`
  position: absolute;
  width: 500px;
  height: 500px;
  top: 50%;
  transform: ${props => props.left 
    ? 'translateY(-50%)' 
    : 'translateY(-50%) rotateY(180deg)'};
  transition: filter 0.3s ease;
  z-index: 1;
  ${props => props.left ? 'left: -200px;' : 'right: -150px;'}

  ${PikachuContainer}:hover & {
    filter: brightness(3) drop-shadow(0 0 10px #FFD700);
  }
`;

const PikachuComponent = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText('7a5YotowDECg8U36QK46YiyEQPmw8ixf68LAnTr2pump');
  };

  return (
    <Container>
      <PikachuContainer>
      <TokenTextContainer>
        <TokenText>BUY $NIGGACHU</TokenText>
      </TokenTextContainer>
        <Text>NIGGACHU</Text>
        <Wing src={wingImage} alt="Left Wing" left />
        <Pikachu src={pikachuImage} alt="Pikachu" />
        <Wing src={wingImage} alt="Right Wing" />
      </PikachuContainer>
      <CopyableText onClick={handleCopy}>
        7a5YotowDECg8U36QK46YiyEQPmw8ixf68LAnTr2
        </CopyableText>
    </Container>
    );
}
export default PikachuComponent;