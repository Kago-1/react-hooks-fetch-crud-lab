import React from "react";
import {useState ,useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [query,setQueries] = useState([])

useEffect(()=>{
  fetch(`http://localhost:4000/questions`)
  .then((res) => res.json())
  .then((data) => {setQueries(data)}
)},[])

const Questions =( query.map((item)=>{
  return <QuestionItem 
  key={item.id} question={item}
  />
}))

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{Questions}</ul>
    </section>
  );
}

export default QuestionList;
