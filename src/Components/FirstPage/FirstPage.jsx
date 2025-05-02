import Button from '../Buttons/Button';
import PlayGame from '../PlayGame/PlayGame';
import styles from './FirstPage.module.css';
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {
    const navigate = useNavigate();
  return (
    <div>
        <main className={`${styles.main}`}>

            <div className={`${styles.div1}`}>
                <img src='Images/dices 1.png'></img>
            </div>

            <div className={`${styles.div2}`}>
                <h1 style={{ fontWeight: 700 }}className={`${styles.heading}`}>DICE GAME</h1>

                <Button  onClick={() => navigate('/game')}
                className={`${styles.btn}`} text="Play Now"/>
            </div>
        </main>
      
    </div>
  )
}

export default FirstPage;
