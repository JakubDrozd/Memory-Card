import React, { useState } from 'react';
import { Card } from './Card';


export function Playboard(props: any){

    const [score, setScore] = useState(0)

    const setScoreFunction = () => setScore(score + 1)

    const resetScore = () => setScore(0)

    const array = [
    <Card name="A" setScoreFunction = {setScoreFunction} resetScore={resetScore}></Card>,
    <Card name="B" setScoreFunction = {setScoreFunction} resetScore={resetScore}></Card>,
    <Card name="C" setScoreFunction = {setScoreFunction} resetScore={resetScore}></Card>,
    <Card name="D" setScoreFunction = {setScoreFunction} resetScore={resetScore}></Card>,
    <Card name="E" setScoreFunction = {setScoreFunction} resetScore={resetScore}></Card>,
    <Card name="F" setScoreFunction = {setScoreFunction} resetScore={resetScore}></Card>
    ]


    const randomize = (myArray : any[]) =>{
        const random = myArray[Math.floor(Math.random() * myArray.length)]
        const index = array.indexOf(random)
        array.splice(index, 1 )
        return random
    }

   


    return (
    <div className="playboard">
        {randomize(array)}
        {randomize(array)}
        {randomize(array)}
        {randomize(array)}
        {randomize(array)}
        {randomize(array)}
        <h1>{score}</h1>
    </div>
    )
}