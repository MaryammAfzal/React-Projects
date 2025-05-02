import React from 'react';
import styles from './Rules.module.css'


const Rules = ({ onClose }) => {
  return (
  <main className={`${styles.bg}`}>
    <h2> How to play Dice Game</h2>
    <div className={`${styles.text}`}>
    <p >Select any number.</p>
        <p>Click on the dice image.</p>
        <p>If selected number equals dice number, you get same points.</p>
        <p>If guess is wrong, 2 points will be deducted.</p>


    </div>
  </main>
  );
};

export default Rules;
