import React, { useState, useEffect } from 'react'
import tarotDeck from './Deck-array'

// const PATH = './tarot_cards/'

function Deck() {
    const [deck, setDeck] = useState(tarotDeck)
    const [card, setCard] = useState("") 
    // const [image, setImage] = useState("")

    function getRandomInt(max) {
        return(Math.round(Math.random() * (max-1)))
    }
    
    function getCard() {
        const index = getRandomInt(deck.length);
        setCard(deck[index])
        // const postImg = require('./tarot_cards/' + card.img)
    }


    useEffect(() => {
        setDeck(prev => prev.filter(crd => crd !== card))
        if(deck.length === 0) {
            setDeck(tarotDeck)
        }
    }, [card])

    const resetDeck = () => {
        setDeck(tarotDeck)
    }
    
    return (
        <div>
           {card ? <h1>You got {card.name}! </h1> : <h1>Click the button to pick a card</h1>}
           <button onClick={getCard}>Get a Card</button>
           <button onClick={resetDeck}>Reset Deck</button>
           {/* <div>{card && card.img ? <img src={require(`${PATH}${card.img}`)} alt={card.name}/> : ""}</div> */}
           <div>{card && card.img ? <img src={card.img} alt={card.name}/> : ""}</div>
           <div>{card.meaning ? <div>{card.name} means {card.meaning} when upright!</div> : ""}</div>
        </div>
    )
}

export default Deck

