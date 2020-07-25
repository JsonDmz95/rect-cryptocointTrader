import React, { Fragment, useState } from "react";
import styled from '@emotion/styled';

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Combo = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCoin = (label, initialState, options) => {
  // Custom Hook state
  const [state, updateState] = useState(initialState);
  // END OF Custom Hook state

  const Select = () => (
    <Fragment>
      <Label>{label}</Label>
      <Combo
        onChange={e => updateState(e.target.value)}
        value={state}
      >
        <option value="">- Select a currency -</option>
        {options.map((option) => (
          <option key={option.cod} value={option.cod}>
            {option.name}
          </option>
        ))}
      </Combo>
    </Fragment>
  );

  return [state, Select, updateState];
};

export default useCoin;
