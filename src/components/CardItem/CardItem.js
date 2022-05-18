import React from 'react';
import styles from './CardItem.module.css';

const CardItem = ({cards, ind, children}) => {
    const card = cards[ind]
    
    return (
        <div>
            <p className={styles.category}>{card.category}</p>
            <p className={styles.name}>{card.name}</p> 
            <p className={styles.price}>{card.price}</p> 
            <div className={styles.box}>
                {children}
            </div>  
        </div>
    );
  }; 
  
  export default CardItem;