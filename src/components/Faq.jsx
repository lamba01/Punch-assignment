import React from 'react';
import '../styles/faq.css'

const questions = [
  "I want to work part-time, is that possible?",
  "How long are the average projects?",
  "How does the payment work?",
  "How much can I earn?",
  "I want to work part-time, is that possible?",
  "How long are the average projects?",
  "How long are the average projects?",
  "How much can I earn?"
];

function Faq() {
  return (
    <div className='faq-container'>
      <h1>Frequently asked questions</h1>
      {questions.map((question, index) => (
        <div className='questions' key={index}>
          <p>{question}</p>
        </div>
      ))}
    </div>
  );
}

export default Faq;
