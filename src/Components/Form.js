import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import useCoin from "../hooks/useCoin";
import useCrypt from "../hooks/useCrypt";
import Axios from "axios";

const Button = styled.button`
  margin-top: 20px;
  font-weight: 700;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2f3;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color ease 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #326ac0;
  }
`;

const Form = () => {
  //Crypt list state
  const [cryptList, saveCryptList] = useState([]);

  const CURRENTCIES = [
    { cod: "USD", name: "US Dollar" },
    // { cod: "NIO", name: "Cordoba" },
    { cod: "EUR", name: "Euro" },
    { cod: "GBP", name: "GB Pound" },
  ];

  // Using useCoin
  const [coin, SelectCoin] = useCoin("Select your currency: ", "", CURRENTCIES);
  // END OF Using useCoin

  // Using useCrypt
  const [crypt, SelectCrypt] = useCrypt("Select your cryptcoin: ","",cryptList);
  // END OF Using useCrypt

  //Query to API
  useEffect(() => {
    const requestAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const result = await Axios.get(url);
      saveCryptList(result.data.Data);
    };

    requestAPI();
  }, []);

  return (
    <form>
      <SelectCoin />

      <SelectCrypt />

      <Button type="submit">Calculate</Button>
    </form>
  );
};

export default Form;
