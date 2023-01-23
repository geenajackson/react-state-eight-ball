import answers from "./answers";
import "./EightBall.css"

import { useState } from "react";

const EightBall = () => {
    const [msg, setMsg] = useState("Think of a Question");
    const [color, setColor] = useState("black");
    const backgroundColor = { backgroundColor: color };
    //ball stalls if a counter is not used; will freeze on a message and color.
    let [counter, setCounter] = useState(0);

    const setBall = () => {
        setMsg(answer.msg);
        setColor(answer.color);
        setCounter(counter += 1)
    }
    const answer = answers[(Math.floor(Math.random() * answers.length))]

    return (
        <div className="EightBall">
            <div className="EightBall-Ball" style={backgroundColor} onClick={setBall}>
                <p>
                    {msg}
                </p>
            </div>
            <p>
                You've decided your fate <b>{counter}</b> time{counter !== 1 ? "s" : ""}.
            </p>
        </div>
    )
};

export default EightBall;