import { useState } from "react";
import {ReactComponent as Error} from '../../icon/error.svg'
import styles from "./Form.module.css";

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('')

  const [validName, setValidName] = useState(true)
  const [errorName, setErrorName] = useState('This field in required')

  const [validNumber, setValidNumber] = useState(true)
  const [errorNumber, setErrorNumber] = useState('This field in required')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( `name : ${name}, number: ${number}`)
    reset();
  };  

  const ValidForm = () => {
    if((number.length < '1') && (name.length < '1')){
      setValidNumber(false); 
      setValidName(false);
    } 
    if(name.length < '1'){
      return setValidName(false)
    }
    if(number.length < '1'){
      return setValidNumber(false)
    } 
  }
  
  const handleImputName = (e) => {
    setName(e.target.value)
    setValidName(e.target.validity.valid)

    if(e.target.value < '1') {
      return setErrorName('This field in required');         
    }
    if(!e.target.validity.valid) {
      return setErrorName('Only letters allowed');   
    }
  }

  const handleImputNumber = (e) => {
    setNumber(e.target.value)
    setValidNumber(e.target.validity.valid)

    if(e.target.value.length < '1') {
      return setErrorNumber('This field in required');         
    }
    if(e.target.value.length < '12') {
      
      return setErrorNumber('Should contain 12 characters');         
    }
    if((e.target.value.length > '11') && (!e.target.validity.valid)) {
      return setErrorNumber('Only numbers allowed');   
    }
  }

  const ClearInvalidName = (e) => {
    if(!e.target.validity.valid){
      return setName('') 
    }
  }

  const ClearInvalidNumber = (e) => {
    if(!e.target.validity.valid){
      return setNumber('')
    }
  }

  const reset = () => {
    setNumber('')
    setName('')
  };

    return (
      <form className={styles.form} onSubmit={handleSubmit} >

          <input
            className={styles.name}
            id='name'
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={handleImputName}
            onFocus={ClearInvalidName}
            pattern="[A-Za-zА-Яа-яЁё]*$"
            required
          />
          {!validName ? <div className={styles.error}> 
                            <p >{errorName}</p>
                            <Error className={styles.ErrorIcon}/>
                        </div> : <></>}
         
          <input
            className={styles.number}
            type="tel"
            value={number}
            name="number"
            placeholder="Number"            
            onChange={handleImputNumber}            
            onFocus={ClearInvalidNumber}
            pattern="^[0-9]{12}"
            maxLength="12"
            required
          />
          {!validNumber ? <div className={styles.error}> 
                            <p>{errorNumber}</p>
                            <Error className={styles.ErrorIcon}/>
                        </div> : <></>}

        <button type="submit" className={styles.button} onFocus={ValidForm}>Order</button>
      </form>
    );
  }


export default Form;