import React from 'react';
import CardItem from '../CardItem';
import styles from './Cards.module.css'; 

const Cards = ({cards, onOpenModal}) => {
    return (  
        <div>
            {cards !== undefined ? 
                <div>
                    <ul className={styles.CardList}>
                    {cards.map((card, index) => ( 
                        <li key={index} className={styles.card}>
                            <CardItem cards={cards} ind={index}>
                                <button type='button' id={index} onClick={onOpenModal} className={styles.CardButton}>Buy</button>
                            </CardItem>                       
                        </li>                
                    ))} 
                    </ul>
                    <button type='button' onClick={onOpenModal} className={styles.button}>Buy cheapest</button>  
                </div>
            : <p className={styles.loader}> Загружаем... </p>}   
             
        </div>
            
);}
    
export default Cards;