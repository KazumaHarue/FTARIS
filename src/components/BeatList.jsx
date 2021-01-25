import React, { useState } from 'react';
import '../styles/style.css';
import Header from './Header.jsx';

const BeatList = (props) => {
  let iconClass = "far fa-play-circle";
  const [display, btnClick] = useState(false);
  if (display === true) {
    iconClass = "far fa-stop-circle";
  } else {
    iconClass = "far fa-play-circle";
  }
  return (
    <div className="beatlist">
      {/* TODO: <Header /> 戻るボタンの表示非表示をpropsで受け取る */}
      <div className="provider"><p>ゆの(NA3TY)</p></div>
      <div className="beat">
        <i className={iconClass} onClick={() => btnClick(!display)}></i>
        <p className="name">BPM94(戦国MCBATTLE提供)</p>
      </div>
    </div>
  )
};

export default BeatList;