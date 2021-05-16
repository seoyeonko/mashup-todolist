import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const Remove = styled.div`
  display: flex;
  color: #636e72;
  font-size: 24px;

  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: #ff7675;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center; // 수직 가운데 정렬
  padding: 12px 0px;

  /* TodoItemBlock에 커서가 있으면 Remove를 보이게 함 */
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #e9ecef;
  font-size: 24px;
  display: flex;

  align-items: center; // 수직 가운데 정렬
  justify-content: center; // 수평 가운데 정렬
  margin-right: 24px;
  cursor: pointer; // 손가락 커서

  ${(props) =>
    props.done &&
    css`
      border: 1px solid #74b9ff;
      color: #74b9ff;
    `}
`;

const Text = styled.div`
  flex: 1; // 빈공간 채우기
  font-size: 20px;
  color: #636e72;

  ${(props) =>
    props.done &&
    css`
      color: #e9ecef;
    `}
`;

function TodoItem({ id, done, text }) {
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
