

import React, { useState } from 'react'
import styled from 'styled-components';


const CalcWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  button {
    height: 50px;
    width: 50px;
    border:1px solid #000;
    transition: 0.1s all ease-in-out;
    :active {
      transform: scale(0.90);
    }
  }
  .input {
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    background: #000;
    color: #fff;
    p {
      padding-left: 20px;
    }
  }
  .first-row {
    width: 100%;
    button {
      width: 50%;
      height: 40px;
      background: #fca311;font-weight:700;
    }
  }
  .allButtons {
    display: flex;
  }
  .equalButton {
    background: #ffc6ff;
  }
`
const NfButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const FuncButtons = styled.div`
  display: flex;
  flex-direction: column;
  button {
    background-color: #94d2bd;
  }
`
const Calculator = () => {
  /* Using useState to change the input displayed */
  const [input, setInput] = useState("");
  /* Calculator buttons without any function */
  var buttons = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "."];
  /* Creating html buttons and pushing it to the array */
  const allButtons = [];

  buttons.forEach((item) => {
    /* going through the evals using forEach function */
    allButtons.push(
      <button onClick={(e) => {
        /* input set from the event */
        setInput(input + e.target.value);
      }}
        value={item}
        key={item}
      >
        {" "}
        {item}
      </button>
    );
  });
  return (
    <CalcWrapper >
      {" "}
      <div className="input"><p>{input}</p></div>
      <div className="first-row">
        {/* delete button -> when clicked, last eval from the input is deleted using substring method that extracts characters between two positions --> in brackets --> 0 and whatever the lenght of the input is*/}
        <button onClick={() => setInput(input.substr(0, input.length - 1))}>delete</button>
        {/* clear button -> when clicked, it deletes all from the input by changing useState to nothing */}
        <button onClick={() => setInput("")} value="">C</button>
      </div>
      <div className="allButtons">
        <NfButtons>
          {allButtons}
          {/* = button using eval function that is evil */}
          <button className="equalButton"
            onClick={(e) => {
              try {
                setInput(
                  String(this.eval(input))
                );
              } catch (e) {
                alert(e);
              }
            }}
            value="="
          >=</button>
        </NfButtons>
        <FuncButtons>
          <button onClick={(e) => setInput(input + e.target.value)} value="+">+</button>
          <button onClick={(e) => setInput(input + e.target.value)} value="-">{" "}-{" "}</button>
          <button onClick={(e) => setInput(input + e.target.value)} value="*">{" "} *</button>
          <button onClick={(e) => setInput(input + e.target.value)} value="/">{" "} /</button>
        </FuncButtons>
      </div>
    </CalcWrapper>
  )
}

export default Calculator
