import "../styles/Scoreboard.css"

export function Scoreboard(props: any){
    return (
        <div className="score-container"><h1>Score: {props.score}</h1></div>
    )
}