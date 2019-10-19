import React from 'react';

export default function Footer() {
  return (
    <div id="footer">
      <div id="stickers">
        <img src={require("/Users/Tatsu/SEI/project-2/src/components/images/line-stickers1.png")} alt="Line1" />
        <img src={require("/Users/Tatsu/SEI/project-2/src/components/images/line-stickers2.png")} alt="Line2" />
        <img src={require("/Users/Tatsu/SEI/project-2/src/components/images/line-stickers3.png")} alt="Line3" />
      </div>
      <h2>Copyright ©︎ 2019 L.Hoppy!
All rights reserved.</h2>
    </div>
  )
}