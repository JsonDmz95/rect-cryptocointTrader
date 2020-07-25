import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Axios from "axios";

import image from "./cryptocoins.png";
import Form from "./Components/Form";
import Trade from "./Components/Trade";
import Spinner from "./Components/Spinner";

// Sttyled Components
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

// END OF Sttyled Components

function App() {
  const [coin, updateCoin] = useState("");
  const [crypt, updateCrypt] = useState("");
  const [result, updateResult] = useState({});
  const [loading, updateLoading]= useState(false);

  useEffect(() => {
    if (coin === "") return;

    const requestAPI = async () => {
      let url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypt},ETH&tsyms=${coin}`;

      let answer = await Axios.get(url);
      // console.log(answer.data.DISPLAY[crypt][coin]);
      updateLoading(true);

      setTimeout(() => {
        updateResult(answer.data.DISPLAY[crypt][coin]);
        updateLoading(false);
      }, 1500);

      
    };

    requestAPI();
  }, [coin, crypt]);

  return (
    <Container>
      <div>
        <Image src={image} alt="Criptocoins image" />
      </div>
      <div>
        <Heading>Quote crypt-coins instantly</Heading>
        <Form updateCoin={updateCoin} updateCrypt={updateCrypt} />
        
        {loading ? <Spinner /> : <Trade result={result} />}
        
      </div>
    </Container>
  );
}

export default App;
