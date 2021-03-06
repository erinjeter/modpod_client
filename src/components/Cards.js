import { useEffect, useState } from 'react'

import Card from './Card'
// Function name matches file name
const Cards = () => {
    // return must have one parent element
    const [cards, setCards] = useState()

    useEffect(() => {
        getCards(8)
    }, [])
    // Helper function
    const getCards = (n) => {
        let tmp = []
        for (let i = 0; i < n; i++) {
            tmp.push(
                <Card />
            )
        }
        setCards(tmp)
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                {cards}
            </div>
        </div>
    )
}

// Makes it available for import
export default Cards;