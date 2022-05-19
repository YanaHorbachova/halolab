import { useState, useEffect } from "react";
import fetchCards from './services/api-services';
import Cards from './components/Cards';
import Modal from './components/Modal';
import Form from './components/Form';
import CardItem from './components/CardItem';
import useModal from './components/hooks/useModal';
import styles from './App.module.css';

function App() {
  const {showModal, toggle} = useModal();
  const [cards, setCards] = useState()
  const [index, setIndex] = useState()

  useEffect(() => {          
    fetchCards()
    .then(response => setCards(response.data));    
   },[]);

  const onOpenModal = (event) => {
    if(event.target.textContent === 'Buy cheapest'){      
      const index = cards.reduce((acc, curr, i) => cards[acc].price < curr.price ? acc : i, 0);
      setIndex(index)
    } 
    if(event.target.textContent === 'Buy'){
      setIndex(event.target.id); 
    }
 
    toggle()    
  }

  return (
      <div className={styles.App}>
        <Cards cards={cards} onOpenModal={onOpenModal}/>
        {showModal && (<Modal toggle={toggle}>
            <CardItem cards={cards} ind={index}/>
            <Form toggle={toggle}/>
        </Modal>)}  
      </div>
    );
  }


export default App;