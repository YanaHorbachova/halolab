import React, { Component } from "react";
import styles from "./Form.module.css";

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log( `name : ${this.state.name}, number: ${this.state.number}`)
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>

          <input
            className={styles.name}
            id='name'
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={this.handleChange}
            pattern="[A-Za-zА-Яа-яЁё]*$"
            title="Only letters allowed"
            required
          />
         
          <input
            className={styles.number}
            type="tel"
            onChange={this.handleChange}
            value={number}
            name="number"
            placeholder="Number"
            pattern="^[0-9]{12}"
            maxLength="12"
            title="Only numbers allowed"
            required
          />

        <button type="submit" className={styles.button}>Order</button>
      </form>
    );
  }
}

export default Form;