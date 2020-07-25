import React from 'react';
import styled from "@emotion/styled";

const ResultContainer = styled.div`
  display: block;
  margin-top: 3rem;
  
`;

const ResulItem = styled.p`
  color: #fff;
  font-size: 1.2rem;
  font-family: Helvetica, Arial, sans-serif;

  &.main{
    font-family: 'Bebas Neue', cursive;
    font-size: 2.5rem;
    /* text-align: left; */
  }
`;

const Trade = ({result}) => {
  //Verify that the result object in not empty
  if(Object.keys(result).length === 0) return null;

  // console.log(result);
  return (
    <ResultContainer>
      <ResulItem className="main">The price of the {result.FROMSYMBOL} is: {result.PRICE} </ResulItem>

      <ResulItem>Highest price of the day: {result.HIGHDAY} </ResulItem>
      <ResulItem>Lowest price of the day: {result.LOWDAY} </ResulItem>
      <ResulItem>Variation in the last 24hrs: {result.CHANGEPCT24HOUR} </ResulItem>
      <ResulItem>Last Update: {result.LASTUPDATE} </ResulItem>
    </ResultContainer>
  );
}
 
export default Trade;