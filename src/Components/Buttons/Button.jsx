
import styles from './Button.module.css'
import { MdMessage } from "react-icons/md";

const Button = ({isoutline,icon,text,...rest}) => {
    
  return (
   
    <div className={`${styles.maindiv}`}>
      <button  {...rest} className={isoutline? styles.outline_btn : `${styles.primary_btn}`}>
     
      {icon}
      {text}
     
      
      </button>
    </div>
  )
}

export default Button;
