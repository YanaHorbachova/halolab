import { useState } from "react";
import {ReactComponent as Error} from '../../icon/error.svg'
import styles from "./Form.module.css";

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('')

  const [validName, setValidName] = useState('true')
  const [errorName, setErrorName] = useState('')

  const [validNumber, setValidNumber] = useState('true')
  const [errorNumber, setErrorNumber] = useState('This field in required')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( `name : ${name}, number: ${number}`)
    reset();
  };  
  
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

  const reset = () => {
    setNumber('')
    setName('')
  };

    return (
      <form className={styles.form} onSubmit={handleSubmit}>

          <input
            className={styles.name}
            id='name'
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={handleImputName}
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
            onChange={handleImputNumber}
            value={number}
            name="number"
            placeholder="Number"
            pattern="^[0-9]{12}"
            maxLength="12"
            required
          />
          {!validNumber ? <div className={styles.error}> 
                            <p>{errorNumber}</p>
                            <Error className={styles.ErrorIcon}/>
                        </div> : <></>}

        <button type="submit" className={styles.button} onChange={handleSubmit} >Order</button>
      </form>
    );
  }


export default Form;