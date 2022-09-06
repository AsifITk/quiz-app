import React, { useRef } from 'react'
import Solutions from './Solutions';
import App from "../App";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link,
    useParams,
    useRouteMatch,
} from "react-router-dom";


function Main() {
    let questions = [
        [
            "What type of animal is a natterjack?",
            ["Toad", 1],
            ["Nope", 0],
            ["Maybe", 0],
            ["Definetly", 0],
        ],
        [
            "According to their 1974 hit, what were Brownsville Station doing     In The Boys Room    ?",
            ["Yess", 0],
            ["Smokin", 1],
            ["Maybe", 0],
            ["Definetly", 0],
        ],
        [
            "The Japanese district Akihabara is also known by what nickname?",
            ["Yess", 0],
            ["Nope", 0],
            ["Electric Town", 1],
            ["Definetly", 0],
        ],
        [
            "What year did the Boxing Day earthquake  tsunami occur in the Indian Ocean?",
            ["Yess", 0],
            ["Nope", 0],
            ["Maybe", 0],
            ["2004", 1],
        ],
        [
            "Is the sky blue?",
            ["Yes", 1],
            ["Nope", 0],
            ["Maybe", 0],
            ["Definetly", 0],
        ],
        [
            "The name of Junko Enoshimas imposter at the beginning of Danganronpa: Trigger Happy Havoc is?",
            ["Mukuro Ikusaba", 1],
            ["Nope", 0],
            ["Maybe", 0],
            ["Definetly", 0],
        ]

    ];
    let selectedAns = useRef([0, 0, 0, 0, 0, 0, 0]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<App selectedAns={selectedAns} questions={questions} />} />
                <Route path="/answers" element={<Solutions selectedAns={selectedAns} questions={questions} />} />
            </Routes>
        </Router>
    )
}

export default Main