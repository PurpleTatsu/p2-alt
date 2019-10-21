import React from 'react';

export default function Emotions(props) {
  console.log(props)
  return (
    <div id="emotions">
      <div id="emotions-flashcards">
        {props.flashcards.map(card => (
          <img id={card.name} name={card.soundEffect} className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/hungry.png?raw=true" onClick={props.handleClick} />
        ))}


        {/* <img id="sleepy" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/sleepy.png?raw=true" onClick={props.handleClick} />


        <img id="angry" onClick={props.handleClick} className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/angry.png?raw=true" alt="" />

        <img id="excited" onClick={props.handleClick} className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/excited.png?raw=true" alt="" />

        <img id="surprised" onClick={props.handleClick} className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/surprised.png?raw=true" alt="" />

        <img id="sad" onClick={props.handleClick} className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/sad.png?raw=true" alt="" />

        <img id="tired" onClick={props.handleClick} className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/tired.png?raw=true" alt="" />

        <img id="happy" onClick={props.handleClick} className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/happy.png?raw=true" alt="" /> */}

      </div>
    </div>
  )
}