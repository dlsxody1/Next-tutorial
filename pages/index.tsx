import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../slices/counterSlice";
import { RootState } from "../store";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <Wrap>
      <div>{count}</div>
      <div style={{ display: "flex" }}>
        <Button onClick={() => dispatch(increment())}>+</Button>
        <Button onClick={() => dispatch(decrement())}>-</Button>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 300px;
  height: 300px;
  background-color: red;
  ${({ theme }) => theme.flexMixin("center", "center")}
  flex-direction: column;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: white;
  border: 1px solid black;
  ${({ theme }) => theme.flexMixin("center", "center")}
`;
