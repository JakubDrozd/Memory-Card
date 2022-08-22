import  { useEffect, useState } from 'react';
import { Card } from './Card';


export function Playboard(props: any){

    const [score, setScore] = useState(0)

    function setScoreFunction(prevScore: any){
        setScore(prevScore + 1)
    }
       
    const resetScore = () => setScore(0)

    const [array, setArray] = useState([
        <Card name="A" setScoreFunction = {setScoreFunction} resetScore={resetScore} key="A" handleShuffle={handleShuffle}score={score}></Card>,
        <Card name="B" setScoreFunction = {setScoreFunction} resetScore={resetScore} key="B" handleShuffle={handleShuffle}
        score={score}></Card>,
        <Card name="C" setScoreFunction = {setScoreFunction}resetScore={resetScore} key="C" handleShuffle={handleShuffle}
        score={score}></Card>,
        <Card name="D" setScoreFunction = {setScoreFunction} resetScore={resetScore} key="D" handleShuffle={handleShuffle}
        score={score}></Card>,
        <Card name="E" setScoreFunction = {setScoreFunction} resetScore={resetScore} key="E" handleShuffle={handleShuffle}
        score={score}></Card>,
        <Card name="F" setScoreFunction = {setScoreFunction} resetScore={resetScore} key="F" handleShuffle={handleShuffle}
        score={score}></Card>,
        ])

        function handleShuffle(){
            const changes = shuffle([...array])
            setArray(changes)
        }
    
        function shuffle(array: any) {
            let currentIndex = array.length,  randomIndex;
            while (currentIndex !== 0) {
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
              [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
            return array;
          }

          useEffect(() => {
            console.log("useeffect")
            shuffle(array)
          })
    
    return (
    <div className="playboard">
        {array}
        <h1>Score: {score}</h1>
    </div>
    )
}