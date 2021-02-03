import React, { useState, useEffect } from 'react'
import tarotDeck from './Deck-array'

function Deck() {
    const [deck, setDeck] = useState(tarotDeck)
    const [card, setCard] = useState("")  
    
    function getRandomInt(max) {
        return(Math.round(Math.random() * (max-1)))
    }
    
    function getCard() {
        const index = getRandomInt(deck.length);
        setCard(deck[index])
        console.log("deck now has " + deck.length)
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
           {card ? <h1>You got {card}!</h1> : <h1>Click the button to pick a card</h1>}
           <button onClick={getCard}>Get a Card</button>
           <button onClick={resetDeck}>Reset Deck</button>
        </div>
    )
}

export default Deck

