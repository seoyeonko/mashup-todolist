import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 16px 20px;
  padding-bottom: 48px;
  overflow-y: auto; // 콘텐츠가 넘쳤을 때
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="핸드폰 충전" done={true} />
      <TodoItem text="점심 먹기" done={true} />
      <TodoItem text="운동하기" done={false} />
      <TodoItem text="아이스크림 먹기" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;
