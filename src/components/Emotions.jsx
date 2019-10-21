import React from 'react';




export default function Emotions(props) {
  return (
    <div id="emotions">
      <div id="emotions-flashcards">
        {/* {props.flashcards.map(flashcard => ( */}
        <button id="hungry"><img className="flashcard" src={require("/Users/Tatsu/SEI/project-2/src/components/images/hungry.png")} alt="" onClick={props.handleClick} /></button>
        <img id="sleepy" className="flashcard" src={require("/Users/Tatsu/SEI/project-2/src/components/images/sleepy.png")} alt="" />
        <img id="angry" className="flashcard" src={require("/Users/Tatsu/SEI/project-2/src/components/images/angry.png")} alt="" />
        <img id="excited" className="flashcard" src={require("/Users/Tatsu/SEI/project-2/src/components/images/excited.png")} alt="" />
        <img id="surprised" className="flashcard" src={require("/Users/Tatsu/SEI/project-2/src/components/images/surprised.png")} alt="" />
        <img id="sad" className="flashcard" src={require("/Users/Tatsu/SEI/project-2/src/components/images/sad.png")} alt="" />
        <img id="tired" className="flashcard" src={require("/Users/Tatsu/SEI/project-2/src/components/images/tired.png")} alt="" />
        <img id="happy" className="flashcard" src={require("/Users/Tatsu/SEI/project-2/src/components/images/happy.png")} alt="" />
        )
       )
       }
      </div>
    </div>
  )
}