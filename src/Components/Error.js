import React from "react";
import styled from "@emotion/styled";

const ErrorMessage = styled.p`
  background-color: #fb7676;
  padding: 1rem;
  color: #fff;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  font-family: "Bebas Neue", cursive;
  border-radius: 10px;
`;

const Error = ({ message }) => {
  return <ErrorMessage>{message}</ErrorMessage>;
};

export default Error;
