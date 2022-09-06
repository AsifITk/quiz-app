import "./App.css";
import Questions from "./components/Questions";
import Answers from "./components/Answers";
import { useEffect, useRef, useState } from "react";
import Timer from "./components/Timer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";

function App({ selectedAns, questions }) {
  let goTO = useNavigate();
  let qusTime = useRef(null);
  let myInterval = useRef(null);
  const [colors, setColors] = useState(["black", "black", "black", "black"]);
  // setTimeout(() => {
  //   let qusNo.current = qusNo.current + 1;
  //   setqusNo.current(qusNo.current);
  //   setColors(["black", "black", "black", "black"]);
  // }, 2000);

  // a function that rerendes the timer
  const [width, setWidth] = useState(100);
  const qusNo = useRef(0);

  useEffect(() => {
    myInterval.current = setInterval(() => {
      setWidth((w) => w - 20);
    }, 400);

    qusTime.current = setTimeout(() => {
      qusNo.current = qusNo.current + 1;

      setColors(["black", "black", "black", "black"]);
    }, 2000);


    return () => {
      clearInterval(myInterval.current);
      clearTimeout(qusTime.current);
      setWidth(100);
    };
  }, [qusNo.current]);

  function handleClick(e) {
    console.log(myInterval.current);
    clearTimeout(qusTime.current);
    clearInterval(myInterval.current);

    e.preventDefault();
  }

  let [selected, setSelected] = useState(0);

  async function handleColor(code) {

    if (code === 1 && questions[qusNo.current][1][1] === 1) {
      setColors(["green", "black", "black", "black"]);
    } else if (code === 1 && questions[qusNo.current][1][1] === 0) {
      setColors(["red", "black", "black", "black"]);
    } else if (code === 2 && questions[qusNo.current][2][1] === 1) {
      setColors(["black", "green", "black", "black"]);
    } else if (code === 2 && questions[qusNo.current][2][1] === 0) {
      setColors(["black", "red", "black", "black"]);
    } else if (code === 3 && questions[qusNo.current][3][1] === 1) {
      setColors(["black", "black", "green", "black"]);
    } else if (code === 3 && questions[qusNo.current][3][1] === 0) {
      setColors(["black", "black", "red", "black"]);
    } else if (code === 4 && questions[qusNo.current][4][1] === 1) {
      setColors(["black", "black", "black", "green"]);
    } else if (code === 4 && questions[qusNo.current][4][1] === 0) {
      setColors(["black", "black", "black", "red"]);
    }
    // !user selected s\answers
    // let tem = [questions[qusNo.current][code][0], qusNo.current];
    console.log(qusNo.current)
    selectedAns.current[qusNo.current] = code;
    // console.log(selectedAns.current);


    clearTimeout(qusTime.current);
    clearInterval(myInterval.current);
    setTimeout(() => {
      qusNo.current = qusNo.current + 1;
      // setqusNo.current(qusNo.current);
      setColors(["black", "black", "black", "black"]);
    }, 3000);
  }

  // if (qusNo.current < questions.length) {
  if (qusNo.current === questions.length) {
    clearInterval(myInterval.current);
    clearTimeout(qusTime.current);

    goTO("/answers");
    return
  }
  return (
    <div className="App">
      <div className="container">
        <Questions className="qus" text={questions[qusNo.current][0]} />
        <div className="answers">
          <Answers
            // onClick={handleClick}
            setclr={setColors}
            colors={colors[0]}
            code={1}
            handleColor={handleColor}
            date-user="1"
            text={questions[qusNo.current][1]}
          />
          <Answers
            // onClick={handleClick}
            setclr={setColors}
            colors={colors[1]}
            code={2}
            handleColor={handleColor}
            date-user="0"
            text={questions[qusNo.current][2]}
          />
          <Answers
            // onClick={handleClick}
            setclr={setColors}
            colors={colors[2]}
            code={3}
            handleColor={handleColor}
            date-user="0"
            text={questions[qusNo.current][3]}
          />
          <Answers
            // onClick={handleClick}
            setclr={setColors}
            colors={colors[3]}
            code={4}
            handleColor={handleColor}
            date-user="0"
            text={questions[qusNo.current][4]}
            key={questions[qusNo.current][4][0]}
          />
        </div>
      </div>
      <Timer lineWidth={width} key={qusNo.current} />
      {/* <Timer width={width} key={questions[qusNo.current]} />` */}
    </div>
  );
  // } else {
  //   return (
  //     <div className="App">
  //       <h1>Answers</h1>{" "}
  //     </div>
  //   );
  // }
}

export default App;
