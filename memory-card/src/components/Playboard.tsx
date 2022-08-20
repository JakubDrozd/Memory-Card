import React, { useState } from 'react';
import { Card } from './Card';


export function Playboard(props: any){

    const [score, setScore] = useState(0)

     function handleClick(){
        setScore(score + 1);
    }

    const array = [
    <Card name="A" onClick={handleClick}></Card>,
    <Card name="B"></Card>,
    <Card name="C"></Card>,
    <Card name="D"></Card>,
    <Card name="E"></Card>,
    <Card name="F"></Card>
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