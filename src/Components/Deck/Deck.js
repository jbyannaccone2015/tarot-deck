import React, { useState, useEffect } from 'react'
import tarotDeck from './Deck-array'
import './Deck.css'

// const PATH = './tarot_cards/'

function Deck() {
    const [deck, setDeck] = useState(tarotDeck)
    const [card, setCard] = useState("") 
    const [position, setPosition] = useState(true)
    const [seat, setSeat] = useState("upright")
    const [style, setStyle] = useState("card")
    // const [image, setImage] = useState("")

    function getRandomInt(max) {
        return(Math.round(Math.random() * (max-1)))
    }
    
    function getCard() {
        const index = getRandomInt(deck.length);
        setCard(deck[index])
        reversed()
        console.log("Position is: " + position)
        console.log("Meaning is:" + card.meaning)
        seatDet()
        console.log("The Alignment is:" + seat)
        detStyle()
        console.log("The Style is:" + style)
    }

    function determineRand() {
        return(Math.random())
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

    function reversed() {
        const revPos = determineRand()
        if(revPos > 0.5) {
            setPosition(true)
        }
        else if(revPos < 0.5) {
            setPosition(false)
        }
    }

    function seatDet() {
        if(position == false) {
            setSeat("reversed")
        }
        else {
            setSeat("upright")
        }
    }

    function detStyle() {
        if(position == false) {
            setStyle("revCard")
        }
        else {
            setStyle("card")
        }
    }

    
    return (
        <div className="table">
            <div className="pagefunct">
            {card ? <h1 className= "intro">You got {card.name}! </h1> : <h1 className="introAlt">Pick a card!</h1>}
            <button className="btn1" onClick={getCard}>Get a Card</button>
            <button className="btn2" onClick={resetDeck}>Reset Deck</button>
            </div>
            {/* <div>{card && card.img ? <img src={require(`${PATH}${card.img}`)} alt={card.name}/> : ""}</div> */}
            <div>{card && card.img ? <img className={style} src={card.img} alt={card.name}/> : ""}</div>
            <div className="meaning">{card.meaning ? <div>{card.name} means: <hr /> <span>{seat === "upright" ? card.meaning : card.rmeaning} when {seat}!</span></div> : ""}</div>
        </div>
    )
}

export default Deck

