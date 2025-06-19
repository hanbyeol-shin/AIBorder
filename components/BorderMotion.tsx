import React from 'react';
import styles from './BorderMotion.module.css';

interface BorderMotionProps {
  text?: string;
}

const BorderMotion: React.FC<BorderMotionProps> = ({ text = 'Hover' }) => {
  return (
    <div className={styles.container}>
      <div className={styles.gradientBorder}>
        {text}
      </div>
    </div>
  );
};

export default BorderMotion; 