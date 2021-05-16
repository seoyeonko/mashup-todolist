import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #636e72;
  }
  .day {
    margin-top: 4px;
    font-size: 20px;
    color: #b2bec3;
  }
  .tasks-left {
    margin-top: 36px;
    font-size: 16px;
    font-weight: bold;
    color: #74b9ff;
  }
`;

function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>2021년 5월 31일</h1>
      <div className="day">월요일</div>
      <div className="tasks-left">할 일 2개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
