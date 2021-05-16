import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

const CircleButton = styled.button`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #74b9ff;
  border: none;
  color: #ffffff;

  &:hover {
    // mouse over
    background-color: #0984e3;
  }
  &:active {
    // mouse click
    background-color: #ff7675;
  }

  font-weight: bold;
  font-size: 32px;
  align-items: center;
  text-align: center;
`;
const InsertFromPositioner = styled.div``;
const InsertForm = styled.form``;
const Input = styled.input``;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  return (
    <>
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;
