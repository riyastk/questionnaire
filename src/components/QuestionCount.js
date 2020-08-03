import React from 'react';

function QuestionCount({counter, total}) {
  return (
    <div className="questionCount">
      <span>{counter}</span> / <span>{total}</span>
    </div>
  );
}

export default QuestionCount;