import React, { useState } from 'react'
import styled from 'styled-components';

const CalcWrapper = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  button {
    height: 50px;
    width: 50px;
  }
`

const NfButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

`



const Calculator = () => {


  /* Using useState to change the input displayed */
  const [input, setInput] = useState("");
  /* Calculator buttons without any function */
  var buttons = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  /* Creating html buttons and pushing it to the array */
  const allButtons = [];

  buttons.forEach((number) => {
    /* going through the numbers using forEach function */
    allButtons.push(
      <button onClick={(e) => {
        /* input set from the event */
        setInput(input + e.target.value);
      }}
        value={number}
        key={number}
      >
        {""}
        {number}
      </button>
    );
  });




  return (
    <CalcWrapper >
      {""}
      <div className="input">{input}</div>

      
        <NfButtons>
          {allButtons}
        </NfButtons>
        

    </CalcWrapper>


  )
}

export default Calculator
