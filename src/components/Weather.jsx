import React from 'react';



export default function Weather() {
  return (
    <div>
      <div id="flashcards">
        <img id="sunny" src={require("/Users/Tatsu/SEI/project-2/src/components/images/sunny.png")} alt="" />
        <img id="rainy" src={require("/Users/Tatsu/SEI/project-2/src/components/images/rainy.png")} alt="" />
        <img id="cloudy" src={require("/Users/Tatsu/SEI/project-2/src/components/images/cloudy.png")} alt="" />
        <img id="snowy" src={require("/Users/Tatsu/SEI/project-2/src/components/images/snowy.png")} alt="" />
        <img id="windy" src={require("/Users/Tatsu/SEI/project-2/src/components/images/windy.png")} alt="" />
      </div>

    </div>
  )
}