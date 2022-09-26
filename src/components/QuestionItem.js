import React from "react";

function QuestionItem({ question}) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete (event){
  fetch(`http://localhost:4000/questions/${id}`,{
    method:"DELETE",
  })
  // .then((res)=>res.json())
  // .then(() => console.log(question));
  }
  function changeAnswer(event){
    // const answer = event.defaultValue;
    const correctIndex = parseInt(event.target.value)
    fetch (`http://localhost:4000/questions/${id}`,{
      method: "PATCH",
      headers: {"Content-Type": "application/json",
      Accept: "application/json",
  },
  body: JSON.stringify({correctIndex}),
  })
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={changeAnswer}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
