import React from 'react'
import Button from '../Buttons/Button'
import styles from './PlayGame.module.css'
import { useState } from 'react'
import Score from '../Score/Score'
import RoleDice from '../RoleDice/RoleDice'
import Rules from '../Rules/Rules'

const PlayGame = () => {
  const [score ,setScore]=useState(0); 
    const [click,setClick]=useState();
     const [currentDice, setCurrentNumber] = useState(1);
     const [error,setError]=useState("");
     const [rules,setShowRules]=useState(false);
   



     const min =0;

     const max=5;
     function generateRandom() {
     
      if(!click) {
        setError("you have not selected any number")
        return;
      }
        setError("")
         const randomNumber=(Math.floor(Math.random() * (max - min + 1)) + min)
         setCurrentNumber(randomNumber);
         
         if(click==randomNumber+1){
          setScore(prev => prev + randomNumber+1)
         } else{
          setScore(prev => prev - 2)
         }


         setClick(undefined);
       }



  


       const setNumberSelectorHandler=(number)=>{
        handleClick(number);
        setError("")
      }



    const handleClick = (number) => {
        setClick(number);
        console.log(number)
      
      };

    const settotalscore=()=>{
         setScore(0)
         return;
    }



  return (
    <div>
      <header>
        <div> <Score score={score} /></div>

        <div className={`${styles.endbtns}`}>
          <p className={`${styles.error}`}>{error}</p>
         
        < div className={`${styles.smlbtn}`}>
        {[1, 2, 3, 4, 5, 6].map((number) => (
  <Button
    key={number}
   
    text={number.toString()}
    onClick={() =>  setNumberSelectorHandler(number)}
    className={`${styles.numberBtn} ${click === number ? styles.activeBtn : ''}`}
  />
))}

             </div>
            <div className={`${styles.para}`}> Select Number</div>

        </div>
       
      </header>

      <RoleDice   onRoll={generateRandom}currentDice={currentDice} setCurrentNumber={setCurrentNumber}/>
<div className={`${styles.btns}`}>
      <button className={`${styles.btn1}`} onClick={settotalscore}>Reset Score</button>

      <button onClick={()=>setShowRules(prev=>!prev)}
      className={`${styles.btn2}`} > { rules ? "hide": "show" } Rules</button></div>
      
    {rules &&<Rules/>}

    </div>
  )
}

export default PlayGame
