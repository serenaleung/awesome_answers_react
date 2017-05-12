import React from 'react';

// we expect that the QuestionSummary component
// will be passed a question object for its props
function QuestionSummary (props) {
  const handleClick = event => {
    event.preventDefault();
    console.log(`Question id: ${props.id}`);
    props.onClick(props.id)
  }

  return (
    <div
      style={{marginBottom: '10px'}}
      className="QuestionSummary">
      <a onClick={handleClick} href>{props.title}</a>
    </div>
  );
}

export default QuestionSummary;
