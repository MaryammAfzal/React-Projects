
import styles from "./Form.module.css";
import Button from '../Buttons/Button';
import { useState } from "react";
const Form = () => {
  const [name,setName]=useState("maryam");
  const [email,setEmail]=useState("marium@");
  const [text,settext]=useState("HImaryam");
  
  
  const onSubmit=(event)=>{

    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    settext(event.target[2].value);
    console.log("name",event.target[0].value)
      console.log("email",event.target[1].value)
      console.log("text",event.target[2].value
    )}
  return (
    <div>
      <form onSubmit={onSubmit}>
                          
                              <div className={`${styles.form_control}`}>
      
                              <label htmlFor="name">Name</label>
                              <input type="text"name ="name"/>
      
                              </div>
                              <div className={`${styles.form_control}`}>
      
                              <label htmlFor="name">Email</label>
                              <input type="text"email ="email"/>
      
                              </div>

                              <div className={`${styles.form_text}`}>
      
                              <label htmlFor="name">Text</label>
                              <textarea name ="text" rows="8"/>
      
                              </div>
                             
                              <Button className={`${styles.Bottom_btn}`} text="SUBMIT"  />
                              <div>{ name + " " + email +" "+ text}</div>
                             
                          </form>
      
    </div>
  )
}

export default Form
