
import Button from '../Buttons/Button';
import styles from './Contact.module.css'
import { MdHeight, MdMessage, MdWidthFull } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import Form from '../form/Form';


const Contact=()=>{
   
    return(
        <>
        <main>
            <section>
                <div className={ `${styles.container}`} >
                    <h1>CONTACT US</h1>
                    <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
                </div>
                </section>

                <div className={`${styles.display}`}>
                    <div className={`${styles.input}`}>

                        <div className={`${styles.top_btn}`}>
                        <Button  
                        text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="20px"/> }/>
                        <Button text="VIA CALL" icon={<IoMdCall  fontSize="20px"/> }/>  
                        </div>

                        <div className={`${styles.btn}`} >
                            <Button isoutline={true}
                         text="VIA EMAIL FORM" icon={<MdMessage fontSize="20px"/> }/>  </div>


                    
                    <Form/>
                   
                    </div>

                    <div className={`${styles.picture}`}>
                        <img src='Images/picture.svg' style={{ height: '460px', width: 'auto' }} ></img>
                    </div>
                    </div>

            
        </main>
        
        
        
        </>
    )
}
export default Contact;