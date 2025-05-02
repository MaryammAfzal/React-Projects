import styles from './Score.module.css'

const Score = ( {score}) => {
  return (
    <div className={`${styles.maindiv}`}>
      <h1 className={`${styles.h1}`}>{score}</h1>
      <p className={`${styles.p}`}>Total Score</p>
    </div>
  )
}

export default Score
