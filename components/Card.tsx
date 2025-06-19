import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface CardProps {
  children?: ReactNode;
}

const CardWrapper = styled.div`
  display: inline-flex;
  height: 26.75rem;
  padding: var(--space-g32, 21.25rem) var(--space-g24, 4.0625rem) var(--space-g32, 2rem) var(--space-g24, 1.5rem);
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  
  border-radius: 1.5rem;
  border: 2px solid #B487FD;
  background: var(--color-w100-op70, rgba(255, 255, 255, 0.70));
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
`;

const Card: React.FC<CardProps> = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default Card; 