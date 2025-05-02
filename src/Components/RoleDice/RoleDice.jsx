
import styles from './RoleDice.module.css'


const RoleDice = ({currentDice,onRoll}) => {
    
    const diceImages = [
        '/Images/dice_1.png',
        '/Images/dice_2.png',
        '/Images/dice_3.png',
        '/Images/dice_4.png',
        '/Images/dice_5.png',
        '/Images/dice_6.png',
      ];
  
      
      
    
    
  return (



    <div className={`${styles.roll}`}> 
       <img
        src={diceImages[currentDice]}
        alt={`dice ${currentDice + 1}`}
        onClick={onRoll}
        style={{ width: '150px', cursor: 'pointer' }}
      />
      <p>Click on Dice to roll</p>
    </div>
  )
}

export default RoleDice
